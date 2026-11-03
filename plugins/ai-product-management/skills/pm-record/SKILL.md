---
name: pm-record
description: Step 05 of the AI Product Management workflow. Use after a batch ships or at the end of any working session, or when someone says "close the batch", "write the summary", "log this", "update the status", "write a handoff", or "we're stopping for today". Writes the run summary, log line, status update, new decision and question rows, and a handoff so the next session (or person) starts from the same picture.
---

# Step 05: Record and hand off

Close every batch and every session the same way, so nothing lives only in a conversation.

## Phase briefing (always first)

Before the first question or action in this step, brief the person, following `../../PHASE-BRIEFING.md` (at the plugin root). It covers the full and short versions, the check-in, and what to do when someone asks to go shorter. For this step:
- **Goal:** Make sure nothing lives only in this conversation.
- **What you'll ask:** Confirmation of what shipped, what's still open, and who picks up next.
- **Typical time:** 5–10 min. After each batch in the same session, the short briefing is enough.
- **What they'll have at the end:** A run summary, an updated status and log and, when work continues later, a handoff.

Wait for a yes before starting. During the step, give a progress check-in with the status map about every 30 minutes of working time (see "Progress check-ins" in `../../PHASE-BRIEFING.md`). When the step finishes, write its phase record automatically (see "Phase record" in the same file). If someone asks to skip or shorten this step, push back once, offer to keep going, come back later, or go shorter with the skipped items recorded, and then respect their choice. Approval gates never shorten.

## After a batch

1. **Run summary:** write `apm/runs/<date>-<batch>/SUMMARY.md` using `references/templates.md`. Include what shipped, the version or link, each acceptance criterion with its result, the reviewer's findings and what happened to each, what couldn't be checked and why, and anything left open.
2. **Ledger:** if the batch came from audit briefs, leave each brief at `in-build` in `apm/audit/LEDGER.md` and set the next step to a re-audit (`pm-audit`). Only the re-audit moves briefs to `verified-fixed` or `regressed`, so the builder never signs off its own fixes.
3. **Plan:** set the batch's status to `shipped` in `apm/plan/batches.md` and in the `_index.md` Batches table, and, if used, update progress and actual hours in `plan/project-plan.csv` (read actual hours from the ~~time tracker if the profile lists one).
4. **Decisions and questions:** add rows for anything decided or left unanswered during the batch. Answered questions get their answer and decision ID.
5. **Status:** update `apm/_index.md`: current step, last shipped batch with link to its summary, next batch, blocking questions. Set the next step to 04 Audit (`pm-audit`) when this batch produced the first screen or page people can use and nothing has been audited yet, when it was a fix batch, or when the next thing is a release. Otherwise the next batch in 03 Build.
6. **Log:** append one line to `apm/log.md`: date · batch · what shipped · what's open.
7. **Checking your result:** when the last Must slice ships (the first working version is in people's hands), write a short "Checking your result" note into the phase record and the handoff, and show it to the user. Use the template in `references/templates.md`. The plugin sets no reminder; checking is up to the user.

## At the end of a session

Every session ends here, whichever step it was in. Run this checklist and show it ticked:
1. Any batch that closed has its run summary, ledger, plan and log steps done (above).
2. New decisions and open questions from this session are in the CSVs.
3. New terms are in `CONTEXT.md`; new sources have inventory rows.
4. `_index.md` top lines and Steps table match the files.
5. One `log.md` line for the session.
6. A phase record in the records folder for every phase that finished this session ("Phase record" in `../../PHASE-BRIEFING.md`).
7. A handoff in `apm/handoffs/<date>-<topic>.md` (template in `references/templates.md`) whenever work will continue later or with someone else:
- Point to files by path; don't copy their contents.
- Say what a fresh reader would most likely get wrong (terms, earlier decisions, permissions).
- List the next step and which skill starts it.
- Leave out passwords, keys, personal data, and customer or business records.

## Tell the user

Three to five lines: what shipped, what's open and who it waits on, and the next step. Link the summary and the handoff. If the profile lists a ~~chat channel for updates, offer to post the same lines there; post only on a yes. When step 7 ran, end with the "Checking your result" note.

## Rules

- Record only what happened. A check that didn't run is reported as not run, with the reason.
- Never rewrite an old decision. Add a new row that supersedes it and set the old row's `status` to `superseded` (the only edit allowed).
- Never delete files in `apm/`.
