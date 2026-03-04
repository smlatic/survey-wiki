---
title: "Sensors and Sonars"
tags:
  - handbook
  - beginner
  - mbes
  - sbes
  - side-scan
  - sub-bottom
  - magnetometer
  - rov
  - auv
---

# Chapter 6: Sensors and Sonars

## Multibeam and Single Beam Echo Sounders

**Single Beam Echo Sounders (SBES)** send a single acoustic pulse straight down to measure depth at one point beneath the vessel. Simple, reliable, and quick to process. You'll see them used for harbor siltation checks, preliminary reconnaissance, or anywhere a full swath isn't justified. The trade-off is obvious: one depth point at a time means no wide coverage and no 3D seabed picture.

**Multibeam Echo Sounders (MBES)** emit multiple beams across a fan-shaped swath, mapping a broad area of the seafloor in one pass. The result is a detailed three-dimensional model -- essential for pipeline route selection, engineering surveys, and any project that demands comprehensive seabed coverage. Processing is more involved (corrections for vessel motion, sound velocity, and beam geometry), but the output quality makes MBES the standard for most offshore work.

When budgets or project scope are modest, SBES may be sufficient. For anything requiring precision and full coverage, MBES is the go-to.

!!! tip "Go Deeper"
    - [MBES Installation and Setup](../equipment/mbes-installation-and-setup.md)
    - [MBES Operations and Settings](../equipment/mbes-operations-and-settings.md)
    - [MBES Calibration (Patch Test)](../calibration/mbes-calibration.md)

## Side Scan Sonar

Side Scan Sonar (SSS) produces near-photographic imagery of the seabed's texture by sending fan-shaped acoustic pulses to the side of a towfish or hull-mounted unit and recording the intensity of returning echoes. Rather than measuring precise depths, SSS creates a grayscale image where lighter areas typically indicate hard surfaces (rock, metal) and darker patches suggest softer sediments or depressions.

SSS excels at object detection -- pipelines, debris, wrecks, boulders. In route clearance surveys, operators use it to identify obstructions that could snag a future cable or pipeline. For full situational awareness, pair SSS with SBES or MBES: SSS tells you what's on the seabed, echo sounders tell you how deep it is.

!!! tip "Go Deeper"
    - [SSS Theory and Operations](../equipment/side-scan-sonar-operations.md)
    - [SSS Positioning Verification](../equipment/side-scan-sonar-verification.md)

## Sub-Bottom Profilers, Magnetometers, and Gradiometers

Sometimes you need to see below the seabed surface, not just the top of it.

**Sub-Bottom Profilers (SBPs)** emit low-frequency pulses that penetrate the seabed, revealing layered reflections of the subsurface -- soft mud, sandy sediment, bedrock. This data is critical for wind farm foundations, drilling operations, or any project where you need to know what's underneath a thin surface layer. Lower frequencies penetrate deeper but with reduced resolution; choosing the right frequency is a trade-off based on project requirements.

**Magnetometers and Gradiometers** measure variations in the Earth's magnetic field to detect ferrous (iron-containing) objects. Old anchors, abandoned pipelines, unexploded ordnance -- anything with a ferromagnetic signature shows up as an anomaly against the background field. They're particularly important in cable route planning and pre-lay surveys, where hitting buried metal during installation could be costly or dangerous.

!!! tip "Go Deeper"
    - [Sub-Bottom Profiler Operations](../equipment/sub-bottom-profiler-operations.md)
    - [Magnetometer/TVG Acceptance Test](../calibration/magnetometer-tvg-acceptance-test.md)
    - [Surrogate Item Test (GMA1000)](../calibration/surrogate-item-test-gma1000.md)

## LIDAR, ROVs, and AUVs

Not everything underwater relies on acoustics. **LIDAR (Light Detection and Ranging)** uses lasers to create highly accurate surface models, typically of coastal areas or structures that sit partly above the waterline. Light attenuates quickly in water, limiting LIDAR to shallow depths, but it captures extremely fine detail along shorelines, harbor walls, and land-sea transition zones.

Beyond remote sensing, robotics have transformed subsea operations.

### ROVs: Tethered Underwater Workhorses

Remotely Operated Vehicles (ROVs) are submersible robots connected to the surface by a tether carrying power and communications. Operators pilot them with real-time video and sensor feedback from the surface. ROVs range from compact inspection-class units for quick dives to heavy work-class machines with hydraulic arms and construction tooling.

