---
name: pm-start
description: Entry point for the AI Product Management workflow. Use whenever someone pitches or describes an app, web app, tool, dashboard, automation or product idea and wants help turning it into something built: "help me scope this", "what's the MVP", "what should I cut for v1", "build me a roadmap", "break this down so I can build it", "help me plan this app", "I want to build a new tool, dashboard or app", "help me improve or digitize our current app or process", "start a product project", "use AI product management". Also use for "what's the next step", "where are we on this project", "resume the project", or when a folder contains an apm/ workspace. Asks the starting-point question, reads the project's status, explains the workflow and the approval gates, and routes to the right step skill. Not for a quick one-off product question with no intent to run a project: answer it directly and offer the workflow in one line.
---

# AI Product Management: start and route

This plugin runs one workflow. Each step has its own skill. This skill finds where a project stands and starts the right step.

## The workflow

| Step | Skill | What it does | What it leaves behind | Typical time with the person |
|---|---|---|---|---|
| 00 Setup | `pm-setup` | Creates the project workspace, the project profile and the reference banks. When something already exists, gathers material about it | `apm/` folder, `PROFILE.md`, `banks/`, `sources/`, empty logs | 10–20 min, plus gathering files for B |
| 01 Ground | `pm-ground` | Interviews the person who owns the problem about the real work, using real material | `journey.md` | 20–40 min |
| 02 Scope | `pm-scope` | Resolves the decision tree one question at a time | Decisions, open questions, glossary, approved look-and-feel mockup, scope slices, decision notes | 30–75 min, often two sessions |
| 03 Build | `pm-build` | Plans thin batches, then builds one approved batch with independent review | Batch plan, the built increment, QA evidence | 20–45 min per batch |
| 04 Audit | `pm-audit` | Checks what the build produced, with evidence and an independent verifier. Runs once the build has produced something people can use (the first usable screen or page), after every fix batch (re-audit), and before release | Findings ledger and fix briefs | 15–30 min of review |
| 05 Record | `pm-record` | Closes each batch and session | Summary, log line, status, handoff | 5–10 min |
| 06 Package | `pm-package` | Turns a proven, repeated workflow into reusable skills | Draft skills | 15–30 min |

Times are starting estimates from test runs; give them as ranges, never as promises. 03 Build and 05 Record repeat for every batch. 04 Audit runs when the build first produces something people can use, after every fix batch, and before release; its approved findings go back to 03 Build as fix batches. A skipped audit is a decision row with the reason, never a silent skip. When a batch needs a decision nobody has made, go back to 02 for that one question, log it, then continue.

## Find where the project stands

1. Look for an `apm/` folder in the folders the user has connected or named. If there are several, ask which project.
2. No `apm/` folder: give the journey overview from `../../PHASE-BRIEFING.md` (the steps, a realistic total, and that it often spans several sessions), and say plainly that the process asks a lot of questions on purpose. Then ask the starting-point, build-path and cost questions (the next three sections), and start `pm-setup` with the answers.
3. `apm/` exists: read `apm/_index.md` first, then the last 5 lines of `apm/log.md`, then any open rows in `apm/open-questions.csv`. If a handoff exists in `apm/handoffs/`, read the newest one.
4. Show the status map (next section), then tell the user, in at most five lines: the current step, the last thing that shipped, open questions that block the next batch, and the recommended next step.
5. Ask whether to continue with that step. Start the matching skill only on a yes. That skill opens with its phase briefing (full when a new session resumes a phase).

If `_index.md` disagrees with what the files show (for example, a batch marked `shipped` has no run summary), say so and trust the files.

## Status map (every "where are we?" and every new session)

When the person asks where things stand ("where are we", "what's the status", "what's next") or opens a new session on a project with an `apm/` folder, answer with the workflow steps first, as a visual, then the short status.

