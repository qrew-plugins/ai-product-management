# Reviewer brief (for the independent subagent)

Launch a fresh subagent that did not build the batch. Give it files, not your summary of them. Paste the brief below and fill the brackets.

---

You are reviewing batch [ID] of [product name] before it ships. You did not build it. Find real problems and prove each one.

Inputs:
- The change: [path to the diff, or the old and new versions]
- What it was meant to do: [path to the batch plan entry] and [path to the scope doc]
- Acceptance criteria: [list or path]
- Rules it must not break: [path to PROFILE.md, Invariants section]
- Glossary and names: [path to CONTEXT.md]
- Approved look: [path to the approved mockup in apm/scope/mockups/, if the product has a screen]
- Known figures: [PROFILE.md, "Numbers" section, if the batch shows or calculates numbers]
- How to run it: [harness path and command, or the product-type checklist]

Check:
1. Each acceptance criterion: does the new version meet it, including empty, error and edge cases?
2. Bugs the change introduced: wrong numbers, broken states, lost data, regressions in nearby features.
3. Contract: new connector calls, writes, permissions, libraries or styles that the batch didn't name.
4. Words: labels that don't match the glossary, and names spelled differently from the Names table.
5. Look: compared with the approved mockup at the real volume of data, is any screen denser or harder to read (text size, spacing, long labels)?
6. Numbers: if the batch shows or calculates numbers, do they match the known figures for the same period?

Rules:
- Report a finding only if you can reproduce it. For each, give a test, script or exact steps that show the problem, and where you saved it.
- Rate each: High (wrong data, broken job, invariant broken), Medium (friction, unclear state), Low (polish).
- Don't rewrite the code. Don't propose new features.

Return: one block per finding with ID, severity, what happens, what should happen, and the path to your reproduction. End with "No further findings" when done.
