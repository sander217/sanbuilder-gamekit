#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import YAML from "yaml";

const root = process.cwd();
const schemaPaths = [
  "schemas/game-concept.schema.json",
  "schemas/game-loop.schema.json",
  "schemas/playable-prototype.schema.json",
  "schemas/h5-game-qa.schema.json",
];

const readJson = async (relativePath) => JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
const codex = await readJson(".codex-plugin/plugin.json");
const claude = await readJson(".claude-plugin/plugin.json");
const capabilityPack = YAML.parse(await readFile(path.join(root, "config/capability-pack.yml"), "utf8"));

assert.equal(codex.name, "sanbuilder-gamekit");
assert.equal(claude.name, codex.name);
assert.equal(claude.version, codex.version);
assert.equal(capabilityPack.extends.plugin, "design-harness-agent");
assert.equal(capabilityPack.extends.minimumVersion, "0.2.0");

const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
for (const relativePath of schemaPaths) ajv.compile(await readJson(relativePath));

console.log("Sanbuilder GameKit is structurally valid.");