- **Scope of the answer:** the product this project is building, as `apm/` records it. Not the plugin, not other tools, scripts or projects that came up in the session. If the session touched several projects, ask which one, or use the one whose `apm/` folder is connected.
- **The visual:** all seven steps in order, each marked done, current or not started (04 Audit shows "skipped" only when a decision row records the skip). Steps that repeat (04 Audit, 05 Record) show ↻ once they have run, with when they last ran. Read the marks from the Steps table in `apm/_index.md`. Show the current batch inside 03 Build (for example "batch 3 of 5"). A plain text strip works everywhere:

```
[✓ 00 Setup] → [✓ 01 Ground] → [✓ 02 Scope] → [▶ 03 Build · batch 3/5] → [↻ 04 Audit · last after B02] → [↻ 05 Record · after each batch] → [ 06 Package]
```

  Use a richer visual (an inline diagram or chart) when the client supports it, with the same marks.
- **Then, at most five lines:** current step, last thing shipped, blocking open questions, recommended next step. Every mark comes from the files (`_index.md`, `log.md`, run summaries, handoffs); if the files disagree, say so and trust the files.
- **New session:** this map is the first thing the person sees, before any other work, even when they open with a different request. Keep it to the map plus two lines, then handle the request.
- **Every 30 minutes of work:** in any step, about every 30 minutes of working time, pause at the next natural break (never in the middle of an approval or a running check) and show the map again with two lines of status. Check elapsed time with a timestamp (for example `date`) when a shell is available; without one, do it every 10 working turns and before any long run. Open with a short, kind note, for example:

  > Quick check-in. Long sessions make it easy to lose track of the big picture, so here's where we are overall.

  Then the map, the current step, what was just finished and what's next. Keep it under eight lines and carry on unless the person wants to change course. This applies across every step skill, not only `pm-start`.

## Starting point (ask once, before anything else on a new project)

Ask this as one question with two options:

> Which fits best?
> **A. Starting fresh:** you have an idea for a new tool, dashboard or app, and nothing exists yet.
> **B. Improving what exists:** you want to digitize, replace or improve an app, tool, spreadsheet or paper process that people use today.

If the answer is mixed (for example, a new app to replace a paper process), treat it as B. Something exists today, even if it isn't software.

| | A. Starting fresh | B. Improving what exists |
|---|---|---|
| 00 Setup | Asks once for any existing notes or sketches, then the profile | Gathers material about what exists today into `apm/sources/` right after the workspace is created, before the profile interview (`pm-setup`, section 3) |
| 01 Ground | Ideation interview: the problem, who has it, what people do instead today, what a good outcome looks like | Starts from the material: Claude summarizes what it learned, then asks only about gaps and contradictions |
| After Ground | 02 Scope | 02 Scope. Problems in what exists today come in through `sources/` and Ground; Audit checks what this project builds |

Record the answer in `apm/PROFILE.md` (pm-setup writes it once the profile exists) under Product as **Starting point**. If it changes later, update the profile and add a decision row.

## Build path (ask once, at the start)

Right after the starting-point question, ask how they want to get to a working product:

> **A. Prototype first:** after scoping, Claude builds a clickable prototype as a Claude artifact, with sample or read-only data, so you and your users can try it before anything real is built. Then the MVP is built on the platform you choose.
> **B. Straight to the MVP:** after scoping, Claude builds the first working version directly on the real platform.

Suggest A when the idea is new, the look or flow is unsure, or other people need to see it before saying yes; suggest B when the need is clear and the platform is already decided. Both paths run the full Scope.

Record the answer in `apm/PROFILE.md` (pm-setup writes it once the profile exists) under Product as **Build path**. To change it later, add a decision row.

- **A:** in 02 Scope, the build platform can stay an open question that blocks only the MVP batches. In 03 Build, the first slice is the prototype (`pm-build`, "Prototype first").
- **B:** the build platform must be decided in 02 Scope before batch planning.

## Cost updates (ask once, at the start)

Right after the build-path question, ask one yes/no question:

