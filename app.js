const USER="MihaiTeleuca";
const API="https://api.github.com";
const $=id=>document.getElementById(id);

const ui={
  en:{
    brand_subtitle:"Technology Portfolio",
    nav_home:"Home",nav_about:"About",nav_experience:"Experience",nav_roadmap:"Roadmap",
    nav_projects:"Projects",nav_credentials:"Credentials",nav_contact:"Contact",
    footer_stack:"AI • Cloud • DevOps • Cybersecurity • Python • Software",
    footer_text:"A living portfolio built around practical learning, transparent progress and long-term engineering goals."
  },
  ro:{
    brand_subtitle:"Portofoliu Tehnologie",
    nav_home:"Acasă",nav_about:"Despre",nav_experience:"Experiență",nav_roadmap:"Roadmap",
    nav_projects:"Proiecte",nav_credentials:"Certificări",nav_contact:"Contact",
    footer_stack:"AI • Cloud • DevOps • Cybersecurity • Python • Software",
    footer_text:"Un portofoliu viu construit în jurul învățării practice, progresului transparent și obiectivelor de engineering pe termen lung."
  }
};

const roadmap=[
  {n:"01",title:"Python Developer Foundations",status:"current",accent:"#a855f7",
   en:"Build strong programming fundamentals first: syntax, functions, data structures, object-oriented programming, files, modules, APIs, testing, automation and progressively more complete applications.",
   ro:"Construiesc mai întâi o bază solidă în programare: sintaxă, funcții, structuri de date, OOP, fișiere, module, API-uri, testing, automatizare și aplicații din ce în ce mai complete.",
   chips:["Python","OOP","APIs","Testing","Automation"]},
  {n:"02",title:"AI Engineer",status:"current",accent:"#8b5cf6",
   en:"Move from AI foundations into generative AI engineering, model APIs, prompt design, embeddings, retrieval-augmented generation, evaluation, responsible AI, deployment and eventually MLOps.",
   ro:"Trec de la fundamente AI către Generative AI Engineering, API-uri de modele, prompt design, embeddings, RAG, evaluare, responsible AI, deployment și ulterior MLOps.",
   chips:["GenAI","LLMs","RAG","Model APIs","Evaluation"]},
  {n:"03",title:"Cloud Engineer",status:"planned",accent:"#5d7ef5",
   en:"Learn to design, deploy and operate cloud environments using Azure concepts around identity, networking, compute, storage, security, governance, cost awareness and monitoring.",
   ro:"Învăț să proiectez, implementez și operez medii cloud folosind Azure: identity, networking, compute, storage, securitate, governance, cost management și monitorizare.",
   chips:["Azure","Networking","Identity","Compute","Monitoring"]},
  {n:"04",title:"DevOps Engineer",status:"planned",accent:"#55d49d",
   en:"Connect development and operations through Linux, Git workflows, CI/CD, containers, Infrastructure as Code, observability, deployment strategies and Kubernetes.",
   ro:"Leg dezvoltarea de operațiuni prin Linux, Git workflows, CI/CD, containere, Infrastructure as Code, observability, strategii de deployment și Kubernetes.",
   chips:["Linux","Docker","CI/CD","Terraform","Kubernetes"]},
  {n:"05",title:"Cybersecurity Engineer",status:"planned",accent:"#b15cff",
   en:"Build a defensive security foundation around networking, operating systems, identity, endpoint protection, hardening, logging, incident response, vulnerability management and cloud security.",
   ro:"Construiesc o fundație defensivă în networking, sisteme de operare, identity, endpoint protection, hardening, logging, incident response, vulnerability management și cloud security.",
   chips:["Security","SOC","SIEM","Hardening","Incidents"]},
  {n:"06",title:"Ethical Hacking & Penetration Testing",status:"planned",accent:"#dfa65b",
   en:"Study ethical security testing only in authorized lab environments: reconnaissance, web security, common vulnerabilities, exploitation concepts, reporting and remediation.",
   ro:"Studiez testarea etică doar în laboratoare autorizate: reconnaissance, web security, vulnerabilități comune, concepte de exploatare, raportare și remediere.",
   chips:["Web Security","Labs","Vulnerabilities","Reporting","Remediation"]},
  {n:"07",title:"IT Systems / Infrastructure Engineer",status:"planned",accent:"#7c3aed",
   en:"Strengthen Windows, Linux, DNS, identity, virtualization, backup, troubleshooting, endpoint administration and infrastructure operations.",
   ro:"Consolidez Windows, Linux, DNS, identity, virtualizare, backup, troubleshooting, administrarea endpoint-urilor și operațiunile de infrastructură.",
   chips:["Windows","Linux","DNS","Virtualization","Troubleshooting"]},
  {n:"08",title:"Network Engineer",status:"planned",accent:"#5d7ef5",
   en:"Learn TCP/IP, routing, switching, VLANs, DNS, DHCP, VPNs, firewall concepts, troubleshooting and secure network design.",
   ro:"Învăț TCP/IP, routing, switching, VLAN-uri, DNS, DHCP, VPN-uri, concepte firewall, troubleshooting și design securizat de rețea.",
   chips:["TCP/IP","Routing","Switching","VPN","Firewalls"]},
  {n:"09",title:"Software Engineer",status:"planned",accent:"#8b5cf6",
   en:"Go beyond writing code into software design, architecture, testing, APIs, databases, maintainability, collaboration and engineering practices for larger systems.",
   ro:"Trec dincolo de simpla scriere de cod către design software, arhitectură, testing, API-uri, baze de date, mentenanță, colaborare și practici de engineering pentru sisteme mai mari.",
   chips:["Architecture","Testing","Databases","APIs","Clean Code"]},
  {n:"10",title:"Data & Machine Learning Engineering",status:"later",accent:"#55d49d",
   en:"Add SQL, data pipelines, data processing, model workflows, feature preparation, deployment, monitoring and MLOps foundations after the core engineering base is stronger.",
   ro:"Adaug SQL, pipeline-uri de date, procesare, workflow-uri de modele, feature preparation, deployment, monitorizare și fundamente MLOps după ce baza principală de engineering devine mai solidă.",
   chips:["SQL","Data Pipelines","ML","ETL","MLOps"]}
];

