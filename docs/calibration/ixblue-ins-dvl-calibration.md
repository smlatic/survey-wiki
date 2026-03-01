---
title: ROVINS/PHINS DVL Calibration
category: calibration
tags: [ins, dvl, rovins, phins, ixblue, inertial navigation, doppler velocity log, ROV, ROTV, calibration]
equipment: [ROVINS/PHINS INS, Doppler Velocity Log, ROV/ROTV, DelphINS Processing Software]
date_added: 2026-03-01
source_type: converted_procedure
---

# ROVINS/PHINS DVL Calibration

## Purpose

Calibrate the Doppler Velocity Log (DVL) to the inertial navigation system (INS) reference frame on an ROV or ROTV. After INS alignment, a DVL calibration is performed according to the manufacturer's routine, and the INS processing software calculates the true misalignments of the DVL.

## Equipment Required

- ROVINS or PHINS INS system
- Doppler Velocity Log (DVL)
- ROV or ROTV
- USBL aiding system
- DelphINS processing software

## Prerequisites

- Full alignment of the INS achieved (heading SD below 0.1 degrees and status reported as "Ready") before starting DVL calibration
- USBL aiding system operational
- Sufficient water depth and clear seabed for DVL bottom-track

## Procedure

### Step 1: Set Up Logging

Set up logging for the ROVINS/PHINS system.

### Step 2: Start and Align

Start the unit and ensure the alignment process is recorded in the log session. Align the system until it reports "System Ready" and heading SD is less than 0.1 degrees.

### Step 3: Position at Location A

Position the ROV at Location A, where it is possible to travel the required distance at an altitude of 20-40 metres.

### Step 4: Travel to Location B

Travel from Location A to a different location (Location B). The distance travelled must meet minimum requirements based on depth:

| Depth (m) | Minimum Distance A-B (ROV) | Minimum Distance A-B (ROTV) |
|---|---|---|
| 0-500 | 1 km | 2 km |
| 1000 | 2 km | - |
| 2000 | 4 km | - |

The distance must not be less than 1000 times the accuracy of the USBL aiding system.

### Step 5: Return to Location A

Return to the starting position.

### Step 6: Process Data

Process the logged INS data from the trip between Locations A and B using DelphINS and calculate the DVL calibration.

### Step 7: Verify

Verify the calibration performance on a separate part of the data or a different file (B-A return leg), as recommended by the manufacturer. Do not solely compare performance against the data used for calibration.

## Reporting

Present the methodology and results in the MAC report, including:

- Calibration values calculated
- Comparison with factory-derived alignment results
- Any discrepancies identified and investigated

## Quality Checks

- Full INS alignment achieved before calibration (heading SD < 0.1 degrees)
- Minimum travel distance requirements met for the operating depth
- Calibration values verified on independent data (not the calibration dataset)
- Any significant discrepancies from factory calibration values investigated
- Factory calibration values take precedence unless proven otherwise

## Notes

The manufacturer advises that calibration can be run over a long section of data with many turns if there is sufficient displacement between start and finish points. However, always verify on separate data.
