---
title: SV/CTD Comparison Verification
category: calibration
tags: [sv, ctd, sound velocity, conductivity, temperature, depth, comparison, verification, sensor, chen-millero, cross-validation]
equipment: [Sound Velocity Profiler, CTD Unit, Deployment Frame, Winch]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-thermometer-water: SV/CTD Comparison Verification

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Verification</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Cross-validate sound velocity profiler (SVP) and CTD instruments by deploying them through the same water column and comparing their outputs. This confirms that both sensors are reading correctly, that CTD-derived sound velocity agrees with directly measured sound velocity, and that the instruments are fit for operational use on the project.

---

## :material-calendar-check: When to Use

Perform this comparison:

- **Start of project** when both SVP and CTD are in the survey spread
- After a sensor returns from **factory calibration** or repair
- When the **client requires cross-validation** between independent instruments
- If operational data suggests a discrepancy between SVP and CTD readings
- When deploying a new or unfamiliar sensor alongside a known-good reference unit

---

## :material-book-open-variant: Theory and Principles

### Sound Velocity Measurement Methods

There are two independent ways to determine sound velocity in seawater:

1. **Direct measurement (SVP)**: The sensor measures the travel time of an acoustic pulse over a known path length and calculates velocity directly. This is the most accurate method for a single-point measurement.

2. **Derived measurement (CTD)**: The sensor measures conductivity (C), temperature (T), and pressure/depth (P). Sound velocity is then computed using an empirical equation, most commonly the **Chen-Millero (1977)** equation or the **UNESCO algorithm (Del Grosso)**. These equations are accurate to approximately 0.1 m/s when the input measurements are within specification.

### Why Cross-Validate

Each method has different failure modes. A fouled conductivity cell on a CTD will produce wrong salinity and therefore wrong derived SV, but the temperature and depth readings may look fine. A direct SVP with a contaminated acoustic path will give wrong SV readings but has no other parameter to cross-check against. By comparing both methods, faults that would be invisible in a single instrument become detectable.

### Thermal Lag (Hysteresis)

CTD sensors exhibit thermal lag: the temperature sensor responds faster than the conductivity cell. This causes a difference between downcast and upcast profiles, particularly at thermoclines. The downcast is normally preferred for comparison because the sensor enters undisturbed water. The upcast passes through water already mixed by the instrument frame.

---

## :material-tools: Equipment Required

| Equipment | Role |
|-----------|------|
| Sound velocity profiler (e.g. Valeport miniSVS, SVX2, or equivalent) | Direct SV measurement |
| CTD unit (e.g. Valeport MIDAS, Seabird, AML) | Conductivity, temperature, depth measurement |
| Deployment frame or rosette | Mounting both instruments for simultaneous deployment |
| Winch or manual deployment line | Controlled lowering and recovery |
| Processing software (Velocipy, SBE Data Processing, or spreadsheet) | Data comparison and plotting |

---

!!! info "Prerequisites"

    - Both instruments have valid **factory calibration certificates** that will remain in-date for the project duration.
    - Calibration coefficients loaded into each instrument match the current calibration certificate.
    - Sensors cleaned and inspected. No fouling on conductivity cells, acoustic paths, or pressure ports.
    - Suitable deployment location identified: sufficient depth, vessel able to hold station, minimal current.
    - Sea state suitable for controlled deployment (avoid deploying in heavy swell if frame stability is a concern).

---

## :material-list-status: Procedure

### Step 1: Prepare Instruments

1. Verify calibration certificate dates for both SVP and CTD.
2. Confirm calibration coefficients loaded in each instrument match the certificate.
3. Clean all sensor elements: conductivity cell, temperature probe, pressure port, acoustic path.
4. Power on both instruments and confirm they are logging correctly (check live readings on deck if the interface allows).

### Step 2: Mount on Deployment Frame

!!! tip "Simultaneous Deployment Preferred"
    Mount both instruments on the **same frame** at the same depth on the frame. This ensures both sensors sample the same water at the same time, eliminating temporal and spatial differences. If only one deployment line is available, mount one above the other with minimum separation.

If simultaneous deployment is not possible:

- Deploy sequentially, **within 15 minutes** of each other
- Deploy at the **same location** (vessel holding station)
- Note the time offset between casts for the analysis

### Step 3: Deploy Through Water Column

1. Lower the frame at a controlled, steady rate: approximately **0.5 to 1.0 m/s** descent speed.
2. Deploy to the **full operational depth** of the project, or a minimum of **500 m**, whichever is less.
3. Pause at the bottom of the cast for 30 seconds to confirm depth reading stabilisation.
4. Recover at the same controlled rate.
5. Log both downcast and upcast data.

