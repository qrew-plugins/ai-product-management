---
name: pm-ground
description: Step 01 of the AI Product Management workflow. Use when someone wants to "walk through how the work happens today", "map the current process", "ground the project", "interview me about the workflow", or after pm-setup finishes. Interviews the person who owns the problem about the real job from start to finish, using their real boards, sheets and reports, and writes the journey doc.
---

# Step 01: Ground

Learn how the work really happens before deciding what to build. The output is `apm/journey.md`: the job stage by stage, where it hurts, and what a product could improve.

## Phase briefing (always first)

Before the first question or action in this step, brief the person, following `../../PHASE-BRIEFING.md` (at the plugin root). It covers the full and short versions, the check-in, and what to do when someone asks to go shorter. For this step:
- **Goal:** Understand how the work really happens before deciding what to build.
- **What you'll ask:** A lot of questions, one at a time: the job stage by stage, who does what, where time goes, where errors and workarounds happen, and the real examples behind it; how the numbers you rely on are defined; then how you'll know it worked, and optional checks at the end. When you've shared material, only the gaps it doesn't answer. On the lighter path, about 8 questions.
- **Typical time:** 25–45 min, sometimes more for a complex job.
- **What they'll have at the end:** journey.md: the job mapped stage by stage, the pain points, how you'll know it worked, and what a product could improve first.

Wait for a yes before starting, unless the person already asked to start this step; then go straight into the first question ("The briefing" in `../../PHASE-BRIEFING.md`). Open with the one-line status. During the step, give a progress check-in with the status map about every 30 minutes of working time (see "Progress check-ins" in `../../PHASE-BRIEFING.md`). When the step finishes, write its phase record automatically (see "Phase record" in the same file). If someone asks to skip or shorten this step, push back once, offer to keep going, come back later, or go shorter with the skipped items recorded, and then respect their choice. Approval gates never shorten.

## Before the first question

1. Read `apm/PROFILE.md`, `apm/CONTEXT.md` and every bank listed in the profile's Banks table.
2. Check **Starting point** in the profile.
   - **B. Improving what exists:** read `apm/sources/_inventory.md`, `apm/sources/_summary.md` and every source item. Open by showing the summary in a few lines and asking what is wrong or missing. After that, ask only about what the sources don't answer: gaps, contradictions, workarounds and the parts that live in people's heads. Never ask what a source already answers; confirm it instead ("S03 shows invoices are approved in the sheet. Still true?"). New material shared during the interview gets an inventory row first.
   - **A. Starting fresh:** run an ideation interview. Cover the problem and who has it, what people do today instead (even if it's manual or nothing), what a good outcome looks like (how they'll know it worked is asked once, in "What to cover"), and the smallest first version they would be happy with. Invite examples, sketches or tools they admire; save them to `apm/sources/` with inventory rows.
   - Either way, ask for the real material behind the work: the board, sheet, report, form or screen people use today. Real material beats a description; a description beats a guess.
3. Confirm in one message: whose work is being walked through, from which trigger to which finish line.

## How to interview

Follow `references/interview-rules.md` and "Asking questions" in `../../PHASE-BRIEFING.md`. The short version:
- One question at a time, each with a suggested answer the user can accept or correct. The ask comes first and ends with a question mark; plain words, no workflow labels.
- Repeat every short answer back in words before moving on ("Got it: ...").
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

### How the numbers are defined (when the product shows or calculates numbers)

Ask about the data, not only the flow of work: late answers here cause the most rework. Cover only the few numbers the product depends on, one question at a time:
- What unit is it in, and how is it worked out? (for example hours worked or hours billed, with or without a rate applied)
- When does each period cut off, and in what time zone? (Ask the time zone as part of the cutoff, never assume it.) Is a period labelled by its start date or its end date?
- Where does it come from, and when two sources disagree, which one wins?

