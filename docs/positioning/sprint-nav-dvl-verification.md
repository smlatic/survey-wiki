---
title: SPRINT-NAV DVL Verification
category: calibration
tags: [sprint-nav, ins, dvl, sonardyne, inertial navigation, doppler velocity log, ROV, verification, janus]
equipment: [SPRINT-NAV INS, Doppler Velocity Log, ROV, Janus Processing Software]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-navigation: SPRINT-NAV DVL Verification

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>DVL Verification</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Validate the accuracy and functionality of the ROV's SPRINT-NAV Inertial Navigation System (INS) and Doppler Velocity Log (DVL). The verification compares the fully aided INS position solution with INS + DVL only aiding to confirm reliable positioning and velocity estimation during underwater operations.

---

## :material-calendar-check: When to Use

- **After INS/DVL calibration** -- verification must follow every calibration to confirm the corrections are valid
- **At the start of each project** -- baseline drift check before survey operations begin
- **When drift seems excessive during operations** -- if the online navigation shows unexplained position jumps or creep after USBL dropouts

!!! tip "Calibration vs Verification"
    **Calibration** determines correction values (misalignment angles and scale factor) by comparing INS/DVL-only navigation against a known reference (USBL). **Verification** confirms those corrections work by removing USBL aiding for a controlled period and measuring how much the position drifts. A system can pass calibration but still fail verification if, for example, the DVL bottom lock is intermittent or the sound velocity profile has changed significantly.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| SPRINT-NAV INS system | Inertial navigation reference |
| Doppler Velocity Log (DVL) | Velocity measurement sensor |
| ROV | Subsea vehicle platform |
| USBL aiding system | Position aiding |
| Janus processing software | Data processing and verification |

---

!!! info "Prerequisites"
    - INS system aligned and receiving accurate aiding data
    - USBL aiding system operational
    - Sufficient water depth and clear seabed for DVL bottom-track at 20 m altitude

---

## :material-list-status: Procedure

### Step 1: Align INS

Align the INS system and ensure it receives accurate aiding data.

### Step 2: Start Logging

Make sure the INS driver is logging the INS data.

### Step 3: Fly Calibration Pattern

Fly the ROV 1 km away from the starting position and back at an altitude of 20 m.

### Step 4: Split Logging

Log/split the INS logging at the end of the calibration run.

---

## :material-cog: Janus Processing

### Step 1: Calculate Calibration Values

Calculate calibration values and compare against the factory-derived alignment results. Any significant discrepancies shall be investigated. Factory calibration values should take precedence.

### Step 2: Export Full Navigation

Export fully integrated and processed navigation.

### Step 3: Re-process Without USBL

Re-process navigation using two-way processing with a section in the middle where 5 minutes of USBL aiding is excluded.

### Step 4: Export Degraded Navigation

Export the navigation from the session with excluded USBL.

### Step 5: Analyse Differences

Analyse and evaluate the differences in position between the fully aided and DVL-only solutions.

---

!!! success "Quality Checks"
    - [x] Calibration values consistent with factory-derived alignment results
    - [x] Position differences between fully aided and DVL-only solutions within acceptable limits
    - [x] No significant drift during the USBL exclusion period
    - [x] DVL bottom-track maintained throughout the calibration run

---

!!! note "Reporting"
    The verification report must include:

    - Introduction
    - Table of equipment
    - Sequence of events
    - Tabular and graphical representations of results
    - Statistical analysis

    Save as PDF with associated log files.

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Accept | Marginal | Fail |
|-----------|--------|----------|------|
| Position drift (% of distance travelled) | < 0.1% | 0.1% - 0.2% | > 0.2% |
| DVL bottom lock | Maintained throughout verification run | Brief dropouts (< 5 s) | Extended loss of bottom lock |
| Heading consistency | No heading jumps during USBL exclusion | -- | Heading jumps > 0.5 deg |

!!! example "Drift Calculation"
    If the ROV travelled 1000 m during the USBL exclusion window and the position difference between the fully aided and DVL-only solutions at the end of the exclusion is 0.8 m, the drift is 0.8 / 1000 = **0.08%** -- this is a pass.

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Excessive drift (> 0.2%) | Poor DVL bottom lock, stale sound velocity profile, incomplete INS alignment | Check DVL bottom lock was maintained during the run, reload a fresh SVP, verify INS alignment status was "Ready" throughout |
| Drift increases with depth | Sound velocity gradient not properly accounted for | Acquire a new SVP at operating depth, check that the SVP extends to the DVL altitude above seabed |
| Position jumps when USBL re-enabled | USBL aiding quality poor, large USBL residuals | Review USBL residuals and gate settings, check vessel-ROV geometry |
| Calibration values look good but verification fails | DVL calibration performed in different conditions (depth, SV, seabed type) | Repeat calibration in conditions representative of the survey area |

---

## :material-link-variant: Related Articles

- [SPRINT (Syrinx) DVL Calibration](sprint-syrinx-dvl-calibration.md) -- the calibration procedure that precedes this verification
- [ROVINS/PHINS DVL Calibration](ixblue-ins-dvl-calibration.md) -- equivalent calibration for iXblue systems
- [SVP Repeatability Test](../sensors/svp-repeatability-test.md) -- sound velocity validation that affects DVL accuracy
- [Gyro Types and Calibration](../mobilisation/gyro-types-and-calibration.md) -- heading reference for the INS
