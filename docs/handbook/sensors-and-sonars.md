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

# Chapter 6: Sensors and Sonars - Your Underwater Toolkit

## Multibeam & Single Beam Echo Sounders: Peeking at the Seabed in HD

**Single Beam Echo Sounders (SBES)** are the classic tools of hydrography, sending a single acoustic pulse straight down to measure depth at one point under the vessel. This simplicity makes SBES ideal for quick or budget-friendly jobs. You often see them used for harbor checks (where a harbormaster wants to verify siltation levels) or for initial "recon" surveys. Because SBES only returns a single depth point at a time, you won't get a wide swath or 3D view of the seabed. However, the straightforward setup and data processing can be a real time-saver.

**Multibeam Echo Sounders (MBES)**, on the other hand, emit multiple beams across a fan-shaped swath, mapping a broad area of the seafloor in one pass. This provides a detailed, three-dimensional perspective, which is crucial for pipeline route selection or top-tier engineering projects. Data processing is more involved (adjusting for vessel motion, sound velocity variations, and beam angles) but the final result can show intricate features like sand ripples, rocky outcrops, or sunken debris. If your project calls for precision and a comprehensive overview of the seabed, MBES is usually the go-to option. When budgets or project demands are modest, SBES might suffice.

!!! tip "Go Deeper"
    - [MBES Installation and Setup](../equipment/mbes-installation-and-setup.md)
    - [MBES Operations and Settings](../equipment/mbes-operations-and-settings.md)
    - [MBES Calibration (Patch Test)](../calibration/mbes-calibration.md)

## Side Scan Sonar: Seafloor Selfies and Topographic Glam Shots

Side Scan Sonar (SSS) provides a near-photographic image of the seabed's texture by sending fan-shaped acoustic pulses to the side of a towfish or hull-mounted unit and recording the intensity of the returning echoes. Rather than telling you precise depths, SSS paints a grayscale "picture" where lighter areas typically indicate hard surfaces like rock or metal, and darker patches suggest softer sediments or deeper hollows.

Because of this, SSS excels at detecting objects, anything from pipelines to lost shipwrecks. In route clearance surveys, for example, operators commonly use side scan sonar to spot obstructions that might snag a future cable. If you want to visually identify what's on the seafloor in detail, SSS is the right sensor for the job. That said, pairing it with SBES or MBES for depth data gives you the full picture: what's on the seabed and how deep it is.

!!! tip "Go Deeper"
    - [SSS Theory and Operations](../equipment/side-scan-sonar-operations.md)
    - [SSS Positioning Verification](../equipment/side-scan-sonar-verification.md)

## Sub-Bottom Profilers, Magnetometers, and Gradiometers: Peering Beneath the Seafloor

Sometimes, you need more than just the surface picture. **Sub-Bottom Profilers (SBPs)** emit low-frequency pulses capable of penetrating the seabed, revealing layered reflections that hint at what lies beneath, whether it's soft mud, sandy sediment, or solid rock. This information is vital when you're planning something like a wind farm or drilling project and need to know if there's bedrock just under a thin layer of sand. While deeper penetration often reduces resolution, a well-chosen frequency can show you enough detail to decide whether a site is suitable for construction.

Meanwhile, **Magnetometers and Gradiometers** measure variations in the Earth's magnetic field, helping you locate ferrous objects. This could mean detecting an old anchor, a cluster of abandoned pipelines, or something more dangerous like unexploded ordnance. By noticing spikes or dips in the baseline magnetic field, these tools act like underwater metal detectors. They're especially crucial in cable route planning and archaeology, where unknowingly placing new infrastructure over hidden metal debris could lead to costly, or even hazardous, complications.

!!! tip "Go Deeper"
    - [Sub-Bottom Profiler Operations](../equipment/sub-bottom-profiler-operations.md)
    - [Magnetometer/TVG Acceptance Test](../calibration/magnetometer-tvg-acceptance-test.md)
    - [Surrogate Item Test (GMA1000)](../calibration/surrogate-item-test-gma1000.md)

## LIDAR, ROVs, AUVs: The Future Is Now

Not everything underwater relies on acoustics. **LIDAR (Light Detection and Ranging)** uses lasers to create highly accurate maps, typically of coastal areas or structures that sit partly above the waterline. It's less effective in deeper water (light gets absorbed too quickly) but can capture extremely fine details along shorelines, harbor walls, or any transition zones between land and sea.

Beyond remote sensing, robotics have revolutionized subsea operations.

### ROVs: Tethered Underwater Workhorses

Remotely Operated Vehicles (ROVs) are essentially submersible robots connected to the surface by a tether that carries power and communication signals. This live link enables operators on deck (or in a dedicated control van) to pilot the ROV with real-time feedback from onboard cameras and sensors. ROVs vary in size and capability. Some are compact inspection-class units designed for quick dives, while others are hefty work-class machines capable of carrying heavy tools and performing construction tasks.

