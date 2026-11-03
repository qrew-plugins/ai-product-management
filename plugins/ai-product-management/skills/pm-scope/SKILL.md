---
name: pm-scope
description: Step 02 of the AI Product Management workflow. Use when someone says "scope this", "interview me on this", "pressure-test the plan", "what do we need to decide", "answer the open questions", "we need a decision on X", or when a build batch hits an undecided question. Resolves the decision tree one question at a time and records numbered decisions, open questions, glossary terms, decision notes and scope slices.
---

# Step 02: Scope

Turn the journey and the owner's goals into decisions a build can rely on. Every branch of the decision tree ends in a numbered decision or a tracked open question.

## Phase briefing (always first)

Before the first question or action in this step, brief the person, following `../../PHASE-BRIEFING.md` (at the plugin root). It covers the full and short versions, the check-in, and what to do when someone asks to go shorter. For this step:
- **Goal:** Turn the journey into decisions the build can rely on. Every open branch ends in a numbered decision or a tracked open question.
- **What you'll ask:** Many questions, one at a time, each with a suggested answer you can accept or correct. Often 20–40 for a first scope. For anything people look at, this includes how it should look, and you'll review a mockup before anything is built.
- **Typical time:** 30–75 min, including the look-and-feel mockup review; larger products often take two sessions. A single question raised during a build takes a few minutes, so use the short briefing.
- **What they'll have at the end:** Numbered decisions, open questions, a glossary in your words, an approved look-and-feel mockup (for anything people look at), and scope slices ready to plan into batches.

Wait for a yes before starting. During the step, give a progress check-in with the status map about every 30 minutes of working time (see "Progress check-ins" in `../../PHASE-BRIEFING.md`). When the step finishes, write its phase record automatically (see "Phase record" in the same file). If someone asks to skip or shorten this step, push back once, offer to keep going, come back later, or go shorter with the skipped items recorded, and then respect their choice. Approval gates never shorten.

## Load first

Read `apm/PROFILE.md`, `apm/CONTEXT.md`, `apm/journey.md`, `apm/decisions.csv` (active rows), `apm/open-questions.csv` (open rows), everything in `apm/adr/`, the banks in the profile, and `apm/sources/_inventory.md` if it has rows. Never re-ask something a decision already settles; confirm it instead ("D07 says X. Still true?").

## Two entry modes

- **Full scope:** for a new improvement from the journey's build order. Work the whole tree for that improvement.
- **Single decision:** a build batch hit an undecided question. Settle only that question, log it, and hand back to `pm-build`.

## Run the interview

Follow `references/interview-rules.md`. For each branch:
1. Name the branch and why it matters for the build.
2. Ask one question with a suggested answer and the options.
3. When the answer depends on another branch, settle that one first.
4. Record the result immediately (below). Don't batch the writing up for later.

Topics a full scope usually needs: who uses it and for which job; what it shows or does; what it looks like (section "Look and feel" below, required for anything people look at); where it's built and what it connects to (section "Build platform and integrations" below); where its data comes from and how fresh it must be; what it must never do (new invariants); how success is checked; what is explicitly out of scope; which parts can ship first.

## Look and feel (any product people look at)

Required when the product has a screen: a dashboard, app, page, report or board. Functional answers don't say what it should look like, and people judge a product first by how it looks and reads. Settle this in scope, before any batch is planned. Skip it only for products nobody looks at (a script, a scheduled job), and record that as a decision row.

1. **Ask, one question at a time, each with a suggested answer** (same interview rules). Start with the questions for every product, then the ones for its type. A product can be both (an app with a reporting screen): ask both sets.

   **Every product people look at:**
   - Who uses it, how often, and on what (desk screen, laptop, phone, tablet in the field)?
   - Style: their brand colors and fonts, or one or two tools or sites they like the look of. Ask for screenshots or links and add them to `apm/sources/`.
   - Tone and density: calm and spacious, or dense and information-heavy?

   **Dashboard or report** (people read it to understand something):
   - The main board: which 3–5 things must they see at a glance, and what do they do next from there?
   - How each of those should show. Charts are the default for a dashboard: suggest a visual for every number (trend line, bar chart, status tile, gauge) and keep tables for drill-down detail. The person can still swap any one for a table or a plain number.

   **App or tool** (people use it to get something done; usually for others, such as staff, customers or clients). Charts are optional here: ask only if the app has a screen where people review numbers.
   - Intent: what is the person using it trying to get done, and what made them open it? What does "done" look like for them?
   - Feeling: what should they feel while using it (calm, confident, quick, in control, looked after), and what should they never feel (lost, rushed, judged, unsure whether it saved)?
   - First impression: what should someone think in the first 10 seconds of opening it?
   - Key moments: the two or three moments that matter most (signing in, the main task, finishing, an error), and how each should feel.
   - Who they are: how comfortable they are with technology, and anything that changes the design (one hand on a phone, gloves, poor signal, a busy front desk).
   - Voice: how it should talk to them (friendly and plain, formal, brief), in the owner's words.
   - Comparisons: an app or service whose feel they want to match, and one they want to avoid, and why.

