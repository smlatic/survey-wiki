---
title: Transponder/Responder Latency Check
category: calibration
tags: [usbl, transponder, responder, latency, slant range, beacon, ROV, ROTV]
equipment: [USBL System, Transponder/Responder Beacon, ROV/ROTV/Towfish]
date_added: 2026-03-01
last_reviewed: 2026-03-01
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

## :material-calendar-check: When to Use

- When commissioning a new transponder/responder beacon
- When switching a beacon between transponder and responder modes during operations
- At the start of each project when beacons will be used in responder mode
- When USBL range measurements appear systematically offset from expected values
- After any firmware update to the beacon

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

## :material-check-decagram: Acceptance Criteria

| Parameter | Pass | Marginal | Fail |
|:--|:-:|:-:|:-:|
| Latency value | 2-15 ms | 15-25 ms | > 25 ms |
| Range agreement (transponder vs responder, after correction) | < 0.2 m | 0.2-0.5 m | > 0.5 m |
| Slant range stability during test | SD < 0.3 m | 0.3-1.0 m | > 1.0 m |

### Range Error from Latency

The range error caused by an uncompensated latency is:

**Range error (m) = latency (ms) x SV (m/s) / 2000**

Example: a 10 ms latency with SV = 1500 m/s produces a range error of 10 x 1500 / 2000 = **7.5 m**.

| Latency (ms) | Range Error at 1500 m/s |
|:--|:--|
| 2 | 1.5 m |
| 5 | 3.75 m |
| 10 | 7.5 m |
| 15 | 11.25 m |
| 25 | 18.75 m |

!!! danger "Uncompensated Latency"
    An uncompensated latency produces a systematic range error that directly affects the USBL position. At typical latency values (5-15 ms), the range error is 3-11 m. This manifests as a consistent offset in the USBL position, which may be mistaken for a calibration error. Always perform the latency check before USBL calibration.

---

## :material-wrench: Troubleshooting

### Large Latency Difference Between Modes

**Possible causes**:

1. Firmware version mismatch between beacon and topside. Check both are compatible.
2. Responder trigger processing delay (manufacturer-specific). Apply the measured delay in the USBL software.
3. Acoustic interference causing detection delay in responder mode.
4. Low battery in the beacon (can increase processing time and introduce latency).

### Slant Range Unstable During Test

**Action**:

1. Verify the vehicle (ROV/towfish) is stationary
2. Check for acoustic interference from other systems
3. Increase the test duration (minimum 2 minutes per mode)
4. Verify USBL gate settings are appropriate for the range

---

!!! note "Reporting"

    The test results shall be documented in the MAC report or as a distinct test report. The report must include:

    - Sequence of events
    - Tabular and graphical representations of results
    - Statistical analysis

---

## :material-link-variant: Related Articles

- [HiPAP USBL Calibration](hipap-usbl-calibration.md)
- [HiPAP Verification (Spin & Transit)](hipap-hpr-verification.md)
- [USBL Calibration Data Processing](usbl-calibration-data-processing.md)
- [USBL Theory and Error Budgets](usbl-theory-and-error-budgets.md)
