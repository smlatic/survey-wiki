---
title: Total Propagated Uncertainty and Error Budgets
category: reference
tags: [tpu, error-budget, uncertainty, iho-s44, thu, tvu, rss, calibration, acceptance, sensor-accuracy]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-chart-bell-curve: Total Propagated Uncertainty and Error Budgets

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Reference covering Total Propagated Uncertainty (TPU), error budget construction, IHO S-44 accuracy requirements, and practical strategies for meeting survey specifications. Explains how individual sensor uncertainties combine to produce the total uncertainty in each sounding, and how to identify which components dominate the error budget. Understanding TPU is essential for planning surveys that will meet the required accuracy order and for diagnosing data quality issues when they do not.

---

## :material-calendar-check: When to Use

Refer to this article:

- When building an error budget for a survey project during planning
- When assessing whether the survey system can meet the required IHO order
- When investigating why TPU values exceed specification
- When deciding which sensor or calibration to improve to reduce uncertainty
- When reviewing or preparing a TPU analysis for a survey report
- When comparing TPU against IHO S-44 acceptance criteria

---

## :material-information-outline: Overview

Every measurement has uncertainty. In a multibeam bathymetric survey, the final depth at each sounding is the result of many individual measurements: GNSS position, attitude (pitch, roll, heading), sound velocity, heave, draft, tidal reduction, and timing. Each of these has its own uncertainty. TPU is the process of combining all individual uncertainties into a single value that represents the total uncertainty in each sounding's position and depth. The two key outputs are THU (Total Horizontal Uncertainty) and TVU (Total Vertical Uncertainty), both expressed at the 95% confidence level.

---

## :material-book-open-variant: Theory and Principles

### RSS Error Propagation

When individual error sources are independent (uncorrelated), they combine using the Root Sum of Squares (RSS) method:

**Total = sqrt(a^2 + b^2 + c^2 + ...)**

Where a, b, c, etc. are the individual 1-sigma (68%) uncertainty values for each error source.

The key property of RSS: the total is always dominated by the largest individual component. A single large error source matters far more than several small ones.

!!! info "Worked Example: RSS"
    Three independent error sources contribute to vertical uncertainty:

    - Heave: 0.05 m
    - Tidal reduction: 0.10 m
    - Sound velocity (depth-dependent): 0.08 m

    RSS total (1-sigma) = sqrt(0.05^2 + 0.10^2 + 0.08^2) = sqrt(0.0025 + 0.0100 + 0.0064) = sqrt(0.0189) = **0.137 m**

    At 95% confidence (multiply by 1.96): **0.269 m**

    Note that the tidal reduction component (0.10 m) dominates. Improving heave from 0.05 m to 0.02 m would reduce the total from 0.137 m to 0.130 m. Improving tidal reduction from 0.10 m to 0.05 m would reduce the total from 0.137 m to 0.107 m. **Always target the largest contributor first.**

### Correlated vs Uncorrelated Errors

RSS assumes independence. Some error sources are correlated:

- **Timing errors** correlate with vessel speed and motion
- **Sound velocity errors** correlate with beam angle and depth
- **Attitude errors** correlate with beam angle

In practice, error budget software (CARIS HIPS, QPS Qimera, POSPac) handles these correlations through the full TPU propagation model. For manual error budgets, treating all sources as independent via RSS gives a conservative (slightly pessimistic) estimate, which is acceptable for planning purposes.

### THU and TVU

**THU (Total Horizontal Uncertainty)**: The uncertainty in the horizontal position of a sounding. At nadir, THU is dominated by the vessel positioning system (GNSS). At the outer beams, attitude errors and sound velocity errors also contribute to THU.

**TVU (Total Vertical Uncertainty)**: The uncertainty in the depth of a sounding. TVU is affected by nearly every sensor in the system: heave, tidal reduction, sound velocity, attitude (through beam steering), draft, and more.

Both are expressed at the **95% confidence level** for IHO compliance.

---

## :material-check-decagram: IHO S-44 Requirements

IHO S-44 Edition 6.1.0 defines the maximum allowable THU and TVU for each survey order.

### Horizontal Uncertainty

