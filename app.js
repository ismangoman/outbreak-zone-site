/* OUTBREAK ZONE // A static, fully client rendered site */
const MODPACK = 'https://modrinth.com/modpack/outbreakzone';
const SERVER = 'outbreakzone.net';
const APP_LINK = 'https://modrinth.com/app';
const PRISM_LINK = 'https://prismlauncher.org/';

const paths = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  diagonal: '<path d="M6 18 18 6M8 6h10v10"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="1"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21zm0 0V21m4-13h8m-8 4h6"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M5 5 19 19M19 5 5 19"/>',
  moon: '<path d="M20.2 14.1A9 9 0 0 1 9.9 3.8 9 9 0 1 0 20.2 14.1Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 1v4m0 14v4M1 12h4m14 0h4"/>',
  shield: '<path d="M12 2 20 5v6c0 5.4-3.3 8.8-8 11-4.7-2.2-8-5.6-8-11V5z"/><path d="m9 12 2 2 4-4"/>',
  heart: '<path d="M20.3 5.7a5.2 5.2 0 0 0-7.4 0l-.9.9-.9-.9a5.2 5.2 0 0 0-7.4 7.4L12 21l8.3-8a5.2 5.2 0 0 0 0-7.3Z"/>',
  grave: '<path d="M7 21V9a5 5 0 0 1 10 0v12M5 21h14M12 6v7m-3-4h6"/>',
  sword: '<path d="m14 5 5-2 2 2-2 5-8 8-3-3zM8 15l-4 4m-1-5 7 7"/>',
  border: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M8 3v4M3 8h4m10 13v-4m4-1h-4"/>',
  pack: '<rect x="5" y="7" width="14" height="15" rx="3"/><path d="M9 7V5a3 3 0 0 1 6 0v2M9 13h6m-3 0v4m-7-2h14"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>',
  alert: '<path d="m12 2 10 19H2L12 2Zm0 7v5m0 4h.01"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.4 8.6-2.5 5.1-5.1 2.5 2.5-5.1z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  left: '<path d="M19 12H5m6-6-6 6 6 6"/>',
  volume: '<path d="M5 9v6h4l5 4V5L9 9zm12-2a7 7 0 0 1 0 10m2-13a11 11 0 0 1 0 16"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  file: '<path d="M6 2h8l5 5v15H6zM14 2v5h5M9 12h7m-7 4h7"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  layers: '<path d="m12 2 10 6-10 6L2 8zm-10 10 10 6 10-6M2 16l10 6 10-6"/>',
  zap: '<path d="m13 2-9 11h7l-1 9 10-12h-7z"/>',
  external: '<path d="M12 4h8v8M20 4l-9 9M20 15v5H4V4h5"/>',
  question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-1.2 1.1-1.8 1.5-1.8 3.3m0 3h.01"/>'
};
function icon(name, size=20, extra='') {
  return `<svg class="icon ${extra}" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.arrow}</svg>`;
}
function mark(){
  return `<svg viewBox="0 0 44 44" class="brandmark" aria-hidden="true"><path d="M22 3a19 19 0 1 0 0 38 19 19 0 0 0 0-38Z" fill="none" stroke="currentColor" stroke-width="2.3"/><path d="m12 31 8-20h6L18 33zm12-20h10L26 28h9v6H21l10-18h-7z" fill="currentColor"/></svg>`;
}
function logo(){return `<a class="logo" href="#/" aria-label="Outbreak Zone home">${mark()}<span class="logo-wordmark"><strong>OUTBREAK</strong><strong>ZONE<span class="logo-registered">//</span></strong></span></a>`;}
function sectionTag(num, text){return `<div class="section-tag"><span class="tag-box">${num}</span><span>${text}</span><span class="tag-rule"></span></div>`;}
function arrowLink(text, attrs='', cls=''){return `<a class="arrow-link ${cls}" ${attrs}><span>${text}</span>${icon('diagonal',18)}</a>`;}

const GALLERY = [
  {src:'assets/screenshots/sunset-city.jpg',num:'01',title:'THE CITY STILL STANDS',label:'THE CITY',alt:'Overgrown ruined city rooftops at sunset',large:true},
  {src:'assets/screenshots/shop-aisle.jpg',num:'02',title:'CHECK EVERY CORNER',label:'SCAVENGING',alt:'Zombies between the shelves of an abandoned shop'},
  {src:'assets/screenshots/hallway-zombies.jpg',num:'03',title:'THEY HEARD YOU',label:'THE INFECTED',alt:'Zombies approaching through an overgrown red-carpeted hallway'},
  {src:'assets/screenshots/night-horde.jpg',num:'04',title:'NOTHING STAYS QUIET',label:'AFTER DARK',alt:'A horde of zombies gathered in the city streets at night',large:true},
];
const FEATURES = [
  {icon:'shield',no:'01',title:'A CITY TO RETURN TO',detail:'Spawn among the ruins. Secure entry. Your own private chest loot. A place to regroup before heading out.'},
  {icon:'zap',no:'02',title:'NOT ALL DEAD ARE EQUAL',detail:'Rushers charge. Pukers spit. Crawlers strike from below. Every encounter feels different.'},
  {icon:'eye',no:'03',title:'THEY CAN FIND YOU',detail:'Noise and scent draw them in. They climb ladders, smash doors and tear through glass.'},
  {icon:'moon',no:'04',title:'EVERY FOURTH NIGHT',detail:'The blood moon rises. More enemies, harder waves and escalating danger up to level 6.'},
  {icon:'heart',no:'05',title:'FIGHT FOR YOUR FRIENDS',detail:'Get knocked down instead of dying outright. Your team has two minutes to bring you back.'},
  {icon:'grave',no:'06',title:'NOTHING IS FREE',detail:'Die and your gear stays in a gravestone. Your coordinates are sent to chat. Get back fast.'},
  {icon:'sword',no:'07',title:'STEEL OVER BULLETS',detail:'Longswords, halberds, warhammers, shields, backpacks and more. No guns. Just nerve.'},
  {icon:'target',no:'08',title:'ONLY THE INFECTED',detail:'No creepers. No skeletons. No spiders. Just zombies and a world full of bad decisions.'},
  {icon:'border',no:'09',title:'NOWHERE TO ESCAPE',detail:'A world 6000 blocks wide. No Nether. Whatever you need, you find out here.'},
];

