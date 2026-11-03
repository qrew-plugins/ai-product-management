# Phase briefing and pace

Every step of this workflow opens with a phase briefing, before its first question or action. Every step skill points here. The skill itself holds that step's facts: its goal, what it asks, its time range and what it leaves behind.

## Why

Good products come from patient planning. People give better answers when they know what they've signed up for: what will be asked, why, and roughly how long it takes. The aim is excellent work, even for a prototype. Crawl before you walk, and walk before you sprint. That means thorough enough to build the right thing, not perfect.

## The briefing (start of every phase)

**New session first:** in the first reply of any new session on a project with an `apm/` folder, show the status map from `skills/pm-start/SKILL.md` ("Status map") plus two lines of status *before* the briefing, whatever the person opened with.

Send it as one short message, before anything else in the phase:

1. **What this phase is for**, in one sentence.
2. **What you'll ask about** and roughly how many questions. Say plainly that there will be a lot of questions when there will be.
3. **How long it usually takes**, as an honest range from the step skill. Mention when it can run across more than one session.
4. **What they'll have at the end**, in one line.
   - **Cost:** only when **Cost updates** in the profile is yes. Then follow "Talking about cost" below.
5. **Why it's worth doing fully:** the more you learn and plan now, the less gets rebuilt later.
6. **A check-in:** ask whether now is a good time to give it that time, or whether another time would work better.

Wait for a yes before the first question. If they'd rather come back, write a handoff through `pm-record` so the project picks up exactly where it stopped.

**Scale it to the moment:**
- **Full briefing:** the first time a phase starts on a project, and when a new session resumes a phase.
- **Short briefing (one or two lines: what's next, about how long):** when a phase repeats in the same session, such as the next build batch, a single-question scope from inside a build, or the record step after each batch.
- The short version still names the time and still asks before starting.

**Starting a new project:** before the first phase, give a one-paragraph overview of the whole journey. List the steps, give a realistic total, and say it often spans several sessions.

## Progress check-ins (every 30 minutes)

About every 30 minutes of working time, in any step, show the status map from `skills/pm-start/SKILL.md` ("Status map") with a short, kind note that long sessions make it easy to lose track of overall progress. Pause only at a natural break. Full rules are in that section.

## Phase record (end of every phase, automatic)

When a phase finishes, write its phase record before moving on, without being asked. It is the permanent record of what the phase did, for anyone who reads it later (a manager, a client, an auditor, the next person on the project).

- **When:** each time 00 Setup, 01 Ground, 02 Scope or 06 Package finishes; for 03 Build, when a slice is complete (every batch in it shipped); for 04 Audit, after each audit or re-audit; for 05 Record, no separate record (it writes the others). A phase that was skipped or shortened still gets a record that says so and why.
- **Where:** the records folder named in `apm/PROFILE.md` (**Phase records folder**; default `apm/records/`). File name: `<YYYY-MM-DD>-<NN>-<step>.md`, for example `2026-11-03-02-scope.md`; add `-2`, `-3` for repeats on the same day.
- **What:** use the "Phase record" template in `skills/pm-record/references/templates.md`. Write it for a reader who wasn't there: plain words, link files by path, cite decision and question IDs, never copy secrets or personal data.
- **Then:** add a row to the Records table in `apm/_index.md`, add a `log.md` line, and tell the person in one line where the record is. Records are never edited afterwards; a correction is a new record that names the old one.

## When someone wants to go shorter

This covers requests like "ask fewer questions", "skip this part", "just build it", "can we speed this up", or answering with "whatever you think" to get past questions.

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

## Tone

Plain, warm and neutral. No guilt, no alarm and no salesmanship. The person is the expert on their work. The pushback is advice from someone who wants the result to be excellent, not a gate.

## Talking about cost

**First check Cost updates in `apm/PROFILE.md`, asked once by `pm-start`.** If it's no, or no answer is recorded, never mention cost anywhere: not in briefings, plans, summaries, handoffs or replies. The one exception is a direct question from the person. Everything below applies only when it's yes.

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

These are starting estimates, refined from test runs. State them as ranges and never promise a time.

| Step | Typical time with the person |
|---|---|
| 00 Setup | 10–20 min, plus time to gather files when improving something that exists |
| 01 Ground | 25–45 min |
| 02 Scope | 30–75 min, including the look-and-feel mockup review; larger products often take two sessions |
| 03 Build | 20–45 min per batch, including review and approval; most projects run several batches |
| 04 Audit | 15–30 min of the person's time to review findings (Claude does most of the checking) |
| 05 Record | 5–10 min |
| 06 Package | 15–30 min |
