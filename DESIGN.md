---
name: Citadel Void
colors:
  surface: '#111417'
  surface-dim: '#111417'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#191c1f'
  surface-container: '#1d2023'
  surface-container-high: '#282a2e'
  surface-container-highest: '#323539'
  on-surface: '#e1e2e7'
  on-surface-variant: '#baccb0'
  inverse-surface: '#e1e2e7'
  inverse-on-surface: '#2e3134'
  outline: '#85967c'
  outline-variant: '#3c4b35'
  surface-tint: '#2ae500'
  primary: '#efffe3'
  on-primary: '#053900'
  primary-container: '#39ff14'
  on-primary-container: '#107100'
  inverse-primary: '#106e00'
  secondary: '#47f3f1'
  on-secondary: '#003736'
  secondary-container: '#00d7d5'
  on-secondary-container: '#005858'
  tertiary: '#fff8fd'
  on-tertiary: '#490080'
  tertiary-container: '#edd4ff'
  on-tertiary-container: '#872fd5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#79ff5b'
  primary-fixed-dim: '#2ae500'
  on-primary-fixed: '#022100'
  on-primary-fixed-variant: '#095300'
  secondary-fixed: '#4ff9f7'
  secondary-fixed-dim: '#17dcda'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504f'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#111417'
  on-background: '#e1e2e7'
  surface-variant: '#323539'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
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

This design system channels an unapologetic blend of raw sci-fi utilitarianism, interdimensional chaos, and cyber-toxic aesthetics. Designed for die-hard multiverse enthusiasts, wiki contributors, and community archivists, the interface mimics an advanced interdimensional terminal hijacked by an unhinged rogue scientist. 

The aesthetic fuses **High-Contrast Neo-Brutalism** with **Bioluminescent Cyberpunk**:
- Deep void surfaces create infinite vacuum depth.
- Toxic radioactive green luminescence punches through cosmic blackness to command immediate attention.
- Dimension-hopping cyan and mutant portal magenta provide navigational telemetry and anomalous alerts.
- Tactile scanline overlays, neon atmospheric glows, and precise telemetry readouts ground the user within a gritty, high-functioning multiversal apparatus.

## Colors

The palette operates on absolute high contrast against cosmic void depths, using radioactive luminescent accents to simulate portal energy and dimensional instrumentation.

### Palette Architecture
- **Primary (`#39ff14` / `#00ff66` / `#97ce4c`):** Electric toxic portal green. Used for critical primary actions, active telemetry indicators, focal portal glows, and high-priority interactive states.
- **Secondary (`#00d8d6` / `#00b4d8`):** Dimension-hop cyan. Applied to temporal coordinates, secondary interactive controls, energy readouts, and spatial navigation.
- **Tertiary (`#a855f7`):** Mutant plasma purple. Reserved for anomalous badges, alien species classifications, hazard states, and dimensional rift highlights.
- **Neutrals:**
  - `void-base` (`#05070a`): Infinite universe depth; main canvas background.
  - `void-subtle` (`#0c1219`): Recessed paneling, structural framing, and inactive canvas divisions.
  - `surface-container` (`#111a24`): Structural card surfaces, terminal windows, and overlay planes.
  - `surface-elevated` (`#182533`): Raised surfaces, dropdown overlays, and active modal sheets.
  - `text-primary` (`#f0fdf4`): High-clarity luminescent white with an ultra-faint green tint.
  - `text-secondary` (`#7b93a7`): Desaturated cosmic slate for secondary labels and metadata.
  - `border-dim` (`#1e2d3d`): Base architectural wireframes.
  - `border-portal` (`rgba(57, 255, 20, 0.45)`): Energized state boundary.

## Typography

The typographic hierarchy bridges aggressive futuristic display titles with machine-readable telemetry data and ultra-legible body reading spaces.

- **Headlines & Display (Space Grotesk):** Sharp geometric apertures with angular tension. Headlines must always lean into crisp, authoritative lockups. Use uppercase for high-voltage section titles and portal status banners.
- **Body & Editorial (Inter):** Highly neutral and neutral-balanced to maintain extreme legibility when reading dense multiversal lore, episode scripts, and community theories against pitch-dark backdrops.
- **Data & Telemetry (JetBrains Mono):** Monospaced precision for dimensional coordinates (e.g., `C-137`, `PRIME`), serial timestamps, tech stats, and tactical status markers. Always paired with letter-spacing for computational authenticity.

## Layout & Spacing

The layout is constructed on a 12-column fluid grid system on desktop (`min-width: 1024px`), an 8-column system on tablet (`768px - 1023px`), and a 4-column system on mobile (`under 768px`).