const projects=[
  {n:"01",title:"Personal Technology Portfolio",status:"live",accent:"#8b5cf6",
   en:"A performance-conscious bilingual portfolio designed to present my learning journey, public GitHub work, engineering roadmap, projects and credentials with clear status labels instead of exaggerated claims.",
   ro:"Un portofoliu bilingv, construit cu atenție la performanță, pentru a prezenta traseul meu de învățare, GitHub-ul public, roadmap-ul de engineering, proiectele și certificările cu statusuri clare, fără afirmații exagerate.",
   problemEn:"Create a professional public identity that can grow with real evidence over time.",problemRo:"Construirea unei identități profesionale publice care poate crește în timp pe baza dovezilor reale.",
   nextEn:"Continue improving accessibility, project case studies, real credentials and public repositories.",nextRo:"Continuarea îmbunătățirii accesibilității, studiilor de caz, certificărilor reale și repository-urilor publice.",
   chips:["HTML","CSS","JavaScript","GitHub Pages","Responsive UI"],link:"https://github.com/MihaiTeleuca/MihaiTeleuca.github.io"},
  {n:"02",title:"Kyntrivo Technologies",status:"development",accent:"#b15cff",
   en:"A personal technology and digital-solutions project exploring branding, software, AI, web services and product thinking. It is still being developed and is not presented as a finished operating company.",
   ro:"Un proiect personal de tehnologie și soluții digitale care explorează branding, software, AI, servicii web și gândire de produs. Este încă în dezvoltare și nu este prezentat ca o companie operațională finalizată.",
   problemEn:"Turn technical learning into a coherent product and brand-building environment.",problemRo:"Transformarea învățării tehnice într-un mediu coerent de produs și construire de brand.",
   nextEn:"Define the first concrete digital service or product and document the technical implementation.",nextRo:"Definirea primului serviciu sau produs digital concret și documentarea implementării tehnice.",
   chips:["AI","Web","Product","Branding","Software"],link:null},
  {n:"03",title:"TransRegina VTC Digital Ecosystem",status:"development",accent:"#5d7ef5",
   en:"A community-focused digital ecosystem concept around a Romanian Euro Truck Simulator 2 VTC, including a website, Discord infrastructure, economy automation, member workflows and future integrations.",
   ro:"Un concept de ecosistem digital pentru un VTC românesc de Euro Truck Simulator 2, care include website, infrastructură Discord, automatizări de economie, fluxuri pentru membri și viitoare integrări.",
   problemEn:"Organize a growing online community with clear digital workflows and automation.",problemRo:"Organizarea unei comunități online în creștere prin fluxuri digitale clare și automatizare.",
   nextEn:"Translate the community requirements into modular bot, website and data components.",nextRo:"Transformarea cerințelor comunității în componente modulare pentru bot, website și date.",
   chips:["Discord","Automation","Web","Community Systems","Bots"],link:null},
  {n:"04",title:"Nova AI Study Assistant",status:"concept",accent:"#a855f7",
   en:"A personal AI learning assistant concept designed around the way I study: organizing lessons, simplifying difficult concepts, generating exercises and maintaining a structured learning history.",
   ro:"Un concept de asistent AI personal construit în jurul modului în care învăț: organizarea lecțiilor, simplificarea conceptelor dificile, generarea de exerciții și păstrarea unui istoric structurat al învățării.",
   problemEn:"Reduce friction between learning content, practice and progress tracking.",problemRo:"Reducerea distanței dintre conținutul de învățare, practică și urmărirea progresului.",
   nextEn:"Build a small Python prototype that stores learning topics and generates structured practice prompts.",nextRo:"Construirea unui prototip mic în Python care stochează subiecte și generează exerciții structurate.",
   chips:["Python","AI","LLM","Learning","Web"],link:null},
  {n:"05",title:"PyFlow Automation Toolkit",status:"concept",accent:"#7c3aed",
   en:"A growing toolkit idea for turning Python fundamentals into small utilities: file processing, repetitive task automation, basic data handling and command-line workflows.",
   ro:"O idee de toolkit care transformă fundamentele Python în utilitare mici: procesare de fișiere, automatizarea sarcinilor repetitive, prelucrare simplă de date și workflow-uri CLI.",
   problemEn:"Make every new Python concept immediately useful through a practical tool.",problemRo:"Transformarea fiecărei noțiuni noi de Python într-un instrument practic imediat.",
   nextEn:"Build the first three utilities with clear documentation and tests.",nextRo:"Construirea primelor trei utilitare cu documentație clară și teste.",
   chips:["Python","Automation","CLI","Files","Testing"],link:null},
  {n:"06",title:"CloudPulse Dashboard",status:"concept",accent:"#69c7ed",
   en:"A cloud operations dashboard concept for visualizing resources, uptime, health, alerts and infrastructure status in one clean interface as my cloud knowledge expands.",
   ro:"Un concept de dashboard pentru operațiuni cloud care vizualizează resurse, uptime, health, alerte și starea infrastructurii într-o singură interfață, pe măsură ce cunoștințele mele cloud se dezvoltă.",
   problemEn:"Bring operational cloud signals into a simple learning-oriented dashboard.",problemRo:"Aducerea semnalelor operaționale din cloud într-un dashboard simplu, orientat spre învățare.",
   nextEn:"Create a static data prototype first, then connect real cloud metrics later.",nextRo:"Crearea mai întâi a unui prototip cu date statice, apoi conectarea ulterioară la metrici cloud reale.",
   chips:["Azure","Cloud","Monitoring","Dashboard","DevOps"],link:null}
];

const completedCredentials=[
  {title:"Introduction to Modern AI",issuer:"Cisco Networking Academy",status:"complete",date:"23 Sep 2026",
   detailEn:"Completed foundational course covering modern AI concepts. Public portfolio entry includes the credential ID supplied with the certificate.",
   detailRo:"Curs introductiv finalizat, axat pe concepte moderne de AI. În portofoliu este inclus ID-ul credentialului primit împreună cu certificatul.",
   id:"65ea2eec-5382-457c-b41a-c6bbf95079b2"},
  {title:"Artificial Intelligence Foundations: Getting Started with Intelligent Systems",issuer:"Course completed",status:"complete",date:"25 Sep 2026",
   detailEn:"Completed foundational AI course. The portfolio does not assign an issuer or credential number unless those details are confirmed.",
   detailRo:"Curs de fundamente AI finalizat. Portofoliul nu atribuie un emitent sau un număr de credential dacă acele detalii nu sunt confirmate.",
   id:"—"},
  {title:"Microsoft Azure Essentials by Microsoft Press",issuer:"Microsoft Press learning course",status:"progress",date:"Course completed 26 Sep 2026",
   detailEn:"The course content was completed. The final professional-certificate status or exam credential is not presented as completed until it is confirmed.",
   detailRo:"Conținutul cursului a fost finalizat. Statusul certificatului profesional final sau al examenului nu este prezentat ca finalizat până când nu este confirmat.",
   id:"Credential pending"}
];

const currentLearning=[
  {title:"Microsoft Generative AI Engineering",status:"progress",
   en:"Ongoing learning path covering generative AI engineering concepts such as prompt engineering, LLMs, RAG, multimodal AI, responsible AI and related engineering workflows. It is explicitly shown as in progress.",
   ro:"Traseu de învățare în desfășurare pentru Generative AI Engineering, cu subiecte precum prompt engineering, LLM-uri, RAG, multimodal AI, responsible AI și workflow-uri de engineering. Este prezentat explicit ca fiind în progres."},
  {title:"Python Programming",status:"progress",
   en:"Active practical learning focused on syntax, logic, loops, functions, data structures and progressively more complete exercises.",
   ro:"Învățare practică activă axată pe sintaxă, logică, bucle, funcții, structuri de date și exerciții din ce în ce mai complete."},
  {title:"Cloud Engineering Foundations",status:"progress",
   en:"Building a structured cloud foundation through Azure concepts, infrastructure, identity, networking, storage, monitoring and security.",
   ro:"Construirea unei fundații cloud structurate prin concepte Azure, infrastructură, identity, networking, storage, monitorizare și securitate."}
];

