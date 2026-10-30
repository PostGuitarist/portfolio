---
title: "Privacy Policy"
description: "What TrueLean accesses, where your ride data goes, and the optional usage data you control."
lastUpdated: 2026-09-03
order: 1
---

TrueLean is a motorcycle lean-angle and ride-telemetry app published by
**Zaden Connell** ("Zaden Connell," "we," "us"). This policy explains what the app
accesses, how it's used, and where it goes. In short: **we never receive your
ride data.** It stays on your device, and - if you leave iCloud sync on - in your
own private iCloud, which only you can access. Opening a finished ride sends that
ride's first coordinate to Apple to name the place it started from and look up
the weather while it ran - see "Place names and weather" below. The one thing we
can receive is anonymous counts of how the app is used, and only if you switch
that on yourself - see "Optional usage data" below.

## Information the app accesses

- **Location (GPS).** Used to record your speed, distance, and ride route, and
  to keep recording while the app is in the background during a ride. Location is
  used only while you are running or recording a ride.
- **Motion sensors (gyroscope, accelerometer).** Used to measure your
  motorcycle's lean angle and g-forces. Motion data is processed on your device
  in real time.
- **Place name and weather (after a ride, not during one).** When you open a
  finished ride, the app looks up where it started and how warm it was. That is
  the only time TrueLean sends anything about a ride off your device - see
  "Place names and weather" below.

## How your data is stored

- Rides - including route, speed, lean, and g-force data - are stored **locally
  on your device**.
- **iCloud sync (on by default, optional).** When enabled, your rides are backed
  up to and synced through **your own private iCloud** so they survive a lost or
  replaced phone and appear on your other devices. This uses Apple's iCloud under
  your Apple Account and is governed by Apple's privacy policy; Zaden Connell operates
  no servers and cannot see this data. You can turn sync off in Settings → iCloud
  Sync, after which rides stay only on the device.
- Optional raw sensor logs (off by default) are saved as files on your device,
  are not synced to iCloud, and are never uploaded anywhere unless you choose to
  export and share them.

## What we collect

**Your ride data, never.** TrueLean does not transmit your location, motion,
routes, speeds, or ride records to Zaden Connell or to anyone else. There are no
accounts, no advertising, no data brokers, and no third-party analytics SDKs of
any kind.

**Anonymous usage data, only if you turn it on.** TrueLean has an optional
setting, **off by default**, that shares counts of how the app is used so it can
be improved. You are asked about it exactly once - after your first completed
ride, from its ride summary, and never if you have already answered - on a screen
where declining is one tap and costs you nothing. **TrueLean never asks again.**
You can change your mind at any time in Settings → Data & Privacy → Help Improve
TrueLean, where you can also read every record before and after it is sent.

If you enable iCloud sync, your rides go only to your own private iCloud (see
"How your data is stored") - never to us.

## Optional usage data

This section describes the optional setting only. **If you have not turned it
on, nothing in this section happens** and no usage data is created, stored, or
sent.

**What is included.** Counts and wide brackets, never values:

- How many times a screen, control, or export was used.
- Whether mount calibration was started and whether it succeeded, whether GPS
  dropped out during a ride, and whether the lean model loaded - the sensor
  pipeline's own health.
- The rough shape of rides in brackets - for example "a ride between 20 and
  50 km" with "a lean between 25 and 35 degrees" - never an actual distance,
  speed, or lean angle.
- Whether the TrueLean Pro screen was opened and whether a purchase followed.
- Your app version, your iOS major version, your iPhone model, and which
  settings you have switched on.
- Performance measurements from Apple's MetricKit: launch time, freeze time,
  foreground time, CPU time, and how long location services ran. Crash and hang
  reports are **not** collected - those go to Apple under the separate choice
  you made in your iOS settings.

**What is never included.** No name, email, or account. No location, route, map
data, or coordinate of any kind. No ride dates, times, durations, distances,
speeds, or lean angles as actual values. No bike make, model, or nickname. No
raw sensor logs and nothing you export. No advertising identifier, no device
identifier we create, and no cross-app or cross-site tracking.

