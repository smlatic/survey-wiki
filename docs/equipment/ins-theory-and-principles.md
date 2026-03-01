---
title: INS Theory and Principles
category: equipment
tags: [ins, imu, inertial navigation, kalman filter, dvl, usbl, lbl, gnss, aiding, drift, alignment, positioning, ROV]
equipment: [INS/IMU, DVL, USBL, LBL, GNSS, Depth Sensor, Sound Velocity Sensor]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-chip: INS Theory and Principles

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive reference covering the principles of Inertial Navigation Systems (INS) used in offshore survey operations. Covers the IMU, Kalman filtering, aiding methods, error characteristics, drift behaviour, timing requirements, installation considerations, sign conventions, and alignment procedures.

---

## :material-axis-arrow: INS Principles

An Inertial Navigation System (INS) uses an Inertial Measurement Unit (IMU) consisting of a block of **three gyroscopes** and **three accelerometers** to measure its 3D acceleration vector at a very high rate (in the order of hundreds of observations per second). If the position and speed of the body are known at time zero, its position can be obtained onward by **numerical integration**.

The accelerometers and gyroscopes are extremely precise but have high drift rates and a scale bias. The drift must be mitigated by using **external aiding methods** or by frequently resetting the velocity to zero (called a **ZUPT** -- Zero Velocity Update).

---

## :material-filter-outline: Kalman Filter

The observations from the IMU and aiding sensors are combined in a **Kalman Filter**. The Kalman Filter:

1. **Estimates** the current state from previous observations
2. **Updates** this estimate with a **weighted average** of new measurements
3. Uses sensor modelling algorithms, **outlier detection** algorithms, and rejection of data by sensor quality metrics to handle poor data

To initialise the INS, it needs a position input to start the algorithm (compared to an AHRS which only needs latitude). As a minimum, this could be a single start coordinate. Once initialised, the INS utilises the various aiding sources to determine its position and velocity.

The weighting applied to aiding sensors is typically an estimated error at a stated confidence level, such as 1 standard deviation or 95% CL.

!!! warning "Critical Concept: The INS Only Wants Good Data"
    The INS is the principal sensor in the Aided INS (AINS) algorithm. If an aiding sensor deviates too far from where the INS thinks it should be, the INS will **reject it**. The INS only accepts data that comes with acceptable quality flags from the instrument.

---

## :material-access-point: Aiding Methods

| Aiding | Use | Details | Limitations |
|---|---|---|---|
| **GNSS** | Surface | Loosely coupled: position and velocity. Tightly coupled: pseudoranges and Doppler | Surface only |
| **DVL** | Subsea | Loosely coupled: 3D speed over the seabed. Tightly coupled: individual beam velocities | Limited distance to seabed; ideally use SV sensor interfaced into DVL |
| **USBL** | Subsea | Independent position | Dependent on various sources of error which may affect accuracy |
| **LBL** | Subsea | Loosely coupled: position from LBL system. Tightly coupled: individual range measurements | Expensive to deploy; depends on SV and depth error mitigation |
| **Depth** | Subsea | Independent distance | Depends on tides, density, pressure-to-depth conversion |
| **Altitude** | Subsea | Independent distance | Depends on seabed characteristics |
| **ZUPT** | Surface or Subsea | Residual velocity correction when held stationary | Requires vehicle to be fully stationary; ZUPTs needed frequently |

??? info "Loosely vs Tightly Coupled Explained"
    Sources of aiding can be **loosely coupled** or **tightly coupled**:

    - **Loosely coupled GNSS** uses the position and velocity estimates calculated by the GNSS receiver; **tightly coupled** uses satellite pseudoranges and Doppler observables
    - **Loosely coupled LBL** uses the latitude and longitude computed by the LBL software; **tightly coupled** uses individual range measurements
    - **Loosely coupled DVL** uses the computed XYZ velocities; **tightly coupled** uses individual beam velocities

    Tightly coupled integration generally provides better performance as it gives the Kalman filter more raw information to work with.

