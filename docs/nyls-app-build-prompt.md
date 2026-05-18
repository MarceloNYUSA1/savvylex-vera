# Base44 App Build Prompt — Vera NYLS AI&Data Demo

Use this prompt verbatim to instruct the Base44 app builder to create the NYLS demo as a public-facing web application.

---

## PROMPT

Build a public single-page web application called **"Vera — NYLS AI&Data 2026"** for SavvyLex. This is a marketing and demo landing page for Vera, SavvyLex's legal AI platform (powered by Claude for Law), presented at the New York Law School AI&Data conference in September 2026.

---

### DESIGN SYSTEM

Apply the Vera for Legal design system exactly:

**Fonts:** Load from Google Fonts — `Inter` (weights 300–800) and `Playfair Display` (italic + weights 600–700).

**CSS Variables:**
```
--navy: #0c1a35
--navy-mid: #152544
--navy-light: #1e3460
--gold: #c9a84c
--gold-light: #e8c97a
--cream: #f8f7f4
--g50: #f9fafb
--g200: #e5e7eb
--g300: #d1d5db
--g400: #9ca3af
--g600: #4b5563
--g800: #1f2937
--green: #059669
--red: #dc2626
--purple: #6d28d9
--r: 14px (card border-radius)
--rl: 22px (large container border-radius)
--sh-md: 0 4px 18px rgba(0,0,0,.10)
--sh-lg: 0 10px 36px rgba(0,0,0,.13)
--sh-xl: 0 20px 64px rgba(0,0,0,.17)
```

**Typography rules:**
- All section headings: `Playfair Display`, serif, 600–700 weight
- Eyebrow labels: 11px, weight 700, `letter-spacing: .12em`, `text-transform: uppercase`, color `--gold`
- Gold accent text in headings: `background: linear-gradient(135deg, #c9a84c, #e8c97a)` with `-webkit-background-clip: text`
- Purple accent text (for "AI"): `background: linear-gradient(135deg, #a78bfa, #c4b5fd)` with `-webkit-background-clip: text`
- Body text: Inter, `--g600`

**Buttons:**
- Gold primary: `linear-gradient(135deg, #c9a84c, #e8c97a)`, navy text, `font-weight: 700`, `border-radius: 100px`, gold `box-shadow`. Hover: `translateY(-2px)` + stronger shadow.
- Ghost (on dark): `rgba(255,255,255,.07)` bg, white text, `border: 1px solid rgba(255,255,255,.14)`, `border-radius: 100px`.

**Animations:**
- `blink`: opacity 1→0.4→1, 2s infinite (for status dots)
- `pop`: opacity 0 + translateY(7px) → visible, 0.28s ease (for chat messages appearing)
- `bounce`: for typing indicator dots
- `modalIn`: scale(0.95) + opacity 0 → 1, 0.28s (for modal entry)
- All hover transitions: `all .2s`

---

### PAGE STRUCTURE — BUILD ALL SECTIONS IN ORDER

