---
title: Depth Measurement Operations
category: calibration
tags: [depth, pressure sensor, digiquartz, paroscientific, valeport, miniips, bathymetry, pressure to depth, UNESCO, density, CTD, closed loop, benchmark, metrology, level loop, FSD, barometer]
equipment: [Paroscientific Digiquartz 8000, Valeport MiniIPS]
date_added: 2026-03-08
last_reviewed: 2026-03-08
source_type: converted_procedure
---

# :material-arrow-collapse-down: Depth Measurement Operations

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-cog-outline: <strong>Operations Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-08</strong></span>
</div>

!!! abstract "Purpose"
    Detail the processes to ensure that pressure-based depth sensors are installed, calibrated, deployed, and operated as per manufacturer's instructions. Covers sensor types, accuracies, installation on ROV, pressure-to-depth conversion formulae (Navipac and 4DNAV), and processing/reporting requirements including benchmark and closed loop methods.

---

## :material-information-outline: Overview

Depth measurement is a key aspect of hydrographic survey. While many methods exist (e.g. vessel-mounted echosounders), this article focuses on **pressure sensors** used to derive depth.

Pressure sensors measure **hydrostatic pressure** -- the weight of the water column above the sensor pressing down on it due to gravity. Before converting pressure to depth, several observations are required:

- **Latitude** (to calculate gravity)
- **Atmospheric pressure**
- **Sensor (hydrostatic) pressure**
- **Salinity**
- **Temperature**

Salinity, temperature, and gravity are combined with hydrostatic pressure to calculate seawater density, which is used in the conversion equations.

!!! info "SBES and MBES"
    Echo sounder depth measurement is covered separately -- see [MBES Operations and Settings](mbes-operations-and-settings.md) for multibeam.

---

## :material-gauge: Atmospheric Pressure

Standard atmospheric pressure at sea level is **1013.25 mbar**, equivalent to ~10 m of seawater. This must be subtracted from the raw pressure reading to get the true hydrostatic pressure.

Atmospheric pressure varies, so a **barometer** is used to log it throughout the survey. The barometer data is applied as an offset to derive hydrostatic pressure.

!!! tip "No Barometer Available"
    Where accuracy is not critical and no barometer is supplied, measure atmospheric pressure by logging the depth sensor **before** and **after** the survey on deck. Average these readings and use as the atmospheric offset.

---

## :material-water: Density

Density is mass per unit volume. Key values:

| Medium | Density | Condition |
|--------|---------|-----------|
| Fresh water | 1000 kg/m^3^ | at 4 C |
| Seawater (average) | 1025 kg/m^3^ | at 4 C, sea level |
| Ocean range | 1020 -- 1050 kg/m^3^ | surface to extreme depth |

The relationship between density and its components:

- **Pressure increases** :material-arrow-right: density increases (smallest effect -- water is nearly incompressible)
- **Salinity increases** :material-arrow-right: density increases
- **Temperature increases** :material-arrow-right: density decreases (largest effect)

!!! note "Density = Sound Velocity"
    The same three components (pressure, temperature, salinity) are also used to calculate sound velocity. See [Sound Velocity Operations](sound-velocity-operations.md).

### CTD Profiling

To calculate density for the full water column, a **CTD (Conductivity, Temperature, Depth)** instrument is deployed from surface to seabed and back (a "down and up cast"). The CTD measures pressure, conductivity, and temperature at regular intervals, producing a profile of the water column.

Casts must be conducted **frequently**, especially where there are large variations in depth, water temperature, or salinity (e.g. areas where rivers mix fresh water with seawater).

The water column profile data, combined with the atmospheric offset, is used to convert hydrostatic pressure to depth in metres or feet.

---

## :material-chip: Depth Sensor Types

Depth sensors measure pressure, from which depth is calculated. There are two main types:

| Type | Principle | How It Works |
|------|-----------|--------------|
| **Strain gauge** | Resistance varies with pressure | Converts pressure into a change in electrical resistance |
| **Digiquartz** | Frequency changes with pressure | Pressure applied to a quartz crystal changes its resonant frequency proportionally |

