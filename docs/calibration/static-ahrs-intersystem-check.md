---
title: Static AHRS Intersystem Check
category: calibration
tags: [ahrs, intersystem, heading, pitch, roll, static, comparison, verification]
equipment: [Primary AHRS System, Secondary AHRS System, NaviPac/Qinsy]
date_added: 2026-03-01
source_type: converted_procedure
---

# Static AHRS Intersystem Check

## Purpose

Ensure the accuracy and consistency of different Attitude Heading Reference Systems (AHRS) by performing a static intersystem comparison check. By comparing the outputs of the primary and secondary systems, discrepancies are identified and deviation between them is quantified.

## Equipment Required

- Primary heading and attitude system
- Secondary heading and attitude system
- Navigation/acquisition software (NaviPac or Qinsy) for data logging

## Prerequisites

- Vessel alongside for project mobilisation
- All heading and attitude systems powered on and fully aligned before recording begins

## Procedure

### Step 1: Configure Logging

Set up the navigation software to log heading, pitch, and roll from both primary and secondary systems simultaneously.

**Logging format (comma delimited):**

| Field | Date | Time | Heading | Pitch | Roll |
|---|---|---|---|---|---|
| Format | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn |
| Example | 2023-02-27 | 14:39:54.231 | 327.59 | 0.78 | -1.45 |

Record both primary and secondary system fields in the same log file.

### Step 2: Record Data

| Item | Record | Duration | Sampling | Location | Speed | Heading |
|---|---|---|---|---|---|---|
| Recording 1 | Heading, pitch and roll using primary and secondary systems | 1 hour | 1 second | Alongside | Static | Static |

### Step 3: Analyse Results

Compare primary and secondary system outputs to quantify any deviations in heading, pitch, and roll.

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
