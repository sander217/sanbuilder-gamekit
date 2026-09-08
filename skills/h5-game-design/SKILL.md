---
name: h5-game-design
description: Design, prototype, implement, and QA an H5 mobile or browser game through the connected Sanbuilder Design Harness. Use when a user asks for an H5 game, mobile web game, browser game, playable game concept, core loop, game prototype, or game-specific playtest and performance QA.
---

# H5 Game Design

Compose this capability pack with the installed `design-harness-agent`. The core Harness owns target resolution, research discipline, taste and memory, contract locking, proposal approval, product write authorization, QA recording, PRs, and optional Figma backup. Do not create a second run or bypass its gates.

## Confirm the game target

Resolve the brand, game product, repository adapter, environment, platform constraints, audience, session length, monetization constraints, content limits, and success measure through the core catalog. Refuse product delivery when the adapter is onboarding, reference-only, fictional, or not pinned to an exact commit.

Capture the required mobile-web envelope: supported browsers, minimum device class, orientation, pointer and touch input, safe-area behavior, offline/reconnect expectations, audio policy, asset budget, frame target, and accessibility expectations. Infer reversible details from evidence; ask only when a missing choice would change the game loop or implementation boundary.

## Explore playable directions

Use research for mechanics, onboarding patterns, retention risks, and comparable interaction—not as permission to clone a game. Use visual-reference tools for art-direction evidence only when connected. Keep MCP credentials in the client.

Normally produce three directions. They must differ materially in one or more of:

- core mechanic and player verb;
- session loop and failure/retry cadence;
- progression or reward structure;
- input model, spatial composition, or information hierarchy;
- difficulty curve and risk-reward behavior.

Art-style swaps do not count as distinct game directions. For each direction submit a `game-concept` artifact with its audience promise, mechanic, loop, progression, input, scope, evidence, risks, production cost, and testable hypothesis.

## Specify the selected loop

After human selection, define one `game-loop` artifact: player verbs, state machine, rules, scoring, spawn/difficulty model, tutorial, failure, retry, pause, lifecycle, audio, feedback, accessibility, persistence, telemetry boundaries, and deterministic test hooks.

Create a `playable-prototype` artifact only to test named hypotheses. Record its source digest, controls, target viewport, asset provenance, known shortcuts, performance budget, and playtest plan. A prototype is proposal evidence; it is not production truth and does not authorize product writes.

## Approval and implementation

Bind the core production proposal to the selected concept digest, game-loop digest, prototype digest, product base commit, affected scenarios, implementation scope, asset provenance, and acceptance criteria. Wait for explicit approval of that exact proposal.

Acquire the core `implementation` grant immediately before writing the resolved product repository. Reuse its architecture and design system where applicable. Keep timing, physics, randomization, and content data independently testable. Do not edit the Harness, GameKit, dependency caches, or any unselected product repository during delivery.

## H5 game QA

Run repository-native checks and produce `h5-game-qa` alongside core product QA. Test at minimum:

- first-play comprehension, primary loop, progression, failure, retry, pause, and recovery;
- touch target quality, gestures, keyboard/pointer fallbacks, orientation, safe areas, resize, and browser lifecycle;
- loading, background/resume, reconnect, storage failure, muted audio, reduced motion, and interruption states;
- declared FPS, input latency, memory, transfer-size, and long-session budgets on named target devices;
- focus, semantics, contrast, non-color cues, motion alternatives, and audio alternatives;
- deterministic rules, scoring integrity, exploit boundaries, asset licenses, and telemetry consent.

Any blocking failure stops PR advancement. Record skipped checks with reasons; never represent them as passed. Open a draft product PR only when requested and only through the core workflow. Durable taste or game-memory updates remain proposals until a human accepts them.