These sensors may be **stand-alone** or **integrated** into equipment such as a transponder, COMPATT, or sound velocity profiler.

Both types must be **temperature-compensated** -- a temperature sensor is always part of the device.

---

## :material-target: Absolute and Relative Accuracies

### Absolute Accuracy

Important for surveys where actual seabed depth matters (e.g. cable route or pipeline surveys).

Absolute accuracy depends on the sensor's **Full-Scale Deflection (FSD)** -- the maximum pressure the sensor is calibrated for. Accuracy is quoted as a **percentage of FSD**.

!!! example "Accuracy Calculation"
    For a project requirement of 500 m depth:

    - Choose the **0--700 m** range sensor
    - Absolute accuracy = 0.01% of 700 m = **+/-0.07 m**

    This is only the pressure sensor accuracy. Overall absolute accuracy combines errors from offset measurements and other sensors (altimeter, MBES, etc.).

**Paroscientific 8000 Series Absolute Ranges:**

| Range | Equivalent |
|-------|-----------|
| 0--10 mH~2~O | 30 psia, 0.21 MPa |
| 0--20 mH~2~O | 45 psia, 0.31 MPa |
| 0--60 mH~2~O | 100 psia, 0.69 MPa |
| 0--130 mH~2~O | 200 psia, 1.38 MPa |
| 0--200 mH~2~O | 300 psia, 2.07 MPa |
| 0--270 mH~2~O | 400 psia, 2.76 MPa |
| 0--700 mH~2~O | 1000 psia, 6.89 MPa |
| 0--1400 mH~2~O | 2000 psia, 13.8 MPa |
| 0--2000 mH~2~O | 3000 psia, 20.7 MPa |
| 0--3000 mH~2~O | 4400 psia, 30.3 MPa |
| 0--4000 mH~2~O | 6000 psia, 41.4 MPa |
| 0--7000 mH~2~O | 10000 psia, 68.9 MPa |

Choose the correct sensor for the depth of water you will be working in.

### Relative Accuracy

An order of magnitude better than absolute accuracy. Most relevant for **level loop surveys** during metrologies and structure inclinations.

In ideal conditions, relative accuracy is defined by the sensor **resolution** (also a percentage of FSD), provided:

- The relative depth over which it is measured is small (e.g. 10 m)
- The time duration of the loop is short (e.g. 30 minutes)

!!! example "Digiquartz Level Loop Accuracy"
    | Resolution | FSD | Resolution (m) | Level Loop Placement | Depth Combined |
    |-----------|-----|---------------|---------------------|----------------|
    | 0.0000000001% | 700 m | 0.0000000007 m | 0.010 m | 0.005 m |

---

## :material-certificate-outline: Depth Sensor Calibration

Requirements:

- Sensor must be **labelled with the FSD** and have a **valid calibration certificate**
- Certificate must show the unit was tested over the full FSD and is within manufacturer's specification
- Certificate is generally valid for **1 year**; for shorter projects, sensors may be sent offshore with a minimum of **6 months** validity remaining
- **Rescaling**: A sensor can be calibrated over a lesser range for improved accuracy on specific projects (must be done by a certified company)
- **Out-of-date certificates**: Do not use the instrument; return for recalibration
- A copy of the certificate must be kept in the **vessel/project folder**

---

## :material-wrench: Depth Sensor Installation

When mounting a depth sensor on the ROV:

!!! warning "Mounting Considerations"
    - Mount **clear of thruster wash** -- pressure varies in the wash, giving spurious readings
    - Mount **as near as possible to the centre of the ROV** (or close to the altimeter/MBES) to minimise pitch and roll effects
    - Mount in the **vertical position** for best absolute depth results
    - Mount **as far away from sand and silt** as practical
    - Ensure the **pressure port is not blocked**, obstructed, or covered with tape

### Pre-Installation Checks