| Order | Maximum THU (95%) |
|:-:|:--|
| **Exclusive** | 1 m |
| **Special** | 2 m |
| **1a** | 5 m + 5% of depth |
| **1b** | 5 m + 5% of depth |
| **2** | 20 m + 10% of depth |

### Vertical Uncertainty

TVU is computed using the formula:

**TVU = sqrt(a^2 + (b x d)^2)**

Where:

- **a** = constant depth-independent uncertainty (metres)
- **b** = coefficient of depth-dependent uncertainty (dimensionless)
- **d** = depth (metres)

| Order | a (metres) | b | TVU at 10 m | TVU at 30 m | TVU at 50 m | TVU at 100 m |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Exclusive** | 0.15 | 0.0075 | 0.16 m | 0.27 m | 0.40 m | 0.76 m |
| **Special** | 0.25 | 0.0075 | 0.26 m | 0.31 m | 0.45 m | 0.78 m |
| **1a** | 0.50 | 0.013 | 0.51 m | 0.60 m | 0.81 m | 1.40 m |
| **1b** | 0.50 | 0.013 | 0.51 m | 0.60 m | 0.81 m | 1.40 m |
| **2** | 1.00 | 0.023 | 1.00 m | 1.16 m | 1.49 m | 2.47 m |

!!! warning "Depth Dependence"
    At shallow depths (< 20 m), the constant term **a** dominates the TVU budget. At deeper depths (> 50 m), the depth-dependent term **b x d** becomes increasingly significant. This means that the relative difficulty of meeting the specification changes with depth. Exclusive Order at 100 m depth requires TVU < 0.76 m, which is challenging for any system.

---

## :material-clipboard-list-outline: Error Budget Components

### Component Breakdown for Vessel MBES Survey

The following table lists the major error sources and their typical contribution to THU and TVU.

| Error Source | Affects | Typical Uncertainty (1-sigma) | Notes |
|:--|:-:|:-:|:--|
| **GNSS positioning (PPP)** | THU | 0.05-0.15 m | Horizontal component |
| **GNSS positioning (DGNSS)** | THU | 0.5-2.0 m | Depends on correction service |
| **GNSS vertical (PPP)** | TVU | 0.10-0.30 m | Only relevant for GNSS tides |
| **USBL positioning** | THU | 0.1-1% of slant range | For subsea operations |
| **Pitch** | TVU (outer beams) | 0.01-0.02 deg | Effect increases with beam angle |
| **Roll** | TVU (outer beams) | 0.01-0.02 deg | Dominant attitude effect on depth |
| **Heading** | THU (outer beams) | 0.02-0.10 deg | Effect increases with beam angle and depth |
| **Sound velocity (surface)** | TVU, THU (outer beams) | 0.5-2.0 m/s | Affects ray tracing |
| **Sound velocity (profile)** | TVU, THU (outer beams) | Variable | Depends on SVP age and water column stability |
| **Draft / static offset** | TVU | 0.02-0.05 m | Measured during DC survey |
| **Tidal reduction (gauge)** | TVU | 0.03-0.10 m | Depends on gauge quality and distance |
| **Tidal reduction (GNSS)** | TVU | 0.10-0.20 m | Depends on geoid model |
| **Tidal reduction (predicted)** | TVU | 0.10-0.50 m | Highly location-dependent |
| **Heave (MRU)** | TVU | 0.05 m or 5% | Whichever is greater |
| **Timing / latency** | TVU, THU | 1-10 ms | Motion-correlated error |
| **Transducer offsets (DC survey)** | TVU, THU | 0.01-0.03 m | From dimensional control accuracy |

### How Components Vary with Beam Angle

The uncertainty of outer beam soundings is significantly larger than nadir soundings. This is because:

1. **Attitude errors** are multiplied by the slant range, which increases with beam angle
2. **Sound velocity errors** accumulate along a longer ray path and produce greater angular deviation
3. **Timing errors** produce larger positional offsets due to the across-track component of vessel motion

| Beam Angle | Relative TVU (vs Nadir) | Relative THU (vs Nadir) |
|:-:|:-:|:-:|
| 0 deg (nadir) | 1.0x | 1.0x |
| 30 deg | 1.2x | 1.5x |
| 45 deg | 1.5x | 2.5x |
| 60 deg | 2.5x | 4.0x |
| 65 deg | 3.0x | 5.0x |

