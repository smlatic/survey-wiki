---
title: HiPAP USBL Calibration
category: calibration
tags: [usbl, hipap, acoustics, calibration, transducer alignment, positioning]
equipment: [Kongsberg HiPAP, APOS]
date_added: 2026-03-01
source_type: converted_procedure
---

# HiPAP USBL Calibration

## Purpose

Perform an acoustic alignment of the HiPAP USBL transducer to the vessel's reference frame. The alignment determines the angular offsets between the heading/roll/pitch sensors and the HiPAP transducer, enabling the system to provide accurate subsea transponder positions at any water depth.

After completion, the built-in transducer alignment function in APOS automatically calculates new installation parameters from the logged data. The function is found in Utility -> Transducer Alignment.

## Equipment Required

- Kongsberg HiPAP USBL system with APOS software
- Motion sensor (MRU/AHRS)
- Heading sensor (gyrocompass)
- GNSS receiver with correction data (dGNSS/RTK/PPP)
- Seabed transponder (180 deg beamwidth for shallow water, 30 deg for deep water)
- Sound velocity profiler
- ROV, sandbags, or acoustic release for transponder deployment (if required for depth)

## Prerequisites

- Dimensional control or lever arm verification completed for the transducer and GNSS antenna location, gyro heading, and roll/pitch values
- If multiple gyro/motion sensors are interfaced, select the highest accuracy sensors for the alignment
- If multiple GNSS systems are available, use the one with the highest accuracy
- GNSS must use correction data (dGNSS/RTK/PPP)

## Procedure

### Step 1: Select Alignment Area

The water depth is critical -- acoustic position errors must be dominant over GNSS errors.

- Optimum calibration depth is 400 to 1000 m
- A calibration at 200 m or deeper is valid for all operating depths
- A calibration shallower than 200 m is valid for operating depth up to two times the calibration depth
- Extreme sound velocity variations in the water column will reduce result quality
- Low signal-to-noise ratio (SNR) due to bad weather or high vessel thrust will reduce result quality

**Transponder distance from cardinal points:**

- 180 deg beamwidth transponder: 50-200% of water depth
- 30 deg beamwidth transponder: not more than 25% of water depth
- For vessels predominantly using USBL for towed surveys: 100-200% of water depth

**Error sensitivity by water depth:**

| Water Depth (m) | 0.2 m Error of WD (%) | Roll/Pitch Error for 0.2 m Horiz. Translation - Vessel Above (deg) | Yaw Error for 0.2 m Horiz. Translation - 50% WD Away (deg) | Yaw Error for 0.2 m Horiz. Translation - 100% WD Away (deg) |
|---|---|---|---|---|
| 50 | 0.40% | 0.23 | 0.46 | 0.23 |
| 100 | 0.20% | 0.11 | 0.23 | 0.11 |
| 200 | 0.10% | 0.06 | 0.11 | 0.06 |
| 500 | 0.04% | 0.02 | 0.05 | 0.02 |
| 1000 | 0.02% | 0.01 | 0.02 | 0.01 |
| 2000 | 0.01% | 0.01 | 0.01 | 0.01 |

### Step 2: Deploy Transponder

Deploy the seabed transponder using ROV, sandbags, or acoustic release as appropriate for the depth. Ensure the beacon is correctly positioned, anchored securely to the seabed, and has adequate battery charge.

### Step 3: Sound Velocity Profile

Load a current sound velocity profile into APOS for the alignment area. An upcast and a downcast profile shall be recorded and included in the calibration report.

### Step 4: Tide Setup (if applicable)

For areas with significant tidal change, enable tide correction in APOS:

| Step | Task |
|---|---|
| 1 | Open the Tide dialogue from the System menu |
| 2 | Select Measured from GNSS, select the primary GNSS/INS source |
| 3 | Enter the vertical distance from the position reference point to the zero-tide level (approximating the offset to waterline as zero-tide is acceptable) |
| 4 | Press Set -> Apply -> Close |

Tide data is automatically logged during transducer alignment if present. During calculation, you can choose to include or exclude tide compensation. The compensation uses the first non-excluded sample as a reference and adjusts all subsequent depth values by the tide difference.

### Step 5: Alignment Pattern (DP Vessels)

The recommended pattern is four cardinal points and four headings on top of the transponder. Select nominal vessel headings based on weather conditions to minimise vessel noise.

**Standard pattern:**

1. Record Centre location at Heading A
2. Navigate to each cardinal point and record at Heading A
3. Record Centre location at Heading A+90 deg
4. Record Centre location at Heading A+180 deg
5. Finish at Top location at Heading A+270 deg

**Simplified pattern** (if the vessel cannot maintain steady position at all four quadrant headings):

1. Record on the Top location
2. Adjust heading 180 degrees
3. Navigate to each cardinal point and record

### Step 6: Data Acquisition in APOS

| Step | Task |
|---|---|
| 1 | Add the deployed transponder to APOS |
| 2 | Navigate to the Top position |
| 3 | Open Transducer Alignment from Utility |
| 4 | Right-click and select New Alignment of APOS Transducer |
| 5 | Select the transducer to calibrate and the deployed beacon |
| 6 | Set the termination criteria to 300 position pairs |
| 7 | Press Start -- the system will interrogate the transponder and stop once 300 pairs are logged |
| 8 | Navigate and record 300 position pairs per the alignment pattern for each location and heading |
| 9 | Under Calculation parameters, ensure only Transducer Inclinations is ticked |
| 10 | Press View Measurements -- Numerically and Geographically |
| 11 | Press PDF Report |
| 12 | Repeat for the secondary transducer if present |

## Reporting

The alignment utility produces a report consisting of an HTML text file and four JPG images:

- `[transceiver]TdAlignReport.htm`
- `[transceiver]Results.jpg`
- `[transceiver]TdAlignVessel.jpg`
- `[transceiver]TdAlignMeasTpPos.jpg`
- `[transceiver]TdAlignCompTpPos.jpg`

Files are stored under `\APOS\Data\`.

The report shall be complemented with:

- Name of responsible surveyor for the calibration
- Details of supporting systems (GNSS and INS/AHRS), including configuration screenshots and offsets for each system

Save the completed report as PDF with the full HTML library for review and archiving.

## Quality Checks

- Verify the calculated transducer inclination values are within expected range for the installation
- Review the graphical plots for consistent position solutions across all cardinal points
- Check that the standard deviation of the results is acceptable
- Confirm the SVP used was recorded in the calibration area on the day of calibration

## References

- Kongsberg APOS Help files (Utility -> Transducer Alignment)
- IMCA S 017 -- Guidelines for the use of USBL systems
