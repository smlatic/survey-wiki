---
title: SPRINT (Syrinx) DVL Calibration
category: calibration
tags: [sprint, syrinx, dvl, ins, sonardyne, doppler velocity log, calibration, ROV, janus]
equipment: [SPRINT INS, Syrinx DVL, ROV, Janus Processing Software, USBL System]
date_added: 2026-03-01
source_type: converted_procedure
---

# SPRINT (Syrinx) DVL Calibration

## Purpose

Calibrate the DVL alignment for SPRINT INS systems (typically with Syrinx DVL) when mounted on a new vehicle. After INS alignment, the DVL calibration is performed according to the manufacturer's routine, and the INS software calculates the true misalignments of the DVL.

## Equipment Required

- SPRINT INS system
- Syrinx DVL (or equivalent)
- ROV
- USBL aiding system
- Janus processing software

## Prerequisites

- Full alignment of the SPRINT achieved (heading SD below 0.1 degrees and status reported as "System Ready")
- USBL aiding system operational with good position quality
- Current SVP loaded
- Vessel must follow the ROV maintaining constant heading to minimise USBL error

## Procedure

### Step 1: Start and Align

Start the unit and ensure that the alignment process is recorded in the log session. Align the system until it reports "System Ready" and heading SD is less than 0.1 degrees.

### Step 2: Position ROV

Position the ROV at DVL lock depth (~20 m altitude) with good USBL position.

### Step 3: Load SVP

Ensure a new SVP is loaded.

### Step 4: Start Calibration Log

Open the logging dialog and start a new log file with a suffix that clearly identifies it as DVL calibration data.

### Step 5: Perform Manoeuvres

Fly the ROV along an approximate linear path with the vessel following. Perform:

- Acceleration along various axes including up and down
- Heading changes of about 90 degrees (sideways movement maintained for a few minutes)
- Random dynamic manoeuvres

A total position change of about 800 m should be sufficient.

### Step 6: End Calibration Log

When the calibration manoeuvres are completed, change the log file suffix back to what is needed for the survey.

### Step 7: Process in Janus

Copy the relevant DVL calibration files and process them in Janus.

## Reporting

Present the methodology and results in the MAC report.

## Quality Checks

- Full INS alignment achieved before calibration (heading SD < 0.1 degrees)
- Minimum 800 m total position change during manoeuvres
- Vessel maintained constant heading while following ROV (to minimise USBL error)
- Calibration values verified against manufacturer specifications
- SVP loaded and current at time of calibration
