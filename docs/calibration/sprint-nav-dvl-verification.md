---
title: SPRINT-NAV DVL Verification
category: calibration
tags: [sprint-nav, ins, dvl, sonardyne, inertial navigation, doppler velocity log, ROV, verification, janus]
equipment: [SPRINT-NAV INS, Doppler Velocity Log, ROV, Janus Processing Software]
date_added: 2026-03-01
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
