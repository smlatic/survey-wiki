---
title: Survey Vessel Mobilisation Checklist
category: field-notes
tags: [mobilisation, checklist, installation, calibration-sequence, integration, acceptance-test]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-clipboard-check: Survey Vessel Mobilisation Checklist

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Field Notes</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Checklist</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Structured mobilisation checklist covering pre-mob documentation, equipment receipt and inventory, installation sequence, dimensional control, system integration, calibration sequence, acceptance testing, and HSE checks. Use as a working document during mob to ensure nothing is missed. Cross-references the relevant calibration and verification articles for each step.

---

## :material-calendar-check: When to Use

- At the start of every project mobilisation
- When joining a vessel mid-project (use as a verification checklist to confirm previous mob was complete)
- When re-mobilising after a vessel change or significant equipment swap
- As an audit tool for mob report preparation

---

## :material-information-outline: Overview

Mobilisation is the most critical phase for survey quality. Errors made during mob propagate through the entire project. A systematic approach -- working from documentation through installation, measurement, integration, and calibration -- prevents the most common mob failures: wrong offsets, uncalibrated sensors, and untested data paths.

The sequence matters. Positioning systems must be established before acoustic systems can be calibrated. Attitude sensors must be verified before MBES patch tests. Each step builds on the last.

---

## :material-file-document-outline: Phase 1: Pre-Mobilisation Documentation

- [ ] **Project documentation reviewed**: scope of work, survey specification, client requirements, project geodetic parameters
- [ ] **Equipment list confirmed**: all items on the equipment manifest, serial numbers checked against allocation
- [ ] **Calibration certificates checked**: all sensors within calibration validity dates. Flag any expiring during the project.
- [ ] **Previous project mob report reviewed** (if same vessel): check for known issues, installed offsets, vessel-specific notes
- [ ] **Geodetic parameters confirmed**: datum, projection, geoid model, vertical datum, transformation parameters
- [ ] **Vessel drawings obtained**: GA plan, sensor mounting locations, cable routing options
- [ ] **Risk assessment reviewed**: mob-specific hazards, heavy lifts, confined spaces, working at height

!!! tip "Pre-Mob Preparation"
    Prepare configuration files, templates, and geodetic parameters before travelling. Time on the vessel is expensive and usually limited. Having nav software projects pre-built with correct geodetic parameters saves significant time.

---

## :material-cube-outline: Phase 2: Equipment Receipt and Inventory

- [ ] **All items received and physically checked**: open every case, verify contents against packing list
- [ ] **Serial numbers recorded**: match every sensor serial number against calibration certificates
- [ ] **Physical condition inspected**: check for transit damage -- transducer faces, cable connectors, antenna elements, optical windows
- [ ] **Spare parts and consumables checked**: cables, connectors, fuses, cleaning supplies, mounting hardware
- [ ] **Test equipment available**: multimeter, cable tester, SVP, pressure washer for hull work
- [ ] **Software licences verified**: dongles present, licence files valid, software versions compatible

!!! warning "Serial Number Mismatch"
    If a sensor serial number does not match the calibration certificate, the calibration is invalid for that unit. Do not proceed with installation until resolved. This is a common issue with pooled equipment.

---

## :material-wrench: Phase 3: Installation Sequence

Install in this order. Positioning must be established before anything that depends on it can be calibrated.

### 3.1 GNSS Antennas and Receivers

- [ ] **GNSS antennas mounted** at surveyed positions (clear sky view, no multipath sources within 2 m)
- [ ] **Antenna cables connected and tested** (continuity, SNR check)
- [ ] **GNSS receivers powered and tracking** (minimum 6 satellites, HDOP < 3.0)
- [ ] **Correction service configured and receiving** (verify correction age < 10 s)
- [ ] **Position output verified** in navigation software (correct datum, correct update rate)

### 3.2 Heading and Attitude Sensors

- [ ] **Gyrocompass / GNSS compass installed** at surveyed position
- [ ] **MRU / motion sensor installed** (as close to centre of rotation as practical, rigid mount)
- [ ] **All heading/attitude systems powered and settling** (record power-on time -- settling times vary by sensor type)
- [ ] **Output telegrams configured** (heading, pitch, roll, heave at required update rates)

### 3.3 Acoustic Systems