function galleryCard(item){
  return `<div class="gallery-card ${item.large?'gallery-card-large':''}" data-reveal>
    <img class="gallery-image" src="${item.src}" alt="${item.alt}" loading="lazy" />
    <div class="gallery-caption"><span>${item.num} / ${item.label}</span><strong>${item.title}</strong>${icon('diagonal',20)}</div>
  </div>`;
}
function skyline(){
  const buildings=[
    [0,69,11,'a'],[9,54,9,'b'],[17,63,11,'c'],[28,40,7,'d'],[35,57,11,'e'],[46,77,10,'f'],[56,49,7,'g'],[62,68,13,'h'],[74,43,9,'i'],[83,60,11,'j'],[94,77,8,'k']
  ];
  return `<div class="hero-art" aria-hidden="true"><div class="art-noise"></div><div class="art-sun-rays"></div><div class="red-moon"><span class="moon-crater crater-one"></span><span class="moon-crater crater-two"></span><span class="moon-crater crater-three"></span></div><div class="art-haze art-haze-one"></div><div class="art-haze art-haze-two"></div><div class="cityline cityline-back">${buildings.map(([x,h,w,t])=>`<div class="building building-${t}" style="--x:${x}%;--h:${h}%;--w:${w}%"><i></i><i></i><i></i><i></i></div>`).join('')}</div><div class="cityline cityline-front">${buildings.slice().reverse().map(([x,h,w,t])=>`<div class="building building-${t}" style="--x:${x}%;--h:${Math.max(20,h-20)}%;--w:${w+3}%"><i></i><i></i><i></i></div>`).join('')}</div><div class="art-ground"></div><div class="art-person"><span class="person-head"></span><span class="person-body"></span><span class="person-arm"></span></div><div class="art-fog"></div><div class="art-vignette"></div><div class="art-corner art-corner-top">SECTOR 001 / SURVIVAL ZONE</div><div class="art-corner art-corner-bottom">SIGNAL LOST&nbsp;&nbsp; 00:04:00</div><div class="art-crosshair art-crosshair-one"></div><div class="art-crosshair art-crosshair-two"></div></div>`;
}
function header(isDocs=false){
  return `<header class="site-header ${isDocs?'header-docs':''}">
    <div class="header-shell">${logo()}
      <nav id="headerNav" class="header-nav" aria-label="Main navigation">
        <button class="nav-link" data-anchor="about">The world</button>
        <button class="nav-link" data-anchor="features">Features</button>
        <button class="nav-link" data-anchor="join">How to join</button>
        <a href="#/docs/getting-started" class="nav-link ${isDocs?'nav-link-active':''}">Field manual</a>
      </nav>
      <div class="header-actions"><button class="header-search" data-open-search aria-label="Search documentation" title="Search documentation">${icon('search',18)}</button>
        <button class="header-cta" type="button" data-anchor="join">JOIN THE SERVER ${icon('diagonal',15)}</button>
        <button class="mobile-menu" data-menu-toggle aria-label="Open navigation" aria-expanded="false">${icon('menu',24)}</button></div>
    </div>
  </header>`;
}
function footer(){return `<footer class="site-footer"><div class="footer-top"><div class="footer-brand">${logo()}<p>THE WORLD ENDED.<br>THE FIGHT DID NOT.</p></div><div class="footer-col"><h3>EXPLORE</h3><button data-anchor="about">The world</button><button data-anchor="features">Features</button><button data-anchor="join">How to join</button><a href="#/docs/getting-started">Field manual</a></div><div class="footer-col"><h3>ESSENTIALS</h3><a href="${MODPACK}" target="_blank" rel="noopener noreferrer">Download modpack ${icon('diagonal',13)}</a><a href="${APP_LINK}" target="_blank" rel="noopener noreferrer">Modrinth App ${icon('diagonal',13)}</a><a href="${PRISM_LINK}" target="_blank" rel="noopener noreferrer">Prism Launcher ${icon('diagonal',13)}</a></div><div class="footer-signoff"><span>YOU KNOW<br>WHAT TO DO.</span><a href="${MODPACK}" target="_blank" rel="noopener noreferrer" aria-label="Download Outbreak Zone modpack">${icon('diagonal',29)}</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} OUTBREAK ZONE</span><span>MINECRAFT JAVA / 1.20.1 / FORGE 47.4.10</span><a href="#/">BACK TO THE SURFACE ${icon('arrow',13)}</a></div></footer>`;}

