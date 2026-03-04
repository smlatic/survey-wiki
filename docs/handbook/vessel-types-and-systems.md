---
title: "Vessel Types and Systems"
category: handbook
tags:
  - handbook
  - beginner
  - vessel
  - DP
  - communications
  - deck equipment
  - ROV
date_added: 2026-03-04
source_type: equipment_guide
---

# Vessel Types and Systems

You've got the job, you've packed your bag, and now someone tells you you're heading to an "IMR vessel" or a "DP2 CSV." If those sound like alphabet soup, this article breaks it all down. Every vessel type you're likely to step onto as a surveyor, the deck hardware you'll see, how the ship holds position, and how you'll get your data back to shore.

---

## Vessel Types: What Am I Stepping Onto?

Not all offshore vessels are the same, and the type of vessel dictates what kind of work happens on board, what equipment is available, and what the surveyor's day looks like. Here are the ones you'll actually encounter.

### Diving Support Vessel (DSV)

A DSV exists to put divers in the water safely and keep them there. These vessels carry saturation diving systems -- pressurised chambers, diving bells, and life support -- so divers can work at depth for extended periods. Most DSVs have a moonpool for through-hull deployment of divers, ROVs, and equipment.

- **Typical DP class:** DP2 or DP3. Precise station-keeping is non-negotiable when divers are in the water.
- **Surveyor's role:** Providing positioning for dive operations, managing USBL tracking of the dive bell and divers, feeding position references into the DP system, and running any ROV survey work happening in parallel.

### Inspection, Maintenance and Repair (IMR) Vessel

The IMR vessel is the workhorse of subsea operations. These are dynamically positioned vessels set up for well intervention, maintenance, coiled tubing, and general subsea work. Most carry one or two work-class ROVs.

- **Typical DP class:** DP2.
- **Surveyor's role:** This is one of the most common platforms for survey campaigns. You'll be running ROV-based inspection, as-built surveys, pipeline tracking, and construction support. The survey spread is often containerised and mobilised onto the deck.

### Construction Support Vessel (CSV)

CSVs are the heavy lifters. Large deck areas, significant crane capacity (sometimes hundreds of tonnes), and big accommodation blocks for large project crews. These vessels handle long-duration subsea construction: laying structures, installing manifolds, spool pieces, and umbilicals.

- **Typical DP class:** DP2 or DP3. Heavy-lift operations near subsea infrastructure demand high redundancy.
- **Surveyor's role:** Guiding crane operations with real-time positioning, as-built surveys of installed structures, metrology, and construction support. The survey team is critical for placing things where they need to go on the seabed.

### Multipurpose Support Vessel (MPSV)

The jack-of-all-trades. MPSVs are designed to handle a mix of tasks: logistics support, anchor handling, data collection, emergency response, construction support, and maintenance. They're common because operators want flexibility.

- **Typical DP class:** Varies. DP1 to DP2 depending on the vessel and the job.
- **Surveyor's role:** Whatever the project requires. Survey equipment is often mobilised specifically for the campaign, so the setup changes from job to job. Adaptability is key on these vessels.

### ROV Support Vessel (ROSV)

Purpose-built for ROV operations. These vessels have the deck layout, LARS (Launch and Recovery System), and accommodation optimised for running ROVs around the clock.

- **Typical DP class:** DP2.
- **Surveyor's role:** This is your primary platform for ROV-based survey work -- pipeline inspection, as-built, construction support, and metrology. The survey and ROV teams work hand-in-hand here. You'll spend a lot of time in the survey shack watching sonar screens and managing positioning.

### Platform Supply Vessel (PSV)

PSVs haul supplies to drilling rigs and production platforms: cement, drilling mud, methanol, chemicals, and general cargo. Their life is roughly 25% loading in harbour, 40% in transit, and 35% discharging at sea.

- **Typical DP class:** DP1 or DP2.
- **Surveyor's role:** Surveyors don't usually live on PSVs, but you might find yourself aboard for specific tasks -- rig positioning support, short-duration survey jobs, or equipment transit. Don't expect a dedicated survey shack.

### Anchor Handling Tug Supply Vessel (AHTS)

