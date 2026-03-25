# PRD — FleetFlow: Logistics Dispatch & Driver Field Ops

**Target Market:** US logistics SMBs, Australian tradies & delivery companies, last-mile operators
**Portfolio Purpose:** Dribbble/Behance showcase — frontend only, dummy data
**Tech Stack:** React + Tailwind CSS
**Regions:** North America (primary), Oceania/Australia (secondary)

---

## 1. Product Overview

FleetFlow is a logistics dispatch and field operations platform. Dispatchers assign jobs to drivers in real time, drivers receive mobile job cards, capture proof-of-delivery, and managers track fleet performance from a central dashboard. The narrative is "reduce late deliveries and eliminate paper PODs."

**Core Value Props:**
- Live driver location tracking on map
- Digital proof-of-delivery (photo + signature capture)
- Automated job assignment based on proximity
- Route optimization and ETA calculation
- End-of-day performance and delivery reports

---

## 2. Landing Page

**Goal:** Convert logistics SMB owners and operations managers
**Tone:** Operational, no-nonsense, ROI-focused
**Key Sections:**

| Section | Description |
|---|---|
| Hero | "Deliver More. Stress Less." headline + dispatch map screenshot + "Start Free Trial" CTA |
| Pain agitation | "Still running dispatch on spreadsheets and WhatsApp?" — 3 pain bullets |
| Feature highlights | 4 icons: Live Tracking, Digital POD, Route Optimization, Reporting |
| How it works | 3-step visual: Add Jobs → Assign Drivers → Track & Confirm |
| App mockup | Phone showing the driver app + dashboard on desktop side-by-side |
| ROI calculator | Simple slider: "X drivers × Y deliveries/day = Z hours saved/month" |
| Testimonials | 2 quotes from fictional ops managers |
| Pricing | 3 tiers: Starter ($79/mo), Pro ($249/mo), Fleet (custom) |
| Footer | Links, "Reduce Late Deliveries by 40%" social proof bar |

---

## 3. Web App / Dashboard — 10 Pages

### 3.1 Dispatch Command Center
- **Purpose:** Real-time overview of all active jobs and driver locations
- **Key elements:** Map panel (left 60%) with driver pins and job markers, jobs queue panel (right 40%) with cards showing status, "Assign Job" drag-to-driver or dropdown, live ETA countdown per job, color-coded status (Pending / In Transit / Delivered / Failed)

### 3.2 Jobs List
- **Purpose:** Full list of all jobs (today and historical)
- **Key elements:** Table with: Job ID, customer, pickup address, delivery address, driver, status, ETA, created time. Filters: date range, status, driver, zone. Bulk actions: reassign, cancel, export

### 3.3 Create / Edit Job
- **Purpose:** Create a new delivery or field job
- **Key elements:** Form — customer name, pickup address (autocomplete), delivery address, job type (delivery / pickup / service), priority (normal / urgent), notes, attach file, assign driver dropdown, schedule time picker

### 3.4 Driver Management
- **Purpose:** Manage driver profiles and current availability
- **Key elements:** Driver cards grid (avatar, name, vehicle, status badge: Active / Off-Duty / On Job), current job assignment, today's stats (jobs completed, km driven, avg rating), "Add Driver" button

### 3.5 Driver Detail
- **Purpose:** Single driver performance view
- **Key elements:** Profile header (photo, name, rating, vehicle plate), today's job timeline, weekly completion rate chart, POD success rate, late deliveries count, contact info

### 3.6 Proof of Delivery (POD) Gallery
- **Purpose:** Review all captured PODs
- **Key elements:** Grid of POD cards (photo thumbnail, job ID, driver, timestamp, recipient name), click to expand full-screen, filter by driver / date / zone, export as PDF report

### 3.7 Route Planner
- **Purpose:** Plan and optimize multi-stop routes
- **Key elements:** Map with waypoints, drag-to-reorder stop list, optimize button, estimated total distance + time display, assign to driver CTA, print route sheet option

### 3.8 Reports & Analytics
- **Purpose:** Performance insights for ops managers
- **Key elements:** KPI row (deliveries today, on-time %, avg delivery time, failed deliveries), line chart (deliveries over time), heatmap of delivery zones, driver leaderboard table, export PDF/CSV

### 3.9 Customer Portal Settings
- **Purpose:** Configure tracking links and customer notifications
- **Key elements:** Tracking page branding (logo, color), SMS/email notification toggle (dispatched, out for delivery, delivered), custom message templates, notification log

### 3.10 Settings — Zones & SLAs
- **Purpose:** Define delivery zones and time SLAs
- **Key elements:** Zone map editor (draw polygons), zone list table (name, SLA hours, surcharge), SLA breach alert toggle, default assignment rules per zone

---

## 4. Mobile App — 20 Screens (Driver-facing)

| # | Screen | Description |
|---|---|---|
| 1 | Splash | FleetFlow logo + animated truck icon |
| 2 | Login | Driver ID + PIN login (simple, glove-friendly) |
| 3 | Home / Today's Jobs | List of assigned jobs for today with status pills |
| 4 | Job Card Detail | Full job info: addresses, customer notes, map mini-view, actions |
| 5 | Navigation Launch | "Open in Maps" + estimated drive time + Start Job button |
| 6 | En Route Screen | Active delivery screen: address, ETA, stop map, "Arrived" button |
| 7 | POD Capture — Photo | Camera view for capturing delivery photo |
| 8 | POD Capture — Signature | Signature pad screen (finger draw) |
| 9 | Delivery Confirmation | Summary: photo + signature + timestamp → "Confirm Delivery" |
| 10 | Failed Delivery | Reason selector (no answer, wrong address, refused) + note + photo |
| 11 | Job Complete Screen | Success state: confetti-lite animation, next job prompt |
| 12 | Multi-Stop Route View | All stops in sequence with progress indicators |
| 13 | Earnings Summary | Today's jobs done, estimated pay, hours worked |
| 14 | Notifications | Job assignments, dispatcher messages, schedule updates |
| 15 | Chat with Dispatcher | Simple in-app message thread |
| 16 | Vehicle Check-In | Pre-shift vehicle inspection checklist with photo capture |
| 17 | Break / Off-Duty Toggle | Status update screen with reason selector |
| 18 | Job History | Past 7 days of completed jobs with performance mini-stats |
| 19 | Help & Support | FAQ accordion + "Call Dispatcher" button |
| 20 | Profile & Settings | Name, vehicle, notification prefs, language, logout |

---

## 5. Design Constraints

- All data is dummy/fictional — no real API calls
- React + Tailwind CSS, component-based
- Mobile screens at 390×844px (iPhone 14 viewport)
- Dashboard at 1440px wide desktop
- Map component: use static placeholder image or Leaflet with dummy markers
- Offline-mode indicator shown on driver mobile screens