Then ask for two or three figures the person already trusts, each with its value, period and source (for example last week's total for one person, from the report they use today). These are the known figures Build checks its numbers against.

Say plainly, once: Claude works with the data it's given and can't fix bad source data. If sources disagree, or the figures don't match later, expect some rework. Keep this to a few numbers: it's a check, not a data audit. Record the answers in the profile's Numbers tables. Anything about a number that wasn't asked or wasn't known (unit, cutoff, time zone, labelling, which source wins) becomes an open question, never a blank or an assumption in the table.

### A better day, and how you'll know it worked

Ask what a better day would look like, and which stage matters most to fix first.

Then ask how they'll know it worked, as plain questions, one message each:
- **A. Starting fresh:** "Once this is in use, what would tell you it's working?" Nothing exists yet to measure, so record the answer as **What you're hoping for**: a first guess, not a target. Never call it a goal, and never score it as pass or fail.
- **B. Improving what exists:** ask three separate questions:
  1. "Once the new version is in use, what would tell you it's working?"
  2. "Is there anything the current way already gets right that the new version must keep doing?" These are real requirements: record each as a decision row.
  3. "Is there anything you'd like it to get better at later, even if not in this version?" These go under **What you're hoping for**.

One or two answers is enough. Don't turn this into a measurement exercise. Write the answer to the profile's **How we'll know it worked** line.

## Before closing: optional checks

Ask these one at a time. Each is optional; a "no" skips it with nothing recorded against the person.

1. **Feedback from users (both paths):** "Do you have any feedback from the people who'll use this, such as comments, survey results, emails or complaints? If so, share it here." If they share it, save it to `apm/sources/` with an inventory row, and pull out only what touches the stages and problems already in the journey. Anything else goes in one "Parked" line in the journey doc, without discussion. Don't reopen the interview or chase new topics from it.
2. **Is it worth building? (path B only; on path A this is offered at the prototype review in `pm-build`):** "Before we scope the first working version, want to take 5 minutes to check whether it's worth building?" On a yes, ask three gut-check questions, one at a time. No cost math, no hours or wages:
   - "If this works, is it a small, medium or big difference for you?"
   - "Is there anything simpler that would get you most of the way: a better spreadsheet, a tool you could buy, a change in how the work is done?" You may name one or two options you noticed in this interview.
   - "You set [N hours] for this project. Knowing what you know now, is that still the right amount?" (If no time limit is recorded, ask instead: "How much of your time would you put into this before calling it?")

   Record the answer as a decision row: go, go smaller, or stop. You can recommend; the owner decides, and their choice stands. On "go smaller", suggest the lighter path if they're on the full one, or a lower time limit, and record what they choose.
3. **Hearing from someone else (only once this interview is finished):** if the profile names someone else who owns part of this work or handles one of its stages, ask: "Would it help to hear [name]'s side of the work directly? I can interview them about the stages they handle." On a yes, run the same interview with them for their stages only, and add what they say to the journey with their name.

**Lighter path:** about 8 questions in total: the job from trigger to finish (one or two questions), the biggest pain, how the numbers are defined when the product uses numbers (up to three: how the main number is worked out, when its period cuts off, in what time zone and how it's labelled, and two or three known figures; which source wins goes to open questions if not asked), how they'll know it worked (one question; on path B, only the first of the three), and what to fix first. The optional checks are still offered. Topics left unasked become open questions.

## Write the journey doc

Use `references/journey-template.md`. Every fact traces to something the user said or showed, or to a source ID (S01 …). Add:
- Improvements: each one tied to the stage it helps, with the user's own priority.
- A first build order, marked as a proposal until the user approves it.
- Facts about data and connectors that will shape the build (what can be read, what can't, how fresh it is).

Write new terms to `CONTEXT.md` and unanswered points to `open-questions.csv`. Its columns are `id,date,question,why_it_matters,blocks,owner,status,answer,decision_id`; IDs run Q01, Q02 …; new rows start `open`. Full formats: `../pm-scope/references/records-format.md`.

## Close

Show the journey doc. Ask what is wrong with it; expect one revision pass. When the user is satisfied, record the approved build order as a decision row. Then run "Before a phase closes" in `../../PHASE-BRIEFING.md`: list every question still open from this phase and settle each one (answer, leave open with its owner, or park) before closing. Update `_index.md` (next step: 02 Scope) and add a `log.md` line.

## Gates in this step

- The user is the only source of facts about their work. No invented numbers, names or steps.
- Ask before opening any system or file the user hasn't shared.
