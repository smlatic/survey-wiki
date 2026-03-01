---
title: MBES Installation and Setup
category: equipment
tags: [mbes, multibeam, installation, transducer, mru, gyro, time sync, offsets, subsea, rov, auv]
equipment: [Multibeam Echosounder, Motion Sensor, Gyrocompass, GNSS, INS, DVL, Total Station]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-waves-arrow-right: MBES Installation and Setup

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-wrench-cog-outline: <strong>Setup Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Guide the correct installation of multibeam echosounder systems on surface vessels and subsea vehicles, covering transducer placement, motion sensor and gyro mounting, time synchronisation, offset measurements, and tightly coupled system configurations.

---

## :material-view-grid-outline: MBES System Components

A multibeam echosounder system comprises a transducer (projector and receiver), a transceiver, and a computer system. To achieve a full sounding solution the following external inputs are required:

| Input | Source |
|-------|--------|
| Position | GNSS (surface) or USBL/LBL + DVL/INS (subsea) |
| Orientation | Heading, pitch, roll, and heave from gyro and MRU |
| Elevation | Tide (often from GNSS), draft, and heave |
| Sound velocity | Full water column SVP and real-time SV at the transducer face |

These must be combined with:

- Dimensionally controlled X, Y, Z offsets of all instruments
- Pitch, roll, and heading C-O values from MRU and gyro calibration
- MBES system calibration (patch test) results resolving transducer-to-MRU and transducer-to-gyro misalignment, plus along-track timing error (position latency)

---

## :material-beam: Beam Steering

Modern MBES systems use electronic beam steering to correct for vessel pitch and roll in real time. Benefits include:

- **Improved data quality** -- maintains correct beam orientation relative to the seabed, reducing motion-induced artifacts
- **Increased efficiency** -- enables continuous acquisition even in rough sea conditions
- **Enhanced coverage** -- maintains full seabed coverage without gaps caused by vessel movement

!!! warning "Real-Time SV Requirement"
    Systems using electronic beam steering for pitch and roll stabilisation require a continuous real-time sound velocity measurement at the transducer face.

---

## :material-crosshairs-gps: Transducer Placement

### Horizontal Placement

Mount the transducer near the centre of the vessel or vehicle. For systems without beam-steering capabilities this is especially important.

- **Ideal location**: on the vessel centreline, slightly forward of midships
- Minimises the effects of vessel pitch and roll
- Keeps the transducer within laminar flow, reducing acoustic interference
- Reduces the likelihood of signal masking from vessel roll and aeration
- If the ideal location is not available, choose the closest alternative
- On permanent installations, use a blister or gondola mounted on the hull

### Vertical Placement

The optimum vertical mounting point is the lowest possible position that allows an unobstructed view of the seabed.

- **Acoustic coverage**: lower mounting maximises swath coverage per pass
- **Data quality**: reduces acoustic shadowing and multipath effects
- For AUVs and ROVs, ensure the mounting does not impede vehicle performance or manoeuvrability

---

## :material-telescope: Over-the-Side Pole Mounts

For temporary installations, transducers are often mounted over the side of vessels on poles.

!!! tip "Key Requirements"
    - **Integrated MRU is highly recommended** -- over-the-side mounts suffer from vibration (unsupported tubing length) and oscillation (flow over pole and guy lines). An integrated MRU mitigates these issues.
    - **Pole design** should minimise vibration and aeration around the transducer
    - **Pole length**: must extend below the ship's keel so the transducer has an unobstructed port and starboard view
    - **Speed limitation**: excessive speed causes vibrations or can bend the pole, degrading data quality

---

## :material-angle-acute: Motion Reference Unit (MRU)

### Placement

The optimum MRU mounting location is at the vessel's **centre of gravity (COG)** -- the point of least vertical movement where rotational accelerations are minimal.

- Mounting at or near COG ensures the most accurate roll and pitch observations
- The MRU reference frame (axis) must be aligned with the MBES transducer reference frame
- After installation, calibrate the MRU using conventional land survey techniques
- The residual misalignment between MRU and transducer reference frames is resolved by the MBES calibration (patch test)

### Heave Filter

The heave filter setting must be matched to expected vessel dynamics:

- Larger vessels move more slowly than smaller vessels, requiring different filter settings
- Refer to the MRU manufacturer's manual for the optimum setting for the vessel size

---

## :material-compass-outline: Gyro Requirements

For modern MBES operations the gyrocompass is typically either GNSS-based (e.g. Seapath) or a fibre optic gyro (FOG, e.g. Octans).

| Consideration | Detail |
|---------------|--------|
| Accuracy vs. depth | In shallow water a less accurate gyro may be acceptable; in deeper water heading accuracy is critical due to the large horizontal offset of outer beams from the transducer |
| Placement | Can be placed anywhere on the vessel as long as heading is aligned to the forward direction; place where it is unlikely to be disturbed, and bolt it down |
| FOG configuration | Provide an NMEA position string ($GGA / $GLL) for dynamic latitude correction |
| Calibration | Calibrate per the gyrocompass calibration and verification procedure |
| Residual misalignment | Even after gyro calibration, residual misalignment between the gyro reference frame and the MBES transducer reference frame will be resolved during the MBES calibration (patch test) |

