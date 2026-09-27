const USER="MihaiTeleuca";
const API="https://api.github.com";
const $=id=>document.getElementById(id);

const translations={
  en:{
    brand_subtitle:"Technology Portfolio",
    nav_home:"Home",nav_about:"About",nav_roadmap:"Roadmap",nav_projects:"Projects",nav_credentials:"Credentials",nav_contact:"Contact",
    footer_stack:"AI • Cloud • DevOps • Cybersecurity • Python • Software",
    footer_text:"A living portfolio built around learning, practical work and long-term engineering goals."
  },
  ro:{
    brand_subtitle:"Portofoliu Tehnologie",
    nav_home:"Acasă",nav_about:"Despre",nav_roadmap:"Roadmap",nav_projects:"Proiecte",nav_credentials:"Certificări",nav_contact:"Contact",
    footer_stack:"AI • Cloud • DevOps • Cybersecurity • Python • Software",
    footer_text:"Un portofoliu viu construit în jurul învățării, muncii practice și obiectivelor de engineering pe termen lung."
  }
};

const copy={
  en:{
    home:{
      kicker:"PERSONAL TECHNOLOGY PORTFOLIO",
      hello:"Hi, I'm",name:"Mihai Teleuca.",
      intro:"I am building a long-term career in technology with one clear principle: understand things deeply enough to use them in the real world. I am learning step by step, turning theory into projects, documenting progress and steadily expanding from programming and core IT into AI Engineering, Cloud, DevOps, Cybersecurity, networking and software systems.",
      primary:"Explore my roadmap",secondary:"View projects",
      direction_title:"I do not only want to use technology. I want to understand how complete systems fit together.",
      direction_copy:"My goal is to connect programming, infrastructure, automation, security and AI into one coherent technical foundation rather than treat them as isolated subjects.",
      cards:[
        ["01 / BUILD","Learning by building","When I learn something new, I try to turn it into an exercise, a utility, a configuration or a real project component. That approach exposes gaps quickly and makes theoretical concepts easier to retain."],
        ["02 / CONNECT","Connecting disciplines","Python supports automation. Networking explains how systems communicate. Cloud introduces scalable infrastructure. DevOps connects development with operations. Cybersecurity forces every technical decision to include risk and trust."],
        ["03 / DOCUMENT","Documenting the journey","I want this portfolio to show more than polished results. It should also reflect the learning process: what I am studying, what I am building, what is still experimental and how my technical thinking develops over time."]
      ]
    },
    about:{
      title:"More than a list of technologies.",
      intro:"I want my technical profile to tell a clear story: where I started, what I am learning now, what I am building and how all of it connects to my long-term goals.",
      story_title:"I am trying to build capability, not just collect terminology.",
      story1:"Technology became more than an interest for me because it gives me something concrete to improve every day: how I think, how I solve problems, how I communicate technical ideas and what I am capable of building.",
      story2:"I prefer to develop skills from the foundations upward. That means learning programming properly, understanding systems instead of memorizing commands, creating projects that force me to solve real problems and gradually moving into larger disciplines such as Cloud Engineering, AI Engineering, DevOps and Cybersecurity.",
      story3:"I do not want this portfolio to look like a list of technologies I have heard of. I want it to become a record of progress: courses completed when they are actually completed, skills practiced, mistakes corrected, projects improved and increasingly difficult problems solved over time."
    },
    roadmap:{
      title:"A learning plan with a clear technical logic.",
      intro:"I do not want to collect random courses. I want each stage to prepare the next one: programming supports automation and AI, networking and systems support cloud, cloud supports DevOps, and cybersecurity cuts across every layer.",
    },
    projects:{
      title:"Ideas become real when you start building.",
      intro:"The projects below are presented honestly as work in progress, prototypes or concepts. Their purpose is to show the technical direction I am working toward and gradually become concrete proof of the skills I am developing."
    },
    credentials:{
      title:"Credentials should support skills — not replace them.",
      intro:"My certification plan is structured around learning paths that reinforce practical work. Completed credentials belong here only when they are genuinely completed and verifiable; future paths remain clearly marked as planned or in progress."
    },
    github:{
      title:"The part of the portfolio that updates itself.",
      intro:"This page loads public data directly from my GitHub profile. As new repositories are created, they can appear here automatically."
    },
    contact:{
      title:"Let's connect.",
      intro:"This portfolio is designed to grow with me. As new projects, repositories, courses and learning paths appear, I will document them here and across my public profiles."
    }
  },
  ro:{
    home:{
      kicker:"PORTOFOLIU PERSONAL DE TEHNOLOGIE",
      hello:"Salut, sunt",name:"Mihai Teleuca.",
      intro:"Îmi construiesc o carieră pe termen lung în tehnologie pornind de la un principiu clar: vreau să înțeleg lucrurile suficient de bine încât să le pot folosi în lumea reală. Învăț pas cu pas, transform teoria în proiecte, îmi documentez progresul și extind treptat ceea ce știu de la programare și fundamente IT către AI Engineering, Cloud, DevOps, Cybersecurity, networking și sisteme software.",
      primary:"Vezi roadmap-ul meu",secondary:"Vezi proiectele",
      direction_title:"Nu vreau doar să folosesc tehnologia. Vreau să înțeleg cum funcționează împreună sistemele complete.",
      direction_copy:"Scopul meu este să leg programarea, infrastructura, automatizarea, securitatea și AI într-o fundație tehnică coerentă, nu să le tratez ca subiecte izolate.",
      cards:[
        ["01 / BUILD","Învăț prin construcție","Când învăț ceva nou, încerc să îl transform într-un exercițiu, un utilitar, o configurație sau o componentă reală de proiect. Metoda aceasta îmi arată rapid unde mai am goluri și face teoria mai ușor de reținut."],
        ["02 / CONNECT","Conectez domeniile","Python susține automatizarea. Networking-ul explică modul în care comunică sistemele. Cloud-ul introduce infrastructură scalabilă. DevOps leagă dezvoltarea de operațiuni. Cybersecurity obligă fiecare decizie tehnică să țină cont și de risc."],
        ["03 / DOCUMENT","Îmi documentez drumul","Vreau ca acest portofoliu să arate mai mult decât rezultate frumoase. Vreau să reflecte și procesul: ce studiez, ce construiesc, ce este încă experimental și cum se dezvoltă gândirea mea tehnică în timp."]
      ]
    },
    about:{
      title:"Mai mult decât o listă de tehnologii.",
      intro:"Vreau ca profilul meu tehnic să spună o poveste clară: de unde am pornit, ce învăț acum, ce construiesc și cum se leagă toate acestea de obiectivele mele pe termen lung.",
      story_title:"Încerc să construiesc capacitate reală, nu doar să adun termeni.",
      story1:"Tehnologia a devenit pentru mine mai mult decât un interes, pentru că îmi oferă în fiecare zi ceva concret de îmbunătățit: felul în care gândesc, felul în care rezolv probleme, felul în care explic idei tehnice și lucrurile pe care sunt capabil să le construiesc.",
      story2:"Prefer să îmi dezvolt cunoștințele de la fundație în sus. Asta înseamnă să învăț programarea corect, să înțeleg sistemele în loc să memorez comenzi, să creez proiecte care mă obligă să rezolv probleme reale și să avansez treptat către domenii mai mari precum Cloud Engineering, AI Engineering, DevOps și Cybersecurity.",
      story3:"Nu vreau ca acest portofoliu să arate ca o listă de tehnologii despre care doar am auzit. Vreau să devină o evidență a progresului: cursuri terminate atunci când sunt cu adevărat terminate, abilități exersate, greșeli corectate, proiecte îmbunătățite și probleme din ce în ce mai dificile pe care ajung să le rezolv."
    },
    roadmap:{
      title:"Un plan de învățare cu o logică tehnică clară.",
      intro:"Nu vreau să colecționez cursuri la întâmplare. Vreau ca fiecare etapă să pregătească următoarea: programarea susține automatizarea și AI, networking-ul și sistemele susțin cloud-ul, cloud-ul susține DevOps, iar cybersecurity traversează toate nivelurile."
    },
    projects:{
      title:"Ideile devin reale atunci când începi să construiești.",
      intro:"Proiectele de mai jos sunt prezentate sincer ca work in progress, prototipuri sau concepte. Scopul lor este să arate direcția tehnică în care lucrez și să devină, treptat, dovezi concrete ale abilităților pe care le dezvolt."
    },
    credentials:{
      title:"Certificările trebuie să susțină abilitățile — nu să le înlocuiască.",
      intro:"Planul meu de certificări este construit în jurul unor trasee de învățare care susțin munca practică. Certificările finalizate apar aici doar atunci când sunt cu adevărat finalizate și verificabile; traseele viitoare rămân marcate clar ca planificate sau în desfășurare."
    },
    github:{
      title:"Partea din portofoliu care se actualizează singură.",
      intro:"Această pagină preia date publice direct din profilul meu GitHub. Pe măsură ce apar repository-uri noi, pot apărea automat și aici."
    },
    contact:{
      title:"Hai să ne conectăm.",
      intro:"Acest portofoliu este gândit să crească odată cu mine. Pe măsură ce apar proiecte, repository-uri, cursuri și noi trasee de învățare, le voi documenta aici și pe profilurile mele publice."
    }
  }
};