function lang(){return document.documentElement.dataset.lang||"en"}
function ro(){return lang()==="ro"}
function uiText(key){return ui[lang()][key]||ui.en[key]||key}
function escapeHtml(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function chipList(items){return `<div class="chips">${items.map(x=>`<span class="chip">${escapeHtml(x)}</span>`).join("")}</div>`}
function statusLabel(status){
  const labels={
    en:{current:"CURRENT PRIORITY",planned:"PLANNED",later:"LATER",live:"LIVE",development:"IN DEVELOPMENT",concept:"CONCEPT",complete:"COMPLETED",progress:"IN PROGRESS"},
    ro:{current:"PRIORITATE ACTUALĂ",planned:"PLANIFICAT",later:"MAI TÂRZIU",live:"LIVE",development:"ÎN DEZVOLTARE",concept:"CONCEPT",complete:"FINALIZAT",progress:"ÎN PROGRES"}
  };
  return labels[lang()][status]||status;
}
function statusClass(status){
  if(status==="complete"||status==="live")return "status-complete";
  if(status==="progress"||status==="development"||status==="current")return "status-progress";
  return "status-planned";
}
function sectionHead(number,eyebrow,title,copy=""){
  return `<div class="section-head">
    <span class="section-number">${number}</span>
    <div>
      <p class="eyebrow">${eyebrow}</p>
      <h2 class="section-title">${title}</h2>
      ${copy?`<p class="section-copy">${copy}</p>`:""}
    </div>
  </div>`;
}
function hero(label,title,accent,intro,role=""){
  return `<section class="page-hero">
    <div class="container">
      <span class="kicker"><i></i>${label}</span>
      <h1 class="display">${title}<span class="accent">${accent}</span></h1>
      ${role?`<p class="hero-role">${role}</p>`:""}
      <p class="lede">${intro}</p>
    </div>
  </section>`;
}

function homePage(){
  return `
  <section class="page-hero">
    <div class="container hero-grid">
      <div>
        <span class="kicker"><i></i>${ro()?"PORTOFOLIU PERSONAL DE TEHNOLOGIE":"PERSONAL TECHNOLOGY PORTFOLIO"}</span>
        <h1 class="display">${ro()?"Salut, sunt":"Hi, I'm"}<span class="accent">Mihai Teleuca.</span></h1>
        <p class="hero-role">AI Engineering • Cloud • DevOps • Cybersecurity • Python • Software Development</p>
        <p class="lede">${ro()
          ?"Îmi construiesc o carieră pe termen lung în tehnologie cu o abordare simplă: prefer să înțeleg lucrurile în profunzime, să le exersez practic și să pot explica de ce funcționează. Portofoliul acesta nu încearcă să creeze impresia că am ajuns deja la finalul drumului. Din contră, documentează în mod profesionist fundația pe care o construiesc, proiectele la care lucrez, certificările finalizate și traseele de engineering pe care vreau să le parcurg."
          :"I am building a long-term career in technology with a simple approach: understand things deeply, practice them in real work and be able to explain why they work. This portfolio is not designed to create the impression that I have already reached the end of the journey. Instead, it professionally documents the foundation I am building, the projects I am developing, the credentials I have actually completed and the engineering paths I intend to pursue."}</p>
        <div class="actions">
          <a class="button button-primary route-link" href="/roadmap" data-route="/roadmap">${ro()?"Explorează roadmap-ul":"Explore the roadmap"}</a>
          <a class="button button-secondary route-link" href="/proiecte" data-route="/proiecte">${ro()?"Vezi proiectele":"View projects"}</a>
        </div>
      </div>

      <aside class="profile-panel">
        <div class="profile-top"><span>LIVE PROFILE</span><span class="online">● PUBLIC</span></div>
        <div class="avatar"><img id="avatar" src="https://avatars.githubusercontent.com/u/285664462?v=4" alt="Mihai Teleuca" width="132" height="132"></div>
        <h2 id="profileName">Mihai Teleuca</h2>
        <p id="profileLogin">@MihaiTeleuca</p>
        <div class="badges"><span>AI</span><span>Cloud</span><span>DevOps</span><span>Cybersecurity</span><span>Python</span><span>Software</span></div>
        <div class="info-grid">
          <div><small>${ro()?"LOCAȚIE PUBLICĂ":"PUBLIC LOCATION"}</small><strong>Lake King, Western Australia</strong></div>
          <div><small>${ro()?"FOCUS ACTUAL":"CURRENT FOCUS"}</small><strong>${ro()?"Învățare • proiecte • documentare":"Learning • projects • documentation"}</strong></div>
        </div>
        <div class="metrics">
          <article><strong id="heroRepos">—</strong><span>Repos</span></article>
          <article><strong id="heroFollowers">—</strong><span>Followers</span></article>
          <article><strong id="heroStars">—</strong><span>Stars</span></article>
        </div>
      </aside>
    </div>
  </section>

  <section class="section defer-section">
    <div class="container">
      ${sectionHead("01",ro()?"DE CE EXISTĂ ACEST PORTOFOLIU":"WHY THIS PORTFOLIO EXISTS",
        ro()?"Vreau ca progresul meu tehnic să fie ușor de înțeles și ușor de verificat.":"I want my technical progress to be easy to understand and easy to verify.",
        ro()?"În locul unei pagini pline de titluri și procente fără context, acest website separă clar ceea ce am finalizat, ceea ce învăț acum, ceea ce construiesc și ceea ce este încă planificat."
             :"Instead of a page filled with titles and percentages without context, this website clearly separates what I have completed, what I am learning now, what I am building and what is still planned."
      )}
      <div class="trust-grid">
        <article class="trust-card"><span class="micro">01 / REAL STATUS</span><strong>${ro()?"Statusuri clare":"Clear status labels"}</strong><p>${ro()?"Completed, In Progress, In Development și Planned sunt folosite separat, astfel încât un cititor să știe exact unde mă aflu.":"Completed, In Progress, In Development and Planned are kept separate so a reader can immediately understand where I am."}</p></article>
        <article class="trust-card"><span class="micro">02 / LIVE DATA</span><strong>${ro()?"Date GitHub reale":"Real GitHub data"}</strong><p>${ro()?"Statisticile și repository-urile publice sunt preluate direct din GitHub, nu sunt numere inventate în HTML.":"Public statistics and repositories are loaded directly from GitHub rather than hard-coded into the page."}</p></article>
        <article class="trust-card"><span class="micro">03 / CREDENTIALS</span><strong>${ro()?"Certificări separate de planuri":"Credentials separated from plans"}</strong><p>${ro()?"Certificările finalizate apar separat de cursurile aflate în progres și de examenele pe care vreau să le susțin în viitor.":"Completed credentials are separated from learning that is still in progress and from future certification goals."}</p></article>
        <article class="trust-card"><span class="micro">04 / PROJECTS</span><strong>${ro()?"Proiecte cu context":"Projects with context"}</strong><p>${ro()?"Fiecare proiect explică problema, direcția tehnică și următorul milestone, nu doar un nume și câteva tehnologii.":"Each project explains the problem, technical direction and next milestone rather than only showing a title and a technology list."}</p></article>
      </div>
    </div>
  </section>

  <section class="section defer-section">
    <div class="container">
      ${sectionHead("02",ro()?"FUNDAMENTUL":"THE FOUNDATION",
        ro()?"Mai multe domenii, dar o singură imagine tehnică.":"Multiple disciplines, but one technical picture.",
        ro()?"Scopul meu este să pot privi o aplicație modernă și să înțeleg codul, infrastructura, rețeaua, livrarea, monitorizarea și securitatea, nu doar o singură piesă."
             :"My goal is to look at a modern application and understand the code, infrastructure, network, delivery, monitoring and security—not only one piece."
      )}
      <div class="domain-grid">
        <article class="domain-card"><span class="domain-icon">PY</span><h3>Python</h3><p>${ro()?"Instrumentul meu principal pentru logică, automatizare, scripting și viitoarele proiecte AI, cloud și security.":"My primary tool for logic, automation, scripting and future AI, cloud and security projects."}</p><small>FOUNDATION</small></article>
        <article class="domain-card"><span class="domain-icon">AI</span><h3>AI Engineering</h3><p>${ro()?"De la fundamente și Generative AI până la model APIs, RAG, evaluare și integrarea AI în aplicații reale.":"From foundations and Generative AI to model APIs, RAG, evaluation and integrating AI into real applications."}</p><small>ENGINEERING TRACK</small></article>
        <article class="domain-card"><span class="domain-icon">CL</span><h3>Cloud Engineering</h3><p>${ro()?"Identity, networking, compute, storage, securitate, monitorizare și design operațional în medii cloud.":"Identity, networking, compute, storage, security, monitoring and operational design in cloud environments."}</p><small>INFRASTRUCTURE</small></article>
        <article class="domain-card"><span class="domain-icon">DO</span><h3>DevOps</h3><p>${ro()?"Procese de livrare repetabile prin Git, CI/CD, containere, Infrastructure as Code și observability.":"Repeatable delivery through Git, CI/CD, containers, Infrastructure as Code and observability."}</p><small>DELIVERY</small></article>
        <article class="domain-card"><span class="domain-icon">CY</span><h3>Cybersecurity</h3><p>${ro()?"Gândire defensivă, hardening, logging, vulnerabilități, incidente și testare etică în medii autorizate.":"Defensive thinking, hardening, logging, vulnerabilities, incidents and ethical testing in authorized environments."}</p><small>SECURITY</small></article>
        <article class="domain-card"><span class="domain-icon">IT</span><h3>IT Systems & Networking</h3><p>${ro()?"Windows, Linux, DNS, TCP/IP, virtualizare și troubleshooting — fundația care conectează toate celelalte domenii.":"Windows, Linux, DNS, TCP/IP, virtualization and troubleshooting—the foundation connecting the other disciplines."}</p><small>SYSTEMS</small></article>
      </div>
    </div>
  </section>

  <section class="section defer-section">
    <div class="container">
      ${sectionHead("03",ro()?"PROIECTE REPREZENTATIVE":"FEATURED PROJECTS",
        ro()?"Lucrurile pe care vreau să le pot arăta, nu doar să le descriu.":"Work I want to be able to show, not only describe.",
        ro()?"Proiectele de mai jos sunt legate direct de ceea ce învăț și au statusuri reale. Nu sunt prezentate ca finalizate dacă sunt încă în dezvoltare."
             :"The projects below are directly connected to what I am learning and use real status labels. They are not presented as finished if they are still being developed."
      )}
      <div class="grid-3">
        ${projects.slice(0,3).map(p=>`<article class="card">
          <span class="micro">${p.n} / ${statusLabel(p.status)}</span>
          <h3>${p.title}</h3>
          <p>${ro()?p.ro:p.en}</p>
          ${chipList(p.chips)}
        </article>`).join("")}
      </div>
      <div class="actions"><a class="button button-secondary route-link" href="/proiecte" data-route="/proiecte">${ro()?"Vezi toate studiile de caz":"View all case studies"} →</a></div>
    </div>
  </section>

  <section class="section defer-section">
    <div class="container">
      ${sectionHead("04",ro()?"ACUM":"RIGHT NOW",
        ro()?"În loc să pretind că am terminat drumul, prefer să spun exact ce fac în prezent.":"Instead of pretending the journey is complete, I prefer to show exactly what I am working on now."
      )}
      <div class="grid-3">
        <article class="card"><span class="micro">AI / IN PROGRESS</span><h3>Microsoft Generative AI Engineering</h3><p>${ro()?"Traseu în desfășurare pentru Generative AI Engineering. Învățarea continuă către LLM-uri, RAG, prompt engineering, responsible AI și workflow-uri de engineering.":"An ongoing Generative AI Engineering path, continuing toward LLMs, RAG, prompt engineering, responsible AI and engineering workflows."}</p></article>
        <article class="card"><span class="micro">PYTHON / ACTIVE</span><h3>${ro()?"Practică de programare":"Programming practice"}</h3><p>${ro()?"Lucrez de la elementele de bază către funcții, structuri de date, fișiere, module și proiecte mici care obligă teoria să devină practică.":"I am moving from fundamentals toward functions, data structures, files, modules and small projects that force theory to become practical."}</p></article>
        <article class="card"><span class="micro">CLOUD / FOUNDATION</span><h3>${ro()?"Fundamente Azure și cloud":"Azure and cloud foundations"}</h3><p>${ro()?"Consolidez arhitectura cloud, compute, storage, networking, Entra ID/RBAC, monitoring, security și cost awareness.":"I am consolidating cloud architecture, compute, storage, networking, Entra ID/RBAC, monitoring, security and cost awareness."}</p></article>
      </div>
    </div>
  </section>

  <section class="section defer-section">
    <div class="container">
      <div class="callout">
        <strong>${ro()?"Profesionalismul, pentru mine, începe cu claritatea.":"For me, professionalism starts with clarity."}</strong>
        <p>${ro()
          ?"Dacă un lucru este finalizat, îl marchez ca finalizat. Dacă este încă în progres, spun asta. Dacă este doar o idee bună pentru un proiect viitor, îl prezint ca idee. Vreau ca oamenii care citesc acest website să poată avea încredere în diferența dintre ceea ce am făcut deja și ceea ce vreau să construiesc."
          :"If something is completed, I mark it as completed. If it is still in progress, I say so. If it is a strong idea for a future project, I present it as an idea. I want people reading this website to trust the difference between what I have already done and what I intend to build."}</p>
      </div>
    </div>
  </section>`;
}

function aboutPage(){
  return `
  ${hero("/ABOUT",
    ro()?"Mai mult decât":"More than",
    ro()?"o listă de tehnologii.":"a list of technologies.",
    ro()
      ?"Vreau ca profilul meu tehnic să spună o poveste coerentă: cum gândesc, cum învăț, de unde vine disciplina mea de lucru și de ce aleg să construiesc o fundație largă înainte de a mă limita la un singur titlu."
      :"I want my technical profile to tell a coherent story: how I think, how I learn, where my work discipline comes from and why I am choosing to build a broad foundation before limiting myself to a single title."
  )}

  <section class="section defer-section"><div class="container">
    ${sectionHead("01",ro()?"POVESTEA":"THE STORY",
      ro()?"Tehnologia a devenit un mod de a gândi, nu doar un domeniu pe care vreau să îl studiez.":"Technology became a way of thinking, not only a field I want to study."
    )}
    <article class="panel editorial-story">
      <p class="lead">${ro()
        ?"Ceea ce mă atrage cel mai mult la tehnologie este faptul că aproape orice rezultat vizibil ascunde un sistem de decizii, dependențe și compromisuri. Cu cât învăț mai mult, cu atât devin mai interesat nu doar de «cum se face», ci de «de ce a fost construit așa»."
        :"What attracts me most to technology is that almost every visible result hides a system of decisions, dependencies and trade-offs. The more I learn, the more interested I become not only in “how it is done,” but in “why it was built that way.”"}</p>
      <p>${ro()
        ?"De aceea îmi construiesc traseul de la fundație în sus. Python mă învață logică și automatizare. Networking-ul explică modul în care sistemele comunică. Cloud-ul mută discuția către infrastructură, scalare și operare. DevOps leagă dezvoltarea de livrare. Cybersecurity schimbă perspectiva și obligă fiecare decizie să țină cont de risc, identitate și protecție. AI adaugă o nouă categorie de sisteme pe care vreau să le înțeleg și să le integrez responsabil."
        :"That is why I am building my path from the foundation upward. Python teaches logic and automation. Networking explains how systems communicate. Cloud moves the discussion toward infrastructure, scale and operations. DevOps connects development with delivery. Cybersecurity changes the perspective by forcing every decision to consider risk, identity and protection. AI adds a new class of systems that I want to understand and integrate responsibly."}</p>
      <p>${ro()
        ?"Nu mă interesează să arăt că știu câte puțin din foarte multe lucruri doar pentru a umple o listă. Pe termen lung, vreau să ajung într-un punct în care pot urmări un sistem de la cod la deployment, de la rețea la autentificare, de la monitorizare la incident și de la o idee de produs la o soluție care funcționează în mod repetabil."
        :"I am not interested in appearing to know a little about many things simply to fill a list. Long term, I want to reach a point where I can follow a system from code to deployment, from networking to authentication, from monitoring to incidents and from a product idea to a solution that works repeatedly."}</p>
      <div class="values">
        <div class="value-row"><span>01</span><strong>${ro()?"Profunzime înainte de viteză":"Depth before speed"}</strong></div>
        <div class="value-row"><span>02</span><strong>${ro()?"Practică înainte de afirmații":"Practice before claims"}</strong></div>
        <div class="value-row"><span>03</span><strong>${ro()?"Claritate înainte de impresie":"Clarity before impression"}</strong></div>
        <div class="value-row"><span>04</span><strong>${ro()?"Progres măsurabil, nu perfecțiune afișată":"Measurable progress, not displayed perfection"}</strong></div>
      </div>
    </article>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("02",ro()?"CUM ÎNVĂȚ":"HOW I LEARN",
      ro()?"Încerc să transform fiecare noțiune într-o problemă pe care o pot rezolva.":"I try to turn every concept into a problem I can solve."
    )}
    <div class="grid-4">
      <article class="card"><span class="micro">01 / UNDERSTAND</span><h3>${ro()?"Înțeleg contextul":"Understand the context"}</h3><p>${ro()?"Înainte de comenzi și sintaxă, încerc să înțeleg problema pentru care tehnologia a fost creată.":"Before commands and syntax, I try to understand the problem the technology was created to solve."}</p></article>
      <article class="card"><span class="micro">02 / PRACTICE</span><h3>${ro()?"Exersez imediat":"Practice immediately"}</h3><p>${ro()?"Prefer exerciții mici și dese, astfel încât conceptele să devină reflexe tehnice și nu doar informații memorate.":"I prefer small, frequent exercises so concepts become technical habits rather than memorized information."}</p></article>
      <article class="card"><span class="micro">03 / BUILD</span><h3>${ro()?"Construiesc ceva":"Build something"}</h3><p>${ro()?"Un proiect mă obligă să gestionez erori, decizii și compromisuri pe care un exemplu simplu nu le arată.":"A project forces me to handle errors, decisions and trade-offs that a simple example does not reveal."}</p></article>
      <article class="card"><span class="micro">04 / EXPLAIN</span><h3>${ro()?"Încerc să explic":"Try to explain it"}</h3><p>${ro()?"Dacă nu pot explica simplu ce am făcut și de ce, înseamnă că mai am de învățat.":"If I cannot explain simply what I did and why, I still have more to learn."}</p></article>
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("03",ro()?"DINCOLO DE TEHNOLOGIE":"BEYOND TECHNOLOGY",
      ro()?"Vreau ca profilul meu profesional să rămână uman.":"I want my professional profile to remain human."
    )}
    <div class="grid-3">
      <article class="card"><span class="micro">TRAVEL</span><h3>${ro()?"Curiozitate pentru locuri noi":"Curiosity for new places"}</h3><p>${ro()?"Călătoriile m-au obișnuit să observ diferențe, să mă adaptez și să ies din rutină. Aceeași curiozitate o aduc și în modul în care învăț tehnologii noi.":"Travel has taught me to notice differences, adapt and step outside routine. I bring the same curiosity to the way I learn new technologies."}</p></article>
      <article class="card"><span class="micro">GAMING</span><h3>${ro()?"Sisteme, strategie și comunități":"Systems, strategy and communities"}</h3><p>${ro()?"Gaming-ul și proiectele de comunitate online m-au făcut interesat de automatizare, platforme, experiența utilizatorilor și modul în care funcționează ecosistemele digitale.":"Gaming and online community projects made me interested in automation, platforms, user experience and how digital ecosystems work."}</p></article>
      <article class="card"><span class="micro">MINDSET</span><h3>${ro()?"Îmbunătățire continuă":"Continuous improvement"}</h3><p>${ro()?"Îmi place ideea că o abilitate bună nu este terminată niciodată; devine mai clară și mai puternică prin practică, feedback și proiecte mai dificile.":"I like the idea that a strong skill is never truly finished; it becomes clearer and stronger through practice, feedback and harder projects."}</p></article>
    </div>
  </div></section>`;
}

function experiencePage(){
  return `
  ${hero("/EXPERIENCE",
    ro()?"Experiența mea nu începe":"My experience does not begin",
    ro()?"cu primul job în IT.":"with my first IT job.",
    ro()
      ?"Înainte de a-mi orienta energia către tehnologie, am lucrat în medii care m-au învățat disciplină, procese, calitate, responsabilitate și colaborare. Consider aceste lucruri parte din fundația profesională pe care o aduc acum în proiectele tehnice."
      :"Before focusing my energy on technology, I worked in environments that taught me discipline, process awareness, quality, responsibility and teamwork. I consider those lessons part of the professional foundation I now bring into technical projects."
  )}

  <section class="section defer-section"><div class="container">
    ${sectionHead("01",ro()?"FUNDAL PROFESIONAL":"PROFESSIONAL BACKGROUND",
      ro()?"Experiență în medii reale, cu procese și responsabilitate.":"Experience in real environments with processes and responsibility."
    )}
    <div class="grid-2">
      <article class="experience-card">
        <div class="experience-meta"><span>${ro()?"PRODUCȚIE":"PRODUCTION"}</span><span>AUTOMOTIVE</span><span>QUALITY</span></div>
        <h3>${ro()?"Automotive & producție industrială":"Automotive & industrial production"}</h3>
        <p>${ro()
          ?"Am experiență în medii de producție și automotive, inclusiv contexte asociate cu BMW și Continental. Aceste medii mi-au arătat ce înseamnă procese bine definite, standarde de calitate, repetabilitate și impactul unei erori mici într-un sistem mai mare."
          :"I have experience across production and automotive environments, including contexts associated with BMW and Continental. Those environments showed me the importance of defined processes, quality standards, repeatability and the impact a small error can have on a larger system."}</p>
      </article>
      <article class="experience-card">
        <div class="experience-meta"><span>${ro()?"ELECTRIC":"ELECTRICAL"}</span><span>LOGISTICS</span><span>CUSTOMER</span></div>
        <h3>${ro()?"Muncă tehnică, logistică și medii orientate spre client":"Technical work, logistics and customer-facing environments"}</h3>
        <p>${ro()
          ?"Am trecut și prin zone precum lucrări electrice, logistică și contexte orientate spre clienți. Fiecare a adăugat alt tip de disciplină: atenție la siguranță, organizare, comunicare și capacitatea de a rămâne funcțional atunci când lucrurile nu merg exact conform planului."
          :"My background also includes areas such as electrical work, logistics and customer-focused environments. Each added a different type of discipline: safety awareness, organization, communication and the ability to stay effective when things do not go exactly according to plan."}</p>
      </article>
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("02",ro()?"CE TRANSFER ÎN IT":"WHAT I BRING INTO IT",
      ro()?"Competențele tehnice se învață. Obiceiurile profesionale se construiesc în timp.":"Technical skills can be learned. Professional habits are built over time."
    )}
    <div class="transfer-grid">
      <article class="transfer-item"><strong>${ro()?"Disciplină de proces":"Process discipline"}</strong><p>${ro()?"Respectarea pașilor, verificarea rezultatului și înțelegerea faptului că procesele există pentru un motiv.":"Following steps, verifying results and understanding that processes exist for a reason."}</p></article>
      <article class="transfer-item"><strong>${ro()?"Atenție la calitate":"Quality awareness"}</strong><p>${ro()?"Un rezultat care doar «pare să funcționeze» nu este suficient atunci când trebuie să fie repetabil și de încredere.":"A result that only “seems to work” is not enough when it needs to be repeatable and reliable."}</p></article>
      <article class="transfer-item"><strong>${ro()?"Siguranță și responsabilitate":"Safety and responsibility"}</strong><p>${ro()?"Lucrul în medii tehnice m-a obișnuit să tratez riscul și consecințele ca parte din decizie.":"Working in technical environments made me treat risk and consequences as part of every decision."}</p></article>
      <article class="transfer-item"><strong>${ro()?"Lucru în echipă":"Teamwork"}</strong><p>${ro()?"Sistemele reale depind de oameni diferiți, roluri diferite și comunicare suficient de clară încât munca să se lege.":"Real systems depend on different people, different roles and communication clear enough for the work to connect."}</p></article>
      <article class="transfer-item"><strong>${ro()?"Rezolvarea problemelor":"Problem solving"}</strong><p>${ro()?"Când ceva se oprește, întrebarea utilă nu este cine este de vină, ci unde este problema și ce informație ne lipsește.":"When something stops working, the useful question is not who is to blame, but where the problem is and what information is missing."}</p></article>
      <article class="transfer-item"><strong>${ro()?"Adaptare":"Adaptability"}</strong><p>${ro()?"Trecerea între domenii diferite m-a obișnuit să învăț proceduri noi și să îmi schimb modul de lucru atunci când contextul o cere.":"Moving across different environments taught me to learn new procedures and adjust how I work when the context changes."}</p></article>
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("03",ro()?"TRANZIȚIA CĂTRE TEHNOLOGIE":"THE TRANSITION INTO TECHNOLOGY",
      ro()?"Nu încerc să șterg ceea ce am făcut înainte. Încerc să construiesc peste acea experiență.":"I am not trying to erase what came before. I am trying to build on top of it."
    )}
    <article class="panel editorial-story">
      <p class="lead">${ro()
        ?"Pentru mine, schimbarea de direcție către tehnologie nu înseamnă că pornesc de la zero ca profesionist. Înseamnă că învăț un set nou de competențe tehnice și îl combin cu obiceiuri de lucru pe care le-am construit deja în medii unde calitatea, ritmul și responsabilitatea contează."
        :"For me, moving toward technology does not mean starting from zero as a professional. It means learning a new set of technical skills and combining them with work habits already built in environments where quality, pace and responsibility matter."}</p>
      <p>${ro()
        ?"De aceea îmi doresc ca acest portofoliu să reflecte atât partea nouă — Python, AI, Cloud, DevOps, Cybersecurity — cât și faptul că înțeleg valoarea proceselor, a documentației și a unui rezultat care trebuie să funcționeze mai mult de o singură dată."
        :"That is why I want this portfolio to reflect both the new technical side—Python, AI, Cloud, DevOps, Cybersecurity—and the fact that I understand the value of process, documentation and a result that must work more than once."}</p>
    </article>
  </div></section>`;
}

function roadmapPage(){
  return `
  ${hero("/ROADMAP",
    ro()?"Un drum lung,":"A long road,",
    ro()?"dar construit cu logică.":"built with logic.",
    ro()
      ?"Roadmap-ul meu nu este o listă de job titles pe care vreau să le adun. Este o ordine de învățare în care fiecare etapă o pregătește pe următoarea și fiecare specializare se sprijină pe aceleași fundamente tehnice."
      :"My roadmap is not a list of job titles I want to collect. It is a learning sequence where each stage prepares the next one and every specialization rests on the same technical foundations."
  )}

  <section class="section defer-section"><div class="container">
    ${sectionHead("01",ro()?"TRASEELE PRINCIPALE":"PRIMARY TRACKS",
      ro()?"Zece direcții, dar nu zece începuturi separate.":"Ten directions, but not ten separate beginnings.",
      ro()?"Python, networking, sisteme, Git și web sunt baza comună. De acolo, specializările devin mai ușor de conectat și de înțeles."
           :"Python, networking, systems, Git and web form the common base. From there, the specializations become easier to connect and understand."
    )}
    <div class="roadmap-grid">
      ${roadmap.map(r=>`<article class="card roadmap-card" style="--accent:${r.accent}">
        <div class="roadmap-top"><span>${r.n}</span><em class="status ${statusClass(r.status)}">${statusLabel(r.status)}</em></div>
        <h3>${r.title}</h3>
        <p>${ro()?r.ro:r.en}</p>
        ${chipList(r.chips)}
      </article>`).join("")}
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("02",ro()?"ORDINEA ÎNVĂȚĂRII":"THE LEARNING ORDER",
      ro()?"Încerc să reduc dependența de memorare printr-o ordine care are sens.":"I try to reduce dependence on memorization by learning in an order that makes sense."
    )}
    <div class="timeline">
      <article class="timeline-item"><span>01</span><div><strong>${ro()?"Fundație de programare și sisteme":"Programming and systems foundation"}</strong><p>Python • Git • HTML/CSS/JavaScript • Linux • Windows • Networking</p></div></article>
      <article class="timeline-item"><span>02</span><div><strong>${ro()?"Cloud și infrastructură":"Cloud and infrastructure"}</strong><p>${ro()?"Identity, networking, compute, storage, securitate, monitorizare și cost awareness.":"Identity, networking, compute, storage, security, monitoring and cost awareness."}</p></div></article>
      <article class="timeline-item"><span>03</span><div><strong>${ro()?"DevOps și automatizare":"DevOps and automation"}</strong><p>${ro()?"Containere, CI/CD, IaC, observability și procese de deployment reproductibile.":"Containers, CI/CD, IaC, observability and reproducible deployment processes."}</p></div></article>
      <article class="timeline-item"><span>04</span><div><strong>${ro()?"AI Engineering":"AI Engineering"}</strong><p>${ro()?"Integrarea modelelor, RAG, evaluare, API-uri, responsible AI și MLOps pe o bază tehnică deja mai solidă.":"Model integration, RAG, evaluation, APIs, responsible AI and MLOps on top of a stronger technical base."}</p></div></article>
      <article class="timeline-item"><span>05</span><div><strong>${ro()?"Cybersecurity peste toate straturile":"Cybersecurity across every layer"}</strong><p>${ro()?"Security nu este un capitol separat la final, ci o perspectivă pe care vreau să o aplic pe cod, identitate, rețea, cloud și operațiuni.":"Security is not a separate chapter at the end, but a perspective I want to apply to code, identity, networking, cloud and operations."}</p></div></article>
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("03",ro()?"CUM ȘTIU CĂ AM AVANSAT":"HOW I MEASURE PROGRESS",
      ro()?"Nu prin numărul de videoclipuri văzute, ci prin ce pot face după ele.":"Not by how many videos I watched, but by what I can do afterward."
    )}
    <div class="grid-4">
      <article class="card"><span class="micro">UNDERSTAND</span><h3>${ro()?"Pot explica":"I can explain"}</h3><p>${ro()?"Pot descrie problema, conceptele și compromisurile fără să copiez definiții.":"I can describe the problem, concepts and trade-offs without copying definitions."}</p></article>
      <article class="card"><span class="micro">BUILD</span><h3>${ro()?"Pot construi":"I can build"}</h3><p>${ro()?"Pot realiza un exemplu sau un proiect mic fără ca fiecare pas să fie dictat.":"I can create an example or small project without every step being dictated."}</p></article>
      <article class="card"><span class="micro">DEBUG</span><h3>${ro()?"Pot investiga":"I can investigate"}</h3><p>${ro()?"Când apare o eroare, pot forma ipoteze și căuta dovezi în loc să încerc soluții la întâmplare.":"When an error appears, I can form hypotheses and look for evidence instead of trying random fixes."}</p></article>
      <article class="card"><span class="micro">DOCUMENT</span><h3>${ro()?"Pot documenta":"I can document"}</h3><p>${ro()?"Pot explica deciziile, configurația, limitările și pașii necesari pentru a reproduce rezultatul.":"I can explain decisions, configuration, limitations and the steps required to reproduce the result."}</p></article>
    </div>
  </div></section>`;
}

function projectsPage(){
  return `
  ${hero("/PROJECTS",
    ro()?"Proiectele sunt":"Projects are",
    ro()?"dovada că teoria a devenit practică.":"proof that theory became practice.",
    ro()
      ?"Nu vreau proiecte create doar pentru a umple o pagină. Fiecare proiect de aici are un motiv: fie demonstrează o abilitate pe care o exersez deja, fie definește un obiectiv tehnic concret pentru următoarea etapă de învățare."
      :"I do not want projects created only to fill a page. Every project here has a reason: either it demonstrates a skill I am already practicing or it defines a concrete technical objective for the next stage of learning."
  )}

  <section class="section defer-section"><div class="container">
    ${sectionHead("01",ro()?"STUDII DE CAZ":"CASE STUDIES",
      ro()?"Fiecare proiect are o problemă, o direcție și un următor milestone.":"Every project has a problem, a direction and a next milestone."
    )}
    <div class="project-grid">
      ${projects.map(p=>`<article class="project-case" style="--accent:${p.accent}">
        <div class="project-top"><span>${p.n}</span><em class="status ${statusClass(p.status)}">${statusLabel(p.status)}</em></div>
        <h3>${p.title}</h3>
        <p class="project-summary">${ro()?p.ro:p.en}</p>
        <div class="project-detail"><strong>${ro()?"PROBLEMA":"PROBLEM"}</strong><p>${ro()?p.problemRo:p.problemEn}</p></div>
        <div class="project-detail"><strong>${ro()?"URMĂTORUL MILESTONE":"NEXT MILESTONE"}</strong><p>${ro()?p.nextRo:p.nextEn}</p></div>
        ${chipList(p.chips)}
        ${p.link?`<div class="project-links"><a href="${p.link}" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>`:""}
      </article>`).join("")}
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("02",ro()?"CUM ALEG UN PROIECT":"HOW I CHOOSE A PROJECT",
      ro()?"Un proiect bun trebuie să îmi ceară ceva ce încă nu stăpânesc complet.":"A good project should require something I do not fully master yet."
    )}
    <div class="grid-3">
      <article class="card"><span class="micro">RELEVANCE</span><h3>${ro()?"Legat de roadmap":"Connected to the roadmap"}</h3><p>${ro()?"Proiectele sunt alese pentru a exersa concepte pe care oricum vreau să le învăț, nu doar pentru a produce un screenshot frumos.":"Projects are chosen to practice concepts I already want to learn, not merely to produce a good screenshot."}</p></article>
      <article class="card"><span class="micro">DIFFICULTY</span><h3>${ro()?"Puțin peste nivelul actual":"Slightly above my current level"}</h3><p>${ro()?"Dacă totul este deja confortabil, proiectul nu mă obligă să investighez, să citesc documentație sau să îmi corectez presupunerile.":"If everything is already comfortable, the project does not force me to investigate, read documentation or correct my assumptions."}</p></article>
      <article class="card"><span class="micro">EVIDENCE</span><h3>${ro()?"Rezultat verificabil":"Verifiable result"}</h3><p>${ro()?"Încerc ca rezultatul să poată fi arătat prin cod, documentație, configurație, demo sau repository public.":"I try to make the result demonstrable through code, documentation, configuration, a demo or a public repository."}</p></article>
    </div>
  </div></section>`;
}

function credentialsPage(){
  return `
  ${hero("/CREDENTIALS",
    ro()?"Certificatele au valoare":"Credentials matter",
    ro()?"când susțin o competență reală.":"when they support real capability.",
    ro()
      ?"Folosesc cursurile și certificările ca structură pentru învățare, nu ca înlocuitor pentru practică. Această pagină separă clar ceea ce este finalizat, ceea ce este încă în progres și direcțiile de certificare pe care vreau să le urmăresc ulterior."
      :"I use courses and credentials as structure for learning, not as a replacement for practice. This page clearly separates what is completed, what is still in progress and the certification directions I intend to pursue later."
  )}

  <section class="section defer-section"><div class="container">
    ${sectionHead("01",ro()?"FINALIZATE":"COMPLETED",
      ro()?"Doar lucrurile pe care le pot prezenta ca finalizate în mod corect.":"Only items I can accurately present as completed."
    )}
    <div class="credentials-grid">
      ${completedCredentials.map(c=>`<article class="credential-card">
        <div class="credential-top"><span class="micro">${escapeHtml(c.issuer)}</span><em class="status ${statusClass(c.status)}">${statusLabel(c.status)}</em></div>
        <h3>${escapeHtml(c.title)}</h3>
        <p>${ro()?c.detailRo:c.detailEn}</p>
        <div class="credential-meta">
          <div><span>${ro()?"DATĂ / STATUS":"DATE / STATUS"}</span><strong>${escapeHtml(c.date)}</strong></div>
          <div><span>CREDENTIAL ID</span><strong>${escapeHtml(c.id)}</strong></div>
        </div>
      </article>`).join("")}
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("02",ro()?"ÎN PROGRES":"IN PROGRESS",
      ro()?"Trasee pe care le studiez acum și pe care nu le prezint ca finalizate.":"Learning paths I am actively studying and do not present as completed."
    )}
    <div class="grid-3">
      ${currentLearning.map(c=>`<article class="card"><div class="credential-top"><span class="micro">LEARNING PATH</span><em class="status status-progress">${statusLabel(c.status)}</em></div><h3>${c.title}</h3><p>${ro()?c.ro:c.en}</p></article>`).join("")}
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("03",ro()?"URMĂTOAREA ETAPĂ":"THE NEXT STAGE",
      ro()?"După learning paths, vreau să trec către certificări oficiale și proiecte care le susțin.":"After learning paths, I want to move toward official certifications supported by projects."
    )}
    <div class="grid-3">
      <article class="card"><span class="micro">CLOUD</span><h3>${ro()?"Certificări oficiale Azure":"Official Azure certifications"}</h3><p>${ro()?"După consolidarea fundației cloud, vreau să folosesc examenele oficiale Microsoft ca verificare suplimentară a cunoștințelor, nu ca punct de pornire.":"After strengthening my cloud foundation, I want to use official Microsoft exams as an additional validation of knowledge rather than as the starting point."}</p></article>
      <article class="card"><span class="micro">SECURITY</span><h3>${ro()?"Certificări de cybersecurity":"Cybersecurity certifications"}</h3><p>${ro()?"Vreau ca eventualele certificări de security să vină după networking, sisteme, laboratoare și o bază defensivă suficient de practică.":"I want future security certifications to come after networking, systems, labs and a sufficiently practical defensive foundation."}</p></article>
      <article class="card"><span class="micro">ENGINEERING</span><h3>${ro()?"Certificarea nu este finalul":"Certification is not the finish line"}</h3><p>${ro()?"După orice examen, obiectivul rămâne același: să pot construi, investiga, documenta și explica sisteme reale.":"After any exam, the goal remains the same: to build, investigate, document and explain real systems."}</p></article>
    </div>
  </div></section>`;
}

function githubPage(){
  return `
  ${hero("/GITHUB",
    ro()?"Partea din portofoliu":"The part of the portfolio",
    ro()?"care poate fi verificată în timp real.":"that can be checked in real time.",
    ro()
      ?"Datele de pe această pagină sunt preluate din profilul meu public GitHub. Repository-urile vor deveni mai importante pe măsură ce transform învățarea în proiecte documentate și cod public."
      :"The data on this page is loaded from my public GitHub profile. Repositories will become increasingly important as I turn learning into documented projects and public code."
  )}

  <section class="section defer-section"><div class="container">
    <div class="repo-stats">
      <article class="stat-card"><small>PUBLIC REPOSITORIES</small><strong id="repoCount">—</strong></article>
      <article class="stat-card"><small>FOLLOWERS</small><strong id="followersCount">—</strong></article>
      <article class="stat-card"><small>FOLLOWING</small><strong id="followingCount">—</strong></article>
      <article class="stat-card"><small>ACCOUNT AGE</small><strong id="accountAge">—</strong></article>
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("02","PUBLIC REPOSITORIES",
      ro()?"Repository-uri încărcate automat din GitHub.":"Repositories loaded automatically from GitHub.",
      ro()?"Nu folosesc un token privat în browser. Pagina citește doar informațiile publice disponibile prin API-ul GitHub."
           :"No private token is exposed in the browser. The page only reads public information available through the GitHub API."
    )}
    <div id="repoList" class="repo-list"><div class="repo-placeholder">Loading GitHub data…</div></div>
  </div></section>

  <section class="section defer-section"><div class="container">
    <div class="callout">
      <strong>${ro()?"Obiectivul meu pentru GitHub este calitatea progresului, nu doar numărul de repository-uri.":"My goal for GitHub is quality of progress, not simply repository count."}</strong>
      <p>${ro()
        ?"Pe măsură ce învăț, vreau ca repository-urile să includă README-uri clare, pași de instalare, explicații despre decizii, exemple și, acolo unde are sens, teste. Un istoric public bun ar trebui să arate nu doar ce am construit, ci și felul în care am învățat să construiesc mai bine."
        :"As I learn, I want repositories to include clear READMEs, installation steps, decision explanations, examples and, where appropriate, tests. A strong public history should show not only what I built, but how I learned to build better."}</p>
    </div>
  </div></section>`;
}

function contactPage(){
  return `
  ${hero("/CONTACT",
    ro()?"Conexiunile bune încep":"Good connections begin",
    ro()?"cu un context clar.":"with clear context.",
    ro()
      ?"Sunt deschis să cunosc oameni care lucrează sau învață în tehnologie, să urmăresc proiecte interesante și să construiesc o rețea profesională în jurul domeniilor în care vreau să cresc."
      :"I am open to connecting with people who work or learn in technology, following interesting projects and building a professional network around the areas in which I want to grow."
  )}

  <section class="section defer-section"><div class="container">
    <div class="contact-grid">
      <article class="card">
        <span class="micro">${ro()?"LOCAȚIE PUBLICĂ":"PUBLIC LOCATION"}</span>
        <h3>Lake King, Western Australia, Australia</h3>
        <p>${ro()
          ?"Aceasta este locația generală pe care aleg să o afișez public în portofoliu. Nu public adresă stradală sau alte date precise de localizare."
          :"This is the general location I choose to display publicly on the portfolio. I do not publish a street address or other precise location data."}</p>
        <div class="location-box"><span class="location-pin">⌖</span><div><small>BASE</small><strong>Lake King, WA, Australia</strong></div></div>
      </article>
      <article class="card">
        <span class="micro">PUBLIC PROFILES</span>
        <div class="social-list" style="margin-top:16px">
          <a class="social-link" href="https://github.com/MihaiTeleuca" target="_blank" rel="noopener noreferrer"><span><b>GitHub</b><small>@MihaiTeleuca</small></span><strong>↗</strong></a>
          <a class="social-link" href="https://www.instagram.com/mihai_teleuca/" target="_blank" rel="noopener noreferrer"><span><b>Instagram</b><small>@mihai_teleuca</small></span><strong>↗</strong></a>
          <a class="social-link" href="https://www.facebook.com/mihai.teleuca/" target="_blank" rel="noopener noreferrer"><span><b>Facebook</b><small>mihai.teleuca</small></span><strong>↗</strong></a>
        </div>
      </article>
    </div>
  </div></section>

  <section class="section defer-section"><div class="container">
    ${sectionHead("02",ro()?"DESPRE CE PUTEM VORBI":"WHAT WE CAN CONNECT AROUND",
      ro()?"Tehnologia este suficient de mare încât nimeni nu crește singur.":"Technology is large enough that nobody grows alone."
    )}
    <div class="grid-4">
      <article class="card"><span class="micro">AI</span><h3>AI Engineering</h3><p>${ro()?"Learning paths, proiecte, RAG, LLM integrations, responsible AI și resurse practice.":"Learning paths, projects, RAG, LLM integrations, responsible AI and practical resources."}</p></article>
      <article class="card"><span class="micro">CLOUD</span><h3>Cloud & DevOps</h3><p>${ro()?"Azure, deployment, infrastructure, automatizare, CI/CD și observability.":"Azure, deployment, infrastructure, automation, CI/CD and observability."}</p></article>
      <article class="card"><span class="micro">SECURITY</span><h3>Cybersecurity</h3><p>${ro()?"Defensive security, labs autorizate, networking, hardening și învățare structurată.":"Defensive security, authorized labs, networking, hardening and structured learning."}</p></article>
      <article class="card"><span class="micro">BUILD</span><h3>${ro()?"Proiecte și feedback":"Projects and feedback"}</h3><p>${ro()?"Feedback tehnic, idei de proiecte, documentație și moduri mai bune de a transforma studiul în dovadă practică.":"Technical feedback, project ideas, documentation and better ways to turn study into practical proof."}</p></article>
    </div>
  </div></section>`;
}

const routes={
  "/":homePage,
  "/acasa":homePage,
  "/despre":aboutPage,
  "/experienta":experiencePage,
  "/roadmap":roadmapPage,
  "/proiecte":projectsPage,
  "/certificari":credentialsPage,
  "/github":githubPage,
  "/contact":contactPage
};

function normalizePath(path){
  const clean=path.replace(/\/+$/,"")||"/";
  return routes[clean]?clean:"/acasa";
}

function setMobileMenu(open){
  const menu=$("mobileMenu"),button=$("mobileMenuButton");
  if(!menu||!button)return;
  menu.classList.toggle("open",open);
  menu.setAttribute("aria-hidden",open?"false":"true");
  button.setAttribute("aria-expanded",open?"true":"false");
  button.textContent=open?"×":"☰";
}

function bindRouteLinks(){
  document.querySelectorAll(".route-link").forEach(link=>{
    link.onclick=e=>{
      const route=link.dataset.route;
      if(!route)return;
      e.preventDefault();
      history.pushState({},"",route);
      render();
    };
  });
}

function updateUI(){
  document.querySelectorAll("[data-ui]").forEach(el=>el.textContent=uiText(el.dataset.ui));
  document.querySelectorAll("[data-lang-button]").forEach(btn=>btn.classList.toggle("active",btn.dataset.langButton===lang()));
}

function render(){
  setMobileMenu(false);
  const path=normalizePath(location.pathname);
  if(location.pathname!==path && location.pathname!=="/")history.replaceState({},"",path);
  $("app").innerHTML=routes[path]();
  document.querySelectorAll(".desktop-nav a,.mobile-menu-grid a").forEach(a=>a.classList.toggle("active",a.dataset.route===path));
  bindRouteLinks();
  updateUI();
  window.scrollTo(0,0);
  loadGithub();
}

function setLanguage(language){
  document.documentElement.dataset.lang=language;
  document.documentElement.lang=language;
  localStorage.setItem("portfolioLanguage",language);
  render();
}
function setTheme(theme){
  document.documentElement.dataset.theme=theme;
  localStorage.setItem("portfolioTheme",theme);
}

document.querySelectorAll("[data-lang-button]").forEach(btn=>btn.addEventListener("click",()=>setLanguage(btn.dataset.langButton)));
$("themeToggle").addEventListener("click",()=>setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"));
$("mobileMenuButton").addEventListener("click",()=>setMobileMenu(!$("mobileMenu").classList.contains("open")));
window.addEventListener("popstate",render);

function ageText(dateString){
  const days=Math.max(0,Math.floor((Date.now()-new Date(dateString).getTime())/86400000));
  if(days<30)return days+" d";
  if(days<365)return Math.floor(days/30)+" mo";
  const years=Math.floor(days/365);
  return years+(years===1?" yr":" yrs");
}
async function json(url){
  const response=await fetch(url,{headers:{Accept:"application/vnd.github+json"}});
  if(!response.ok)throw new Error("GitHub API unavailable");
  return response.json();
}
let githubCache=null;
async function getGithub(){
  if(githubCache)return githubCache;
  const cached=sessionStorage.getItem("mihaiPortfolioGithub");
  if(cached){
    try{githubCache=JSON.parse(cached);return githubCache}catch{}
  }
  const [user,repos]=await Promise.all([
    json(`${API}/users/${USER}`),
    json(`${API}/users/${USER}/repos?per_page=40&sort=updated`)
  ]);
  githubCache={user,repos};
  sessionStorage.setItem("mihaiPortfolioGithub",JSON.stringify(githubCache));
  return githubCache;
}
async function loadGithub(){
  const targets=["heroRepos","heroFollowers","heroStars","repoCount","followersCount","followingCount","accountAge","repoList","avatar","profileName","profileLogin"];
  if(!targets.some(id=>$(id)))return;
  try{
    const {user,repos}=await getGithub();
    const stars=repos.reduce((sum,r)=>sum+(r.stargazers_count||0),0);
    const values={
      heroRepos:user.public_repos,heroFollowers:user.followers,heroStars:stars,
      repoCount:user.public_repos,followersCount:user.followers,followingCount:user.following,
      accountAge:ageText(user.created_at)
    };
    Object.entries(values).forEach(([id,value])=>{if($(id))$(id).textContent=value});
    if($("avatar"))$("avatar").src=user.avatar_url;
    if($("profileName"))$("profileName").textContent=user.name||"Mihai Teleuca";
    if($("profileLogin"))$("profileLogin").textContent="@"+user.login;
    if($("repoList")){
      const visible=repos.filter(r=>!r.fork).slice(0,10);
      $("repoList").innerHTML=visible.length?visible.map(r=>`
        <a class="repo-card" href="${r.html_url}" target="_blank" rel="noopener noreferrer">
          <div class="repo-card-top"><strong>${escapeHtml(r.name)}</strong><span>↗</span></div>
          <p>${escapeHtml(r.description||"Public GitHub repository")}</p>
          <div class="repo-meta">
            <span>${escapeHtml(r.language||"Repository")}</span>
            <span>★ ${r.stargazers_count}</span>
            <span>⑂ ${r.forks_count}</span>
            <span>${new Date(r.updated_at).toLocaleDateString(lang()==="ro"?"ro-RO":"en-GB")}</span>
          </div>
        </a>`).join(""):`<div class="repo-placeholder">${ro()?"Nu există încă repository-uri publice.":"No public repositories yet."}</div>`;
    }
  }catch(error){
    console.error(error);
    if($("repoList"))$("repoList").innerHTML=`<div class="repo-placeholder">${ro()?"Datele GitHub nu sunt disponibile momentan.":"GitHub data is temporarily unavailable."}</div>`;
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  $("year").textContent="© "+new Date().getFullYear();
  setTheme(localStorage.getItem("portfolioTheme")||"dark");
  document.documentElement.dataset.lang=localStorage.getItem("portfolioLanguage")||"en";
  document.documentElement.lang=lang();
  updateUI();
  render();
});
