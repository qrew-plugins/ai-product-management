---
name: pm-ground
description: Step 01 of the AI Product Management workflow. Use when someone wants to "walk through how the work happens today", "map the current process", "ground the project", "interview me about the workflow", or after pm-setup finishes. Interviews the person who owns the problem about the real job from start to finish, using their real boards, sheets and reports, and writes the journey doc.
---

# Step 01: Ground

Learn how the work really happens before deciding what to build. The output is `apm/journey.md`: the job stage by stage, where it hurts, and what a product could improve.

## Phase briefing (always first)

Before the first question or action in this step, brief the person, following `../../PHASE-BRIEFING.md` (at the plugin root). It covers the full and short versions, the check-in, and what to do when someone asks to go shorter. For this step:
- **Goal:** Understand how the work really happens before deciding what to build.
- **What you'll ask:** A lot of questions, one at a time: the job stage by stage, who does what, where time goes, where errors and workarounds happen, and the real examples behind it. When you've shared material, only the gaps it doesn't answer.
- **Typical time:** 20–40 min, sometimes more for a complex job.
- **What they'll have at the end:** journey.md: the job mapped stage by stage, the pain points, and what a product could improve first.

Wait for a yes before starting. During the step, give a progress check-in with the status map about every 30 minutes of working time (see "Progress check-ins" in `../../PHASE-BRIEFING.md`). When the step finishes, write its phase record automatically (see "Phase record" in the same file). If someone asks to skip or shorten this step, push back once, offer to keep going, come back later, or go shorter with the skipped items recorded, and then respect their choice. Approval gates never shorten.

## Before the first question

1. Read `apm/PROFILE.md`, `apm/CONTEXT.md` and every bank listed in the profile's Banks table.
2. Check **Starting point** in the profile.
   - **B. Improving what exists:** read `apm/sources/_inventory.md`, `apm/sources/_summary.md` and every source item. Open by showing the summary in a few lines and asking what is wrong or missing. After that, ask only about what the sources don't answer: gaps, contradictions, workarounds and the parts that live in people's heads. Never ask what a source already answers; confirm it instead ("S03 shows invoices are approved in the sheet. Still true?"). New material shared during the interview gets an inventory row first.
   - **A. Starting fresh:** run an ideation interview. Cover the problem and who has it, what people do today instead (even if it's manual or nothing), what a good outcome looks like and how they would know, and the smallest first version they would be happy with. Invite examples, sketches or tools they admire; save them to `apm/sources/` with inventory rows.
   - Either way, ask for the real material behind the work: the board, sheet, report, form or screen people use today. Real material beats a description; a description beats a guess.
3. Confirm in one message: whose work is being walked through, from which trigger to which finish line.

## How to interview

Follow `references/interview-rules.md`. The short version:
- One question at a time, each with a suggested answer the user can accept or correct.
- The user's words are the labels. New terms are proposed in `CONTEXT.md`, never slipped in.
- Push from general to specific: "I handle invoicing" becomes the recurring tasks, the tools, the hand-offs and how long each takes.
- "Not sure" is a valid answer. Record it as an open question.
- Every 8 to 10 questions, give a one-line status and carry on. When a 30-minute progress check-in is due, it replaces this line. Don't offer to wrap up; if the person asks, follow "When someone wants to go shorter" in `../../PHASE-BRIEFING.md`.

## What to cover

Walk the job in order. For each stage, capture:
- The trigger, the people involved, the tools and records touched, and how information moves between tools today (copied by hand, exported, synced, emailed). These hand-offs are the integration candidates Scope will decide on.
- What "done" looks like and how anyone knows.
- Where time goes, where errors happen, where people work around the system.
- Where the written process (if a bank holds one) differs from what really happens. Differences are findings; note each.

Then ask what a better day would look like, and which stage matters most to fix first.

## Write the journey doc

Use `references/journey-template.md`. Every fact traces to something the user said or showed, or to a source ID (S01 …). Add:
- Improvements: each one tied to the stage it helps, with the user's own priority.
- A first build order, marked as a proposal until the user approves it.
- Facts about data and connectors that will shape the build (what can be read, what can't, how fresh it is).

Write new terms to `CONTEXT.md` and unanswered points to `open-questions.csv`. Its columns are `id,date,question,why_it_matters,blocks,owner,status,answer,decision_id`; IDs run Q01, Q02 …; new rows start `open`. Full formats: `../pm-scope/references/records-format.md`.

## Close

Show the journey doc. Ask what is wrong with it; expect one revision pass. When the user is satisfied, record the approved build order as a decision row, update `_index.md` (next step: 02 Scope), and add a `log.md` line.

## Gates in this step

- The user is the only source of facts about their work. No invented numbers, names or steps.
- Ask before opening any system or file the user hasn't shared.
