---
title: "Remote Surveying"
tags:
  - handbook
  - beginner
  - remote-operations
  - virtual-machines
  - starlink
---

# Chapter 10: Remote Surveying

## The Rise of the Remote Surveyor

Running an offshore survey from an onshore office -- or even your living room -- is no longer a novelty. It's becoming part of mainstream operations. Reliable high-speed data links, secure cloud storage, and advanced remote-access software now allow survey teams to monitor and control aspects of a job without being physically aboard the vessel.

### What We Gain

- **Cost & Efficiency:** Having part of the team onshore lowers travel expenses and reduces downtime. If you can troubleshoot equipment or process data in near-real time from a land-based office, you cut out the wait for the next crew change or the need to send additional specialists offshore.
- **24/7 Collaboration:** Remote staff often work in different time zones, keeping data processing going around the clock. When the offshore crew finishes a shift, the onshore team picks up where they left off.
- **Safer Conditions:** Fewer people physically on the vessel means reduced exposure to harsh weather and potential safety hazards.
- **Environmental Benefits:** Fewer crew flights and boat transfers means a lower carbon footprint. Remote operations reduce the need for helicopter or vessel-based personnel transfers, aligning with the industry's growing focus on sustainability.

### What We Lose

- **Tangible Vessel Experience:** Part of the traditional offshore role is feeling the motion of the vessel and experiencing the environment firsthand. Onshore, you can't judge sea conditions by stepping onto the deck, and you lose the spontaneous face-to-face conversations that often lead to creative problem-solving.
- **Connectivity Dependency:** If the satellite link goes down, so does your ability to monitor or assist. Redundancy matters, but not all vessels have backup systems in place.

### Still a Team Sport

Remote surveying doesn't replace the offshore crew -- it complements them. Critical decisions (like adjusting the survey plan due to unexpected weather) still come from the vessel's leadership, often in consultation with onshore leads. Remote staff handle tasks like data processing, troubleshooting sensor issues, and offering analytical support in near real-time. This division of labor saves costs and frees offshore personnel to focus on immediate operational needs.

As a trainee, working from shore might feel counterintuitive. But it's just another way of collaborating. The vessel crew and the onshore office are part of the same team, spread across different spaces and time zones. And offshore jobs aren't vanishing anytime soon -- remote surveying is adding flexibility to how the work gets done, not replacing the vessel-based role.

## Virtual Machines & Network Drives: Setting Up Your Remote Office

A Remote Operations Center (ROC) is where it comes together onshore: large monitors displaying live vessel positions, sensor readouts, and real-time communications, all without being on the ship. Virtual machines (VMs) and network drives make this possible. You can run specialized survey applications on powerful remote servers while cloud storage keeps data backed up and accessible globally.

### What a Remote Operations Center Might Look Like

- **Centralized Monitoring:** Large screens (or a video wall) showing vessel status, ROV camera feeds, and sensor dashboards in real time.
- **Team Collaboration:** Operators, data processors, and supervisors seated side-by-side or connected through secure networks, sharing files and communicating instantly.
- **High-Speed Connectivity:** Dedicated fiber lines or satellite uplinks ensuring low-latency access to vessel systems.

### Your Role as a Trainee

- **Learning Remote Platforms:** You might begin by learning how to log into a VM to access survey software like Qinsy or SIS. This involves understanding VPNs, secure protocols, and user credentials.
- **Managing Data:** You'll likely help organize or retrieve datasets from network drives, making sure files are labeled correctly and stored in the right project folders.
- **Following Guidelines:** Senior IT staff decide which cloud provider to use or how robust a VM setup needs to be. Your job is to follow security protocols and ask questions if something seems off.
- **Observing Real-Time Ops:** If your company has a dedicated ROC, you might sit in during a live operation. Watching the onshore team coordinate with offshore personnel teaches you a lot about troubleshooting and maintaining smooth communication.

## Secure File Transfers and Cloud Services

Offshore teams frequently use VMs hosted in the cloud to run demanding survey software. This lets you log in from a remote location while leveraging powerful server hardware. Large data files (bathymetric grids, ROV video) may be stored in cloud drives for redundancy and collaboration. When the vessel has a decent internet connection, you can upload or download the latest survey data without clogging local storage.

### Bandwidth and Satellite Links

Historically, transferring large files offshore meant dealing with painfully slow satellite links. Newer solutions like Starlink bring high-speed, low-latency internet to remote vessels. While not yet universal, Starlink and similar technologies drastically reduce transfer times, enabling near real-time processing and troubleshooting from onshore. That said, bandwidth can still fluctuate depending on location and satellite coverage, so being mindful of data sizes and transfer schedules remains important.

As you progress, you'll learn to manage file transfers effectively and securely. You might coordinate with IT staff to schedule large uploads during off-peak hours, or become the person responsible for organizing folder structures and naming conventions on the cloud server. Handling data responsibly shows attention to detail -- something managers notice when considering who's ready for more responsibility.

## Communication Tools & Virtual Collaboration

Modern collaboration tools (video conferencing, instant messaging, shared dashboards) let distributed teams work together seamlessly. The key difference to understand is where different roles typically sit:

- **Online surveyors** managing real-time operations are more likely to be in a ROC or physically offshore. This setup ensures they're connected to the vessel's live data streams and can communicate immediately with the Party Chief or ROV team.
- **Offline processors** working on data after acquisition have more flexibility and may work from a dedicated office or, in some cases, from home for tasks like cleaning point clouds or generating preliminary maps.

Regardless of where you're sitting, clear and proactive communication remains crucial. If something feels off, ask questions. If you need help, say so. The best way to avoid misunderstandings -- onshore or offshore -- is to speak up early.

---

*Next up: [IT Basics](it-basics.md) - computers, networks, and cybersecurity for the offshore professional.*