const roadmap=[
  {n:"01",title:"Python Developer Foundations",status:"current",accent:"#a855f7",
   en:"Build strong programming fundamentals first: Python syntax, functions, object-oriented programming, modules, APIs, testing, automation and progressively more complete applications.",
   ro:"Construiesc mai întâi o bază solidă în programare: sintaxă Python, funcții, OOP, module, API-uri, testing, automatizare și aplicații din ce în ce mai complete.",
   chips:["Python","OOP","APIs","Testing","Automation"]},
  {n:"02",title:"AI Engineer",status:"current",accent:"#8b5cf6",
   en:"Move from AI fundamentals into generative AI engineering, model APIs, prompt design, embeddings, RAG, evaluation, responsible AI and deployment.",
   ro:"Trec de la fundamente AI către Generative AI Engineering, API-uri de modele, prompt design, embeddings, RAG, evaluare, responsible AI și deployment.",
   chips:["GenAI","LLMs","RAG","Model APIs","Evaluation"]},
  {n:"03",title:"Cloud Engineer",status:"planned",accent:"#5f7ef8",
   en:"Learn to design, deploy and operate cloud environments using Azure concepts around identity, networking, compute, storage, security and monitoring.",
   ro:"Învăț să proiectez, implementez și operez medii cloud folosind concepte Azure de identity, networking, compute, storage, securitate și monitorizare.",
   chips:["Azure","Networking","Identity","Compute","Monitoring"]},
  {n:"04",title:"DevOps Engineer",status:"planned",accent:"#57d69e",
   en:"Connect development and operations through Linux, Git, CI/CD, containers, Infrastructure as Code, observability and Kubernetes.",
   ro:"Leg dezvoltarea de operațiuni prin Linux, Git, CI/CD, containere, Infrastructure as Code, observability și Kubernetes.",
   chips:["Linux","Docker","CI/CD","Terraform","Kubernetes"]},
  {n:"05",title:"Cybersecurity Engineer",status:"planned",accent:"#b05cff",
   en:"Build a defensive security foundation around networking, operating systems, identity, hardening, logging, incident response and vulnerability management.",
   ro:"Construiesc o fundație defensivă în networking, sisteme de operare, identity, hardening, logging, incident response și vulnerability management.",
   chips:["Security","SOC","SIEM","Hardening","Incidents"]},
  {n:"06",title:"Ethical Hacking & Penetration Testing",status:"planned",accent:"#d9a45b",
   en:"Study ethical security testing only in authorized labs: reconnaissance, web security, common vulnerabilities, exploitation concepts, reporting and remediation.",
   ro:"Studiez testarea etică doar în laboratoare autorizate: reconnaissance, web security, vulnerabilități comune, concepte de exploatare, raportare și remediere.",
   chips:["Web Security","Labs","Vulnerabilities","Reporting","Remediation"]},
  {n:"07",title:"IT Systems / Infrastructure Engineer",status:"planned",accent:"#7c3aed",
   en:"Strengthen Windows, Linux, DNS, identity, virtualization, troubleshooting, backup and infrastructure operations.",
   ro:"Consolidez Windows, Linux, DNS, identity, virtualizare, troubleshooting, backup și operațiuni de infrastructură.",
   chips:["Windows","Linux","DNS","Virtualization","Troubleshooting"]},
  {n:"08",title:"Network Engineer",status:"planned",accent:"#5f7ef8",
   en:"Learn TCP/IP, routing, switching, VLANs, DNS, DHCP, VPNs, firewall concepts, troubleshooting and secure network design.",
   ro:"Învăț TCP/IP, routing, switching, VLAN-uri, DNS, DHCP, VPN-uri, concepte firewall, troubleshooting și design securizat de rețea.",
   chips:["TCP/IP","Routing","Switching","VPN","Firewalls"]},
  {n:"09",title:"Software Engineer",status:"planned",accent:"#8b5cf6",
   en:"Go beyond writing code into software design, architecture, testing, APIs, databases, maintainability and collaboration.",
   ro:"Trec dincolo de simpla scriere de cod către design software, arhitectură, testing, API-uri, baze de date, mentenanță și colaborare.",
   chips:["Architecture","Testing","Databases","APIs","Clean Code"]},
  {n:"10",title:"Data & Machine Learning Engineering",status:"later",accent:"#57d69e",
   en:"Add SQL, data pipelines, processing, model workflows, feature preparation, deployment, monitoring and MLOps foundations later.",
   ro:"Ulterior adaug SQL, pipeline-uri de date, procesare, workflow-uri de modele, feature preparation, deployment, monitorizare și fundamente MLOps.",
   chips:["SQL","Data Pipelines","ML","ETL","MLOps"]}
];

