---
title: Common Acceptance Criteria Reference
category: reference
tags: [acceptance-criteria, thresholds, pass-fail, qc, standards, imca, iho]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-check-decagram: Common Acceptance Criteria Reference

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Quick Reference</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Consolidated acceptance criteria table covering all calibration and verification procedures in the wiki. Use as a quick-reference during calibrations and mob to check pass/fail thresholds without opening individual procedure articles. All values are typical industry standards -- the client specification always takes precedence.

---

## :material-calendar-check: When to Use

- During calibrations to verify pass/fail against standard thresholds
- When preparing calibration reports (quick lookup of acceptance values)
- When reviewing mob reports for completeness
- When clients ask "what are the acceptance criteria" for a specific procedure

---

## :material-compass: GNSS and Positioning

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| Static GNSS Check | Horizontal agreement (DGNSS) | < 1.0 m | 1.0-2.0 m | > 2.0 m | Project spec | [Static GNSS Check](../positioning/static-gnss-intersystem-check.md) |
| Static GNSS Check | Horizontal agreement (PPP) | < 0.30 m | 0.30-0.50 m | > 0.50 m | Project spec | [Static GNSS Check](../positioning/static-gnss-intersystem-check.md) |
| Static GNSS Check | Height agreement (DGNSS) | < 1.5 m | 1.5-3.0 m | > 3.0 m | Project spec | [Static GNSS Check](../positioning/static-gnss-intersystem-check.md) |
| Static GNSS Check | HDOP | < 3.0 | 3.0-5.0 | > 5.0 | IHO S-44 | [Static GNSS Check](../positioning/static-gnss-intersystem-check.md) |
| Dynamic GNSS Check | Horizontal agreement (DGNSS) | < 1.5 m | 1.5-3.0 m | > 3.0 m | Project spec | [Dynamic GNSS Check](../positioning/dynamic-gnss-intersystem-check.md) |
| DGNSS Integrity | Horizontal agreement | < 0.30 m | 0.30-0.50 m | > 0.50 m | IMCA S 017 | [DGNSS Integrity](../positioning/dgnss-integrity-check.md) |
| GNSS Height Check | Height agreement (PPP) | < 0.50 m | 0.50-1.0 m | > 1.0 m | Project spec | [GNSS Height Check](../positioning/gnss-accurate-height-check.md) |
| Correction age | All GNSS systems | < 10 s | 10-30 s | > 30 s | IMCA S 017 | -- |

---

## :material-sonar: USBL / Acoustic Positioning

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| USBL Calibration | SD of residuals (operational depth) | < 0.5 m | 0.5-1.0 m | > 1.0 m | IMCA S 017 | [USBL Calibration](../calibration/hipap-usbl-calibration.md) |
| USBL Calibration | Heading offset | < 2.0 deg | 2.0-5.0 deg | > 5.0 deg | Manufacturer | [USBL Calibration](../calibration/hipap-usbl-calibration.md) |
| USBL Calibration | Scale factor | 0.95-1.05 | 0.90-0.95 or 1.05-1.10 | < 0.90 or > 1.10 | Manufacturer | [USBL Data Processing](../calibration/usbl-calibration-data-processing.md) |
| HPR Verification | Min fixes per quadrant | 50 | 30-50 | < 30 | IMCA S 017 | [HPR Verification](../calibration/hipap-hpr-verification.md) |
| Responder Latency | Latency value | 2-15 ms | 15-25 ms | > 25 ms | Manufacturer | [Latency Check](../calibration/usbl-responder-latency-check.md) |
| USBL Position Accuracy | 2D RMS at depth | < 1% of slant range | 1-2% | > 2% | IMCA S 017 | [USBL Theory](../calibration/usbl-theory-and-error-budgets.md) |

---

