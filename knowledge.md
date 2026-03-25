# Knowledge Base — FleetFlow: Logistics Dispatch & Driver Field Ops

## Domain Context

### The Problem Space
Last-mile logistics companies — couriers, field service operators, tradies, delivery SMBs — lose money and customers through inefficient dispatch, missed deliveries, and paper-based proof-of-delivery processes. The average dispatch team still coordinates via WhatsApp group chats and spreadsheets, leading to double-booking, lost PODs, and no visibility for management.

### Who Uses This Product

**Dispatcher (web dashboard)**
- Coordinates 5–50 drivers from a desk
- Needs instant job creation, driver visibility, and exception handling
- Pain: Can't see where drivers are without calling them every 30 minutes

**Field Driver (mobile app)**
- Receives and executes delivery/service jobs
- Needs simple UI usable with gloves, bright sunlight, one hand
- Pain: Printed run sheets get lost, customer signatures on paper disappear

**Operations Manager (web dashboard)**
- Reviews end-of-day performance, handles customer complaints
- Needs delivery success rates, late delivery analysis, driver ratings
- Pain: No centralised data — everything is in driver WhatsApp or Excel

**Business Owner (web dashboard)**
- Wants cost-per-delivery, zone profitability, driver efficiency
- Pain: Can't justify headcount without data

---

## Core Concepts & Terminology

| Term | Definition |
|---|---|
| **Job** | A single delivery, pickup, or field service task |
| **Run** | An ordered sequence of jobs assigned to one driver |
| **POD** | Proof of Delivery — photo + recipient signature at drop-off |
| **Dispatch** | The act of assigning and sending a driver to a job |
| **ETA** | Estimated time of arrival at destination |
| **Zone** | A geographic area used for routing and pricing |
| **SLA** | Service Level Agreement — the maximum allowed delivery time |
| **Failed delivery** | A delivery attempt that couldn't be completed |
| **Last-mile** | The final leg of delivery from depot to end customer |
| **Geofence** | A virtual boundary that triggers an event (e.g., "arrived") |
| **Telematics** | Vehicle tracking and performance data |

---

## Dummy Data Reference

### Fictional Company
**FleetFlow Logistics** — shown in branding, emails, and dashboard headers

### Sample Driver Roster
| Driver | Vehicle | Status | Jobs Today | Rating |
|---|---|---|---|---|
| Marcus Webb | Van (VIC-4821) | On Job | 7 / 12 | 4.8 |
| Priya Nair | Bike (courier) | Active | 11 / 11 | 5.0 |
| Jake Torrance | Truck (NSW-7734) | Off-Duty | 0 | 4.5 |
| Anika Patel | Van (QLD-2290) | On Job | 5 / 9 | 4.7 |
| Liam O'Brien | Car | Available | 8 / 8 | 4.9 |

### Sample Jobs (today)
| Job ID | Customer | Status | Zone | Driver | ETA |
|---|---|---|---|---|---|
| #JB-4401 | Metro Foods Co. | In Transit | CBD | Marcus Webb | 14:22 |
| #JB-4402 | Clearwater Pharma | Delivered | North | Priya Nair | — |
| #JB-4403 | Summit Hardware | Pending | West | Unassigned | — |
| #JB-4404 | BlueSky Retail | Failed | East | Jake Torrance | — |
| #JB-4405 | Harlow & Co. | Delivered | CBD | Anika Patel | — |

### KPI Snapshots (dashboard)
- Deliveries today: 47 / 63 scheduled
- On-time rate: 88.3%
- Failed deliveries: 4
- Active drivers: 8 of 12
- Avg delivery time: 34 min

### Zones (fictional city layout)
- CBD / Inner City
- North Suburbs
- East Corridor
- West Industrial
- Airport Precinct

---

## Regulatory & Compliance Notes (AU/US context)
- **Australia:** Heavy vehicle driver fatigue management laws — drivers must log breaks
- **US:** FMCSA hours-of-service rules for commercial vehicle operators
- **Both:** Privacy considerations for customer address data
- **POD:** Electronic signatures are legally valid in both US and AU under e-signature laws

---

## Industry Benchmarks (for copy/marketing)
- Average paper POD dispute rate: 12–18%
- Digital POD dispute rate: <1%
- Dispatcher-to-driver ratio (manual): 1:8
- Dispatcher-to-driver ratio (with software): 1:25
- "40% reduction in late deliveries" — achievable benchmark for marketing claims
- Failed delivery re-attempt cost: $12–$18 per attempt (AU/US average)

---

## Competitive Landscape Context
Real competitors: Onfleet, Routific, Circuit for Teams, OptimoRoute, Tookan. FleetFlow is positioned as simpler than Onfleet for SMBs, more affordable than Routific, and with a better mobile driver experience than legacy dispatch software.

---

## UI/UX Notes for This Domain

### Driver app must be:
- Large tap targets (minimum 48px) — drivers use with gloves
- High contrast — readability in direct sunlight (outdoor use)
- Minimal reading required — icon + action label pattern
- Offline-capable UX indicators — show cached data state clearly
- One-tap critical actions — "Start Job", "Arrived", "Confirm Delivery"

### Dispatcher web must be:
- Map-centric — the map is the primary interface, list is secondary
- Real-time feeling — even with dummy data, use "last updated X sec ago" labels
- Exception-first design — surface unassigned jobs and late jobs prominently
- Color coding must be immediate — no hunting for status

### Signature pad (mobile screen 8):
- Full-screen black canvas
- White stroke
- "Clear" and "Confirm" buttons at bottom
- Instruction: "Customer: please sign above"