const projects=[
  {n:"01",title:"Nova AI Study Assistant",status:"development",accent:"#a855f7",
   en:"A personal AI learning assistant designed around the way I study: organizing lessons, simplifying difficult concepts, generating practical exercises and keeping a structured learning history across AI, Python, Cloud and cybersecurity.",
   ro:"Un asistent AI personal construit în jurul modului în care învăț: organizarea lecțiilor, simplificarea conceptelor dificile, generarea de exerciții practice și păstrarea unui istoric structurat în AI, Python, Cloud și cybersecurity.",
   chips:["Python","AI","LLM","Web","Learning"]},
  {n:"02",title:"CloudPulse Dashboard",status:"prototype",accent:"#5f7ef8",
   en:"A cloud operations dashboard concept for bringing resources, health checks, alerts, uptime and infrastructure state into one clean interface. It is intended to evolve alongside my Cloud and DevOps studies.",
   ro:"Un concept de dashboard cloud care aduce resursele, health checks, alertele, uptime-ul și starea infrastructurii într-o singură interfață. Va evolua odată cu studiile mele de Cloud și DevOps.",
   chips:["Azure","Cloud","Monitoring","DevOps","UI"]},
  {n:"03",title:"PyFlow Automation Toolkit",status:"development",accent:"#7c3aed",
   en:"A growing collection of Python utilities for automating repetitive tasks, working with files, processing simple data and building useful command-line workflows.",
   ro:"O colecție în creștere de utilitare Python pentru automatizarea sarcinilor repetitive, lucrul cu fișiere, procesarea datelor simple și construirea de workflow-uri utile în linia de comandă.",
   chips:["Python","Automation","CLI","Utilities","Scripting"]},
  {n:"04",title:"SecLab Learning Environment",status:"concept",accent:"#b05cff",
   en:"A controlled cybersecurity practice environment for documenting networking, hardening, vulnerability-testing and ethical-hacking exercises, strictly for authorized labs and defensive learning.",
   ro:"Un mediu controlat de practică pentru cybersecurity, destinat documentării exercițiilor de networking, hardening, vulnerability testing și ethical hacking, strict în laboratoare autorizate și pentru învățare defensivă.",
   chips:["Cybersecurity","Linux","Networking","Labs","Documentation"]},
  {n:"05",title:"InfraForge DevOps Pipeline",status:"concept",accent:"#57d69e",
   en:"A future DevOps project connecting source control, automated tests, container builds and cloud deployment into one reproducible delivery workflow.",
   ro:"Un viitor proiect DevOps care va conecta source control, testing automat, build-uri de containere și deployment cloud într-un singur workflow reproductibil.",
   chips:["GitHub Actions","Docker","CI/CD","Cloud","IaC"]},
  {n:"06",title:"NetScope Infrastructure Map",status:"concept",accent:"#d9a45b",
   en:"A visual infrastructure and network documentation tool for mapping devices, services, dependencies and troubleshooting notes across systems and cloud environments.",
   ro:"Un instrument vizual pentru documentarea infrastructurii și rețelelor, cu device-uri, servicii, dependențe și note de troubleshooting pentru sisteme și medii cloud.",
   chips:["Networking","IT","Infrastructure","Documentation"]}
];