---

## :material-clock-check-outline: Time Synchronisation

All MBES system sensors must be synchronised via precise timing.

### Requirements

- A single, accurate time source with precision of **1 ms or better** (typically GNSS time)
- Data should be time-stamped at the point of observation
- In practice this is achieved via **1 Pulse Per Second (1 PPS)** and a corresponding **UTC time message** from a GNSS system

### Along-Track Errors -- Position Data Latency

A time delay between a position fix and its application to a sounding produces an along-track error in sounding position. This is most noticeable over steep slopes and can be quantified during MBES calibration over a suitable feature.

### Across-Track Errors -- Motion Data Latency

Motion data latency **cannot be quantified by calibration**, highlighting the importance of accurate time synchronisation.

- Latency from the motion sensor causes roll errors that increase at the outer edges of the swath
- Detected when crossing flat seabed by observing short-term changes in across-track slope

---

## :material-tape-measure: Offset Measurements

All data acquisition sensors (GNSS antenna, MRU, gyrocompass, MBES transducer) must be coordinated in the **Vessel Reference Frame (VRF)**.

### Central Reference Point (CRP)

- The CRP of the VRF must be clearly defined
- If the CRP is a nominal point such as the vessel COG, physical marks must be made whose relation to the COG is known and fixed
- This enables offsets to be measured from marks that can be related to the CRP in the future

### Measurement Methods

| Scenario | Method |
|----------|--------|
| Hull-mounted, vessel in dry dock | Total station dimensional control survey |
| Temporary installation, vessel alongside | Total station or tape measurements |
| Existing dimensional control data available | Tape measurements to check for gross errors; general arrangement drawings as a supplementary reference |

### Transducer Reference Points

All MBES transducers have a manufacturer-defined reference point. This may be:

- The **acoustic centre** of the transducer (e.g. Reson Seabat 8125)
- A different reference point, particularly on systems with an integrated IMU (e.g. Reson T51R)

!!! info "Always consult manufacturer drawings"
    The manufacturer provides drawings showing the exact reference point(s) for each specific system. Use these when determining offsets.

---

## :material-submarine: Subsea Vehicle MBES -- Specific Considerations

### Positioning

When using MBES from an ROV or AUV, vehicle positioning is typically USBL, Sparse LBL, or LBL. None of these systems match the accuracy, precision, or update rates of surface GNSS positioning.

!!! tip "Minimum requirement"
    Supplement subsea positioning with a **DVL** as a minimum, and preferably a combined **DVL + INS** system.

### Sound Velocity Profile Including CTD Data

For subsea vehicle MBES, the SVP/CTD data serves three purposes:

1. **MBES beam steering and refraction correction** -- same as for surface systems
2. **Pressure-to-depth conversion** -- the high-accuracy pressure sensor on the subsea vehicle needs the CTD data to correctly convert pressure to depth. Total depth = depth of seabed below vehicle (MBES) + depth of vehicle below surface (pressure sensor), with vertical offset between the two systems accounted for
3. **Acoustic ranging** -- SV is needed for the USBL, Sparse LBL, or LBL system to ensure measured ranges are accurate

---

## :material-link-variant: Tightly Coupled Systems

Modern best practice for surface vessels is to use MBES systems with tightly coupled navigation and AHRS integration for optimal performance. These combine MBES, GNSS, inertial, and motion sensors into a unified system.

**Example configurations:**

| MBES | GNSS / INS |
|------|-----------|
| Teledyne Seabat T51R | Applanix POS MV Oceanmaster with INS |
| Norbit i80S | Applanix POS MV Oceanmaster with INS |

Benefits of tightly coupled systems:

- Minimal lever arms between sensors
- All X, Y, Z and angular offsets (RX, RY, RZ) determined by total station
- Combined with RTK GNSS tide measurements, enables the highest quality bathymetric surveys

---

!!! success "Installation Checklist"
    - [x] Transducer mounted on centreline, forward of midships where possible
    - [x] Transducer at the lowest unobstructed vertical position
    - [x] Over-the-side pole extends below keel (if applicable)
    - [x] MRU installed at or near vessel centre of gravity
    - [x] MRU axis aligned to transducer reference frame
    - [x] Heave filter matched to vessel dynamics
    - [x] Gyrocompass bolted down, aligned to vessel forward direction
    - [x] FOG receiving NMEA position string (if applicable)
    - [x] 1 PPS + UTC time synchronisation confirmed across all sensors
    - [x] All sensor offsets measured in VRF relative to defined CRP
    - [x] Manufacturer reference points used for transducer offsets
    - [x] Subsea: DVL or DVL+INS supplementing acoustic positioning
    - [x] Subsea: SVP/CTD data available for pressure-to-depth, beam steering, and acoustic ranging

---

!!! quote "References"
    - IMCA S 003 -- Guidelines for the Use of Multibeam Echosounders for Offshore Surveys
    - IHO S-44 -- Standards for Hydrographic Surveys
    - Equipment manufacturer installation and reference point drawings
