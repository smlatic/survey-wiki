---
title: Gyro Types and Calibration
category: calibration
tags: [gyrocompass, heading, calibration, spinning mass, fog, rlg, gams, gnss compass, convergence, total station, rov, structure]
equipment: [Spinning Mass Gyrocompass, Fibre Optic Gyrocompass, Ring Laser Gyrocompass, GNSS Compass, Total Station]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-compass-rose: Gyro Types and Calibration

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-book-open-variant: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Detail the types, accuracies, installation requirements, and calibration methods for gyrocompasses used on vessels, ROVs, and structures in offshore survey operations. Covers spinning mass, fibre optic, ring laser, and GNSS-based heading systems.

---

## :material-format-list-bulleted-type: Gyro Types and Accuracies

A gyrocompass provides heading relative to True North for vessels, ROVs, and structures.

| Heading Reference System | System Accuracy |
|-------------------------|----------------|
| Spinning mass gyrocompass | +/-0.2 deg x secant(latitude) |
| Fibre optic gyrocompass (FOG) | +/-0.1 deg x secant(latitude) |
| Ring laser gyrocompass (RLG) | <0.05 deg x secant(latitude) |
| GNSS compass (GAMS), 2 m baseline | +/-0.02 deg |
| GNSS compass (GAMS), 4 m baseline | +/-0.01 deg |

!!! note "Latitude Dependency"
    For spinning mass, FOG, and RLG types, the quoted accuracy requires the latitude (via a $GGA or $GLL telegram) to be interfaced to the gyrocompass, and the unit must have settled for the period specified in the manual.

    **Example**: Spinning mass gyrocompass at 30 deg latitude:
    +/-0.2 x secant(30) = +/-0.23 deg

---

## :material-test-tube: Bench Test Procedure

Prior to installation, every gyrocompass (except GNSS-based systems) must be bench tested in the workshop against a known heading.

| Step | Action |
|------|--------|
| 1 | Butt the gyrocompass housing against a baseline of known azimuth in the workshop |
| 2 | Set the latitude for the test location; set speed to 0 |
| 3 | Start data logging from power-up |
| 4 | Log continuously for **24 hours** |
| 5 | Display results graphically to confirm the gyrocompass conforms to manufacturer specification |
| 6 | Include the bench test certificate with the shipment when the gyrocompass is mobilised |

!!! info "On Arrival"
    When unpacking the equipment, take a copy of the bench test certificate for inclusion in the mobilisation report. Confirm the bench test was performed within 6 months of the project start date.

---

## :material-earth: Convergence Calculation

A gyrocompass outputs azimuth relative to True North. To convert True North to Grid North, convergence must be applied.

**Formula:**

**Grid Heading = True Heading - (+/-Convergence)**

- Convergence varies depending on latitude, longitude, and the map projection in use
- The navigation software calculates and applies convergence to convert True heading to Grid heading

!!! warning "Critical During Alongside Calibrations"
    When calibrating alongside, land survey techniques produce a bearing for the vessel's fore/aft axis. It is essential to establish whether this bearing is reported in True or Grid, and to apply convergence where applicable. Ensure the dimensional control team and the vessel surveyors use the same geodetic parameters.

---

## :material-calendar-clock: Calibration Schedule

| Heading Reference System | New Installation | New Project | Ongoing Projects |
|-------------------------|-----------------|-------------|-----------------|
| Spinning mass gyrocompass | Always | Always | Quarterly |
| Fibre optic gyrocompass (FOG) | Always | Not required unless specified by client | Annually |
| Ring laser gyrocompass (RLG) | Always | Not required unless specified by client | Annually |
| GNSS compass (GAMS) | Always | Not required unless specified by client | Annually |

Where more than one heading reference is available, they should be continuously compared and monitored within the navigation software. Differences larger than the quoted accuracy of the instruments must be investigated and resolved. If necessary, operations must be halted until the difference is resolved.

---

## :material-ferry: Vessel Gyro Installation