function t(key){const lang=document.documentElement.dataset.lang||"en";return translations[lang][key]||translations.en[key]||key}
function c(){return copy[document.documentElement.dataset.lang||"en"]}
function statusText(s){
  const ro={current:"PRIORITATE ACTUALĂ",planned:"PLANIFICAT",later:"MAI TÂRZIU",development:"ÎN DEZVOLTARE",prototype:"PROTOTIP",concept:"CONCEPT"};
  const en={current:"CURRENT PRIORITY",planned:"PLANNED",later:"LATER",development:"IN DEVELOPMENT",prototype:"PROTOTYPE",concept:"CONCEPT"};
  return (document.documentElement.dataset.lang==="ro"?ro:en)[s]||s;
}
function chips(items){return `<div class="chips">${items.map(x=>`<span>${x}</span>`).join("")}</div>`}
function sectionHead(n,eyebrow,title,desc=""){return `<div class="section-head"><span class="num">${n}</span><div><p class="eyebrow">${eyebrow}</p><h2 class="section-title">${title}</h2>${desc?`<p class="section-copy">${desc}</p>`:""}</div></div>`}

function homePage(){
  const x=c().home;
  return `
  <section class="page-hero"><div class="container hero-grid">
    <div>
      <span class="kicker"><i></i>${x.kicker}</span>
      <h1 class="display">${x.hello}<span class="accent">${x.name}</span></h1>
      <p class="lede">${x.intro}</p>
      <div class="actions">
        <a class="btn btn-primary route-link" href="/roadmap" data-route="/roadmap">${x.primary}</a>
        <a class="btn btn-secondary route-link" href="/proiecte" data-route="/proiecte">${x.secondary}</a>
      </div>
    </div>
    <aside class="profile-panel">
      <div class="profile-top"><span>LIVE PROFILE</span><span class="online">● ONLINE</span></div>
      <div class="avatar"><img id="avatar" src="https://avatars.githubusercontent.com/u/285664462?v=4" alt="Mihai Teleuca" width="130" height="130"></div>
      <h2 id="profileName">Mihai Teleuca</h2><p id="profileLogin">@MihaiTeleuca</p>
      <div class="badges"><span>AI</span><span>Cloud</span><span>DevOps</span><span>Cybersecurity</span><span>Python</span><span>Software</span></div>
      <div class="info-grid">
        <div><small>LOCATION</small><strong>Lake King, Western Australia</strong></div>
        <div><small>CURRENT FOCUS</small><strong>${document.documentElement.dataset.lang==="ro"?"Învățare • proiecte • documentare":"Learning • building • documenting"}</strong></div>
      </div>
      <div class="metrics">
        <article><strong id="heroRepos">—</strong><span>Repos</span></article>
        <article><strong id="heroFollowers">—</strong><span>Followers</span></article>
        <article><strong id="heroStars">—</strong><span>Stars</span></article>
      </div>
    </aside>
  </div></section>

  <section class="section"><div class="container">
    ${sectionHead("01",document.documentElement.dataset.lang==="ro"?"DIRECȚIA MEA":"MY DIRECTION",x.direction_title,x.direction_copy)}
    <div class="cards-3">${x.cards.map(card=>`<article class="card"><span class="k">${card[0]}</span><h3>${card[1]}</h3><p>${card[2]}</p></article>`).join("")}</div>
  </div></section>

  <section class="section"><div class="container">
    ${sectionHead("02",document.documentElement.dataset.lang==="ro"?"DOMENII":"DISCIPLINES",document.documentElement.dataset.lang==="ro"?"Mai multe specializări. O singură fundație tehnică.":"Multiple specializations. One technical foundation.")}
    <div class="cards-4">
      <article class="card"><span class="k">AI</span><h3>AI Engineering</h3><p>${document.documentElement.dataset.lang==="ro"?"Generative AI, LLM APIs, RAG, evaluare, responsible AI și integrarea modelelor în aplicații.":"Generative AI, LLM APIs, RAG, evaluation, responsible AI and integrating models into applications."}</p></article>
      <article class="card"><span class="k">CLOUD</span><h3>Cloud Engineering</h3><p>${document.documentElement.dataset.lang==="ro"?"Azure, identity, networking, compute, storage, securitate, monitorizare și design de infrastructură.":"Azure, identity, networking, compute, storage, security, monitoring and infrastructure design."}</p></article>
      <article class="card"><span class="k">DEVOPS</span><h3>DevOps Engineering</h3><p>${document.documentElement.dataset.lang==="ro"?"Linux, Git, CI/CD, Docker, Infrastructure as Code, observability și Kubernetes.":"Linux, Git, CI/CD, Docker, Infrastructure as Code, observability and Kubernetes."}</p></article>
      <article class="card"><span class="k">SECURITY</span><h3>Cybersecurity</h3><p>${document.documentElement.dataset.lang==="ro"?"Securitate defensivă, hardening, logging, incidente, vulnerabilități și laboratoare etice autorizate.":"Defensive security, hardening, logging, incidents, vulnerabilities and authorized ethical labs."}</p></article>
    </div>
  </div></section>

  <section class="section"><div class="container">
    <div class="callout"><strong>${document.documentElement.dataset.lang==="ro"?"Acest site este construit să crească odată cu mine.":"This site is designed to grow with me."}</strong>
    <p>${document.documentElement.dataset.lang==="ro"?"Pe măsură ce apar proiecte, repository-uri, certificări finalizate și noi competențe, structura site-ului rămâne aceeași, iar conținutul devine din ce în ce mai puternic.":"As projects, repositories, completed credentials and new skills are added, the structure stays consistent while the content becomes progressively stronger."}</p></div>
  </div></section>`;
}