AHTS vessels handle anchors and mooring chains for drilling rigs. They tow rigs into position, deploy and retrieve anchors, and have serious pulling power (high bollard pull) with stern rollers for handling heavy chain.

- **Typical DP class:** DP1 or DP2.
- **Surveyor's role:** Rig moves and anchor handling operations. The survey team provides positioning guidance -- telling the bridge and rig crew where anchors are landing relative to the planned positions. It's high-tempo work with a lot of radio traffic.

### Seismic Survey Vessel

Specialised ships for mapping geological structures beneath the seabed. They tow air gun arrays (the sound source) and long streamers (hydrophone arrays that receive the reflected signals). The propulsion is designed to be low-noise so it doesn't contaminate the acoustic data.

- **Typical DP class:** These vessels don't use DP in the traditional sense -- they maintain heading and speed along pre-planned survey lines.
- **Surveyor's role:** Seismic work is its own discipline. Hydrographic surveyors occasionally cross paths with seismic ops, but the positioning and data acquisition workflows are quite different from ROV-based or multibeam survey work.

---

## Dynamic Positioning: How the Vessel Stays Put

When you're doing survey work over a specific location on the seabed, the vessel can't just drift around. Dynamic Positioning (DP) is the computer-controlled system that maintains the vessel's position and heading using its own thrusters, without anchors.

The DP system takes inputs from position reference sensors (GNSS, acoustic systems, taut wire), environmental sensors (wind, current), and motion sensors (MRU), then calculates the required thruster output to hold station.

### DP Classes

The IMO classifies DP systems into three classes based on redundancy. This matters because the DP class determines what operations the vessel is allowed to perform.

**DP1 (Class 1) -- No redundancy**

A single system with no backup. If one generator, thruster, or control computer fails, the vessel can lose position. Used for low-consequence operations: basic survey work in benign conditions, supply runs where drifting off station isn't dangerous.

**DP2 (Class 2) -- Redundancy for active components**

All critical active components (generators, thrusters, control systems) are duplicated. A single fault in any active system won't cause loss of position. This is the standard for most offshore survey and ROV operations. If divers are in the water, DP2 is the minimum. The catch: failures in passive/static components (cables, pipes running between redundant systems) can still theoretically cause problems if they're not properly protected.

**DP3 (Class 3) -- Full redundancy with physical separation**

Everything is duplicated and physically separated across watertight compartments and fire subdivisions. The vessel can hold position even during flooding or fire in one compartment. Reserved for the highest-risk operations: deepwater drilling, critical subsea installations.

!!! tip "Quick Rule of Thumb"
    If people are in the water (divers), it's DP2 minimum. If it's a critical installation or drilling, expect DP3. For general survey work, DP2 is the norm.

### DP System Components

- **Position reference systems:** GNSS receivers, acoustic systems (USBL/LBL), taut wire, laser-based systems, microwave radar
- **Environmental sensors:** Wind sensors, draught sensors, current sensors
- **Motion sensors:** MRU/VRU for roll, pitch, heave
- **Control computers:** Process all inputs and calculate thruster demands
- **Thrusters:** Azimuth thrusters, tunnel thrusters, main propellers
- **Power generation:** Diesel generators with redundancy matching the DP class

### What This Means for the Surveyor

Here's the part that directly affects your work: the DP system needs position references, and some of those come from you.

- **GNSS feeds:** The DP system uses GNSS receivers for surface positioning. The survey team may manage these or at least need to understand how they're configured.
- **Acoustic positioning:** On many vessels, the USBL system serves double duty -- it's both a survey tool and a DP position reference. When the DP operator asks for an "acoustic reference," they're asking the survey team to provide USBL-derived positions of a seabed transponder so the DP system can hold station relative to a subsea target.
- **Reference quality:** If your GNSS or acoustic feed to the DP drops out or degrades, the bridge will notice. Fast. Keep your position references healthy.

DP assurance is governed by IMCA M 191, which sets out annual DP trial requirements. DP2 and DP3 vessels undergo FMEA (Failure Mode and Effects Analysis) verification to confirm that redundancy works as designed.

---

## Deck Equipment: What's All That Metal?

When you walk out on deck for the first time, there's a lot of heavy steel infrastructure that might not immediately make sense. Here's what you're looking at.