- [ ] **USBL transceiver installed** (hull mount or pole mount, clear acoustic path to seabed)
- [ ] **MBES transducer installed** (rigid mount, no air entrainment path, cable strain relief)
- [ ] **SVP probe tested** (surface dip test, verify reading against known SV)
- [ ] **Sub-bottom profiler / SSS installed** (if applicable)

### 3.4 ROV Survey Equipment (if applicable)

- [ ] **INS installed and connected** (power, data, DVL interface)
- [ ] **DVL mounted** (clear acoustic path downward, no obstruction within beam cone)
- [ ] **USBL transponder/responder mounted** on ROV (clear line of sight when deployed)
- [ ] **Camera systems mounted and tested** (focus, lighting, DVR recording)
- [ ] **Pipe tracker / magnetometer installed** (if applicable)

### 3.5 Ancillary Systems

- [ ] **Tide gauge installed** (if required -- verify against predicted tides)
- [ ] **Meteorological sensors** (wind, barometric pressure -- if required)
- [ ] **Communication systems tested** (radio, intercom between bridge/survey room/deck)
- [ ] **UPS and power distribution checked** (all survey systems on clean/UPS power)

---

## :material-ruler: Phase 4: Dimensional Control Survey

!!! danger "Do Not Skip"
    The DC survey is the foundation of all positioning. Wrong offsets cannot be corrected in post-processing for real-time operations. Every sensor position must be measured and verified.

- [ ] **Total station or tape measure DC survey completed** (method depends on vessel size and accuracy requirements)
- [ ] **All sensor positions measured** relative to vessel reference point (CRP or common origin)
- [ ] **GNSS antenna positions verified** (compare measured vs. entered in receiver)
- [ ] **USBL transceiver position measured** (including depth below waterline)
- [ ] **MBES transducer position measured** (including depth below waterline)
- [ ] **MRU position measured** (distance from CRP for lever-arm heave calculation)
- [ ] **ROV sensor offsets measured** (if applicable -- INS, DVL, cameras, pipe tracker relative to ROV reference point)
- [ ] **Draft marks recorded** (forward, aft, midships -- port and starboard)
- [ ] **Offsets entered in navigation software** and double-checked by second person
- [ ] **DC survey report drafted** (include sketches, photos of each measurement)

**Reference:** [Dimensional Control Survey](dimensional-control-survey.md) | [Dimensional Control (Tape Measure)](dimensional-control-tape-measure.md)

---

## :material-tune: Phase 5: System Integration Checks

Before calibration, verify all data is flowing correctly through the system.

- [ ] **All sensor data received in navigation software** (check each telegram individually)
- [ ] **Update rates correct** (positioning: 1 Hz minimum, attitude: 10 Hz minimum for MBES, heading: 10 Hz)
- [ ] **Time synchronisation verified** (all systems on UTC, 1PPS connected where applicable)
- [ ] **Sensor health status checked** (no error flags, quality indicators normal)
- [ ] **Data logging tested** (start/stop recording, verify files are written, verify file sizes are growing)
- [ ] **Backup data path tested** (if primary logging fails, can you recover data from secondary source?)

!!! tip "Time Sync Check"
    The single most common integration error is timing. Verify that the time displayed in the navigation software matches UTC (compare with GNSS time output). A 1-second timing error at 4 knots produces a 2 m along-track position error.

### Integration Test Procedure

1. Start logging all sensors simultaneously
2. Log for 5 minutes in a known static position
3. Verify: position stable, heading stable, attitude stable, all sensor data present in log
4. Perform a deliberate heading change (vessel swing or ROV rotate) and verify heading updates in real-time
5. Verify helmsman display (if providing guidance) shows correct position and heading

---

## :material-compass: Phase 6: Calibration Sequence

Calibrations must be performed in this order. Each depends on the accuracy of the previous step.