!!! tip "Practical Consequence"
    If the nadir TVU barely meets specification, the outer beam TVU will exceed it. Plan the swath width so that the outermost accepted beams still meet the required order. For Exclusive and Special Order, this often means limiting the swath to 4x water depth or less.

---

## :material-calculator: Worked Example: Error Budget at 50 m Depth

**Scenario**: Vessel MBES survey, 50 m water depth, IHO Order 1a required.

**IHO 1a TVU allowance at 50 m**: sqrt(0.50^2 + (0.013 x 50)^2) = sqrt(0.25 + 0.4225) = sqrt(0.6725) = **0.82 m (95%)**

**IHO 1a THU allowance at 50 m**: 5 + 0.05 x 50 = **7.5 m (95%)**

### TVU Budget (Nadir, 1-sigma values)

| Component | Uncertainty (1-sigma) | Squared |
|:--|:-:|:-:|
| Heave | 0.05 m | 0.0025 |
| Tidal reduction (gauge, 8 km from site) | 0.06 m | 0.0036 |
| Sound velocity (profile age < 4 hrs) | 0.04 m | 0.0016 |
| Draft / loading | 0.03 m | 0.0009 |
| Roll (0.01 deg at nadir) | 0.00 m | 0.0000 |
| Pitch (0.01 deg at nadir) | 0.01 m | 0.0001 |
| GNSS vertical (not used for tides) | 0.00 m | 0.0000 |
| Timing (5 ms, calm conditions) | 0.01 m | 0.0001 |
| Transducer offset (DC survey) | 0.02 m | 0.0004 |
| **RSS Total (1-sigma)** | **0.096 m** | **0.0092** |
| **95% confidence (x 1.96)** | **0.188 m** | |

**Result**: 0.188 m TVU at 95% vs 0.82 m allowance. **Passes with significant margin at nadir.**

### TVU Budget (60 deg beam angle, 1-sigma values)

| Component | Uncertainty (1-sigma) | Squared |
|:--|:-:|:-:|
| Heave | 0.05 m | 0.0025 |
| Tidal reduction | 0.06 m | 0.0036 |
| Sound velocity (longer ray path) | 0.12 m | 0.0144 |
| Draft / loading | 0.03 m | 0.0009 |
| Roll (0.01 deg, 100 m slant range) | 0.017 m | 0.0003 |
| Pitch (0.01 deg) | 0.01 m | 0.0001 |
| Timing (5 ms, across-track motion) | 0.03 m | 0.0009 |
| Transducer offset | 0.02 m | 0.0004 |
| **RSS Total (1-sigma)** | **0.152 m** | **0.0231** |
| **95% confidence (x 1.96)** | **0.298 m** | |

**Result**: 0.298 m TVU at 95% vs 0.82 m allowance. **Still passes, but margin is reduced.** Sound velocity is now the dominant contributor.

### THU Budget (Nadir, 1-sigma)

| Component | Uncertainty (1-sigma) | Squared |
|:--|:-:|:-:|
| GNSS positioning (PPP) | 0.10 m | 0.0100 |
| Heading (0.05 deg at nadir) | 0.00 m | 0.0000 |
| Timing | 0.01 m | 0.0001 |
| Transducer offset | 0.02 m | 0.0004 |
| **RSS Total (1-sigma)** | **0.103 m** | **0.0105** |
| **95% confidence (x 1.96)** | **0.201 m** | |

**Result**: 0.201 m THU at 95% vs 7.5 m allowance. **Easily passes.**

---

## :material-tune: How Calibration Quality Feeds Into TPU

Calibration does not eliminate errors. It reduces the residual systematic offsets to a known, small value. The quality of the calibration determines the size of the residual that enters the TPU budget.

| Calibration | Good Result (Residual) | Poor Result (Residual) | Effect on TPU |
|:--|:-:|:-:|:--|
| MBES patch test (roll) | < 0.05 deg | 0.2 deg | Roll residual x slant range adds to TVU |
| MBES patch test (pitch) | < 0.05 deg | 0.2 deg | Pitch residual adds to along-track depth error |
| MBES patch test (heading) | < 0.1 deg | 0.5 deg | Heading residual x depth adds to THU at outer beams |
| MBES patch test (timing) | < 1 ms | 10 ms | Timing error x vessel speed adds to THU |
| SVP calibration | < 0.5 m/s | 2.0 m/s | SV error x depth / SV adds to TVU and THU at outer beams |
| MRU calibration (AHRS) | < 0.02 deg | 0.05 deg | Attitude residual feeds directly into beam steering error |
| Dimensional control survey | < 0.01 m | 0.05 m | Offset errors add as constant biases |

