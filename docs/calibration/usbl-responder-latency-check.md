---
title: Transponder/Responder Latency Check
category: calibration
tags: [usbl, transponder, responder, latency, slant range, beacon, ROV, ROTV]
equipment: [USBL System, Transponder/Responder Beacon, ROV/ROTV/Towfish]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-timer-outline: Transponder/Responder Latency Check

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Latency Check</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

---

!!! abstract "Purpose"

    Confirm or measure any transmission latency of the triggering pulse in responder mode, ensuring accurate and consistent USBL slant range measurements across both transponder and responder operations.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| USBL system (topside and transducer) | Acoustic positioning |
| Transponder/responder beacon | Target beacon for range measurement |
| ROV, ROTV, or Towfish | Vehicle carrying the beacon |
| Navigation/acquisition software | ASCII logging of slant range data |

---

!!! info "Prerequisites"

    - USBL system calibrated and operational
    - Beacon deployed and communicating
    - Vehicle (ROV/ROTV/Towfish) available and operational

---

## :material-list-status: Procedure

### Step 1: Prepare the Log File

Configure an ASCII log file to record time and slant range to the USBL beacon.

### Step 2: Stabilize the Vehicle

Hold the ROV, ROTV, or Towfish at a fixed offset to the vessel. Examples:

- ROV on seabed with vessel on DP
- Towfish towed at a steady speed, heading, and wire length

### Step 3: Log Transponder Mode Data

Record data for approximately two minutes in transponder mode, capturing slant range and time stamps.

### Step 4: Switch to Responder Mode

Use telemetry to switch the beacon to responder mode. Note the time of mode change and continue recording for another two minutes.

### Step 5: Analyse

Compare transponder vs. responder slant range data and calculate any difference to determine if there is a transmission delay in the triggering pulse.

### Step 6: Verify

Apply any identified trigger pulse transmission delay to the HPR system and confirm the measured data is consistent between responder and transponder modes.

---

!!! success "Quality Checks"

    - [x] Slant range values should be consistent between transponder and responder modes after any latency correction is applied
    - [x] No unexplained jumps or drift in slant range during either recording period
    - [x] Vehicle position remained stable throughout the test

---

!!! note "Reporting"

    The test results shall be documented in the MAC report or as a distinct test report. The report must include:

    - Sequence of events
    - Tabular and graphical representations of results
    - Statistical analysis