function home(){return `${header()}
<main id="main">
  <section class="hero" id="top"><div class="hero-grain"></div><div class="hero-shell">
    <div class="hero-copy"><div class="eyebrow hero-eyebrow"><span class="live-pip"></span> MINECRAFT JAVA ZOMBIE SURVIVAL SERVER <span class="eyebrow-index">/ 001</span></div>
      
      <h1><span>The Infection</span> <span>Has Spread.</span> <span class="hero-accent">Now survive it<span class="hero-period">.</span></span></h1>
      <p class="hero-subcopy">A modded Minecraft zombie survival server. Start in a ruined city, venture into the wasteland and fight to survive with your friends. <strong>The dead can hear you.</strong></p>
      <div class="join-context"><span class="join-context-pip"></span><strong>WANT TO PLAY ON OUR SERVER?</strong><span>Install our required modpack to join.</span></div>
      <div class="hero-buttons"><a class="button button-primary button-xl" href="${MODPACK}" target="_blank" rel="noopener noreferrer"><span class="button-icon">${icon('download',23)}</span><span>DOWNLOAD MODPACK</span>${icon('diagonal',22)}</a><a class="hero-text-link" href="#/docs/getting-started">READ THE FIELD MANUAL ${icon('arrow',17)}</a></div>
      <div class="ip-widget"><div class="ip-info"><span class="meta-label">BACKUP SERVER ADDRESS</span><span class="ip-row"><span>${SERVER}</span><button class="copy-ip" data-copy-ip aria-label="Copy server address" title="Copy address">${icon('copy',17)} <span>COPY</span></button></span></div><div class="ip-aside">${icon('info',16)}<span>Already in your modpack multiplayer list</span></div></div>
    </div>
    <div class="hero-visual">${skyline()}<div class="hero-visual-side">THEY ARE LISTENING</div><div class="hero-visual-label"><span class="visual-label-icon">${icon('target',21)}</span><span><b>THREAT LEVEL</b><strong>CRITICAL</strong></span><i></i></div></div>
    <div class="hero-bottom-word" aria-hidden="true">OUTBREAK</div>
  </div></section>
  <div class="spec-strip" aria-label="Server details"><div class="spec-inner"><div><span class="spec-key">PLATFORM</span><strong>JAVA EDITION</strong></div><span class="spec-separator"></span><div><span class="spec-key">VERSION</span><strong>1.20.1</strong></div><span class="spec-separator"></span><div><span class="spec-key">MOD LOADER</span><strong>FORGE 47.4.10</strong></div><span class="spec-separator"></span><div><span class="spec-key">THREATS</span><strong>ZOMBIES ONLY</strong></div></div></div>
  <section class="section about-section" id="about"><div class="wide-container">${sectionTag('01','AFTER THE FALL')}
    <div class="about-layout"><div data-reveal><h2 class="section-headline">THE CITY IS<br><span>ALL YOU HAVE.</span></h2><div class="about-small-mark">${icon('compass',31)}<span>COORDINATES UNKNOWN<br>CHANCES UNLIKELY</span></div></div><div class="about-right" data-reveal><p class="section-intro">This is a Minecraft multiplayer zombie survival server. Civilization fell. The streets stayed.</p><p>Outbreak Zone drops you into a ruined, overgrown city, the closest thing to home you have left. Gather supplies, regroup with friends, then step into a wasteland that does not want you back.</p><p>The infected track noise, scent and movement from terrifying distances. They do not care that it is daylight. They do not stop at your door.</p><div class="about-points"><div><span>01 /</span><strong>SAFE CITY ENTRY</strong><small>A protected place to arrive</small></div><div><span>02 /</span><strong>PERSONAL LOOT</strong><small>City chests for every survivor</small></div><div><span>03 /</span><strong>REAL SURVIVAL</strong><small>One life is never guaranteed</small></div></div></div></div>
  </div></section>
  <section class="section features-section" id="features"><div class="wide-container">${sectionTag('02','THE WORLD FIGHTS BACK')}<div class="section-heading-row"><h2 class="section-headline">SURVIVAL HAS<br><span>NEW RULES.</span></h2><p>Nine reasons to stay alert.<br>Zero reasons to get comfortable.</p></div><div class="features-grid">${FEATURES.map(f=>`<article class="feature-card" data-reveal><div class="feature-top"><span>${f.no} / 09</span><div class="feature-icon">${icon(f.icon,25)}</div></div><div class="feature-bottom"><h3>${f.title}</h3><p>${f.detail}</p></div></article>`).join('')}</div></div></section>
  <section class="section nights-section" id="nights"><div class="wide-container">${sectionTag('03','AFTER DARK')}<div class="section-heading-row"><h2 class="section-headline">THE NIGHT<br><span>IS NOT YOURS.</span></h2><p>Every sunset is a warning.<br>Every fourth is a promise.</p></div><div class="nights-layout" data-reveal><article class="night-ordinary"><div class="night-topline"><span>STANDARD NIGHT</span>${icon('moon',22)}</div><span class="night-number">01 / 03</span><h3>THE DARK BRINGS THEM CLOSER.</h3><p>The infected hunt at night, but they do not vanish when the sun rises. Keep your light close and your exits closer.</p><div class="night-footer"><span class="dot"></span> CONSTANT THREAT</div></article><article class="night-blood"><div class="night-texture"></div><div class="blood-orb" aria-hidden="true"></div><div class="night-topline"><span>BLOOD MOON</span>${icon('alert',23)}</div><span class="night-number">04 / 04</span><h3>WHEN THE SKY BLEEDS, RUN.</h3><p>Every fourth night, the sky turns red. Fresh waves come every 30 seconds. Each blood moon gets tougher, up to level 6.</p><div class="night-footer"><span class="dot"></span> DUSK UNTIL DAWN</div></article></div><div class="moon-cycle" data-reveal><div class="cycle-heading"><span>THE FOUR NIGHT CYCLE</span><span>REPEAT. ESCALATE. SURVIVE.</span></div><div class="cycle-days"><div><span>01</span><strong>QUIET IS RELATIVE</strong></div><div><span>02</span><strong>STAY ALERT</strong></div><div><span>03</span><strong>PREPARE NOW</strong></div><div class="cycle-danger"><span>04</span><strong>BLOOD MOON ${icon('alert',18)}</strong></div></div><p>Blood moon waves do not happen in the city. Read the <a href="#/docs/blood-moon">blood moon survival guide ${icon('arrow',14)}</a>.</p></div></div></section>
  <section class="section join-section" id="join"><div class="wide-container">${sectionTag('04','YOUR WAY IN')}<div class="section-heading-row"><h2 class="section-headline">READY TO<br><span>ENTER THE ZONE?</span></h2><p>No complicated setup.<br>Get the pack. Get in. Stay alive.</p></div><div class="join-layout"><div class="join-steps">${[
  ['01','GET A LAUNCHER',`Install the <a href="${APP_LINK}" target="_blank" rel="noopener noreferrer">Modrinth App ${icon('diagonal',12)}</a> or <a href="${PRISM_LINK}" target="_blank" rel="noopener noreferrer">Prism Launcher ${icon('diagonal',12)}</a>. You will need Java 17.`],
  ['02','GET THE MODPACK',`Download the Outbreak Zone .mrpack from <a href="${MODPACK}" target="_blank" rel="noopener noreferrer">Modrinth ${icon('diagonal',12)}</a>.`],
  ['03','IMPORT THE FILE','In Modrinth App, choose Add instance then Import from file. In Prism, choose Add instance then Import. The pack installs about 80 mods automatically.'],
  ['04','GIVE IT SOME MEMORY','Allocate 4 to 6 GB of RAM. The pack runs Minecraft 1.20.1 on Forge 47.4.10.'],
  ['05','PRESS PLAY','Launch Minecraft, open Multiplayer and select Outbreak Zone. The server is already saved there.']
].map(([no,title,body])=>`<div class="join-step" data-reveal><span class="step-index">${no}</span><div><h3>${title}</h3><p>${body}</p></div><span class="step-line"></span></div>`).join('')}</div><aside class="join-aside" data-reveal><div class="join-aside-top"><div class="aside-symbol">${mark()}</div><span>YOUR TICKET OUT</span></div><h3>NOTHING LEFT<br>TO LOSE.</h3><p>Your multiplayer list is ready. All you need is the modpack.</p><a class="button button-primary aside-button" href="${MODPACK}" target="_blank" rel="noopener noreferrer">${icon('download',20)} DOWNLOAD MODPACK ${icon('diagonal',18)}</a><div class="aside-requirements"><div><span>MINECRAFT</span><strong>JAVA 1.20.1</strong></div><div><span>LOADER</span><strong>FORGE 47.4.10</strong></div><div><span>JAVA</span><strong>17 REQUIRED</strong></div><div><span>MEMORY</span><strong>4 TO 6 GB</strong></div></div><span class="aside-fineprint">REAL MINECRAFT ACCOUNTS ONLY</span></aside></div></div></section>
  <section class="section gallery-section" id="gallery"><div class="wide-container">${sectionTag('05','TRANSMISSIONS FROM THE ZONE')}<div class="section-heading-row"><h2 class="section-headline">A WORLD<br><span>LEFT BEHIND.</span></h2><p>What remains of the world.<br>What might remain of you.</p></div><div class="gallery-grid">${GALLERY.map(galleryCard).join('')}</div></div></section>
  <section class="manual-banner"><div class="wide-container manual-banner-inner"><div class="manual-banner-copy">${sectionTag('06','SURVIVAL INTELLIGENCE')}<h2>KNOW THE RULES.<br><span>OUTLIVE THE DEAD.</span></h2><p>Commands. Zombies. Revivals. Blood moons. Everything you need to make it through your first night.</p><a class="button button-light" href="#/docs/getting-started">${icon('book',21)} OPEN THE FIELD MANUAL ${icon('arrow',20)}</a></div><div class="manual-stamp" aria-hidden="true"><span>OZ</span><div>FIELD<br>MANUAL</div><small>ISSUE / 001</small></div></div></section>
</main>${footer()}`;}