- **Inspections and Maintenance:** Whether you're checking weld seams on a platform leg or looking for signs of corrosion on a pipeline, an ROV's camera and manipulator arm make these tasks safer and faster than sending down divers.
- **Sampling and Environmental Work:** ROVs can be fitted with specialized sensors for water sampling, sediment coring, or gathering biological specimens, handy in research or environmental monitoring.
- **Construction Assistance:** Many work-class ROVs come equipped with hydraulic arms, torque tools, and other attachments for subsea construction tasks.

### AUVs: The Autonomous Explorers

Autonomous Underwater Vehicles (AUVs) take things a step further by ditching the tether entirely. They're pre-programmed with a mission plan and released to navigate, collect data, and return on their own.

- **Large-Scale Mapping:** AUVs excel at systematic data collection over wide areas. Program an AUV to cover a grid, and it will methodically gather data (like multibeam or side scan imagery) while you monitor progress from the vessel.
- **Deepwater Missions:** Because there's no tether drag or risk of entanglement, AUVs often venture into deeper or more complex environments with greater ease.
- **Efficient Workflows:** With less hands-on piloting required, survey teams can focus on planning, data processing, and other tasks while the AUV goes about its route, like having an extra team member who never needs a coffee break.
- **Advanced Autonomy:** Many AUVs now include obstacle avoidance and real-time decision-making abilities, so they can adapt to unexpected conditions, such as changes in seabed topography or strong currents.

### ROTVs: The Middle Ground

Remotely Operated Towed Vehicles (ROTVs) are towed behind the vessel but have control surfaces that let operators adjust depth and attitude. They're typically deployed for specialized surveys like towing a side scan sonar or a magnetometer array, maintaining a steady depth or following a particular path with more control than a purely passive tow.

**Advantages:** Reduced power needs (the vessel provides the motion), better data consistency by actively controlling depth and pitch, and lower complexity than full ROVs or AUVs.

**Limitations:** The ROTV can't go where the towing vessel can't reach, and it can't hover in place or navigate tight spaces the way an ROV can.

### Why ROVs and AUVs Matter

- **Task Specialization:** ROVs shine when you need live control and the ability to manipulate objects or inspect areas up close. AUVs excel at autonomous missions covering large regions or deep water without continuous human supervision.
- **Safety and Efficiency:** Both robots significantly reduce the need for diver intervention in hazardous conditions, increasing overall safety and speeding up tasks.
- **Flexible Sensor Payloads:** Cameras, sonars, manipulators, environmental sensors. These vehicles can carry almost anything you need to get the job done.

When integrated with data from your echo sounders, side scan sonar, sub-bottom profilers, and other survey tools, ROVs and AUVs help complete the underwater puzzle.

!!! tip "Go Deeper"
    The wiki has detailed guides on ROV survey operations:

    - [Subsea Metrology Overview](../rov/metrology-overview.md)
    - [INS-Based Metrology (SLAM)](../rov/ins-based-metrology.md)
    - [Pipeline Survey Operations](../rov/pipeline-survey-operations.md)
    - [As-Built Survey Procedures](../rov/as-built-survey.md)
    - [Construction Support Survey](../rov/construction-support-survey.md)

## Data Logging and QC: Ensuring Quality Inputs for Quality Outputs

All these fancy sensors and vehicles are useless if you don't log the data properly and check it for quality. Data logging is the process of capturing and storing all those ones and zeros that will eventually become your maps and charts. Good housekeeping (consistent file naming, reliable backups, and proper metadata) keeps your data organized and prevents confusion down the line. Treat that raw data like treasure, because that's essentially what it is.

### Online vs Offline: Two Halves of the QC Puzzle

- **Online Team (Real-Time Monitoring):** The online team watches data as it streams in during active survey operations. They verify that positioning, multibeam, side scan, and all other systems are performing within specs, and that essential corrections (like sound velocity updates) are in place. If they notice odd readings or equipment glitches, they flag it immediately. Catching an error while the survey is still in progress can save hours (or days) of re-work.

- **Offline Team (Data Processing and QC):** Once data is logged, the offline team cleans it up, applies advanced corrections (like tide, motion, or sensor offsets), and flags anomalies. They'll also create preliminary charts or visuals to see if everything makes sense. If the offline team spots major issues (like missing pings or suspiciously perfect readings) they'll alert the online crew, who may need to re-run a line or adjust equipment settings.

### Why It Matters

Quality Control (QC) isn't just about collecting data; it's about making sure it's *good* data. The earlier you catch problems, the easier (and cheaper) they are to fix. A small sensor offset might seem minor, but if it goes undetected, your entire dataset could be compromised. Think of it this way: garbage in, garbage out. By pairing vigilant online monitoring with detailed offline checks, you can be confident in the final products, whether those are charts, 3D models, or engineering plans.

When online and offline teams communicate effectively, you not only avoid duplication of effort, but you also end up with data that everyone trusts. That level of trust is crucial if you're handing off results to clients, engineers, or decision-makers who rely on your surveys to guide multimillion-dollar projects.

---

*Next up: [Survey Techniques & Workflows](survey-techniques.md) - how all these tools come together in actual survey operations.*