---

## :material-speedometer: DVL Aiding

For subsea applications, the INS is typically always aided by a DVL. The velocity information provided by the DVL significantly reduces INS drift. This is why it is critical to have a good **DVL-to-INS alignment calibration**.

!!! tip "Sound Velocity Sensor"
    It is recommended to have a **sound velocity sensor (SVS) interfaced into the DVL** to optimise its acoustic measurements. DVL data is improved by sound velocity correction, and the INS system handles this provided an SVS is interfaced into the system.

For a 1200 kHz DVL system, bottom lock is maintained between **0.3 and 30 m** altitude. Lower frequency DVLs can extend the altitude range up to **200 m**.

---

## :material-arrow-collapse-vertical: Depth Aiding

Depth (or altitude) aiding stabilises the **vertical dimension** of the INS. The INS operates in three dimensions, all of which need to be aided.

Sources of error in depth can come from:

- Not adequately accounting for **tides**
- Wrong parameters for **gravity**, **density**, or **atmospheric pressure** in the pressure-to-depth conversion equation
- **Dynamic variability** -- depth sensors are designed to be static and will show some variability in readings when dynamic (reduced when sensors are mounted vertically)

!!! info "Pressure-to-Depth Conversion"
    INS systems typically offer multiple methods for pressure-to-depth conversion:

    - **Salt water**: Uses the UNESCO formula from "Technical Papers in Marine Science No. 44"
    - **Fresh water / density formula**: Can also be used for salt water by entering the mean density calculated from a CTD cast
    - **Atmospheric pressure compensation**: Either enter a depth offset manually or use the current depth reading when the sensor is at the waterline before submersion. As a cross-check, the unit should read approximately 10 m depth before applying the atmospheric offset.

---

## :material-crosshairs-gps: USBL Aiding

A USBL system is often used to aid the subsea INS with position information. The absolute positions are used by the INS to determine its errors, which are fed back into the algorithm to refine its position.

!!! warning "Critical Concept: USBL Aiding and Systematic Errors"
    Although an INS **improves USBL system precision** and short-term accuracy, it **will not resolve any inherent systematic errors** that are present.

    Consider a subsea vehicle flying over a pipeline. The black line represents "truth" (where the pipeline actually is). The raw USBL has both random error (the spread of positions) and systematic error (the offset from truth). If the INS has only a starting position but then continues with no USBL aiding, it drifts. With USBL aiding, the INS will **improve the precision** of the USBL but **cannot improve the absolute accuracy**. It will smooth out the USBL positioning but cannot get the position any closer to truth.

    In practice, when the INS is USBL-aided, it is also aided by a DVL and depth sensor. The INS weights the aiding sensors using any user-defined accuracy values. For USBL, the standard deviation is dependent on slant range and environmental factors (noise). A value between **0.2% and 0.5% of slant range** is a realistic starting point.

---

## :material-vector-polyline: LBL Aiding

Instead of USBL aiding, it is possible to aid the INS from Long Baseline (LBL) subsea transponders.

**Loosely coupled LBL** (using latitude/longitude output from LBL software) is rarely done offshore due to latency -- not just processing time, but also determining when ranges were sent and received for each position update.

**Tightly coupled range-aided INS** is the standard approach. The acoustic signals are accurately synchronised with INS time for both interrogation and reply. The INS accounts for the trajectory between interrogations and replies, providing tighter integration.

Range-aided INS can be used in:

- A traditional LBL array with 4+ ranges
- **Sparse LBL** with as few as 1 range

!!! tip "Sparse LBL"
    Sparse LBL is often described as "just like LBL but with fewer transponders." This is misleading -- it should be considered a **very different type of positioning system**. Personnel involved in planning and operation of range-aided INS should understand what factors are important for successful operation and, perhaps more importantly, what factors can negatively impact its performance.

---