| Requirement | Detail |
|-------------|--------|
| **Location** | Away from foot traffic to avoid being knocked or moved. Adequate power supply and cable routing access. |
| **Power** | Must be on a UPS -- any power interruption requires the gyro to re-settle |
| **Mounting surface** | Fix a piece of marine plywood (or similar) to the floor using hot-melt glue. Always check with the marine crew before fixing to the deck. |
| **Floating floor warning** | Confirm with the marine crew that the floor is NOT a floating floor. Floating floors have no solid connection to the ship's superstructure and may move, invalidating any calibration. |
| **Orientation** | Orient the North alignment mark on the gyrocompass towards the bow. If practical, power up the gyrocompass, note the heading from the vessel's compass, gently rotate to the observed heading, then mark the floor around the housing before fixing. |
| **Fixing method** | Screw down (check screw length -- cables/pipework may be below the floor) and/or hot-melt glue (quick curing, easy to remove later) |

---

## :material-satellite-variant: GAMS Antenna Installation

GNSS Azimuth Measurement System (GAMS) antennas must be installed at the top of the mast or in an area with no overhead obstructions.

| Requirement | Detail |
|-------------|--------|
| **Baseline** | Minimum 3 m between antennas (can be less if the job specification allows) |
| **Orientation** | Mount the bracket with antennas oriented fore and aft, in-line with the vessel axis |
| **Forward antenna** | Ensure the forward antenna is connected to the correct receiver socket -- wrong connection produces a heading 180 deg out |
| **Baseline measurement** | If no pre-defined bracket is supplied, the baseline distance must be measured during dimensional control. Greater accuracy in baseline measurement enables faster heading resolution |
| **Moisture** | Pre-mount antennas on the bracket and connect cables in a dry location -- moisture in connectors causes signal attenuation |
| **Cable identification** | Mark each antenna cable at both ends with different coloured tape to avoid confusion |
| **Working at height** | The installer must be working-at-height certified with a suitable risk assessment completed |

---

## :material-total-station: Calibration by Total Station

This method is used for vessel-mounted gyrocompasses while alongside. It is also valid for ROV gyrocompasses (ROV on quayside) and structures in a yard.

### Dual Total Station Setup

1. Set up two total stations on known control points on the quayside, close to the bow and stern of the vessel, with clear line of sight to targets on the vessel
2. Targets should ideally be prisms mounted on dimensionally controlled points on the vessel centreline (or on the side, parallel to the centreline)
3. Observe horizontal range and bearings to the prisms from the total stations
4. Simultaneously log total station data and raw vessel gyrocompass data

### Pre-Logging Checks

- Remove all existing C-O corrections from the gyrocompass
- Verify the correct latitude and speed (0) are entered
- Confirm the gyrocompass has fully settled

### Worked Example with Convergence

The total station bearings and gyrocompass data are processed to determine the C-O correction.

**Key convergence consideration:**

- Establish whether the bearings from the dimensional control surveyors are True or Grid
- The convergence is calculated in the navigation software and depends on the geodetic parameters in use
- Both the dimensional control team and the vessel surveyors must use the same geodetic parameters

### Practical Notes

- Conduct the calibration during a period with no crane operations (these cause vessel movement)
- Request the marine crew to tighten mooring ropes to reduce vessel movement in port
- This method provides a reference heading with precision typically <0.1 deg (actual precision depends on vessel stability)

---

## :material-robot-industrial: ROV Gyro Calibration by LARS Reference + Tape Measurements

This method is used for ROV-mounted gyrocompasses while the ROV is on deck on the LARS (Launch and Recovery System). It can be performed alongside or at sea (at sea: vessel should be stationary on a constant heading to avoid latency and speed bias).

### Prerequisites

The LARS system must first be observed by dimensional control to determine the orientation of the main structural members (beams) forming the platform the ROV sits on, relative to the vessel centreline.

### Measurement Procedure

1. Measure taped or EDM offsets fore and aft on the ROV frame, perpendicular to the LARS reference beam
2. Measure the distance between the fore and aft measurement points along the ROV frame

### Angle A Calculation (ROV frame misalignment to LARS frame)

**Angle A = tan-1( (a - b) / c )**

Where:

- a = perpendicular offset at the forward measurement point
- b = perpendicular offset at the aft measurement point
- c = distance between the measurement points along the ROV frame

**Worked example:**

