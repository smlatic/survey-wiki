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

# Chapter 5: Positioning Technologies

## GNSS, RTK, and INS

On the surface, positioning relies on satellites. Global Navigation Satellite Systems (GNSS) -- GPS (U.S.), GLONASS (Russia), Galileo (Europe), BeiDou (China) -- provide your primary position fix. Your receiver calculates position by measuring signal travel times from multiple satellites overhead.

Standard GNSS gets you within a few meters. When you need centimeter-level accuracy, **RTK (Real-Time Kinematic)** closes the gap. RTK uses a base station on a known point to broadcast correction data to your receiver, bringing positional accuracy down to a few centimeters.

No system is perfect, though. Signals can bounce off waves, degrade in bad weather, or drop out entirely. **INS (Inertial Navigation System)** uses accelerometers and gyroscopes to track movement independently. When GNSS signals drop out, the INS bridges the gap until satellites are reacquired. The longer it runs without external corrections, the more it drifts -- but for short outages, it keeps your position solution alive.

!!! tip "Go Deeper"
    - [GNSS Fundamentals](../positioning/gnss-fundamentals.md)
    - [GNSS Jamming and Spoofing](../positioning/gnss-jamming-and-spoofing.md)
    - [DGNSS Integrity Check](../positioning/dgnss-integrity-check.md)

## USBL and LBL: Underwater Positioning with Sound

Radio waves don't propagate through water, so subsea positioning uses acoustics instead. The two most common methods offshore are USBL (Ultra-Short Baseline) and LBL (Long Baseline).

### USBL (Ultra-Short Baseline)

**How it works:** A transducer on the vessel sends an acoustic pulse, and a beacon on the ROV or subsea equipment replies. The system measures the angle and time delay of the return signal to calculate the beacon's position in 3D space.

**Typical use:** USBL is quick to deploy, making it the standard choice for routine inspections, shorter projects, or shallower water depths where real-time positioning is needed.

**Why it's common offshore:** Most vessels already have a USBL transducer pole installed, and the system integrates easily with standard survey software. It's your go-to when you need to start work fast or won't be staying in one location long.

### LBL (Long Baseline)

**How it works:** Multiple transponders are placed on the seabed, creating an underwater reference network. Each transponder responds when interrogated, and the system triangulates position by measuring ranges to each one.

**When it's used:** LBL is suited to permanent or high-precision operations -- deepwater drilling, long-term construction campaigns -- where you need extremely stable, repeatable positioning.

**Why it's worth the effort:** Setting up an LBL array takes more time (laying out and calibrating transponders), but the payoff is centimeter-level accuracy in environments where USBL alone can't deliver the required precision.

Both systems use the same underlying principle: measuring acoustic travel times through water to determine position.

!!! tip "Go Deeper"
    - [USBL Theory and Error Budgets](../calibration/usbl-theory-and-error-budgets.md)
    - [HiPAP USBL Calibration](../calibration/hipap-usbl-calibration.md)
    - [HiPAP Verification (Spin & Transit)](../calibration/hipap-hpr-verification.md)

!!! tip "Go Deeper"
    - [LBL Acoustic Positioning Fundamentals](../positioning/lbl-fundamentals.md)

## DVL, MRU, and Sound Velocity

Positioning isn't just about where you are. It's also about how you're moving and how the water column affects your acoustic signals.

### DVL (Doppler Velocity Log)

A DVL sends acoustic beams toward the seabed and measures the Doppler shift of the return signals. This gives you speed and direction of movement relative to the ocean floor.

DVLs can be mounted on both vessels and ROVs (especially useful when operating near the seabed). They provide real-time velocity data that feeds into INS and other positioning systems to improve overall accuracy.

!!! tip "Go Deeper"
    - [INS Theory and Principles](../equipment/ins-theory-and-principles.md)
    - [INS/DVL Calibration Guide](../calibration/ins-dvl-calibration-guide.md)

### MRU (Motion Reference Unit)

The MRU tracks pitch, roll, and heave -- all the motion your vessel or ROV experiences. Without motion compensation, sensor data from systems like multibeam echo sounders would be distorted by the platform's movement.

- **On a vessel:** MRUs provide the motion corrections needed to produce accurate bathymetry and positioning data.
- **On an ROV:** Motion sensors on the vehicle itself feed orientation data into the positioning solution for accurate subsea work.

!!! tip "Go Deeper"
    - [Heave, MRU Theory and Verification](../equipment/heave-mru-theory.md)

### Sound Velocity

Sound doesn't travel at a fixed speed underwater. Temperature, salinity, and depth all affect propagation speed, and these properties change with depth through the water column.

**Where it matters:**

- **Acoustic Positioning (USBL/LBL):** Travel time calculations depend directly on knowing the speed of sound through the water column.
- **Sonar Systems (Multibeam, Side-Scan):** Incorrect sound velocity profiles warp beam angles and distort the final data.

**SVPs (Sound Velocity Profiles) and SV Sensors:** You measure the speed of sound at various depths by lowering an SV probe through the water column. Some vessels have continuous sensors installed, but most operations also run periodic SVP casts to capture current conditions.

Skipping sound velocity corrections leads to warped or misaligned survey data. Regular updates keep your acoustic measurements accurate -- and accuracy is the whole point of the job.

## Integrating Systems

No single positioning system covers every requirement. In practice, you combine them. GNSS provides the surface position. INS maintains continuity through signal outages. USBL or LBL positions subsea targets. DVL measures velocity near the seabed. MRU compensates for platform motion. Sound velocity corrections keep the acoustics honest.

When these systems are properly integrated and calibrated, each one fills in the gaps the others can't cover. The result is a reliable, continuous positioning solution from the surface to the seabed -- which is what every survey operation depends on.

---

*Next up: [Sensors and Sonars](sensors-and-sonars.md) -- your underwater toolkit, from multibeam echo sounders to ROVs and AUVs.*
