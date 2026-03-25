# Style Guide — FleetFlow: Logistics Dispatch & Driver Field Ops

## Visual Identity

**Design Language:** Operational command center. Functional, legible, action-oriented. Clean but robust — think Uber Eats for Business meets a control room dashboard. Light-mode-first (field use in sunlight) with a dark mode dashboard option.

**Mood Board Keywords:** Real-time maps, status-color urgency, bold sans-serif numbers, high-contrast cards, warehouse orange, navy command

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|---|---|---|
| `brand-orange` | `#F97316` | Primary CTA, active state, brand accents |
| `brand-navy` | `#0F2238` | Dashboard sidebar, map overlays, headings |
| `bg-light` | `#F9FAFB` | App background (light mode) |
| `bg-dark` | `#111827` | Dark mode dashboard background |
| `bg-surface` | `#1F2937` | Dark mode card surface |

### Job Status Colors
| Status | Background | Text | Usage |
|---|---|---|---|
| Pending | `#FEF9C3` | `#854D0E` | Not yet assigned or started |
| Assigned | `#DBEAFE` | `#1D4ED8` | Driver assigned, not started |
| In Transit | `#D1FAE5` | `#065F46` | Driver en route |
| Delivered | `#DCFCE7` | `#166534` | Completed successfully |
| Failed | `#FEE2E2` | `#991B1B` | Could not complete |
| Unassigned | `#F3F4F6` | `#374151` | Needs dispatcher action |

### Map Pin Colors
- Driver (available): `#10B981` green dot
- Driver (on job): `#F97316` orange
- Driver (off duty): `#9CA3AF` grey
- Job (pending): `#FBBF24` yellow pin
- Job (completed): `#6EE7B7` light green pin
- Depot / HQ: `#1D4ED8` blue square

---

## Typography

### Font Stack
```css
/* All UI */
font-family: 'Inter', 'DM Sans', system-ui, sans-serif;

/* Driver numbers, ETAs, job IDs */
font-family: 'IBM Plex Mono', 'Courier New', monospace;
```

### Type Scale
| Role | Class | Notes |
|---|---|---|
| Hero H1 | `text-5xl font-black` | Landing page only, tight tracking |
| Dashboard H2 | `text-2xl font-bold` | Section titles |
| Card Title | `text-base font-semibold` | Job cards, driver cards |
| Body | `text-sm` | Default content |
| Caption | `text-xs text-gray-500` | Timestamps, metadata |
| Job ID | `text-xs font-mono font-bold text-orange-600` | Always monospace |
| KPI Number | `text-3xl font-bold font-mono` | Dashboard stat numbers |

---

## Spacing & Layout

### Dashboard
- **Layout:** Left sidebar (240px) + top bar (60px) + main area
- **Map panel:** Takes 60% of dispatch screen width
- **Job queue panel:** 40% right side, scrollable
- **Card padding:** `p-4` (compact — more info per screen)
- **Section gap:** `gap-4`

### Mobile (Driver App)
- **Bottom nav:** 5 tabs — Jobs, Route, Earnings, Notifications, Profile
- **Card margin:** `mx-4 my-2`
- **Touch targets:** Minimum `h-14` (56px) for all interactive elements
- **Font size minimum:** `text-base` (16px) — never smaller on mobile
- **Action buttons:** Full-width `w-full`, `h-14`, `rounded-2xl`

---

## Component Styles

### Job Cards (web)
```
bg-white border-l-4 border-[status-color]
rounded-lg shadow-sm p-4
flex justify-between items-start
hover:shadow-md cursor-pointer
```
Left border color = job status. This is the primary status signal.

### Job Cards (mobile)
```
bg-white rounded-2xl shadow-md mx-4 my-2 p-5
border-l-[6px] border-[status-color]
Active state: ring-2 ring-orange-400
```

### Driver Avatar Cards (web)
```
flex items-center gap-3 p-3 rounded-xl
bg-gray-50 hover:bg-orange-50 border border-transparent hover:border-orange-200
```
- Status indicator: colored dot (12px) top-right of avatar
- Driver name: `font-semibold text-sm`
- Status text: `text-xs text-gray-500`

### Map Overlay Panels
- Floating cards on map: `bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3`
- Pin tooltips: dark bg `bg-gray-900 text-white text-xs rounded-lg px-2 py-1`

### Action Buttons (driver mobile — large)
```
Primary:   bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-2xl w-full
Secondary: border-2 border-orange-500 text-orange-600 font-bold h-14 rounded-2xl w-full
Danger:    bg-red-500 text-white h-14 rounded-2xl w-full
```

### Status Badge Pill
```
px-2.5 py-0.5 rounded-full text-xs font-medium
[uses status color table above]
```

### Signature Pad Screen (mobile)
```
Full screen black background #000000
Canvas: w-full h-[60vh] bg-black
Stroke: white, 3px width
Bottom bar: bg-black pt-4 pb-safe
Buttons: "Clear" (outline white) + "Confirm" (filled orange)
Instructions: text-white text-sm opacity-70 text-center mb-4
```

---

## Landing Page Specific

### Hero
- Background: dark navy `#0F2238` with subtle diagonal line pattern
- Left side: headline + sub + dual CTA buttons
- Right side: device mockup composite (laptop showing dispatch map + phone showing driver app)
- Stats bar below hero: "10,000+ drivers" / "98% on-time rate" / "40% fewer late deliveries"

### How It Works (3 steps)
- Numbered circles (`1`, `2`, `3`) in orange
- Icons: clipboard (add job) → truck (assign) → checkmark (delivered)
- Connected by dashed line between steps

### ROI Calculator
- Orange-accented input sliders
- Live updating result text: "Save **142 hours/month**"
- "Book a Demo to confirm your savings" CTA beneath

### Pricing Cards
- Middle card: highlighted with `border-orange-500 shadow-orange-100 shadow-lg`
- "Most Popular" badge in orange pill

---

## Iconography

- **Library:** Lucide Icons (sharp, consistent stroke weight)
- **Key icons:** `truck`, `map-pin`, `package`, `clipboard-check`, `camera`, `pen-tool` (signature), `phone`, `clock`
- **Sizes:** `w-5 h-5` inline, `w-6 h-6` nav, `w-10 h-10` feature cards
- **Color:** Match parent context — orange for active actions, gray for inactive

---

## Animation & Interaction

| Element | Animation |
|---|---|
| Map pins | Bounce-in on appearance (200ms) |
| Job status change | Flash background color → settle (300ms) |
| In Transit driver | Subtle pulse ring on map pin |
| ETA countdown | Number flip animation (CSS counter) |
| POD capture success | Green checkmark scale-in + haptic (mobile) |
| Page transitions | Slide-up (mobile) / fade (web) |
| Unassigned job badge | Red pulse on dispatch center sidebar icon |

---

## Accessibility

- All status colors supplemented with text labels — never color-only
- Driver app: minimum touch targets `48×48px`
- High contrast mode: all text at minimum 4.5:1 ratio
- Voice-over friendly: all job cards have descriptive ARIA labels
- Map: all driver/job info also available in list view as alternative