!!! success "The Takeaway"
    A well-calibrated system with residuals at the manufacturer specification level will produce significantly lower TPU than a poorly calibrated system. If your TPU exceeds the specification, check calibration quality before anything else.

---

## :material-alert-circle: When TPU Exceeds Specification

When the computed TPU exceeds the IHO order required by the project, the options are:

### 1. Improve the Worst Contributing Sensor

Identify the dominant error source from the budget and address it:

- **GNSS positioning**: Switch from DGNSS to PPP, or add a second GNSS system for comparison
- **Tidal reduction**: Switch from predicted tides to gauge, or from gauge to GNSS tides if the gauge is distant
- **Sound velocity**: Increase SVP cast frequency, deploy a moving vessel profiler, or use a surface SV sensor
- **Heave**: Verify MRU filter period, check lever arms, consider GNSS-aided heave

### 2. Reduce Swath Width

Outer beams always have higher TPU. Reducing the accepted swath width from, say, 6x water depth to 4x water depth eliminates the highest-uncertainty soundings. This costs additional survey lines but can bring the dataset into specification.

### 3. Tighter SVP Schedule

Sound velocity is often the largest contributor at the outer beams. Increasing the SVP cast frequency from every 4 hours to every 2 hours, or deploying a real-time surface SV sensor, reduces this component.

### 4. Negotiate with Client

If the specification cannot be met with the available equipment and conditions, present the error budget to the client with a clear explanation of which components limit the achievable accuracy. The client may accept a lower order for parts of the survey area, or accept reduced swath coverage.

!!! danger "Do Not Fudge the Numbers"
    An error budget must represent the actual system performance. Artificially reducing component values to make the total fit the specification is a professional integrity issue. If the system cannot meet the order, report it.

---

## :material-link-variant: Related Articles

- [Acceptance Criteria Reference](acceptance-criteria-reference.md)
- [MBES Calibration (Patch Test)](../calibration/mbes-calibration.md)
- [Heave, MRU Theory and Verification](../equipment/heave-mru-theory.md)
- [MBES Operations and Settings](../equipment/mbes-operations-and-settings.md)
- [Sound Velocity Operations](../calibration/sound-velocity-operations.md)
- [Tidal Theory and Reduction Methods](../positioning/tidal-reduction-methods.md)
- [Coordinate Systems and Datums](coordinate-systems-datums.md)

---

## :material-table: Quick Reference

| Parameter | Value |
|:--|:-:|
| RSS formula | sqrt(a^2 + b^2 + c^2 + ...) |
| 1-sigma to 95% confidence | Multiply by 1.96 |
| IHO Exclusive Order THU | 1 m |
| IHO Special Order THU | 2 m |
| IHO 1a TVU formula | sqrt(0.50^2 + (0.013 x d)^2) |
| IHO 1a TVU at 30 m | 0.60 m |
| IHO 1a TVU at 50 m | 0.82 m |
| IHO 1a TVU at 100 m | 1.40 m |
| Typical nadir TVU (well-calibrated system) | 0.15-0.25 m (95%) |
| Typical 60 deg beam TVU multiplier | ~2.5x nadir |
| PPP horizontal uncertainty (1-sigma) | 0.05-0.15 m |
| MRU heave uncertainty | 0.05 m or 5% |
| Heading effect on THU | heading_error x depth x sin(beam_angle) |

---

!!! quote "References"
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - Hare, R., Depth and Position Error Budgets for Multibeam Echosounding (IJHR, 1995)
    - Calder, B.R. and Mayer, L.A., Automatic Processing of High-Rate, High-Density Multibeam Echosounder Data
    - IMCA S 015, Guidelines for the use of Multibeam Echosounders
    - Equipment manufacturer specifications (Kongsberg, R2Sonic, Applanix, iXblue)
