---
name: pm-build
description: Step 03 of the AI Product Management workflow. Use when someone says "plan the batches", "build the next batch", "build slice SL1", "start building", "fix the approved findings", or "continue the build". Plans thin batches with acceptance criteria and gets them approved, then builds one approved batch at a time through an eight-step loop that ends with an independent reviewer who must reproduce every bug before it counts.
---

# Step 03: Build

Build in thin, approved batches. Each batch goes through the same eight steps, and an independent reviewer checks it before it ships.

## Phase briefing (always first)

Before the first question or action in this step, brief the person, following `../../PHASE-BRIEFING.md` (at the plugin root). It covers the full and short versions, the check-in, and what to do when someone asks to go shorter. For this step:
- **Goal:** Build one thin, approved batch at a time, each checked by an independent reviewer before it ships.
- **What you'll ask:** Approval of the batch plan and its acceptance criteria, answers to any blocking question, and your review of the result.
- **Typical time:** 20–45 min per batch, including review and approval; most projects run several batches. Use the short briefing for later batches in the same session.
- **What they'll have at the end:** The built increment, QA evidence, and a clear list of what passed and what's open.

Wait for a yes before starting. During the step, give a progress check-in with the status map about every 30 minutes of working time (see "Progress check-ins" in `../../PHASE-BRIEFING.md`). When the step finishes, write its phase record automatically (see "Phase record" in the same file). If someone asks to skip or shorten this step, push back once, offer to keep going, come back later, or go shorter with the skipped items recorded, and then respect their choice. Approval gates never shorten.

## Load first

`apm/PROFILE.md` (invariants, gates, test setup), `apm/CONTEXT.md`, active rows of `apm/decisions.csv`, open rows of `apm/open-questions.csv`, the scope doc for the slice, `apm/audit/LEDGER.md` if briefs come from an audit, `apm/plan/`, and the latest run summary.

## A. Plan batches (when no approved batch is waiting)

Follow `references/batch-plan.md`:
1. Cut the next slice (or the approved fix briefs from 04 Audit) into batches small enough to review in one sitting.
2. Before presenting the plan, check each criterion against the pinned banks and the slice's look-and-feel decisions, and list any bank criterion the batch must meet by its ID. Give each batch acceptance criteria, the decision IDs it rests on, the parts it will change, and what it must not change. For a product people look at, the first batch builds the main screen to match the approved look-and-feel mockup (`apm/scope/mockups/`) and, for an app, the intended feeling and key moments recorded as decisions. No placeholder screens that ignore the mockup. If no mockup was approved, stop and hand over to `pm-scope` ("Look and feel") first.
3. Check `open-questions.csv` for rows whose `blocks` names this batch or the slice it comes from. Answer it first (hand over to `pm-scope` for that one question) or log a decision to build around it.
4. Update the project plan, change orders and risk log in `apm/plan/` if the project uses them. If the profile lists a ~~project tracker and the approver wants it, create one work item per approved batch there (a write to that tool, so it follows the access gate).
5. Present the batch plan. **Stop until the batch approver named in `PROFILE.md` approves it.** Record the approval as a decision row. If the batch is small enough for a self-review (see step 6), say so in the plan so the approval covers it. Set the batch to `approved` in `plan/batches.md` and the `_index.md` Batches table; set it to `built` after build-loop step 7.

## Prototype first (build path A)

When the profile's **Build path** is A, the first slice is a clickable prototype, built and reviewed before any MVP batch:
1. Build it as a Claude artifact from the approved look-and-feel mockup and the scoped jobs, with sample data or read-only data, clearly labelled "Prototype". It never writes to a system of record.
2. Plan it as normal batches (approval, acceptance criteria, independent review), usually one or two.
3. **Prototype review:** the problem owner, and ideally one or two real users, try it on the main jobs. Collect what worked, what confused them and what's missing, then record the outcome as a decision row: go to the MVP as scoped, change the scope first (hand over to `pm-scope`), or stop.
4. Before the first MVP batch, the build platform must be decided (if it was left open in Scope, settle it now through `pm-scope`). The MVP is then built on that platform, reusing the prototype's approved layout and flow.

On build path B, skip this section.

## B. Build one approved batch

Run the eight steps in `references/build-loop.md`, in order, without skipping:

1. **Scope pass:** if the batch comes from audit briefs, set each brief to `in-build` in `apm/audit/LEDGER.md`. Re-read the decisions the batch rests on. If anything about to land isn't covered by a decision, stop and ask. When a scoped item is about to land, tell the owner which decision it came from.
2. **Exact edits:** change only what the batch names. Prefer scripted, repeatable edits (a script that makes counted replacements, a formula written once and filled) over hand edits. Keep the previous version.
3. **Acceptance tests:** one check per acceptance criterion, run against the built version. Save the output.
4. **Layout and accessibility:** for screen-based products, run the harness (see `references/harness/README.md`; the script is installed at `~/pm-harness/check-page.js`) at desktop, phone and 320 px widths in both color schemes, and compare with the last run. For other types, use the checks in `references/build-loop.md`, section "Test setup by product type".
5. **Contract check:** compare against the invariants and the last version. No new connector calls, writes, permissions, libraries or colors that the batch didn't approve.
6. **Independent review:** launch a fresh subagent with `references/reviewer-brief.md`. It receives the diff, the scope and the criteria, not your conclusions, and must reproduce each bug it reports with a test or step-by-step evidence.
7. **Fix and re-check:** verify each reported finding yourself. Fix the confirmed ones, then re-run the reviewer's own tests. Record any finding you judged not reproducible, with the reason.
8. **Publish:** only after 1–7 pass. If publishing replaces something people already use, or writes to a system of record, ask for a yes first (gate 4). Then hand over to `pm-record` to close the batch.

The independent review in step 6 is skipped only when the approved batch plan says "self-review" for that batch. Say so in the run summary.

## Gates in this step

Approvers are the people named for each gate in `PROFILE.md`.

- No batch is built without approval.
- Ask before using any new connector, tool, permission or library, and say which decision calls for it. If none does, it's a new question for the approver.
- Live tests run only on the test record named in the profile; any other record is named by the approver at the time.
- Never delete data or write to a system of record without a yes for that specific action, even inside an approved batch.
- If the reviewer or a test shows the batch would break an invariant, stop and bring the conflict to the approver.
- Never say a live check passed when it couldn't be run. Say what ran and what didn't.