#### 1. FIXED NAV (height: 64px)
- Background: `rgba(12,26,53,.92)` + `backdrop-filter: blur(16px)`
- Left: Gold gradient square mark (36×36px, border-radius 9px, ⚖️ emoji) + "Vera" in Playfair Display + "by SavvyLex" subtitle in gold-light uppercase
- Center: Event pill with blinking gold dot + text "NYLS AI&Data 2026 · September" — gold border, `rgba(201,168,76,.12)` bg
- Right: Ghost "Event Info" button (scrolls to #event) + Gold "Book a Demo ✦" button (opens contact modal)

---

#### 2. HERO (full viewport height, navy gradient)
- Background: `linear-gradient(160deg, #0c1a35 0%, #152544 55%, #1b3060 100%)`
- Decorative layers: subtle grid overlay (56px, `rgba(255,255,255,.018)`) + large radial gold glow (800px circle) + small purple glow (400px, bottom-left)
- Event badge (pill): `🏛️ NYLS` mini-tag + text "AI & Data for the Legal Profession · September 2026"
- **Hero title (Playfair Display, clamp 40px–76px):**
  > The Law Is **Data.** *(gold accent)*
  > The Future Is **AI.** *(purple accent)*
  > Your Firm Needs Both.
- Tagline (italic Playfair): *"Vera brings Claude for Law to every attorney, professor, and student — with the governance, audit trails, and data architecture the profession demands."*
- Sub-copy: "AI is no longer optional in legal practice. The question is **how you deploy it responsibly** — with privilege protection, data residency controls, agentic workflows, and attorney-in-the-loop oversight. **Vera is built for exactly that.**"
- Two buttons: Gold "✦ See Vera in Action" (scrolls to #demo) + Ghost "Connect at NYLS →" (opens modal)
- **Stat strip** (border-top, 5 stats): BYOK / Your Key, Your Data · ZDR / Zero Data Retention · 100% / Attorney-in-the-Loop · ABA / Rule 1.1 Compliant · MCP / Agentic Workflows

---

#### 3. TRUST STRIP (navy-mid background)
Five items with gold emoji + muted label:
🏛️ New York Law School · September 2026 · 🔒 Privilege-Protected by Design · 🤖 Powered by Claude for Law · 📊 Full Audit Trail & Governance · 🎓 Built for Practice & Education

---

#### 4. AUDIENCE SECTION ("Who Vera Is For")
**4 cards** in auto-fit grid (minmax 240px). Each card: white bg, 1px `--g200` border, `--rl` radius, 3px gold gradient top bar, hover lifts.

| Card | Icon | Title | Description | Tags |
|------|------|-------|-------------|------|
| 1 | 🏢 | In-House Counsel | Manage contracts, M&A due diligence, regulatory compliance, and internal investigations — with AI that understands your enterprise data and keeps it inside your walls. | Contract Review · M&A DD · Regulatory · Data Governance |
| 2 | ⚖️ | Law Firm Attorneys | Tax controversy, litigation, corporate — Vera delivers Claude for Law with matter-specific context, citation-grade research, and an airtight attorney review workflow. | Tax Research · Drafting · IRS Controversy · Audit Trail |
| 3 | 🎓 | Law Students | Vera accelerates legal research, case analysis, and memo writing. Learn to work with AI the way law firms actually use it — with governance built in from day one. | Research · Case Analysis · Memo Writing · AI Literacy |
| 4 | 📚 | Faculty & Researchers | Explore the intersection of AI, data, and legal ethics. Vera is both a teaching tool and a research platform — ideal for clinics, law review work, and AI law curriculum. | Legal Ethics · Curriculum · AI Research · Clinics |

Tags style: `font-size: 11px`, `font-weight: 600`, `background: rgba(201,168,76,.1)`, `color: #7a5c1a`, `border-radius: 100px`, gold border.

---

#### 5. AI + DATA PLATFORM SECTION ("Not Just AI. A Legal Data Architecture.")
Background: `--g50`
**8 pillars** in auto-fit grid (minmax 260px), `gap: 3px`, `background: --g200` (creates thin grid lines), `border-radius: --rl`, `overflow: hidden`. Each pillar: white bg, `padding: 36px 30px`, hover to `--g50`.

| # | Icon | Title | Description | Tag color |
|---|------|-------|-------------|-----------|
| 1 | 🔑 | BYOK — Bring Your Own Key | Your firm's Anthropic Enterprise key powers Vera. SavvyLex is the configuration layer — we never hold, route, or bill your AI tokens. Your data never passes through us. | gold (Data Sovereignty) |
| 2 | 🗄️ | Zero Data Retention (ZDR) | Enterprise + ZDR required for all production deployments. Anthropic's ZDR policy ensures no training on your data and zero retention after session close. Privilege stays intact. | green (ZDR Active) |
| 3 | 📋 | Full Audit Trail | Every prompt, every response, every attorney action is logged per matter. Immutable audit logs support privilege claims, malpractice defense, and bar compliance reviews. | green (Audit-Grade) |
| 4 | 🔗 | MCP Agentic Workflows | Model Context Protocol connects Vera to Westlaw, iManage, DocuSign, Microsoft 365. LexAgents run multi-step legal workflows autonomously — with human gates. | purple (Agentic) |
| 5 | 🌍 | Data Residency Controls | Choose where your data lives. Vera supports U.S.-only data residency for compliance with state bar rules, client requirements, and enterprise data governance policies. | blue (Residency) |
| 6 | 👤 | Attorney-in-the-Loop | No AI output leaves Vera without attorney review. Every draft is flagged, every memo requires sign-off, every action is logged back to the supervising attorney. | green (ABA 1.1) |
| 7 | 🏛️ | Matter-Centric Context | Vera loads client, matter, jurisdiction, and prior work context before every session. Claude for Law knows the case before you type your first word. | purple (Contextual AI) |
| 8 | 🔏 | Privilege Architecture | Built-in privilege markers, communication tagging, and attorney-client confidentiality enforcement. Vera treats privilege not as a checkbox — but as a system design requirement. | green (Privilege-Safe) |

---

#### 6. LIVE INTERACTIVE DEMO SECTION (id="demo")
Background: `--g50`

**6 scenario chips** (scrollable row, pill buttons):
1. 🎓 Law Student Research `[EDU]`
2. 🏢 In-House Contract Review `[IH]`
3. 📊 AI Data Governance `[NEW]`
4. ⚡ Tax Controversy `[TAX]`
5. 🤖 Agentic Workflow Demo `[AGENT]`
6. ⚖️ AI Ethics & Bar Rules `[ETHICS]`

Active chip: navy bg. Badge pills: `rgba(201,168,76,.15)`, gold-dark text. Active badge: `rgba(255,255,255,.15)`, gold-light text.

**Chat shell** (white bg, `--rl` radius, `--sh-xl` shadow):
- **Top bar** (navy gradient): Avatar (42px gold gradient circle, ⚖️) + "Vera — Claude for Law · NYLS AI&Data Edition" name + "SavvyLex · Presented at New York Law School · September 2026" subtitle + status badges: 🟢 Live Demo · 🔒 ZDR Active · 🏛️ NYLS 2026
- **Meta bar** (--g50 bg, --g200 border): Session label (updates per scenario) · Context label · Model: claude-opus-4 · Governance: Audit Trail ON
- **Warning bar** (gold tint): ⚠️ Attorney Review Required — All Vera outputs are AI drafts. A licensed attorney must review before use in any legal matter.
- **Chat body** (480px height, scrollable): Messages animate in with `pop` animation. Vera messages: `--g50` bg, left-aligned. User messages: navy gradient bg, right-aligned. Support `<strong>`, `<ul>/<li>`, `.alert-box.warn` (red left border), `.alert-box.ok` (green left border), `.alert-box.info` (gold left border) inside message bubbles.
- **Typing indicator**: 3 bouncing dots
- **Input area**: Textarea (auto-grows) + send button (navy gradient, ➤ icon)
- **Footer note**: "Sandboxed demo · NYLS AI&Data 2026 · No real client data is processed or retained."

**Scenario conversation data (load on chip click, animate messages in sequence):**

**Scenario 1 — Law Student Research (First Amendment Memo)**
- Matter: "Law Student Research — First Amendment Memo" | Context: "NYLS · 1L Constitutional Law"
- Vera: "Hi — I'm Vera, your AI legal research assistant. I see you're working on a First Amendment memo for your Con Law class. What's the research question?"
- User: "I need to analyze whether a university's social media policy restricting student speech on school platforms violates the First Amendment."
- Vera: [Structured response covering: Threshold Issue (public vs. private university / state action), Forum Analysis (traditional / limited / non-public forum), Key Cases: Tinker v. Des Moines (1969), Mahanoy Area School Dist. v. B.L. (2021), Rosenberger v. Rector (1995). Ends with info alert box: "Memo Structure: Issue → Rule → Mahanoy analysis → Application → Conclusion"]

**Scenario 2 — In-House Contract Review (SaaS MSA)**
- Matter: "In-House Counsel — SaaS Master Agreement Review" | Context: "In-House Legal · Technology Company"
- Vera: "I have the SaaS Master Agreement loaded for your review. 47 pages. Running a red flag analysis prioritized by risk level."
- User: "Give me the top issues I need to flag for business before we redline."
- Vera: [Red flag summary: 🔴 Critical — §8.2 data license (conflict with confidentiality), §14.1 liability cap (3 months, negotiate to 12), §11.4 termination asymmetry (90 days vs 30). 🟡 High — §6 SLA no termination right, §9 audit rights missing. Warn alert: "§8.2 Data License is Priority #1. Do not execute without resolving."]

**Scenario 3 — AI Data Governance (Legal Dept AI Policy)**
- Matter: "AI Data Governance — Legal Department AI Policy" | Context: "Legal Ops · AI Governance"
- Vera: "You're drafting an AI governance policy for your legal department. I'll structure this around the key risk vectors: privilege, data residency, attorney supervision, and vendor risk."
- User: "We're a 500-person company with an in-house legal team of 12. We want to allow AI tools but need a governance framework first."
- Vera: [Framework: 1. Permitted Tools Registry (data residency audit + privilege risk + BAA), 2. Data Classification Rules (Privileged/Confidential/Internal tiers with inline tags), 3. Vendor Risk Tiers (Tier 1 BYOK / Tier 2 SaaS+ZDR / Tier 3 Consumer = prohibited). OK alert: "Vera's BYOK + ZDR architecture satisfies Tier 1."]

**Scenario 4 — Tax Controversy (IRC §482)**
- Matter: "Alvarez Industries — IRC §482 Transfer Pricing" | Context: "Tax Controversy · IRS Exam"
- Vera: "Good morning. I have the Alvarez Industries matter loaded — potential IRC §482 exposure on intercompany pricing with their Mexican subsidiary. What would you like to tackle first?"
- User: "Give me the §482 transfer pricing risk overview and what the IRS is most likely to challenge."
- Vera: [§482 analysis: Core Rule (arm's-length, CUP method, Treas. Reg. §1.482-1(c)), IRS Focus Areas (services / IP licensing / intercompany loans), Penalty Exposure (20%/40% without contemporaneous docs under Reg. §1.6662-6(d)). Warn alert: "Confirm transfer pricing study on file. Critical gap before any IRS contact."]

**Scenario 5 — Agentic Workflow (LexAgents NDA)**
- Matter: "LexAgents — Agentic Contract Workflow" | Context: "Agentic AI · MCP Demo"
- Vera: [Step 1 complete: NDA classified. Step 2 pending attorney approval — shows workflow state]
- User: "Approve step 2 — run the analysis."
- Vera: [Step 2 results: 🔴 Residuals clause (§9), 🔴 No governing law. 🟡 2-year term. 🟡 Missing injunctive relief. Info alert: "Human Gate Required. LexAgents will not auto-send the redline."]
- User: "Approve step 3."
- Vera: [Step 3 complete: Redline generated in iManage (residuals struck, NY governing law, 3-yr term, injunctive relief added). OK alert: "Audit Trail Updated. All steps logged with timestamps. Attorney review pending."]

**Scenario 6 — AI Ethics (ABA Rule 1.1)**
- Matter: "AI Ethics — ABA Rules & Attorney Competence" | Context: "Professional Responsibility · AI Ethics"
- Vera: "AI Ethics scenario loaded. I can help analyze how the ABA Model Rules apply to attorney use of AI — a critical issue for every lawyer using tools like me."
- User: "Does ABA Rule 1.1 require attorneys to understand how AI tools like Vera work before using them in practice?"
- Vera: [Rule 1.1 analysis: Comment 8 (2012) technology competence requirement. What this means for AI (must understand capabilities, must supervise, must understand data handling). Key opinions: ABA Formal Op. 512 (2024), Florida Bar Op. 24-1 (2024), Cal. State Bar Op. 2023-1. Info alert: "Vera's Design Response: Every output labeled 'Attorney Review Required.' Audit logs document supervision. ZDR protects confidentiality."]

**Fallback responses** (cycle through when user types custom questions):
1. "Great question. Let me pull the relevant authority and give you a structured analysis."
2. "I'd approach this by looking at the intersection of the applicable rule and the specific facts. Here's the framework..."
3. "The case law here has evolved significantly post-2023. Let me anchor on the most recent circuit-level opinions."
4. "From a data governance perspective, this is a Tier 1 risk item — let me walk through the implications."
5. "The ABA's 2024 formal opinion addresses this directly. The short answer is yes, with important nuances by jurisdiction."
6. "Noted and logged to the session audit trail. Want me to draft a memo summarizing this for the matter file?"
7. "This is one of the core AI + Data questions the NYLS conference is designed to tackle. Here's how Vera's architecture answers it..."

---

#### 7. DATA GOVERNANCE DEEP DIVE (navy background)
**8 cells** in auto-fit grid (minmax 270px), `gap: 2px`, `background: rgba(255,255,255,.06)`, `--rl` radius, overflow hidden. Each cell: `rgba(255,255,255,.03)` bg, hover to `rgba(255,255,255,.07)`.

| # | Icon | Title | Description | Badge |
|---|------|-------|-------------|-------|
| 1 | 🔑 | BYOK Architecture | Your Anthropic Enterprise key. Your billing. SavvyLex is never in the data path — configuration, not API proxy. Total cost transparency. | BYOK (gold) |
| 2 | 🗄️ | Zero Data Retention | Anthropic ZDR ensures no session data used for model training, no retention post-session. Required for all Vera production environments. | ZDR Required (green) |
| 3 | 📋 | Immutable Audit Logs | Every AI interaction logged per matter, per attorney, with timestamps and prompt/response pairs. Exportable for privilege logs and bar review. | Audit-Grade (purple) |
| 4 | 🤖 | LexAgents — Agentic Workflows | Multi-step autonomous legal workflows: intake → research → draft → review → log. Each step has a human gate. No agent completes without attorney approval. | Agentic (blue) |
| 5 | 🌍 | Data Residency & Sovereignty | U.S.-only data residency options. Client data never leaves your defined perimeter. Supports multi-jurisdiction compliance. | US Residency (green) |
| 6 | 🔐 | SSO / SCIM & Access Control | Role-based access by matter, practice group, or clearance level. SSO + full SCIM provisioning for enterprise deployments. | Enterprise IAM (purple) |
| 7 | 📊 | Usage Analytics & Oversight | Firm-wide dashboards showing AI usage by attorney, matter, and practice group. Oversight tools for risk management partners and GC. | Analytics (gold) |
| 8 | 🏛️ | Bar & Professional Responsibility | Satisfies ABA Model Rules 1.1 (competence), 1.6 (confidentiality), 5.3 (supervision). Built-in disclaimers on every output. | ABA Aligned (blue) |

Badge color classes: gold = `rgba(201,168,76,.15)` text `--gold-light` · green = `rgba(5,150,105,.15)` text `#34d399` · purple = `rgba(109,40,217,.15)` text `#a78bfa` · blue = `rgba(29,78,216,.15)` text `#93c5fd`

---

#### 8. WHY VERA — COMPARISON SECTION (navy background)
Two-column grid (`1fr 1fr`, stack to `1fr` on mobile):

**Left card — "Without Vera / Raw Claude API":** `rgba(255,255,255,.04)` bg, dim borders, muted white text, ✗ prefix on each row.
- ✗ No privilege architecture — every prompt is a disclosure risk
- ✗ No audit trail — zero defensibility in malpractice or bar review
- ✗ No matter context — AI doesn't know your client or jurisdiction
- ✗ No data residency controls — data processed wherever Anthropic routes it
- ✗ No agentic governance — autonomous steps with no human gates
- ✗ No attorney review workflow — AI output goes directly to use
- ✗ No ABA 1.1 / 1.6 compliance framework built in

**Right card — "With Vera / Claude for Law via Vera":** `rgba(201,168,76,.12)` bg, gold border, white text, ✓ prefix. Gold "Vera Advantage" badge top-right.
- ✓ Privilege architecture baked into every session and output
- ✓ Immutable audit log per matter — exportable for any review
- ✓ Full client/matter/jurisdiction context loaded before first token
- ✓ U.S. data residency + ZDR — your data stays yours
- ✓ LexAgents with human gates at every autonomous step
- ✓ Attorney review gate on every output — logged and signed off
- ✓ ABA 1.1, 1.6, 5.3 compliance framework built in by design

---

#### 9. NYLS EVENT SECTION (id="event", dark navy gradient background with grid overlay)
Large card: `rgba(255,255,255,.04)` bg, `rgba(255,255,255,.1)` border, `--rl` radius, 3px gold gradient top bar.

**Card header (flex, wraps on mobile):**
- Left: Badge pill "🏛️ Official Presenter · NYLS AI&Data 2026" + Playfair title "AI & Data for the Legal Profession" + description paragraph
- Right: Meta info box (gold tint border): 📅 When: September 2026 · 🏛️ Where: New York Law School · 🎤 Role: Presenter & Sponsor · 🤖 Topic: AI + Data Governance · 🔗 Demo: Vera Live · Claude for Law

**Speaker grid (4 cards, auto-fit, text centered):**
1. ⚖️ SavvyLex Legal AI — Vera Platform Demo / Claude for Law Architecture
2. 📊 Data & Governance Track — BYOK · ZDR · Audit Trails / Legal Data Residency
3. 🤖 Agentic Workflows — LexAgents Live Demo / MCP Connector Architecture
4. 🎓 Legal Education Track — AI for Law Students / Curriculum Integration

**Presentation topics box** (gold-tint bg, gold border):
✦ Live Vera demo — real legal AI in action · ✦ BYOK architecture for law firms · ✦ Data governance & ZDR deep dive · ✦ LexAgents: agentic legal workflows · ✦ ABA professional responsibility framework · ✦ AI for legal education & clinics

**Sponsor row** (border-top): Presenting at: 🏛️ NYLS AI&Data 2026 · 🤖 Claude for Law · ⚖️ SavvyLex · 🔒 Anthropic Enterprise + ZDR

---

#### 10. CTA BAND (navy gradient, full-width, grid overlay)
- NYLS badge pill
- Playfair heading: "Let's Talk at NYLS."
- Sub-copy: "Whether you're a student exploring AI in law, an attorney evaluating legal tech, or a faculty member building AI curriculum — Vera was built for this moment. Come find us."
- **3 clickable option cards** (auto-fit, dark bg, border, hover lifts + gold border):
  1. 🤝 Meet at the Event → opens modal (event type)
  2. 💻 Book a Demo → opens modal (demo type)
  3. 📋 Get Pricing → opens modal (pricing type)
- Two buttons: Gold "✦ Try Vera Live Now" (scrolls to #demo) + Ghost "Connect at NYLS →" (opens modal)

---

#### 11. FOOTER (background: #060d1c)
- "© 2026 SavvyLex · Vera for Legal · Presented at NYLS AI&Data 2026 · Powered by Claude for Law · Privacy · Terms"
- Disclaimer: "All Vera outputs require attorney review before use in any legal matter. Not a substitute for legal advice. SavvyLex is a configuration and delivery layer for Anthropic's Claude models."

---

#### 12. CONTACT MODAL (fixed overlay, blur backdrop)
Triggers from "Book a Demo ✦", "Connect at NYLS →", and the 3 CTA option cards. Modal title and subtitle update based on which trigger fired (event / demo / pricing).

**Modal content:**
- Navy gradient header: dynamic title + subtitle + ✕ close button
- Body:
  - Role chips: In-House Counsel · Law Firm Attorney · Law Student · Faculty / Researcher · Other (click to select, navy bg when selected)
  - Form fields: First Name + Last Name (2-col) · Work/School Email · Firm/Organization/School · Dropdown "What are you most interested in?" (options: Live Vera Demo at NYLS / Private Demo for My Firm / Pricing Information / Data Governance Deep Dive / AI + Legal Education / Speaking / Partnership) · Message textarea (optional)
  - Gold "Send to SavvyLex →" submit button
  - On submit: open `mailto:hello@savvylex.com` with pre-filled subject and body, then show success state
- Success state: ✅ emoji + "See You at NYLS!" heading + "A SavvyLex advisor will reach out to [email] before September..." + "Back to Vera →" button
- Close on: ✕ button, click outside, Escape key

---

### BEHAVIOR & INTERACTIVITY

- **Scroll behavior:** `html { scroll-behavior: smooth }` — all anchor links smooth-scroll
- **Scenario switching:** Clicking a chip clears the chat body, updates the meta bar labels, and re-renders that scenario's conversation with staggered 120ms delays per message
- **Message rendering:** Parse `\n` as `<br/>`, render HTML tags (strong, ul, li, div.alert-box) inside message bubbles
- **Chat input:** Auto-grows up to 110px height · Enter sends (Shift+Enter = newline) · Disables send button while waiting · Shows typing indicator 1.4–2.2s then shows fallback response · Cycles through 7 fallback responses
- **Nav pill:** Hide on screens ≤ 640px
- **Responsive:** Comparison grid stacks to 1 column at ≤ 900px · Form 2-col stacks to 1 column at ≤ 640px · Chat body reduces to 360px height at ≤ 640px

---

### APP SETTINGS

- **App name:** Vera — NYLS AI&Data 2026
- **Visibility:** Public (no login required)
- **Single page:** Yes — all content on one scrollable page
- **No database or entities required** — purely static/interactive HTML
- **No authentication** — fully public marketing page
- **Page title:** `Vera at NYLS AI&Data 2026 — SavvyLex`
- **Favicon:** ⚖️

---

### REFERENCE

The live version of this page is at: **https://vera-2b166274.base44.app/functions/nylsDemo**

Use it as the visual and functional reference. The Base44 app version should be pixel-identical to that page, implemented as a proper Base44 application with a single custom page containing all the HTML, CSS, and JavaScript inline.