## :material-chart-bell-curve: Systematic vs Random Errors

This is one of the most important concepts for understanding INS performance.

- **Random errors** follow a normal distribution and affect **precision**
- **Systematic errors** shift the mean of the distribution and affect **accuracy**

| Error Type | INS Behaviour | Implication |
|---|---|---|
| **Random errors** | INS is very good at accounting for these. The Kalman filter constantly refines its state by analysing the difference between an aiding measurement and its expected value. The INS has the effect of **smoothing** the aiding sensors. | INS effectively improves the precision of aided position/depth input |
| **Systematic errors** | **It is not possible for the INS to identify systematic errors.** There is no mechanism whereby the INS can identify where truth is. | INS **cannot** improve the absolute accuracy of aided position/depth input |

!!! danger "Key Takeaway"
    Users must:

    1. Apply the **correct weighting** to aiding sensors
    2. **Mitigate systematic errors** as far as possible through calibration of aiding sensors such as USBL and DVL

    The INS will smooth imprecise data effectively, but it cannot fix data that is consistently offset from truth.

---

## :material-map-marker-path: INS Applications

### Seabed Positioning

The INS is aided by USBL position or LBL ranges, DVL, and depth information. The ROV needs to be at an altitude where the DVL has bottom lock. Applications include:

- Pipeline and umbilical surveys
- Structure installation
- Out of Straightness (OOS) surveys
- Spoolpiece metrology (using Simultaneous Localisation and Mapping)

!!! info "OOS Surveys"
    OOS surveys address a specific problem: determining the relative position along a segment of pipeline (e.g. 100 metres). A combination of INS and DVL is particularly suited for this as the combination is very precise, although not absolutely accurate. For applications requiring absolute positioning, USBL or LBL aiding is introduced.

### Mid-Water Positioning

The INS is aided by USBL and depth information (e.g. from high-accuracy Digiquartz or MiniIPS depth sensors). Applications include:

- Jacket inspection
- Catenary checks of anchor wires, flowlines, or umbilicals
- Structure monitoring during deployment through the water column

!!! note
    Without the DVL, the INS will be more likely to drift and will require regular position aiding updates.

### Drill String Monitoring

The INS unit is mounted on a tool designed to run down the outside of a drill string. The procedure starts with the tool docked on the vessel (aided by DGNSS, possibly vessel gyro and motion sensors), then run down the drill string, held stationary at the bottom for ZUPT, and returned to the surface. This is repeated 3-10 times to provide an accurate position of the well head.

---

## :material-gauge: INS Performance

### ITAR Restrictions and Sensor Quality

The gyroscopes and accelerometers inside the IMU can be of different quality. The higher the quality, the better the INS performance.

Very high-quality sensors come under **International Traffic in Arms Regulations (ITAR)** and can be prohibitively problematic to ship and use for offshore operations. INS instruments used offshore have performance that falls within the criteria allowing them to be shipped. **It is these regulations that limit the quality of INS sensors used offshore.**

### INS Drift Rates

| Condition | Drift Rate | Notes |
|---|---|---|
| **Unaided** | ~12 m over 4 minutes | Drift rate **increases** over time (accelerating divergence) |
| **DVL-aided** | 0.02%-0.06% distance travelled | Equivalent to 0.2-0.6 m per 1 km travelled. These figures are typically empirical from trial data and represent best-case scenarios |

!!! warning "Drift Behaviour"
    If aiding sensors are not coming into the INS, or the INS is rejecting them for any length of time, the INS can be observed to run off, **rapidly increasing** its velocity and distance from the initial position. The rate of drift increases over time -- this is not linear.

    INS drift is a function of both **distance travelled** and **time**:

    - When **dynamic**: drift is primarily affected by DVL misalignment to the INS (the DVL calibration)
    - When **static**: drift is primarily affected by DVL performance

### USBL-Aided INS Performance

