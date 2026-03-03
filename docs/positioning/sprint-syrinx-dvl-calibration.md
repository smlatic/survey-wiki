---
title: SPRINT (Syrinx) DVL Calibration
category: calibration
tags: [sprint, syrinx, dvl, ins, sonardyne, doppler velocity log, calibration, ROV, janus]
equipment: [SPRINT INS, Syrinx DVL, ROV, Janus Processing Software, USBL System]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-navigation-outline: SPRINT (Syrinx) DVL Calibration

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>DVL Calibration</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Calibrate the DVL alignment for SPRINT INS systems (typically with Syrinx DVL) when mounted on a new vehicle. After INS alignment, the DVL calibration is performed according to the manufacturer's routine, and the INS software calculates the true misalignments of the DVL.

---

## :material-calendar-check: When to Use

- **Every mobilisation** -- DVL calibration is a standard mob activity for any SPRINT + Syrinx installation
- **After DVL or INS reinstallation** -- any time either unit is removed and refitted, even on the same vehicle
- **After vehicle frame modifications** -- changes to the DVL bracket, INS mounting, or skid geometry

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| SPRINT INS system | Inertial navigation reference |
| Syrinx DVL (or equivalent) | Velocity measurement sensor |
| ROV | Subsea vehicle platform |
| USBL aiding system | Position aiding |
| Janus processing software | Data processing and calibration |

---

!!! info "Prerequisites"
    - Full alignment of the SPRINT achieved (heading SD below 0.1 degrees and status reported as "System Ready")
    - USBL aiding system operational with good position quality
    - Current SVP loaded
    - Vessel must follow the ROV maintaining constant heading to minimise USBL error

---

## :material-list-status: Procedure

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

!!! warning
    A total position change of about 800 m should be sufficient.

### Step 6: End Calibration Log

When the calibration manoeuvres are completed, change the log file suffix back to what is needed for the survey.

### Step 7: Process in Janus

Copy the relevant DVL calibration files and process them in Janus.

---

!!! success "Quality Checks"
    - [x] Full INS alignment achieved before calibration (heading SD < 0.1 degrees)
    - [x] Minimum 800 m total position change during manoeuvres
    - [x] Vessel maintained constant heading while following ROV (to minimise USBL error)
    - [x] Calibration values verified against manufacturer specifications
    - [x] SVP loaded and current at time of calibration

---

!!! note "Reporting"
    Present the methodology and results in the MAC report.

---

## :material-clipboard-check-outline: Post-Calibration Verification

After applying the calibration values, a verification run must be performed to confirm the corrections are valid. This step is separate from the calibration itself.

| Step | Action |
|------|--------|
| 1 | Apply the calibration values from Janus to the SPRINT configuration |
| 2 | Fly the ROV approximately 500 m with full USBL aiding while logging INS data |
| 3 | In Janus, re-process the verification data with a 5-minute USBL exclusion window in the middle of the run |
| 4 | Compare the fully aided solution with the DVL-only solution during the exclusion window |
| 5 | Position drift during the exclusion must be < 0.1% of distance travelled |

!!! warning "Do Not Skip Verification"
    Calibration determines corrections; verification proves they work. Without this step, a bad calibration (caused by poor USBL, inadequate manoeuvres, or stale SVP) may go undetected until survey operations begin. See the [SPRINT-NAV DVL Verification](sprint-nav-dvl-verification.md) article for the full verification procedure.

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Accept | Marginal | Fail |
|-----------|--------|----------|------|
| DVL misalignment (heading, pitch, roll) | < 2 deg | 2 - 5 deg | > 5 deg (indicates mounting problem) |
| DVL scale factor | 0.95 - 1.05 | -- | Outside 0.95 - 1.05 |
| DVL beam bottom lock | All 4 beams locked throughout | 3 beams locked (investigate) | < 3 beams locked |
| Post-cal verification drift | < 0.1% of distance travelled | 0.1% - 0.2% | > 0.2% |

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Large misalignment values (> 5 deg) | DVL or INS mounting has shifted, incorrect lever arms entered | Inspect the physical mount, verify lever arm measurements, re-run calibration |
| Scale factor outside 0.95 - 1.05 | Incorrect sound velocity at the DVL head, wrong DVL beam configuration | Check SV at DVL depth, verify beam configuration matches the Syrinx model, reload correct SV profile |
| Loss of bottom lock during calibration | Altitude too high, seabed too soft or absorptive, DVL head fouled | Reduce altitude to ~20 m, check DVL transducer face for marine growth, try a different seabed area |
| Calibration values differ significantly from factory | Mounting changed since factory cal, insufficient manoeuvres during calibration | Ensure at least 800 m displacement with heading changes, verify on independent data, revert to factory values if in doubt |
| Verification drift exceeds 0.2% | Calibration performed in poor conditions, SVP stale | Repeat calibration with fresh SVP and good USBL quality |

---

## :material-link-variant: Related Articles

- [SPRINT-NAV DVL Verification](sprint-nav-dvl-verification.md) -- full verification procedure to follow after this calibration
- [ROVINS/PHINS DVL Calibration](ixblue-ins-dvl-calibration.md) -- equivalent procedure for iXblue systems
- [SVP Repeatability Test](../sensors/svp-repeatability-test.md) -- sound velocity validation that affects DVL scale factor
- [Gyro Types and Calibration](../mobilisation/gyro-types-and-calibration.md) -- heading reference systems used alongside INS
