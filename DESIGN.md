---
name: Regal Haven Property System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#444651'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#ba0035'
  on-secondary: '#ffffff'
  secondary-container: '#e21e49'
  on-secondary-container: '#fffbff'
  tertiary: '#442100'
  on-tertiary: '#ffffff'
  tertiary-container: '#653400'
  on-tertiary-container: '#fc922b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b6'
  on-secondary-fixed: '#40000c'
  on-secondary-fixed-variant: '#920028'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system translates the cultural legacy, peacock elegance, and architectural motifs of the original identity into an authoritative, modern digital flagship for property development and luxury residences. The visual personality balances institutional prestige, architectural precision, and warm domestic hospitality.

The design movement is **Corporate Modern with High-End Editorial Clarity**. It avoids cluttered real-estate tropes in favor of expansive white space, luminous slate surfaces, finely tuned hairline dividers, and striking high-contrast focal points. Key touchpoints express structural security (deep regal blue) punctuated by residential passion (radiant coral) and verified luxury standards (sunlit amber).

## Colors

The palette transforms the rich colors of the emblem—peacock azure, rooftop rose, and structural gold—into a balanced digital color hierarchy.

- **Primary (`#1E3A8A`) & Royal Cobalt (`#2563EB`):** Foundation tones used for primary navigation, headings, solid commitment CTAs, and structural layout framing.
- **Secondary (`#E11D48`) & Crimson Rose (`#F43F5E`):** Energetic residential accents dedicated to conversion triggers (e.g., "Schedule a Tour", "Inquire Now"), price badges, and active state indicators.
- **Luxury Accent (`#D97706`) & Warm Amber (`#F59E0B`):** Reserved for prestige status badges ("RERA Verified", "Platinum Villa", star ratings, and featured property pins).
- **Surfaces & Neutrals:** Crisp white (`#FFFFFF`) layered over backdrop slate (`#F8FAFC`), structured with subtle stone gray borders (`#E2E8F0`). Text layers utilize deep obsidian slate (`#0F172A`) for high-contrast legibility, with muted body copy in slate gray (`#64748B`).

## Typography

The typography uses Plus Jakarta Sans throughout for its crisp geometric letterforms and refined terminal strokes. It pairs commercial authority with residential warmth.

- **Hero & Headlines:** Styled with tighter letter tracking (-0.02em to -0.03em) to convey stability, scale, and modern executive polish.
- **Body:** Standard tracking with relaxed leading to maximize clarity in floor plan specs, property descriptions, and legal disclosures.
- **Labels & Microcopy:** Rendered with elevated weights (600–700). Badge headers and architectural metadata use `label-caps` with uppercase transformation and +0.05em tracking.

## Layout & Spacing

The layout is built upon an 8pt base grid within an adaptive 12-column fluid container capped at a maximum width of 1280px.

- **Desktop (1024px+):** 12 columns with 24px (`1.5rem`) gutters and a minimum 32px (`2rem`) outer margin. Section pads scale generously up to 80px to provide breathing room around photography and architectural renders.
- **Tablet (768px – 1023px):** 8 columns with 20px gutters and 24px margins. Search bars and property filter docks transition into collapsible or segmented control sheets.
- **Mobile (< 768px):** 4 columns with 16px (`1rem`) gutters and 16px outer margin. Property carousels use edge-to-edge bleed with an offset peek of the subsequent card.

## Elevation & Depth

Visual hierarchy uses clean atmospheric layering: pure white cards resting above soft slate backgrounds, anchored by ambient, low-density shadows.

- **Surface Level 0 (Canvas):** `#F8FAFC` base application plane.
- **Surface Level 1 (Resting Cards & Panels):** `#FFFFFF` with a 1px solid border (`#E2E8F0`) and an ambient drop shadow: `0 4px 16px -2px rgba(30, 58, 138, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.03)`.
- **Surface Level 2 (Hover & Active Listings):** Lifted with shadow expansion: `0 12px 28px -4px rgba(30, 58, 138, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)`, paired with a slight -2px vertical translate.
- **Surface Level 3 (Sticky Navbars, Modals & Floating Filters):** Frosted glass backdrop blur (`backdrop-filter: blur(12px)`) at 90% opacity (`rgba(255, 255, 255, 0.90)`) with elevation shadow: `0 20px 32px -6px rgba(15, 23, 42, 0.10)`.

## Shapes

The geometric signature combines modern architectural contours with rounded corners:

- **Cards & Enclosures:** Built with `rounded-2xl` (16px / 1rem radius) to frame property galleries, agent cards, and valuation widgets.
- **Input Fields & Form Elements:** Defined at `rounded-xl` (12px / 0.75rem radius) to remain structured yet friendly.
- **Badges, Tags & Quick Filters:** Fully rounded pill silhouettes (`rounded-full` / 9999px radius) for tactile scannability.
- **Primary Buttons:** Balanced at `rounded-xl` for substantial presence, with small icon actions defaulting to complete circular pills (`rounded-full`).

## Components

### Buttons & CTAs
- **Primary CTA ("Book Site Visit"):** Solid `#1E3A8A` background with crisp white text, transitioning to `#2563EB` on hover. Padding: `12px 24px`.
- **Accent Conversion CTA ("Inquire Now"):** Radiant Coral (`#E11D48`) solid fill with white text, casting a coral glow on hover (`0 8px 20px -4px rgba(225, 29, 72, 0.35)`).
- **Secondary / Ghost Button:** Transparent background, 1.5px border in `#E2E8F0`, deep blue text `#1E3A8A`, shifting to `#F1F5F9` on hover.

### Property Listing Cards
- Composed of an edge-to-edge rounded-t-2xl aspect-ratio 16:10 visual carousel, overlaid with floating pill badges:
  - Status Badge: Radiant Coral pill (`#E11D48`) for "New Launch" or Amber (`#D97706`) for "RERA Approved".
  - Floating Action: Top-right circular white favorite toggle with heart icon.
- Content body inside white canvas with 20px padding: bold price typography (`headline-sm`), property title (`label-lg`), and an icon-based specification row (BHK, sq.ft, parking) divided by hair-thin `#E2E8F0` separators.

### Chips & Filter Pills
- Inactive filters use a `#F1F5F9` background, `#475569` text, and borderless design.
- Active filters switch to `#1E3A8A` fill with white text, or an outline version with 1.5px `#1E3A8A` border and `#EFF6FF` wash.

### Form Inputs & Search Docks
- Multi-parameter search bar incorporates combined segmented fields (Location, Property Type, Budget) within an elevated single-enclosure dock.
- Inputs feature subtle `#F8FAFC` background resting states, transitioning on focus to pure `#FFFFFF` with a 2px `#2563EB` outline and gentle outer ring glow.

### Checkboxes & Radios
- Square checkbox (4px radius) and circular radio controls with a 2px border in `#CBD5E1`.
- Checked states trigger `#1E3A8A` fill with a sharp white checkmark or center pip.