- **Grid Behavior:** Architectural layouts mimic partitioned terminal monitors. Grid containers sit flush inside screen-edge framing on mobile, expanding to balanced maximum canvas widths (`1440px`) on desktop.
- **Spacing Scale:** Spacing follows an austere 8px base rhythm (`0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2.5rem`). Information-dense modules (such as episode databases or inventory manifests) utilize compact internal padding (`space-xs` and `space-sm`), while high-level navigational gates employ expansive cosmic margins (`space-xl`).
- **Telemetry Breaks:** Sections are visually demarcated by thin, segmented rule lines with monospaced coordinate tags inserted directly into layout gutters.

## Elevation & Depth

Depth is defined by luminous radiation and atmospheric layer contrast rather than conventional physical drop shadows.

- **Tonal Void Layers:** Lower elevation equals deeper cosmic absorption (`#05070a`). As elements rise in z-index, surfaces shift up through slate charcoal `#0c1219` to `#111a24` and `#182533`.
- **Portal Swirl & Luminous Glows:**
  - *Interactive Focus / Hover:* Surfaces cast outward radiant energy: `0 0 15px rgba(57, 255, 20, 0.35), 0 0 30px rgba(0, 216, 214, 0.15)`.
  - *Critical Energy State:* Concentrated core blur: `0 0 8px #39ff14, inset 0 0 12px rgba(57, 255, 20, 0.2)`.
  - *Mutant Anomaly State:* Saturated magenta radiation: `0 0 18px rgba(168, 85, 247, 0.4)`.
- **Borders & Wireframes:** Elevation tiers are bound by razor-sharp 1px borders. Inactive containers use `#1e2d3d`. Active or hovered containers ignite into luminous toxic borders (`#39ff14`).

## Shapes

The design system maintains a taut, engineered silhouette with `roundedness: 1` (`0.25rem` / `4px` default radius). 

- **Corner Language:** Tight, precision-machined corners reinforce terminal hardware. Rounded aesthetic curves are avoided except for circular telemetry radars and organic portal swirl visualizers.
- **Cut Corners & Chamfers:** Display headers, primary tactical buttons, and modal dialogs may incorporate 45-degree angled chamfered clips (`clip-path: polygon(...)`) on top-right and bottom-left vertices to emphasize experimental gadget engineering.

## Components

### Buttons
- **Primary (Portal Blast):** Background in `#39ff14`, text in `#05070a` (`label-lg` uppercase, Space Grotesk/JetBrains Mono). Edge-lit with `box-shadow: 0 0 16px rgba(57, 255, 20, 0.5)`. Hover intensifies luminescence to `0 0 24px rgba(57, 255, 20, 0.85)` with slight scale transform (`scale(1.02)`).
- **Secondary (Dimension Warp):** Dark void surface (`#111a24`) with a 1px border in `#00d8d6` and text in `#00d8d6`. Hover transitions background to `rgba(0, 216, 214, 0.12)` with a cyan glow `0 0 14px rgba(0, 216, 214, 0.4)`.
- **Ghost / Utility:** Transparent fill, `#7b93a7` label, `#1e2d3d` border. Activates to `#f0fdf4` on hover.

### Chips & Dimension Badges
- **Dimension Tag:** Built strictly using `label-sm` in JetBrains Mono. Encased in a 1px wireframe border with a semi-translucent backdrop (`background: rgba(17, 26, 36, 0.8)`). 
- **Variant Archetypes:**
  - *Earth C-137 / Standard:* Green text (`#39ff14`), border `rgba(57, 255, 20, 0.4)`.
  - *Interdimensional / Fluid:* Cyan text (`#00d8d6`), border `rgba(0, 216, 214, 0.4)`.
  - *Mutant / Citadel Restricted:* Purple text (`#a855f7`), border `rgba(168, 85, 247, 0.4)`.

### Cards & Terminal Panels
- Backed by `#111a24` with a crisp 1px `#1e2d3d` border and `space-md` or `space-lg` padding.
- Equipped with a top tactical metadata header strip (displaying terminal sequence, dimension tag, or signal frequency).
- Hovering over interactive cards ignites the boundary wireframe into `#39ff14` alongside an ambient green/cyan baseline glow.

### Input Fields
- Dark field fill `#0c1219` anchored with a 1px border `#1e2d3d`.
- Typography set to `body-md` in `#f0fdf4`, placeholder text muted to `#7b93a7`.
- **Focused State:** Border ignites to vibrant toxic green `#39ff14` backed by `box-shadow: 0 0 10px rgba(57, 255, 20, 0.3)`. Caret blinks in electric `#39ff14`.

### Checkboxes & Radios
- Sharp 4px radius squares (checkboxes) and circles (radios) with 1.5px border `#1e2d3d` and background `#05070a`.
- Selected state fills with `#39ff14` featuring an obsidian `#05070a` inner glyph, enveloped in a micro-glow `0 0 8px rgba(57, 255, 20, 0.6)`.

### Lists & Telemetry Feeds
- Border-bottom separated with `#1e2d3d`. Alternating states utilize faint `#0c1219` strips.
- Left-aligned monospace indicators (`[LOG_ID]`, `DIM_LOC`) set in `#00d8d6` to guide ocular scanning across multiverse feeds.