- a = 0.665 m
- b = 0.625 m
- c = 2.340 m
- Angle A = tan-1( (0.665 - 0.625) / 2.340 ) = **0.98 deg**

### Data Logging

- Allow both the vessel and ROV gyrocompasses to settle
- Enter the local latitude into both gyrocompasses
- Log data from both gyrocompasses for a **minimum of 30 minutes**

### C-O Calculation

1. **LARS heading** = Vessel heading - LARS dimensional control correction (subtract if anticlockwise)
2. **ROV heading** = Observed ROV gyro heading + Angle A (add if the ROV frame faces anticlockwise relative to the LARS reference)
3. **ROV gyrocompass C-O** = LARS heading - ROV frame heading

**Worked example:**

- Vessel heading: 189.91 deg
- LARS dimcon correction: 89.96 deg (anticlockwise, so subtract)
- LARS heading = 189.91 - 89.96 = **99.95 deg**
- Observed ROV heading: 104.23 deg
- ROV heading = 104.23 + 0.98 = **105.21 deg**
- C-O = 99.95 - 105.21 = **-5.26 deg**

A C-O of -5.26 deg must be applied to the ROV gyrocompass data to correct its heading.

---

## :material-satellite-uplink: Calibration by GNSS Compass Comparison

This method may be used for vessel-mounted gyrocompasses. It can be performed alongside or offshore (if offshore, the vessel must be stationary on a constant heading).

### Setup

1. Install dual GNSS antennas at known dimensionally controlled locations on the vessel, preferably on the centreline at a minimum distance of **3 m apart**
2. Enter the dimensional control offsets and the antenna separation distance into the GNSS system so it outputs heading relative to the vessel centreline

### Procedure

- Allow the vessel gyrocompass to settle; enter local latitude and speed
- Log data from both the GNSS heading system and the gyrocompass for a **minimum of 30 minutes**

### C-O Calculation

**Vessel gyrocompass C-O = GNSS heading - Vessel gyrocompass heading**

This method provides a reference heading with precision <0.1 deg; actual precision depends on the system used and the distance between the two GNSS antennas.

---

## :material-crane: Structure-Mounted Gyro Calibration in Fabrication Yard

This method is used for gyrocompasses installed on structures. It requires two control points of known coordinates and a single total station, and is carried out in the fabrication yard prior to load-out.

### Procedure

1. Fully install, power up, and settle the gyrocompass (set the correct latitude and speed for the calibration location)
2. Determine the centreline and heading of the structure using land survey techniques
3. If the heading is relative to Grid North, apply convergence to convert to True North for direct comparison with the gyrocompass
4. Log gyro data for at least **10 minutes** (where power is available, log 24 hours to prove instrument stability)
5. The C-O is determined by comparing the dimensionally controlled heading (relative to True North) with the observed gyrocompass heading

### Interchangeable Units

Where units are interchangeable between mount locations, each unit must be checked at each location.

Where precision-engineered mounts (e.g. stabs and receptacles) are used:

- A receptacle can be installed in a workshop with the heading of the guide slots precisely determined
- The heading of the guide slots on the structure relative to the centreline must be determined by land survey
- A gyro/stab combination may then be verified in the workshop without needing to check on the structure itself

This method provides a reference heading with precision <0.1 deg.

---

!!! success "Quality Checks"
    - [x] Bench test performed within 6 months of project start (certificate included in mobilisation report)
    - [x] Gyrocompass settled for the full period specified in the manual before any calibration
    - [x] All C-O corrections removed from the system before logging calibration data
    - [x] Correct latitude and speed entered into the gyrocompass
    - [x] Convergence correctly identified (True vs Grid) and applied
    - [x] Same geodetic parameters used by dimensional control and vessel surveyors
    - [x] Minimum 30 minutes of data logged for comparison calibrations
    - [x] Multiple heading references continuously compared and monitored within navigation software
    - [x] UPS connected to gyrocompass power supply
    - [x] GAMS antennas mounted with minimum 3 m baseline, no overhead obstructions, moisture-free connections

---

!!! quote "References"
    - IHO S-44 -- Standards for Hydrographic Surveys
    - IMCA S 017 -- Guidelines for the use of USBL systems
    - Equipment manufacturer calibration and installation guidelines
