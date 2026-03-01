---
title: AHRS Heading, Pitch and Roll Calibration
category: calibration
tags: [ahrs, heading, pitch, roll, gyro, motion sensor, gnss compass, calibration]
equipment: [Javad Sigma GNSS Receiver, Multi-antenna GNSS System, Attitude Sensor Verification Software]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-compass: AHRS Heading, Pitch and Roll Calibration

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Calibration Procedure</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Control the vessel's navigation heading and attitude systems and verify that all offsets are correctly implemented in the navigation software. By time-matching GNSS-derived attitude data against the vessel's gyros and motion sensors over a logging period, discrepancies and drift can be detected through graphical analysis.

---

## :material-tools: Equipment Required

| Equipment | Role |
|-----------|------|
| Multi-antenna GNSS receiver (e.g., Javad Sigma with Quattro-G3D board) capable of heading, pitch, and roll determination | GNSS attitude reference |
| Minimum 4 GNSS antennas (marine-grade, L1/L2 GPS/GLONASS) | Satellite signal reception |
| GNSS receiver management software (e.g., Javad TriVU-P) | Receiver configuration and monitoring |
| Attitude Sensor Verification Software (ASVS) for C-O calculation using least squares method | Data processing and analysis |

---

!!! info "Prerequisites"
    - GNSS antennas surveyed into the vessel's local grid
    - Antenna separation selected to avoid multipath while maximising accuracy
    - All vessel heading and attitude systems powered on and fully aligned

---

## :material-list-status: Procedure

### Step 1: Antenna Installation

Mount the GNSS antennas in an area with open sky:

- Three antennas on one level (typically helideck area)
- One antenna at the superstructure (to provide good vector geometry)

!!! info "Accuracy"
    Antenna separation determines accuracy:

    - Heading accuracy: ~0.229 degrees / L (baseline length in metres)
    - Roll/Pitch accuracy: ~0.372 degrees / L

    For a 20 m baseline, heading accuracy is approximately 0.01 degrees.

### Step 2: GNSS Receiver Configuration

- Survey each antenna position into the vessel grid
- Enter known antenna coordinates into the receiver (or run self-calibration)
- The receiver computes baselines between antennas to derive heading, pitch, and roll
- Processing uses a fast process (position/baseline every millisecond) and a slow process (ambiguity resolution every second)

### Step 3: Vessel Logging

- Log for minimum 1 hour on the vessel
- Longer logging improves drift detection
- The system can be used for both static (alongside) and dynamic (in transit) control
- Dynamic logging provides better sensor characterisation as errors are more visible with movement

### Step 4: ROV Logging (if applicable)

- Place ROV on quayside, stabilized
- Survey the main skid to calculate centreline and reference plane
- Using the horizontal plane and true north reference points, calculate heading, pitch, and roll
- Log for 1 hour
- Calculate C-O (Calculated minus Observed) and apply corrections
- Rotate ROV 180 degrees and log for another hour as verification

### Step 5: Data Processing

The ASVS software:

- Time-matches data points from GNSS reference and vessel sensors
- Calculates C-O values and standard deviations using least squares method
- Presents results in tabular and graphical format
- Graphs show sensor behaviour over time, making drift easy to detect

---

!!! success "Quality Checks"
    - [x] C-O values should be consistent across all logging periods
    - [x] Standard deviations should be within expected sensor specifications
    - [x] Graphs should show stable sensor behaviour without significant drift
    - [x] Confidence intervals computed at 95% confidence level
    - [x] Data snooping checks: max antenna separation difference (0.025), max HDOP (3.0), max VDOP (3.0)
    - [x] GNSS vector lengths and C-O values normalised and tested with T-test value 0.95

---

!!! quote "References"
    - Javad Sigma receiver documentation
    - IMCA S 017 -- Guidelines for USBL systems
