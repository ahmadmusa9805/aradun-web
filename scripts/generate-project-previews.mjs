/** Original fictional UI studies. Run with Node 24 --import tsx. No external sites/data. */
import { mkdirSync } from "node:fs";
import { conceptProjects } from "../frontend/src/modules/content/data/concept-projects.ts";

const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
const palettes = [
  "#85644f",
  "#254b74",
  "#387d75",
  "#6553a1",
  "#b76838",
  "#27726c",
  "#557027",
  "#98564c",
  "#c27528",
  "#176e83",
  "#85619c",
  "#28684e",
  "#6256a8",
  "#167b86",
  "#2b7863",
  "#9b663b",
  "#4567a0",
  "#984b53",
  "#9a3f44",
  "#624bc1",
  "#48634d",
  "#956e31",
  "#42677f",
  "#9a5149",
];
const list = (items) =>
  `<div class="rows">${items.map((item, i) => `<div><span class="dot">${String(i + 1).padStart(2, "0")}</span><strong>${escape(item)}</strong><span class="muted">Review →</span></div>`).join("")}</div>`;
const tiles = (items) =>
  `<div class="tiles">${items.map((item, i) => `<article><small>0${i + 1} / EXPLORE</small><h3>${escape(item)}</h3><p>A clear next step.</p><span>Explore →</span></article>`).join("")}</div>`;
const art = (kind, n = 0) =>
  `<div class="art art-${kind} art-${n}"><i></i><b></b><em></em><span></span></div>`;
const calendar = () =>
  `<div class="calendar">${["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => `<small>${d}</small>`).join("")}${Array.from({ length: 28 }, (_, i) => `<div class="${[5, 10, 14, 18, 22].includes(i) ? "selected" : ""}">${i + 1}</div>`).join("")}</div>`;
const table = (items, headings = ["AREA", "OWNER", "REVIEW"]) =>
  `<div class="table"><div class="table-head">${headings.map((h) => `<span>${h}</span>`).join("")}</div>${items.map((item, i) => `<div><strong>${escape(item)}</strong><span>${["Operations", "Product", "Service team"][i]}</span><span class="pill">${["In review", "Scheduled", "Ready"][i]}</span></div>`).join("")}</div>`;
const intro = (p) =>
  `<p class="eyebrow">${escape(p.category)} / DESIGN STUDY</p><h1>${escape(p.headline)}</h1>`;
const button = (p) => `<button>${escape(p.action)} ↗</button>`;
const panel = (heading, body) =>
  `<section class="panel"><h3>${heading}</h3>${body}</section>`;
