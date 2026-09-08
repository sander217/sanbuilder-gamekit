import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import YAML from "yaml";

test("GameKit composes with the core rather than duplicating it", async () => {
  const capabilityPack = YAML.parse(await readFile(new URL("../config/capability-pack.yml", import.meta.url), "utf8"));
  assert.equal(capabilityPack.extends.plugin, "design-harness-agent");
  assert.deepEqual(Object.keys(capabilityPack.stages), [
    "concept-exploration",
    "loop-definition",
    "playable-prototype",
    "h5-game-qa",
  ]);
  await assert.rejects(readFile(new URL("../lib/coordinator.ts", import.meta.url)), { code: "ENOENT" });
});

test("the skill preserves approval and product-truth boundaries", async () => {
  const skill = await readFile(new URL("../skills/h5-game-design/SKILL.md", import.meta.url), "utf8");
  assert.match(skill, /Wait for explicit approval of that exact proposal/);
  assert.match(skill, /prototype is proposal evidence/i);
  assert.match(skill, /Any blocking failure stops PR advancement/);
});
