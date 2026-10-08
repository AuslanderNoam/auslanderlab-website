
const D=window.LAB_DATA, main=document.getElementById('main');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const a=(url,text,cls='')=>`<a class="${cls}" href="${esc(url)}" ${url.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${text}</a>`;
const label=(s)=>`<span class="eyebrow">${s}</span>`;
const section=(title,desc)=>`<div class="section-head">${label('AUSLANDER LAB / '+title.toUpperCase())}<h1>${title}</h1><p>${desc}</p></div>`;
const visual=(kind='microbes')=>`<div class="visual visual-${kind}" aria-hidden="true"><div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="strand"></div><div class="speck s1"></div><div class="speck s2"></div><div class="speck s3"></div></div>`;
const ticker=()=>`<div class="ticker" aria-label="Latest lab news"><span class="ticker-tag">LATEST NEWS <span class="pulse"></span></span><div class="ticker-window"><div class="ticker-track">${[...D.news,...D.news].map(n=>`<span>${n[4]} <b>${n[0]}</b> ${esc(n[2])}</span>`).join('')}</div></div>${a('#news','All news ↗','ticker-link')}</div>`;
const newsCards=(items)=>items.map(n=>`<article class="news-card"><div class="news-icon">${n[4]}</div><div><div class="meta">${esc(n[0])} <span>·</span> ${esc(n[1])}</div><h3>${esc(n[2])}</h3><p>${esc(n[3])}</p>${n[5]?a(n[5],'Learn more ↗','small-link'):''}</div></article>`).join('');
const researchCards=(items)=>items.map(r=>`<article class="research-card">${visual(r[4])}<div class="research-content"><span class="meta">RESEARCH ${r[0]} / ${esc(r[1])}</span><h3>${esc(r[2])}</h3><p>${esc(r[3])}</p></div></article>`).join('');
const publicationYears=()=>Object.keys(D.publications).sort((a,b)=>Number(b)-Number(a));
const orderedPubs=(papers)=>[...papers].sort((a,b)=>{const da=Date.parse(a[4]||'');const db=Date.parse(b[4]||'');return (Number.isNaN(db)?0:db)-(Number.isNaN(da)?0:da)});
const pubList=(years)=>years.map(y=>`<section class="pub-year"><h2>${y}<span>${D.publications[y].length} papers</span></h2><div>${orderedPubs(D.publications[y]).map(p=>`<article class="pub"><span class="journal">${esc(p[1])}</span><h3>${a(p[3],esc(p[0]))}</h3><p>${esc(p[2])}</p></article>`).join('')}</div></section>`).join('');
const home=()=>`<section class="hero"><div class="shell hero-grid"><div class="hero-copy">${label('THE WISTAR INSTITUTE · PHILADELPHIA')}<h1>Decoding <i>hidden biology</i> of human disease.</h1><p>We develop computational methods that integrate genomics, molecular evolution, and machine learning to uncover how infectious agents interact with host processes to drive disease.</p><div class="actions">${a('#research','Explore our research <span>↗</span>','btn primary')}${a('#publications','Our publications ↗','btn secondary')}</div><div class="hero-bottom"><span>GENOMICS</span><span>MOLECULAR EVOLUTION</span><span>AI & MACHINE LEARNING</span></div></div><div class="hero-art">${visual('hero')}<div class="art-caption">PATTERNS IN COMPLEX BIOLOGY <span>↗</span></div></div></div></section>${ticker()}<section class="shell section"><div class="intro"><div>${label('WHAT WE STUDY')}<h2>At the intersection of <em>biology and computation.</em></h2></div><p>From microbial sequences to cancer treatment response, we create interpretable computational tools to uncover biological signals hidden in complex data.</p></div><div class="research-grid">${researchCards(D.research)}</div><div class="section-action">${a('#research','Explore all research areas ↗','text-link')}</div></section><section class="section section-cream"><div class="shell"><div class="split-head"><div>${label('SELECTED WORK')}<h2>Recent publications</h2></div>${a('#publications','View all publications ↗','text-link')}</div><div class="feature-pubs">${orderedPubs(D.publications[publicationYears()[0]]).slice(0,3).map((p,i)=>`<article><span class="feature-number">0${i+1}</span><div><span class="journal">${esc(p[1])} · 2026</span><h3>${a(p[3],esc(p[0]))}</h3></div><span class="feature-arrow">↗</span></article>`).join('')}</div></div></section><section class="shell section"><div class="split-head"><div>${label('LAB UPDATES')}<h2>From the lab</h2></div>${a('#news','All lab news ↗','text-link')}</div><div class="news-grid">${newsCards(D.news.slice(0,3))}</div></section><section class="closing"><div class="shell closing-grid"><div>${label('OPEN SCIENCE')}<h2>Methods designed to make discoveries possible.</h2></div><div><p>Explore the computational tools and open research resources developed by our team.</p>${a('#software','Explore software ↗','btn light')}</div></div></section>`;
const research=()=>`<section class="shell section inner">${section('Research','Our lab develops computational frameworks to understand microbes, viruses, and cancer through genomic data, molecular evolution, and machine learning.')}<div class="research-grid">${researchCards(D.research)}</div></section>`;
const pubs=()=>`<section class="shell section inner">${section('Publications','Selected and collaborative publications from the Auslander Lab, organized by year.')}<div class="filter-row"><label for="pub-search">Search publications</label><input id="pub-search" placeholder="Search by title, journal, or author…" autocomplete="off"><span id="pub-count"></span></div><div id="pub-results">${pubList(publicationYears())}</div><p class="archive-note">Publication metadata was transcribed from the original lab website. For complete author lists and verified article links, consult ${a('https://www.auslanderlab.com/publications','the original publications page')}.</p></section>`;
const software=()=>`<section class="shell section inner">${section('Software & resources','Open computational methods developed by the lab for viral discovery, functional metagenomics, and complex genomic signals.')}<div class="software-grid">${D.software.map((s,i)=>`<article class="software-card"><div class="software-top"><span class="software-glyph">${['⌘','≋','◈','◇'][i]}</span><span class="meta">${esc(s[3])}</span></div><h2>${esc(s[0])}</h2><p>${esc(s[1])}</p>${a(s[2],'Explore resource ↗','text-link')}</article>`).join('')}</div></section>`;

