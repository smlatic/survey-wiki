---
title: Static GNSS Intersystem Check
category: positioning
tags: [gnss, intersystem, static, comparison, positioning, verification, dgnss, alongside]
equipment: [Primary GNSS System, Secondary GNSS System, Heading and Attitude System, NaviPac/Qinsy]
date_added: 2026-03-01
source_type: converted_procedure
---

# Static GNSS Intersystem Check

## Purpose

Ensure accuracy and consistency between primary and secondary GNSS positioning systems by performing a static intersystem comparison whilst the vessel is alongside. By comparing the outputs of these systems, discrepancies are identified and deviation between them is quantified.

## Equipment Required

- Primary GNSS positioning system
- Secondary GNSS positioning system
- Supporting heading and attitude system
- Navigation/acquisition software (NaviPac or Qinsy) for data logging

## Prerequisites

- Vessel alongside for project mobilisation
- Correction service active with good signal continuity
- No crane operations during logging to keep the vessel as static as possible

## Procedure

### Step 1: Configure Logging

Set up the navigation software to log grid position of the vessel CRP using both primary and secondary GNSS systems and supporting heading and attitude system simultaneously.

**Logging format (comma delimited):**

| Field | Date | Time | GNSS1 CRP Easting | GNSS1 CRP Northing | GNSS1 CRP Height | Date | Time | GNSS2 CRP Easting | GNSS2 CRP Northing | GNSS2 CRP Height |
|---|---|---|---|---|---|---|---|---|---|---|
| Format | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn |
| Example | 2023-02-27 | 14:39:54.231 | 670811.01 | 6397125.92 | 55.68 | 2023-02-27 | 14:39:54.231 | 670811.21 | 6397125.67 | 55.45 |

### Step 2: Record Data

| Item | Record | Duration | Sampling | Location | Speed | Heading |
|---|---|---|---|---|---|---|
| Recording 1 | Grid position of Vessel CRP using Primary and Secondary GNSS system and supporting heading and attitude system | 1 hour | 1 second | Alongside | Static | Static |

### Step 3: Analyse Results

Compare primary and secondary system outputs to quantify any deviations in easting, northing, and height.

## Reporting

The verification report must include:

- Introduction
- Table of equipment
- Sequence of events
- Tabular and graphical representations of results
- Statistical analysis

Save as PDF with associated log files.

## Quality Checks

- Both systems should agree within their combined specification tolerances
- No significant drift visible in the time-series data
- Statistical analysis confirms consistency between systems
