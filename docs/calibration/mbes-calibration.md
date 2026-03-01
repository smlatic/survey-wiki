---
title: MBES Calibration and Verification
category: calibration
tags: [mbes, multibeam, patch test, calibration, roll, pitch, heading, latency, bathymetry]
equipment: [Multibeam Echosounder, Motion Sensor, Gyro, Sound Velocity Profiler]
date_added: 2026-03-01
source_type: converted_procedure
---

# MBES Calibration and Verification

## Purpose

Ensure accurate and reliable MBES data acquisition by resolving residual misalignment between the multibeam echosounder, motion sensor, and gyro. The calibration addresses roll, pitch, heading offsets and position latency to enable correctly corrected bathymetric surfaces.

## Equipment Required

- Multibeam echosounder system
- Motion sensor (MRU/AHRS)
- Gyrocompass
- Sound velocity profiler
- Navigation and acquisition software (NaviPac/Qinsy or equivalent)
- Processing software for calibration analysis

## Prerequisites

- Correct MBES position offsets from dimensional control survey entered in acquisition software
- Current sound velocity profile loaded into navigation and acquisition software
- Suitable calibration area identified (features, slopes, flat seabed as needed)

## Procedure

### Step 1: ROV Calibration Depth Considerations

When calibrating MBES on an ROV:
- Prefer shallower waters where ROV positioning is most accurate
- At greater depths, compensate for reduced positioning accuracy by running calibration at higher altitude over a larger object
- Longer lever arms help compensate for diminished ROV positioning accuracy
- If using a survey ROV, run a recon line at high altitude first to ensure MBES coverage at survey lines and line turns

### Step 2: Pre-calibration Checks

- Angular roll, pitch, and heading measurements quoted in decimal degrees to two decimal places
- Latency quoted in decimal seconds to two decimal places
- Verify correct MBES offsets from dimensional control are entered in acquisition software
- Conduct and load a current sound velocity cast

### Step 3: Position Latency Determination

- Set a survey line over a well-defined feature (rock outcrop, pipeline, or significant slope)
- Run the line twice in the same direction: once at slowest possible speed, once at highest speed with good data
- Any latency offset appears as a feature position offset (or contour shift) along the track

### Step 4: Roll Offset Determination

- Define a survey line in a flat, featureless seabed area
- Collect two passes over the line, one in each direction
- In cross-section, a roll offset shows data matching at nadir but diverging with increased beam angle

### Step 5: Pitch Offset Determination

- Find a steep slope with minimal variation perpendicular to the line
- Run two lines at the same speed in opposite directions
- Pitch offset causes along-track displacement proportional to altitude (greater altitude = larger displacement)

### Step 6: Heading Offset Determination

- Run two parallel lines over a feature at different off-track distances, same direction and speed
- Alternatively, pass the feature once at port, once at starboard, or run lines normal to a slope
- Position or contour offsets in the overlap area reveal the yaw installation offset

### Step 7: Dual-Head Configuration

For a dual-head MBES, a total of 7 lines shall be run. Ensure coverage over the centre feature when surveying offset lines (A and C) aside from the centre line.

### Step 8: Apply Corrections

- Processing software calculates roll, pitch, heading alignment angles and latency values
- Enter corrected values into both acquisition and processing software
- Reprocess data with new values and verify

## Reporting

The calibration report must include:

- Introduction
- Table of equipment
- Sequence of events
- Tabular and graphical representations of results
- Statistical analysis

Save as PDF with associated log files.

## Quality Checks

- Corrected data shows consistent bathymetry across overlapping lines
- Roll: no divergence between reciprocal lines in cross-section
- Pitch: no along-track displacement between reciprocal lines on slopes
- Heading: no cross-track offset between parallel lines over features
- Latency: no along-track shift between different-speed lines

## References

- IHO S-44 -- Standards for Hydrographic Surveys
- Equipment manufacturer calibration guidelines
