---
name: Santosh Nayak Portfolio
description: A mid-century physics-education poster: flat silkscreen inks on cool paper, ripple-tank interference as the carrier.
colors:
  ultramarine: "#1a2bc4"
  ultramarine-soft: "#c9d1ff"
  vermilion: "#ff4b1f"
  vermilion-ink: "#b82d0a"
  paper: "#eef0f7"
  paper-2: "#e1e5f1"
  ink: "#0c1033"
  ink-soft: "#454a73"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  app-icon: "22%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section-y: "clamp(4rem, 8vw, 7.5rem)"
  wrap-max: "1180px"
components:
  button-solid:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.4rem"
  button-solid-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.4rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.4rem"
  caption-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    padding: "clamp(1.75rem, 4vw, 3rem) 0"
  nav-bar:
    backgroundColor: "{colors.ultramarine}"
    textColor: "{colors.white}"
    height: "4rem"
  nav-bar-solid:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
---

# Design System: Santosh Nayak Portfolio

## Overview

**Creative North Star: "The Ripple Tank Poster"**

A mid-century physics-education poster rendered for the web. Two wave sources, Physics and Code, interfere, and what a recruiter hires is the interference between them. Everything is flat silkscreen ink: two spot inks (ultramarine and vermilion) on cool blue-tinted paper, set in blue-black ink. There are no gradients, no glow, and no soft shadows. Overprint is by multiply, never by opacity haze.

The page reads as a ruled, captioned plate. Sections are ledgers: a 2px ink rule on top, hairlines between rows, one caption line under a heavy wide headline. The interface recedes so the work (five roles, nine projects, thirteen apps, talks, degrees) leads. Density is generous: one idea per screen, large section padding, long measure capped near 68ch.

The system is recognizable with all content removed by concentric-ring moire on ultramarine.

**Key Characteristics:**
- Two spot inks plus paper and blue-black ink; grounds alternate paper, paper-2, ultramarine, vermilion.
- One typeface (Archivo, variable width and weight): wide and heavy for display, normal width for text.
- Square, flat, hairline-ruled; zero radius everywhere except store app icons.
- One authored motion moment (the hero ring tank); everything else is a state change.
- Poster grammar: caption bars, figure captions, registered rail.

## Colors

Two silkscreen inks on cool paper, text always in blue-black.