function dsection(id, label, title, body){return {id,label,title,html:`<section class="doc-content-section" id="${id}"><div class="doc-section-label">${label}</div><h2>${title}</h2>${body}</section>`};}
function callout(kind,title,body){return `<aside class="doc-callout ${kind}"><div class="doc-callout-icon">${icon(kind==='warning'?'alert':kind==='success'?'check':'info',19)}</div><div><strong>${title}</strong><p>${body}</p></div></aside>`;}
function factTiles(items){return `<div class="doc-facts">${items.map(([label,value])=>`<div class="doc-fact"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>`;}
function bullets(items){return `<ul class="doc-list">${items.map(s=>`<li>${s}</li>`).join('')}</ul>`;}
function numberList(items){return `<ol class="doc-number-list">${items.map(s=>`<li>${s}</li>`).join('')}</ol>`;}
function commandBlock(cmd,desc){return `<div class="doc-command-row"><code>${cmd}</code><span>${desc}</span></div>`;}
function weaponTags(items){return `<div class="doc-tags">${items.map(s=>`<span>${s}</span>`).join('')}</div>`;}

const DOCS = [
{
  slug:'getting-started',label:'Getting started',short:'Your first minutes',icon:'compass',reading:'4 MIN READ',
  summary:'Your first spawn, the city safe zone, Adventure mode, city loot and what to do next.',
  intro:'You made it to the city. This is where your story starts, not where the danger ends.',
  sections:[
    dsection('your-first-spawn','01 / FIRST CONTACT','Welcome to the Apocalyptic City',`<p>You spawn in a ruined, overgrown city known as the <strong>Apocalyptic City</strong>. On your very first join, a short introduction plays in chat. You can replay it whenever you want with <code>/tutorial</code>.</p><p>The city is your home base. Find the other survivors, check the nearby loot and make a plan before venturing into the wasteland.</p>${callout('info','Do not mistake the whole city for a safe zone','Only the protected area around the city entry prevents hostile mobs from spawning and prevents players from hurting one another. Zombies can still appear in the rest of the city.')}`),
    dsection('city-protection','02 / BASE OPERATIONS','How city protection works',`${factTiles([['CITY ENTRY','PROTECTED'],['REST OF THE CITY','ZOMBIES POSSIBLE'],['IN THE CITY','ADVENTURE MODE'],['OUTSIDE THE CITY','SURVIVAL MODE']])}<p>While you are inside the city, regular players are in <strong>Adventure mode</strong>. You cannot place or break blocks there. The game switches you back to <strong>Survival mode</strong> when you leave.</p><p>The protected entry zone keeps hostile mobs from spawning and disables player damage. Outside that small area, stay alert. The city is not completely zombie free.</p>`),
    dsection('city-loot','03 / SCAVENGING','Loot belongs to you',`<p>City chests use <strong>Lootr</strong>, which gives every player their own separate loot from the same chest. Your friend opening a chest does not take the contents from you.</p><p>Expect light survival basics, not powerful equipment. The real supplies are out in the wasteland.</p>${callout('success','Your first move','Check your starter kit, take what you need from the city and use <code>/rtp</code> when you are ready to explore. Use <code>/city</code> to return.')}`),
  ]
},
{
  slug:'starter-kit',label:'Starter kit',short:'What you spawn with',icon:'pack',reading:'2 MIN READ',
  summary:'Everything you receive once when you first join the server.',
  intro:'You do not enter the outbreak empty handed. Here is exactly what you get.',
  sections:[
    dsection('kit-contents','01 / YOUR LOADOUT','First join supplies',`<p>Each new player receives this kit <strong>once</strong> on their first join. Look in your inventory before wandering away from spawn.</p><div class="kit-grid">${[
      ['STONE LONGSWORD','1','sword'],['STONE PICKAXE','1','sword'],['STONE AXE','1','sword'],['BOW','1','target'],['ARROWS','16','target'],['COOKED BEEF','16','heart'],['TORCHES','32','sun'],['SOPHISTICATED BACKPACK','1','pack'],['LEATHER ARMOR','FULL SET','shield']
    ].map(([name,qty,ic])=>`<div class="kit-item"><span class="kit-icon">${icon(ic,20)}</span><span>${name}</span><strong>${qty}</strong></div>`).join('')}</div>`),
    dsection('armor-and-backpack','02 / CHECK YOUR GEAR','Armor and backpack',`<p>Your <strong>leather armor is already equipped</strong> when you join. Your Sophisticated Backpack provides extra carrying space. Keep food, torches and spare supplies together so you can leave quickly.</p>${callout('warning','One kit per player','The starter kit is only given on your first join. Losing your gear will not give you another free kit. If you die, recover it from your grave.')}`),
  ]
},
{
  slug:'commands',label:'Commands',short:'The useful shortcuts',icon:'terminal',reading:'3 MIN READ',
  summary:'Every player command including random teleport, city return, tutorial and private messages.',
  intro:'Five seconds to leave. Fifteen seconds before you can escape a fight. Learn the difference.',
  sections:[
    dsection('travel-commands','01 / GET MOVING','Travel commands',`${commandBlock('/rtp','Starts a 5 second countdown, then sends you to a random safe spot in the wasteland. Works inside the city.')}${commandBlock('/city','Teleports you back to the city unless you were recently in combat.')}<p>During the <code>/rtp</code> countdown, <strong>do not move or take damage</strong>. Either action cancels your teleport.</p>${callout('warning','Combat stops your return','Hitting or being hit by a player or mob starts a 15 second combat tag. You cannot use <code>/city</code> until the tag expires.')}`),
    dsection('communication','02 / STAY IN TOUCH','Chat and utility',`${commandBlock('/tutorial','Replays the first join introduction in chat.')}${commandBlock('/msg','Sends a private message to another player.')}${commandBlock('/tell','Another way to send a private message.')}${commandBlock('/w','Short form for a private message.')}${commandBlock('/help','Shows available help information.')}${commandBlock('/list','Shows who is connected to the server.')}<p>Other commands are hidden from normal players. You only need the commands shown here to get around.</p>`),
    dsection('combat-disconnect','03 / EXIT SAFELY','Do not leave mid fight',`<p>If you disconnect during combat, you receive a <strong>20 second combat tag</strong> when you next log in. That prevents you from using <code>/city</code> immediately on your return.</p><p>Fight your way clear, wait for your combat tag to end and then travel home.</p>`)
  ]
},
{
  slug:'zombies',label:'Zombies',short:'Know the infected',icon:'target',reading:'5 MIN READ',
  summary:'How zombies track sound, scent and light, special types, block breaking, ladders and daylight.',
  intro:'The dead are not stupid anymore. They hear the things you hope they do not.',
  sections:[
    dsection('how-they-hunt','01 / DETECTION','They know you are there',`${factTiles([['SIGHT RANGE','ABOUT 32 BLOCKS'],['NOISE AND SCENT','MUCH FARTHER'],['DAYLIGHT','NO BURNING'],['WANDERING HORDES','DISABLED']])}<p>Zombies find you using <strong>sight, noise, scent and light</strong>. They can notice you from about 32 blocks away by sight and from considerably farther when they hear or smell you.</p><p>Fighting, breaking blocks and using pistons are particularly noisy. A simple fight can draw several more zombies into the area. Being quiet is often safer than being brave.</p>`),
    dsection('breaking-in','02 / BREACH','Walls are not a guarantee',`${bullets(['Zombies can climb ladders to reach elevated positions.','They can break doors in about 1 second.','They can destroy glass and other soft blocks in about 3 seconds.','They do not burn in the daylight. Sunlight is not a weapon.'])}${callout('warning','Glass does not count as protection','Do not stand beside a glass wall expecting it to stop them. Build solid, layered defenses and always leave yourself another way out.')}`),
    dsection('infected-types','03 / IDENTIFICATION','Meet the infected',`<div class="infected-grid"><div><span class="infected-number">TYPE 01</span><h3>RUSHER</h3><strong>50 HP</strong><p>A fast charger that closes the distance before you can react. Keep space between you and it.</p></div><div><span class="infected-number">TYPE 02</span><h3>PUKER</h3><strong>30 HP</strong><p>Spits projectiles from a distance. Do not assume you are safe just because it cannot reach you.</p></div><div><span class="infected-number">TYPE 03</span><h3>CRAWLER</h3><strong>15 HP</strong><p>Low to the ground and difficult to spot. Can attack using bones. Watch your feet.</p></div></div><p>Custom zombie skins and sounds make each encounter feel more threatening. Only zombies spawn naturally as hostile mobs. There are no naturally spawning creepers, skeletons, spiders, witches or phantoms.</p>`)
  ]
},
{
  slug:'blood-moon',label:'Blood moon',short:'The fourth night',icon:'moon',reading:'4 MIN READ',
  summary:'The four night cycle, 30 second waves, growing levels, warnings and ways to survive.',
  intro:'Every fourth night, the sky turns red and the rules change. Prepare before dusk.',
  sections:[
    dsection('night-cycle','01 / CYCLE','Every fourth night',`${factTiles([['FREQUENCY','EVERY 4TH NIGHT'],['BEGINS','DUSK'],['ENDS','DAWN'],['WAVE INTERVAL','30 SECONDS']])}<p>A blood moon begins at dusk on every fourth night and ends at dawn. Shortly before it begins, this warning appears in chat:</p><blockquote class="doc-quote">The air turns heavy. Tonight the sky bleeds red. Stay near the light.</blockquote><p>Once it starts, extra zombies spawn near each player in the overworld every 30 seconds. There are limits per player and across the server, but the pressure builds quickly.</p>`),
    dsection('rising-danger','02 / ESCALATION','Six levels of danger',`<p>Every blood moon gets more dangerous until the event reaches <strong>level 6</strong>. Higher levels bring more zombies, faster waves, and enemies with greater health, speed and damage.</p><div class="danger-scale"><div class="danger-scale-head"><span>FIRST BLOOD MOON</span><span>LEVEL 6</span></div><div class="danger-scale-bars">${[1,2,3,4,5,6].map(n=>`<div class="danger-bar" style="--bar:${23+n*13}%"><i></i><span>${String(n).padStart(2,'0')}</span></div>`).join('')}</div></div>${callout('info','The city is excluded','Blood moon waves never happen in the city. The city entry remains the safest place to regroup.')}`),
    dsection('survive-blood-moon','03 / SURVIVAL','Make it to morning',`${bullets(['Use plenty of light and keep your surroundings visible.','Build a fortified base with strong materials and multiple exits.','Stockpile food, weapons and spare shields before dusk.','Stay close to friends who can help you fight and revive you.','If the battle is going badly, escape before you are tagged in combat.'])}`)
  ]
},
{
  slug:'revival-and-graves',label:'Revival and graves',short:'Death is not instant',icon:'heart',reading:'5 MIN READ',
  summary:'The two minute knocked down state, rescue action, lava deaths and gravestone recovery.',
  intro:'A fatal hit does not always mean the end. Your friends still have time to save you.',
  sections:[
    dsection('knocked-down','01 / DOWN BUT NOT OUT','Two minutes to live',`${factTiles([['DOWNED TIMER','2 MINUTES'],['RESCUE DISTANCE','WITHIN 5 BLOCKS'],['RESCUE ACTION','ABOUT 2 SECONDS'],['REVIVED HEALTH','1 HEART']])}<p>When you would normally die, you are instead <strong>knocked down</strong> and begin glowing. You have two minutes before you die. While down, you cannot use a bow or your fists.</p><p>If you log out while knocked down, your timer pauses. You can choose to give up rather than wait.</p>`),
    dsection('rescue','02 / TEAMWORK','How to revive a friend',`${numberList(['Get within 5 blocks of the knocked down player.','Hold the rescue action for about 2 seconds.','Protect them while they get back to their feet.'])}<p>The revived player returns with <strong>1 heart</strong>, plus temporary Hunger and Weakness. Give them a moment to recover, food and somewhere safe to heal.</p>${callout('warning','Lava is different','Lava kills instantly. You do not enter the knocked down state when lava kills you.')}`),
    dsection('gravestones','03 / RECOVERY','Getting your items back',`<p>If you die, you respawn in the city. Your items remain in a <strong>gravestone</strong> at your death location. The coordinates of that grave are sent to you in chat.</p><p>Anyone can break a grave and access what is inside. Get back quickly, ideally with someone watching your back.</p>${callout('info','Do not discard the coordinates','Check your chat after death and record the location. A map waypoint can also help you find your way back.')}`)
  ]
},
{
  slug:'rules-and-settings',label:'Rules and settings',short:'How this world works',icon:'shield',reading:'4 MIN READ',
  summary:'Difficulty, PvP, inventory, sleeping, mob rules, the world border and fair play.',
  intro:'The wasteland has rules. Know them before a mistake costs you your gear.',
  sections:[
    dsection('server-settings','01 / THE FACTS','World settings',`<div class="settings-table">${[
      ['DIFFICULTY','Easy'],['PLAYER DAMAGE','Enabled outside the protected entry zone'],['MOB GRIEFING','Off'],['KEEP INVENTORY','Off'],['SLEEPING','All players required'],['NETHER','Disabled'],['WORLD BORDER','6000 blocks wide'],['NATURAL HOSTILE MOBS','Zombies only'],['ACCOUNT AUTHENTICATION','Online mode, real Minecraft accounts only'],['MAXIMUM PLAYERS','10']
    ].map(([a,b])=>`<div><span>${a}</span><strong>${b}</strong></div>`).join('')}</div><p>No creepers, skeletons, spiders, witches or phantoms naturally spawn. The world is focused on zombie survival.</p>`),
    dsection('combat-rules','02 / COMBAT','Combat tagging',`<p>Hitting or being hit by a mob or another player starts a <strong>15 second combat tag</strong>. While tagged, you cannot use <code>/city</code> to escape.</p><p>If you log out during a fight, a <strong>20 second tag</strong> applies when you log back in.</p>${callout('info','PvP and city safety','PvP is enabled outside the protected city entry area. The entry safe zone prevents players from damaging each other.')}`),
    dsection('team-rules','03 / GOOD SURVIVORS','Play fairly',`${bullets(['Do not grief other players or damage their builds.','Share useful supplies and discoveries where you can.','Revive your friends when it is safe to do so.','Treat other survivors with respect.'])}<p>Being a good teammate makes everyone more likely to survive the next night.</p>`)
  ]
},
{
  slug:'weapons-and-gear',label:'Weapons and gear',short:'What to bring',icon:'sword',reading:'4 MIN READ',
  summary:'Spartan Weaponry, shields, backpacks, utility mods and crafting helpers. No guns.',
  intro:'There are no guns here. Choose your weapon, protect your friends and keep your pack full.',
  sections:[
    dsection('weapon-types','01 / ARM YOURSELF','Spartan Weaponry',`<p>The server includes a large collection of melee and ranged weapons through <strong>Spartan Weaponry</strong>. Many are available in different metals and materials.</p>${weaponTags(['Greatswords','Longswords','Katanas','Halberds','Battleaxes','Warhammers','Glaives','Daggers','Spears','Javelins','Boomerangs','Longbows','Heavy crossbows','Rapiers','Sabers','Scythes','Quarterstaffs','Throwing knives','Tomahawks'])}${callout('info','No firearms','The pack does not include guns. Learn which melee weapon feels right, and keep a bow or throwing weapon ready for distance.')}`),
    dsection('defence-and-storage','02 / SURVIVE LONGER','Protection and utility',`${bullets(['Spartan Shields adds basic shields and tower shields.','Enchanted Arsenal adds more gear options.','Sophisticated Backpacks gives you portable inventory storage.','Curios provides extra equipment slots.','Iron Furnaces adds improved furnaces.'])}<p>Carry a reliable shield and a backup weapon. Extra storage is useful, but do not fill your backpack with things you cannot afford to lose.</p>`),
    dsection('helpful-client-mods','03 / YOUR TOOLS','Helpful client mods',`<div class="client-mod-list"><div><strong>JEI AND EMI</strong><p>Browse item recipes and check what you need to craft.</p></div><div><strong>JADE</strong><p>See useful information about the block or entity you are looking at.</p></div><div><strong>XAERO'S MINIMAP AND WORLD MAP</strong><p>Find your way around, record places worth revisiting and remember grave locations.</p></div></div>`)
  ]
},
{
  slug:'survival-tips',label:'Survival tips',short:'Stay one step ahead',icon:'compass',reading:'3 MIN READ',
  summary:'Practical advice for staying quiet, surviving the night, building defenses and playing as a team.',
  intro:'Most survivors are not defeated by one big mistake. It is all the little ones.',
  sections:[
    dsection('stay-unseen','01 / THE BASICS','Quiet wins fights',`${bullets(['Avoid unnecessary noise. Zombies can hear you from much farther away than they can see you.','Pick your battles. Fighting can attract even more infected.','Watch out for the low, sneaky Crawlers.','Remember that daylight does not burn zombies.'])}`),
    dsection('prepare-at-dusk','02 / AFTER DARK','Never improvise your shelter',`${bullets(['Carry torches, food, a shield and a spare weapon.','Make walls from solid blocks. Doors and glass are easy for the infected to break.','Build more than one escape route into your base.','Every fourth night brings a blood moon. Prepare before the sky goes red.'])}`),
    dsection('stick-together','03 / LIVE ANOTHER DAY','Stay near your team',`${bullets(['Travel with a friend when possible. A teammate can revive you if you are knocked down.','Remember <code>/city</code>. It is your route home when you are out of combat.','Learn a safe path to your grave before a difficult expedition.','Share food and supplies. A surviving teammate can save your life later.'])}${callout('success','A good first expedition','Loot your city chest, keep your starter food and torches, use <code>/rtp</code>, collect supplies and return with <code>/city</code> before nightfall.')}`)
  ]
},
{
  slug:'faq-and-troubleshooting',label:'FAQ and troubleshooting',short:'Fix common problems',icon:'question',reading:'5 MIN READ',
  summary:'Installation, importing the pack, Java 17, performance, accounts, server connection and optional shaders.',
  intro:'Something not working? Start here before you venture into the wasteland.',
  sections:[
    dsection('installing','01 / INSTALL','How do I install the modpack?',`<p>Install the <a href="${APP_LINK}" target="_blank" rel="noopener noreferrer">Modrinth App ${icon('diagonal',13)}</a> or <a href="${PRISM_LINK}" target="_blank" rel="noopener noreferrer">Prism Launcher ${icon('diagonal',13)}</a>, then download <a href="${MODPACK}" target="_blank" rel="noopener noreferrer">Outbreak Zone on Modrinth ${icon('diagonal',13)}</a>.</p><p>In Modrinth App, choose <strong>Add instance</strong>, then <strong>Import from file</strong>. In Prism, choose <strong>Add instance</strong>, then <strong>Import</strong>, and select the downloaded <code>.mrpack</code> file.</p><p>The pack installs about 80 mods automatically. It runs <strong>Minecraft 1.20.1</strong> with <strong>Forge 47.4.10</strong>.</p>`),
    dsection('import-fails','02 / TROUBLESHOOT','The pack will not import',`${numberList(['Make sure you downloaded the actual .mrpack file from the Modrinth page.','Use Modrinth App or Prism Launcher to import the file.','Check that your launcher is using Java 17.','Try the import again once the launcher is up to date.'])}<p>Do not manually place the .mrpack file into an ordinary mods folder. Import it through the launcher.</p>`),
    dsection('performance','03 / PERFORMANCE','The game is slow',`${bullets(['Allocate between 4 and 6 GB of RAM to the Minecraft instance.','Lower your render distance and graphics settings.','Close unnecessary programs before launching.','Try playing without shaders to see if performance improves.'])}<p>A large amount of RAM is not always better. Start around 4 GB and increase to 6 GB if needed.</p>`),
    dsection('connection','04 / CONNECTION','I cannot join the server',`${numberList(['Launch the Outbreak Zone modpack rather than ordinary Minecraft.','Check that it is Minecraft Java Edition 1.20.1 on Forge 47.4.10.','Make sure you are signed in with a genuine Minecraft account. The server uses online mode.','Choose Outbreak Zone from your multiplayer list. If it is missing, add <code>outbreakzone.net</code> manually.','Use <code>outbreakzone.net</code> as the Minecraft server address, not <code>www.outbreakzone.net</code>. The www address is for the website.'])}${callout('info','The address is only a backup','The modpack already includes the server in the multiplayer list. You normally do not need to type an IP address.')}`),
    dsection('shaders','05 / OPTIONAL','Can I use shaders?',`<p>Yes. Shaders are optional, client side and not included in the modpack. <strong>Oculus 1.8.0</strong> for Forge 1.20.1 works with the pack.</p><p>If your game runs slowly, disable shaders first and check whether performance improves.</p>`)
  ]
}
];