**How often, and where it goes.** Counts accumulate on your device for a week
at a time and are sent, if at all, when the app is in the background. They go to
a database in TrueLean's own Apple CloudKit container, which only Zaden Connell
can read. Apple stamps each record with an anonymous identifier that is specific
to this app; it is generated by Apple, is different for every app, and cannot be
used to identify you or resolved to your Apple Account, your name, or your email.
Because that identifier is stable, this data is best described as pseudonymous
rather than perfectly anonymous, and we would rather say so than round it off.
Records are kept for at most 13 months.

**How to turn it off and erase it.** Settings → Data & Privacy → Help Improve
TrueLean. Turning the switch off deletes every record already sent, as well as
everything held on your device - you do not have to ask us, and there is nothing
to wait for. The same screen has a Delete My Usage Data button, and shows you the
records themselves so you can check.

## Tracking

TrueLean does not track you across apps or websites and does not share data with
data brokers. Nothing described above is used for advertising, is sold, or is
shared with anyone.

## Sharing and exporting

If you choose to export a ride (GPX/CSV) or share a raw sensor log, that data
leaves your device only through the destination you pick (for example, AirDrop,
Messages, or a file you save). That sharing is under your control, and the
recipient's handling of the data is outside Zaden Connell's control.

## Place names and weather

When you open a finished ride, TrueLean fills in two things it never measured:
the name of the place the ride started from, and the air temperature while it
ran.

- **What is sent, and to whom.** That ride's **first GPS coordinate** goes to
  Apple's geocoding service, and the same coordinate together with the ride's
  start and end times goes to Apple's weather service. Nothing else about the
  ride is sent - not its route, its speeds, or its lean angles - and nothing
  goes to Zaden Connell, who operates no servers and never sees the request.
- **Once per ride.** The answer is stored on your device with the ride and read
  from there afterwards, so opening the same ride again sends nothing.
- **Apple's terms govern it.** Both are Apple services, used under Apple's
  privacy policy. Weather data is provided by **Apple Weather**; the ride screen
  links to Apple's list of the other sources behind it, at
  <https://developer.apple.com/weatherkit/data-source-attribution/>.

## Apple Health

TrueLean can save a finished ride to Apple Health as a workout, and only ever
**writes** to Health - it requests no permission to read your health data and
never does.

- **Off by default.** Nothing reaches Health unless you save a ride from its
  menu, or turn on Settings → Data & Privacy → Save Rides to Apple Health. You
  can revoke
  access at any time in the iOS Settings app under Health → Data Access &
  Devices.
- **What a saved workout contains:** the ride's start and end time, its GPS
  route, and TrueLean's own ride details (maximum lean angle and direction,
  distance traveled).
- **What it deliberately doesn't contain:** no distance or energy samples.
  Riding a motorcycle isn't the rider's own physical effort, so TrueLean does
  not add miles or calories to your fitness totals or activity rings.
- Workouts saved this way live in **your** Health store on your device, under
  Apple's privacy terms. Zaden Connell never receives them.

## Children's privacy

TrueLean is not directed to children and does not knowingly collect personal
information from anyone. Because the app collects nothing and creates no
accounts, it does not knowingly collect data from children under 13 (or the
equivalent minimum age in your jurisdiction).

## Your rights and control over your data

Because Zaden Connell never receives your data, you have full control over it:

- Delete any ride, or all rides, from within the app (Settings → Data & Privacy
  → Delete All Rides). With iCloud sync on, deletions remove the rides from
  your iCloud too.
- Turn iCloud sync off at any time (Settings → iCloud Sync) to keep rides only
  on the device.
- Raw sensor logs can be deleted individually in the app.
- Turn optional usage sharing off, or delete everything it has ever sent, in
  Settings → Data & Privacy → Help Improve TrueLean.
- Deleting the app removes its on-device data; rides you synced remain in your
  iCloud until you delete them or sign out of iCloud.

Depending on where you live (for example, under the GDPR or the CCPA/CPRA), you
may have rights to access, correct, or delete personal data a company holds about
you. If you have never turned on usage sharing, Zaden Connell holds **no** data
about you at all. If you have, the usage records described above are the only
data we hold, and the app itself gives you access to them and a one-tap way to
erase them - no request, no waiting period, and no way for us to refuse.

## Changes to this policy

If this policy changes, the updated version will be posted here with a new "Last
updated" date.

## Contact

Questions about this policy or your data:

Zaden Connell - support@truelean.app