For USBL-aided INS, the performance affects how well the precision of the raw USBL is improved. The INS cannot improve the absolute accuracy of the USBL.

### Range-Aided INS Performance

Range-aided INS has several considerations. It is often termed "sparse LBL" and the impression given is that it is just like LBL but with fewer transponders. This is misleading -- it should be considered a very different type of positioning system.

---

## :material-clock-outline: Timing Requirements

INS systems are more suited to being dynamic, compared to AHRS systems that are more suited to being static. It is **imperative** that the timing of aiding sensors is synchronised with INS time.

### Time Synchronisation

The INS will typically be synchronised to GNSS time using a **1PPS and ZDA string**. This allows:

- Time-stamped aiding data to be correctly applied to the INS
- Resulting position, velocity, and orientations to be merged with external sensors such as multibeam echosounders and laser systems

!!! info "Latent Data"
    The INS can deal with latent data (up to a few seconds in real time) **if there are correct timestamps** in the data. Both the ZDA string and PPS should come from the same GNSS system and source as other survey instruments, typically distributed via an RTS PPS panel or serial splitter.

### DVL Triggering

The DVL is set to free-running by default -- it sends a set of pings and when it receives the replies sends the next set. To improve timing, **the INS can trigger the DVL**. This option is configured in the topside software and relies on a direct connection between the INS and DVL.

### LBL Range Timestamping

For range-aided INS (e.g. Sonardyne systems), the acoustic transceiver is interfaced directly into the INS. The range measurement interrogation and receive times are **timestamped by the INS**, allowing very accurate timing of this data.

---

## :material-tools: Installation Checklist

The general installation sequence:

!!! success "Installation Steps"
    - [x] Pre-mobilisation checks
    - [x] Pre-installation checks
    - [x] Physical installation
    - [x] Offset measurements
    - [x] Hardware system configurations
    - [x] Communications checks
    - [x] Navigation software configuration
    - [x] Acquisition software configuration

### Pre-Mobilisation Checks

Before committing equipment to a project, maintenance and factory pre-calibration certification should be checked against the recommended validity period (typically **1 year**).

Workshop checks before mobilisation:

- All cables supplied, including a deck-test cable
- All connectors checked for corrosion; all interface cables verified
- Visual check of units for possible water ingress
- Connect systems and check power and communication lines
- Check firmware on all systems; update to latest version if advised by manufacturer

### INS with DVL Pre-Mobilisation

Check equipment against manifest. Take pictures of the state of all equipment received. Minimum checks:

- INS and DVL are **firmly connected together** and will remain so throughout deployment
- DVL transducers are **clean and undamaged**

### Mounting Considerations

- DVL transducers must have an **unobstructed view downwards** meeting the manufacturer's recommended clearance requirements
- System must not obstruct other sensors (cameras, sonar, pipe-tracker)
- Must not cause interference with other sensors (e.g. existing DVL on the same frequency)
- INS system forward axis should be aligned **as closely as possible** to one of the ROV vehicle axes, preferably forward
- DVL should be **directly interfaced into the INS** to avoid uncontrollable latencies through a network or other devices

!!! warning "Dedicated Network"
    Due to bandwidth and latency considerations, the INS system should operate on a **dedicated ethernet network** separate from the main survey network.

### Pre-Calibrated Coupled Systems

Unless unavailable in the market, an INS/DVL system should **always be supplied as mechanically coupled and pre-calibrated** because calibration offshore is inevitably going to be less accurate than what a supplier can achieve near shore.

!!! tip
    DVL offsets are predefined on coupled units and **must not be changed**. Any pre-calibrated INS/DVL will come supplied with a calibration file that can be transferred to the INS if settings are reset.

---

## :material-axis-z-rotate-counterclockwise: Sign Conventions

Care should be taken when entering lever arms into INS systems as the sign and naming conventions may differ from that of the navigation system.

### Exail (ROVINS / PHINS) Convention