### Primary
- **Ultramarine** (#1a2bc4): the dominant ground. Drenches the hero, the public-speaking section, the contact band, and the top nav at rest. White text on it; focus ring flips to white.
- **Vermilion** (#ff4b1f): the second ink. Fills, rings, the solid button, the current-role rail, scroll progress hairline, hover fills, the apps section ground, and text selection. Never body text on paper.

### Secondary
- **Vermilion Ink** (#b82d0a): vermilion deepened enough to carry text on paper. Used for text-link hover on paper grounds.
- **Ultramarine Mist** (#c9d1ff): secondary text and figure captions on ultramarine.

### Neutral
- **Cool Paper** (#eef0f7): the default page and reading ground.
- **Cool Paper Deep** (#e1e5f1): alternate reading ground (experience, projects, certifications), scrollbar track.
- **Blue-Black Ink** (#0c1033): all text on paper and vermilion, the hero caption bar, the footer, rules, and the ink button.
- **Ink Soft** (#454a73): captions, summaries, tech lines, dates on paper.
- **Rules**: ink at 20% on paper, white at 28% on ultramarine, ink at 35% on vermilion (set per ground through the rule variable).

### Named Rules
**The Two Inks Rule.** Ultramarine and vermilion are the only chromatic colors. A third hue is a different poster.
**The No-Vermilion-Text Rule.** On paper, vermilion text fails; use Vermilion Ink or Blue-Black Ink. On vermilion grounds, text is Blue-Black Ink.
**The Flat Ink Rule.** Fills are solid. No gradients, glow, or translucent tints standing in for a color.

## Typography

**Display Font:** Archivo (Arial Narrow, system-ui fallback), loaded as the variable font with width 62-125 and weight 400-900.
**Body Font:** Archivo at normal width (system-ui fallback).

**Character:** One family doing two jobs: poster-wide heavy caps and headings, and a calm normal-width text face. Tabular lining numerals are applied to metrics.

### Hierarchy
- **Display** (800, clamp 2.5rem to 5.25rem, 0.92, width 125%, uppercase): the hero name in the caption bar. Contact headline runs at width 118%.
- **Headline** (800, clamp 2.1rem to 3.75rem, 1.02, width 112%, -0.025em): section titles, balanced wrap.
- **Title** (800, clamp 1.25rem to 1.9rem, 1.1, width 108%): role, skill-row, project, and talk titles.
- **Body** (400, 1.0625rem, 1.65): reading text, capped at 68ch (`prose`), captions at 46ch.
- **Label** (700, 0.84rem, 0.06em tracking, uppercase, width 100%): buttons, nav links, source labels, contact labels.

### Named Rules
**The Wide Heavy Display Rule.** Display and headings are Archivo 800 at stretched width; text is never stretched.
**The One Family Rule.** Archivo throughout. Do not pair a second face.

## Layout

A single centered wrap: width of the viewport minus two gutters (clamp 1.25rem to 3rem), max 1180px. Sections take vertical padding of clamp 4rem to 7.5rem and are headed by a title plus one caption line, followed by a gap of clamp 2.5rem to 4.5rem.

Page order: hero (ultramarine), about (paper), experience (paper-2), skills (paper), projects (paper-2), apps (vermilion), talks (ultramarine), education (paper), certifications (paper-2), contact (ultramarine), ink footer.

The hero is a two-row grid: a ripple-tank scene on top and a blue-black caption bar below, name left, taglines and actions right, collapsing to one column at 860px. Ledger rows use asymmetric grids (skills 5fr/7fr, projects 15rem/1fr/8rem, talks 6fr/6fr with alternating flip) that collapse to one column at about 760 to 900px. The header nav collapses to a menu button at 1020px. Fixed header is 4rem tall; scroll padding is 4.5rem.

### Named Rules
**The Ledger Rule.** Experience, skills, projects, education, certifications, and apps share one grammar: a 2px ink top rule, 1px rules between rows, no cards, no boxes.
**The Registered Rail Rule.** Experience carries a single rail: past roles are a 1px hairline with a hollow square marker; the current role is a 4px solid vermilion bar with a solid vermilion marker.

## Elevation & Depth

Flat by default. Depth is conveyed by ground change (paper to ultramarine to vermilion), hairline rules, and color blocks, not shadows. The one shadow in the build is the ngx-toastr notification (`0 6px 24px rgba(12,16,51,0.25)`), a library surface that is not part of the page's own vocabulary. Hover on app icons lifts 4px; nothing else lifts.

### Named Rules
**The No-Shadow Rule.** Page surfaces carry no box-shadow. Separation comes from rules and grounds.

## Shapes

Square. Buttons, bars, markers, badges, source labels, and toasts have 0 radius. Borders are 2px for active edges (ink top rules, buttons, nav action) and 1px for hairlines. The one rounded form is the store app icon (22% radius), which is content, not chrome. Thumbnails are 16:10 with a 1px inset rule outline. Poster motif: concentric rings, drawn on a canvas in the hero and as a static SVG figure in the contact band.

## Components

### Buttons
- **Shape:** square, 2px border in current color, 0.85rem 1.4rem padding, uppercase label type.
- **Solid:** vermilion fill and border, ink text. Hover flips to white fill.
- **Line:** transparent, current-color border. Hover fills with the current color and the text takes ultramarine.
- **Ink:** ink fill, paper text, for use on vermilion ground. Hover inverts to paper.
- **Focus:** 3px outline offset 3px in the ground's focus color (ink on paper, white on ultramarine). Disabled is 45% opacity.
- **Text link:** bold, 2px underline; hover goes Vermilion Ink on paper, and keeps color with a vermilion underline on dark grounds.

### Navigation
Fixed 4rem bar. At rest it is ultramarine with white labels; once scrolled it turns paper with ink labels and a hairline bottom rule. Links are uppercase label type with a 2px underline that scales in from the left for hover and active (line form, not hue). The boxed action (Hire Me) has a 2px border and fills vermilion on hover. Mobile: a bordered menu button opens a paper panel with ruled rows; active is bold underlined.

### Hero Ring Tank (signature)
A full-width canvas of two ring sources: paper-white rings from Physics, vermilion rings from Code, with small square source labels (paper and vermilion chips, ink text). The Code source steers with the pointer; steering hint is hidden on coarse pointers, and the canvas freezes on prefers-reduced-motion. The caption bar beneath is blue-black ink and holds the name, a typed role line with a vermilion cursor, taglines, and actions.

### Ledger Rows
Section title block, then a 2px ink rule and rows separated by 1px rules. Row titles use Title type; supporting text uses Ink Soft. Bullets are 0.5rem by 2px ink dashes, not discs. Experience adds the registered rail and an ink badge for the current role.

### Contact Links
On ultramarine: a 2px white top rule and hairline rows of label, value, and arrow. The email row is lead scale. Hover and focus fill the row with vermilion, bleeding 0.75rem past the wrap, text turns ink, and the arrow nudges 4px. A static SVG ring figure with a caption closes the page.

### App Grid
Auto-fit grid (min 8.75rem) of 5.5rem rounded-square store icons with name and count, under a 2px ink rule on the vermilion ground.

## Do's and Don'ts

### Do:
- **Do** set every text color from Blue-Black Ink, Ink Soft, white, or Ultramarine Mist, matched to the ground.
- **Do** build new reading sections as ledgers: 2px ink top rule, 1px rule rows, Title-type row heads.
- **Do** head each section with a Headline-type title and one caption line (max 46ch).
- **Do** keep buttons square, flat, uppercase label type, in one of three inks (vermilion, line, ink).
- **Do** alternate grounds (paper, paper-2, ultramarine, vermilion) and let ground change do the separating.
- **Do** honor prefers-reduced-motion and pointer: coarse for any animated figure; keep motion to state changes otherwise.
- **Do** use the 3px offset focus ring in the ground's focus color.

### Don't:
- **Don't** use vermilion (#ff4b1f) as text on paper; use Vermilion Ink (#b82d0a).
- **Don't** add gradients, glows, or soft shadows to page surfaces.
- **Don't** introduce a third hue or a second typeface.
- **Don't** round corners on chrome or wrap content in cards; use rules.
- **Don't** add scroll-reveal animations; the page has none.
- **Don't** use the retired neon green/cyan identity or the legacy stylesheets (aos.css, main.css, bootstrap), which index.html no longer loads.