function docIcon(doc){return icon(doc.icon,18);}
function docsSidebar(current){return `<aside class="docs-sidebar" id="docsSidebar" aria-label="Documentation navigation"><div class="sidebar-inner"><div class="sidebar-label">SURVIVOR RESOURCES <span>V1.0</span></div><button class="docs-search-trigger" data-open-search>${icon('search',18)}<span>Search the manual</span><kbd>CTRL K</kbd></button><div class="sidebar-heading">FIELD MANUAL <span>${DOCS.length} PAGES</span></div><nav class="sidebar-nav" aria-label="Documentation pages">${DOCS.map((d,i)=>`<a href="#/docs/${d.slug}" class="sidebar-link ${d.slug===current.slug?'active':''}" ${d.slug===current.slug?'aria-current="page"':''}><span class="sidebar-item-index">${String(i+1).padStart(2,'0')}</span><span>${d.label}</span>${d.slug===current.slug?icon('chevron',16):''}</a>`).join('')}</nav><div class="sidebar-help"><div class="sidebar-help-icon">${icon('heart',23)}</div><strong>STILL ALIVE?</strong><p>Good. Keep it that way.</p><a href="${MODPACK}" target="_blank" rel="noopener noreferrer">GET THE MODPACK ${icon('diagonal',15)}</a></div></div></aside>`;}
function docNext(current){const i=DOCS.indexOf(current),next=DOCS[i+1],prev=DOCS[i-1];return `<nav class="doc-pager" aria-label="Documentation pages">${prev?`<a href="#/docs/${prev.slug}">${icon('left',21)}<span><small>PREVIOUS</small><strong>${prev.label}</strong></span></a>`:`<div class="doc-pager-placeholder"></div>`}${next?`<a href="#/docs/${next.slug}"><span><small>UP NEXT</small><strong>${next.label}</strong></span>${icon('arrow',21)}</a>`:`<a href="#/docs/getting-started"><span><small>BACK TO</small><strong>Getting started</strong></span>${icon('arrow',21)}</a>`}</nav>`;}
function docsPage(doc){let i=DOCS.indexOf(doc);return `${header(true)}<div class="docs-page"><div class="docs-surface"><button class="docs-mobile-browse" data-mobile-sidebar>${icon('menu',18)} BROWSE FIELD MANUAL ${icon('chevron',16)}</button><button class="sidebar-scrim" data-mobile-sidebar aria-label="Close documentation navigation"></button>${docsSidebar(doc)}<main class="doc-main" id="main"><div class="doc-crumbs"><a href="#/">HOME</a>${icon('chevron',12)}<a href="#/docs/getting-started">FIELD MANUAL</a>${icon('chevron',12)}<span>${doc.label.toUpperCase()}</span></div><div class="doc-heading"><div class="doc-kicker"><span>${String(i+1).padStart(2,'0')} / ${String(DOCS.length).padStart(2,'0')}</span><span>${icon('clock',13)} ${doc.reading}</span></div><h1>${doc.label}</h1><p>${doc.intro}</p></div><div class="doc-meta-bar"><span>${icon('book',18)} PLAYER DOCUMENTATION</span><span>MINECRAFT 1.20.1 / FORGE 47.4.10</span></div><div class="doc-body">${doc.sections.map(s=>s.html).join('')}</div><div class="doc-end-note"><span>${icon('check',17)} END OF ENTRY</span><p>You are one page closer to surviving another night.</p></div>${docNext(doc)}<div class="doc-bottom-banner"><div><span>READY FOR THE ZONE?</span><strong>THE WASTELAND IS WAITING.</strong></div><a href="${MODPACK}" target="_blank" rel="noopener noreferrer">DOWNLOAD MODPACK ${icon('diagonal',18)}</a></div></main><aside class="doc-toc"><div class="toc-sticky"><span class="toc-label">ON THIS PAGE</span><nav aria-label="On this page">${doc.sections.map(s=>`<a href="#${s.id}" data-toc="${s.id}">${s.title}</a>`).join('')}</nav><div class="toc-divider"></div><span class="toc-label">SERVER INFO</span><div class="toc-spec"><span>EDITION</span><strong>JAVA</strong></div><div class="toc-spec"><span>VERSION</span><strong>1.20.1</strong></div><div class="toc-spec"><span>FORGE</span><strong>47.4.10</strong></div><button class="toc-copy" data-copy-ip>${icon('copy',15)} COPY SERVER IP</button></div></aside></div></div>${footer()}`;}
function searchOverlay(){return `<div class="search-modal" id="searchModal" role="dialog" aria-modal="true" aria-label="Search the player manual" hidden><button class="search-backdrop" data-close-search aria-label="Close search"></button><div class="search-window"><div class="search-window-top">${icon('search',24)}<input id="searchInput" autocomplete="off" spellcheck="false" placeholder="Search the field manual..." aria-label="Search the field manual" /><button class="search-close" data-close-search aria-label="Close search">${icon('close',21)}</button></div><div class="search-results" id="searchResults"></div><div class="search-window-footer"><span>↑ ↓ NAVIGATE</span><span>ENTER TO OPEN</span><span>ESC TO CLOSE</span></div></div></div>`;}