**Sensor unit inspection:**

- Visually check the housing for damage or corrosion
- Check the connector and pins are clean, not tarnished, discoloured, or corroded
- Ensure the connector is tight against the bulkhead with nothing trapped on the sealing face

**Interface checks:**

- Verify sensor supply voltage is within the specified range
- Confirm the unit communicates properly with the control software once connected

### Manipulator-Held Sensors

- Use an **elasticised cord** to prevent the cable from being extended beyond its length and damaged
- Attach sensors to a **manipulator bracket** for ease of use
- **Record any offsets** between the point of measurement and the sensor in the logbook

---

## :material-cog: Depth Sensor Configuration

Configure sensors using the test cable provided, **before** mounting on the ROV.

=== "Paroscientific Digiquartz"

    | Command | Description |
    |---------|-------------|
    | `*9900EW*9900BL=0` | Baud rate Unlock |
    | `*9900BR=19200` | Set baud rate to 19200. Reconfigure terminal to match. |
    | `*9900EW*9900BL=1` | Baud rate Lock |
    | `*0100EW*0100UN=1` | Set pressure output to PSI |
    | `*0100EW*0100ZV=0` | Set Tare function to off (zero) |
    | `*0100EW*0100TH=4, P4` | Set output to continuous at 4 Hz |

=== "Valeport MiniIPS"

    | Command | Description |
    |---------|-------------|
    | `#` | Interrupt instrument, ready for commands |
    | `#059;19200` | Set baud rate to 19200 (hit Enter). Reconfigure terminal to match. |
    | `#020; P` | Output data in PSI (hit Enter) |
    | `#009;0` | Set pressure output to PSI |
    | `#003; CONT;4;1;1; NONE;1` | Set Tare function to off (zero) |
    | `*0100EW*0100TH=4, P4` | Set output to continuous at 4 Hz |
    | `#028` | Exit config mode and start running (hit Enter) |

### Verifying Output

Once configured, the sensor should output a telegram on deck, for example:

```
*000114.6959494
```

This contains the unit address (`*0001`) and pressure reading in PSI (`14.6959494`).

!!! tip "Deck Check"
    Atmospheric pressure at sea level varies between **13.78 PSI** and **15.23 PSI**. If the reading is in this range on deck, the sensor is working correctly.

After configuration, **cycle the power** a few times to confirm the sensor starts up in the correct mode each time.

---

## :material-tape-measure: Depth Measurement Procedure

### Pre-Deployment Setup

- Check calibration coefficients where applicable
- Set output formats (see configuration above)
- Set any offsets if applicable
- Verify data is being correctly read and logged by the acquisition software

### Before Leaving Deck

Record in the logbook and enter into software:

- Barometric pressure (including units)
- Average density of the water column
- Surface reading of the instrument

### During Deployment

- Monitor sensor data for **consistency**
- Where possible, use a **second depth source** simultaneously for comparison
- Always log **raw data** along with calculated depth

### On Recovery

Record in the logbook:

- Barometric pressure (including units)
- Surface reading of the instrument

### Measurement Methods

| Use Case | Method |
|----------|--------|
| Discrete points (e.g. metrology) | Benchmark Referenced Loops or Closed Loops (see below) |
| General survey (pipeline/cable route) | Continuous logging with cross lines at 90 degrees for QC |

---

## :material-calculator: Pressure to Depth Conversion

Multiple equations exist for converting pressure to depth. The equation used is generally **directed by the client** and defined in the project procedures. A detailed description is given in **IOGP Report 649** (Seawater Pressure to Depth Conversion).

### Navipac Conversions

Accessed through the NaviPac Online program: **Options > Depth Calculation Parameters**.

#### Saunders and Fofonoff (Simple)

$$
\text{Depth} = \frac{P_{\text{obs}} - P_{\text{atm}}}{1000 \times g \times \rho}
$$

Where gravity at latitude $\theta$ is:

$$
g(\theta) = 9.780318 \left(1.0 + 5.2788 \times 10^{-3} \sin^2\theta + 2.36 \times 10^{-5} \sin^4\theta \right)
$$

**Inputs:**

- **Water density**: Mean density from CTD cast (units in kg/dm^3^; convert from kg/m^3^ by dividing by 1000)
- **Pressure at surface**: Barometric pressure. If no barometer available, use logged average surface pressure at the start of the survey
- **Gravity**: Calculated from latitude using the equation above

!!! warning "Simplified Method"
    This method should only be used where depth is **not a critical** part of the work scope.

#### UNESCO Formula

$$
z = \frac{C_1 p + C_2 p^2 + C_3 p^3 + C_4 p^4}{g(\phi) + \frac{1}{2} \gamma' p} + \frac{\Delta D}{9.8}
$$

Where:

| Parameter | Value | Description |
|-----------|-------|-------------|
| $z_{\text{std}}$ | | Calculated depth in metres (standard sea water) |
| $p$ | | Pressure in decibars |
| $\gamma'$ | 2.184 x 10^-6^ | m/s^2^/decibar |
| $g(\phi)$ | See gravity formula | Gravity at ocean surface at latitude $\phi$ |
| $C_1$ | 9.72659 | |
| $C_2$ | -2.2512 x 10^-5^ | |
| $C_3$ | 2.279 x 10^-10^ | |
| $C_4$ | 1.82 x 10^-15^ | |

This method requires a **CTD profile** to be loaded in NaviPac.

!!! success "Recommended"
    This method is more accurate and can be used for all jobs, provided the CTD profile is updated regularly -- especially where there are large depth changes over the work area.

### 4DNAV NavView Conversions

Three options available in 4DNAV NavView:

#### Simple UNESCO

Uses the 1980 Equations of State of Seawater (UNESCO Technical Paper 44, referenced as UNESCO 1983). Takes input of **pressure and latitude**, using a standard world ocean density.

Same formula as the NaviPac UNESCO method above.

#### Density

Requires a **mean density** of the water column from a CTD profile.

$$
\text{Depth} = \frac{P \times 0.70307}{d} \times \frac{G_{\text{std}}}{G_{\text{local}}}
$$

Where:

| Parameter | Value | Description |
|-----------|-------|-------------|
| 0.70307 | | PSI to metres conversion for standard density water |
| $P$ | | Pressure in PSI |
| $d$ | | Mean density of the water column |
| $G_{\text{std}}$ | 9.80665 m/s^2^ | Standard gravity |
| $G_{\text{local}}$ | See formula | Local gravity from IAG (1970) |

$$
G_{\text{local}} = G_e \times (1 + 0.0053024 \sin^2\phi - 0.000059 \sin^2(2\phi))
$$

Where $G_e$ = 9.7803184 m/s^2^.

#### Dynamic

Calculates depth using density from water column profile **integrated to the input pressure**. Provides the **most accurate result** of the three options.

!!! info "IOGP Report 649"
    The dynamic calculation implements the dynamic depth equations described in IOGP Report 649. A combination of geopotential method and gravity settings must be chosen. Configuration includes:

    - Gravity Equation: UNESCO 1983
    - Geopotential method: EOS-80 dynamic depth (2) (B6)
    - Gravity Gradient: 2.184e-6 (Fofonoff and Millard Jr, 1983)

---

## :material-chart-line: Processing and Reporting

### General Survey Data

Processing of depths for general surveys (pipeline, cable route, etc.) follows standard data processing procedures. Cross lines at 90 degrees to the main survey direction provide QC.

### Discrete Point Data (Metrology)

Depth readings at discrete points should follow metrology procedures and data delivery standards.

### Benchmark Referenced Loops

Depth observations are taken **simultaneously** at the target location and at a stationary benchmark sensor. The target depths are adjusted for tide by the change in the benchmark depth.

**Advantages:**

- Independent of tidal state
- Not limited by time constraints
- Requires **two instruments**

!!! example "Sample Benchmark Reading Reduction"
    | Location | Mobile Reading | BM Reading | Correction | Corrected Depth |
    |----------|---------------|------------|------------|-----------------|
    | BM | 102.89 | 102.89 | 0.00 | 102.89 |
    | A | 98.63 | 103.01 | -0.12 | 98.51 |
    | B | 103.28 | 103.07 | -0.18 | 103.10 |
    | BM | 103.13 | 103.13 | -0.24 | 102.89 |

    Good practice: always start and end on the same point.

### Closed Loops

First and last readings are at the **same location**. Readings are adjusted for tide **linearly over time**.

**Requirements:**

- Do not take readings within **30 minutes** either side of high or low water
- Revisit the starting point at least every **30 minutes**
- Uses a **single instrument**
- Log a minimum of **30 seconds** but no more than **1 minute** of data at 4 Hz at each location
- Data logged in **PSI** and converted to metres using the mean density formula
- Loops must be conducted a minimum of **twice** or until a correlation of **< 1.5 cm** exists between loops

!!! example "Sample Closed Loop Reduction"
    | Location | Time | Reading | Time Diff (min) | Correction | Corrected Depth |
    |----------|------|---------|-----------------|------------|-----------------|
    | BM | 15:25 | 102.89 | 0 | 0.00 | 102.89 |
    | A | 15:31 | 98.63 | 6 | -0.12 | 98.51 |
    | B | 15:34 | 103.28 | 9 | -0.18 | 103.10 |
    | BM | 15:37 | 103.13 | 12 | -0.24 | 102.89 |
    | | Misclosure | +0.24 | | | |

    **Correction formula:**

    $$
    \text{Correction} = -1 \times \frac{\text{time difference}}{\text{total time}} \times \text{total misclosure}
    $$

    Misclosure is predominantly due to tidal variation between start and end of the depth loop, which is why it is apportioned based on time.

### Reporting

- Include a copy of the **calibration certificate** for each pressure sensor in field and final reports
- Depth values are reported as **increasing positive down**
- The point of measurement must be defined unambiguously, ideally with **video stills or sketches**

---

## :material-format-list-checks: Check Values

Pressure-to-depth check values for the standard ocean formula (S = 35, T = 0 C):

| Pressure | Lat 0 deg | Lat 30 deg | Lat 45 deg | Lat 60 deg |
|----------|----------|-----------|-----------|-----------|
| 500 dbar | 496.65 m | 496.00 m | 495.34 m | 494.69 m |
| 1000 dbar | 992.12 m | 990.81 m | 989.50 m | 988.19 m |
| 2000 dbar | 1979.55 m | 1976.94 m | 1974.33 m | 1971.72 m |
| 5000 dbar | 4915.04 m | 4908.56 m | 4902.08 m | 4895.60 m |
| 10000 dbar | 9725.47 m | 9712.65 m | 9699.84 m | 9687.03 m |

Gravity check values:

| Latitude | 0 deg | 30 deg | 45 deg | 60 deg | 90 deg |
|----------|-------|--------|--------|--------|--------|
| Gravity (m/s^2^) | 9.780318 | 9.793240 | 9.806190 | 9.819169 | 9.832177 |

!!! note "Gravity Gradient"
    Gravity decreases towards the centre of the earth, but ocean/crustal densities are low enough that it initially increases by $\gamma$ = 2.226 x 10^-6^ m/s^2^ per metre of depth. The gradient correction amounts to ~2.8 m at 5000 m depth.

---

## :material-book-open-variant: References

**External:**

- Leroy C. C. and Parthiot F. (1998), *Depth-pressure relationship in the oceans and seas*. J. Acoust. Soc. Am. 103(3) pp 1346-1352
- Fofonoff N. P. and Millard R. C. Jr. (1983), *Algorithms for computation of fundamental properties of seawater*. UNESCO Technical Papers in Marine Science No. 44
- IOGP Report 649, *Seawater Pressure to Depth Conversion*
