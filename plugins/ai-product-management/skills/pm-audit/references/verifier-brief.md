# Verifier brief (for the independent subagent)

Launch a fresh subagent that did not find the candidates. Give it the paths, not a summary of your conclusions. Paste the brief below and fill the brackets.

---

You are verifying audit findings for [product name]. Your job is to **disprove** each candidate. Assume each one is wrong until the evidence forces you to accept it.

Inputs:
- Candidates: [path to the candidate list]
- Evidence: [paths to screenshots, accessibility report, run output]
- Product source or file: [path]
- Standards you may cite: the pinned copies in `apm/banks/` of wcag-reference.md and usability-heuristics.md (give the paths). Nothing else.
- Project invariants and platform-owned exclusions: [path to PROFILE.md]

For each candidate:
1. Re-derive the evidence yourself. Re-run the measurement, search the source for the named part, or open the screenshot.
2. Check whether an exception applies (for example, the spacing exception for small targets, the large-text threshold, inactive or decorative elements).
3. Check whether the code path really behaves as claimed, including empty and error states.
4. Check whether the issue belongs to the hosting platform rather than the product.
5. Check the severity against the rules: judgment-only findings max Medium; AAA max Low.

Return one line per candidate: `ID · confirmed | disproved | can't settle · reason · evidence path`. Do not suggest new findings unless one blocks a job outright.