let pendingSection = null;
let lastSearchSelection = 0;
let currentSearchResults = [];
let lastFocus = null;

function currentDoc(){const match=(location.hash||'').match(/^#\/docs\/([^/?#]+)/);return match?DOCS.find(d=>d.slug===match[1]):null;}
function hydrateGallery(){document.querySelectorAll('.gallery-card').forEach(card=>{const img=card.querySelector('.gallery-image');if(!img)return;const found=()=>card.classList.add('has-image');if(img.complete&&img.naturalWidth>0)found();else img.addEventListener('load',found,{once:true});img.addEventListener('error',()=>img.remove(),{once:true});});}
function hydrateReveal(){if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const nodes=document.querySelectorAll('[data-reveal]');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.08,rootMargin:'0px 0px 45px 0px'});nodes.forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});}
function renderRoute(){const doc=currentDoc();const app=document.getElementById('app');app.innerHTML=doc?docsPage(doc):home();document.getElementById('searchModal')?.remove();document.body.insertAdjacentHTML('beforeend',searchOverlay());document.title=doc?`${doc.label} | Outbreak Zone Field Manual`:'Outbreak Zone | Survive The Infection';document.body.classList.toggle('view-docs',!!doc);document.body.classList.remove('no-scroll','mobile-sidebar-open');hydrateGallery();hydrateReveal();window.scrollTo({top:0,behavior:'instant'});if(pendingSection){const section=pendingSection;pendingSection=null;requestAnimationFrame(()=>setTimeout(()=>document.getElementById(section)?.scrollIntoView({behavior:'smooth',block:'start'}),30));}}
function scrollToSection(id){const homeVisible=!currentDoc();if(homeVisible){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}else{pendingSection=id;location.hash='#/';}}
function showToast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('visible');clearTimeout(showToast.timeout);showToast.timeout=setTimeout(()=>el.classList.remove('visible'),2500);}
async function copyServer(){try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(SERVER);}else{const ta=document.createElement('textarea');ta.value=SERVER;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();const success=document.execCommand('copy');ta.remove();if(!success)throw new Error('Copy not available');}showToast('SERVER ADDRESS COPIED');}catch{showToast(`SERVER ADDRESS: ${SERVER}`);}}
function toggleMenu(){const nav=document.getElementById('headerNav'),btn=document.querySelector('[data-menu-toggle]');const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.innerHTML=icon(open?'close':'menu',24);}
function openSearch(){const modal=document.getElementById('searchModal');if(!modal)return;lastFocus=document.activeElement;modal.hidden=false;document.body.classList.add('no-scroll');const input=modal.querySelector('#searchInput');input.value='';drawResults('');input.focus();}
function closeSearch(){const modal=document.getElementById('searchModal');if(!modal||modal.hidden)return;modal.hidden=true;document.body.classList.remove('no-scroll');if(lastFocus?.isConnected)lastFocus.focus();}
function normalizeSearch(v){return v.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();}
function plainHtml(v){const el=document.createElement('div');el.innerHTML=v;return el.textContent||'';}
function drawResults(query){const container=document.getElementById('searchResults');if(!container)return;const norm=normalizeSearch(query);const terms=norm.split(' ').filter(Boolean);const ranked=DOCS.map(d=>{const hay=normalizeSearch([d.label,d.short,d.summary,d.intro,...d.sections.map(s=>`${s.title} ${plainHtml(s.html)}`)].join(' '));const name=normalizeSearch(d.label);let score=0;if(!terms.length)score=1;else for(const term of terms){if(!hay.includes(term))return null;score+=name.includes(term)?12:0;score+=normalizeSearch(d.summary).includes(term)?5:1;}return {d,score};}).filter(Boolean).sort((a,b)=>b.score-a.score);currentSearchResults=ranked.map(x=>x.d);lastSearchSelection=0;container.innerHTML=`<div class="result-caption">${terms.length?`${ranked.length} MATCHING ENTRIES`:'QUICK ACCESS / ALL ENTRIES'}</div>${ranked.length?ranked.map(({d},i)=>`<a href="#/docs/${d.slug}" data-search-result="${i}" class="result-item ${i===0?'selected':''}"><span class="result-icon">${docIcon(d)}</span><span class="result-text"><strong>${d.label}</strong><small>${d.summary}</small></span>${icon('arrow',18)}</a>`).join(''):`<div class="search-empty">${icon('search',31)}<strong>NO MATCHES FOUND</strong><p>Try another word like zombies, grave, blood moon or commands.</p></div>`}`;}
function selectResult(n){if(!currentSearchResults.length)return;lastSearchSelection=(n+currentSearchResults.length)%currentSearchResults.length;document.querySelectorAll('[data-search-result]').forEach((el,i)=>el.classList.toggle('selected',i===lastSearchSelection));document.querySelector(`[data-search-result="${lastSearchSelection}"]`)?.scrollIntoView({block:'nearest'});}

