---
title: Survey Reporting Fundamentals
category: reporting
tags: [reporting, deliverables, calibration-report, mob-report, daily-report, end-of-project]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-file-document-edit: Survey Reporting Fundamentals

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reporting</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Reference guide covering survey report types, standard structure for each type, content requirements, data presentation, QC documentation, version control, and common client expectations. Includes outline templates for mobilisation reports, calibration reports, daily reports, and end-of-project reports.

---

## :material-calendar-check: When to Use

- When preparing any survey report (mob, calibration, daily, end-of-project, as-built)
- When unsure what content belongs in which report type
- When setting up report templates at the start of a project
- When training junior surveyors on reporting standards

---

## :material-information-outline: Overview

Survey reports are the permanent record of what was done, how it was done, and what was achieved. They serve as evidence of quality, a reference for future operations on the same assets, and a contractual deliverable. A well-written report is clear, complete, and traceable -- anyone should be able to understand what was done and verify the quality without needing to contact the author.

The key principle: write the report as if you will never be available to explain it. Because in two years, you probably won't be.

---

## :material-book-open-variant: Report Types

### Overview Table

| Report Type | When Written | Audience | Typical Length |
|:--|:--|:--|:--|
| Mobilisation Report | End of mob, before survey starts | Client, project manager | 15-30 pages |
| Calibration Report | After each calibration session | Client, QA team | 5-15 pages per cal |
| Daily Progress Report (DPR) | End of each operational day | Client, project manager | 2-5 pages |
| End-of-Project Report | End of survey operations | Client, asset owner | 30-80 pages |
| As-Built Report | After construction survey | Client, engineering | 20-50 pages |

---

## :material-clipboard-text: Mobilisation Report

The mob report demonstrates that all equipment has been installed, calibrated, and tested to specification before survey operations begin.

### Standard Structure

1. **Cover Page**: project name, vessel name, client, contractor, report number, date, author, reviewer/approver
2. **Revision History**: version number, date, author, description of changes
3. **Table of Contents**
4. **Introduction**: project overview, scope of survey, reference to contract/scope of work
5. **Vessel and Equipment**:
    - Vessel details (name, flag, dimensions)
    - Equipment list with serial numbers and calibration certificate references
    - Equipment layout diagram or photo
6. **Dimensional Control Survey**:
    - Method description
    - Results table (sensor positions in vessel reference frame)
    - Diagram showing sensor positions
    - Accuracy assessment
7. **System Configuration**:
    - Geodetic parameters (datum, projection, geoid, vertical reference)
    - Navigation software configuration
    - Data flow diagram (what connects to what)
    - Update rates and telegram formats
    - Time synchronisation method
8. **Calibration Results** (summary table with reference to individual cal reports):
    - GNSS intersystem check results
    - AHRS calibration results
    - USBL calibration results
    - MBES patch test results
    - INS/DVL calibration results (if applicable)
    - Ancillary sensor acceptance tests
9. **Acceptance Testing**: end-to-end position test results, data quality verification
10. **Conclusions**: summary of readiness, any outstanding issues or limitations
11. **Appendices**: calibration certificates, detailed cal results, equipment photographs

!!! tip "Mob Report Timing"
    Draft the mob report structure before the mob starts. Fill in sections as you complete each phase. This avoids the last-minute rush and ensures nothing is forgotten. The mob report should be substantially complete before the first survey line.

---

## :material-compass: Calibration Report

Each calibration procedure generates its own report (or a section within the mob report). The calibration report must contain enough information for an independent reviewer to assess whether the calibration was valid and the results are acceptable.

### Standard Structure

1. **Calibration Type**: what was calibrated (e.g., MBES Patch Test, USBL Calibration)
2. **Date and Time**: start and end of calibration
3. **Environmental Conditions**: sea state, wind, visibility, water depth, current (where relevant)
4. **Equipment Used**: sensor under test (model, serial, firmware), reference sensors, SVP data
5. **Procedure**: brief description of method (reference the full procedure article)
6. **Configuration**: settings used (frequency, power, range, pulse length -- as applicable)
7. **Results**:
    - Determined offsets / corrections (heading, pitch, roll, latency, scale factor, etc.)
    - Residuals (SD, RMS, max error)
    - Comparison with previous calibration values (if available)
    - Pass/fail assessment against acceptance criteria