function aboutPage(){
  const x=c().about;
  return `
  <section class="page-hero"><div class="container">
    <span class="kicker"><i></i>/ABOUT</span>
    <h1 class="display">${x.title}</h1><p class="lede">${x.intro}</p>
  </div></section>
  <section class="section"><div class="container">
    ${sectionHead("01",document.documentElement.dataset.lang==="ro"?"POVESTEA":"THE STORY",x.story_title)}
    <article class="panel feature-story">
      <p class="lead">${x.story1}</p><p>${x.story2}</p><p>${x.story3}</p>
      <div class="values">
        <div class="value"><span>01</span><strong>${document.documentElement.dataset.lang==="ro"?"Profunzime înainte de viteză":"Depth before speed"}</strong></div>
        <div class="value"><span>02</span><strong>${document.documentElement.dataset.lang==="ro"?"Practică înainte de afirmații":"Practice before claims"}</strong></div>
        <div class="value"><span>03</span><strong>${document.documentElement.dataset.lang==="ro"?"Sisteme complete, nu instrumente izolate":"Complete systems, not isolated tools"}</strong></div>
        <div class="value"><span>04</span><strong>${document.documentElement.dataset.lang==="ro"?"Documentație clară și progres verificabil":"Clear documentation and verifiable progress"}</strong></div>
      </div>
    </article>
  </div></section>
  <section class="section"><div class="container">
    ${sectionHead("02",document.documentElement.dataset.lang==="ro"?"CUM GÂNDESC":"HOW I THINK",document.documentElement.dataset.lang==="ro"?"Engineering-ul înseamnă să vezi legăturile dintre piese.":"Engineering means understanding the connections between the parts.")}
    <div class="cards-3">
      <article class="card"><span class="k">CODE</span><h3>Software</h3><p>${document.documentElement.dataset.lang==="ro"?"Codul este doar o parte din sistem. Vreau să înțeleg și API-urile, datele, testarea, deployment-ul și mentenanța.":"Code is only one part of a system. I also want to understand APIs, data, testing, deployment and maintenance."}</p></article>
      <article class="card"><span class="k">INFRA</span><h3>Infrastructure</h3><p>${document.documentElement.dataset.lang==="ro"?"Cloud-ul și DevOps-ul mă ajută să înțeleg unde rulează aplicațiile, cum sunt livrate și cum sunt operate.":"Cloud and DevOps help me understand where applications run, how they are delivered and how they are operated."}</p></article>
      <article class="card"><span class="k">SECURITY</span><h3>Security</h3><p>${document.documentElement.dataset.lang==="ro"?"Cybersecurity adaugă întrebarea care trebuie pusă mereu: ce se poate întâmpla greșit și cum reducem riscul?":"Cybersecurity adds the question that should always be asked: what can go wrong, and how do we reduce the risk?"}</p></article>
    </div>
  </div></section>`;
}