### Moonpool

A vertical opening through the hull, open to the sea below. Think of it as a hole in the bottom of the ship, but on purpose. Equipment deployed through the moonpool is sheltered from wave action on the surface, which means higher operational weather limits compared to deploying over the side.

Common on DSVs, IMR vessels, and dedicated survey vessels. Some vessels have moonpool-mounted transducer frames for multibeam or USBL installations -- a stable, protected mounting point.

### A-Frame

A steel frame shaped like the letter A, usually mounted at the stern. It swings out over the water to deploy and recover equipment: ROVs, towed sonar fish, vibrocorers, and other gear. Typical capacity is in the range of 5 to 25 tonnes depending on the vessel. Often fitted with integrated winches.

### Cranes

Deck cranes handle equipment, containers, and cargo. On a standard IMR vessel, you'll see utility cranes in the 5-15 tonne range. On a CSV, the main crane might be rated for hundreds of tonnes -- that's for lowering heavy subsea structures to the seabed. Heave-compensated cranes allow operations in higher sea states by actively countering vessel motion.

### ROV Launch and Recovery System (LARS)

The LARS is the whole assembly for getting an ROV into and out of the water safely. On most vessels it's built around the A-frame, but some use dedicated gantry systems or deploy through the moonpool.

**Key components:**

- **A-frame or gantry:** The structural element that lifts the load over the side
- **Winch:** Handles the main umbilical cable
- **TMS (Tether Management System):** A cage-like frame that sits between the umbilical and the ROV. It houses a length of ROV tether and manages its payout. The TMS is lowered to working depth on the main umbilical, and the ROV flies free on its tether from there.
- **Cursor / docking head:** A lock-latch mechanism that grabs the TMS at its umbilical attachment point. This is critical during launch and recovery -- once the TMS is hoisted off deck and through the splash zone, the whole assembly swings like a pendulum in rough seas. The cursor system dampens this motion and guides the TMS safely onto the deck.
- **Heave compensation:** Hydraulic or pneumatic systems that absorb vessel heave so the load doesn't slam up and down through the splash zone

!!! warning "Splash Zone"
    The most dangerous phase of ROV operations is transit through the splash zone -- the region at the water's surface where wave energy is highest. This is when the LARS earns its keep. Stay well clear of the deck area during launch and recovery unless you have a specific role.

### Other Deck Hardware

- **Pole mount:** An over-the-side pole for mounting transducers (multibeam, USBL, SVP). Quick to deploy, commonly used on vessels of opportunity.
- **Winches:** Various types for towed equipment, CTD/SVP casts, and umbilical handling.
- **Container slots:** Standardised positions for 20ft containers. Survey spreads are often housed in containerised workshops and offices that bolt onto the deck.
- **Deck space:** Large, unobstructed areas for staging equipment. On a CSV, the back deck can be enormous.

---

## Marine Communications: Getting Data Off the Vessel

You'll need to send daily reports, transfer processed data, receive software updates, and join the occasional video call with the office. Here's how connectivity works offshore.

### VSAT (Very Small Aperture Terminal)

VSAT is the primary broadband system on most offshore vessels. A stabilised dish antenna (75cm to 2.4m diameter) sits inside a fibreglass radome on the top deck, tracking geostationary satellites while the vessel moves.

**System layout:**

- **Above Deck Unit (ADU):** The antenna in its radome
- **Below Deck Unit (BDU):** Modem, router, and antenna control unit
- **BUC (Block Upconverter):** Converts signal frequencies for uplink. Higher wattage (8W, 16W, 25W) means faster upload

**Frequency bands -- what actually matters:**

| Band | Frequency | Characteristics |
|------|-----------|-----------------|
| L-Band | 1-2 GHz | Used by Inmarsat and Iridium. Narrow bandwidth, simple equipment. Voice and basic data. |
| C-Band | 4-8 GHz | Excellent signal quality, handles rain well. Can suffer interference within 300km of coast from terrestrial microwave. Larger antennas needed. |
| Ku-Band | 12-18 GHz | Most common for vessel VSAT. Good bandwidth at reasonable cost. Degrades in heavy rain (rain fade). |
| Ka-Band | 26.5-40 GHz | High bandwidth -- up to 50 Mbps. Inmarsat GlobalXpress operates here. Also susceptible to rain fade. |

