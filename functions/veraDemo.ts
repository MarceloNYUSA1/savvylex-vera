import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  if (req.method === 'GET') {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vera — The Easiest Way to Use Claude for Law</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy:       #0c1a35;
      --navy-mid:   #152544;
      --navy-light: #1e3460;
      --gold:       #c9a84c;
      --gold-light: #e8c97a;
      --gold-pale:  #fdf6e3;
      --cream:      #f8f7f4;
      --white:      #ffffff;
      --g50:        #f9fafb;
      --g100:       #f3f4f6;
      --g200:       #e5e7eb;
      --g300:       #d1d5db;
      --g400:       #9ca3af;
      --g600:       #4b5563;
      --g800:       #1f2937;
      --green:      #059669;
      --red:        #dc2626;
      --amber:      #d97706;
      --r:          14px;
      --rl:         22px;
      --sh-sm:      0 1px 4px rgba(0,0,0,.07);
      --sh-md:      0 4px 18px rgba(0,0,0,.10);
      --sh-lg:      0 10px 36px rgba(0,0,0,.13);
      --sh-xl:      0 20px 64px rgba(0,0,0,.17);
    }

    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--cream);
      color: var(--g800);
      overflow-x: hidden;
    }

    /* ════════════════════════════════════ NAV */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(12,26,53,.92);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,.07);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 48px; height: 64px;
    }
    .nav-logo { display: flex; align-items: center; gap: 11px; text-decoration: none; }
    .nav-logo-mark {
      width: 36px; height: 36px; border-radius: 9px;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; box-shadow: 0 3px 10px rgba(201,168,76,.35);
    }
    .nav-logo-name {
      font-family: 'Playfair Display', serif;
      font-size: 18px; font-weight: 700; color: #fff; line-height: 1;
    }
    .nav-logo-sub { font-size: 10px; color: var(--gold-light); letter-spacing: .1em; text-transform: uppercase; margin-top: 2px; }
    .nav-pill {
      display: flex; align-items: center; gap: 7px;
      background: rgba(255,255,255,.07);
      border: 1px solid rgba(255,255,255,.11);
      border-radius: 100px; padding: 6px 14px;
      font-size: 12px; color: rgba(255,255,255,.75);
    }
    .nav-pill-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: #22c55e; box-shadow: 0 0 7px rgba(34,197,94,.6);
      animation: blink 2s infinite;
    }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.4} }

    .nav-cta {
      display: inline-flex; align-items: center; gap: 8px;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      color: var(--navy); font-weight: 700; font-size: 13px;
      padding: 9px 20px; border-radius: 100px; border: none;
      cursor: pointer; text-decoration: none;
      box-shadow: 0 3px 12px rgba(201,168,76,.35);
      transition: all .2s;
    }
    .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(201,168,76,.45); }

    /* ════════════════════════════════════ HERO */
    .hero {
      min-height: 100vh; padding-top: 64px;
      background: linear-gradient(160deg, var(--navy) 0%, var(--navy-mid) 55%, #1b3060 100%);
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; text-align: center;
      position: relative; overflow: hidden;
    }
    .hero-glow {
      position: absolute; width: 700px; height: 700px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(201,168,76,.09) 0%, transparent 70%);
      top: 50%; left: 50%; transform: translate(-50%,-60%);
      pointer-events: none;
    }
    .hero-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
      background-size: 56px 56px; pointer-events: none;
    }
    .hero-inner {
      position: relative; z-index: 2;
      padding: 60px 24px 80px; max-width: 860px;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      border: 1px solid rgba(201,168,76,.35);
      background: rgba(201,168,76,.08);
      border-radius: 100px; padding: 6px 16px;
      font-size: 12px; font-weight: 600; color: var(--gold-light);
      letter-spacing: .09em; text-transform: uppercase; margin-bottom: 32px;
    }
    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(44px, 7vw, 80px);
      font-weight: 700; line-height: 1.08; color: #fff; margin-bottom: 12px;
    }
    .hero-title .accent {
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-tagline {
      font-family: 'Playfair Display', serif;
      font-size: clamp(18px, 2.5vw, 26px);
      font-style: italic; color: rgba(255,255,255,.55);
      margin-bottom: 24px; line-height: 1.4;
    }
    .hero-sub {
      font-size: clamp(15px, 1.8vw, 18px);
      color: rgba(255,255,255,.55); line-height: 1.75;
      max-width: 620px; margin: 0 auto 44px;
    }
    .hero-sub strong { color: rgba(255,255,255,.85); font-weight: 600; }
    .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 64px; }
    .btn-gold {
      display: inline-flex; align-items: center; gap: 9px;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      color: var(--navy); font-weight: 700; font-size: 15px;
      padding: 15px 30px; border-radius: 100px; border: none;
      cursor: pointer; text-decoration: none;
      box-shadow: 0 5px 22px rgba(201,168,76,.4); transition: all .2s;
    }
    .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 9px 30px rgba(201,168,76,.5); }
    .btn-ghost {
      display: inline-flex; align-items: center; gap: 9px;
      background: rgba(255,255,255,.07); color: #fff;
      font-weight: 600; font-size: 15px;
      padding: 15px 30px; border-radius: 100px;
      border: 1px solid rgba(255,255,255,.14);
      cursor: pointer; text-decoration: none; transition: all .2s;
    }
    .btn-ghost:hover { background: rgba(255,255,255,.13); }

    /* ─ stat strip */
    .hero-stats {
      display: flex; gap: 0; border-top: 1px solid rgba(255,255,255,.08);
      padding-top: 40px; justify-content: center; flex-wrap: wrap;
    }
    .stat {
      padding: 0 40px; text-align: center;
      border-right: 1px solid rgba(255,255,255,.08);
    }
    .stat:last-child { border-right: none; }
    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 34px; font-weight: 700; color: var(--gold-light); line-height: 1;
    }
    .stat-label { font-size: 12px; color: rgba(255,255,255,.4); margin-top: 5px; letter-spacing: .04em; }

    /* ════════════════════════════════════ VALUE PROP STRIP */
    .strip {
      background: var(--navy-mid);
      border-top: 1px solid rgba(255,255,255,.06);
      border-bottom: 1px solid rgba(255,255,255,.06);
      padding: 20px 48px;
      display: flex; align-items: center; justify-content: center;
      gap: 40px; flex-wrap: wrap;
    }
    .strip-item {
      display: flex; align-items: center; gap: 9px;
      font-size: 13px; color: rgba(255,255,255,.55);
    }
    .strip-item span { color: var(--gold); font-size: 15px; }

    /* ════════════════════════════════════ SECTION WRAPPER */
    .sec { padding: 88px 24px; }
    .sec-inner { max-width: 1120px; margin: 0 auto; }
    .sec-hd { text-align: center; margin-bottom: 60px; }
    .sec-eye {
      display: inline-block; font-size: 11px; font-weight: 700;
      letter-spacing: .12em; text-transform: uppercase;
      color: var(--gold); margin-bottom: 12px;
    }
    .sec-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(30px, 4vw, 46px); font-weight: 700;
      color: var(--navy); line-height: 1.18; margin-bottom: 16px;
    }
    .sec-sub {
      font-size: 17px; color: var(--g600);
      max-width: 560px; margin: 0 auto; line-height: 1.75;
    }

    /* ════════════════════════════════════ HOW IT WORKS */
    .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2px; }
    .step {
      background: #fff; padding: 40px 32px; position: relative;
      border: 1px solid var(--g200); transition: box-shadow .2s;
    }
    .step:first-child { border-radius: var(--r) 0 0 var(--r); }
    .step:last-child  { border-radius: 0 var(--r) var(--r) 0; }
    .step:hover { box-shadow: var(--sh-md); z-index: 1; }
    .step-num {
      font-family: 'Playfair Display', serif;
      font-size: 48px; font-weight: 700;
      color: rgba(201,168,76,.18); line-height: 1; margin-bottom: 16px;
    }
    .step-icon { font-size: 28px; margin-bottom: 14px; }
    .step-title { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 9px; }
    .step-desc { font-size: 13.5px; color: var(--g600); line-height: 1.65; }

    /* ════════════════════════════════════ DEMO SECTION */
    .demo-sec { background: var(--g50); }
    .scenario-row {
      display: flex; gap: 16px; margin-bottom: 32px;
      overflow-x: auto; padding-bottom: 4px;
      scrollbar-width: none;
    }
    .scenario-row::-webkit-scrollbar { display: none; }
    .sc-chip {
      flex-shrink: 0;
      display: flex; align-items: center; gap: 8px;
      background: #fff; border: 2px solid var(--g200);
      border-radius: 100px; padding: 9px 18px;
      font-size: 13px; font-weight: 600; color: var(--g600);
      cursor: pointer; transition: all .2s; white-space: nowrap;
    }
    .sc-chip:hover { border-color: var(--navy); color: var(--navy); }
    .sc-chip.active {
      background: var(--navy); border-color: var(--navy);
      color: #fff; box-shadow: var(--sh-sm);
    }
    .sc-chip .chip-icon { font-size: 15px; }

    /* chat shell */
    .chat-shell {
      background: #fff; border-radius: var(--rl);
      box-shadow: var(--sh-xl); overflow: hidden;
      border: 1px solid var(--g200);
    }
    .chat-topbar {
      background: linear-gradient(135deg, var(--navy), var(--navy-light));
      padding: 18px 28px; display: flex; align-items: center; justify-content: space-between;
    }
    .chat-identity { display: flex; align-items: center; gap: 13px; }
    .chat-ava {
      width: 42px; height: 42px; border-radius: 50%;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      display: flex; align-items: center; justify-content: center;
      font-size: 20px; box-shadow: 0 2px 10px rgba(201,168,76,.4); flex-shrink: 0;
    }
    .chat-name { font-size: 14px; font-weight: 700; color: #fff; }
    .chat-desc { font-size: 11.5px; color: rgba(255,255,255,.5); margin-top: 1px; }
    .chat-badges { display: flex; gap: 8px; }
    .chat-badge {
      display: flex; align-items: center; gap: 5px;
      background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.11);
      border-radius: 100px; padding: 4px 11px;
      font-size: 11px; color: rgba(255,255,255,.7);
    }
    .chat-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: blink 2s infinite; }

    .chat-meta {
      background: var(--g50); border-bottom: 1px solid var(--g200);
      padding: 9px 28px; display: flex; gap: 18px; flex-wrap: wrap;
      font-size: 11.5px; color: var(--g600);
    }
    .chat-meta-item { display: flex; align-items: center; gap: 5px; }
    .chat-meta-item strong { color: var(--navy); font-weight: 600; }
    .chat-meta-sep { width: 1px; height: 13px; background: var(--g300); align-self: center; }

    .chat-warn {
      background: rgba(201,168,76,.07);
      border-bottom: 1px solid rgba(201,168,76,.22);
      padding: 7px 28px; font-size: 11px; color: #7a5c1a;
      display: flex; align-items: center; gap: 6px;
    }

    .chat-body {
      height: 460px; overflow-y: auto;
      padding: 28px; display: flex; flex-direction: column; gap: 18px;
      scroll-behavior: smooth;
    }
    .chat-body::-webkit-scrollbar { width: 3px; }
    .chat-body::-webkit-scrollbar-thumb { background: var(--g200); border-radius: 2px; }

    .msg { display: flex; gap: 11px; max-width: 90%; animation: pop .28s ease; }
    @keyframes pop { from{opacity:0;transform:translateY(7px)} to{opacity:1;transform:none} }
    .msg.u { align-self: flex-end; flex-direction: row-reverse; }

    .msg-av {
      width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; margin-top: 3px;
    }
    .msg.v .msg-av { background: linear-gradient(135deg,var(--gold),var(--gold-light)); }
    .msg.u .msg-av { background: linear-gradient(135deg,var(--navy),var(--navy-light)); color:#fff; font-size:11px; font-weight:700; }

    .msg-bub {
      padding: 13px 17px; border-radius: 17px;
      font-size: 13.5px; line-height: 1.68;
    }
    .msg.v .msg-bub {
      background: var(--g50); border: 1px solid var(--g200);
      border-top-left-radius: 4px; color: var(--g800);
    }
    .msg.u .msg-bub {
      background: linear-gradient(135deg,var(--navy),var(--navy-light));
      color:#fff; border-top-right-radius: 4px;
    }
    .msg-bub strong { font-weight: 600; color: var(--navy); }
    .msg.u .msg-bub strong { color: var(--gold-light); }
    .msg-bub ul { margin: 8px 0 4px 16px; }
    .msg-bub li { margin-bottom: 5px; }
    .msg-bub em { font-style: italic; }

    .alert-box {
      display: flex; align-items: flex-start; gap: 9px;
      border-radius: 6px; padding: 9px 13px; margin-top: 11px;
      font-size: 12.5px;
    }
    .alert-box.warn { background: rgba(220,38,38,.05); border-left: 3px solid var(--red); color: #7f1d1d; }
    .alert-box.ok   { background: rgba(5,150,105,.05); border-left: 3px solid var(--green); color: #064e3b; }
    .alert-box.info { background: rgba(201,168,76,.08); border-left: 3px solid var(--gold); color: #78450a; }

    .tag-inline {
      display: inline-block; background: rgba(201,168,76,.13);
      color: #7a5c1a; font-size: 11px; font-weight: 600;
      padding: 2px 8px; border-radius: 4px; margin: 1px 2px;
    }

    /* typing */
    .typing { display: flex; gap: 11px; align-items: flex-end; }
    .typing-av {
      width: 30px; height: 30px; border-radius: 50%;
      background: linear-gradient(135deg,var(--gold),var(--gold-light));
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; flex-shrink: 0;
    }
    .typing-bub {
      background: var(--g50); border: 1px solid var(--g200);
      border-radius: 17px; border-bottom-left-radius: 4px;
      padding: 13px 17px; display: flex; gap: 5px; align-items: center;
    }
    .td {
      width: 7px; height: 7px; border-radius: 50%; background: var(--g400);
      animation: bounce 1.1s infinite;
    }
    .td:nth-child(2){animation-delay:.18s}.td:nth-child(3){animation-delay:.36s}
    @keyframes bounce{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(-5px);opacity:1}}

    /* input */
    .chat-foot { border-top: 1px solid var(--g200); padding: 14px 20px; background: #fff; }
    .chat-foot-row { display: flex; gap: 9px; align-items: flex-end; }
    .chat-inp {
      flex: 1; border: 1.5px solid var(--g200); border-radius: 11px;
      padding: 11px 15px; font-size: 13.5px; font-family: inherit;
      resize: none; outline: none; background: var(--g50);
      color: var(--g800); min-height: 44px; max-height: 110px;
      transition: border-color .2s;
    }
    .chat-inp:focus { border-color: var(--navy); background: #fff; }
    .chat-inp::placeholder { color: var(--g400); }
    .send {
      width: 44px; height: 44px; border-radius: 11px; flex-shrink: 0;
      background: linear-gradient(135deg,var(--navy),var(--navy-light));
      border: none; cursor: pointer; color: #fff; font-size: 17px;
      display: flex; align-items: center; justify-content: center;
      transition: all .2s;
    }
    .send:hover { transform: scale(1.06); box-shadow: 0 4px 14px rgba(15,30,60,.3); }
    .send:disabled { opacity: .45; cursor: not-allowed; transform: none; }
    .chat-note { font-size: 11px; color: var(--g400); text-align: center; margin-top: 9px; }

    /* ════════════════════════════════════ COMPARISON */
    .cmp-sec { background: var(--navy); }
    .cmp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .cmp-card {
      border-radius: var(--rl); padding: 36px 32px; position: relative;
    }
    .cmp-card.other {
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.09);
    }
    .cmp-card.vera {
      background: linear-gradient(135deg, rgba(201,168,76,.12), rgba(201,168,76,.06));
      border: 1px solid rgba(201,168,76,.3);
    }
    .cmp-label {
      font-size: 11px; font-weight: 700; letter-spacing: .1em;
      text-transform: uppercase; margin-bottom: 10px;
    }
    .cmp-card.other .cmp-label { color: rgba(255,255,255,.35); }
    .cmp-card.vera  .cmp-label { color: var(--gold); }
    .cmp-name {
      font-family: 'Playfair Display', serif;
      font-size: 26px; font-weight: 700; margin-bottom: 24px; color: #fff;
    }
    .cmp-row {
      display: flex; align-items: flex-start; gap: 11px;
      margin-bottom: 14px; font-size: 13.5px; line-height: 1.55;
    }
    .cmp-row .ic { font-size: 15px; flex-shrink: 0; margin-top: 1px; }
    .cmp-card.other .cmp-row { color: rgba(255,255,255,.45); }
    .cmp-card.vera  .cmp-row { color: rgba(255,255,255,.8); }
    .cmp-best-badge {
      position: absolute; top: -12px; right: 28px;
      background: linear-gradient(135deg,var(--gold),var(--gold-light));
      color: var(--navy); font-size: 11px; font-weight: 800;
      letter-spacing: .07em; text-transform: uppercase;
      padding: 4px 14px; border-radius: 100px;
    }

    /* ════════════════════════════════════ CAPABILITIES */
    .caps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 3px; background: var(--g200); border-radius: var(--rl); overflow: hidden; }
    .cap {
      background: #fff; padding: 32px 28px;
      transition: background .2s;
    }
    .cap:hover { background: var(--g50); }
    .cap-icon { font-size: 26px; margin-bottom: 13px; }
    .cap-title { font-size: 15px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
    .cap-desc { font-size: 13px; color: var(--g600); line-height: 1.65; }

    /* ════════════════════════════════════ PRICING */
    .price-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px,1fr)); gap: 22px; }
    .price-card {
      background: #fff; border: 2px solid var(--g200);
      border-radius: var(--rl); padding: 36px 30px; position: relative;
      transition: all .25s;
    }
    .price-card:hover { transform: translateY(-4px); box-shadow: var(--sh-lg); }
    .price-card.featured { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,168,76,.12), var(--sh-md); }
    .price-badge {
      position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
      background: linear-gradient(135deg,var(--gold),var(--gold-light));
      color: var(--navy); font-size: 10px; font-weight: 800;
      letter-spacing: .08em; text-transform: uppercase;
      padding: 4px 14px; border-radius: 100px;
    }
    .price-tier { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--g400); margin-bottom: 7px; }
    .price-num { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 700; color: var(--navy); line-height: 1; margin-bottom: 4px; }
    .price-num span { font-size: 15px; font-family: 'Inter',sans-serif; font-weight: 500; color: var(--g400); }
    .price-note { font-size: 12.5px; color: var(--g600); margin-bottom: 22px; line-height: 1.5; }
    .price-list { list-style: none; margin-bottom: 26px; }
    .price-list li { display: flex; align-items: flex-start; gap: 9px; font-size: 13px; color: var(--g600); margin-bottom: 9px; line-height: 1.5; }
    .price-list li::before { content: '✓'; color: var(--green); font-weight: 700; flex-shrink: 0; margin-top: 1px; }
    .price-btn {
      width: 100%; padding: 12px; border-radius: 10px;
      font-size: 13.5px; font-weight: 700; cursor: pointer;
      border: 2px solid var(--navy); background: transparent; color: var(--navy);
      transition: all .2s;
    }
    .price-btn:hover { background: var(--navy); color: #fff; }
    .price-card.featured .price-btn {
      background: linear-gradient(135deg,var(--gold),var(--gold-light));
      border-color: transparent; color: var(--navy);
    }
    .price-card.featured .price-btn:hover { box-shadow: 0 4px 16px rgba(201,168,76,.4); transform: translateY(-1px); }

    /* ════════════════════════════════════ CTA BAND */
    .cta-band {
      background: linear-gradient(135deg,var(--navy),var(--navy-light));
      text-align: center; padding: 88px 24px; color: #fff;
    }
    .cta-band h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(32px, 5vw, 54px); font-weight: 700; margin-bottom: 14px;
    }
    .cta-band p { font-size: 17px; color: rgba(255,255,255,.55); max-width: 480px; margin: 0 auto 36px; line-height: 1.75; }
    .cta-group { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

    /* ════════════════════════════════════ FOOTER */
    footer {
      background: #060d1c; color: rgba(255,255,255,.35);
      text-align: center; padding: 32px 24px; font-size: 12.5px;
    }
    footer a { color: var(--gold); text-decoration: none; }

    /* ════════════════════════════════════ RESPONSIVE */

    /* ════════════════════════════════════ CONTACT MODAL */
    .modal-overlay {
      display: none; position: fixed; inset: 0; z-index: 999;
      background: rgba(8,15,30,.75); backdrop-filter: blur(8px);
      align-items: center; justify-content: center; padding: 24px;
    }
    .modal-overlay.open { display: flex; }
    .modal {
      background: #fff; border-radius: var(--rl);
      width: 100%; max-width: 520px;
      box-shadow: var(--sh-xl); overflow: hidden;
      animation: modalIn .28s ease;
    }
    @keyframes modalIn { from{opacity:0;transform:scale(.95)} to{opacity:1;transform:scale(1)} }
    .modal-head {
      background: linear-gradient(135deg, var(--navy), var(--navy-light));
      padding: 28px 32px; display: flex; align-items: flex-start; justify-content: space-between;
    }
    .modal-head h3 { font-family: 'Playfair Display',serif; font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 4px; }
    .modal-head p { font-size: 13px; color: rgba(255,255,255,.55); }
    .modal-close {
      background: rgba(255,255,255,.1); border: none; color: #fff;
      width: 32px; height: 32px; border-radius: 50%; cursor: pointer;
      font-size: 16px; display: flex; align-items: center; justify-content: center;
      transition: background .2s; flex-shrink: 0; margin-left: 16px;
    }
    .modal-close:hover { background: rgba(255,255,255,.2); }
    .modal-body { padding: 32px; }
    .modal-tier-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
    .tier-chip {
      border: 2px solid var(--g200); border-radius: 100px;
      padding: 7px 16px; font-size: 13px; font-weight: 600; color: var(--g600);
      cursor: pointer; transition: all .2s; background: #fff;
    }
    .tier-chip:hover { border-color: var(--navy); color: var(--navy); }
    .tier-chip.selected { background: var(--navy); border-color: var(--navy); color: #fff; }
    .form-row { margin-bottom: 16px; }
    .form-row label { display: block; font-size: 12px; font-weight: 700; color: var(--navy); margin-bottom: 6px; letter-spacing: .03em; text-transform: uppercase; }
    .form-row input, .form-row select, .form-row textarea {
      width: 100%; border: 1.5px solid var(--g200); border-radius: 10px;
      padding: 11px 14px; font-size: 14px; font-family: inherit;
      color: var(--g800); background: var(--g50); outline: none;
      transition: border-color .2s;
    }
    .form-row input:focus, .form-row select:focus, .form-row textarea:focus { border-color: var(--navy); background: #fff; }
    .form-row textarea { resize: none; min-height: 80px; }
    .form-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .modal-submit {
      width: 100%; padding: 14px;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      color: var(--navy); font-weight: 700; font-size: 15px;
      border: none; border-radius: 10px; cursor: pointer;
      box-shadow: 0 4px 16px rgba(201,168,76,.35); transition: all .2s;
      margin-top: 8px;
    }
    .modal-submit:hover { transform: translateY(-1px); box-shadow: 0 7px 22px rgba(201,168,76,.45); }
    .modal-success { display: none; text-align: center; padding: 40px 32px; }
    .modal-success .check { font-size: 48px; margin-bottom: 16px; }
    .modal-success h4 { font-family: 'Playfair Display',serif; font-size: 22px; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
    .modal-success p { font-size: 14px; color: var(--g600); line-height: 1.7; }
    @media(max-width:480px){ .form-2col{grid-template-columns:1fr} }

    @media(max-width:900px){
      .cmp-grid{grid-template-columns:1fr}
      .nav{padding:0 20px}
      .strip{padding:14px 20px; gap:20px}
      .stat{padding:0 20px}
    }
    @media(max-width:640px){
      .nav-pill{display:none}
      .sec{padding:60px 16px}
      .chat-body{height:380px}
      .chat-topbar,.chat-meta,.chat-warn,.chat-foot{padding-left:16px;padding-right:16px}
      .chat-body{padding:18px}
      .hero-stats{gap:0}
      .stat{padding:0 16px}
    }
  </style>
</head>
<body>

<!-- ══════ NAV -->
<nav class="nav">
  <a class="nav-logo" href="#">
    <div class="nav-logo-mark">⚖️</div>
    <div>
      <div class="nav-logo-name">Vera</div>
      <div class="nav-logo-sub">by SavvyLex</div>
    </div>
  </a>
  <div class="nav-pill"><span class="nav-pill-dot"></span>Powered by Claude for Law</div>
  <div style="display:flex;gap:10px;align-items:center">
    <button onclick="openModal('')" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);color:#fff;font-size:13px;font-weight:600;padding:9px 18px;border-radius:100px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.14)'" onmouseout="this.style.background='rgba(255,255,255,.08)'">Contact Sales</button>
    <a href="#demo" class="nav-cta">Try Demo ✦</a>
  </div>
</nav>

<!-- ══════ HERO -->
<section class="hero">
  <div class="hero-glow"></div>
  <div class="hero-grid"></div>
  <div class="hero-inner">
    <div class="hero-badge">✦ Claude for Law — Now Available to Every Firm</div>
    <h1 class="hero-title">
      The <span class="accent">Easiest</span> Way<br/>to Use Claude for Law
    </h1>
    <p class="hero-tagline">Meet Vera — your AI legal companion, built on Claude.</p>
    <p class="hero-sub">
      Claude for Law is the most powerful AI for legal work. <strong>Vera is the interface that makes it effortless.</strong> Tax research, contract review, IRS responses, client intake — all in one place, privilege-protected, attorney-ready.
    </p>
    <div class="hero-btns">
      <a href="#demo" class="btn-gold">✦ Try Vera Live →</a>
      <a href="#how" class="btn-ghost">See How It Works</a>
    </div>
    <div class="hero-stats">
      <div class="stat"><div class="stat-num">2 min</div><div class="stat-label">Average setup time</div></div>
      <div class="stat"><div class="stat-num">BYOK</div><div class="stat-label">Your key, your data</div></div>
      <div class="stat"><div class="stat-num">ZDR</div><div class="stat-label">Zero data retention</div></div>
      <div class="stat"><div class="stat-num">100%</div><div class="stat-label">Attorney-in-the-loop</div></div>
    </div>
  </div>
</section>

<!-- ══════ STRIP -->
<div class="strip">
  <div class="strip-item"><span>🔒</span> Attorney-Client Privilege Protected</div>
  <div class="strip-item"><span>🏛️</span> BYOK Architecture</div>
  <div class="strip-item"><span>✓</span> Zero Data Retention</div>
  <div class="strip-item"><span>⚖️</span> Bar-Compliant AI Disclosures</div>
  <div class="strip-item"><span>🔗</span> MCP Connector Orchestration</div>
  <div class="strip-item"><span>🛡️</span> Enterprise + ZDR Required</div>
</div>

<!-- ══════ HOW IT WORKS -->
<section class="sec" id="how">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye">How It Works</div>
      <h2 class="sec-title">Claude for Law, Configured for Your Firm</h2>
      <p class="sec-sub">Vera handles everything between you and Claude — setup, configuration, MCP connectors, and compliance — so you can focus on the work.</p>
    </div>
    <div class="steps">
      <div class="step">
        <div class="step-num">01</div>
        <div class="step-icon">🔑</div>
        <div class="step-title">Bring Your Own Key</div>
        <div class="step-desc">Your firm purchases Anthropic Enterprise + ZDR directly. Vera connects through your key — SavvyLex never touches your data or tokens.</div>
      </div>
      <div class="step">
        <div class="step-num">02</div>
        <div class="step-icon">⚙️</div>
        <div class="step-title">Vera Configures Claude</div>
        <div class="step-desc">SavvyLex loads Vera's tax law system prompt, activates the right Claude for Law plugins, and connects your MCP integrations — all pre-built for legal work.</div>
      </div>
      <div class="step">
        <div class="step-num">03</div>
        <div class="step-icon">⚖️</div>
        <div class="step-title">Your Attorneys Use Vera</div>
        <div class="step-desc">Attorneys open Vera, select a matter, and start working. Research, drafting, contract review — Vera handles it with Claude for Law powering every response.</div>
      </div>
      <div class="step">
        <div class="step-num">04</div>
        <div class="step-icon">✅</div>
        <div class="step-title">Attorney Reviews & Signs Off</div>
        <div class="step-desc">Every Vera output is flagged for attorney review before use. The audit trail logs everything — supporting privilege, bar compliance, and quality control.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══════ DEMO -->
<section class="sec demo-sec" id="demo">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye">Live Demo</div>
      <h2 class="sec-title">See Vera Work a Real Legal Matter</h2>
      <p class="sec-sub">Pick a scenario. Watch Claude for Law — delivered through Vera — handle it. Then ask your own questions.</p>
    </div>

    <!-- scenario chips -->
    <div class="scenario-row" id="scRow">
      <div class="sc-chip active" onclick="pickScenario(0)"><span class="chip-icon">📋</span>IRC §482 Transfer Pricing</div>
      <div class="sc-chip" onclick="pickScenario(1)"><span class="chip-icon">📄</span>NDA Red Flag Review</div>
      <div class="sc-chip" onclick="pickScenario(2)"><span class="chip-icon">✉️</span>New Matter Intake</div>
      <div class="sc-chip" onclick="pickScenario(3)"><span class="chip-icon">⚡</span>IRS CP2000 Response</div>
      <div class="sc-chip" onclick="pickScenario(4)"><span class="chip-icon">🏢</span>M&A Tax Due Diligence</div>
      <div class="sc-chip" onclick="pickScenario(5)"><span class="chip-icon">📅</span>SOL Tracker</div>
    </div>

    <!-- chat shell -->
    <div class="chat-shell">
      <div class="chat-topbar">
        <div class="chat-identity">
          <div class="chat-ava">⚖️</div>
          <div>
            <div class="chat-name">Vera — Claude for Law Interface</div>
            <div class="chat-desc">SavvyLex · Tax Law Specialist · Powered by Anthropic</div>
          </div>
        </div>
        <div class="chat-badges">
          <div class="chat-badge"><span class="chat-badge-dot"></span>Live Demo</div>
          <div class="chat-badge">🔒 ZDR Active</div>
        </div>
      </div>

      <div class="chat-meta" id="chatMeta">
        <div class="chat-meta-item">🏛️ <strong>Matter:</strong>&nbsp;<span id="matterLbl">Alvarez Industries — IRC §482</span></div>
        <div class="chat-meta-sep"></div>
        <div class="chat-meta-item">👤 <strong>Attorney:</strong>&nbsp;M. López, Tax Partner</div>
        <div class="chat-meta-sep"></div>
        <div class="chat-meta-item">📁 <strong>Practice:</strong>&nbsp;<span id="practiceLbl">Tax Controversy</span></div>
        <div class="chat-meta-sep"></div>
        <div class="chat-meta-item">🤖 <strong>Model:</strong>&nbsp;claude-opus-4</div>
      </div>

      <div class="chat-warn">
        ⚠️&nbsp;<strong>Attorney Review Required</strong> — All Vera outputs are AI drafts. A licensed attorney must review before use in any legal matter.
      </div>

      <div class="chat-body" id="chatBody"></div>

      <div class="chat-foot">
        <div class="chat-foot-row">
          <textarea class="chat-inp" id="inp" placeholder="Ask Vera anything about this matter…" rows="1"
            onkeydown="onKey(event)" oninput="grow(this)"></textarea>
          <button class="send" id="sendBtn" onclick="send()">➤</button>
        </div>
        <div class="chat-note">Sandboxed demo — no real client data is processed or retained.</div>
      </div>
    </div>
  </div>
</section>

<!-- ══════ COMPARISON -->
<section class="sec cmp-sec">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye" style="color:var(--gold-light)">Why Vera</div>
      <h2 class="sec-title" style="color:#fff">Claude for Law, the Right Way</h2>
      <p class="sec-sub" style="color:rgba(255,255,255,.5)">Vera isn't a wrapper — it's the configuration, compliance, and delivery layer that makes Claude for Law actually work at your firm.</p>
    </div>
    <div class="cmp-grid">
      <div class="cmp-card other">
        <div class="cmp-label">Without Vera</div>
        <div class="cmp-name">Raw Claude API</div>
        <div class="cmp-row"><span class="ic">✗</span>Hours of prompt engineering to get legal-grade output</div>
        <div class="cmp-row"><span class="ic">✗</span>No MCP connector setup — you build every integration</div>
        <div class="cmp-row"><span class="ic">✗</span>No matter context — Claude doesn't know your clients</div>
        <div class="cmp-row"><span class="ic">✗</span>No audit trail — privilege and bar compliance on you</div>
        <div class="cmp-row"><span class="ic">✗</span>No attorney review workflow — outputs go straight to use</div>
        <div class="cmp-row"><span class="ic">✗</span>No tax law specialization — generic legal responses</div>
        <div class="cmp-row"><span class="ic">✗</span>No onboarding, training, or support for your attorneys</div>
      </div>
      <div class="cmp-card vera">
        <div class="cmp-best-badge">Recommended</div>
        <div class="cmp-label">With Vera</div>
        <div class="cmp-name">Claude for Law via Vera</div>
        <div class="cmp-row"><span class="ic">✓</span>Tax law system prompt pre-configured — works on day one</div>
        <div class="cmp-row"><span class="ic">✓</span>MCP connectors pre-built: Westlaw, iManage, DocuSign, M365</div>
        <div class="cmp-row"><span class="ic">✓</span>Full client/matter context loaded before every session</div>
        <div class="cmp-row"><span class="ic">✓</span>Automatic audit log per matter — privilege-safe by design</div>
        <div class="cmp-row"><span class="ic">✓</span>Attorney review gate on every output — built in, not optional</div>
        <div class="cmp-row"><span class="ic">✓</span>Tax controversy, M&A, regulatory specialization out of the box</div>
        <div class="cmp-row"><span class="ic">✓</span>White-glove onboarding + SkillBuilder training for every attorney</div>
      </div>
    </div>
  </div>
</section>

<!-- ══════ CAPABILITIES -->
<section class="sec">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye">Capabilities</div>
      <h2 class="sec-title">Everything Claude for Law Can Do — Through Vera</h2>
      <p class="sec-sub">Every Claude for Law capability, configured for tax practices and delivered through an interface attorneys actually want to use.</p>
    </div>
    <div class="caps-grid">
      <div class="cap"><div class="cap-icon">🔍</div><div class="cap-title">Tax Law Research</div><div class="cap-desc">IRC, Treasury Regulations, IRS guidance, Tax Court opinions — Vera searches and synthesizes with full citations via Westlaw MCP.</div></div>
      <div class="cap"><div class="cap-icon">📝</div><div class="cap-title">Document Drafting</div><div class="cap-desc">Tax memos, engagement letters, demand letters — drafted in your firm's format with Issue / Analysis / Conclusion structure.</div></div>
      <div class="cap"><div class="cap-icon">🔎</div><div class="cap-title">Contract Review</div><div class="cap-desc">Red flag analysis, missing clause detection, risk scoring — Vera reviews clause by clause against your firm's playbook.</div></div>
      <div class="cap"><div class="cap-icon">⚡</div><div class="cap-title">IRS Controversy</div><div class="cap-desc">CP2000 responses, exam strategy, penalty abatement arguments — Vera drafts with cited authority, attorney reviews and signs.</div></div>
      <div class="cap"><div class="cap-icon">📅</div><div class="cap-title">Deadline Tracking</div><div class="cap-desc">SOL periods, filing deadlines, IRS response windows — tracked automatically across all active matters with alerts.</div></div>
      <div class="cap"><div class="cap-icon">🏢</div><div class="cap-title">M&A Tax DD</div><div class="cap-desc">Due diligence checklists, §382 NOL analysis, deal structure considerations — generated and tailored to each acquisition target.</div></div>
      <div class="cap"><div class="cap-icon">✉️</div><div class="cap-title">Client Intake</div><div class="cap-desc">Matter intake, conflicts check, engagement letter drafting — Vera captures it all and queues attorney review automatically.</div></div>
      <div class="cap"><div class="cap-icon">🔗</div><div class="cap-title">MCP Integrations</div><div class="cap-desc">Westlaw, iManage, DocuSign, Microsoft 365 — pre-configured MCP connectors that plug into Claude for Law out of the box.</div></div>
    </div>
  </div>
</section>

<!-- ══════ PRICING -->
<section class="sec" style="background:var(--g50)" id="pricing">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye">Pricing</div>
      <h2 class="sec-title">Pay for Configuration. Not for Claude.</h2>
      <p class="sec-sub">SavvyLex charges for the Vera configuration layer — never for Claude tokens. You pay Anthropic directly. Contact us for a custom quote for your firm.</p>
    </div>
    <div class="price-grid">
      <div class="price-card">
        <div class="price-tier">Solo / Boutique</div>
        <div class="price-num" style="font-size:26px;line-height:1.2;margin-bottom:10px">Up to 5 Attorneys</div>
        <div class="price-note">For tax boutiques and solo practitioners ready to deploy Claude for Law.</div>
        <ul class="price-list">
          <li>Vera persona + tax law system prompt</li>
          <li>3 MCP connectors (DocuSign, M365, CourtListener)</li>
          <li>Document template library</li>
          <li>Deadline & docket tracking</li>
          <li>Audit trail per matter</li>
          <li>Email support</li>
        </ul>
        <button class="price-btn" onclick="openModal('Solo / Boutique')">Contact SavvyLex for Pricing →</button>
      </div>
      <div class="price-card featured">
        <div class="price-badge">Most Popular</div>
        <div class="price-tier">Growth Firm</div>
        <div class="price-num" style="font-size:26px;line-height:1.2;margin-bottom:10px">6–50 Attorneys</div>
        <div class="price-note">Full MCP suite, SkillBuilder, and LexAgents for growing tax practices.</div>
        <ul class="price-list">
          <li>Everything in Solo, plus:</li>
          <li>Full MCP suite: Westlaw, iManage, Ironclad</li>
          <li>Microsoft 365 Word + Outlook add-in</li>
          <li>SkillBuilder attorney training module</li>
          <li>LexAgents agentic workflows</li>
          <li>Dedicated onboarding + priority support</li>
        </ul>
        <button class="price-btn" onclick="openModal('Growth Firm')">Contact SavvyLex for Pricing →</button>
      </div>
      <div class="price-card">
        <div class="price-tier">Enterprise</div>
        <div class="price-num" style="font-size:26px;line-height:1.2;margin-bottom:10px">50+ Attorneys</div>
        <div class="price-note">Custom configuration for large firms and in-house legal teams.</div>
        <ul class="price-list">
          <li>Everything in Growth, plus:</li>
          <li>Custom MCP connector development</li>
          <li>White-label Vera branding</li>
          <li>SSO / SCIM + custom data residency</li>
          <li>SLA guarantee + dedicated implementation team</li>
        </ul>
        <button class="price-btn" onclick="openModal('Enterprise')">Contact SavvyLex for Pricing →</button>
      </div>
    </div>
    <p style="text-align:center;margin-top:26px;font-size:12.5px;color:var(--g400)">
      + One-time implementation fee · Anthropic Enterprise purchased directly (~$50K+/yr) · <em>Significantly less than Harvey AI (~$120–144K/yr for 10 seats)</em>
    </p>
  </div>
</section>

<!-- ══════ CONTACT MODAL -->
<div class="modal-overlay" id="modalOverlay" onclick="closeModalOutside(event)">
  <div class="modal" id="modal">
    <div class="modal-head">
      <div>
        <h3>Contact SavvyLex</h3>
        <p>Tell us about your firm — we'll send a custom quote within 1 business day.</p>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body" id="modalForm">
      <div style="margin-bottom:20px">
        <div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:10px;letter-spacing:.03em;text-transform:uppercase">I'm interested in</div>
        <div class="modal-tier-chips">
          <button class="tier-chip" onclick="selectTier(this,'Solo / Boutique')">Solo / Boutique</button>
          <button class="tier-chip" onclick="selectTier(this,'Growth Firm')">Growth Firm</button>
          <button class="tier-chip" onclick="selectTier(this,'Enterprise')">Enterprise</button>
          <button class="tier-chip" onclick="selectTier(this,'Not sure yet')">Not sure yet</button>
        </div>
      </div>
      <div class="form-2col">
        <div class="form-row"><label>First Name</label><input type="text" id="fName" placeholder="Maria" /></div>
        <div class="form-row"><label>Last Name</label><input type="text" id="lName" placeholder="López" /></div>
      </div>
      <div class="form-row"><label>Work Email</label><input type="email" id="fEmail" placeholder="maria@yourfirm.com" /></div>
      <div class="form-2col">
        <div class="form-row"><label>Firm Name</label><input type="text" id="fFirm" placeholder="López & Associates" /></div>
        <div class="form-row">
          <label>Number of Attorneys</label>
          <select id="fSize"><option value="">Select...</option><option>1–5</option><option>6–15</option><option>16–50</option><option>51–100</option><option>100+</option></select>
        </div>
      </div>
      <div class="form-row">
        <label>Primary Practice Area</label>
        <select id="fPractice"><option value="">Select...</option><option>Tax Controversy</option><option>Corporate / M&A Tax</option><option>In-House Tax Department</option><option>Full-Service Firm (Tax Group)</option><option>Other</option></select>
      </div>
      <div class="form-row">
        <label>Anything else? (optional)</label>
        <textarea id="fNote" placeholder="Current AI setup, specific needs, or timeline…"></textarea>
      </div>
      <button class="modal-submit" onclick="submitForm()">Send to SavvyLex →</button>
      <p style="font-size:11px;color:var(--g400);text-align:center;margin-top:12px">We respond within 1 business day. No spam, ever.</p>
    </div>
    <div class="modal-success" id="modalSuccess" style="display:none">
      <div class="check">✅</div>
      <h4>Message Sent!</h4>
      <p>Thank you — a SavvyLex advisor will reach out to <span id="successEmail" style="font-weight:600;color:var(--navy)"></span> within 1 business day with a custom pricing proposal.</p>
      <button class="btn-gold" style="margin-top:24px" onclick="closeModal()">Back to Demo →</button>
    </div>
  </div>
</div>

<!-- ══════ CTA -->
<section class="cta-band">
  <h2>Ready to Put Claude for Law<br/>to Work at Your Firm?</h2>
  <p>Vera is the fastest path from zero to a fully configured Claude for Law deployment — privilege-protected, bar-compliant, and live in days.</p>
  <div class="cta-group">
    <a href="#demo" class="btn-gold">✦ Try Vera Live</a>
    <button onclick="openModal('')" class="btn-ghost">Contact SavvyLex →</button>
  </div>
</section>

<!-- ══════ FOOTER -->
<footer>
  <p>© 2026 SavvyLex · Vera for Legal · Powered by <a href="#">Claude for Law</a> · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  <p style="margin-top:7px">All Vera outputs require attorney review before use in any legal matter. Not a substitute for legal advice.</p>
</footer>

<script>
// ── SCENARIOS ─────────────────────────────────────────────────
const SC = [
  {
    matter:"Alvarez Industries — IRC §482 Transfer Pricing", practice:"Tax Controversy",
    convo:[
      {r:"v", t:"Good morning. I have the Alvarez Industries matter loaded — potential IRC §482 exposure on intercompany pricing with their Mexican subsidiary. What would you like to tackle first?"},
      {r:"u", t:"Give me the §482 transfer pricing risk overview and what the IRS is most likely to challenge."},
      {r:"v", t:"Here's the §482 landscape for Alvarez:\n\n<strong>Core Rule:</strong> IRC §482 authorizes the IRS to reallocate income between controlled entities to reflect arm's-length pricing. The benchmark is the <strong>Comparable Uncontrolled Price (CUP) method</strong> or Best Method Rule under Treas. Reg. §1.482-1(c).\n\n<strong>IRS Audit Focus Areas:</strong>\n<ul><li><strong>Services charges</strong> — U.S. parent to Mexican sub, likely subject to Services Cost Method (Reg. §1.482-9(b))</li><li><strong>IP licensing</strong> — highest risk; IRS compares royalty rates to market comparables</li><li><strong>Intercompany loans</strong> — IRS applies Applicable Federal Rate (AFR) as a floor</li></ul>\n\n<strong>Penalty Exposure:</strong> Without contemporaneous documentation under Reg. §1.6662-6(d), Alvarez faces a 20% accuracy-related penalty — 40% if gross underpayment. Documentation shield is the immediate priority.\n\n<div class='alert-box warn'>⚠️ <div><strong>Action Required:</strong> Confirm whether Alvarez has a transfer pricing study on file. If not, this is a critical gap before any IRS contact.</div></div>"}
    ]
  },
  {
    matter:"Meridian Tech — NDA Red Flag Analysis", practice:"Corporate",
    convo:[
      {r:"v", t:"I have the Meridian Tech NDA loaded. This is a one-way NDA in favor of the disclosing party. Ready to walk through the red flags?"},
      {r:"u", t:"Yes — top issues and missing provisions, please."},
      {r:"v", t:"<strong>Red Flags Identified:</strong>\n<ul><li><strong>Clause 4 — Confidential Information:</strong> Overly broad — captures oral disclosures without a written confirmation requirement. Creates enforcement risk.</li><li><strong>Clause 7 — Term:</strong> 2-year confidentiality period is below market for tech M&A (standard is 3–5 years).</li><li><strong>Clause 9 — Residuals:</strong> Allows receiving party to use retained information without restriction. This carve-out effectively swallows the NDA.</li></ul>\n\n<strong>Missing Provisions:</strong>\n<ul><li>No <strong>non-solicitation</strong> of employees or customers</li><li>No <strong>injunctive relief</strong> clause (allows immediate court action for breach)</li><li>No <strong>governing law / jurisdiction</strong> specified</li><li>No <strong>data security standard</strong> for electronic disclosures</li></ul>\n\n<div class='alert-box warn'>⚠️ <div><strong>Residuals Clause (§9) — highest priority.</strong> Recommend striking entirely or limiting to information independently developed without reference to disclosed materials.</div></div>"}
    ]
  },
  {
    matter:"New Matter — Rivera Holdings LLC", practice:"Client Intake",
    convo:[
      {r:"v", t:"New matter intake initiated. I'll capture the key information and run a preliminary conflicts check. What's the client and matter overview?"},
      {r:"u", t:"New client — Rivera Holdings LLC. IRS audit on 2022 and 2023 returns. Tax controversy. Referral from Torres & Associates."},
      {r:"v", t:"<strong>Matter Summary — Rivera Holdings LLC</strong>\n<ul><li><strong>Client:</strong> Rivera Holdings LLC</li><li><strong>Matter Type:</strong> IRS Examination — Tax Controversy</li><li><strong>Tax Years:</strong> 2022, 2023</li><li><strong>Referral:</strong> Torres & Associates</li><li><strong>Practice Area:</strong> Tax Controversy</li></ul>\n\n<strong>Conflicts Check:</strong>\n<div class='alert-box ok'>✓ <div>No conflicts found in current client database. Confirm ultimate beneficial ownership before clearing.</div></div>\n\n<strong>Queued Action Items:</strong>\n<ul><li>Draft engagement letter (IRS Examination scope)</li><li>Create matter file with 2022–2023 return request checklist</li><li>Set deadline reminder: IRS response window (30 days from IDR receipt)</li><li>Flag for senior partner review — multi-year examination scope</li></ul>\n\nShall I draft the engagement letter now?"}
    ]
  },
  {
    matter:"Chen Manufacturing — IRS CP2000 Response", practice:"Tax Controversy",
    convo:[
      {r:"v", t:"I have the Chen Manufacturing CP2000 loaded. Tax year 2022, IRS proposing a $148,000 adjustment on a 1099-NEC discrepancy. What's our strategy?"},
      {r:"u", t:"Walk me through the response strategy and documentation we need."},
      {r:"v", t:"<strong>Response Strategy — Chen CP2000</strong>\n\n<strong>Step 1 — Position:</strong> Recommend <em>partial disagreement</em> — concede any legitimate gap, dispute the rest. We have 60 days from the notice date.\n\n<strong>Step 2 — Documentation:</strong> Gather all contracts, invoices, and bank records for 2022 that reconcile the 1099 income reported.\n\n<strong>Step 3 — Penalty Abatement:</strong> If tax is owed, file Form 843 under reasonable cause exception (IRC §6664(c)).\n\n<strong>Authority to Cite:</strong>\n<ul><li>Treas. Reg. §301.6213-1 — response procedure</li><li>Rev. Proc. 2005-32 — installment agreement if needed</li><li>IRC §6751(b) — IRS must obtain supervisory approval for penalties</li></ul>\n\n<div class='alert-box warn'>⚠️ <div><strong>60-Day Deadline is Critical.</strong> Missing it waives appeal rights. Docket reminder set — confirm postmark date with client immediately.</div></div>"}
    ]
  },
  {
    matter:"Beacon Capital — M&A Tax Due Diligence", practice:"Corporate / Tax",
    convo:[
      {r:"v", t:"Beacon Capital acquisition loaded. Target is a C-corp with operations in 3 states. Generating the tax due diligence checklist."},
      {r:"u", t:"Give me the full tax DD checklist for the target."},
      {r:"v", t:"<strong>M&A Tax Due Diligence — Beacon Capital Target</strong>\n\n<strong>Federal Income Tax</strong>\n<ul><li>5-year returns (Form 1120) + all schedules</li><li>Open audit years and pending IRS examinations</li><li>NOL carryforwards — confirm §382 limitation post-acquisition</li><li>Deferred tax assets/liabilities reconciliation</li><li>Accounting method elections</li></ul>\n\n<strong>State & Local Tax</strong>\n<ul><li>Returns for all nexus states (income, franchise, gross receipts)</li><li>Sales/use tax compliance and audit history</li><li>State NOL carryforwards (may differ from federal)</li><li>Transfer tax exposure on asset acquisition structure</li></ul>\n\n<strong>Employment Tax</strong>\n<ul><li>Worker classification — §3402 withholding compliance</li><li>Form 941 payroll returns — 4 years</li><li>Outstanding FICA/FUTA obligations</li></ul>\n\n<strong>Deal Structure</strong>\n<ul><li>Asset vs. stock — §338(h)(10) election eligibility</li><li>Seller basis in target stock — built-in gain exposure</li><li>Change of control provisions in tax sharing agreements</li></ul>\n\n<div class='alert-box warn'>⚠️ <div><strong>§382 NOL Analysis is priority.</strong> If target has significant NOL carryforwards, acquisition may trigger a limitation that reduces deal value. Quantify before closing.</div></div>"}
    ]
  },
  {
    matter:"Goldstein & Partners — SOL Tracker", practice:"Tax Controversy",
    convo:[
      {r:"v", t:"SOL tracking initiated for Goldstein & Partners. What tax years are open?"},
      {r:"u", t:"2020, 2021, and 2022. Flag anything approaching or at risk."},
      {r:"v", t:"<strong>Statute of Limitations Analysis — Tax Years 2020–2022</strong>\n\n<strong>Standard Assessment Period (IRC §6501(a))</strong> — 3 years from return due date or filing date, whichever is later:\n<ul><li><strong>2020</strong> (filed Apr 2021) → SOL expired Apr 15, 2024 <span class='tag-inline'>EXPIRED — No Risk</span></li><li><strong>2021</strong> (filed Apr 2022) → SOL expired Apr 15, 2025 <span class='tag-inline'>EXPIRED — No Risk</span></li><li><strong>2022</strong> (filed Apr 2023) → SOL expires Apr 15, 2026 <span class='tag-inline'>⚠️ CLOSING SOON</span></li></ul>\n\n<strong>Extended SOL Exposure:</strong>\n<ul><li><strong>6-Year SOL (§6501(e)):</strong> If gross income omission >25% of reported income — confirm 2022.</li><li><strong>Unlimited SOL (§6501(c)):</strong> Fraud or failure to file — confirm all returns filed timely.</li></ul>\n\n<div class='alert-box warn'>⚠️ <div><strong>2022 SOL closes April 15, 2026.</strong> If an exam is pending or anticipated, evaluate Form 872 consent to extension. Advise client immediately.</div></div>\n<div class='alert-box ok'>✓ <div><strong>2020 and 2021 are clear.</strong> Standard assessment period expired. No IRS assessment risk absent fraud.</div></div>"}
    ]
  }
];

let cur = 0, busy = false, rIdx = 0;

const fallbacks = [
  "Good question. I'd want to pull the relevant IRC sections and cross-reference Treasury Regs before giving you a definitive answer. Want me to run that research now?",
  "The key issue here is likely the intersection of §482 and the contemporaneous documentation requirements under Reg. §1.6662-6(d). Let me flag the specific exposure points.",
  "The IRS has been aggressive on this since the 2024 priority guidance plan. I can draft a memo walking through the authority and your strongest arguments in about 2 minutes.",
  "I'll pull the relevant authority. In the meantime — anything involving this issue should be marked attorney-client communication before any IRS contact.",
  "The Tax Court has split on this. <em>Medtronic v. Commissioner</em> and the Ninth Circuit remand are the anchor cases. Want me to summarize the holdings?",
  "Noted — flagged for attorney review and logged to the matter file. Anything else you'd like me to research or draft?",
  "I can draft that now. Based on your firm's template and the facts on file, I'll have a first draft ready in under a minute. Shall I proceed?"
];

function pickScenario(i) {
  document.querySelectorAll('.sc-chip').forEach((c,j) => c.classList.toggle('active', j===i));
  cur = i;
  document.getElementById('matterLbl').textContent  = SC[i].matter;
  document.getElementById('practiceLbl').textContent = SC[i].practice;
  renderConvo(i);
}

function renderConvo(i) {
  const body = document.getElementById('chatBody');
  body.innerHTML = '';
  SC[i].convo.forEach((m, j) => {
    setTimeout(() => addMsg(m.r, m.t), j * 100);
  });
}

function addMsg(role, text) {
  const body = document.getElementById('chatBody');
  const wrap = document.createElement('div');
  wrap.className = 'msg ' + role;

  const av = document.createElement('div');
  av.className = 'msg-av';
  av.textContent = role === 'v' ? '⚖️' : 'ML';

  const bub = document.createElement('div');
  bub.className = 'msg-bub';
  bub.innerHTML = text.replace(/\\n/g,'\n').replace(/\n/g,'<br/>');

  wrap.appendChild(av);
  wrap.appendChild(bub);
  body.appendChild(wrap);
  body.scrollTop = body.scrollHeight;
}

function showTyping() {
  const body = document.getElementById('chatBody');
  const d = document.createElement('div');
  d.className = 'typing'; d.id = 'typ';
  d.innerHTML = \`<div class="typing-av">⚖️</div><div class="typing-bub"><div class="td"></div><div class="td"></div><div class="td"></div></div>\`;
  body.appendChild(d);
  body.scrollTop = body.scrollHeight;
}
function hideTyping() { const t = document.getElementById('typ'); if(t) t.remove(); }

function send() {
  const inp = document.getElementById('inp');
  const txt = inp.value.trim();
  if (!txt || busy) return;
  busy = true;
  inp.value = ''; grow(inp);
  document.getElementById('sendBtn').disabled = true;
  addMsg('u', txt);
  showTyping();
  setTimeout(() => {
    hideTyping();
    addMsg('v', fallbacks[rIdx++ % fallbacks.length]);
    busy = false;
    document.getElementById('sendBtn').disabled = false;
  }, 1300 + Math.random() * 700);
}

function onKey(e) { if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();} }
function grow(el) { el.style.height='auto'; el.style.height=Math.min(el.scrollHeight,110)+'px'; }

document.addEventListener('DOMContentLoaded', () => renderConvo(0));

// ── MODAL ─────────────────────────────────────────────────────
let selectedTier = '';
function openModal(tier) {
  selectedTier = tier || '';
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('modalForm').style.display = 'block';
  document.getElementById('modalSuccess').style.display = 'none';
  document.body.style.overflow = 'hidden';
  if (tier) {
    document.querySelectorAll('.tier-chip').forEach(c => {
      c.classList.toggle('selected', c.textContent.trim() === tier);
    });
  }
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}
function selectTier(el, tier) {
  selectedTier = tier;
  document.querySelectorAll('.tier-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}
function submitForm() {
  const email = document.getElementById('fEmail').value.trim();
  const name  = document.getElementById('fName').value.trim();
  const firm  = document.getElementById('fFirm').value.trim();
  if (!email || !name || !firm) { alert('Please fill in your name, email, and firm name.'); return; }
  const tier     = selectedTier || 'Not specified';
  const size     = document.getElementById('fSize').value || 'Not specified';
  const practice = document.getElementById('fPractice').value || 'Not specified';
  const note     = document.getElementById('fNote').value || '';
  const lname    = document.getElementById('lName').value.trim();
  const subject  = encodeURIComponent('Vera for Legal — Pricing Inquiry (' + tier + ')');
  const body     = encodeURIComponent('Name: ' + name + ' ' + lname + '\nEmail: ' + email + '\nFirm: ' + firm + '\nSize: ' + size + '\nPractice: ' + practice + '\nTier: ' + tier + '\n\nNotes:\n' + note);
  window.open('mailto:hello@savvylex.com?subject=' + subject + '&body=' + body);
  document.getElementById('modalForm').style.display = 'none';
  document.getElementById('successEmail').textContent = email;
  document.getElementById('modalSuccess').style.display = 'block';
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });

</script>
</body>
</html>`;
    return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
});