| Standard Convention | Exail Convention |
|---|---|
| Starboard | Negative XV2 = LV2 |
| Forward | XV1 = LV1 |
| Up | XV3 = LV3 |

In plain terms:

- **LV1** is entered **positive forward**
- **LV2** is entered **positive port** (opposite of normal survey convention)
- **LV3** is entered **positive up**

!!! danger "Pitch Sign Reversal"
    With ROVINS or PHINS, the **pitch sign convention is reversed** compared to standard convention. This is critical to account for when integrating with navigation software.

The primary lever arm is the primary external monitoring point (with respect to the INS centre of measurements) for calculation and output of position and attitude data to the online navigation system. Offset values are entered from the INS measurement point to the reference point using Exail sign convention.

### Sonardyne (SPRINT) Convention

| Standard Convention | Sonardyne Convention |
|---|---|
| X (+Starboard) | Y (+Starboard) |
| Y (+Forward) | X (+Forward) |
| Z (+Up) | Z (+Down) |

In plain terms:

- **Y** is entered **positive starboard**
- **X** is entered **positive forward**
- **Z** is entered **positive down**

!!! info "Coordinate Reference Frames"
    Sonardyne SPRINT systems use multiple coordinate reference frames. For the typical user, INS and aiding sensor offsets are entered using the **vehicle coordinate reference frame** (based on the ROV CRP). Internally, the IMU coordinate reference frame is used for DVL-to-IMU misalignment during pre-calibration. The topside software reads the internal offsets and displays them in the vehicle coordinate reference frame.

---

## :material-compass-outline: Alignment

### Coarse Alignment (Exail Systems)

On power-up, the INS system needs to be **stationary on deck**. Offsets from the deck location to the vessel CRP are measured and entered into the navigation system.

The system will:

1. Run through a self-check
2. Perform coarse alignment to settle and **detect the earth rotation axis** to align its coordinate frame with true north
3. During coarse alignment, the online navigation system provides GNSS position of the deck location

### Fine Alignment (Exail Systems)

During fine alignment, the INS continues to self-tweak settings of internal sensors and aiding inputs into the Kalman filter to optimise performance. Aiding sensors should be available, so for subsea applications this is done **in the water**.

Fine alignment takes a few tens of minutes but can be improved by making a series of **heading changes in different directions**:

- A **figure-of-8 pattern** is highly recommended
- A **stair pattern** is a practical alternative on an ROV
- Other patterns such as a clover-leaf can also be used

!!! tip "Alignment Completion"
    With Exail systems, the INS software will inform when fine alignment is completed by displaying when the predicted heading accuracy matches the instrument specification.

### Sonardyne Systems

A major difference with Sonardyne INS systems is that there is **no requirement to provide an on-deck position** prior to going subsea. This is because SPRINT systems run **INS and AHRS algorithms concurrently**:

- The AHRS does not need dynamics to compute heading, pitch, and roll
- The AHRS takes **10 minutes** to settle upon start-up
- Once the INS algorithm is started, it takes the accurate AHRS data as starting values

When the INS algorithm is started, there is **no need to perform alignment manoeuvres**. The SPRINT statistics window in the software can be used to monitor the quality of the INS solution.

---

## :material-format-list-checks: Quick Reference Summary

| Topic | Key Value |
|---|---|
| IMU components | 3 gyroscopes + 3 accelerometers |
| Unaided drift | ~12 m over 4 minutes (accelerating) |
| DVL-aided drift | 0.02%-0.06% distance travelled |
| Free inertial drift (20 min) | ~900 m (extrapolated) |
| DVL bottom lock (1200 kHz) | 0.3-30 m altitude |
| DVL bottom lock (low freq.) | Up to 200 m altitude |
| USBL SD estimate | 0.2%-0.5% of slant range |
| Pre-cal validity period | Typically 1 year |
| AHRS settling time (Sonardyne) | 10 minutes |
| INS time sync | 1PPS + ZDA from same GNSS source |
