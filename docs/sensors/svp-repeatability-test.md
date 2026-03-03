---
title: Sound Velocity Profiler Repeatability Test
category: calibration
tags: [svp, sound velocity, repeatability, profiler, acoustic, water column, calibration]
equipment: [Sound Velocity Profiler, Winch/Deployment System]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-waves-arrow-up: Sound Velocity Profiler Repeatability Test

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Repeatability Test</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

---

!!! abstract "Purpose"

    Validate the accuracy of a sound velocity profiler (SVP) probe by acquiring two casts at the same location in quick succession and comparing the resulting profiles. Sound velocity uncertainties directly affect MBES depth measurements and USBL positioning accuracy.

---

## :material-calendar-check: When to Use

- **Start of project** -- baseline SVP sensor validation before survey operations begin
- **When an SVP or CTD sensor returns from factory calibration** -- confirm the recalibrated sensor reads consistently
- **Client requirement** -- some clients mandate a repeatability test as part of the mobilisation deliverables
- **When SVP data looks suspect during operations** -- sudden SV changes that do not correlate with known oceanographic conditions

---

??? info "Background"

    Acoustic ray paths are a function of water temperature, salinity, and density. These properties are largely unpredictable and vary both spatially and temporally. To preserve overall depth measurement accuracy, sound velocity observations must be made with sufficient frequency, spread, and accuracy.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| Sound velocity profiler(s) (e.g., SVX2, minSVS, or equivalent) | Acquiring sound velocity profiles |
| Deployment system (winch or manual) | Deploying and recovering the profiler |

---

!!! info "Prerequisites"

    - Suitable location with sufficient water depth (aim for water depths of the survey site where possible)
    - Vessel able to maintain a constant location during casts
    - SV probes with valid factory calibration (every two years unless otherwise specified)

---

## :material-list-status: Procedure

### Step 1: Select Profilers and Location

Choose the profilers to compare. Acceptable combinations include:

- 2 x SVP profilers
- 1 x SVP + 1 x alternative SV sensor
- 1 x SVP dipped twice

Choose a location with sufficient water depth where the vessel can hold station.

### Step 2: Soak the Sensor

Before the first cast, lower the SVP probe to approximately 10 m depth and hold it there for **10 - 20 minutes**. This allows the sensor to thermally equilibrate with the water, preventing false SV readings caused by the sensor starting at ambient air temperature.

### Step 3: Log Casts

Lower the probe at a descent rate of **< 1 m/s** to allow the sensor to respond to temperature and salinity changes. Log one SV cast (upcast and downcast). Immediately after, at the same location, log the second cast.

### Step 4: Compare Casts

Load both SV casts into a spreadsheet. Clean anomalies if needed (e.g., repeat depths, bobbing between depths). Plot sound velocity vs. depth with multiple systems/casts overlaid. The profiles should be very similar.

---

??? info "Operations Notes"

    - Under optimal conditions, take a minimum of 1 SV profile per 12 hours during operations
    - The senior surveyor on watch decides if additional SVPs are needed based on hydrographical conditions
    - All gathered sound velocity records must be documented with time and position stamps
    - The time of each SVP measurement should be noted in the online survey log
    - Various SV sensors may be used depending on project requirements: deck cast instruments, probes mounted on towed equipment, ROV-mounted probes, and hull-mounted sensors

---

!!! success "Quality Checks"

    - [x] Profiles from consecutive casts should closely match
    - [x] No unexplained divergence between casts at any depth
    - [x] Any anomalies (repeat depths, bobbing) identified and documented

---

!!! note "Reporting"

    Generate a comparison report for the MAC report showing:

    - Overlay plot of sound velocity vs. depth for all casts
    - Any anomalies identified and removed
    - Confirmation that profiles are consistent

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Accept | Marginal | Fail |
|-----------|--------|----------|------|
| SV agreement between casts at equivalent depths | Within 0.5 m/s | 0.5 - 1.0 m/s (investigate) | > 1.0 m/s |
| Sensor soak time before first cast | 10 - 20 minutes completed | < 10 minutes (note in report) | No soak performed |
| Descent rate | < 1 m/s | 1 - 2 m/s (reduced confidence in thermocline) | > 2 m/s |
| Profile shape consistency | Both casts show same thermocline structure | Minor differences in thermocline depth (< 2 m) | Completely different profile shapes |

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Disagreement between casts > 0.5 m/s at same depth | Thermal stratification changed between casts, sensor fouling, insufficient soak time | Perform casts in quicker succession, inspect and clean sensor face, allow full 20-minute soak before first cast |
| First cast reads significantly different from second | Sensor not thermally equilibrated (insufficient soak) | Discard first cast, soak for full 20 minutes, repeat both casts |
| Large SV spike at a specific depth | Bobbing (probe stopped and restarted at that depth), thermocline boundary effect | Clean the anomaly from the data, note in the report, re-cast if spike is in a critical depth zone |
| Profiles diverge below a certain depth | One cast did not reach full depth, different descent rates through thermocline | Ensure both casts reach the same depth, maintain consistent < 1 m/s descent rate |
| SV values seem unreasonable for the water conditions | Sensor out of factory calibration, sensor malfunction | Check factory calibration date (must be within 2 years), compare against expected SV for the water temperature and salinity |

---

## :material-link-variant: Related Articles

- [ROVINS/PHINS DVL Calibration](../positioning/ixblue-ins-dvl-calibration.md) -- DVL calibration affected by sound velocity accuracy
- [SPRINT (Syrinx) DVL Calibration](../positioning/sprint-syrinx-dvl-calibration.md) -- DVL calibration requiring current SVP
- [SPRINT-NAV DVL Verification](../positioning/sprint-nav-dvl-verification.md) -- drift verification affected by SV conditions
- [Gyro Types and Calibration](../mobilisation/gyro-types-and-calibration.md) -- heading reference calibration procedures