- **Inspections and Maintenance:** Checking weld seams, spotting corrosion on pipelines, examining platform legs -- tasks that are safer and faster with an ROV than with divers.
- **Sampling and Environmental Work:** Fitted with specialized sensors for water sampling, sediment coring, or biological specimen collection.
- **Construction Assistance:** Work-class ROVs carry hydraulic arms, torque tools, and other attachments for subsea construction tasks.

### AUVs: Autonomous Subsea Vehicles

Autonomous Underwater Vehicles (AUVs) operate without a tether. They're pre-programmed with a mission plan and released to navigate, collect data, and return independently.

- **Large-Scale Mapping:** AUVs cover wide survey areas systematically, collecting multibeam or side scan data along pre-planned grids.
- **Deepwater Missions:** No tether means no drag or entanglement risk, making AUVs well-suited to deep or complex environments.
- **Efficient Workflows:** With less hands-on piloting required, survey teams can focus on planning and data processing while the AUV runs its route.
- **Advanced Autonomy:** Modern AUVs include obstacle avoidance and real-time decision-making, adapting to changes in seabed topography or current conditions.

### ROTVs: The Middle Ground

Remotely Operated Towed Vehicles (ROTVs) are towed behind the vessel but have control surfaces that let operators adjust depth and attitude. They're typically deployed for towing side scan sonar or magnetometer arrays, maintaining steady depth with more control than a purely passive tow.

**Advantages:** Reduced power needs (the vessel provides forward motion), better data consistency through active depth and pitch control, and lower complexity than full ROVs or AUVs.

**Limitations:** ROTVs can't go where the towing vessel can't reach, and they can't hover or navigate tight spaces the way an ROV can.

### Why ROVs and AUVs Matter

- **Task Specialization:** ROVs excel at live-controlled inspection and manipulation. AUVs are built for autonomous coverage of large areas or deep water.
- **Safety and Efficiency:** Both reduce the need for diver intervention in hazardous conditions, improving safety and speed.
- **Flexible Sensor Payloads:** Cameras, sonars, manipulators, environmental sensors -- these platforms carry whatever the job requires.

When integrated with data from echo sounders, side scan sonar, sub-bottom profilers, and other survey tools, ROVs and AUVs complete the subsea picture.

!!! tip "Go Deeper"
    The wiki has detailed guides on ROV survey operations:

    - [Subsea Metrology Overview](../rov/metrology-overview.md)
    - [INS-Based Metrology (SLAM)](../rov/ins-based-metrology.md)
    - [Pipeline Survey Operations](../rov/pipeline-survey-operations.md)
    - [As-Built Survey Procedures](../rov/as-built-survey.md)
    - [Construction Support Survey](../rov/construction-support-survey.md)

## Data Logging and QC

All these sensors and vehicles produce data that's only as good as your logging and quality control processes. Consistent file naming, reliable backups, and proper metadata keep things organized. Treat raw data with care -- it's what everything downstream depends on.

### Online vs Offline QC

- **Online Team (Real-Time Monitoring):** The online team watches data as it streams in during active operations. They verify that positioning, multibeam, side scan, and all other systems are performing within spec, and that corrections (like sound velocity updates) are applied. If they spot anomalies or equipment issues, they flag them immediately. Catching an error during acquisition can save hours or days of re-work.

- **Offline Team (Data Processing and QC):** Once data is logged, the offline team cleans it, applies advanced corrections (tide, motion, sensor offsets), and flags anomalies. They produce preliminary charts and visuals to verify the data makes sense. If they find major issues -- missing pings, suspicious uniformity, unexplained gaps -- they alert the online crew, who may need to re-run a line or adjust equipment.

### Why It Matters

QC isn't just about collecting data; it's about collecting *good* data. The earlier you catch problems, the cheaper they are to fix. A small sensor offset seems minor until it propagates through your entire dataset. Garbage in, garbage out.

When online and offline teams communicate well, you avoid duplicated effort and end up with data everyone trusts. That trust matters when clients, engineers, and decision-makers are relying on your surveys to guide multimillion-dollar projects.

---

*Next up: [Survey Techniques & Workflows](survey-techniques.md) -- how all these tools come together in actual survey operations.*