8. **Plots and Figures**:
    - Time series of residuals
    - Before/after comparison (for patch test: cross-line profiles)
    - Scatter plots (for USBL: dX/dY scatter)
    - Coverage plot (line plan with positions)
9. **Conclusions**: pass/fail statement, any caveats, recommended re-calibration conditions
10. **Approval**: calibrated by, reviewed by, approved by (with dates)

### Acceptance Criteria Reference

Always state the acceptance criteria used and their source:

| Calibration | Key Parameter | Pass | Source |
|:--|:--|:--|:--|
| MBES Patch Test | Roll, Pitch, Heading offset | < 1.0 deg each | IHO S-44, project spec |
| MBES Patch Test | Latency | 0-100 ms, consistent | Project spec |
| USBL Calibration | SD of residuals | < 0.5 m at operational depth | IMCA S 017 |
| INS/DVL | Scale factor | 0.95-1.05 | Manufacturer spec |
| AHRS | Heading C-O | < 0.5 deg | IMCA S 017 |
| Static GNSS | Horizontal agreement | < 1.0 m (DGNSS) | Project spec |

**Reference:** [Acceptance Criteria Reference](../reference/acceptance-criteria-reference.md)

---

## :material-calendar-today: Daily Progress Report (DPR)

The DPR is the project's daily diary. It records what was achieved, what went wrong, and what is planned for the next period.

### Standard Structure

1. **Header**: project name, vessel name, date, report number, DPR period (e.g., 0600-0600 UTC)
2. **Summary of Activities**: bullet list of what was done in chronological order
3. **Operational Statistics**:
    - Hours operational / standby / weather downtime / equipment downtime / transit
    - Survey lines completed / planned
    - Coverage achieved (percentage of area or route)
    - Data volume acquired
4. **Equipment Status**: all systems operational / any faults or reduced capability
5. **Data Quality**: any data quality issues observed, actions taken
6. **Environmental Conditions**: weather, sea state, visibility, current -- recorded at regular intervals
7. **Vessel Position at Report Time**: lat, lon, heading
8. **Personnel On Board**: survey team roster (for offshore projects)
9. **Planned Activities**: next 24-hour plan
10. **Photographs**: representative images from the day's operations (optional but valuable)

!!! info "DPR Best Practice"
    Write the DPR as events happen, not from memory at the end of the shift. Keep a running log during the day. Include times for all events. The DPR is often the primary record used to resolve disputes about operational time and downtime.

---

## :material-file-chart: End-of-Project Report

The end-of-project (EOP) report is the final deliverable that summarises the entire survey campaign.

### Standard Structure

1. **Cover Page and Revision History**
2. **Executive Summary**: 1-page overview of the project, key achievements, any significant issues
3. **Introduction**: project background, objectives, scope, reference documents
4. **Survey Parameters**:
    - Geodetic parameters
    - Vertical reference
    - Accuracy requirements and how they were met
5. **Equipment Summary**: table of all equipment used, with serial numbers and cal status
6. **Mobilisation Summary**: reference to mob report, key calibration results
7. **Survey Operations**:
    - Chronological narrative of operations
    - Coverage achieved (with charts/maps)
    - Any deviations from planned scope (with justification)
8. **Data Processing**:
    - Processing workflow
    - Software used
    - QC procedures applied
    - Outlier/rejection criteria
9. **Results**:
    - Summary of key findings (depths, pipeline positions, feature locations)
    - Data quality assessment (achieved vs required accuracy)
    - Any anomalies or features of note
10. **Deliverables List**: itemised list of all deliverables with format, file naming, and delivery method
11. **Conclusions and Recommendations**
12. **Appendices**: detailed data tables, calibration reports, DPRs, certificates

---

## :material-chart-line: Data Presentation