function render(p) {
  const items = p.items;
  const head = intro(p);
  switch (p.screen) {
    case "studio":
      return `<main class="studio"><div class="split"><div>${head}<p class="lead">Interiors, materials and everyday spaces. A considered perspective on how we live.</p>${button(p)}</div>${art("room")}</div>${tiles(items)}</main>`;
    case "advisory":
      return `<main class="advisory">${head}<div class="split"><div><p class="lead">Practical conversations. A thoughtful plan. A clear direction.</p>${button(p)}<blockquote>Progress begins with the right questions.</blockquote></div>${list(items)}</div><div class="ribbon">DISCOVER THE CONTEXT <b>01 — Listen</b><b>02 — Plan</b><b>03 — Move forward</b></div></main>`;
    case "appointments":
      return `<main>${head}<div class="search">Choose a specialty <span>Preferred location</span><button>Find care ↗</button></div><div class="tiles practitioners">${items.map((x, i) => `<article>${art("portrait", i)}<small>CARE TEAM / ${i + 1}</small><h3>${escape(x)}</h3><p>Explore practitioner profile</p><button>View preferred times</button></article>`).join("")}</div></main>`;
    case "qualification":
      return `<main class="workspace">${head}<div class="split thirds">${panel("Incoming requests", list(items))}${panel("Website redesign request", `<span class="pill">Awaiting review</span><h2>A clearer digital presence</h2><p>Interest: Web & Software</p><hr><h3>Qualification checklist</h3>${list(["Review the brief", "Clarify priorities", "Assign the next step"])}`)}</div></main>`;
    case "pipeline":
      return `<main class="workspace">${head}<div class="board">${items.map((x, i) => `<section><h3>${escape(x)}</h3>${[0, 1].map((_, j) => `<article><span class="pill">${j ? "Follow-up" : "Review"}</span><h3>${["Studio website inquiry", "Operations discussion", "Campaign planning"][i]}</h3><p>${j ? "Clarify the project brief" : "Prepare the next conversation"}</p><hr><small>Assigned to the service team</small></article>`).join("")}</section>`).join("")}</div></main>`;
    case "workflow":
      return `<main class="workspace">${head}<div class="flow">${items.map((x, i) => `<article><small>STEP ${i + 1}</small><h3>${escape(x)}</h3><span>${i === 1 ? "Human approval" : "Process step"}</span></article>${i < 2 ? "<b>→</b>" : ""}`).join("")}</div><div class="split">${panel("Review requirements", list(["Request context", "Responsible owner", "Handoff notes"]))}${panel("Activity", list(["Draft workflow created", "Review step added", "Handoff defined"]))}</div></main>`;
    case "campaign":
      return `<main class="campaign"><div class="split"><div>${head}<p class="lead">Considered objects. Useful details. A collection shaped around daily life.</p>${button(p)}</div>${art("objects")}</div>${tiles(items)}</main>`;
    case "content-calendar":
      return `<main>${head}<div class="split wide">${calendar()}${panel("Story queue", list(items))}</div><div class="legend">● Editorial &nbsp; ● Product &nbsp; ● Community</div></main>`;
    case "lead-campaign":
      return `<main class="energy"><div class="split"><div>${head}<p class="lead">Start with your property, your priorities and the questions that matter.</p>${art("solar")}</div><section class="panel form"><small>START A CONVERSATION</small><h2>Your home. Your next step.</h2>${["Name", "Email", "Property type", "What would you like to explore?"].map((x) => `<label>${x}<div class="input"></div></label>`).join("")}${button(p)}</section></div></main>`;
    case "mobile-service":
      return `<main class="mobile"><div class="mobile-copy">${head}<p>Request updates and support conversations, clearly connected.</p></div>${phone("Your support", `${list(items)}<button>New request +</button>`, 0)}${phone("Request conversation", `<span class="pill">In progress</span><div class="bubble">I'd like an update on my request.</div><div class="bubble reply">Your request is with the support team.</div><div class="bubble">Thank you. I've added the details.</div><div class="input">Write a message…</div>`, 1)}</main>`;
    case "mobile-appointment":
      return `<main class="mobile lavender"><div class="mobile-copy">${head}<p>A day, a preferred time and a clear visit summary.</p></div>${phone("Choose a day", `${calendar()}<h3>Preferred time</h3><div class="slots">09:30 &nbsp; 11:00 &nbsp; 14:30</div><button>Continue →</button>`, 0)}${phone("Visit summary", `${art("portrait")}<h3>Wellness consultation</h3><p>Tuesday · 11:00</p><p>Time zone shown before request</p><hr><span class="pill">Request pending</span><button>Review details</button>`, 1)}</main>`;
    case "mobile-field":
      return `<main class="mobile field"><div class="mobile-copy">${head}<p>Assigned visits, route context and the checks that matter.</p></div>${phone("Today's route", `${art("map")}${list(["North site", "Workshop", "East site"])}<button>View next stop →</button>`, 0)}${phone("Site checklist", `<span class="pill">Visit in progress</span><h3>North site inspection</h3>${list(items)}<div class="input">Add a handoff note…</div><button>Review completion</button>`, 1)}</main>`;
    case "release":
      return `<main class="workspace">${head}<div class="ribbon"><span class="pill">RELEASE CANDIDATE</span><b>Build → Staging → Review → Release</b></div><div class="flow">${items.map((x, i) => `<article><small>STAGE ${i + 1}</small><h3>${x}</h3><p>${i === 2 ? "Waiting for review" : "Checks prepared"}</p></article>`).join("")}</div>${table(["Development environment", "Staging environment", "Release checklist"])}</main>`;
    case "cloud":
      return `<main class="workspace">${head}<div class="split">${panel("Service topology", `<div class="topology"><b>Gateway</b><i>↓</i><div>${items.map((x) => `<span>${x}</span>`).join("")}</div></div>`)}${panel("Resource activity · sample", `<div class="chart">${[25, 42, 38, 65, 53, 72, 60, 81, 70, 66, 85, 74].map((n) => `<i style="height:${n}%"></i>`).join("")}</div>`)}</div>${table(items, ["SERVICE", "OWNER", "REVIEW"])}</main>`;
    case "status":
      return `<main class="status">${head}<div class="status-banner">● Sample status overview</div>${items.map((x, i) => `<section class="status-row"><b>${x}</b><span>Example component history</span><div>${Array.from({ length: 32 }, (_, j) => `<i class="${j === i * 8 + 3 ? "notice" : ""}"></i>`).join("")}</div></section>`).join("")}<h3>Recent updates</h3><p>Scheduled maintenance · Communication prepared</p></main>`;
    case "security":
      return `<main class="workspace">${head}<div class="tiles">${["Priority findings", "Assigned reviews", "Next actions"].map((x, i) => `<article><small>REVIEW AREA</small><h2>${i === 0 ? "Triage" : i === 1 ? "Ownership" : "Plan"}</h2><p>${x}</p></article>`).join("")}</div>${table(items, ["FINDING AREA", "OWNER", "REVIEW"])}</main>`;
    case "access":
      return `<main class="workspace">${head}<div class="split thirds">${panel("Review scope", list(items))}<section class="panel"><h3>Permission matrix</h3><div class="matrix"><b>Account</b><b>Read</b><b>Edit</b><b>Admin</b>${["Content team", "Service team", "Background worker", "Project reviewer"].map((x, i) => `<strong>${x}</strong><span>●</span><span>${i % 2 ? "—" : "●"}</span><span>${i === 1 ? "Review" : "—"}</span>`).join("")}</div><p>Review decisions are separate from granted permissions.</p></section></div></main>`;
    case "incident":
      return `<main class="workspace">${head}<div class="split">${panel("Response sequence", `<div class="vertical-flow">${items.map((x, i) => `<article><small>PHASE ${i + 1}</small><h3>${x}</h3><p>Responsible owner and review checkpoint</p></article>`).join("")}</div>`)}${panel("Coordination notes", `<span class="pill">Planning exercise</span><h2>Shared context</h2><p>Incident lead · Service owner · Communications</p>${list(["Confirm the scope", "Record decisions", "Prepare the update"])}`)}</div></main>`;
    case "brand":
      return `<main>${head}<div class="brand-board"><article class="wordmark"><small>IDENTITY STUDY</small><h2>FORME</h2><p>A clear point of view.</p></article><div class="swatches"><i></i><i></i><i></i></div><article class="stationery"><small>TYPOGRAPHY & APPLICATION</small><h2>Aa</h2><b>FORME STUDIO</b><p>Ideas, shaped with care.</p></article></div></main>`;
    case "library":
      return `<main class="workspace">${head}<div class="split thirds">${panel("Foundations", list(items))}<div class="component-grid">${panel("Actions", `<button>Primary action</button><p><span class="pill">Selected state</span></p><button class="secondary">Secondary action</button>`)}${panel("Form controls", `<label>Project name<div class="input">Workspace concept</div></label><p>✓ Ready for review</p>`)}${panel("Colour tokens", `<div class="swatches"><i></i><i></i><i></i></div>`)}${panel("Navigation", `<div class="ribbon">Overview <b>Components</b> States</div>`)}</div></div></main>`;
    case "portfolio":
      return `<main class="portfolio">${head}<div class="portfolio-grid">${items.map((x, i) => `<article>${art(i === 1 ? "room" : "objects", i)}<small>0${i + 1} / ${x}</small></article>`).join("")}</div></main>`;
    case "video-portfolio":
      return `<main class="cinema">${head}<div class="film-hero">${art("landscape")}<strong>Perspective in motion.</strong><span>▷</span></div><div class="ribbon">${items.map((x, i) => `<b>0${i + 1} / ${x}</b>`).join("")}</div></main>`;
    case "video-review":
      return `<main class="cinema">${head}<div class="split wide"><div><div class="film-hero small">${art("landscape")}<span>▷</span></div><div class="timeline"><i></i><i></i><i></i><i></i></div><small>00:24 / Review cut · Sample frame</small></div>${panel("Time-coded feedback", list(items.map((x, i) => `00:${12 + i * 9} · ${x}`)))}</div></main>`;
    case "storyboard":
      return `<main>${head}<div class="storyboards">${[...items, ...items].map((x, i) => `<article>${art(i % 2 ? "objects" : "landscape", i)}<small>SCENE ${String(i + 1).padStart(2, "0")}</small><h3>${x}</h3><p>${["Wide establishing shot", "Detail composition", "Closing frame"][i % 3]}</p></article>`).join("")}</div></main>`;
    default:
      throw Error(`Missing screen: ${p.screen}`);
  }
}
function phone(title, body, index) {
  return `<section class="phone phone-${index}"><div class="notch"></div><small>09:41 &nbsp; ···</small><h2>${title}</h2>${body}<div class="phone-nav">Home &nbsp; • &nbsp; Activity &nbsp; • &nbsp; Profile</div></section>`;
}
const css = `*{box-sizing:border-box}body{margin:0;background:#f7f5f0;color:#202a2b;font:14px Arial,sans-serif}header{height:67px;display:flex;align-items:center;justify-content:space-between;padding:0 38px;border-bottom:1px solid #ddd8cf;background:#fff}header b{font-size:18px;letter-spacing:-.04em}header small{font-size:9px;letter-spacing:.13em;color:#637072}nav{display:flex;gap:28px;font-size:11px}main{padding:34px 38px;height:653px;overflow:hidden}.eyebrow{color:var(--accent);font-size:9px;font-weight:bold;letter-spacing:.16em}h1{font-size:38px;line-height:1.05;letter-spacing:-.045em;margin:14px 0 26px;max-width:750px}h2{font-size:25px;letter-spacing:-.035em}h3{font-size:16px;line-height:1.25}p{line-height:1.6;color:#637173}.lead{font-size:18px;max-width:420px}button{border:0;background:var(--accent);color:#fff;padding:14px 20px;font:inherit;font-size:11px}small{font-size:9px;letter-spacing:.1em}.split{display:grid;grid-template-columns:1fr 1fr;gap:25px}.split.thirds{grid-template-columns:.8fr 1.7fr}.split.wide{grid-template-columns:1.8fr 1fr}.tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:25px}.tiles article,.panel{background:#fff;border:1px solid #dde1de;padding:22px}.tiles small{color:var(--accent)}.tiles article h3{font-size:20px}.panel h3{margin-top:0}.ribbon{display:flex;justify-content:space-between;align-items:center;padding:22px 0;border-block:1px solid #d4d9d6;margin-top:28px;font-size:11px}.rows>div{display:flex;align-items:center;gap:12px;padding:21px 0;border-bottom:1px solid #e2e5e2}.rows strong{font-size:13px}.dot{width:25px;height:25px;display:grid;place-items:center;background:color-mix(in srgb,var(--accent) 12%,white);color:var(--accent);border-radius:50%;font-size:9px}.muted{margin-left:auto;font-size:9px;color:#657373}.art{position:relative;overflow:hidden;min-height:150px;background:#dbe0d6}.art i,.art b,.art em,.art span{position:absolute;display:block}.art-room{height:350px;background:linear-gradient(110deg,#dfd2bf,#eee7db 63%,#cdc1ad)}.art-room i{width:200px;height:125px;background:#9eaa8c;left:45px;bottom:25px;border-radius:20px 20px 2px 2px;box-shadow:12px 12px 0 #626c5d}.art-room b{width:145px;height:200px;border:9px solid #a38d72;right:25px;top:30px;background:linear-gradient(90deg,#e7e1d1 48%,#b6bba5 49%)}.art-room em{width:85px;height:40px;border-radius:50%;background:#a8835b;bottom:16px;right:70px}.art-room span{height:80px;width:2px;background:#716851;bottom:40px;right:110px}.studio h1{font-family:Georgia,serif;font-size:53px}.advisory{background:#eff2f5}.advisory h1{max-width:820px;font-size:56px}.advisory blockquote{font:22px Georgia;margin:42px 0;color:var(--accent)}.search{display:flex;justify-content:space-between;padding:18px;background:#fff;border:1px solid #d9e2df}.practitioners .art{height:175px}.art-portrait{height:115px;background:#e5eee8}.art-portrait i{width:70px;height:70px;border-radius:50%;background:#c9bba7;left:calc(50% - 35px);top:17px}.art-portrait b{width:125px;height:110px;background:var(--accent);border-radius:65px 65px 0 0;bottom:-15px;left:calc(50% - 62px)}.art-1{filter:hue-rotate(35deg)}.art-2{filter:hue-rotate(100deg)}.art-3{filter:hue-rotate(150deg)}.art-4{filter:hue-rotate(210deg)}.art-5{filter:hue-rotate(270deg)}.workspace{background:#f0f3f4}.pill{display:inline-block;border-radius:20px;padding:6px 10px;background:color-mix(in srgb,var(--accent) 12%,white);color:var(--accent);font-size:10px}.board{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.board section{padding:15px;background:#e2e8e8}.board article{padding:18px;margin-top:16px;background:#fff;box-shadow:0 2px 5px #0001}.board h3{font-size:15px}.flow{display:flex;align-items:center;gap:16px;padding:25px 0}.flow article{flex:1;background:#fff;border:1px solid #d7dddf;border-top:4px solid var(--accent);padding:25px}.flow> b{color:var(--accent);font-size:25px}.campaign{background:#f0e8db}.campaign h1{font-family:Georgia;font-size:52px}.art-objects{height:340px;background:#d2d9c3}.art-objects i{width:130px;height:200px;left:50px;bottom:30px;background:#e9e0c8;border-radius:50px 50px 8px 8px;transform:rotate(-12deg);box-shadow:15px 20px 25px #0002}.art-objects b{width:140px;height:140px;border-radius:50%;right:35px;top:35px;background:var(--accent);box-shadow:0 20px 20px #0002}.art-objects em{width:100px;height:110px;right:90px;bottom:0;background:#ac7e57;border-radius:4px}.calendar{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;background:#fff;padding:18px;border:1px solid #dee3df}.calendar>div{min-height:63px;padding:10px;background:#f4f6f3}.calendar small{padding:10px 0}.calendar .selected{background:var(--accent);color:#fff}.legend{margin-top:20px;color:var(--accent)}.energy{background:#f5efe0}.energy h1{font-size:49px}.art-solar{height:250px;background:linear-gradient(#d9e5dc 60%,#b7c79b 61%)}.art-solar i{width:220px;height:100px;background:repeating-linear-gradient(90deg,#344d5b 0 30px,#8dabb4 31px 32px);transform:skew(-20deg);bottom:25px;left:70px;border:7px solid #eceee3}.art-solar b{width:55px;height:55px;border-radius:50%;background:#e0b95a;right:40px;top:25px}.form label{display:block;margin:16px 0;font-size:11px}.input{padding:12px;min-height:35px;border:1px solid #d9dedb;margin-top:7px;color:#6d7775;font-size:11px}.mobile{display:flex;align-items:center;gap:35px;background:#e2eef0}.mobile-copy{width:320px;flex-shrink:0}.mobile h1{font-size:38px}.phone{width:245px;height:535px;flex-shrink:0;background:#fff;border:7px solid #223238;border-radius:34px;padding:25px 15px;position:relative;box-shadow:12px 20px 30px #21323825}.phone-1{margin-top:38px}.notch{position:absolute;width:85px;height:16px;background:#223238;top:0;left:calc(50% - 42px);border-radius:0 0 12px 12px}.phone h2{font-size:23px;margin:20px 0}.phone .rows>div{padding:16px 0}.phone .rows .muted{display:none}.phone button{margin-top:20px;width:100%;border-radius:10px}.phone-nav{position:absolute;bottom:20px;font-size:9px;color:#5c747b}.bubble{font-size:11px;padding:15px;background:#e9eff2;line-height:1.5;border-radius:14px;margin-top:20px}.bubble.reply{background:var(--accent);color:#fff;margin-left:22px}.phone .calendar{padding:0;gap:2px;border:0}.phone .calendar>div{font-size:10px;min-height:27px;padding:6px}.phone .calendar small{font-size:6px}.lavender{background:#ede8f4}.field{background:#e5eee3}.slots{padding:12px 3px;color:var(--accent);font-size:12px}.phone .art-map{height:190px}.art-map{background:repeating-linear-gradient(35deg,#e4eadb 0 35px,#fff 36px 42px,#e4eadb 43px 75px)}.art-map i{width:110px;height:90px;border:6px solid var(--accent);border-bottom:0;transform:rotate(-18deg);top:45px;left:40px;border-radius:15px}.art-map b,.art-map em{width:18px;height:18px;border:4px solid white;border-radius:50%;background:var(--accent);top:45px;left:40px}.art-map em{top:115px;left:145px}.table{margin-top:25px;background:white;border:1px solid #dce2df}.table>div{display:grid;grid-template-columns:2fr 1fr 1fr;gap:20px;padding:20px;border-bottom:1px solid #e4e8e4;font-size:12px}.table-head{background:#e1e7e6;font-size:9px!important}.topology{text-align:center;padding:10px}.topology>b{display:block;padding:15px;background:var(--accent);color:#fff;width:120px;margin:auto}.topology i{display:block;font-size:25px}.topology>div{display:flex;gap:8px}.topology span{padding:15px 8px;border:1px solid #ccd7d7;font-size:11px}.chart{height:170px;display:flex;align-items:end;gap:10px;border-bottom:1px solid #aaa;padding:15px}.chart i{flex:1;background:var(--accent);opacity:.7}.status{max-width:900px;margin:auto;background:#fff}.status-banner{padding:18px;background:#e5f0e7;color:#276a43}.status-row{padding:20px 0;border-bottom:1px solid #ddd}.status-row>span{float:right;font-size:10px;color:#758079}.status-row>div{display:flex;gap:4px;margin-top:12px}.status-row i{height:29px;flex:1;background:#528b6b}.status-row .notice{background:#d5ac5d}.matrix{display:grid;grid-template-columns:2fr repeat(3,1fr);gap:1px;background:#dbe2e4;margin:25px 0}.matrix>*{padding:18px 8px;background:#fff;font-size:11px}.matrix>b{background:#e9eff4}.vertical-flow{border-left:2px solid var(--accent);padding-left:22px}.vertical-flow article{padding:5px 0 12px}.brand-board{display:grid;grid-template-columns:1.3fr .5fr 1fr;gap:22px}.wordmark{height:350px;background:var(--accent);color:#fff;padding:35px}.wordmark h2{font-size:70px;margin:90px 0 10px;letter-spacing:-.07em}.wordmark p{color:#fff}.swatches{display:flex;gap:10px}.brand-board>.swatches{display:grid}.swatches i{background:var(--accent);min-width:40px;min-height:60px;flex:1}.swatches i:nth-child(2){background:#dbcbb5}.swatches i:nth-child(3){background:#263a32}.stationery{padding:30px;background:#e5d7bf}.stationery h2{font:100px Georgia;margin:40px 0 15px}.component-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}.secondary{background:#fff;color:var(--accent);border:1px solid var(--accent)}.component-grid .ribbon{font-size:9px;gap:10px}.portfolio h1{font-family:Georgia;font-size:45px}.portfolio-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:18px}.portfolio-grid article:nth-child(2){padding-top:45px}.portfolio-grid .art{height:310px}.portfolio-grid small{display:block;margin-top:12px}.cinema{background:#162329;color:white}.cinema .eyebrow{color:#c7b69b}.film-hero{height:335px;position:relative;overflow:hidden}.film-hero .art{height:100%}.art-landscape{background:linear-gradient(#b9cbd1 0 45%,#c6b291 46% 55%,#61756a 56%)}.art-landscape i{width:480px;height:280px;transform:rotate(35deg);background:#314e51;left:100px;bottom:-180px}.art-landscape b{width:400px;height:220px;transform:rotate(-25deg);background:#8a9a88;right:-40px;bottom:-100px}.art-landscape em{width:45px;height:45px;border-radius:50%;background:#e8d5a5;top:30px;right:90px}.film-hero>strong{position:absolute;bottom:30px;left:30px;font-size:35px;text-shadow:0 1px 8px #000}.film-hero>span{position:absolute;right:35px;top:35px;font-size:35px;color:white}.cinema .panel{color:#253337}.film-hero.small{height:300px}.timeline{display:flex;gap:6px;padding:15px 0}.timeline i{background:var(--accent);height:25px;flex:1}.timeline i:nth-child(even){background:#d8c19e}.storyboards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.storyboards article{background:white;padding:12px;border:1px solid #daddd5}.storyboards .art{height:130px;min-height:130px}.storyboards h3{font-size:14px;margin:8px 0}.storyboards p{font-size:11px;margin:0}.storyboards small{display:block;margin-top:8px}`;

process.env.PLAYWRIGHT_BROWSERS_PATH ??= ".tools/playwright-browsers";
const { chromium } = await import("@playwright/test");
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1100, height: 720 },
    deviceScaleFactor: 1,
  });
  mkdirSync("frontend/public/images/projects", { recursive: true });
  for (const p of conceptProjects) {
    const index = Number(p.cover.match(/study-(\d+)/)[1]) - 1;
    await page.setContent(
      `<html><head><meta charset="utf-8"><style>:root{--accent:${palettes[index]}}${css}</style></head><body><header><b>${escape(p.brand)}</b><nav><span>Overview</span><span>Explore</span><span>${escape(p.items[0])}</span></nav><small>INDEPENDENT DESIGN STUDY</small></header>${render(p)}</body></html>`,
    );
    await page.screenshot({ path: `frontend/public${p.cover}` });
  }
  console.log(
    "Generated 24 unique, brief-matched original interface previews.",
  );
} finally {
  await browser.close();
}
