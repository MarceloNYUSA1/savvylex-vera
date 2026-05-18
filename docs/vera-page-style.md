# Vera Page Style Prompt

Use this prompt when building any new page, section, or UI component for the Vera / SavvyLex brand. It defines the full design system extracted from the Vera demo page.

---

## Prompt

> Design this page using the Vera for Legal design system. Apply the following specifications exactly.
>
> **Color palette (CSS variables):**
> - `--navy: #0c1a35` — primary dark background, headers, nav
> - `--navy-mid: #152544` — secondary dark background, strips
> - `--navy-light: #1e3460` — gradients, hover states
> - `--gold: #c9a84c` — primary accent, eyebrow labels, icons
> - `--gold-light: #e8c97a` — gradient end, highlighted text
> - `--cream: #f8f7f4` — page background
> - `--g50: #f9fafb` — card backgrounds, alt sections
> - `--g200: #e5e7eb` — borders
> - `--g400: #9ca3af` — muted text, placeholders
> - `--g600: #4b5563` — body text, descriptions
> - `--g800: #1f2937` — primary text
> - `--green: #059669` — success states, checkmarks
> - `--red: #dc2626` — warning states, alerts
>
> **Typography:**
> - Headings: `Playfair Display` serif, weights 600–700. Use italic for taglines.
> - Body: `Inter` sans-serif, weights 300–700.
> - Eyebrow labels: 11px, weight 700, `letter-spacing: .12em`, `text-transform: uppercase`, color `--gold`.
> - Section titles: `clamp(30px, 4vw, 46px)`, Playfair Display.
> - Hero title: `clamp(44px, 7vw, 80px)`, Playfair Display.
> - Accent text in titles: gradient `linear-gradient(135deg, #c9a84c, #e8c97a)` via `-webkit-background-clip: text`.
>
> **Layout:**
> - Max content width: `1120px`, centered with `margin: 0 auto`.
> - Section padding: `88px 24px`.
> - Border radius — cards: `14px`, large containers: `22px`.
> - Shadows: sm `0 1px 4px rgba(0,0,0,.07)`, md `0 4px 18px rgba(0,0,0,.10)`, lg `0 10px 36px rgba(0,0,0,.13)`, xl `0 20px 64px rgba(0,0,0,.17)`.
>
> **Navigation:**
> - Fixed, height 64px, `background: rgba(12,26,53,.92)` with `backdrop-filter: blur(16px)`.
> - Logo: gold gradient square mark (border-radius 9px) + Playfair Display name + uppercase subtitle in gold-light.
> - Status pill: blinking green dot + label, `background: rgba(255,255,255,.07)`, border `rgba(255,255,255,.11)`, 100px border-radius.
> - Primary CTA: gold gradient pill button with shadow `0 3px 12px rgba(201,168,76,.35)`.
> - Ghost button: `background: rgba(255,255,255,.08)`, white text, subtle border.
>
> **Hero section:**
> - Full viewport height, navy gradient background (`160deg`, navy → navy-mid → #1b3060).
> - Subtle grid overlay: `1px rgba(255,255,255,.018)` lines at `56px` spacing.
> - Radial gold glow: `700px` circle, `rgba(201,168,76,.09)`, centered and offset upward.
> - Badge above title: gold-bordered pill, `rgba(201,168,76,.08)` bg, gold-light text.
> - Stat strip at bottom: Playfair numbers in gold-light, divided by `rgba(255,255,255,.08)` separators.
>
> **Value strip (below hero):**
> - `background: --navy-mid`, thin borders top and bottom.
> - Items: emoji/icon in gold + label in `rgba(255,255,255,.55)`, spaced `40px` apart.
>
> **Step/card grids:**
> - Cards: white background, `border: 1px solid --g200`, no gap (2px), hover lifts with `--sh-md`.
> - First card: `border-radius: 14px 0 0 14px`. Last card: `border-radius: 0 14px 14px 0`.
> - Large decorative step number: Playfair Display 48px, `rgba(201,168,76,.18)`.
>
> **Feature/capability grid:**
> - `gap: 3px`, `background: --g200` (shows as thin grid lines), `border-radius: 22px`, `overflow: hidden`.
> - Each cell: white bg, `padding: 32px 28px`, hover to `--g50`.
>
> **Pricing cards:**
> - White bg, `border: 2px solid --g200`, `border-radius: 22px`.
> - Featured card: `border-color: --gold`, outer glow `0 0 0 3px rgba(201,168,76,.12)`.
> - Featured badge: gold gradient pill, positioned `top: -12px`, centered.
> - Checklist items: `✓` in `--green`, flex layout.
> - Buttons: outline style (navy border) default; featured uses gold gradient fill.
>
> **Comparison section:**
> - Full navy background.
> - "Other" card: `rgba(255,255,255,.04)` bg, dim borders and text.
> - "Vera" card: `rgba(201,168,76,.12)` bg, gold border, white text.
> - Best badge: gold gradient, `top: -12px`, `right: 28px`.
>
> **Alert boxes (inline):**
> - Warn: `rgba(220,38,38,.05)` bg, `3px solid --red` left border, dark red text.
> - OK/success: `rgba(5,150,105,.05)` bg, `3px solid --green` left border, dark green text.
> - Info: `rgba(201,168,76,.08)` bg, `3px solid --gold` left border, amber text.
>
> **Buttons:**
> - Primary (gold): `linear-gradient(135deg, #c9a84c, #e8c97a)`, navy text, `font-weight: 700`, `border-radius: 100px`, gold box-shadow. Hover: `translateY(-2px)` + stronger shadow.
> - Ghost (light): `rgba(255,255,255,.07)` bg, white text, `border: 1px solid rgba(255,255,255,.14)`. Hover: slightly lighter bg.
> - Ghost (dark): transparent bg, `border: 2px solid --navy`, navy text. Hover: navy bg + white text.
>
> **CTA band:**
> - Navy gradient background, centered text, Playfair heading, muted body copy, button group.
>
> **Footer:**
> - `background: #060d1c`, `rgba(255,255,255,.35)` text, gold links.
>
> **Disclaimer:**
> - Always include at bottom: *"All Vera outputs require attorney review before use in any legal matter. Not a substitute for legal advice."*
>
> **Animations:**
> - `blink`: opacity 1 → 0.4 → 1 at 2s (for status dots).
> - `pop`: opacity + translateY(7px) → visible at 0.28s ease (for chat messages).
> - `bounce`: for typing indicator dots.
> - `modalIn`: scale(0.95) + opacity 0 → 1 at 0.28s.
> - Hover transitions: `all .2s` on interactive elements.
>
> **Fonts to load:**
> ```html
> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
> ```
>
> **Tone:**
> - Professional but warm. Navy + gold = authority + trust.
> - Legal-grade credibility: exact IRC citations, structured outputs (Issue / Analysis / Conclusion), attorney review gates.
> - Labels like "ZDR Active", "Attorney Review Required", "Claude for Law" reinforce the positioning.

---

## Quick reference — section order for a standard Vera page

1. Fixed Nav (logo + status pill + Contact Sales + Try Demo CTA)
2. Hero (full-vh, navy gradient, badge + title + tagline + sub + CTA buttons + stats)
3. Value Strip (navy-mid, trust signals)
4. How It Works (4-step card strip)
5. Live Demo (scenario chips + chat shell)
6. Why Vera (comparison: Raw Claude vs. Claude via Vera)
7. Capabilities (8-cell feature grid)
8. Pricing (3 cards, no prices, "Contact SavvyLex for Pricing" CTAs)
9. CTA Band (navy gradient, final conversion)
10. Footer (dark, legal disclaimer)