### Tables

- Use consistent units throughout (state units in column headers)
- Right-align numerical values for easy comparison
- Include column headers on every page for multi-page tables
- Round to appropriate precision (don't report 12 decimal places from software output)

### Plots and Charts

| Plot Type | Used For | Key Requirements |
|:--|:--|:--|
| Track chart | Survey coverage | North arrow, scale bar, coordinate grid, legend |
| Time series | Sensor data over time | Axis labels, units, time format (UTC), event markers |
| Scatter plot | Position accuracy, USBL residuals | Equal aspect ratio for position data, circle for tolerance |
| Cross-section | MBES calibration, pipeline profile | Vertical exaggeration stated, depth convention (positive down or up) |
| Bar chart | Statistics, daily progress | Clear labels, consistent colours |

!!! warning "Vertical Exaggeration"
    Always state the vertical exaggeration on cross-sections and profile plots. A 10x VE makes a 1 deg slope look like 10 deg. Clients and engineers can be misled by unstated VE.

### Coordinate Presentation

- State datum and projection on every chart and coordinate table
- Use consistent coordinate format (DD.DDDDDD or DD MM SS.SSS -- pick one and stick with it)
- State coordinate order explicitly if there is any ambiguity (Latitude/Northing first, or Easting first)
- Include zone number for UTM coordinates

---

## :material-check-all: QC Documentation

Every report should demonstrate that quality was controlled throughout the survey.

### QC Elements to Document

| QC Check | Where Documented | Frequency |
|:--|:--|:--|
| Calibration validity | Mob report | Start of project |
| SVP currency | DPR / processing notes | Each cast |
| Position system status | DPR | Daily |
| Cross-line comparison | Processing report | Per survey area |
| Tide verification | Processing notes | Daily |
| Data completeness | Coverage charts | End of each area |
| Artefact assessment | Processing report | Per deliverable |

---

## :material-counter: Version Control and Document Numbering

### Document Numbering Convention

Standard format: `PROJECTCODE-VESSEL-DOCTYPE-SEQUENCE`

Example: `PRJ001-VESSEL01-MOB-001` (first mob report for Vessel 01 on project PRJ001)

### Revision Control

| Revision | Status | Description |
|:--|:--|:--|
| Rev 0 | Draft | Initial issue for internal review |
| Rev A | Issued for Review (IFR) | Issued to client for comment |
| Rev B | Issued for Review | Incorporating client comments |
| Rev 0 (final) | Issued for Use (IFU) | Final approved version |

!!! tip "Client Comment Tracking"
    When the client returns comments, log each comment with your response and the action taken. Issue the next revision with a comment response sheet. This provides a clear audit trail and prevents repeated discussion of closed items.

---

## :material-wrench: Troubleshooting Common Reporting Issues

### Report Rejected by Client

**Common causes**:

1. Missing sections or incomplete content (use the outlines in this article as a checklist)
2. Acceptance criteria not stated or not referenced to a standard
3. Calibration results presented without pass/fail assessment
4. Charts without north arrows, scale bars, or coordinate information
5. Inconsistent units or coordinate formats

### Data Not Matching Between Reports

**Action**:

1. Use a single source of truth for all reported values (the processed data, not handwritten notes)
2. Cross-check key values between the DPR and the EOP report
3. If a value changed between the mob report and the EOP report (e.g., refined calibration), state this explicitly with justification

---

## :material-link-variant: Related Articles

- [Mobilisation Checklist](../mobilisation/mobilisation-checklist.md)
- [Demobilisation Checklist](../mobilisation/demobilisation-checklist.md)
- [Acceptance Criteria Reference](../reference/acceptance-criteria-reference.md)
- [Industry Standards Reference](../reference/industry-standards-reference.md)
- [MBES Calibration (Patch Test)](../sensors/mbes-calibration.md)

---

!!! quote "References"
    - IMCA S 015, Guidelines for Survey Mobilisation and Calibration
    - IMCA D 045, Guidelines for Survey Report Content
    - Client-specific reporting requirements and templates
