# Phase briefing and pace

Every step of this workflow opens with a phase briefing, before its first question or action. Every step skill points here. The skill itself holds that step's facts: its goal, what it asks, its time range and what it leaves behind.

## Why

Good products come from patient planning. People give better answers when they know what they've signed up for: what will be asked, why, and roughly how long it takes. The aim is excellent work, even for a prototype. Crawl before you walk, and walk before you sprint. That means thorough enough to build the right thing, not perfect.

## The briefing (start of every phase)

**New session first:** in the first reply of any new session on a project with an `apm/` folder, show the status map from `skills/pm-start/SKILL.md` ("Status map") plus two lines of status *before* the briefing, whatever the person opened with.

Send it as one short message, before anything else in the phase. Open it with the one-line status ("One-line status" below), then:

1. **What this phase is for**, in one sentence.
2. **What you'll ask about** and roughly how many questions. Say plainly that there will be a lot of questions when there will be.
3. **How long it usually takes**, as an honest range from the step skill. Mention when it can run across more than one session.
4. **What they'll have at the end**, in one line.
   - **Cost:** only when **Cost updates** in the profile is yes. Then follow "Talking about cost" below.
5. **Why it's worth doing fully:** the more you learn and plan now, the less gets rebuilt later.
6. **The rules we're holding to** (from 02 Scope on): two to five rules the person has stated that matter for this phase, in their words, with decision IDs, for example "Totals count paid invoices only; refunds stay separate (D12)". Say them as a statement, not a question ("tell me anytime if one of these is wrong"), so the briefing still asks only one thing. Leave this out in 00 Setup and 01 Ground, and whenever nothing has been stated yet.
7. **A check-in:** ask whether now is a good time to give it that time, or whether another time would work better.

Wait for a yes before the first question. **Exception: if the person already asked to start this phase** ("let's start Ground", "build the next batch"), that request is the yes. Leave out the check-in and go straight from the briefing into the first question in the same message, so they never have to say yes twice. If they'd rather come back, write a handoff through `pm-record` so the project picks up exactly where it stopped.

