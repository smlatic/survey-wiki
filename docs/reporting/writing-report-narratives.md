---
title: From Field Log to Final Report
category: reporting
tags: [reporting, narrative, results, sequence of events, daily log, QC, review, revision, deliverables, writing]
date_added: 2026-07-07
last_reviewed: 2026-07-07
source_type: original
---

# :material-pencil-ruler: From Field Log to Final Report

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reporting</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Writing Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-07-07</strong></span>
</div>

!!! abstract "Purpose"
    [Survey Reporting Fundamentals](survey-reporting-guide.md) covers what sections each report type needs. This article covers the harder part: actually writing them -- turning a daily log and a stack of procedures into an operations narrative, a curated sequence of events, and a results section where every number can be traced, without the report reading like it was assembled by copy-paste.

---

## :material-source-branch: One Source of Truth

Before writing a word, decide where every class of fact comes from -- and then never take it from anywhere else:

| Fact | Source | Not from |
|:--|:--|:--|
| Times and event order | The online/daily log | Memory, chat messages |
| Measured values, offsets, results | Processed data files | Handwritten notes, screenshots |
| Method statements | The project procedures (by document number) | What you remember doing |
| Acceptance criteria | Project spec / referenced standard | "The usual number" |
| Coordinates | The survey package export, with stated datum | Retyped values |

Most internal inconsistencies in reports -- the thing reviewers find first -- come from the same fact being taken from two different sources. If a value must appear in three places (summary, results table, appendix), it should be pasted from one origin, not re-derived three times.

---

## :material-timeline-text: The Operations Narrative

The narrative is a factual, chronological account of what happened. It is not a story and not a defence.

**Do:**

- Write in past tense, one tense throughout, times in the log's time zone (state it once, usually UTC)
- Cover each operational phase in order: what was done, when it started and finished, and the outcome
- Include delays and interruptions **with their cause** (weather, equipment, awaiting client instruction) -- these lines matter contractually
- Include any deviation from the procedure, with the reference to how it was agreed (management of change, field memo, client email)
- Keep one level of detail throughout -- if the mobilisation gets times to the minute, the demob should too

**Don't:**

- Copy the log verbatim -- the log has fifty lines per operation; the narrative needs the five that changed something
- Editorialise ("unfortunately", "after much difficulty") -- state the fact and the duration; the reader can judge
- Let routine noise in (meals, shift handovers, uneventful transits) unless the client's format demands a full timeline

---

## :material-format-list-numbered: The Sequence of Significant Events

Most operational reports carry an events table alongside the narrative. The word doing the work is **significant**: this is a curated list of milestones, not an export of the log.

A line earns its place if it is one of: phase start/end, first/last data acquired, a calibration or verification, a result accepted or rejected, a breakdown or repair, a weather stop/resume, a management-of-change decision, mobilisation/demobilisation milestones.

- Keep times identical to the log and the DPRs -- reviewers cross-check these three against each other
- One event per line, same verb style throughout ("Commenced...", "Completed...", not a mix of styles)
- If the table and the narrative disagree on a time, the report is wrong somewhere -- reconcile before issue

---

## :material-check-decagram: The Results Section

Results sections fail in two ways: burying the verdict, and reporting values nobody can trace.

- **Lead with the outcome.** The first sentence states what was achieved against the acceptance criterion, with both numbers: *"The loop misclosure after tide correction was 0.04 m, within the 0.10 m project tolerance."* Then the supporting detail.
- **Report the values actually used**, not the template's defaults. If the template's example density or latency is still in the issued report, the whole document loses credibility.
- **Every number traceable**: each result should be recomputable from a named data file, log entry, or appendix table. If you cannot point to where a number came from, it does not go in.
- **State the basis** wherever a value could be ambiguous: datum and projection for coordinates, tide-corrected or raw for depths, which sensor for any cross-checked value, vertical exaggeration on profiles.
- **Failed or marginal results stay in.** A result outside tolerance, reported with cause and the agreed action, is a defensible record. A result quietly missing is a finding for the client's auditor.

---

## :material-file-swap: Working From a Template

Report templates are usually last job's report with the numbers taken out -- and often with some left in. Before writing, and again before issue, hunt for the previous project's ghosts:

- Search the document for the previous project's name, vessel, client, field, and coordinates
- Check headers, footers, cover page, and document properties (author, title metadata) -- the body gets cleaned, the furniture doesn't
- Check figure captions and table titles against the figures actually in place
- Check that referenced document numbers (procedures, certificates) are this project's, not the template's
- Match the template's own fonts and styles when adding content -- pasted text in the wrong font flags every insertion you made

---

## :material-account-check: Review and Revision Hygiene

- Every report gets a **second pair of eyes** before the client sees it -- someone who didn't write it, checking it against the sources
- Review with tracked changes; the author accepts or rejects each one deliberately
- **Before submission, scrub the file**: no tracked changes, no comments, no hidden metadata; check the PDF, not just the Word file
- Log client comments with your response and action, and return a comment-response sheet with the next revision -- it closes discussions permanently
- Filename carries the revision; the revision history table says what changed and why. "Updated as per comments" is not a description

---

## :material-alert-circle-outline: Common Failure Modes

| Failure | How it happens | Caught by |
|:--|:--|:--|
| Same value differs between sections | Re-derived instead of single-sourced | Cross-check pass on key values |
| Previous job's data in the issued report | Template ghost survived | Project-name search before issue |
| Untraceable result | Number typed from memory or a screenshot | "Where would I point an auditor?" test per number |
| Times disagree with DPRs | Narrative written from memory | Reconcile narrative, events table, DPRs against the log |
| Verdict buried on page 40 | Results written data-first | Lead every results section with pass/fail vs criterion |
| Tracked changes visible to client | Scrub skipped under time pressure | Final-file check as a hard step, not a habit |

---

## :material-link-variant: Related Articles

- [Survey Reporting Fundamentals](survey-reporting-guide.md) -- report types and their standard structures
- [Acceptance Criteria Reference](../reference/acceptance-criteria-reference.md)
- [Industry Standards Reference](../reference/industry-standards-reference.md)