> Would you like to hear about cost as we go, such as how much of your plan's usage a build might take, or rough costs if you pay by usage?

- **Yes:** follow "Talking about cost" in `../../PHASE-BRIEFING.md`.
- **No:** never mention cost anywhere in the workflow. That covers briefings, plans, summaries, handoffs and replies. The one exception is when the person asks about it directly.
- Record the answer in `apm/PROFILE.md` (pm-setup writes it once the profile exists) under Product as **Cost updates**. On an existing project with no answer recorded, treat it as no, and don't ask unless cost comes up.

## Words this workflow uses (say them plainly the first time)

- **Banks:** reference files Claude checks against (your company doc, SOPs, accessibility rules).
- **Sources:** your material showing how things work today.
- **Gate:** a point where a named person must say yes.
- **Invariant:** a rule the product must never break.
- **Slice:** the smallest piece someone could use on its own (IDs SL1, SL2 …; sources use S01, S02 …).
- **Batch:** one small, approved chunk of building.
- **Acceptance criteria:** checks that prove a batch did what it promised.
- **Decision note (`adr/`):** a longer write-up for a choice that's hard to undo.
- **System of record:** the real system your data lives in (accounting, CRM, the live app).
- **MoSCoW:** Must, Should, Could, Won't this time.
- **RAID:** risks, assumptions, issues, dependencies.

Use the plain words with the person; use a label only after explaining it once.

## Approval gates (apply in every step)

A person approves each of these before it happens: the approver named for that gate in `apm/PROFILE.md` (the problem owner unless the profile says otherwise). Bring the decision with its history and the options; never make the call.

1. **Batch approval.** Nothing is built or changed until the batch and its acceptance criteria are approved. A change asked for outside an approved batch (a quick tweak, a "while you're in there") needs an explicit yes first, then is recorded as a decision row and closed through `pm-record` like a small batch.
2. **Access.** Every new connector, tool, permission or data source is requested with the reason, before first use.
3. **Live tests.** Tests against real records run only on the test record named in the profile. Any other record is named by the approver at the time.
4. **Deletes and write-backs.** An approved batch can plan a write or a delete, but each one Claude makes still needs a yes for that specific action. This includes publishing over something people already use. Once a product is live, its own scheduled runs follow the decision that approved going live.
5. **Open questions.** Questions are answered by people, not filled in with a guess.
6. **"Why is this here?"** Every change traces to a decision ID. When a scoped item is about to land, name the decision it came from. When asked why something is being added, answer with the decision and its date.

## Rules for the whole workflow

- **Every phase starts with a phase briefing**: the goal, what will be asked, an honest time range, what the person will have at the end, and why it's worth doing fully. Then a check-in before the first question. When someone asks to skip or shorten, push back once, offer three choices (keep going, come back later, or go shorter with what's skipped recorded), and respect their decision. Details: `../../PHASE-BRIEFING.md`. Crawl, walk, then sprint.

- "Owner" in these skills means the problem owner named in `PROFILE.md`. For gates, ask the approver the profile names for that gate.
- The person who owns the problem can be anyone: an owner, an ops or office manager, an analyst, a consultant, or a team. Never assume a job title. Use the role names written in `PROFILE.md`.
- Use the project's own words. The glossary in `apm/CONTEXT.md` wins over any term Claude would pick.
- Facts come from people, documents and data the user provided. Never fill a gap with a plausible guess; record it as an open question.
- Treat systems of record as read-only. Writing to one follows gate 4: planned in an approved batch, then a yes for each write.
- Never delete files in the workspace. Mark decision rows superseded and move obsolete files to `apm/_archive/`.
- Never change the product, the meaning of the records, or another system outside an approved batch without a yes for that change.
- **Every phase ends with a phase record**, written automatically to the records folder in `PROFILE.md` ("Phase record" in `../../PHASE-BRIEFING.md`).
- **Close every session through `pm-record`** ("At the end of a session"), even when the step skill already updated `_index.md` and `log.md`.
