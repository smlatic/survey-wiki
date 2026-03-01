---
title: Dynamic GNSS Intersystem Check
category: positioning
tags: [gnss, intersystem, dynamic, comparison, positioning, verification, offshore, transit]
equipment: [Primary GNSS System, Secondary GNSS System, Heading and Attitude System, NaviPac/Qinsy]
date_added: 2026-03-01
source_type: converted_procedure
---

# Dynamic GNSS Intersystem Check

## Purpose

Ensure accuracy and consistency between primary and secondary GNSS positioning systems whilst the vessel is moving. By comparing system outputs during a dynamic box pattern, discrepancies are identified and deviation between them is quantified.

## Equipment Required

- Primary GNSS positioning system
- Secondary GNSS positioning system
- Supporting heading and attitude system
- Navigation/acquisition software (NaviPac or Qinsy) for data logging

## Prerequisites

- Performed offshore after project mobilisation
- Correction service active with good signal continuity
- Vessel capable of maintaining controlled headings

## Procedure

### Step 1: Plan Box Pattern

The vessel shall sail four legs in a box-like pattern covering all four cardinal headings (North, East, South, West).

**Speed and distance per leg:**

| Vessel Type | Speed | Leg Length |
|---|---|---|
| DP operation vessel | 2 knots | ~500 m |
| Towing operation vessel | 5 knots | ~1500 m |

### Step 2: Configure Logging

Set up the navigation software to log grid position of the vessel CRP using both primary and secondary GNSS systems and supporting heading and attitude system.

**Logging format (comma delimited):**

| Field | Date | Time | GNSS1 CRP Easting | GNSS1 CRP Northing | GNSS1 CRP Height | Date | Time | GNSS2 CRP Easting | GNSS2 CRP Northing | GNSS2 CRP Height |
|---|---|---|---|---|---|---|---|---|---|---|
| Format | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn |
| Example | 2023-02-27 | 14:39:54.231 | 670811.01 | 6397125.92 | 55.68 | 2023-02-27 | 14:39:54.231 | 670811.21 | 6397125.67 | 55.45 |

### Step 3: Record Data

| Item | Record | Duration | Sampling | Location | Speed | Heading |
|---|---|---|---|---|---|---|
| Recording 1, 2, 3, 4 | Grid position of Vessel CRP using Primary and Secondary GNSS and heading/attitude system | ~10 minutes per leg | 1 second | Offshore | 2 kn (DP) / 5 kn (towing) | North, East, South, West |

### Step 4: Analyse Results

Compare primary and secondary system outputs across all four headings to quantify deviations in easting, northing, and height.

## Reporting

The verification report must include:

- Introduction
- Table of equipment
- Sequence of events
- Tabular and graphical representations of results
- Statistical analysis

Save as PDF and append to the project-specific MAC report. Submit with associated log files.

## Quality Checks

- Both systems should agree within their combined specification tolerances across all headings
- No heading-dependent biases visible between systems
- Statistical analysis confirms consistency between systems during dynamic conditions
