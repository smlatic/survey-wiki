---
title: ROVINS/PHINS DVL Calibration
category: calibration
tags: [ins, dvl, rovins, phins, ixblue, inertial navigation, doppler velocity log, ROV, ROTV, calibration]
equipment: [ROVINS/PHINS INS, Doppler Velocity Log, ROV/ROTV, DelphINS Processing Software]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-navigation-variant: ROVINS/PHINS DVL Calibration

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>DVL Calibration</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Calibrate the Doppler Velocity Log (DVL) to the inertial navigation system (INS) reference frame on an ROV or ROTV. After INS alignment, a DVL calibration is performed according to the manufacturer's routine, and the INS processing software calculates the true misalignments of the DVL.

---

## :material-calendar-check: When to Use

- **Every mobilisation** -- DVL calibration is a standard mob activity
- **After INS or DVL reinstallation** -- any time the INS or DVL is removed and refitted, even on the same vehicle
- **After mounting changes** -- if the DVL bracket, INS bracket, or vehicle frame has been modified

DVL calibration solves for the angular misalignment between the DVL acoustic axes and the INS body frame (three rotation angles: heading, pitch, and roll offsets) and the DVL scale factor. Without accurate calibration, velocity measurements fed to the INS will introduce systematic position errors that grow with distance travelled.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| ROVINS or PHINS INS system | Inertial navigation reference |
| Doppler Velocity Log (DVL) | Velocity measurement sensor |
| ROV or ROTV | Subsea vehicle platform |
| USBL aiding system | Position aiding |
| DelphINS processing software | Data processing and calibration |

---

!!! info "Prerequisites"
    - Full alignment of the INS achieved (heading SD below 0.1 degrees and status reported as "Ready") before starting DVL calibration
    - USBL aiding system operational
    - Sufficient water depth and clear seabed for DVL bottom-track

---

## :material-list-status: Procedure

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

!!! warning
    The distance must not be less than 1000 times the accuracy of the USBL aiding system.

### Step 5: Return to Location A

Return to the starting position.

### Step 6: Process Data

Process the logged INS data from the trip between Locations A and B using DelphINS and calculate the DVL calibration.

### Step 7: Verify

Verify the calibration performance on a separate part of the data or a different file (B-A return leg), as recommended by the manufacturer. Do not solely compare performance against the data used for calibration.

---

!!! success "Quality Checks"
    - [x] Full INS alignment achieved before calibration (heading SD < 0.1 degrees)
    - [x] Minimum travel distance requirements met for the operating depth
    - [x] Calibration values verified on independent data (not the calibration dataset)
    - [x] Any significant discrepancies from factory calibration values investigated
    - [x] Factory calibration values take precedence unless proven otherwise

---

!!! note "Reporting"
    Present the methodology and results in the MAC report, including:

    - Calibration values calculated
    - Comparison with factory-derived alignment results
    - Any discrepancies identified and investigated

---

??? info "Notes"
    The manufacturer advises that calibration can be run over a long section of data with many turns if there is sufficient displacement between start and finish points. However, always verify on separate data.

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Accept | Marginal | Fail |
|-----------|--------|----------|------|
| DVL misalignment (heading, pitch, roll) | < 2 deg | 2 - 5 deg | > 5 deg (indicates mounting problem) |
| DVL scale factor | 0.95 - 1.05 | -- | Outside 0.95 - 1.05 |
| DVL beam bottom lock | All 4 beams locked | 3 beams locked (investigate) | < 3 beams locked |

!!! warning "Large Misalignment Values"
    Misalignment values exceeding 5 degrees almost always indicate a physical mounting problem rather than a genuine calibration offset. Inspect the DVL and INS mounting before accepting the result.

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Large misalignment values (> 5 deg) | DVL or INS mounting has shifted, incorrect lever arms entered | Inspect the physical mount, verify lever arm measurements, re-run calibration |
| Scale factor outside 0.95 - 1.05 | Incorrect sound velocity at the DVL head, wrong DVL beam configuration | Check SV at DVL depth, verify beam configuration matches the DVL model, reload correct SV profile |
| Loss of bottom lock during calibration | Altitude too high, seabed too soft or absorptive, DVL head fouled | Reduce altitude to 20-40 m range, check DVL transducer face for marine growth, try a different seabed area |
| Calibration values differ significantly from factory | Mounting changed since factory cal, incorrect data section used | Verify on independent data leg, compare with previous field calibrations, revert to factory values if in doubt |
| Poor repeatability between A-B and B-A legs | INS alignment degraded during run, USBL aiding quality poor | Check INS alignment status remained "Ready" throughout, review USBL residuals |

---

## :material-link-variant: Related Articles

- [SPRINT (Syrinx) DVL Calibration](sprint-syrinx-dvl-calibration.md) -- equivalent procedure for Sonardyne SPRINT systems
- [SPRINT-NAV DVL Verification](sprint-nav-dvl-verification.md) -- post-calibration drift verification
- [Gyro Types and Calibration](../mobilisation/gyro-types-and-calibration.md) -- heading reference systems used alongside INS
- [SVP Repeatability Test](../sensors/svp-repeatability-test.md) -- sound velocity validation that affects DVL scale factor
