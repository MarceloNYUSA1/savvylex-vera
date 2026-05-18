import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  if (req.method === 'GET') {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vera at NYLS AI&Data 2026 — SavvyLex</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --navy:#0c1a35; --navy-mid:#152544; --navy-light:#1e3460;
      --gold:#c9a84c; --gold-light:#e8c97a; --cream:#f8f7f4;
      --g50:#f9fafb; --g200:#e5e7eb; --g300:#d1d5db; --g400:#9ca3af;
      --g600:#4b5563; --g800:#1f2937; --green:#059669; --red:#dc2626;
      --purple:#6d28d9; --blue:#1d4ed8;
      --r:14px; --rl:22px;
      --sh-sm:0 1px 4px rgba(0,0,0,.07); --sh-md:0 4px 18px rgba(0,0,0,.10);
      --sh-lg:0 10px 36px rgba(0,0,0,.13); --sh-xl:0 20px 64px rgba(0,0,0,.17);
    }
    html{scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif;background:var(--cream);color:var(--g800);overflow-x:hidden}

    /* ── NAV ── */
    .nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(12,26,53,.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:64px}
    .nav-logo{display:flex;align-items:center;gap:11px;text-decoration:none}
    .nav-logo-mark{width:36px;height:36px;border-radius:9px;background:linear-gradient(135deg,var(--gold),var(--gold-light));display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 3px 10px rgba(201,168,76,.35)}
    .nav-logo-name{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff;line-height:1}
    .nav-logo-sub{font-size:10px;color:var(--gold-light);letter-spacing:.1em;text-transform:uppercase;margin-top:2px}
    .nav-event-pill{display:flex;align-items:center;gap:8px;background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.3);border-radius:100px;padding:6px 16px;font-size:12px;font-weight:600;color:var(--gold-light);letter-spacing:.06em}
    .nav-event-dot{width:7px;height:7px;border-radius:50%;background:var(--gold);box-shadow:0 0 7px rgba(201,168,76,.7);animation:blink 2s infinite;flex-shrink:0}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:.4}}
    .nav-cta{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,var(--gold),var(--gold-light));color:var(--navy);font-weight:700;font-size:13px;padding:9px 20px;border-radius:100px;border:none;cursor:pointer;text-decoration:none;box-shadow:0 3px 12px rgba(201,168,76,.35);transition:all .2s}
    .nav-cta:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(201,168,76,.45)}
    .nav-ghost{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);color:#fff;font-size:13px;font-weight:600;padding:9px 18px;border-radius:100px;cursor:pointer;transition:all .2s;text-decoration:none;display:inline-flex;align-items:center}
    .nav-ghost:hover{background:rgba(255,255,255,.16)}

    /* ── HERO ── */
    .hero{min-height:100vh;padding-top:64px;background:linear-gradient(160deg,var(--navy) 0%,var(--navy-mid) 55%,#1b3060 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden}
    .hero-glow{position:absolute;width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,.08) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-60%);pointer-events:none}
    .hero-glow2{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(109,40,217,.07) 0%,transparent 70%);top:60%;left:20%;pointer-events:none}
    .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:56px 56px;pointer-events:none}
    .hero-inner{position:relative;z-index:2;padding:60px 24px 80px;max-width:900px}
    .hero-event-badge{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(201,168,76,.4);background:rgba(201,168,76,.09);border-radius:100px;padding:8px 20px;font-size:12px;font-weight:700;color:var(--gold-light);letter-spacing:.1em;text-transform:uppercase;margin-bottom:28px}
    .hero-nyls-logo{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:4px 10px;font-size:11px;font-weight:800;color:#fff;letter-spacing:.05em}
    .hero-title{font-family:'Playfair Display',serif;font-size:clamp(40px,6.5vw,76px);font-weight:700;line-height:1.08;color:#fff;margin-bottom:14px}
    .hero-title .accent{background:linear-gradient(135deg,var(--gold),var(--gold-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-title .accent2{background:linear-gradient(135deg,#a78bfa,#c4b5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-tagline{font-family:'Playfair Display',serif;font-size:clamp(16px,2.2vw,24px);font-style:italic;color:rgba(255,255,255,.55);margin-bottom:22px;line-height:1.45}
    .hero-sub{font-size:clamp(14px,1.7vw,17px);color:rgba(255,255,255,.5);line-height:1.8;max-width:680px;margin:0 auto 44px}
    .hero-sub strong{color:rgba(255,255,255,.85);font-weight:600}
    .hero-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:64px}
    .btn-gold{display:inline-flex;align-items:center;gap:9px;background:linear-gradient(135deg,var(--gold),var(--gold-light));color:var(--navy);font-weight:700;font-size:15px;padding:15px 30px;border-radius:100px;border:none;cursor:pointer;text-decoration:none;box-shadow:0 5px 22px rgba(201,168,76,.4);transition:all .2s}
    .btn-gold:hover{transform:translateY(-2px);box-shadow:0 9px 30px rgba(201,168,76,.5)}
    .btn-ghost{display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.07);color:#fff;font-weight:600;font-size:15px;padding:15px 30px;border-radius:100px;border:1px solid rgba(255,255,255,.14);cursor:pointer;text-decoration:none;transition:all .2s}
    .btn-ghost:hover{background:rgba(255,255,255,.13)}
    .hero-stats{display:flex;border-top:1px solid rgba(255,255,255,.08);padding-top:40px;justify-content:center;flex-wrap:wrap}
    .stat{padding:0 36px;text-align:center;border-right:1px solid rgba(255,255,255,.08)}
    .stat:last-child{border-right:none}
    .stat-num{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:var(--gold-light);line-height:1}
    .stat-label{font-size:11px;color:rgba(255,255,255,.4);margin-top:5px;letter-spacing:.04em;text-transform:uppercase}

    /* ── STRIP ── */
    .strip{background:var(--navy-mid);border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);padding:18px 48px;display:flex;align-items:center;justify-content:center;gap:36px;flex-wrap:wrap}
    .strip-item{display:flex;align-items:center;gap:9px;font-size:13px;color:rgba(255,255,255,.55)}
    .strip-item span{color:var(--gold);font-size:15px}

    /* ── SECTIONS ── */
    .sec{padding:88px 24px}
    .sec-inner{max-width:1120px;margin:0 auto}
    .sec-hd{text-align:center;margin-bottom:60px}
    .sec-eye{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
    .sec-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,44px);font-weight:700;color:var(--navy);line-height:1.18;margin-bottom:16px}
    .sec-sub{font-size:17px;color:var(--g600);max-width:580px;margin:0 auto;line-height:1.75}

    /* ── AUDIENCE CARDS ── */
    .audience-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}
    .aud-card{background:#fff;border:1px solid var(--g200);border-radius:var(--rl);padding:32px 28px;transition:all .25s;position:relative;overflow:hidden}
    .aud-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold-light))}
    .aud-card:hover{transform:translateY(-4px);box-shadow:var(--sh-lg)}
    .aud-icon{font-size:32px;margin-bottom:14px}
    .aud-title{font-family:'Playfair Display',serif;font-size:19px;font-weight:700;color:var(--navy);margin-bottom:10px}
    .aud-desc{font-size:13.5px;color:var(--g600);line-height:1.7;margin-bottom:16px}
    .aud-tags{display:flex;flex-wrap:wrap;gap:6px}
    .aud-tag{font-size:11px;font-weight:600;background:rgba(201,168,76,.1);color:#7a5c1a;padding:3px 10px;border-radius:100px;border:1px solid rgba(201,168,76,.2)}

    /* ── DATA + AI PILLARS ── */
    .pillars{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:3px;background:var(--g200);border-radius:var(--rl);overflow:hidden}
    .pillar{background:#fff;padding:36px 30px;transition:background .2s;position:relative}
    .pillar:hover{background:var(--g50)}
    .pillar-icon{font-size:28px;margin-bottom:14px}
    .pillar-title{font-size:16px;font-weight:700;color:var(--navy);margin-bottom:10px}
    .pillar-desc{font-size:13px;color:var(--g600);line-height:1.7}
    .pillar-tag{display:inline-block;margin-top:12px;font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;background:rgba(201,168,76,.1);color:#7a5c1a;padding:3px 10px;border-radius:4px}
    .pillar-tag.data{background:rgba(29,78,216,.07);color:#1e40af}
    .pillar-tag.ai{background:rgba(109,40,217,.07);color:#5b21b6}
    .pillar-tag.gov{background:rgba(5,150,105,.07);color:#065f46}

    /* ── DEMO ── */
    .demo-sec{background:var(--g50)}
    .scenario-row{display:flex;gap:12px;margin-bottom:32px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
    .scenario-row::-webkit-scrollbar{display:none}
    .sc-chip{flex-shrink:0;display:flex;align-items:center;gap:8px;background:#fff;border:2px solid var(--g200);border-radius:100px;padding:9px 18px;font-size:13px;font-weight:600;color:var(--g600);cursor:pointer;transition:all .2s;white-space:nowrap}
    .sc-chip:hover{border-color:var(--navy);color:var(--navy)}
    .sc-chip.active{background:var(--navy);border-color:var(--navy);color:#fff}
    .sc-chip .chip-badge{font-size:10px;font-weight:700;background:rgba(201,168,76,.15);color:#7a5c1a;padding:2px 7px;border-radius:100px;margin-left:4px}
    .sc-chip.active .chip-badge{background:rgba(255,255,255,.15);color:var(--gold-light)}

    .chat-shell{background:#fff;border-radius:var(--rl);box-shadow:var(--sh-xl);overflow:hidden;border:1px solid var(--g200)}
    .chat-topbar{background:linear-gradient(135deg,var(--navy),var(--navy-light));padding:18px 28px;display:flex;align-items:center;justify-content:space-between}
    .chat-identity{display:flex;align-items:center;gap:13px}
    .chat-ava{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold-light));display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 2px 10px rgba(201,168,76,.4);flex-shrink:0}
    .chat-name{font-size:14px;font-weight:700;color:#fff}
    .chat-desc{font-size:11.5px;color:rgba(255,255,255,.5);margin-top:1px}
    .chat-badges{display:flex;gap:8px;flex-wrap:wrap}
    .chat-badge{display:flex;align-items:center;gap:5px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.11);border-radius:100px;padding:4px 11px;font-size:11px;color:rgba(255,255,255,.7)}
    .chat-badge-dot{width:6px;height:6px;border-radius:50%;background:#22c55e;animation:blink 2s infinite}
    .chat-meta{background:var(--g50);border-bottom:1px solid var(--g200);padding:9px 28px;display:flex;gap:16px;flex-wrap:wrap;font-size:11.5px;color:var(--g600)}
    .chat-meta-item{display:flex;align-items:center;gap:5px}
    .chat-meta-item strong{color:var(--navy);font-weight:600}
    .chat-meta-sep{width:1px;height:13px;background:var(--g300);align-self:center}
    .chat-warn{background:rgba(201,168,76,.07);border-bottom:1px solid rgba(201,168,76,.22);padding:7px 28px;font-size:11px;color:#7a5c1a;display:flex;align-items:center;gap:6px}
    .chat-body{height:480px;overflow-y:auto;padding:28px;display:flex;flex-direction:column;gap:18px;scroll-behavior:smooth}
    .chat-body::-webkit-scrollbar{width:3px}
    .chat-body::-webkit-scrollbar-thumb{background:var(--g200);border-radius:2px}
    .msg{display:flex;gap:11px;max-width:92%;animation:pop .28s ease}
    @keyframes pop{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
    .msg.u{align-self:flex-end;flex-direction:row-reverse}
    .msg-av{width:30px;height:30px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;margin-top:3px}
    .msg.v .msg-av{background:linear-gradient(135deg,var(--gold),var(--gold-light))}
    .msg.u .msg-av{background:linear-gradient(135deg,var(--navy),var(--navy-light));color:#fff;font-size:10px;font-weight:700}
    .msg-bub{padding:13px 17px;border-radius:17px;font-size:13.5px;line-height:1.7}
    .msg.v .msg-bub{background:var(--g50);border:1px solid var(--g200);border-top-left-radius:4px;color:var(--g800)}
    .msg.u .msg-bub{background:linear-gradient(135deg,var(--navy),var(--navy-light));color:#fff;border-top-right-radius:4px}
    .msg-bub strong{font-weight:600;color:var(--navy)}
    .msg.u .msg-bub strong{color:var(--gold-light)}
    .msg-bub ul{margin:8px 0 4px 16px}
    .msg-bub li{margin-bottom:6px}
    .alert-box{display:flex;align-items:flex-start;gap:9px;border-radius:6px;padding:9px 13px;margin-top:11px;font-size:12.5px}
    .alert-box.warn{background:rgba(220,38,38,.05);border-left:3px solid var(--red);color:#7f1d1d}
    .alert-box.ok{background:rgba(5,150,105,.05);border-left:3px solid var(--green);color:#064e3b}
    .alert-box.info{background:rgba(201,168,76,.08);border-left:3px solid var(--gold);color:#7a5c1a}
    .tag-inline{display:inline-block;background:rgba(201,168,76,.13);color:#7a5c1a;font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;margin:1px 2px}
    .tag-data{background:rgba(29,78,216,.08);color:#1e40af}
    .typing{display:flex;gap:11px;align-items:flex-end}
    .typing-av{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold-light));display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
    .typing-bub{background:var(--g50);border:1px solid var(--g200);border-radius:17px;border-bottom-left-radius:4px;padding:13px 17px;display:flex;gap:5px;align-items:center}
    .td{width:7px;height:7px;border-radius:50%;background:var(--g400);animation:bounce 1.1s infinite}
    .td:nth-child(2){animation-delay:.18s}.td:nth-child(3){animation-delay:.36s}
    @keyframes bounce{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(-5px);opacity:1}}
    .chat-foot{border-top:1px solid var(--g200);padding:14px 20px;background:#fff}
    .chat-foot-row{display:flex;gap:9px;align-items:flex-end}
    .chat-inp{flex:1;border:1.5px solid var(--g200);border-radius:11px;padding:11px 15px;font-size:13.5px;font-family:inherit;resize:none;outline:none;background:var(--g50);color:var(--g800);min-height:44px;max-height:110px;transition:border-color .2s}
    .chat-inp:focus{border-color:var(--navy);background:#fff}
    .chat-inp::placeholder{color:var(--g400)}
    .send{width:44px;height:44px;border-radius:11px;flex-shrink:0;background:linear-gradient(135deg,var(--navy),var(--navy-light));border:none;cursor:pointer;color:#fff;font-size:17px;display:flex;align-items:center;justify-content:center;transition:all .2s}
    .send:hover{transform:scale(1.06);box-shadow:0 4px 14px rgba(15,30,60,.3)}
    .send:disabled{opacity:.45;cursor:not-allowed;transform:none}
    .chat-note{font-size:11px;color:var(--g400);text-align:center;margin-top:9px}

    /* ── DATA GOVERNANCE ── */
    .gov-sec{background:var(--navy)}
    .gov-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:2px;background:rgba(255,255,255,.06);border-radius:var(--rl);overflow:hidden}
    .gov-cell{background:rgba(255,255,255,.03);padding:34px 28px;border:1px solid rgba(255,255,255,.06);transition:background .2s}
    .gov-cell:hover{background:rgba(255,255,255,.07)}
    .gov-icon{font-size:26px;margin-bottom:12px}
    .gov-title{font-size:15px;font-weight:700;color:#fff;margin-bottom:9px}
    .gov-desc{font-size:13px;color:rgba(255,255,255,.5);line-height:1.7}
    .gov-badge{display:inline-block;margin-top:12px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 10px;border-radius:4px}
    .gov-badge.zdr{background:rgba(5,150,105,.15);color:#34d399}
    .gov-badge.byok{background:rgba(201,168,76,.15);color:var(--gold-light)}
    .gov-badge.audit{background:rgba(109,40,217,.15);color:#a78bfa}
    .gov-badge.agent{background:rgba(29,78,216,.15);color:#93c5fd}

    /* ── SPEAKER / SPONSOR ── */
    .event-sec{background:linear-gradient(135deg,#0a1628 0%,var(--navy-mid) 50%,#1a2d54 100%);position:relative;overflow:hidden}
    .event-sec::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px);background-size:48px 48px;pointer-events:none}
    .event-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:var(--rl);padding:48px;position:relative;overflow:hidden}
    .event-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold-light),var(--gold))}
    .event-header{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:40px}
    .event-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.3);border-radius:100px;padding:6px 16px;font-size:12px;font-weight:700;color:var(--gold-light);letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px}
    .event-title{font-family:'Playfair Display',serif;font-size:clamp(24px,3.5vw,38px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:10px}
    .event-sub{font-size:14px;color:rgba(255,255,255,.5);line-height:1.7;max-width:520px}
    .event-meta-box{background:rgba(201,168,76,.08);border:1px solid rgba(201,168,76,.2);border-radius:14px;padding:20px 24px;min-width:220px}
    .event-meta-row{display:flex;align-items:center;gap:10px;margin-bottom:10px;font-size:13px;color:rgba(255,255,255,.7)}
    .event-meta-row:last-child{margin-bottom:0}
    .event-meta-row strong{color:var(--gold-light)}
    .speaker-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}
    .speaker-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:24px;text-align:center;transition:all .2s}
    .speaker-card:hover{background:rgba(255,255,255,.08);border-color:rgba(201,168,76,.3)}
    .speaker-ava{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold-light));display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 12px;box-shadow:0 3px 14px rgba(201,168,76,.3)}
    .speaker-name{font-size:14px;font-weight:700;color:#fff;margin-bottom:4px}
    .speaker-role{font-size:12px;color:rgba(255,255,255,.45);line-height:1.5}
    .sponsor-row{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:36px;padding-top:36px;border-top:1px solid rgba(255,255,255,.08)}
    .sponsor-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-right:4px}
    .sponsor-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:8px 16px;font-size:12px;font-weight:700;color:rgba(255,255,255,.7)}

    /* ── COMPARISON ── */
    .cmp-sec{background:var(--navy)}
    .cmp-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
    .cmp-card{border-radius:var(--rl);padding:36px 32px;position:relative}
    .cmp-card.other{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09)}
    .cmp-card.vera{background:linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.06));border:1px solid rgba(201,168,76,.3)}
    .cmp-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px}
    .cmp-card.other .cmp-label{color:rgba(255,255,255,.35)}
    .cmp-card.vera .cmp-label{color:var(--gold)}
    .cmp-name{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;margin-bottom:24px;color:#fff}
    .cmp-row{display:flex;align-items:flex-start;gap:11px;margin-bottom:14px;font-size:13.5px;line-height:1.55}
    .cmp-row .ic{font-size:15px;flex-shrink:0;margin-top:1px}
    .cmp-card.other .cmp-row{color:rgba(255,255,255,.45)}
    .cmp-card.vera .cmp-row{color:rgba(255,255,255,.85)}
    .cmp-best-badge{position:absolute;top:-12px;right:28px;background:linear-gradient(135deg,var(--gold),var(--gold-light));color:var(--navy);font-size:11px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;padding:4px 14px;border-radius:100px}

    /* ── CTA ── */
    .cta-band{background:linear-gradient(135deg,var(--navy),var(--navy-light));text-align:center;padding:96px 24px;position:relative;overflow:hidden}
    .cta-band::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px);background-size:56px 56px;pointer-events:none}
    .cta-band-inner{position:relative;z-index:1}
    .cta-band h2{font-family:'Playfair Display',serif;font-size:clamp(30px,5vw,52px);font-weight:700;color:#fff;margin-bottom:14px;line-height:1.2}
    .cta-band p{font-size:17px;color:rgba(255,255,255,.5);max-width:520px;margin:0 auto 40px;line-height:1.8}
    .cta-group{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
    .cta-options{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;max-width:780px;margin:0 auto 44px}
    .cta-option{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:22px;text-align:left;cursor:pointer;transition:all .2s}
    .cta-option:hover{background:rgba(255,255,255,.1);border-color:rgba(201,168,76,.3);transform:translateY(-2px)}
    .cta-option-icon{font-size:24px;margin-bottom:10px}
    .cta-option-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:5px}
    .cta-option-desc{font-size:12.5px;color:rgba(255,255,255,.45);line-height:1.55}

    /* ── MODAL ── */
    .modal-overlay{display:none;position:fixed;inset:0;z-index:999;background:rgba(8,15,30,.80);backdrop-filter:blur(10px);align-items:center;justify-content:center;padding:24px}
    .modal-overlay.open{display:flex}
    .modal{background:#fff;border-radius:var(--rl);width:100%;max-width:520px;box-shadow:var(--sh-xl);overflow:hidden;animation:modalIn .28s ease}
    @keyframes modalIn{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}
    .modal-head{background:linear-gradient(135deg,var(--navy),var(--navy-light));padding:28px 32px;display:flex;align-items:flex-start;justify-content:space-between}
    .modal-head h3{font-family:'Playfair Display',serif;font-size:21px;font-weight:700;color:#fff;margin-bottom:5px}
    .modal-head p{font-size:13px;color:rgba(255,255,255,.5)}
    .modal-close{background:rgba(255,255,255,.1);border:none;color:#fff;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;transition:background .2s;flex-shrink:0;margin-left:16px}
    .modal-close:hover{background:rgba(255,255,255,.22)}
    .modal-body{padding:28px 32px}
    .form-row{margin-bottom:14px}
    .form-row label{display:block;font-size:11px;font-weight:700;color:var(--navy);margin-bottom:5px;letter-spacing:.04em;text-transform:uppercase}
    .form-row input,.form-row select,.form-row textarea{width:100%;border:1.5px solid var(--g200);border-radius:10px;padding:11px 14px;font-size:14px;font-family:inherit;color:var(--g800);background:var(--g50);outline:none;transition:border-color .2s}
    .form-row input:focus,.form-row select:focus,.form-row textarea:focus{border-color:var(--navy);background:#fff}
    .form-row textarea{resize:none;min-height:76px}
    .form-2col{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .role-chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}
    .role-chip{border:2px solid var(--g200);border-radius:100px;padding:7px 14px;font-size:12.5px;font-weight:600;color:var(--g600);cursor:pointer;transition:all .2s;background:#fff}
    .role-chip:hover{border-color:var(--navy);color:var(--navy)}
    .role-chip.sel{background:var(--navy);border-color:var(--navy);color:#fff}
    .modal-submit{width:100%;padding:14px;background:linear-gradient(135deg,var(--gold),var(--gold-light));color:var(--navy);font-weight:700;font-size:15px;border:none;border-radius:10px;cursor:pointer;box-shadow:0 4px 16px rgba(201,168,76,.35);transition:all .2s;margin-top:6px}
    .modal-submit:hover{transform:translateY(-1px);box-shadow:0 7px 22px rgba(201,168,76,.45)}
    .modal-success{text-align:center;padding:40px 32px}
    .modal-success .check{font-size:48px;margin-bottom:16px}
    .modal-success h4{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--navy);margin-bottom:10px}
    .modal-success p{font-size:14px;color:var(--g600);line-height:1.7}

    footer{background:#060d1c;color:rgba(255,255,255,.35);text-align:center;padding:32px 24px;font-size:12.5px}
    footer a{color:var(--gold);text-decoration:none}

    @media(max-width:900px){.cmp-grid{grid-template-columns:1fr}.nav{padding:0 20px}.hero-inner{padding:48px 20px 60px}.event-header{flex-direction:column}}
    @media(max-width:640px){.nav-event-pill{display:none}.sec{padding:60px 16px}.chat-body{height:360px}.form-2col{grid-template-columns:1fr}.stat{padding:0 20px}}
  </style>
</head>
<body>

<!-- NAV -->
<nav class="nav">
  <a class="nav-logo" href="#">
    <div class="nav-logo-mark">⚖️</div>
    <div><div class="nav-logo-name">Vera</div><div class="nav-logo-sub">by SavvyLex</div></div>
  </a>
  <div class="nav-event-pill"><span class="nav-event-dot"></span>NYLS AI&amp;Data 2026 · September</div>
  <div style="display:flex;gap:10px;align-items:center">
    <a href="#event" class="nav-ghost">Event Info</a>
    <button onclick="openModal('demo')" class="nav-cta">Book a Demo ✦</button>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-glow"></div>
  <div class="hero-glow2"></div>
  <div class="hero-grid"></div>
  <div class="hero-inner">
    <div class="hero-event-badge">
      <div class="nav-nyls" style="display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,.1);border-radius:6px;padding:3px 9px;font-size:10px;font-weight:800;color:#fff;letter-spacing:.06em">🏛️ NYLS</div>
      AI &amp; Data for the Legal Profession · September 2026
    </div>
    <h1 class="hero-title">
      The Law Is <span class="accent">Data.</span><br/>
      The Future Is <span class="accent2">AI.</span><br/>
      Your Firm Needs Both.
    </h1>
    <p class="hero-tagline">Vera brings Claude for Law to every attorney, professor, and student — with the governance, audit trails, and data architecture the profession demands.</p>
    <p class="hero-sub">
      AI is no longer optional in legal practice. The question is <strong>how you deploy it responsibly</strong> — with privilege protection, data residency controls, agentic workflows, and attorney-in-the-loop oversight. <strong>Vera is built for exactly that.</strong>
    </p>
    <div class="hero-btns">
      <button onclick="document.getElementById('demo').scrollIntoView({behavior:'smooth'})" class="btn-gold">✦ See Vera in Action</button>
      <button onclick="openModal('event')" class="btn-ghost">Connect at NYLS →</button>
    </div>
    <div class="hero-stats">
      <div class="stat"><div class="stat-num">BYOK</div><div class="stat-label">Your Key, Your Data</div></div>
      <div class="stat"><div class="stat-num">ZDR</div><div class="stat-label">Zero Data Retention</div></div>
      <div class="stat"><div class="stat-num">100%</div><div class="stat-label">Attorney-in-the-Loop</div></div>
      <div class="stat"><div class="stat-num">ABA</div><div class="stat-label">Rule 1.1 Compliant</div></div>
      <div class="stat"><div class="stat-num">MCP</div><div class="stat-label">Agentic Workflows</div></div>
    </div>
  </div>
</section>

<!-- STRIP -->
<div class="strip">
  <div class="strip-item"><span>🏛️</span>New York Law School · September 2026</div>
  <div class="strip-item"><span>🔒</span>Privilege-Protected by Design</div>
  <div class="strip-item"><span>🤖</span>Powered by Claude for Law</div>
  <div class="strip-item"><span>📊</span>Full Audit Trail &amp; Governance</div>
  <div class="strip-item"><span>🎓</span>Built for Practice &amp; Education</div>
</div>

<!-- AUDIENCE -->
<section class="sec" id="audience">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye">Who Vera Is For</div>
      <h2 class="sec-title">Built for Every Corner of the Legal Profession</h2>
      <p class="sec-sub">Whether you're advising a Fortune 500 on an M&amp;A transaction, managing a docket in-house, or studying for the bar — Vera meets you where you are.</p>
    </div>
    <div class="audience-grid">
      <div class="aud-card">
        <div class="aud-icon">🏢</div>
        <div class="aud-title">In-House Counsel</div>
        <div class="aud-desc">Manage contracts, M&amp;A due diligence, regulatory compliance, and internal investigations — with AI that understands your enterprise data and keeps it inside your walls.</div>
        <div class="aud-tags">
          <span class="aud-tag">Contract Review</span>
          <span class="aud-tag">M&amp;A DD</span>
          <span class="aud-tag">Regulatory</span>
          <span class="aud-tag">Data Governance</span>
        </div>
      </div>
      <div class="aud-card">
        <div class="aud-icon">⚖️</div>
        <div class="aud-title">Law Firm Attorneys</div>
        <div class="aud-desc">Tax controversy, litigation, corporate — Vera delivers Claude for Law with matter-specific context, citation-grade research, and an airtight attorney review workflow.</div>
        <div class="aud-tags">
          <span class="aud-tag">Tax Research</span>
          <span class="aud-tag">Drafting</span>
          <span class="aud-tag">IRS Controversy</span>
          <span class="aud-tag">Audit Trail</span>
        </div>
      </div>
      <div class="aud-card">
        <div class="aud-icon">🎓</div>
        <div class="aud-title">Law Students</div>
        <div class="aud-desc">Vera accelerates legal research, case analysis, and memo writing. Learn to work with AI the way law firms actually use it — with governance built in from day one.</div>
        <div class="aud-tags">
          <span class="aud-tag">Research</span>
          <span class="aud-tag">Case Analysis</span>
          <span class="aud-tag">Memo Writing</span>
          <span class="aud-tag">AI Literacy</span>
        </div>
      </div>
      <div class="aud-card">
        <div class="aud-icon">📚</div>
        <div class="aud-title">Faculty &amp; Researchers</div>
        <div class="aud-desc">Explore the intersection of AI, data, and legal ethics. Vera is both a teaching tool and a research platform — ideal for clinics, law review work, and AI law curriculum development.</div>
        <div class="aud-tags">
          <span class="aud-tag">Legal Ethics</span>
          <span class="aud-tag">Curriculum</span>
          <span class="aud-tag">AI Research</span>
          <span class="aud-tag">Clinics</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AI + DATA PILLARS -->
<section class="sec" style="background:var(--g50)">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye">AI + Data Platform</div>
      <h2 class="sec-title">Not Just AI. A Legal Data Architecture.</h2>
      <p class="sec-sub">Vera isn't a chatbot. It's a full-stack legal AI platform — combining Claude for Law with the data infrastructure, governance controls, and agentic capabilities your practice requires.</p>
    </div>
    <div class="pillars">
      <div class="pillar"><div class="pillar-icon">🔑</div><div class="pillar-title">BYOK — Bring Your Own Key</div><div class="pillar-desc">Your firm's Anthropic Enterprise key powers Vera. SavvyLex is the configuration layer — we never hold, route, or bill your AI tokens. Your data never passes through us.</div><span class="pillar-tag">Data Sovereignty</span></div>
      <div class="pillar"><div class="pillar-icon">🗄️</div><div class="pillar-title">Zero Data Retention (ZDR)</div><div class="pillar-desc">Enterprise + ZDR required for all production deployments. Anthropic's ZDR policy ensures no training on your data and zero retention after session close. Privilege stays intact.</div><span class="pillar-tag zdr gov">ZDR Active</span></div>
      <div class="pillar"><div class="pillar-icon">📋</div><div class="pillar-title">Full Audit Trail</div><div class="pillar-desc">Every prompt, every response, every attorney action is logged per matter. Immutable audit logs support privilege claims, malpractice defense, and bar compliance reviews.</div><span class="pillar-tag audit gov">Audit-Grade</span></div>
      <div class="pillar"><div class="pillar-icon">🔗</div><div class="pillar-title">MCP Agentic Workflows</div><div class="pillar-desc">Model Context Protocol connects Vera to Westlaw, iManage, DocuSign, Microsoft 365, and custom firm data. LexAgents run multi-step legal workflows autonomously — with human gates.</div><span class="pillar-tag ai">Agentic</span></div>
      <div class="pillar"><div class="pillar-icon">🌍</div><div class="pillar-title">Data Residency Controls</div><div class="pillar-desc">Choose where your data lives. Vera supports U.S.-only data residency for compliance with state bar rules, client requirements, and enterprise data governance policies.</div><span class="pillar-tag data gov">Residency</span></div>
      <div class="pillar"><div class="pillar-icon">👤</div><div class="pillar-title">Attorney-in-the-Loop</div><div class="pillar-desc">No AI output leaves Vera without attorney review. Every draft is flagged, every research memo requires sign-off, and every action is logged back to the supervising attorney on the matter.</div><span class="pillar-tag gov">ABA 1.1</span></div>
      <div class="pillar"><div class="pillar-icon">🏛️</div><div class="pillar-title">Matter-Centric Context</div><div class="pillar-desc">Vera loads client, matter, jurisdiction, and prior work context before every session. Claude for Law knows the case before you type your first word.</div><span class="pillar-tag ai">Contextual AI</span></div>
      <div class="pillar"><div class="pillar-icon">🔏</div><div class="pillar-title">Privilege Architecture</div><div class="pillar-desc">Built-in privilege markers, communication tagging, and attorney-client confidentiality enforcement. Vera treats privilege not as a checkbox — but as a system design requirement.</div><span class="pillar-tag gov">Privilege-Safe</span></div>
    </div>
  </div>
</section>

<!-- LIVE DEMO -->
<section class="sec demo-sec" id="demo">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye">Live Interactive Demo</div>
      <h2 class="sec-title">Try Vera Right Now — No Login Required</h2>
      <p class="sec-sub">Pick a scenario relevant to your role. Watch Vera handle it with Claude for Law. Then ask your own questions.</p>
    </div>
    <div class="scenario-row" id="scRow">
      <div class="sc-chip active" onclick="pickScenario(0)"><span>🎓</span>Law Student Research<span class="chip-badge">EDU</span></div>
      <div class="sc-chip" onclick="pickScenario(1)"><span>🏢</span>In-House Contract Review<span class="chip-badge">IH</span></div>
      <div class="sc-chip" onclick="pickScenario(2)"><span>📊</span>AI Data Governance<span class="chip-badge">NEW</span></div>
      <div class="sc-chip" onclick="pickScenario(3)"><span>⚡</span>Tax Controversy<span class="chip-badge">TAX</span></div>
      <div class="sc-chip" onclick="pickScenario(4)"><span>🤖</span>Agentic Workflow Demo<span class="chip-badge">AGENT</span></div>
      <div class="sc-chip" onclick="pickScenario(5)"><span>⚖️</span>AI Ethics & Bar Rules<span class="chip-badge">ETHICS</span></div>
    </div>
    <div class="chat-shell">
      <div class="chat-topbar">
        <div class="chat-identity">
          <div class="chat-ava">⚖️</div>
          <div><div class="chat-name">Vera — Claude for Law · NYLS AI&amp;Data Edition</div><div class="chat-desc">SavvyLex · Presented at New York Law School · September 2026</div></div>
        </div>
        <div class="chat-badges">
          <div class="chat-badge"><span class="chat-badge-dot"></span>Live Demo</div>
          <div class="chat-badge">🔒 ZDR Active</div>
          <div class="chat-badge">🏛️ NYLS 2026</div>
        </div>
      </div>
      <div class="chat-meta">
        <div class="chat-meta-item">📁 <strong>Session:</strong>&nbsp;<span id="matterLbl">Law Student Research — Memo Writing</span></div>
        <div class="chat-meta-sep"></div>
        <div class="chat-meta-item">🎓 <strong>Context:</strong>&nbsp;<span id="contextLbl">NYLS · AI&Data Conference</span></div>
        <div class="chat-meta-sep"></div>
        <div class="chat-meta-item">🤖 <strong>Model:</strong>&nbsp;claude-opus-4</div>
        <div class="chat-meta-sep"></div>
        <div class="chat-meta-item">🛡️ <strong>Governance:</strong>&nbsp;Audit Trail ON</div>
      </div>
      <div class="chat-warn">⚠️&nbsp;<strong>Attorney Review Required</strong> — All Vera outputs are AI drafts. A licensed attorney must review before use in any legal matter. Demo for educational purposes.</div>
      <div class="chat-body" id="chatBody"></div>
      <div class="chat-foot">
        <div class="chat-foot-row">
          <textarea class="chat-inp" id="inp" placeholder="Ask Vera anything — research, drafting, governance, or AI ethics…" rows="1" onkeydown="onKey(event)" oninput="grow(this)"></textarea>
          <button class="send" id="sendBtn" onclick="send()">➤</button>
        </div>
        <div class="chat-note">Sandboxed demo · NYLS AI&amp;Data 2026 · No real client data is processed or retained.</div>
      </div>
    </div>
  </div>
</section>

<!-- DATA GOVERNANCE DEEP DIVE -->
<section class="sec gov-sec">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye" style="color:var(--gold-light)">Governance &amp; Data Architecture</div>
      <h2 class="sec-title" style="color:#fff">Enterprise-Grade Controls for Every Deployment</h2>
      <p class="sec-sub" style="color:rgba(255,255,255,.5)">Vera's architecture was designed from day one around the data governance requirements of law firms, in-house legal teams, and law schools.</p>
    </div>
    <div class="gov-grid">
      <div class="gov-cell"><div class="gov-icon">🔑</div><div class="gov-title">BYOK Architecture</div><div class="gov-desc">Your Anthropic Enterprise key. Your billing. SavvyLex is never in the data path — we provide configuration, not API proxy. Total cost transparency.</div><span class="gov-badge byok">BYOK</span></div>
      <div class="gov-cell"><div class="gov-icon">🗄️</div><div class="gov-title">Zero Data Retention</div><div class="gov-desc">Anthropic ZDR ensures no session data is used for model training, no retention post-session. Required for all Vera production environments. Not optional.</div><span class="gov-badge zdr">ZDR Required</span></div>
      <div class="gov-cell"><div class="gov-icon">📋</div><div class="gov-title">Immutable Audit Logs</div><div class="gov-desc">Every AI interaction is logged per matter, per attorney, with timestamps and prompt/response pairs. Exportable for privilege logs, malpractice defense, and bar review.</div><span class="gov-badge audit">Audit-Grade</span></div>
      <div class="gov-cell"><div class="gov-icon">🤖</div><div class="gov-title">LexAgents — Agentic Workflows</div><div class="gov-desc">Multi-step autonomous legal workflows: intake → research → draft → review → log. Each step has a human gate. No agent completes a task without attorney approval.</div><span class="gov-badge agent">Agentic</span></div>
      <div class="gov-cell"><div class="gov-icon">🌍</div><div class="gov-title">Data Residency &amp; Sovereignty</div><div class="gov-desc">U.S.-only data residency options. Client data never leaves your defined perimeter. Supports multi-jurisdiction compliance for global in-house teams.</div><span class="gov-badge zdr">US Residency</span></div>
      <div class="gov-cell"><div class="gov-icon">🔐</div><div class="gov-title">SSO / SCIM &amp; Access Control</div><div class="gov-desc">Role-based access by matter, practice group, or clearance level. SSO integration with your firm's identity provider. Full SCIM provisioning for enterprise deployments.</div><span class="gov-badge audit">Enterprise IAM</span></div>
      <div class="gov-cell"><div class="gov-icon">📊</div><div class="gov-title">Usage Analytics &amp; Oversight</div><div class="gov-desc">Firm-wide dashboards showing AI usage by attorney, matter, and practice group. Oversight tools for risk management partners and general counsel.</div><span class="gov-badge byok">Analytics</span></div>
      <div class="gov-cell"><div class="gov-icon">🏛️</div><div class="gov-title">Bar &amp; Professional Responsibility</div><div class="gov-desc">Vera's design satisfies ABA Model Rules 1.1 (competence), 1.6 (confidentiality), and 5.3 (supervision of non-lawyers). Built-in disclaimers on every output.</div><span class="gov-badge agent">ABA Aligned</span></div>
    </div>
  </div>
</section>

<!-- WHY VERA vs. RAW AI -->
<section class="sec cmp-sec">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye" style="color:var(--gold-light)">Why Vera</div>
      <h2 class="sec-title" style="color:#fff">Claude for Law vs. Claude Without Vera</h2>
      <p class="sec-sub" style="color:rgba(255,255,255,.5)">The difference isn't the model — it's the architecture. Vera turns a powerful language model into a responsible, governed, legal-grade platform.</p>
    </div>
    <div class="cmp-grid">
      <div class="cmp-card other">
        <div class="cmp-label">Without Vera</div>
        <div class="cmp-name">Raw Claude API</div>
        <div class="cmp-row"><span class="ic">✗</span>No privilege architecture — every prompt is a disclosure risk</div>
        <div class="cmp-row"><span class="ic">✗</span>No audit trail — zero defensibility in malpractice or bar review</div>
        <div class="cmp-row"><span class="ic">✗</span>No matter context — AI doesn't know your client or jurisdiction</div>
        <div class="cmp-row"><span class="ic">✗</span>No data residency controls — data processed wherever Anthropic routes it</div>
        <div class="cmp-row"><span class="ic">✗</span>No agentic governance — autonomous steps with no human gates</div>
        <div class="cmp-row"><span class="ic">✗</span>No attorney review workflow — AI output goes directly to use</div>
        <div class="cmp-row"><span class="ic">✗</span>No ABA 1.1 / 1.6 compliance framework built in</div>
      </div>
      <div class="cmp-card vera">
        <div class="cmp-best-badge">Vera Advantage</div>
        <div class="cmp-label">With Vera</div>
        <div class="cmp-name">Claude for Law via Vera</div>
        <div class="cmp-row"><span class="ic">✓</span>Privilege architecture baked into every session and output</div>
        <div class="cmp-row"><span class="ic">✓</span>Immutable audit log per matter — exportable for any review</div>
        <div class="cmp-row"><span class="ic">✓</span>Full client/matter/jurisdiction context loaded before first token</div>
        <div class="cmp-row"><span class="ic">✓</span>U.S. data residency + ZDR — your data stays yours</div>
        <div class="cmp-row"><span class="ic">✓</span>LexAgents with human gates at every autonomous step</div>
        <div class="cmp-row"><span class="ic">✓</span>Attorney review gate on every output — logged and signed off</div>
        <div class="cmp-row"><span class="ic">✓</span>ABA 1.1, 1.6, 5.3 compliance framework built in by design</div>
      </div>
    </div>
  </div>
</section>

<!-- EVENT / SPEAKER SECTION -->
<section class="sec event-sec" id="event">
  <div class="sec-inner">
    <div class="sec-hd">
      <div class="sec-eye" style="color:var(--gold-light)">NYLS AI&amp;Data 2026</div>
      <h2 class="sec-title" style="color:#fff">Meet SavvyLex at New York Law School</h2>
      <p class="sec-sub" style="color:rgba(255,255,255,.5)">We're bringing Vera to the NYLS AI&amp;Data conference — the premier gathering at the intersection of artificial intelligence, data governance, and the legal profession.</p>
    </div>
    <div class="event-card">
      <div class="event-header">
        <div>
          <div class="event-badge">🏛️ Official Presenter · NYLS AI&amp;Data 2026</div>
          <div class="event-title">AI &amp; Data for the<br/>Legal Profession</div>
          <div class="event-sub">New York Law School's AI&amp;Data conference brings together in-house counsel, law firm attorneys, faculty, and students to explore how artificial intelligence and data architecture are reshaping legal practice, education, and ethics. SavvyLex is presenting Vera as a live case study in responsible legal AI deployment.</div>
        </div>
        <div class="event-meta-box">
          <div class="event-meta-row">📅 <strong>When</strong>&nbsp;September 2026</div>
          <div class="event-meta-row">🏛️ <strong>Where</strong>&nbsp;New York Law School</div>
          <div class="event-meta-row">🎤 <strong>Role</strong>&nbsp;Presenter &amp; Sponsor</div>
          <div class="event-meta-row">🤖 <strong>Topic</strong>&nbsp;AI + Data Governance</div>
          <div class="event-meta-row">🔗 <strong>Demo</strong>&nbsp;Vera Live · Claude for Law</div>
        </div>
      </div>

      <div style="margin-bottom:32px">
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:18px">SavvyLex Presenters &amp; Team</div>
        <div class="speaker-grid">
          <div class="speaker-card">
            <div class="speaker-ava">⚖️</div>
            <div class="speaker-name">SavvyLex Legal AI</div>
            <div class="speaker-role">Vera Platform Demo<br/>Claude for Law Architecture</div>
          </div>
          <div class="speaker-card">
            <div class="speaker-ava">📊</div>
            <div class="speaker-name">Data &amp; Governance Track</div>
            <div class="speaker-role">BYOK · ZDR · Audit Trails<br/>Legal Data Residency</div>
          </div>
          <div class="speaker-card">
            <div class="speaker-ava">🤖</div>
            <div class="speaker-name">Agentic Workflows</div>
            <div class="speaker-role">LexAgents Live Demo<br/>MCP Connector Architecture</div>
          </div>
          <div class="speaker-card">
            <div class="speaker-ava">🎓</div>
            <div class="speaker-name">Legal Education Track</div>
            <div class="speaker-role">AI for Law Students<br/>Curriculum Integration</div>
          </div>
        </div>
      </div>

      <div style="background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.2);border-radius:14px;padding:22px 26px;margin-bottom:32px">
        <div style="font-size:13px;font-weight:700;color:var(--gold-light);margin-bottom:10px">📋 What SavvyLex Is Presenting at NYLS AI&amp;Data</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">
          <div style="font-size:13px;color:rgba(255,255,255,.65);display:flex;align-items:flex-start;gap:8px"><span style="color:var(--gold)">✦</span>Live Vera demo — real legal AI in action</div>
          <div style="font-size:13px;color:rgba(255,255,255,.65);display:flex;align-items:flex-start;gap:8px"><span style="color:var(--gold)">✦</span>BYOK architecture for law firms</div>
          <div style="font-size:13px;color:rgba(255,255,255,.65);display:flex;align-items:flex-start;gap:8px"><span style="color:var(--gold)">✦</span>Data governance &amp; ZDR deep dive</div>
          <div style="font-size:13px;color:rgba(255,255,255,.65);display:flex;align-items:flex-start;gap:8px"><span style="color:var(--gold)">✦</span>LexAgents: agentic legal workflows</div>
          <div style="font-size:13px;color:rgba(255,255,255,.65);display:flex;align-items:flex-start;gap:8px"><span style="color:var(--gold)">✦</span>ABA professional responsibility framework</div>
          <div style="font-size:13px;color:rgba(255,255,255,.65);display:flex;align-items:flex-start;gap:8px"><span style="color:var(--gold)">✦</span>AI for legal education &amp; clinics</div>
        </div>
      </div>

      <div class="sponsor-row">
        <span class="sponsor-label">Presenting at</span>
        <div class="sponsor-badge">🏛️ NYLS AI&amp;Data 2026</div>
        <div class="sponsor-badge">🤖 Claude for Law</div>
        <div class="sponsor-badge">⚖️ SavvyLex</div>
        <div class="sponsor-badge">🔒 Anthropic Enterprise + ZDR</div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-band">
  <div class="cta-band-inner">
    <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.3);border-radius:100px;padding:6px 18px;font-size:12px;font-weight:700;color:var(--gold-light);letter-spacing:.08em;text-transform:uppercase;margin-bottom:28px">🏛️ NYLS AI&amp;Data 2026 · September</div>
    <h2>Let's Talk at NYLS.</h2>
    <p>Whether you're a student exploring AI in law, an attorney evaluating legal tech, or a faculty member building AI curriculum — Vera was built for this moment. Come find us.</p>
    <div class="cta-options">
      <div class="cta-option" onclick="openModal('event')">
        <div class="cta-option-icon">🤝</div>
        <div class="cta-option-title">Meet at the Event</div>
        <div class="cta-option-desc">Connect with the SavvyLex team at NYLS in September 2026. Reserve your spot for a live Vera demo.</div>
      </div>
      <div class="cta-option" onclick="openModal('demo')">
        <div class="cta-option-icon">💻</div>
        <div class="cta-option-title">Book a Demo</div>
        <div class="cta-option-desc">Schedule a private Vera walkthrough for your firm, department, or law school program. Tailored to your use case.</div>
      </div>
      <div class="cta-option" onclick="openModal('pricing')">
        <div class="cta-option-icon">📋</div>
        <div class="cta-option-title">Get Pricing</div>
        <div class="cta-option-desc">Contact SavvyLex for a custom proposal. BYOK means you keep your Anthropic relationship — we just configure Vera for you.</div>
      </div>
    </div>
    <div class="cta-group">
      <button onclick="document.getElementById('demo').scrollIntoView({behavior:'smooth'})" class="btn-gold">✦ Try Vera Live Now</button>
      <button onclick="openModal('event')" class="btn-ghost">Connect at NYLS →</button>
    </div>
  </div>
</section>

<footer>
  <p>© 2026 SavvyLex · Vera for Legal · Presented at <strong style="color:rgba(255,255,255,.55)">NYLS AI&amp;Data 2026</strong> · Powered by <a href="#">Claude for Law</a> · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  <p style="margin-top:7px">All Vera outputs require attorney review before use in any legal matter. Not a substitute for legal advice. SavvyLex is a configuration and delivery layer for Anthropic's Claude models.</p>
</footer>

<!-- CONTACT MODAL -->
<div class="modal-overlay" id="modalOverlay" onclick="closeModalOutside(event)">
  <div class="modal">
    <div class="modal-head">
      <div>
        <h3 id="modalTitle">Connect at NYLS AI&amp;Data</h3>
        <p id="modalSub">Tell us about yourself — we'll reach out before September.</p>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div id="modalForm" class="modal-body">
      <div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:10px;letter-spacing:.04em;text-transform:uppercase">I am a</div>
      <div class="role-chips">
        <button class="role-chip" onclick="selRole(this,'In-House Counsel')">In-House Counsel</button>
        <button class="role-chip" onclick="selRole(this,'Law Firm Attorney')">Law Firm Attorney</button>
        <button class="role-chip" onclick="selRole(this,'Law Student')">Law Student</button>
        <button class="role-chip" onclick="selRole(this,'Faculty / Researcher')">Faculty / Researcher</button>
        <button class="role-chip" onclick="selRole(this,'Other')">Other</button>
      </div>
      <div class="form-2col">
        <div class="form-row"><label>First Name</label><input type="text" id="fName" placeholder="Alex" /></div>
        <div class="form-row"><label>Last Name</label><input type="text" id="lName" placeholder="Rivera" /></div>
      </div>
      <div class="form-row"><label>Work / School Email</label><input type="email" id="fEmail" placeholder="alex@yourfirm.com" /></div>
      <div class="form-row"><label>Firm / Organization / School</label><input type="text" id="fOrg" placeholder="Your organization" /></div>
      <div class="form-row">
        <label>What are you most interested in?</label>
        <select id="fInterest">
          <option value="">Select...</option>
          <option>Live Vera Demo at NYLS</option>
          <option>Private Demo for My Firm</option>
          <option>Pricing Information</option>
          <option>Data Governance Deep Dive</option>
          <option>AI + Legal Education</option>
          <option>Speaking / Partnership</option>
        </select>
      </div>
      <div class="form-row"><label>Message (optional)</label><textarea id="fNote" placeholder="Tell us about your use case or what you'd like to discuss at NYLS…"></textarea></div>
      <button class="modal-submit" onclick="submitForm()">Send to SavvyLex →</button>
      <p style="font-size:11px;color:var(--g400);text-align:center;margin-top:10px">We respond within 1 business day. See you at NYLS.</p>
    </div>
    <div id="modalSuccess" class="modal-success" style="display:none">
      <div class="check">✅</div>
      <h4>See You at NYLS!</h4>
      <p>Thanks — a SavvyLex advisor will reach out to <strong id="successEmail" style="color:var(--navy)"></strong> before September to confirm details and set up your demo.</p>
      <button class="btn-gold" style="margin-top:24px;border:none;cursor:pointer" onclick="closeModal()">Back to Vera →</button>
    </div>
  </div>
</div>

<script>
const SC = [
  {
    matter:"Law Student Research — First Amendment Memo",
    context:"NYLS · 1L Constitutional Law",
    convo:[
      {r:"v",t:"Hi — I'm Vera, your AI legal research assistant. I see you're working on a First Amendment memo for your Con Law class. What's the research question?"},
      {r:"u",t:"I need to analyze whether a university's social media policy restricting student speech on school platforms violates the First Amendment."},
      {r:"v",t:"Great research question. Here's the framework:\n\n<strong>Threshold Issue — Public vs. Private University</strong>\nFirst Amendment applies only to <em>state action</em>. If this is a public university, students have constitutional protections. Private universities are governed by contract law and their own policies.\n\n<strong>Forum Analysis (if public university):</strong>\n<ul><li><strong>Traditional public forum</strong> — highest protection, government can't restrict based on content (e.g., campus quad)</li><li><strong>Limited/designated public forum</strong> — school can limit to relevant subject matter; viewpoint-neutral restrictions allowed</li><li><strong>Non-public forum</strong> — broadest restriction authority; only needs to be reasonable and viewpoint-neutral</li></ul>\n\n<strong>Key Cases to Research:</strong>\n<ul><li><em>Tinker v. Des Moines</em> (1969) — student speech rights foundation</li><li><em>Mahanoy Area School Dist. v. B.L.</em> (2021) — off-campus online speech</li><li><em>Rosenberger v. Rector</em> (1995) — viewpoint discrimination in limited forums</li></ul>\n\n<div class='alert-box info'>📚 <div><strong>Memo Structure Suggestion:</strong> Issue → Rule → Mahanoy analysis → Application to your facts → Conclusion. Want me to draft the full memo structure?</div></div>"}
    ]
  },
  {
    matter:"In-House Counsel — SaaS Master Agreement Review",
    context:"In-House Legal · Technology Company",
    convo:[
      {r:"v",t:"I have the SaaS Master Agreement loaded for your review. 47 pages. I'll run a red flag analysis prioritized by risk level. Ready?"},
      {r:"u",t:"Yes — give me the top issues I need to flag for business before we redline."},
      {r:"v",t:"<strong>Red Flag Summary — SaaS Master Agreement</strong>\n\n<strong>🔴 Critical (3 issues):</strong>\n<ul><li><strong>§8.2 — Data Processing:</strong> Vendor claims broad license to use customer data for 'product improvement.' Requires your data governance review — may conflict with client confidentiality obligations.</li><li><strong>§14.1 — Limitation of Liability:</strong> Cap at 3 months of fees. For a mission-critical platform, this is inadequate — negotiate to 12 months or annual contract value.</li><li><strong>§11.4 — Termination for Convenience:</strong> 90-day notice period is asymmetric — vendor can terminate in 30 days. Demand parity.</li></ul>\n\n<strong>🟡 High Priority (2 issues):</strong>\n<ul><li><strong>§6 — SLA:</strong> 99.5% uptime with credit remedy only. No right to terminate for chronic failure. Add termination right after 3 consecutive SLA breaches.</li><li><strong>§9 — Audit Rights:</strong> Missing entirely. Add annual audit right for security compliance and data handling.</li></ul>\n\n<div class='alert-box warn'>⚠️ <div><strong>§8.2 Data License is Priority #1.</strong> Do not execute without resolving — potential conflict with your client confidentiality obligations under applicable bar rules.</div></div>"}
    ]
  },
  {
    matter:"AI Data Governance — Legal Department AI Policy",
    context:"Legal Ops · AI Governance",
    convo:[
      {r:"v",t:"You're drafting an AI governance policy for your legal department. I'll build this around the key risk vectors: privilege, data residency, attorney supervision, and vendor risk. What's your organization type?"},
      {r:"u",t:"We're a 500-person company with an in-house legal team of 12. We want to allow AI tools but need a governance framework first."},
      {r:"v",t:"Here's your AI governance framework structure:\n\n<strong>Legal Department AI Policy — Core Components</strong>\n\n<strong>1. Permitted Tools Registry</strong>\nMaintain an approved list. Each tool must clear: data residency audit, confidentiality review, privilege risk assessment, and vendor BAA if applicable.\n\n<strong>2. Data Classification Rules</strong>\n<ul><li><span class='tag-inline tag-data'>Privileged</span> — attorney-client communications. AI tools must have ZDR or equivalent. No training on this data.</li><li><span class='tag-inline tag-data'>Confidential</span> — business sensitive. Approved tools only, no third-party sharing.</li><li><span class='tag-inline'>Internal</span> — general use with standard controls.</li></ul>\n\n<strong>3. Attorney Supervision Requirement</strong>\nAll AI-generated legal work product requires review and approval by a licensed attorney before use. Log all AI-assisted work in matter management system.\n\n<strong>4. Vendor Risk Tiers</strong>\n<ul><li>Tier 1: Direct API (BYOK model) — highest control, lowest risk</li><li>Tier 2: Approved SaaS with DPA + ZDR — acceptable with controls</li><li>Tier 3: Consumer AI tools — prohibited for legal work product</li></ul>\n\n<div class='alert-box ok'>✓ <div><strong>Vera's BYOK + ZDR architecture satisfies Tier 1.</strong> Vera qualifies for legal work product under this framework out of the box.</div></div>"}
    ]
  },
  {
    matter:"Alvarez Industries — IRC §482 Transfer Pricing",
    context:"Tax Controversy · IRS Exam",
    convo:[
      {r:"v",t:"Good morning. I have the Alvarez Industries matter loaded — potential IRC §482 exposure on intercompany pricing with their Mexican subsidiary. What would you like to tackle first?"},
      {r:"u",t:"Give me the §482 transfer pricing risk overview and what the IRS is most likely to challenge."},
      {r:"v",t:"Here's the §482 landscape for Alvarez:\n\n<strong>Core Rule:</strong> IRC §482 authorizes the IRS to reallocate income between controlled entities to reflect arm's-length pricing. The benchmark is the <strong>Comparable Uncontrolled Price (CUP) method</strong> or Best Method Rule under Treas. Reg. §1.482-1(c).\n\n<strong>IRS Audit Focus Areas:</strong>\n<ul><li><strong>Services charges</strong> — U.S. parent to Mexican sub, subject to Services Cost Method (Reg. §1.482-9(b))</li><li><strong>IP licensing</strong> — highest risk; IRS compares royalty rates to market comparables</li><li><strong>Intercompany loans</strong> — IRS applies AFR as floor</li></ul>\n\n<strong>Penalty Exposure:</strong> Without contemporaneous documentation under Reg. §1.6662-6(d), Alvarez faces a 20% accuracy-related penalty — 40% if gross underpayment.\n\n<div class='alert-box warn'>⚠️ <div><strong>Action Required:</strong> Confirm whether Alvarez has a transfer pricing study on file. Critical gap before any IRS contact.</div></div>"}
    ]
  },
  {
    matter:"LexAgents — Agentic Contract Workflow",
    context:"Agentic AI · MCP Demo",
    convo:[
      {r:"v",t:"I'm running LexAgents — Vera's agentic workflow engine. I've received a new vendor NDA for review. Initiating autonomous workflow. Each step will pause for your approval before proceeding.\n\n<strong>Workflow: NDA Review → Redline → Approval</strong>\n<ul><li>✅ Step 1 — Document received and classified as NDA (One-Way, Vendor)</li><li>⏳ Step 2 — Running red flag analysis via Vera...</li></ul>"},
      {r:"u",t:"Approve step 2 — run the analysis."},
      {r:"v",t:"<strong>Step 2 Complete — Red Flag Analysis</strong>\n\n<strong>Issues found (4):</strong>\n<ul><li>🔴 Residuals clause (§9) — effectively voids NDA for retained information</li><li>🔴 No governing law specified — defaults are unpredictable</li><li>🟡 2-year term — below market for tech IP (recommend 3–5 years)</li><li>🟡 Missing injunctive relief clause — limits your remedies on breach</li></ul>\n\n<strong>Next step — Step 3: Auto-generate redline in Word via M365 MCP connector.</strong>\n\n<div class='alert-box info'>🤖 <div><strong>Human Gate Required.</strong> LexAgents will not auto-send the redline. Approve Step 3 to generate the draft, then review before it leaves Vera.</div></div>"},
      {r:"u",t:"Approve step 3."},
      {r:"v",t:"✅ <strong>Step 3 Complete — Redline Generated</strong>\n\nDraft NDA redline created in your iManage matter folder:\n<ul><li>Residuals clause struck in full</li><li>Governing law added: New York, SDNY jurisdiction</li><li>Term extended to 3 years</li><li>Injunctive relief clause added at §12</li></ul>\n\n<strong>Step 4 (Final): Route to supervising attorney for review and approval.</strong> Document will not leave your system until attorney sign-off is logged.\n\n<div class='alert-box ok'>✓ <div><strong>Audit Trail Updated.</strong> All 4 steps logged with timestamps, prompts, and outputs to the matter file. Attorney review pending.</div></div>"}
    ]
  },
  {
    matter:"AI Ethics — ABA Rules & Attorney Competence",
    context:"Professional Responsibility · AI Ethics",
    convo:[
      {r:"v",t:"This is the AI Ethics scenario. I can help analyze how the ABA Model Rules apply to attorney use of AI — a critical issue for every lawyer using tools like me. What's the specific question?"},
      {r:"u",t:"Does ABA Rule 1.1 require attorneys to understand how AI tools like Vera work before using them in practice?"},
      {r:"v",t:"Yes — and this is one of the most important professional responsibility questions in legal AI today.\n\n<strong>ABA Model Rule 1.1 — Competence</strong>\nRequires 'legal knowledge, skill, thoroughness, and preparation reasonably necessary for the representation.' Comment 8 (2012 amendment) adds: attorneys must keep abreast of '<em>changes in the law and its practice, including the benefits and risks associated with relevant technology.</em>'\n\n<strong>What this means for AI:</strong>\n<ul><li>Attorneys must understand what AI tools can and cannot do reliably</li><li>Attorneys must supervise AI output — not just accept it</li><li>Attorneys must understand data handling, privilege risk, and output limitations</li></ul>\n\n<strong>Formal Ethics Opinions:</strong>\n<ul><li>ABA Formal Op. 512 (2024) — GenAI: competence, confidentiality, supervision obligations</li><li>Florida Bar Op. 24-1 (2024) — supervision, disclosure, and confidentiality for AI tools</li><li>Cal. State Bar Op. 2023-1 — confidentiality obligations when using AI</li></ul>\n\n<div class='alert-box info'>📋 <div><strong>Vera's Design Response:</strong> Every Vera output is labeled 'Attorney Review Required.' Audit logs document supervision. ZDR protects confidentiality. This architecture is a direct response to Rule 1.1 and 1.6 obligations.</div></div>"}
    ]
  }
];

let cur=0, busy=false, rIdx=0;
const fallbacks=[
  "Great question. Let me pull the relevant authority and give you a structured analysis.",
  "I'd approach this by looking at the intersection of the applicable rule and the specific facts. Here's the framework...",
  "The case law here has evolved significantly post-2023. The key decisions to anchor on are the most recent circuit-level opinions on this exact issue.",
  "From a data governance perspective, this is a Tier 1 risk item — let me walk through the implications for your specific deployment.",
  "The ABA's 2024 formal opinion addresses this directly. The short answer is yes, with important nuances depending on the jurisdiction.",
  "Noted and logged to the session audit trail. Want me to draft a memo summarizing this analysis for the matter file?",
  "This is one of the core AI + Data questions the NYLS conference is designed to tackle. Here's how Vera's architecture answers it..."
];

function pickScenario(i){
  document.querySelectorAll('.sc-chip').forEach((c,j)=>c.classList.toggle('active',j===i));
  cur=i;
  document.getElementById('matterLbl').textContent=SC[i].matter;
  document.getElementById('contextLbl').textContent=SC[i].context;
  renderConvo(i);
}

function renderConvo(i){
  const b=document.getElementById('chatBody');
  b.innerHTML='';
  SC[i].convo.forEach((m,j)=>setTimeout(()=>addMsg(m.r,m.t),j*120));
}

function addMsg(role,text){
  const b=document.getElementById('chatBody');
  const w=document.createElement('div');w.className='msg '+role;
  const av=document.createElement('div');av.className='msg-av';av.textContent=role==='v'?'⚖️':'YOU';
  const bub=document.createElement('div');bub.className='msg-bub';
  bub.innerHTML=text.replace(/\\n/g,'\n').replace(/\n/g,'<br/>');
  w.appendChild(av);w.appendChild(bub);b.appendChild(w);b.scrollTop=b.scrollHeight;
}

function showTyping(){
  const b=document.getElementById('chatBody');
  const d=document.createElement('div');d.className='typing';d.id='typ';
  d.innerHTML='<div class="typing-av">⚖️</div><div class="typing-bub"><div class="td"></div><div class="td"></div><div class="td"></div></div>';
  b.appendChild(d);b.scrollTop=b.scrollHeight;
}
function hideTyping(){const t=document.getElementById('typ');if(t)t.remove();}

function send(){
  const inp=document.getElementById('inp');const txt=inp.value.trim();
  if(!txt||busy)return;busy=true;inp.value='';grow(inp);
  document.getElementById('sendBtn').disabled=true;
  addMsg('u',txt);showTyping();
  setTimeout(()=>{
    hideTyping();
    addMsg('v',fallbacks[rIdx++%fallbacks.length]);
    busy=false;
    document.getElementById('sendBtn').disabled=false;
  },1400+Math.random()*800);
}
function onKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}
function grow(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,110)+'px';}

// MODAL
let selRoleVal='';
function openModal(type){
  if(type==='demo'){
    document.getElementById('modalTitle').textContent='Book a Vera Demo';
    document.getElementById('modalSub').textContent="We'll set up a private walkthrough tailored to your role and use case.";
  } else if(type==='pricing'){
    document.getElementById('modalTitle').textContent='Get Pricing from SavvyLex';
    document.getElementById('modalSub').textContent='Contact us for a custom quote. BYOK means no AI token costs from us.';
  } else {
    document.getElementById('modalTitle').innerHTML='Connect at NYLS AI&amp;Data';
    document.getElementById('modalSub').textContent='Tell us about yourself — we\'ll reach out before September.';
  }
  selRoleVal='';
  document.querySelectorAll('.role-chip').forEach(c=>c.classList.remove('sel'));
  document.getElementById('modalForm').style.display='block';
  document.getElementById('modalSuccess').style.display='none';
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');document.body.style.overflow='';}
function closeModalOutside(e){if(e.target===document.getElementById('modalOverlay'))closeModal();}
function selRole(el,role){
  selRoleVal=role;
  document.querySelectorAll('.role-chip').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
}
function submitForm(){
  const email=document.getElementById('fEmail').value.trim();
  const name=document.getElementById('fName').value.trim();
  const org=document.getElementById('fOrg').value.trim();
  if(!email||!name){alert('Please enter your name and email.');return;}
  const role=selRoleVal||'Not specified';
  const interest=document.getElementById('fInterest').value||'General';
  const note=document.getElementById('fNote').value||'';
  const lname=document.getElementById('lName').value.trim();
  const subject=encodeURIComponent('NYLS AI&Data 2026 — '+interest+' ('+role+')');
  const body=encodeURIComponent('Name: '+name+' '+lname+'\\nEmail: '+email+'\\nOrganization: '+org+'\\nRole: '+role+'\\nInterest: '+interest+'\\n\\nMessage:\\n'+note);
  window.open('mailto:hello@savvylex.com?subject='+subject+'&body='+body);
  document.getElementById('modalForm').style.display='none';
  document.getElementById('successEmail').textContent=email;
  document.getElementById('modalSuccess').style.display='block';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.addEventListener('DOMContentLoaded',()=>renderConvo(0));
</script>
</body>
</html>`;
    return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
});
