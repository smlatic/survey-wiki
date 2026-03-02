---
title: "Positioning Technologies"
tags:
  - handbook
  - beginner
  - gnss
  - usbl
  - lbl
  - ins
  - dvl
  - mru
  - positioning
---

# Chapter 5: Above and Below the Waves - Positioning 101

## GNSS, RTK, and INS: The High-Tech Trio Keeping You on Track

Up on the surface, positioning is all about playing a game of "tag" with satellites. When you're on a vessel floating miles from shore, you rely on Global Navigation Satellite Systems (GNSS) like GPS (U.S.), GLONASS (Russia), Galileo (Europe), or BeiDou (China) to tell you exactly where you are. These satellites beam signals down, and your receiver uses the time it takes for those signals to arrive to figure out your position. It's like a cosmic game of Marco Polo.

But while GNSS is pretty good, sometimes you need more precision. That's where **RTK (Real-Time Kinematic)** comes in. RTK uses a base station on a known point to broadcast correction data to your receiver, shrinking your positional error down to a few centimeters. Think of it as GNSS with a personal trainer, tuning, refining, and keeping your coordinates in top shape.

Still, no system is perfect. Signals can bounce off waves or disappear when the weather gets gnarly. **INS (Inertial Navigation System)** steps in as your backup. Using accelerometers and gyroscopes to track your movement, the INS can keep you on track when GNSS signals falter, like a loyal friend guiding you through a dark room until the lights come back on.

!!! tip "Go Deeper"
    - [GNSS Fundamentals](../positioning/gnss-fundamentals.md)
    - [GNSS Jamming and Spoofing](../positioning/gnss-jamming-and-spoofing.md)
    - [DGNSS Integrity Check](../positioning/dgnss-integrity-check.md)

## USBL & LBL: Underwater Positioning with Sound

What about when you go beneath the surface? Good luck trying to get a satellite signal down there. Radio waves don't exactly like swimming. Instead, we use sound-based tracking systems. Two of the most common methods you'll encounter offshore are USBL (Ultra-Short Baseline) and LBL (Long Baseline).

### USBL (Ultra-Short Baseline)

**How it works:** A transducer on the vessel sends out a "ping," and a beacon on your ROV or equipment replies. By measuring the angle and time delay of the return signal, the system calculates the beacon's position in 3D space.

Picture standing in a cave and shouting "Hello!" You time how long it takes for the echo to come back and figure out how far away the walls are. Here, it's sound waves and math instead of just your ears.

**Typical use:** USBL is quick to set up, making it great for shorter or shallower projects where real-time positioning is needed, like routine inspections or quick surveys.

**Why it's common offshore:** Most vessels already have a USBL transducer pole, and it integrates easily with standard survey software. It's your go-to solution when you need to start work fast or won't stay in one spot for too long.

### LBL (Long Baseline)

**How it works:** Multiple transponders are placed on the seabed, creating an "underwater reference grid." Each transponder pings back a signal when triggered, and by measuring distances to each transponder, you can triangulate your position very accurately.

Think of placing a network of miniature "lighthouses" on the seafloor. Your ROV or equipment detects the signals from these lighthouses, and you can pinpoint its location down to centimeters.

**When it's used:** LBL is ideal for more permanent or high-precision operations, like deepwater drilling or long-term construction, where you need extremely stable, repeatable positioning.

**Why it's worth the effort:** Although it takes more time and effort to install (because you have to lay out and calibrate the transponders), the payoff is rock-solid data in complex or critical projects.

Whether it's USBL or LBL, the principle remains the same: use sound waves (sonar) to figure out where you are. It's high-tech echolocation, and when done right, it's impressively accurate.

!!! tip "Go Deeper"
    - [USBL Theory and Error Budgets](../calibration/usbl-theory-and-error-budgets.md)
    - [HiPAP USBL Calibration](../calibration/hipap-usbl-calibration.md)
    - [HiPAP Verification (Spin & Transit)](../calibration/hipap-hpr-verification.md)

!!! tip "Go Deeper"
    - [LBL Acoustic Positioning Fundamentals](../positioning/lbl-fundamentals.md)

## DVL, MRU, and Sound Velocity: Getting Nerdy for Accurate Results

Positioning isn't just about where you are. It's also about how you're moving and how environmental factors might distort your acoustic signals.

### DVL (Doppler Velocity Log)

A DVL sends acoustic beams toward the seabed and measures the Doppler shift of the return signals. This tells you how fast and in what direction you're moving relative to the ocean floor.

Think of driving a car and watching trees go by; if they zip past quickly, you know you're speeding up. The DVL does a similar "speed check," but with sound waves bouncing off the seafloor.

DVLs can be mounted on both vessels and ROVs (especially when operating near the seabed). They provide real-time speed and heading data that integrates with other positioning systems.

!!! tip "Go Deeper"
    - [INS Theory and Principles](../equipment/ins-theory-and-principles.md)
    - [INS/DVL Calibration Guide](../calibration/ins-dvl-calibration-guide.md)

### MRU (Motion Reference Unit)

The MRU tracks pitch, roll, and heave, basically all the rocking, tilting, and bobbing your vessel or ROV might do. Picture yourself trying to walk a straight line on a rolling ship. The MRU measures every sway and wobble so you can correct your final path or sensor readings.

- **On a vessel:** MRUs help stabilize sensor data from systems like multibeam echo sounders by compensating for the ship's motion.
- **On an ROV:** You can also have motion sensors on the ROV itself for accurate positioning and orientation data when it's maneuvering underwater.

!!! tip "Go Deeper"
    - [Heave, MRU Theory and Verification](../equipment/heave-mru-theory.md)

### Sound Velocity: The Unsung Hero

Sound doesn't travel at a fixed speed underwater. Temperature, salinity, and depth all change how fast sound waves move. It's like shining a flashlight through layers of fog of different densities; each layer bends or diffuses the light differently. In water, each layer of temperature and salinity changes how fast the sound moves.

**Where we apply it:**

- **Acoustic Positioning (USBL/LBL):** The travel times in these systems depend on how fast sound moves through the water column.
- **Sonar Systems (Multibeam, Side-Scan):** Correct sound velocity profiles ensure you're not unintentionally warping or shifting your final images.

**SVPs (Sound Velocity Profiles) and SV Sensors:** Typically, you lower an SV probe or profiler through the water column to measure speed of sound at different depths. Some vessels have continuous sensors, but many operations run periodic "SVP casts" to keep the data up-to-date.

Skipping or ignoring sound velocity corrections can lead to warped or misaligned survey data. Regular updates ensure your acoustic readings remain precise, which is crucial when the entire job is about accuracy.

## Integrating Systems: Conducting an Underwater Orchestra

A single positioning system might be good, but the real magic happens when you combine them. GNSS gives you a solid starting point. INS provides a safety net when signals fade. USBL or LBL can pinpoint your subsea target. DVL tells you how fast you're moving underwater, and the MRU keeps track of vessel motion. Add in sound velocity corrections, and suddenly you're making beautiful, coherent "music" out of what could have been noise.

Think of it as an orchestra: each instrument (system) contributes its unique sound (data). On their own, they might sound okay, but together, coordinated and harmonized, they produce a symphony of accuracy. The result? You know exactly where you are, where you're going, and how to correct for the motion of the ocean. This integrated approach lets you work confidently and efficiently, making the data you gather much more reliable.

---

*Next up: [Sensors and Sonars](sensors-and-sonars.md) - your underwater toolkit, from multibeam echo sounders to ROVs and AUVs.*