**Speeds and latency:**

- Download: Typically 4-20 Mbps depending on the contract and band. Minimum 8 Mbps recommended for HD video.
- Upload: Depends on BUC wattage.
- Latency: 500-750ms round trip. Geostationary satellites orbit at 36,000km, so the signal takes ~250ms each way, plus 300-500ms of protocol overhead. This is noticeable on video calls and makes remote desktop sessions sluggish.

### Inmarsat Fleet Broadband

L-Band based. Lower bandwidth than VSAT but simpler and more reliable setup. Good for voice calls and basic data. Not the right tool for transferring large survey datasets.

### Iridium

A constellation of 66 LEO (Low Earth Orbit) satellites providing truly global coverage, including polar regions. Lower bandwidth but much lower latency (~50ms) since the satellites are closer. Often serves as the backup communication system -- if everything else goes down, Iridium still works.

### Starlink

The new player. SpaceX's LEO constellation offers high speed and low latency, and it's increasingly showing up on offshore vessels as a supplement to traditional VSAT. Modern vessels are starting to run hybrid setups -- VSAT plus cellular plus Starlink -- switching between them for optimal coverage and cost.

### What This Means for Survey Data

- **Daily reports and emails:** No problem on any system.
- **Processed survey data:** Manageable over VSAT if the files aren't enormous.
- **Raw multibeam datasets:** Often too large to transfer over satellite. These still get shipped on hard drives in many cases.
- **Remote support:** Onshore survey managers can connect via remote desktop, but the latency on VSAT makes it painful. Starlink is changing this.
- **Software updates and licenses:** Plan these for low-traffic hours. A large update can eat your bandwidth allocation.

!!! tip "Bandwidth Etiquette"
    On most vessels, crew internet is shared and limited. Streaming video, large personal downloads, or leaving cloud sync running can eat into the bandwidth the survey team needs for data transfer. Be mindful, especially on vessels with CIR (Committed Information Rate) contracts where going over the guaranteed minimum means slower speeds for everyone.

---

## Sources

**Dynamic Positioning:**

- [Seavium - What is DP: A Complete Guide](https://www.seavium.com/resources/what-is-dp-(dynamic-positioning)-on-a-ship-a-complete-guide)
- [Nautical Institute - What is Dynamic Positioning](https://www.nautinst.org/resources-page/what-is-dynamic-positioning.html)
- [MarinePublic - DP1 vs DP2 vs DP3](https://www.marinepublic.com/blogs/offshore/621256-3-classes-of-dynamic-positioning-dp1-dp2-dp3-systems)
- [DNV - Dynamic Positioning](https://www.dnv.com/services/dynamic-positioning-2952/)

**Vessel Types:**

- [Wartsila Encyclopedia - Offshore Support Vessels](https://www.wartsila.com/encyclopedia/term/offshore-support-vessels-(osvs))
- [GSP Offshore - DSV & MPSV](https://www.gspoffshore.com/the-fleet/vessels/dsv-mpsv)
- [Clarksons - What Are Subsea Vessels](https://www.clarksons.com/home/glossary/s/what-are-subsea-vessels/)

**Deck Equipment and LARS:**

- [Marine Technology News - Understanding ROV LARS Part 1](https://www.marinetechnologynews.com/blogs/understanding-rov-launch-and-recovery-systems-e28093-part-1-700531)
- [Kongsberg - Launch and Recovery Systems for ROV](https://www.kongsberg.com/maritime/products/deck-machinery-and-cranes/deck-machinery/subsea-construction-vessels/launch-and-recovery-systems-for-rov-lars/)
- [Aspect Surveys - Survey Fleet](https://www.aspectsurveys.com/survey-fleet/)

**Marine Communications:**

- [OceanWeb - A Guide to Maritime VSAT](https://www.oceanweb.com/a-guide-to-maritime-vsat/)
- [GTMaritime - Satellite Systems and Networks Explained](https://www.gtmaritime.com/resources/satellite-systems-and-networks-explained/)
- [DROAM - Maritime VSAT](https://droam.com/blog/maritime-vsat/)
