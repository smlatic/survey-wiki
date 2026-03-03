---
title: Pipe Tracker (HydroPACT 440/660) Verification
category: equipment
tags: [pipe tracker, hydropact, tss440, tss660, pipeline tracking, ROV, verification, coil mapping, VRT]
equipment: [HydroPACT 440/660, ROV, MBES, Naviscan Software]
date_added: 2026-03-01
last_reviewed: 2026-03-01
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

---

## :material-pipe-wrench: Pipe Diameter and Wall Thickness Effects

The detection range of the pipetracker is directly influenced by the target pipe's physical properties:

| Pipe Property | Effect on Detection |
|---------------|-------------------|
| **Larger diameter** | Stronger EM response; increased detection range |
| **Thicker wall** | Greater eddy current generation; increased detection range |
| **Smaller diameter / thin wall** | Weaker response; reduced detection range; may fall below minimum detectable signal at standard survey altitudes |
| **Non-ferrous materials** | Very weak or no response (e.g., GRP, concrete without rebar) |

!!! tip "Rule of Thumb"
    For a typical 12-inch (300 mm) steel pipeline with 15-20 mm wall thickness, expect a VRT of approximately **5-8 m** in favourable conditions. For a 6-inch (150 mm) pipeline with 10 mm wall thickness, expect VRT to reduce to approximately **3-5 m**.

---

## :material-alert-decagram: Go/No-Go Decision: VRT vs Survey Altitude

!!! danger "Critical Check"
    If the measured **VRT (Vertical Range to Target)** during the verification test is **less than the planned survey altitude**, the pipetracker **cannot reliably detect the pipe** at that altitude.

    **Decision matrix:**

    | VRT Result | Survey Altitude | Decision |
    |-----------|----------------|----------|
    | VRT > survey altitude + 1 m margin | Standard altitude | **GO** -- proceed with planned altitude |
    | VRT ≈ survey altitude (within 1 m) | Standard altitude | **CAUTION** -- reduce survey altitude if possible; expect intermittent loss |
    | VRT < survey altitude | Standard altitude | **NO-GO** -- reduce survey altitude to below VRT, or inform client that pipetracker detection is not reliable |

---

## :material-shovel: Burial Depth Capability

The pipetracker can detect buried pipelines, but detection range reduces significantly with burial depth:

- **Surface-laid pipe:** Maximum VRT as determined by pipe properties and environmental conditions
- **Partially buried (0-0.5 m cover):** Moderate signal reduction; typically still detectable at standard survey altitudes
- **Fully buried (0.5-2.0 m cover):** Significant signal reduction; may require flying at lower altitude
- **Deeply buried (> 2.0 m cover):** Detection may not be possible, particularly for smaller diameter pipes

!!! info "Combined Range"
    The total detection distance is the sum of burial depth and sensor altitude. For example, a pipe buried 1.0 m below seabed with the ROV flying at 3.0 m altitude requires a detection capability of 4.0 m through a combination of seabed material and water.

---

## :material-compare: HydroPACT 440 vs 660 Model Differences

| Feature | HydroPACT 440 | HydroPACT 660 |
|---------|:------------:|:------------:|
| **Operating frequency** | Higher | Lower |
| **Detection range (shallow burial)** | Better resolution at short range | Greater penetration at longer range |
| **Best suited for** | Surface-laid or shallowly buried pipes | Deeper buried pipes; larger standoff distances |
| **Lateral resolution** | Higher | Lower |
| **Depth penetration** | Shallower | Deeper |

!!! tip "Model Selection"
    - Use the **440** when the pipe is surface-laid or shallowly buried and you need better lateral resolution for accurate pipe tracking
    - Use the **660** when the pipe is deeply buried or when operating at higher altitudes where greater penetration depth is needed
    - If both models are available, run the verification test with both and select the one that provides the best VRT and lateral accuracy for the specific pipeline

---

## :material-terrain: Seabed Type Effects on Detection

Seabed material conductivity affects the pipetracker signal propagation:

| Seabed Type | Conductivity | Effect on Detection |
|-------------|:----------:|-------------------|
| **Sand** | Low | Favourable -- lower signal attenuation; longer detection range |
| **Gravel** | Low-Medium | Generally favourable |
| **Silt** | Medium | Moderate attenuation |
| **Clay** | High | Unfavourable -- higher signal attenuation; reduced detection range |
| **Rock** | Variable | Depends on mineralogy; generally low conductivity |

!!! warning
    In areas with highly conductive seabed material (e.g., clay-rich sediments), the pipetracker detection range may be significantly reduced. Always verify detection capability with a VRT test in representative seabed conditions before committing to production survey.

---

## :material-calendar-check: When to Use

Perform pipetracker verification:

- At the **start of every project** before production pipeline surveys
- After any change to the pipetracker system or ROV mounting configuration
- When moving to a **different pipeline** (different diameter, wall thickness, or burial conditions)
- When moving to a **significantly different seabed type**
- After any repair or reconfiguration of the pipetracker hardware

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Criterion |
|-----------|-----------|
| Background compensation | Individual measurements within **+/-10 uV** |
| Post-compensation coil values | Within **+/-20 uV** |
| VRT | Greater than planned survey altitude **+ 1 m margin** |
| Lateral accuracy vs MBES reference | Within **0.5 m** at normal survey altitude |
| Detection consistency | No intermittent dropouts at planned survey altitude |

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Background compensation values exceed +/-10 uV | Metallic interference at compensation location; ROV electrical noise | Move to a different location at least 25 m from any metallic object; check ROV for loose or unshielded cables |
| Post-compensation values exceed +/-20 uV | Background compensation was performed near a metallic target | Repeat background compensation at a verified clear location |
| VRT less than expected | Seabed conductivity too high; pipe diameter/wall thickness less than expected; wrong temperature band | Verify pipe properties; check temperature compensation setting; try the 660 model for deeper penetration |
| Lateral position offset from MBES | Coil mapping incorrect; offsets entered incorrectly; heading source error | Verify coil mapping on deck; check offsets against dimensional control; verify heading source |
| Intermittent signal loss during survey | Altitude varying above VRT limit; electrical interference | Reduce altitude; check for interference sources; verify background compensation is still valid |

---

## :material-link-variant: Related Articles

- [Pipeline and Umbilical Survey Operations](../rov/pipeline-survey-operations.md)
- [Side Scan Sonar Positioning and Quality Verification](side-scan-sonar-verification.md)