!!! warning "Descent Speed Matters"
    Lowering too fast can cause flow effects on conductivity cells and pressure sensor lag. Keep the descent speed below 1.0 m/s for best results. If using a free-fall profiler, ensure it is within its rated descent speed.

### Step 4: Compare Profiles

Load both datasets into processing software or a spreadsheet and compare at **10 m depth intervals**:

| Depth (m) | SVP SV (m/s) | CTD Temp (C) | CTD Sal (PSU) | CTD-Derived SV (m/s) | Difference (m/s) | Pass/Fail |
|:---------:|:------------:|:------------:|:-------------:|:--------------------:|:-----------------:|:---------:|
| 10 | 1512.3 | 14.82 | 35.12 | 1512.0 | +0.3 | Pass |
| 20 | 1511.8 | 14.65 | 35.14 | 1511.5 | +0.3 | Pass |
| 50 | 1509.2 | 13.10 | 35.18 | 1509.5 | -0.3 | Pass |
| 100 | 1504.1 | 10.25 | 35.20 | 1504.8 | -0.7 | Pass |
| ... | ... | ... | ... | ... | ... | ... |

### Step 5: Cross-Validation (CTD-Derived SV vs Direct SVP)

1. Compute sound velocity from CTD data using the **Chen-Millero equation** (most processing software does this automatically from T, S, P inputs).
2. Plot CTD-derived SV and directly measured SVP on the same depth axis.
3. Compute the difference at each 10 m depth interval.
4. Identify any depth ranges where the difference exceeds the acceptance criteria.

### Step 6: Assess Downcast vs Upcast Hysteresis

For the CTD data:

1. Plot downcast and upcast CTD-derived SV profiles.
2. The difference between downcast and upcast indicates thermal lag.
3. Hysteresis greater than 0.5 m/s at any depth suggests the conductivity cell needs cleaning or the descent speed was too fast.

### Step 7: Document Results

Compile a comparison report including:

- Equipment table with serial numbers and calibration certificate dates
- Overlay plot: SVP profile, CTD-derived SV profile, and difference profile
- Tabular comparison at 10 m depth intervals
- Downcast vs upcast hysteresis plot for CTD
- Pass/fail statement against acceptance criteria
- Any anomalies identified and explained

---

## :material-check-decagram: Acceptance Criteria

!!! success "Pass Criteria"

    | Parameter | Tolerance | Notes |
    |-----------|:---------:|-------|
    | **Direct SVP vs Direct SVP** (two SVP units) | &le; 0.5 m/s at all depths | Both sensors measuring directly |
    | **CTD-derived SV vs Direct SVP** | &le; 1.0 m/s at all depths | Accounts for equation uncertainty |
    | **Depth sensor agreement** | &le; 0.5% of depth | Between SVP depth and CTD depth sensors |
    | **CTD downcast vs upcast hysteresis** | &le; 0.5 m/s | At all depths, for CTD-derived SV |
    | **Temperature agreement** (if both have temp sensors) | &le; 0.05 C | Direct comparison at same depth |

!!! warning "Thermocline Zones"
    At sharp thermoclines, differences may be larger due to slight depth offsets between sensors and the steep SV gradient. If a single depth interval fails at a thermocline but all other depths pass, this is generally acceptable. Document it and note the gradient magnitude.

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| SV offset is constant at all depths | Calibration coefficient error in one instrument | Re-check coefficients against the calibration certificate. Reload if necessary. |
| SV diverges with depth | Pressure sensor error on one unit, or wrong salinity correction | Compare pressure/depth readings between units. Check if CTD salinity looks reasonable for the area. |
| CTD-derived SV consistently higher or lower than direct SVP | Wrong equation selected, or conductivity cell fouled | Confirm Chen-Millero or appropriate equation is used. Clean and re-deploy. |
| Large hysteresis between downcast and upcast | Thermal lag from fast descent, fouled conductivity cell | Reduce descent speed. Clean conductivity cell. If persistent, the cell may need factory service. |
| Noisy SV profile on one sensor | Air bubble in acoustic path (SVP), cable leak, or electrical interference | Soak the SVP for several minutes before cast to purge bubbles. Check cable connectors for water ingress. |
| Depth disagreement between units | Different pressure sensor calibrations, or one sensor not zeroed at surface | Zero both depth sensors at the surface before deployment. Re-check calibration certificates. |

---

## :material-link-variant: Related Articles

- [Sound Velocity Operations](sound-velocity-operations.md)
- [SVP Repeatability Test](svp-repeatability-test.md)
- [MBES Operations and Settings](../equipment/mbes-operations-and-settings.md)

---

!!! quote "References"
    - Chen, C.T. and Millero, F.J. (1977), Speed of sound in seawater at high pressures, JASA 62(5)
    - IMCA S 017, Guidelines for Position Reference Systems
    - Valeport / Seabird / AML instrument user manuals