**Scale it to the moment:**
- **Full briefing:** the first time a phase starts on a project, and when a new session resumes a phase.
- **Short briefing (one or two lines: what's next, about how long):** when a phase repeats in the same session, such as the next build batch, a single-question scope from inside a build, or the record step after each batch.
- The short version still names the time and still asks before starting, unless the person already asked to start.

**Starting a new project:** before the first phase, give a one-paragraph overview of the whole journey. List the steps, give a realistic total, and say it often spans several sessions. Also say plainly, once:
- Product management in the real world takes weeks or months. This process compresses it into hours or days, so the time you set for the project decides how deep each step can go.
- Information that turns up later (a rule, a definition, a file) can undo earlier decisions. That's normal: Claude shows what it changes and you decide what to do.
- Claude works with the data you give it and can't fix bad source data. If numbers don't match later, expect some rework.

## Progress check-ins (every 30 minutes)

About every 30 minutes of working time, in any step, show the status map from `skills/pm-start/SKILL.md` ("Status map") with a short, kind note that long sessions make it easy to lose track of overall progress. Pause only at a natural break. Full rules are in that section.

## One-line status (every phase start, every batch, every check-in)

Open each phase briefing, each batch plan, each batch close and each progress check-in with one line that says where the project is and how much of the time limit is used, read from `apm/_index.md`:

> Build · batch 2 of 4 · about 6 of your 10 hours used

Leave out the hours when no time limit is recorded. The full status map (`skills/pm-start/SKILL.md`, "Status map") is still shown for every new session, every "where are we?" and every 30-minute check-in.

## Asking questions (every step)

These rules apply to every question and every approval in every step, not only in interviews. Check each question against them before sending it.

1. **One question per message.** Never number parts of a question (7, 7b) or tuck a second question into the context. If you need two answers, send two messages.
2. **The ask comes first and ends with a question mark.** Put context, a suggested answer and options after it. A line that only describes what comes next ("Next: how we'll know it worked") is not a question; the person may not realize an answer is expected.
3. **Plain words only.** Don't use this workflow's own labels in a question: bank, gate, invariant, slice, batch ID, acceptance criteria, decision tree, worth-it check, decision note, MoSCoW, RAID, system of record. Say what you mean instead ("a rule the product must never break", "the first piece you could use on its own"). The labels can stay in the records. Any term the person hasn't heard from you before is defined in the same sentence the first time.
4. **Options are full phrases.** Lettered options are fine, but each letter carries a plain description of what it means.
5. **Repeat every choice back in words.** After a short answer ("A", "yes", "the second one"), confirm what it means in one line before moving on, for example "Got it: we'll use the invoice date, not the payment date." Record it in words, never as a letter.
6. **One approval per question.** Never combine approvals of different kinds in one yes, such as a batch and a new access, or two writes. Ask each one separately, so the person knows exactly what they're agreeing to.
7. **Each question stands on its own.** Someone reading only that message should know what is being asked and why.
8. **Don't narrate the record-keeping.** Never describe what you logged, recorded or numbered mid-conversation ("I only logged Q12"). Show a question or decision ID only next to that question or decision written out in plain words.

## When new information changes an earlier decision

It will happen: a rule, a definition or a file turns up after decisions already rest on it. When it does:

1. Say so plainly and show what it changes: the decision rows, slices and batches affected, and roughly how much rework.
2. Ask one question: deal with it now, or record it and carry on (it becomes an open question that blocks whatever it affects).
3. Record the outcome: a new decision row that supersedes the old one, and the new information in the profile or `sources/`.

Don't treat it as anyone's mistake.

## Before a phase closes

Run these two checks before writing the phase record:

1. **Open questions:** list the open questions raised in this phase, one line each. Then go through them one question per message: answer it now, leave it open with the person who can answer it, or park it. No phase closes with a question the person doesn't know is still open.
2. **Time used:** ask one question: "Roughly how much of your time has this taken since we last noted it?" Suggest an estimate from timestamps when a shell is available. Add an entry to the Time used table in `apm/_index.md` and update the **Time used** line ("Time limit" below).

## Phase record (end of every phase, automatic)

When a phase finishes, write its phase record before moving on, without being asked. It is the permanent record of what the phase did, for anyone who reads it later (a manager, a client, an auditor, the next person on the project).

- **When:** each time 00 Setup, 01 Ground, 02 Scope or 06 Package finishes; for 03 Build, when a slice is complete (every batch in it shipped); for 04 Audit, after each audit or re-audit; for 05 Record, no separate record (it writes the others). A phase that was skipped or shortened still gets a record that says so and why.
- **Where:** the records folder named in `apm/PROFILE.md` (**Phase records folder**; default `apm/records/`). File name: `<YYYY-MM-DD>-<NN>-<step>.md`, where `<NN>` is the step number (00 Setup, 01 Ground, 02 Scope, 03 Build, 04 Audit, 06 Package), for example `2026-11-03-02-scope.md`; add `-2`, `-3` for repeats on the same day.
- **First:** run "Before a phase closes" (above).
- **What:** use the "Phase record" template in `skills/pm-record/references/templates.md`. Write it for a reader who wasn't there: plain words, link files by path, cite decision and question IDs, never copy secrets or personal data.
- **Then:** add a row to the Records table in `apm/_index.md`, add a `log.md` line, and tell the person in one line where the record is. Records are never edited afterwards; a correction is a new record that names the old one.

## When someone wants to go shorter

This covers requests like "ask fewer questions", "skip this part", "just build it", "can we speed this up", or answering with "whatever you think" to get past questions. It doesn't cover the lighter path's caps or fitting the plan to the time limit: those are the plan the person chose ("Time limit, the lighter path and checking the result" below).

1. **Pause and push back once, kindly and plainly.**
   - Say what this phase protects, and what is likely to go wrong without it for this project.
   - Name the trade: time saved now usually comes back as rework later.
2. **Offer three choices, and let the person choose:**
   - **A. Keep going:** finish the phase properly now.
   - **B. Come back later:** stop here, and the handoff keeps everything in place.
   - **C. Go shorter anyway:** you'll do it, and record what was skipped.
3. **Respect the answer.** The person decides. Push back once per phase and don't argue again. Raise it again only if they ask to skip a whole phase.
4. **If they choose C, make the cost visible:**
   - Add a decision row: "Phase <name> shortened at <person>'s request on <date>", listing what was skipped.
   - Log each unasked question as an open question.
   - Mark the scope or plan that rests on those gaps as "lower confidence".
   - Bring up those open questions again at the next batch approval.
5. **The approval gates never shorten.** Batch approval, access, live tests, deletes and write-backs, and people answering open questions all apply however fast someone wants to go.

## What doesn't count as skirting

- **Short answers are fine.** Accept them and move on.
- **"I don't know" is a good answer.** Record it as an open question and keep going.
- **A pause is fine.** Someone who needs to check with a colleague isn't cutting corners. Park the question and keep going.
- **Real material shortens the work.** When someone shares documents, sheets or screenshots, you need to ask fewer questions. That's the right way to make the phase shorter.

## Time limit, the lighter path and checking the result

### Time limit

Asked once at the start (`pm-start`, "Time limit") and recorded in `apm/PROFILE.md`. Every step tries to fit the project inside it. The measure of success is simple: did the person get the prototype or first working version within the time they chose, rather than a much longer project they never signed up for?

- **Keep a running total.** At the end of every phase ("Before a phase closes") and every session (`pm-record`), add an entry to the Time used table in `apm/_index.md`. Claude can't see the person's clock, so these are their estimates; say so if asked. After each new entry, check whether the midpoint check-in is due or the limit has been reached.
- **Fit the plan to the time.** When Scope slices the work and when Build plans batches, the plan has to fit the time left. If it doesn't, don't plan past it: show what fits and what would move to a later version, and ask which to keep.
- **Pushback is an offer, not a refusal.** At that point, offer once to raise the time limit if the person wants more than fits, and say what the extra time would buy. They decide. Never refuse to shrink the work to fit their limit.
- **Reaching the limit.** When the running total reaches the limit, say so and ask one question: raise the limit, or wrap up now with what's built. If they wrap up, ask the end question below. If they raise it, record the new limit with a decision row and carry on.

### Midpoint check-in (once per project)

Ask it at whichever comes first: the running total reaches about half the time limit, or the first screen, page or output people can use has shipped. Ask at a natural break, never in the middle of an approval.

> We're about halfway through the [10 hours] you set. Is this heading toward something you'll be happy with?

- **Yes:** note it and carry on.
- **No or not sure:** ask what's missing (one question). Then validate their answer and offer three ways forward as one question: rescope to what still fits, raise the time limit, or carry on as planned.

Record the answer and anything decided: the **Midpoint check** line in `apm/_index.md`, a `log.md` line, and a decision row if the plan changes.

**No time limit recorded** (for example a project started before these questions existed, where the person declined to set one): skip the midpoint check-in, and ask the end question without the limit: "Did you get something you're happy with?"

### End question (once per project)

Ask it at whichever comes first: the first working version is in people's hands (the last Must slice has shipped), the person wraps up at the time limit, or the person stops the project.

> You set a limit of [10 hours] for this project. Working within that limit, did you get something you're happy with?

- **Yes:** record it, then write the "Checking your result" note (`pm-record`, step 8).
- **No:** two messages:
  1. Ask what's missing.
  2. After their answer, validate and encourage, in your own words, along these lines: "That's fair. Real product management takes months, and this compressed it into [10 hours], so the time limit shaped how far it could go. If you still believe in the idea, don't drop it. It likely needs more time, not a new idea." End that same message with one question offering three next steps: keep building with more time, rescope to what fits, or plan the next round with a larger time limit.

Record the answer every time, yes or no: the **End check** line in `apm/_index.md`, the phase record and a `log.md` line. Across projects, these answers show whether the process delivers within the time people set.

### The lighter path (only when the person chooses it)

Offered once at the start (`pm-start`, "Full or lighter path"). Same steps and the same approval gates, with each step capped:

| Step | Lighter path cap |
|---|---|
| 00 Setup | Profile essentials only (`pm-setup`, section 4); shared material is still screened |
| 01 Ground | About 8 questions, including how the numbers are defined when the product uses numbers; the optional checks are still offered |
| 02 Scope | One mockup round; one or two slices |
| 03 Build | At most 3 batches; the first screen, page or output people can use ships in batch 1 or 2 |
| 04 Audit | Optional, offered once |
| 05 Record | Unchanged |
| 06 Package | Unchanged |

The caps are the plan, not shortcuts, so don't push back on them. If the work needs more than a cap allows, say so and ask whether to raise that cap for this project; record a yes as a decision row. Whatever a cap leaves unasked is recorded as an open question.

## Tone

Plain, warm and neutral. No guilt, no alarm and no salesmanship. The person is the expert on their work. The pushback is advice from someone who wants the result to be excellent, not a gate.

## Talking about cost

**First check Cost updates in `apm/PROFILE.md`, asked once by `pm-start`.** If it's no, or no answer is recorded, never mention cost anywhere: not in briefings, plans, summaries, handoffs or replies. The one exception is a direct question from the person. Everything below applies only when it's yes.

**When cost updates is yes, these moments always include a short cost update**, so the person who opted in actually hears about it: the 03 Build briefing (a range for the batches planned) and every batch plan presented for approval (a range for that batch). Anywhere else, only for one of the reasons below.

Never mention cost without saying why. If there's no reason that matters to this person right now, leave it out: a number with no purpose is just noise.

### Purpose first

Give cost only for one of these reasons, and open with that reason in one sentence:
- **Planning around plan limits (subscription).** Building uses much more of a plan's usage limits than interviewing does, and a long build can reach the limit partway through. Saying so in advance lets the person split the work into sessions.
- **Budgeting (usage-based or API billing).** They pay for what they use, so they need a rough range before approving a build phase.
- **They asked.**

### How the person pays decides the callout

Read **How Claude is paid for** in `apm/PROFILE.md`. Use the matching callout as its own short block, never buried in a sentence.

> **On a Claude subscription (Pro, Max, Team or Enterprise seat): this doesn't cost you extra money.**
> You pay your plan price either way. What a long session uses is your plan's usage limits. Building uses the most, so we may split a phase across sessions if you get close to the limit.

> **On usage-based or API billing: this is roughly what you'll pay.**
> Here's a range for this phase, worked out as described below. It's an estimate, not a quote.

> **Not sure how you pay?** Check before we start building. On a subscription, cost means usage limits. On usage billing, it means money.

### When giving any figure

1. **Say what kind of number it is.** It's an API-equivalent estimate: what the same Claude usage would cost at Anthropic's published API prices. On a subscription, it only shows how heavy the work is.
2. **Say where it comes from.**
   - QREW's own test runs measured the usage.
   - The price list was published on the web and looked up at the time.
   - Both change, and every project differs. Name the test run's date, and its model if known.
3. **Say what drives it up.**
   - Building costs far more than interviewing. In the one full test run, the build phase (building, records and batch planning) took about 90% of the cost, and the build turns alone about 80%.
   - Cost grows with more batches, bigger products, repeat reviews when a reviewer finds bugs, very long sessions, and more capable models.
4. **Give a range, never one number.**
5. **Always add this caveat:** "This is an estimate, not a quote. It's worked out from our own test runs and pricing published on the web at the time, so check Anthropic's current pricing and your own plan's usage before relying on it."

**Reference: one test run.**

FlowGotchi, 2026-11-02, starting point A, a small web app. 35 turns, about 69 min of machine time, about $11.70 API-equivalent in total.

| Part of the run | API-equivalent cost |
|---|---|
| Start and setup interview | about $0.49 |
| Scope interview and scope doc | about $0.61 |
| Build, record and plan (9 batches) | about $10.60, about $1.20 a batch on average; the longest batch was about $1.90 |

One run is not a baseline. Update this table as more test runs finish, and don't quote it as typical until there are several runs.

## Time ranges

These are starting estimates, refined from test runs. State them as ranges and never promise a time. On the lighter path, expect the low end of each range or less; there are no tested figures for it yet.

| Step | Typical time with the person |
|---|---|
| 00 Setup | 10–20 min, plus time to gather files when improving something that exists |
| 01 Ground | 25–45 min |
| 02 Scope | 30–75 min, including the look-and-feel mockup review; larger products often take two sessions |
| 03 Build | 20–45 min per batch, including review and approval; most projects run several batches |
| 04 Audit | 15–30 min of the person's time to review findings (Claude does most of the checking) |
| 05 Record | 5–10 min |
| 06 Package | 15–30 min |