document.addEventListener('click',e=>{
  const anchor=e.target.closest('[data-anchor]');if(anchor){e.preventDefault();document.getElementById('headerNav')?.classList.remove('open');scrollToSection(anchor.dataset.anchor);return;}
  if(e.target.closest('[data-copy-ip]')){copyServer();return;}
  if(e.target.closest('[data-open-search]')){openSearch();return;}
  if(e.target.closest('[data-close-search]')){closeSearch();return;}
  if(e.target.closest('[data-menu-toggle]')){toggleMenu();return;}
  if(e.target.closest('[data-mobile-sidebar]')){document.body.classList.toggle('mobile-sidebar-open');return;}
  const toc=e.target.closest('[data-toc]');if(toc){e.preventDefault();history.replaceState(null,'',`#/docs/${currentDoc()?.slug}`);document.getElementById(toc.dataset.toc)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
  const result=e.target.closest('[data-search-result]');if(result){closeSearch();if(result.getAttribute('href')===location.hash){window.scrollTo({top:0,behavior:'smooth'});}return;}
});
document.addEventListener('input',e=>{if(e.target.id==='searchInput')drawResults(e.target.value);});
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();const modal=document.getElementById('searchModal');if(modal?.hidden)openSearch();else closeSearch();return;}
  if(e.key==='Escape'){closeSearch();document.body.classList.remove('mobile-sidebar-open');document.getElementById('headerNav')?.classList.remove('open');return;}
  const modal=document.getElementById('searchModal');if(modal&&!modal.hidden){if(e.key==='ArrowDown'){e.preventDefault();selectResult(lastSearchSelection+1);}else if(e.key==='ArrowUp'){e.preventDefault();selectResult(lastSearchSelection-1);}else if(e.key==='Enter'&&currentSearchResults.length){e.preventDefault();const target=currentSearchResults[lastSearchSelection];closeSearch();if(location.hash===`#/docs/${target.slug}`)window.scrollTo({top:0,behavior:'smooth'});else location.hash=`#/docs/${target.slug}`;}}
});
window.addEventListener('hashchange',renderRoute);
renderRoute();