function roadmapPage(){
  const x=c().roadmap;
  return `
  <section class="page-hero"><div class="container">
    <span class="kicker"><i></i>/ROADMAP</span>
    <h1 class="display">${x.title}</h1><p class="lede">${x.intro}</p>
  </div></section>
  <section class="section"><div class="container">
    ${sectionHead("01",document.documentElement.dataset.lang==="ro"?"TRASEE DE ENGINEERING":"ENGINEERING TRACKS",document.documentElement.dataset.lang==="ro"?"Ce vreau să construiesc în timp.":"What I want to build over time.")}
    <div class="cards-2">${roadmap.map(r=>`<article class="panel card road-card" style="--accent:${r.accent}">
      <div class="road-top"><span>${r.n}</span><em class="status ${r.status==="current"?"current":""}">${statusText(r.status)}</em></div>
      <h3>${r.title}</h3><p>${document.documentElement.dataset.lang==="ro"?r.ro:r.en}</p>${chips(r.chips)}
    </article>`).join("")}</div>
  </div></section>
  <section class="section"><div class="container">
    ${sectionHead("02",document.documentElement.dataset.lang==="ro"?"ORDINEA":"THE ORDER",document.documentElement.dataset.lang==="ro"?"Fundamente → specializare → proiecte → certificări recunoscute.":"Foundations → specialization → projects → recognized certifications.")}
    <div class="timeline">
      <div class="item"><span>01</span><div><strong>${document.documentElement.dataset.lang==="ro"?"Fundamente tehnice":"Technical foundations"}</strong><p>Python • Git • HTML/CSS/JS • Linux • Windows • Networking</p></div></div>
      <div class="item"><span>02</span><div><strong>${document.documentElement.dataset.lang==="ro"?"Specializări principale":"Primary specializations"}</strong><p>AI Engineering • Cloud Engineering • DevOps • Cybersecurity</p></div></div>
      <div class="item"><span>03</span><div><strong>${document.documentElement.dataset.lang==="ro"?"Proiecte cross-discipline":"Cross-discipline projects"}</strong><p>${document.documentElement.dataset.lang==="ro"?"Aplicații care combină cod, cloud, automatizare, securitate și documentație.":"Projects that combine code, cloud, automation, security and documentation."}</p></div></div>
      <div class="item"><span>04</span><div><strong>${document.documentElement.dataset.lang==="ro"?"Certificări oficiale":"Official certifications"}</strong><p>${document.documentElement.dataset.lang==="ro"?"Pregătire pentru certificări recunoscute doar după ce fundația practică este suficient de solidă.":"Prepare for recognized certifications after the practical foundation is strong enough."}</p></div></div>
    </div>
  </div></section>`;
}

function projectsPage(){
  const x=c().projects;
  return `
  <section class="page-hero"><div class="container">
    <span class="kicker"><i></i>/PROJECTS</span>
    <h1 class="display">${x.title}</h1><p class="lede">${x.intro}</p>
  </div></section>
  <section class="section"><div class="container">
    ${sectionHead("01",document.documentElement.dataset.lang==="ro"?"PORTOFOLIU ACTIV":"ACTIVE PORTFOLIO",document.documentElement.dataset.lang==="ro"?"Proiecte concepute să crească odată cu abilitățile mele.":"Projects designed to grow together with my skills.")}
    <div class="cards-2">${projects.map(p=>`<article class="panel card project-card" style="--accent:${p.accent}">
      <div class="road-top"><span>${p.n}</span><em class="status">${statusText(p.status)}</em></div>
      <h3>${p.title}</h3><p>${document.documentElement.dataset.lang==="ro"?p.ro:p.en}</p>${chips(p.chips)}
      <div class="project-foot"><span>PORTFOLIO BUILD</span><span>→</span></div>
    </article>`).join("")}</div>
  </div></section>
  <section class="section"><div class="container">
    <div class="callout"><strong>${document.documentElement.dataset.lang==="ro"?"Principiul proiectelor mele":"The principle behind my projects"}</strong>
    <p>${document.documentElement.dataset.lang==="ro"?"Nu vreau proiecte care există doar ca să umple o pagină. Fiecare idee este legată de o zonă reală din roadmap și ar trebui, în timp, să devină o demonstrație concretă a lucrurilor pe care le învăț.":"I do not want projects that exist only to fill a page. Every idea is connected to a real part of the roadmap and should eventually become a concrete demonstration of what I am learning."}</p></div>
  </div></section>`;
}

