---
title: Pipe Tracker (HydroPACT 440/660) Verification
category: equipment
tags: [pipe tracker, hydropact, tss440, tss660, pipeline tracking, ROV, verification, coil mapping, VRT]
equipment: [HydroPACT 440/660, ROV, MBES, Naviscan Software]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-pipe: Pipe Tracker (HydroPACT 440/660) Verification

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Verification</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Validate the accuracy, reliability, and maximum detection range of a HydroPACT 440/660 pipe tracker system for pipeline tracking on an exposed section of pipeline, by comparing pipe tracker-derived positions against reference data from a multibeam echosounder (MBES).

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| HydroPACT 440/660 pipe tracker system | System under test |
| ROV with MBES | Reference data source |
| Naviscan software | Pipe tracker data integration |
| Navigation and acquisition software | Data logging and processing |

---

!!! info "Prerequisites"
    - HydroPACT data integrated into Naviscan software and logged into the SBD
    - Pipe tracker offsets measured from a known point on the ROV dimensional control report (if not already known)
    - Exposed section of pipeline with known dimensions identified
    - Ideally in shallower waters (30-120 m) where ROV positioning is most accurate

---

## :material-list-status: Procedure

### Step 1: Coil Mapping Check (On Deck)

Check the pipe tracker coil mapping by suspending a conductive target from each coil (one at a time). The target should appear on the display screen moving in accordance with the direction of movement of the test target. This confirms proper coil mapping.

### Step 2: Pre-Dive Check

Perform a pre-dive check before launching the vehicle.

### Step 3: Temperature Compensation

Select the correct temperature band for seawater compensation.

### Step 4: Target Scaling Factor

Ensure the correct target scaling factor is entered into the software (if available).

### Step 5: Background Compensation

Start the background compensation test at least 25 m from the target. The system needs to establish the background signal level when no target is nearby. This compensates for background signal produced by the ROV, seawater, and soil components. Signals above this level will be treated as originating from a valid target.

### Step 6: Record Background Compensation

A series of 10 measurements shall be recorded by the calibration software in the topside unit. Individual measurements should not deviate by more than +/-10 uV. Document the results with a screen grab.

!!! warning
    Individual background compensation measurements must not deviate by more than **+/-10 uV**. If any measurement exceeds this threshold, investigate before proceeding.

### Step 7: Verify Background Values

After departing from the background compensation location, observe the values from each coil. They normally become negative since seawater has less conductivity than the seabed. However, values should stay within +/-20 uV. If values exceed this range, there was metallic interference at the background compensation location -- redo at a different location.

!!! warning
    Post-compensation coil values must remain within **+/-20 uV**. Values exceeding this range indicate metallic interference at the background compensation location. Return to Step 5 and repeat at a different location.

### Step 8: Vertical Range to Target (VRT) Test

Perform a VRT test on an exposed section of the pipeline:

1. Position the ROV over the pipeline
2. Begin logging both pipe tracker and MBES data
3. While moving slowly forward, gradually raise the ROV altitude
4. Continue logging until pipeline readings disappear
5. Lower the ROV altitude while maintaining forward movement to regain detection range

### Step 9: Compare Data

Compare the VRT solution with MBES data at the exposed section at different altitudes. The maximum detection range will also be determined from this test.

---

!!! note "Reporting"
    The verification report (included in the MAC report) must include:

    - Introduction
    - Measured offsets from ROV reference point to pipe tracker reference point (if applicable)
    - Sequence of events
    - Tabular and graphical representations of results

    Save as PDF with associated log files.

---

!!! success "Quality Checks"
    - [x] Coil mapping confirmed correct on deck
    - [x] Background compensation within +/-10 uV per measurement
    - [x] Post-compensation values within +/-20 uV
    - [x] Pipe tracker positions consistent with MBES reference data
    - [x] Maximum detection range determined and documented
    - [x] ROV positioning accuracy considered (prefer 30-120 m depth)