const team = () => {
  const current = [
    {
      name: "Noam Auslander",
      position: "Principal Investigator",
      bio: "Earned a B.S. in Computer Science and Biology from Tel Aviv University, a Ph.D. in Computer Science from the University of Maryland with an NCI fellowship, completed postdoctoral training in Evolutionary Genomics Research at NCBI, and joined The Wistar Institute as an Assistant Professor in 2021.",
      education: [
        "Ph.D. Computer Science, University of Maryland, 2018",
        "B.Sc. Computer Science & Biology, Tel Aviv University, 2014"
      ],
      interests: [
        "Computational Genomics",
        "Machine Learning for Biology",
        "Host–Microbe Interactions in Disease",
        "Microbiome and Immunotherapy",
        "Molecular Evolution",
        "Skiing, running, and trying new sports"
      ],
      email: "nauslander@wistar.org"
    },
    {
      name: "Anastasia Lucas",
      position: "Bioinformatics Research Analyst (Postdoctoral Level)",
      subtitle: "Formerly PhD Student",
      education: [
        "Ph.D. Genomics and Computational Biology, University of Pennsylvania, 2026",
        "B.S. Biostatistics, Pennsylvania State University, 2015"
      ],
      interests: [
        "Bioinformatics methods development",
        "Disease risk and drug response prediction"
      ],
      email: "alucas@wistar.org"
    },
    {
      name: "Julia Malnak",
      position: "Graduate Student",
      subtitle: "Genomics and Computational Biology",
      bio: "I study structure-based approaches for comparing viruses and associating them with disease phenotypes. Outside the lab, I enjoy cooking, spending time with my cat Ember, reading Brandon Sanderson novels, and keeping up with The New York Times.",
      education: [
        "B.S. Computational Biology, University of Pittsburgh, 2023"
      ],
      interests: [
        "Virus–Host Interactions",
        "Viral Evolution",
        "Protein Language Models"
      ],
      email: "julia.malnak@pennmedicine.upenn.edu"
    },
    {
      name: "Bryant Duong",
      position: "Graduate Student",
      subtitle: "Genomics & Computational Biology · Former Software Developer",
      education: [
        "Master of Computer and Information Technology, University of Pennsylvania, 2024",
        "MBA, University of California, Davis, 2022",
        "B.A. Cognitive Science, University of California, Berkeley, 2018"
      ]
    },
    {
      name: "Pearl Zhou",
      position: "Lab Technician (Programmer)"
    }
  ];

  const alumni = [
    {
      name: "Andrew Patterson",
      position: "Visiting Scientist / PhD Student",
      years: "2021–2026",
      next: "Scientist, Data Analysis and Bioinformatics, Delcath Systems, Inc."
    },
    {
      name: "Abdurrahman Elbasir",
      position: "Postdoctoral Fellow"
    },
    {
      name: "Konstantinos Tsingas",
      position: "MS Researcher",
      years: "2022–2023",
      next: "PhD Student, Graduate Group in Biostatistics, University of Pennsylvania"
    },
    {
      name: "McKenna Reale",
      position: "Software Engineer",
      years: "2023–2026"
    },
    {
      name: "Timothy Kossenkov",
      position: "Summer Research Assistant",
      years: "2025",
      next: "Undergraduate Student, Computer Science, University of Washington"
    },
    {
      name: "Daniel Schaffer",
      position: "Undergraduate Researcher",
      years: "2022–2023",
      next: "PhD Student, Computational and Systems Biology, Massachusetts Institute of Technology"
    }
  ];

  const list = items =>
    `<ul>${items.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;

  const profile = p => `
    <article class="software-card">
      <div class="software-top">
        <span class="software-glyph">
          ${esc(p.name.split(' ').map(x => x[0]).join(''))}
        </span>
        <span class="meta">${esc(p.position)}</span>
      </div>

      <h2>${esc(p.name)}</h2>
      ${p.subtitle ? `<p class="meta">${esc(p.subtitle)}</p>` : ''}
      ${p.bio ? `<p>${esc(p.bio)}</p>` : ''}

      <details>
        <summary>View full profile ↓</summary>

        ${p.education ? `
          <h3>🎓 Education</h3>
          ${list(p.education)}
        ` : ''}

        ${p.interests ? `
          <h3>🔍 Interests</h3>
          ${list(p.interests)}
        ` : ''}

        ${p.email ? `
          <h3>📧 Contact</h3>
          <p><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>
        ` : ''}
      </details>
    </article>
  `;

  const alumnus = p => `
    <article class="software-card">
      <h2>${esc(p.name)}</h2>
      <p><strong>${esc(p.position)}</strong></p>
      ${p.years ? `<p class="meta">${esc(p.years)}</p>` : ''}
      ${p.next ? `
        <p><strong>Current position:</strong><br>${esc(p.next)}</p>
      ` : ''}
    </article>
  `;

  return `
    <section class="shell section inner">
      ${section(
        'People',
        'Meet the researchers developing computational approaches to understand complex biological systems.'
      )}

      <div class="split-head">
        <div>
          ${label('OUR TEAM')}
          <h2>Current Members</h2>
        </div>
      </div>

      <div class="software-grid">
        ${current.map(profile).join('')}
      </div>

      <div class="split-head" style="margin-top:5rem">
        <div>
          ${label('LAB ALUMNI')}
          <h2>Past Members</h2>
        </div>
      </div>

      <div class="software-grid">
        ${alumni.map(alumnus).join('')}
      </div>
    </section>
  `;
};
const news=()=>`<section class="shell section inner">${section('Lab news','Publications, awards, conference presentations, funding, and milestones from our research community.')}<div class="news-controls"><button class="chip active" data-news="All">All updates</button>${['Publication','Grant','Conference','Lab milestone','Training','Award'].map(x=>`<button class="chip" data-news="${x}">${x}</button>`).join('')}</div><div id="news-results" class="news-list">${newsCards(D.news)}</div></section>`;
const contact=()=>`<section class="shell section inner">${section('Contact','Find the Auslander Lab at The Wistar Institute in Philadelphia.')}<div class="contact-grid"><div class="contact-card">${label('INSTITUTION')}<h2>The Wistar Institute</h2><p>Molecular and Cellular Oncogenesis Program<br>Ellen and Ronald Caplan Cancer Center<br>3601 Spruce Street<br>Philadelphia, PA 19104</p>${a('https://www.wistar.org','Visit Wistar ↗','text-link')}</div><div class="contact-card">${label('COLLABORATE')}<h2>Research connections</h2><p>We work at the interface of computation and experimental biology. For current contact details, please refer to our institutional profile or original lab website.</p>${a('https://www.auslanderlab.com','Original lab website ↗','text-link')}</div></div></section>`;
const pages={home,research,publications:pubs,software,team,news,contact};
function render(){let route=(location.hash.slice(1)||'home').split('?')[0];if(!pages[route])route='home';main.innerHTML=pages[route]();document.title=(route==='home'?'Auslander Lab':route[0].toUpperCase()+route.slice(1)+' | Auslander Lab');document.querySelectorAll('nav a').forEach(x=>x.classList.toggle('active',x.getAttribute('href')==='#'+route));document.getElementById('nav').classList.remove('open');document.getElementById('menu').setAttribute('aria-expanded','false');window.scrollTo(0,0);if(route==='publications')setupPubs();if(route==='news')setupNews()}
function setupPubs(){const input=document.getElementById('pub-search'),count=document.getElementById('pub-count');const all=publicationYears().flatMap(y=>orderedPubs(D.publications[y]).map(p=>({y,p})));const update=()=>{let q=input.value.toLowerCase().trim(),filtered=all.filter(({p,y})=>(y+' '+p.join(' ')).toLowerCase().includes(q));count.textContent=filtered.length+' publications';let years=[...new Set(filtered.map(x=>x.y))].sort((a,b)=>Number(b)-Number(a));document.getElementById('pub-results').innerHTML=years.map(y=>`<section class="pub-year"><h2>${y}</h2><div>${filtered.filter(x=>x.y===y).map(({p})=>`<article class="pub"><span class="journal">${esc(p[1])}</span><h3>${a(p[3],esc(p[0]))}</h3><p>${esc(p[2])}</p></article>`).join('')}</div></section>`).join('')||'<p>No matching publications.</p>'};input.addEventListener('input',update);update()}
function setupNews(){document.querySelectorAll('[data-news]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-news]').forEach(x=>x.classList.remove('active'));b.classList.add('active');let v=b.dataset.news;document.getElementById('news-results').innerHTML=newsCards(D.news.filter(x=>v==='All'||x[1]===v))}))}
document.getElementById('menu').addEventListener('click',()=>{let nav=document.getElementById('nav');nav.classList.toggle('open');document.getElementById('menu').setAttribute('aria-expanded',nav.classList.contains('open'))});document.getElementById('year').textContent=new Date().getFullYear();window.addEventListener('hashchange',render);render();
