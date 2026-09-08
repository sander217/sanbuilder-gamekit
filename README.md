# Sanbuilder GameKit

GameKit is an optional capability pack for [Sanbuilder](https://github.com/sander217/sanbuilder). It teaches the connected Design Harness how to take an H5 mobile game from fuzzy prompt to evaluated concepts, a specified core loop, an approved playable prototype, production implementation, and device-focused QA.

GameKit does not fork or bundle the core Harness. Install both plugins in the same agent client, connect the product repository to Sanbuilder, and use:

```text
Use the connected Design Harness and GameKit.

Design an H5 mobile game from this brief. Explore three playable directions first; do not implement until I approve one exact proposal.
```

## What GameKit adds

- a game-specific skill that composes with the core approval pipeline
- schemas for game concepts, game loops, playable prototypes, and H5 QA reports
- mobile-browser acceptance checks for input, orientation, safe areas, performance, audio, lifecycle, accessibility, and recovery
- a capability-pack declaration that lets the coordinator map game artifacts into the core run

Brand, product, adapter, taste, memory, approval, product writes, PRs, and Figma grants remain owned by Sanbuilder core. GameKit stores no MCP credentials and writes no product until the core proposal gate passes.

## Validate

```sh
npm ci
npm test
```

This is a generated public distribution. Make changes in the authoring source, then republish the pack.