## :material-compass-rose: Heading, Attitude, and Motion

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| AHRS Calibration | Heading C-O vs reference | < 0.5 deg | 0.5-1.0 deg | > 1.0 deg | IMCA S 017 | [AHRS Calibration](../calibration/ahrs-calibration.md) |
| AHRS Calibration | Pitch C-O | < 0.1 deg | 0.1-0.2 deg | > 0.2 deg | IMCA S 017 | [AHRS Calibration](../calibration/ahrs-calibration.md) |
| AHRS Calibration | Roll C-O | < 0.1 deg | 0.1-0.2 deg | > 0.2 deg | IMCA S 017 | [AHRS Calibration](../calibration/ahrs-calibration.md) |
| AHRS Calibration | Heading C-O SD | < 0.1 deg | 0.1-0.2 deg | > 0.2 deg | Best practice | [AHRS Calibration](../calibration/ahrs-calibration.md) |
| Static AHRS Check | Heading intersystem agreement | < 0.5 deg | 0.5-1.0 deg | > 1.0 deg | IMCA S 017 | [Static AHRS Check](../calibration/static-ahrs-intersystem-check.md) |
| Static AHRS Check | Pitch/Roll intersystem agreement | < 0.1 deg | 0.1-0.2 deg | > 0.2 deg | IMCA S 017 | [Static AHRS Check](../calibration/static-ahrs-intersystem-check.md) |
| Gyro Comparison | Heading agreement (settled) | < 0.5 deg | 0.5-1.0 deg | > 1.0 deg | Manufacturer | [Gyro Types](../calibration/gyro-types-and-calibration.md) |

---

## :material-waves: MBES Calibration (Patch Test)

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| Patch Test | Roll offset | < 1.0 deg | 1.0-2.0 deg | > 2.0 deg | IHO S-44 | [MBES Calibration](../calibration/mbes-calibration.md) |
| Patch Test | Pitch offset | < 1.0 deg | 1.0-2.0 deg | > 2.0 deg | IHO S-44 | [MBES Calibration](../calibration/mbes-calibration.md) |
| Patch Test | Heading offset | < 1.0 deg | 1.0-2.0 deg | > 2.0 deg | IHO S-44 | [MBES Calibration](../calibration/mbes-calibration.md) |
| Patch Test | Latency | 0-100 ms | -- | < 0 ms or > 100 ms | Manufacturer | [MBES Calibration](../calibration/mbes-calibration.md) |
| Patch Test | Offset stability | Consistent across cal areas | -- | Varies by > 0.3 deg between areas | Best practice | [MBES Calibration](../calibration/mbes-calibration.md) |

---

## :material-navigation: INS / DVL

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| INS/DVL Calibration | DVL misalignment | < 2.0 deg | 2.0-5.0 deg | > 5.0 deg | Manufacturer | [INS/DVL Calibration](../calibration/ins-dvl-calibration-guide.md) |
| INS/DVL Calibration | DVL scale factor | 0.95-1.05 | 0.90-0.95 or 1.05-1.10 | < 0.90 or > 1.10 | Manufacturer | [INS/DVL Calibration](../calibration/ins-dvl-calibration-guide.md) |
| Sprint-Nav Verification | Drift | < 0.1% of distance | 0.1-0.2% | > 0.2% | Manufacturer | [Sprint-Nav DVL](../calibration/sprint-nav-dvl-verification.md) |
| INS Alignment | Alignment time (FOG) | 20-30 min | 30-60 min | > 60 min | Manufacturer | [INS Theory](../equipment/ins-theory-and-principles.md) |

---

## :material-thermometer-water: Sound Velocity

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| SV/CTD Comparison | SV agreement at all depths | < 0.5 m/s | 0.5-1.0 m/s | > 1.0 m/s | Best practice | [SV/CTD Comparison](../calibration/sv-ctd-comparison-verification.md) |
| SV/CTD Comparison | Depth sensor agreement | < 0.5% of depth | 0.5-1.0% | > 1.0% | Best practice | [SV/CTD Comparison](../calibration/sv-ctd-comparison-verification.md) |
| SVP Repeatability | SV agreement between casts | < 0.5 m/s at equivalent depths | 0.5-1.5 m/s | > 1.5 m/s | Best practice | [SVP Repeatability](../calibration/svp-repeatability-test.md) |
| SVP Currency | Time since last cast (open ocean) | < 6 h | 6-12 h | > 12 h | IHO S-44 | [SV Operations](../calibration/sound-velocity-operations.md) |
| SVP Currency | Time since last cast (stratified) | < 2 h | 2-4 h | > 4 h | IHO S-44 | [SV Operations](../calibration/sound-velocity-operations.md) |

---