function credentialsPage(){
  const x=c().credentials;
  return `
  <section class="page-hero"><div class="container">
    <span class="kicker"><i></i>/CREDENTIALS</span>
    <h1 class="display">${x.title}</h1><p class="lede">${x.intro}</p>
  </div></section>
  <section class="section"><div class="container">
    ${sectionHead("01",document.documentElement.dataset.lang==="ro"?"PLAN DE CERTIFICĂRI":"CERTIFICATION PLAN",document.documentElement.dataset.lang==="ro"?"Trasee pe care vreau să le finalizez și să le susțin prin practică.":"Paths I want to complete and support with practical work.")}
    <div class="cards-3">
      <article class="card"><span class="k">${document.documentElement.dataset.lang==="ro"?"ACTIV":"ACTIVE"}</span><h3>Python & Software Foundations</h3><p>${document.documentElement.dataset.lang==="ro"?"Fundamente Python, Git/GitHub, web și software development, cu accent pe proiecte practice și o bază suficient de solidă pentru specializările care urmează.":"Python foundations, Git/GitHub, web and software development, with practical projects and a strong enough base for the specializations that follow."}</p></article>
      <article class="card"><span class="k">${document.documentElement.dataset.lang==="ro"?"TRASEU":"PATH"}</span><h3>AI Engineering</h3><p>${document.documentElement.dataset.lang==="ro"?"Cursuri și learning paths de AI, Generative AI, prompt engineering, model APIs, RAG, evaluare și deployment. Certificările oficiale vor fi adăugate atunci când sunt obținute.":"Courses and learning paths in AI, Generative AI, prompt engineering, model APIs, RAG, evaluation and deployment. Official certifications will be added when earned."}</p></article>
      <article class="card"><span class="k">${document.documentElement.dataset.lang==="ro"?"TRASEU":"PATH"}</span><h3>Cloud Engineering</h3><p>${document.documentElement.dataset.lang==="ro"?"Fundamente cloud, Azure, networking, identity, compute, storage, monitoring, securitate și design operațional.":"Cloud foundations, Azure, networking, identity, compute, storage, monitoring, security and operational design."}</p></article>
      <article class="card"><span class="k">${document.documentElement.dataset.lang==="ro"?"TRASEU":"PATH"}</span><h3>DevOps Engineering</h3><p>${document.documentElement.dataset.lang==="ro"?"Linux, Git workflows, CI/CD, Docker, Infrastructure as Code, observability și Kubernetes, susținute de proiecte de deployment.":"Linux, Git workflows, CI/CD, Docker, Infrastructure as Code, observability and Kubernetes, supported by deployment projects."}</p></article>
      <article class="card"><span class="k">${document.documentElement.dataset.lang==="ro"?"TRASEU":"PATH"}</span><h3>Cybersecurity Engineering</h3><p>${document.documentElement.dataset.lang==="ro"?"Networking, hardening, log analysis, vulnerability management, incident response, cloud security și laboratoare defensive.":"Networking, hardening, log analysis, vulnerability management, incident response, cloud security and defensive labs."}</p></article>
      <article class="card"><span class="k">${document.documentElement.dataset.lang==="ro"?"TRASEU":"PATH"}</span><h3>Ethical Hacking</h3><p>${document.documentElement.dataset.lang==="ro"?"Doar în medii autorizate: web security, reconnaissance, vulnerabilități, concepte de exploatare, raportare și remediere.":"Authorized environments only: web security, reconnaissance, vulnerabilities, exploitation concepts, reporting and remediation."}</p></article>
    </div>
  </div></section>
  <section class="section"><div class="container">
    <div class="callout"><strong>${document.documentElement.dataset.lang==="ro"?"Cum voi afișa certificările finalizate":"How completed credentials will be shown"}</strong>
    <p>${document.documentElement.dataset.lang==="ro"?"Pentru fiecare certificare finalizată pot adăuga emitentul, data, ID-ul credentialului, linkul de verificare și PDF-ul certificatului. În felul acesta secțiunea rămâne profesională și verificabilă.":"For every completed credential, I can add the issuer, date, credential ID, verification link and certificate PDF. That keeps this section professional and verifiable."}</p></div>
  </div></section>`;
}

function githubPage(){
  const x=c().github;
  return `
  <section class="page-hero"><div class="container">
    <span class="kicker"><i></i>/GITHUB</span>
    <h1 class="display">${x.title}</h1><p class="lede">${x.intro}</p>
  </div></section>
  <section class="section"><div class="container">
    <div class="cards-4">
      <article class="card"><span class="k">PUBLIC REPOS</span><h3 id="repoCount">—</h3></article>
      <article class="card"><span class="k">FOLLOWERS</span><h3 id="followersCount">—</h3></article>
      <article class="card"><span class="k">FOLLOWING</span><h3 id="followingCount">—</h3></article>
      <article class="card"><span class="k">ACCOUNT AGE</span><h3 id="accountAge">—</h3></article>
    </div>
  </div></section>
  <section class="section"><div class="container">
    ${sectionHead("02","RECENT REPOSITORIES",document.documentElement.dataset.lang==="ro"?"Repository-uri publice actualizate automat.":"Public repositories updated automatically.")}
    <div id="repoList" class="repo-list"><div class="repo-placeholder">Loading GitHub data…</div></div>
  </div></section>`;
}

function contactPage(){
  const x=c().contact;
  return `
  <section class="page-hero"><div class="container">
    <span class="kicker"><i></i>/CONTACT</span>
    <h1 class="display">${x.title}</h1><p class="lede">${x.intro}</p>
  </div></section>
  <section class="section"><div class="container">
    <div class="cards-2">
      <article class="card">
        <span class="k">${document.documentElement.dataset.lang==="ro"?"LOCAȚIE":"LOCATION"}</span>
        <h3>Lake King, Western Australia, Australia</h3>
        <p>${document.documentElement.dataset.lang==="ro"?"Aceasta este locația publică pe care o afișez în portofoliu. Pentru confidențialitate, nu public aici adresă stradală sau alte date precise.":"This is the public location I display on the portfolio. For privacy, I do not publish a street address or other precise location details here."}</p>
        <div class="location-box"><span class="pin">⌖</span><div><small>BASE</small><strong>Lake King, WA, Australia</strong></div></div>
      </article>
      <article class="card">
        <span class="k">SOCIALS</span>
        <div class="social-list" style="margin-top:16px">
          <a class="social" href="https://github.com/MihaiTeleuca" target="_blank" rel="noopener noreferrer"><span><b>GitHub</b><small>@MihaiTeleuca</small></span><strong>↗</strong></a>
          <a class="social" href="https://www.instagram.com/mihai_teleuca/" target="_blank" rel="noopener noreferrer"><span><b>Instagram</b><small>@mihai_teleuca</small></span><strong>↗</strong></a>
          <a class="social" href="https://www.facebook.com/mihai.teleuca/" target="_blank" rel="noopener noreferrer"><span><b>Facebook</b><small>mihai.teleuca</small></span><strong>↗</strong></a>
        </div>
      </article>
    </div>
  </div></section>`;
}