| Order | Calibration | Prerequisite | Article |
|:--:|:--|:--|:--|
| 1 | Static GNSS intersystem check | GNSS systems tracking | [Static GNSS Check](../positioning/static-gnss-intersystem-check.md) |
| 2 | AHRS calibration / intersystem check | GNSS and heading systems settled | [AHRS Calibration](ahrs-calibration.md) |
| 3 | Gyro comparison | Heading systems settled (4+ hours for spinning mass) | [Gyro Types and Calibration](gyro-types-and-calibration.md) |
| 4 | USBL calibration | GNSS and heading calibrated | [HiPAP USBL Calibration](../positioning/hipap-usbl-calibration.md) |
| 5 | SVP cast | Before any acoustic calibration | [Sound Velocity Operations](../sensors/sound-velocity-operations.md) |
| 6 | MBES patch test | All positioning and attitude calibrated, fresh SVP | [MBES Calibration](../sensors/mbes-calibration.md) |
| 7 | INS/DVL calibration (ROV) | USBL calibrated (provides reference) | [INS/DVL Calibration](../positioning/ins-dvl-calibration-guide.md) |
| 8 | SSS / SBP / Mag acceptance tests | Positioning operational | [SSS Verification](../sensors/side-scan-sonar-verification.md) |

- [ ] Static GNSS intersystem check completed and passed
- [ ] AHRS calibration / static intersystem check completed and passed
- [ ] Dynamic GNSS intersystem check completed (if required)
- [ ] USBL calibration completed and passed
- [ ] SVP cast completed and applied
- [ ] MBES patch test completed and passed
- [ ] INS/DVL calibration completed and passed (ROV only)
- [ ] Ancillary sensor acceptance tests completed (SSS, SBP, magnetometer, cameras)
- [ ] All calibration results documented with pass/fail against acceptance criteria

---

## :material-check-decagram: Phase 7: Acceptance Testing

Final verification before starting survey operations.

- [ ] **End-to-end position test**: place ROV on a known target or acquire MBES data over a charted feature. Verify position matches.
- [ ] **Reciprocal line test**: run two MBES lines in opposite directions over the same ground. Verify depth agreement within spec.
- [ ] **Real-time display check**: verify all displays show correct, updating information
- [ ] **Data quality review**: process a sample data set through the full workflow. Verify deliverables meet spec.
- [ ] **Communication test**: verify all communication channels work (bridge, deck, ROV, survey room, client)
- [ ] **Emergency procedures reviewed**: what happens if GNSS fails, if USBL fails, if vessel power fails
- [ ] **Mob report drafted and ready for review**

---

## :material-shield-check: Phase 8: HSE Checks

- [ ] **All cables secured and routed safely** (no trip hazards, no pinch points)
- [ ] **Equipment secured for sea** (all items lashed, screens secured, drawers locked)
- [ ] **Emergency stops identified and tested** for all powered equipment
- [ ] **MSDS sheets available** for any chemicals (cleaning fluids, coupling gel)
- [ ] **PPE requirements confirmed** for deck work (hard hat, safety boots, lifejacket near rails)
- [ ] **Permit to work system understood** (hot work near survey equipment, working at height for antenna installation)

---

## :material-wrench: Troubleshooting Common Mob Issues

### No GNSS Corrections

**Symptoms**: Position drifts, accuracy indicator shows "autonomous" or "standalone".

**Action**:

1. Check correction service subscription is active
2. Check communication link (VSAT, cellular, radio)
3. Check antenna cable (damaged during installation is common)
4. Verify receiver is configured to accept the correction format
5. Check correction age -- if receiving but age > 30 s, communication link is marginal

### Heading Disagrees Between Systems

**Action**:

1. Verify all systems have finished settling (check minimum settling times by type)
2. Check all systems output true heading (not magnetic, not grid)
3. Verify DC survey offsets are correct for heading sensors
4. If gyro and GNSS compass disagree by > 1 deg, investigate before proceeding

### MBES Shows No Data or Erratic Depths

**Action**:

1. Check draft/waterline offset (wrong sign is the most common error)
2. Check SV at transducer face (wrong SV causes refraction artefacts)
3. Check for air bubbles on transducer face (common after installation)
4. Verify attitude data is being received (MBES with no roll correction produces curved seabed)

---

## :material-link-variant: Related Articles

- [Demobilisation Checklist](demobilisation-checklist.md)
- [Dimensional Control Survey](dimensional-control-survey.md)
- [AHRS Calibration](ahrs-calibration.md)
- [MBES Calibration (Patch Test)](../sensors/mbes-calibration.md)
- [HiPAP USBL Calibration](../positioning/hipap-usbl-calibration.md)
- [Survey Reporting Fundamentals](../reporting/survey-reporting-guide.md)

---

!!! quote "References"
    - IMCA S 015, Guidelines for Survey Mobilisation and Calibration
    - IMCA S 017, Guidelines for Position Reference Systems
    - Client project specification and scope of work