## :material-ruler: Dimensional Control

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| DC Survey (Total Station) | Measurement uncertainty (< 5 m) | < 0.005 m | 0.005-0.010 m | > 0.010 m | IMCA S 015 | [DC Survey](../calibration/dimensional-control-survey.md) |
| DC Survey (Total Station) | Measurement uncertainty (5-20 m) | < 0.010 m | 0.010-0.020 m | > 0.020 m | IMCA S 015 | [DC Survey](../calibration/dimensional-control-survey.md) |
| DC (Tape Measure) | Accuracy (< 1 m) | 0.01 m | 0.01-0.02 m | > 0.02 m | Best practice | [DC Tape Measure](../calibration/dimensional-control-tape-measure.md) |
| DC (Tape Measure) | Accuracy (1-3 m) | 0.05 m | 0.05-0.10 m | > 0.10 m | Best practice | [DC Tape Measure](../calibration/dimensional-control-tape-measure.md) |

---

## :material-sonar: Geophysical

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| SSS Verification | Target position agreement (USBL) | < 5 m | 5-10 m | > 10 m | Project spec | [SSS Verification](../equipment/side-scan-sonar-verification.md) |
| SSS Operations | Altitude stability | Within +/-20% of target | 20-30% variation | > 30% variation | IMCA S 024 | [SSS Operations](../equipment/side-scan-sonar-operations.md) |
| SSS Operations | Line overlap | > 10% | 5-10% | < 5% | IMCA S 024 | [SSS Operations](../equipment/side-scan-sonar-operations.md) |
| Mag/TVG | Noise floor (TVG) | < 1 nT | 1-3 nT | > 3 nT | Manufacturer | [Mag/TVG Test](../calibration/magnetometer-tvg-acceptance-test.md) |
| Surrogate Item Test | Detection at operational altitude | Detected | Marginal detection | Not detected | Project spec | [Surrogate Test](../calibration/surrogate-item-test-gma1000.md) |
| SBP | Cross-line tie (reflector depth) | < 0.5 m | 0.5-1.0 m | > 1.0 m | Best practice | [SBP Operations](../equipment/sub-bottom-profiler-operations.md) |

---

## :material-camera: Camera and Video

| Procedure | Parameter | Pass | Marginal | Fail | Standard | Wiki Article |
|:--|:--|:-:|:-:|:-:|:--|:--|
| Video/DVR | Resolution | 1080p minimum | 720p | < 720p | Project spec | [Video/DVR](../equipment/video-camera-dvr-verification.md) |
| Video/DVR | Timestamp accuracy | < 1 s of UTC | 1-5 s | > 5 s | Best practice | [Video/DVR](../equipment/video-camera-dvr-verification.md) |
| Video/DVR | Playback verification | Plays correctly | -- | Does not play | Best practice | [Video/DVR](../equipment/video-camera-dvr-verification.md) |

---

## :material-information-outline: IHO S-44 Survey Order Requirements

| Order | THU (95%) | TVU (95%) | Application |
|:--|:--|:--|:--|
| Exclusive | 1 m | a = 0.15 m, b = 0.0075 | Harbour, berth, critical areas |
| Special | 2 m | a = 0.25 m, b = 0.0075 | Harbour approach, navigation channels |
| 1a | 5 m + 5% depth | a = 0.50 m, b = 0.013 | Coastal waters < 100 m |
| 1b | 5 m + 5% depth | a = 0.50 m, b = 0.013 | Coastal waters < 100 m (reduced feature detection) |
| 2 | 20 m + 10% depth | a = 1.0 m, b = 0.023 | Offshore > 100 m |

TVU formula: **TVU = sqrt(a^2 + (b x d)^2)** where d = depth in metres.

---

!!! warning "Client Specification Prevails"
    The values in this table are typical industry standards. Client specifications, project-specific requirements, and national regulations may specify tighter or different thresholds. Always confirm acceptance criteria with the project specification before starting calibrations.

---

## :material-link-variant: Related Articles

- [TPU and Error Budgets](tpu-error-budgets.md)
- [Industry Standards Reference](industry-standards-reference.md)
- [Survey Reporting Fundamentals](../reporting/survey-reporting-guide.md)
- [Mobilisation Checklist](../field-notes/mobilisation-checklist.md)

---

!!! quote "References"
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - IMCA S 015, Guidelines for Survey Mobilisation and Calibration
    - IMCA S 017, Guidelines for Positioning Systems
    - IMCA S 024, Guidelines for Side Scan Sonar Operations
    - Equipment manufacturer specifications
