---
title: Side Scan Sonar Positioning and Quality Verification
category: equipment
tags: [side scan sonar, sss, positioning, verification, sonarwiz, ROV, ROTV, contact, quality]
equipment: [Side Scan Sonar, ROV/ROTV, MBES, SonarWiz, INS/USBL]
date_added: 2026-03-01
source_type: converted_procedure
---

# Side Scan Sonar Positioning and Quality Verification

## Purpose

Verify that side scan sonar (SSS) positioning is within project specification and that visual data quality meets requirements. SSS-derived contact positions are compared against MBES reference positions.

## Equipment Required

- Side scan sonar system (HF and LF)
- ROV, ROTV, or towed platform
- MBES (for reference data)
- SonarWiz processing software
- INS and/or USBL positioning system
- Navigation/acquisition software

## Prerequisites

- MBES data available for the SSS verification test area
- USBL calibrated deeper than the maximum survey depth (if not, inform the offshore coordinator)
- Well-defined contact identified in MBES data

## Setup Checklist

Before the verification test, check the following to avoid constant and systematic errors:

| Item | Check |
|---|---|
| Offsets and position source | Verify SSS transducer offsets from dimensional control are correctly entered in acquisition software |
| INS | Check if an INS is present in the same vehicle as SSS; if not, send only USBL position |
| Heading source | Check heading source and correct setup |
| Time sync | Verify time sync is configured correctly and working |
| Mounting of transducers | Visual inspection on deck to confirm SSS transducers are correctly mounted, parallel, and match dimensional control |
| USBL calibration depth | State the calibration depth; should be deeper than max survey depth |
| Time port | Verify only $GPZDA is sent to the time port |
| Declination | Add declination if fluxgate is used as heading source |
| Range | Ensure correct range for the survey is set |
| KP | Ensure KP is enabled |
| Test file | Run a test file while SSS is on deck; offshore coordinator/geologist verifies correct content |

The correct setup shall be confirmed by the offshore coordinator/geologist.

## Procedure

### Step 1: Confirm Reference Data

Make sure MBES data is available for the SSS verification test area prior to launching the vehicle.

### Step 2: Select Target

Choose a well-defined contact in the MBES data (e.g., boulder or easily distinguishable feature). Avoid metallic wrecks if using a fluxgate as heading source since these can negatively affect positioning.

### Step 3: Pre-Dive Check

Perform a pre-dive check before launching the vehicle.

### Step 4: Run Lines

Run two lines, each back and forth in opposite directions (four runs total):

- Lines centred on the contact
- Contact location at approximately 2/3 of effective range or selected range (whichever is shorter)
- Run line length approximately 400 m (200 m each side of the contact); may be reduced at low survey speeds
- Constant speed (planned survey speed)
- Stable altitude (planned survey altitude)
- Constant run line direction, selected to minimise pitch movement

### Step 5: Process in SonarWiz

- Use an SV value at average depth between transducers and seabed surface
- Apply vessel file
- Apply pitch correction
- Verify correct file format, position source, and heading source

### Step 6: Compare Positions

Compare SSS contact positions with MBES-derived positions. Check that contact positions fall within project specifications (acceptance criteria from the ITP).

### Step 7: Data Quality Review

The Marine Geologist confirms data quality and positioning.

## Reporting

Comparison results shall be presented in tabular form in the MAC report. Both HF and LF results shall be presented when ranges differ.

## Quality Checks

- SSS contact positions within project specification tolerances compared to MBES reference
- No significant positioning artefacts between reciprocal runs
- Vehicle movement smooth and within survey parameters during test
- Setup checklist completed and confirmed by offshore coordinator/geologist

## Troubleshooting

If position verification fails to meet expected values:

1. Check if vehicle movement was smooth and within survey parameters; if not, repeat the test
2. If movement was acceptable, check possible sources of error
3. If setup is correct (offsets, heading and position sources), run separate patch tests to check:
   - USBL angular offset
   - Latency
   - Pitch bias
   - Heading bias