2. **Show it before building it.** Make a quick look-and-feel mockup of the main screen (the main board for a dashboard, the main task screen for an app, and any other key screen) with sample data, clearly labelled as sample. When the direction is unclear, show two contrasting directions and ask which is closer. Save mockups in `apm/scope/mockups/`.
3. **Iterate until approved.** Ask what's wrong; expect one or two passes. Record the approved mockup as a decision row (link the file), and add its main points to the slices' acceptance criteria (for example, "Main board shows a red, amber or green status tile per app", or, for an app, "Saving a request shows a clear confirmation; no screen leaves the user unsure whether it saved").
4. **Hold the build to it.** Build follows the approved mockup; a batch that changes the look beyond it needs a yes. Audit checks the build against it as well as against the accessibility and usability banks.

Never default to plain tables for a dashboard. If a chosen chart can't be filled yet (too few points, no history), say so and show what it will look like once it can. For an app, record the intended feeling and the key moments as decisions too; Build and Audit check against them, not only against the mockup.

## Build platform and integrations

Settle how and where it gets built, one question at a time with a suggested answer drawn from the profile's Tools and resources, Systems and data, and the journey's "How information moves between tools today":

- **Build platform:** where the product will be built and run (for example a Claude artifact, AppSheet, Google Sheets with Apps Script, a web app). Suggest the option that fits what they already have and who will maintain it.
- **Existing code and resources to reuse:** repositories, templates, components, data models.
- **Integrations:** for each, which system, which direction (read into the product, write back, or both), how often, what triggers it, and who owns the account. Read-only by default; any write follows gate 4.
- **Who maintains it after hand-off:** their comfort with the platform, and what documentation they will need.
- **Constraints:** security or data rules, where data may live, sign-in requirements, devices.

Record each answer as a decision row; write a decision note in `adr/` for the platform and for any write-back integration (hard to reverse). Update the profile's **Build platform** and Tools and resources. Every new tool or integration still needs gate 2 (access) before first use.

On build path A (prototype first), the platform may stay an open question that blocks only the MVP batches; the prototype is a Claude artifact. On build path B, settle the platform before Scope closes.

## Record as you go

Formats are in `references/records-format.md`.
- **Decision:** append a row to `decisions.csv` with the next ID. To change a decision, add a new row that names the old one in `supersedes`, then set the old row's `status` to `superseded`. That status change is the only edit ever made to an old row.
- **Open question:** append to `open-questions.csv` with the batch or slice it blocks and who can answer it.
- **Term:** add or update `CONTEXT.md`.
- **Hard-to-reverse choice** (data model, where something is stored, a published interface, a vendor): write a decision note in `adr/` as well as the decision row.
- **New invariant:** add it to the profile's Invariants list and log a decision.

## Slice the scope

When the tree is settled, write `scope/<improvement>.md` following `references/slicing.md`: thin slices, each one usable on its own, ordered so the most valuable usable slice ships first. Each slice lists its acceptance criteria and the decision IDs it rests on. Mark which slices need a person in the loop to finish (a taste call, a live test, an outside party) and which Claude can complete once approved.

## Close

Show the scope doc, the new decision rows and the approved mockup. Ask what is wrong. Don't close Scope for a product people look at without an approved mockup or a decision row that records why not. When approved, update `_index.md` (next step: 03 Build) and add a `log.md` line.

## Gates in this step

- Decisions are made by the people named in the profile. Claude recommends; it doesn't decide.
- A guess is never written as a decision. Unknowns become open questions.