const routes={
  "/":homePage,"/acasa":homePage,"/despre":aboutPage,"/roadmap":roadmapPage,
  "/proiecte":projectsPage,"/certificari":credentialsPage,"/github":githubPage,"/contact":contactPage
};

function normalizePath(path){
  const p=path.replace(/\/+$/,"")||"/";
  return routes[p]?p:"/acasa";
}
function render(){
  const path=normalizePath(location.pathname);
  if(location.pathname!==path && location.pathname!=="/") history.replaceState({}, "", path);
  document.querySelectorAll(".main-nav a").forEach(a=>a.classList.toggle("active",a.dataset.route===path));
  $("app").innerHTML=routes[path]();
  bindInternalLinks();
  window.scrollTo(0,0);
  loadGithub();
}
function bindInternalLinks(){
  document.querySelectorAll(".route-link").forEach(a=>{
    a.onclick=e=>{
      const route=a.dataset.route;
      if(!route)return;
      e.preventDefault();
      history.pushState({}, "", route);
      render();
    };
  });
}
function applyLang(lang){
  document.documentElement.dataset.lang=lang;
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-lang-button]").forEach(b=>b.classList.toggle("active",b.dataset.langButton===lang));
  document.querySelectorAll("[data-t]").forEach(el=>el.textContent=t(el.dataset.t));
  localStorage.setItem("portfolioLang",lang);
  render();
}
document.querySelectorAll("[data-lang-button]").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.langButton)));
function setTheme(theme){
  document.documentElement.dataset.theme=theme;
  localStorage.setItem("portfolioTheme",theme);
}
$("themeToggle").addEventListener("click",()=>setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"));

function esc(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function ageText(d){
  const days=Math.max(0,Math.floor((Date.now()-new Date(d).getTime())/86400000));
  if(days<30)return days+" d";
  if(days<365)return Math.floor(days/30)+" mo";
  const y=Math.floor(days/365);return y+(y===1?" yr":" yrs")
}
async function json(url){
  const r=await fetch(url,{headers:{Accept:"application/vnd.github+json"}});
  if(!r.ok)throw new Error("GitHub API unavailable");
  return r.json();
}
let ghCache=null;
async function getGithub(){
  if(ghCache)return ghCache;
  const saved=sessionStorage.getItem("ghPortfolioData");
  if(saved){
    try{ghCache=JSON.parse(saved);return ghCache}catch{}
  }
  const [user,repos]=await Promise.all([
    json(`${API}/users/${USER}`),
    json(`${API}/users/${USER}/repos?per_page=30&sort=updated`)
  ]);
  ghCache={user,repos};
  sessionStorage.setItem("ghPortfolioData",JSON.stringify(ghCache));
  return ghCache;
}
async function loadGithub(){
  const targets=["heroRepos","heroFollowers","heroStars","repoCount","followersCount","followingCount","accountAge","repoList","avatar","profileName","profileLogin"];
  if(!targets.some(id=>$(id)))return;
  try{
    const {user,repos}=await getGithub();
    const stars=repos.reduce((n,r)=>n+(r.stargazers_count||0),0);
    const vals={heroRepos:user.public_repos,heroFollowers:user.followers,heroStars:stars,repoCount:user.public_repos,followersCount:user.followers,followingCount:user.following,accountAge:ageText(user.created_at)};
    Object.entries(vals).forEach(([k,v])=>{if($(k))$(k).textContent=v});
    if($("avatar"))$("avatar").src=user.avatar_url;
    if($("profileName"))$("profileName").textContent=user.name||"Mihai Teleuca";
    if($("profileLogin"))$("profileLogin").textContent="@"+user.login;
    if($("repoList")){
      const visible=repos.filter(r=>!r.fork).slice(0,8);
      $("repoList").innerHTML=visible.length?visible.map(r=>`
        <a class="repo-card" href="${r.html_url}" target="_blank" rel="noopener noreferrer">
          <div class="repo-card-top"><strong>${esc(r.name)}</strong><span>↗</span></div>
          <p>${esc(r.description||"Public GitHub repository")}</p>
          <div class="repo-meta"><span>${esc(r.language||"Repository")}</span><span>★ ${r.stargazers_count}</span><span>⑂ ${r.forks_count}</span></div>
        </a>`).join(""):`<div class="repo-placeholder">${document.documentElement.dataset.lang==="ro"?"Nu există încă repository-uri publice.":"No public repositories yet."}</div>`;
    }
  }catch(e){
    console.error(e);
    if($("repoList"))$("repoList").innerHTML='<div class="repo-placeholder">GitHub data temporarily unavailable.</div>';
  }
}

window.addEventListener("popstate",render);
document.addEventListener("DOMContentLoaded",()=>{
  $("year").textContent="© "+new Date().getFullYear();
  setTheme(localStorage.getItem("portfolioTheme")||"dark");
  document.documentElement.dataset.lang=localStorage.getItem("portfolioLang")||"en";
  document.documentElement.lang=document.documentElement.dataset.lang;
  document.querySelectorAll("[data-lang-button]").forEach(b=>b.classList.toggle("active",b.dataset.langButton===document.documentElement.dataset.lang));
  document.querySelectorAll("[data-t]").forEach(el=>el.textContent=t(el.dataset.t));
  render();
});
