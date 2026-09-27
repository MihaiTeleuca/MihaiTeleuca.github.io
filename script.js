const USER="MihaiTeleuca";
const API="https://api.github.com";
const $=id=>document.getElementById(id);

const translations={
  en:{
    brandRole:"Technology Portfolio",navAbout:"About",navSkills:"Skills",navRoadmap:"Roadmap",navProjects:"Projects",navGitHub:"GitHub",navContact:"Contact",themeLabel:"Theme",
    heroKicker:"PERSONAL TECHNOLOGY PORTFOLIO",heroHello:"Hi, I'm",heroTitle:"AI Engineering • Cloud • DevOps • Cybersecurity • Python • Software Development",
    heroText:"I am building a long-term career in technology with one clear principle: understand things deeply enough to use them in the real world. I am learning step by step, turning theory into projects, documenting my progress and steadily expanding from programming and cloud into AI, DevOps, cybersecurity and modern IT systems.",
    heroRoadmap:"Explore my roadmap",heroProjects:"View projects",metricRepos:"Public repos",metricFollowers:"Followers",metricStars:"Total stars",
    identityLive:"LIVE PROFILE",identityOnline:"online",identityFocus:"CURRENT FOCUS",identityFocusValue:"Learning, building & documenting",identityBase:"LOCATION",identityLoading:"Loading GitHub data…",
    aboutEyebrow:"ABOUT ME",aboutTitle:"I am not trying to learn everything quickly. I am trying to build something that lasts.",
    aboutLead:"Technology became more than an interest for me because it gives me something concrete to improve every day: the way I think, the way I solve problems and the things I am able to build.",
    aboutBody1:"I am developing my skills from the foundations upward. That means learning programming properly, understanding systems rather than memorizing commands, creating projects that force me to solve real problems and gradually moving into larger areas such as cloud engineering, AI engineering, DevOps and cybersecurity.",
    aboutBody2:"I do not want this portfolio to look like a list of technologies I have heard of. I want it to become a record of progress: courses completed, skills practiced, mistakes corrected, projects improved and increasingly difficult problems solved over time.",
    valueLearn:"Learn with depth, not just speed",valueBuild:"Turn knowledge into practical work",valueImprove:"Keep improving even after something works",valueDocument:"Document progress honestly and clearly",
    aboutAI:"Artificial Intelligence",aboutAIBody:"From AI fundamentals and generative systems to practical automation, model usage and eventually engineering production-ready AI solutions.",
    aboutCloud:"Cloud Engineering",aboutCloudBody:"Learning how modern infrastructure is designed, deployed, secured, monitored and operated using cloud platforms and automation.",
    aboutDevOpsBody:"Building an understanding of CI/CD, containers, infrastructure automation, observability and the connection between development and operations.",
    aboutCyber:"Cybersecurity",aboutCyberBody:"Studying defensive security, networking, vulnerabilities and ethical hacking in controlled and authorized environments.",
    aboutPythonBody:"Using Python as a core tool for logic, automation, scripting, data handling and future AI and cloud projects.",
    aboutIT:"IT & Systems",aboutITBody:"Developing broader knowledge of operating systems, networking, troubleshooting, infrastructure and how complete IT environments fit together.",
    skillsEyebrow:"SKILLS & CURRENT LEARNING",skillsTitle:"The foundation I am actively building right now.",skillsSubtitle:"Progress bars here are not exam scores. They are simply a visual indication of where I currently spend most of my learning time.",
    statusActive:"Active learning",statusBuilding:"Building",statusLearning:"Learning",statusPath:"Long-term path",statusPlanned:"Planned focus",statusGrowing:"Growing foundation",
    skillPython:"Syntax, conditions, loops, functions, data structures, files, exceptions, modules and progressively larger practical exercises.",
    skillGit:"Repositories, commits, branches, version control habits, GitHub Pages and building a public project history.",
    skillWeb:"Semantic structure, responsive layouts, reusable UI patterns, accessibility basics and performance-conscious styling.",
    skillJS:"DOM logic, events, APIs, data-driven interfaces and the client-side fundamentals needed for modern web applications.",
    skillAI:"AI foundations, generative AI, prompt engineering, model APIs, retrieval, evaluation and eventually production AI systems.",
    skillCloud:"Cloud concepts, identity, networking, compute, storage, security, monitoring, deployment and infrastructure design.",
    skillDevOps:"Linux, Git workflows, Docker, CI/CD, infrastructure as code, monitoring, Kubernetes and cloud-native operations.",
    skillCyber:"Networking, system security, threat awareness, hardening, incident thinking, vulnerability assessment and ethical security testing.",
    skillIT:"Windows and Linux fundamentals, networking, troubleshooting, system administration concepts and end-to-end IT thinking.",
    roadmapEyebrow:"ENGINEERING ROADMAP",roadmapTitle:"What I want to learn next — and where I want it to lead.",
    roadmapSubtitle:"My goal is not to collect random course certificates. I want a structured path where each area strengthens the next one, from core IT and programming to cloud, DevOps, AI and cybersecurity engineering.",
    roadmapNow:"CURRENT PRIORITY",roadmapPlanned:"PLANNED",roadmapLater:"LATER EXPANSION",
    roadPython:"Build strong programming fundamentals first: Python syntax, functions, object-oriented programming, modules, APIs, testing, automation and increasingly complete applications.",
    roadAI:"Move from AI fundamentals into generative AI engineering, model APIs, prompt design, embeddings, retrieval-augmented generation, evaluation, responsible AI and deployment.",
    roadCloud:"Develop the ability to design, deploy and operate cloud environments, with a strong focus on Azure fundamentals, networking, identity, compute, storage, security and monitoring.",
    roadDevOps:"Learn how development and operations work together through Linux, Git, CI/CD, containers, infrastructure as code, observability, Kubernetes and cloud automation.",
    roadCyber:"Build a defensive security foundation around networking, operating systems, identity, endpoint security, logging, incident response, vulnerability management and cloud security.",
    roadHacking:"Study ethical security testing only in authorized lab environments: reconnaissance, web security, common vulnerabilities, exploitation concepts, reporting and remediation.",
    roadIT:"Strengthen the broad systems knowledge behind every specialist role: Windows, Linux, networking, DNS, identity, virtualization, troubleshooting, backups and infrastructure operations.",
    roadNetwork:"Learn the networking layer in depth: TCP/IP, routing, switching, VLANs, DNS, DHCP, VPNs, firewall concepts, troubleshooting and secure network design.",
    roadSoftware:"Go beyond writing code and learn software design, architecture, testing, APIs, databases, maintainability, collaboration and the engineering habits needed for larger systems.",
    roadData:"Add data engineering and machine learning foundations later: SQL, pipelines, data processing, model workflows, feature preparation, deployment and monitoring.",
    coursesEyebrow:"COURSE & CERTIFICATION PLAN",coursesTitle:"How I want to structure the learning process.",
    courseStage1:"STAGE 1 — FOUNDATIONS",courseStage1Title:"Build the base properly",
    course1a:"Python programming fundamentals and practical projects",course1b:"Git, GitHub and version control workflows",course1c:"HTML, CSS and JavaScript foundations",course1d:"Linux, Windows and command-line fundamentals",course1e:"Networking fundamentals: TCP/IP, DNS, DHCP and routing basics",
    courseStage2:"STAGE 2 — ENGINEERING PATHS",courseStage2Title:"Turn fundamentals into specialist skills",
    course2a:"AI / Generative AI Engineering learning path",course2b:"Cloud Engineering and Microsoft Azure learning path",course2c:"DevOps Engineering: CI/CD, containers and infrastructure as code",course2d:"Cybersecurity Engineering and defensive security",course2e:"Ethical Hacking and penetration-testing labs",
    courseStage3:"STAGE 3 — ADVANCED PRACTICE",courseStage3Title:"Prove skills through real work",
    course3a:"Build portfolio projects that combine multiple technologies",course3b:"Create documented cloud and DevOps deployments",course3c:"Complete security labs and write remediation reports",course3d:"Prepare for recognized vendor or professional certifications",course3e:"Keep improving GitHub, portfolio, documentation and technical communication",
    projectsEyebrow:"FEATURED BUILDS",projectsTitle:"Projects that turn learning into something visible.",projectsSubtitle:"These projects are presented honestly as active builds, prototypes or concepts. The goal is to show what I am working toward while the technical implementation continues to evolve.",
    projectStatusDev:"In development",projectStatusPrototype:"Prototype",projectStatusConcept:"Concept",
    project1Body:"A personal AI learning assistant designed around the way I study: organizing lessons, simplifying difficult concepts, generating practical exercises and keeping a structured record of progress across AI, Python, Cloud and cybersecurity.",
    project2Body:"A cloud operations dashboard concept for bringing resources, health checks, alerts, uptime and infrastructure status into one clean interface. The project is intended to grow alongside my Cloud and DevOps studies.",
    project3Body:"A growing collection of Python utilities for automating repetitive tasks, working with files, processing simple data and building practical command-line workflows. The idea is to make every new Python concept useful immediately.",
    project4Body:"A controlled cybersecurity practice environment for documenting networking, hardening, vulnerability-testing and ethical-hacking exercises. The project is intended strictly for authorized labs and defensive learning.",
    project5Body:"A future DevOps project that will connect source control, automated testing, container builds and cloud deployment into a single reproducible workflow once I reach the relevant part of my learning roadmap.",
    project6Body:"A visual infrastructure and network documentation project for mapping devices, services, dependencies and troubleshooting notes — designed to become a practical bridge between networking, systems and cloud knowledge.",
    projectTypeAI:"AI learning platform",projectTypeCloud:"Cloud operations dashboard",projectTypePython:"Python automation toolkit",projectTypeSec:"Cybersecurity learning lab",projectTypeDevOps:"DevOps delivery pipeline",projectTypeNetwork:"Infrastructure documentation tool",
    githubEyebrow:"LIVE GITHUB",githubTitle:"The part of the portfolio that updates itself.",githubSubtitle:"Repository counts and public repository cards below come directly from my public GitHub profile.",
    metricFollowing:"Following",metricAccountAge:"Account age",githubRecent:"RECENT REPOSITORIES",githubAuto:"Updated automatically from GitHub",githubAll:"View all ↗",githubLoading:"Loading repositories…",
    philosophyEyebrow:"HOW I WANT TO GROW",philosophyTitle:"Depth before titles. Practice before claims.",
    quote1:"“A certificate can show that I finished a course. A project should show what I understood.”",quote2:"“I want each new skill to connect to something I already know, not exist as another isolated badge.”",quote3:"“The long-term goal is not to know a little about everything. It is to become capable of understanding complete systems.”",
    contactEyebrow:"CONTACT & SOCIALS",contactTitle:"Follow the journey as it grows.",contactBody:"This portfolio is meant to change over time. New repositories, projects, courses and engineering paths will be added as I progress.",locationLabel:"LOCATION",
    footerRole:"AI • Cloud • DevOps • Cybersecurity • Python • Software Development",footerText:"A living portfolio built around continuous learning, practical work and long-term engineering goals."
  },
  ro:{
    brandRole:"Portofoliu Tehnologie",navAbout:"Despre",navSkills:"Competențe",navRoadmap:"Roadmap",navProjects:"Proiecte",navGitHub:"GitHub",navContact:"Contact",themeLabel:"Temă",
    heroKicker:"PORTOFOLIU PERSONAL DE TEHNOLOGIE",heroHello:"Salut, sunt",heroTitle:"AI Engineering • Cloud • DevOps • Cybersecurity • Python • Dezvoltare Software",
    heroText:"Îmi construiesc o carieră pe termen lung în tehnologie pornind de la un principiu simplu: vreau să înțeleg lucrurile suficient de bine încât să le pot folosi în lumea reală. Învăț pas cu pas, transform teoria în proiecte, îmi documentez progresul și extind treptat ceea ce știu de la programare și cloud către AI, DevOps, cybersecurity și sisteme IT moderne.",
    heroRoadmap:"Vezi roadmap-ul meu",heroProjects:"Vezi proiectele",metricRepos:"Repo-uri publice",metricFollowers:"Urmăritori",metricStars:"Stele totale",
    identityLive:"PROFIL LIVE",identityOnline:"online",identityFocus:"FOCUS ACTUAL",identityFocusValue:"Învățare, proiecte & documentare",identityBase:"LOCAȚIE",identityLoading:"Se încarcă datele GitHub…",
    aboutEyebrow:"DESPRE MINE",aboutTitle:"Nu încerc să învăț totul repede. Încerc să construiesc ceva care să rămână.",
    aboutLead:"Tehnologia a devenit pentru mine mai mult decât un interes, pentru că îmi oferă în fiecare zi ceva concret de îmbunătățit: felul în care gândesc, felul în care rezolv probleme și lucrurile pe care sunt capabil să le construiesc.",
    aboutBody1:"Îmi dezvolt cunoștințele de la fundație în sus. Asta înseamnă să învăț programarea corect, să înțeleg sistemele în loc să memorez comenzi, să creez proiecte care mă obligă să rezolv probleme reale și să avansez treptat către domenii mai mari precum Cloud Engineering, AI Engineering, DevOps și Cybersecurity.",
    aboutBody2:"Nu vreau ca acest portofoliu să arate ca o listă de tehnologii despre care doar am auzit. Vreau să devină o evidență a progresului meu: cursuri terminate, abilități exersate, greșeli corectate, proiecte îmbunătățite și probleme din ce în ce mai dificile pe care ajung să le rezolv.",
    valueLearn:"Învăț în profunzime, nu doar repede",valueBuild:"Transform cunoștințele în practică",valueImprove:"Continui să îmbunătățesc chiar și după ce ceva funcționează",valueDocument:"Îmi documentez progresul clar și sincer",
    aboutAI:"Inteligență Artificială",aboutAIBody:"De la fundamente AI și sisteme generative până la automatizare, utilizarea modelelor și, în timp, soluții AI pregătite pentru producție.",
    aboutCloud:"Cloud Engineering",aboutCloudBody:"Învăț cum este proiectată, implementată, securizată, monitorizată și operată infrastructura modernă folosind platforme cloud și automatizare.",
    aboutDevOpsBody:"Construiesc o înțelegere a CI/CD, containerelor, automatizării infrastructurii, observabilității și legăturii dintre dezvoltare și operațiuni.",
    aboutCyber:"Cybersecurity",aboutCyberBody:"Studiez securitatea defensivă, rețelistica, vulnerabilitățile și ethical hacking doar în medii controlate și autorizate.",
    aboutPythonBody:"Folosesc Python ca instrument central pentru logică, automatizare, scripting, prelucrarea datelor și viitoarele proiecte AI și Cloud.",
    aboutIT:"IT & Sisteme",aboutITBody:"Îmi dezvolt o bază mai largă în sisteme de operare, rețelistică, troubleshooting, infrastructură și modul în care funcționează împreună un mediu IT complet.",
    skillsEyebrow:"COMPETENȚE & ÎNVĂȚARE ACTUALĂ",skillsTitle:"Fundația pe care o construiesc activ acum.",skillsSubtitle:"Barele de progres nu sunt note de examen. Ele arată doar vizual unde investesc în prezent cea mai mare parte din timpul de învățare.",
    statusActive:"Învățare activă",statusBuilding:"În dezvoltare",statusLearning:"Învățare",statusPath:"Traseu pe termen lung",statusPlanned:"Focus planificat",statusGrowing:"Fundație în dezvoltare",
    skillPython:"Sintaxă, condiții, bucle, funcții, structuri de date, fișiere, excepții, module și exerciții practice din ce în ce mai complexe.",
    skillGit:"Repository-uri, commit-uri, branch-uri, obiceiuri de version control, GitHub Pages și construirea unui istoric public de proiecte.",
    skillWeb:"Structură semantică, layout-uri responsive, modele UI reutilizabile, bazele accesibilității și CSS orientat spre performanță.",
    skillJS:"Logică DOM, evenimente, API-uri, interfețe bazate pe date și fundamentele client-side necesare aplicațiilor web moderne.",
    skillAI:"Fundamente AI, generative AI, prompt engineering, API-uri de modele, retrieval, evaluare și ulterior sisteme AI de producție.",
    skillCloud:"Concepte cloud, identitate, networking, compute, storage, securitate, monitorizare, deployment și design de infrastructură.",
    skillDevOps:"Linux, workflow-uri Git, Docker, CI/CD, infrastructure as code, monitorizare, Kubernetes și operațiuni cloud-native.",
    skillCyber:"Networking, securitatea sistemelor, threat awareness, hardening, incident response, vulnerability assessment și testare etică.",
    skillIT:"Fundamente Windows și Linux, rețelistică, troubleshooting, concepte de administrare și gândire IT end-to-end.",
    roadmapEyebrow:"ROADMAP DE ENGINEERING",roadmapTitle:"Ce vreau să învăț în continuare — și unde vreau să ajung.",
    roadmapSubtitle:"Scopul meu nu este să adun certificate la întâmplare. Vreau un traseu structurat în care fiecare domeniu îl întărește pe următorul, de la IT și programare către Cloud, DevOps, AI și Cybersecurity Engineering.",
    roadmapNow:"PRIORITATE ACTUALĂ",roadmapPlanned:"PLANIFICAT",roadmapLater:"EXTINDERE ULTERIOARĂ",
    roadPython:"Mai întâi construiesc o bază solidă în programare: sintaxă Python, funcții, OOP, module, API-uri, testing, automatizare și aplicații din ce în ce mai complete.",
    roadAI:"Trec de la fundamente AI către Generative AI Engineering, API-uri de modele, prompt design, embeddings, RAG, evaluare, responsible AI și deployment.",
    roadCloud:"Vreau să pot proiecta, implementa și opera medii cloud, cu accent pe Azure, networking, identity, compute, storage, securitate și monitorizare.",
    roadDevOps:"Vreau să înțeleg cum lucrează dezvoltarea și operațiunile împreună prin Linux, Git, CI/CD, containere, IaC, observabilitate, Kubernetes și automatizare cloud.",
    roadCyber:"Construiesc o bază defensivă în networking, sisteme de operare, identity, endpoint security, logging, incident response, vulnerability management și cloud security.",
    roadHacking:"Studiez testarea etică doar în laboratoare autorizate: reconnaissance, web security, vulnerabilități comune, concepte de exploatare, raportare și remediere.",
    roadIT:"Consolidez cunoștințele generale care susțin orice rol specializat: Windows, Linux, networking, DNS, identity, virtualizare, troubleshooting, backup și operațiuni de infrastructură.",
    roadNetwork:"Învăț în profunzime stratul de rețea: TCP/IP, routing, switching, VLAN-uri, DNS, DHCP, VPN, concepte firewall, troubleshooting și design de rețea securizat.",
    roadSoftware:"Vreau să trec dincolo de simpla scriere de cod și să învăț design software, arhitectură, testing, API-uri, baze de date, mentenanță, colaborare și obiceiuri de engineering.",
    roadData:"Ulterior adaug fundamente de Data Engineering și Machine Learning: SQL, pipeline-uri, procesare de date, workflow-uri ML, deployment și monitorizare.",
    coursesEyebrow:"PLAN DE CURSURI & CERTIFICĂRI",coursesTitle:"Cum vreau să structurez procesul de învățare.",
    courseStage1:"ETAPA 1 — FUNDAȚIE",courseStage1Title:"Construiesc baza corect",
    course1a:"Fundamente Python și proiecte practice",course1b:"Git, GitHub și workflow-uri de version control",course1c:"Fundamente HTML, CSS și JavaScript",course1d:"Fundamente Linux, Windows și command line",course1e:"Fundamente networking: TCP/IP, DNS, DHCP și bazele routing-ului",
    courseStage2:"ETAPA 2 — TRASEE DE ENGINEERING",courseStage2Title:"Transform fundația în specializări",
    course2a:"Traseu AI / Generative AI Engineering",course2b:"Traseu Cloud Engineering și Microsoft Azure",course2c:"DevOps Engineering: CI/CD, containere și infrastructure as code",course2d:"Cybersecurity Engineering și securitate defensivă",course2e:"Ethical Hacking și laboratoare de penetration testing",
    courseStage3:"ETAPA 3 — PRACTICĂ AVANSATĂ",courseStage3Title:"Demonstrez abilitățile prin muncă reală",
    course3a:"Construiesc proiecte care combină mai multe tehnologii",course3b:"Creez deployment-uri Cloud și DevOps documentate",course3c:"Finalizez laboratoare de securitate și scriu rapoarte de remediere",course3d:"Mă pregătesc pentru certificări profesionale sau de vendor recunoscute",course3e:"Continui să îmbunătățesc GitHub-ul, portofoliul, documentația și comunicarea tehnică",
    projectsEyebrow:"PROIECTE PRINCIPALE",projectsTitle:"Proiecte care transformă învățarea în ceva vizibil.",projectsSubtitle:"Aceste proiecte sunt prezentate sincer ca proiecte active, prototipuri sau concepte. Scopul este să arăt direcția în care lucrez, în timp ce implementarea tehnică continuă să evolueze.",
    projectStatusDev:"În dezvoltare",projectStatusPrototype:"Prototip",projectStatusConcept:"Concept",
    project1Body:"Un asistent AI personal construit în jurul modului în care învăț: organizarea lecțiilor, simplificarea conceptelor dificile, generarea de exerciții practice și păstrarea unui istoric structurat al progresului în AI, Python, Cloud și cybersecurity.",
    project2Body:"Un concept de dashboard pentru operațiuni cloud care aduce resursele, verificările de sănătate, alertele, uptime-ul și starea infrastructurii într-o singură interfață. Proiectul va evolua odată cu studiile mele de Cloud și DevOps.",
    project3Body:"O colecție în creștere de utilitare Python pentru automatizarea sarcinilor repetitive, lucrul cu fișiere, procesarea datelor simple și construirea de workflow-uri în linia de comandă. Ideea este ca fiecare noțiune nouă de Python să devină imediat utilă.",
    project4Body:"Un mediu controlat de practică pentru cybersecurity, destinat documentării exercițiilor de networking, hardening, vulnerability testing și ethical hacking. Proiectul este gândit strict pentru laboratoare autorizate și învățare defensivă.",
    project5Body:"Un viitor proiect DevOps care va conecta source control, testing automat, build-uri de containere și deployment în cloud într-un singur workflow reproductibil, după ce ajung la partea relevantă din roadmap.",
    project6Body:"Un proiect vizual pentru documentarea infrastructurii și rețelelor, cu device-uri, servicii, dependențe și note de troubleshooting — gândit ca o punte practică între networking, sisteme și cloud.",
    projectTypeAI:"Platformă AI pentru învățare",projectTypeCloud:"Dashboard operațiuni cloud",projectTypePython:"Toolkit automatizare Python",projectTypeSec:"Laborator de învățare cybersecurity",projectTypeDevOps:"Pipeline de livrare DevOps",projectTypeNetwork:"Instrument documentare infrastructură",
    githubEyebrow:"GITHUB LIVE",githubTitle:"Partea din portofoliu care se actualizează singură.",githubSubtitle:"Numărul de repository-uri și cardurile de mai jos vin direct din profilul meu public GitHub.",
    metricFollowing:"Urmăresc",metricAccountAge:"Vârsta contului",githubRecent:"REPOSITORY-URI RECENTE",githubAuto:"Actualizate automat din GitHub",githubAll:"Vezi toate ↗",githubLoading:"Se încarcă repository-urile…",
    philosophyEyebrow:"CUM VREAU SĂ CRESC",philosophyTitle:"Profunzime înainte de titluri. Practică înainte de afirmații.",
    quote1:"„Un certificat poate arăta că am terminat un curs. Un proiect ar trebui să arate ce am înțeles.”",quote2:"„Vreau ca fiecare abilitate nouă să se lege de ceva ce știu deja, nu să existe doar ca încă o insignă izolată.”",quote3:"„Scopul pe termen lung nu este să știu câte puțin din toate. Este să devin capabil să înțeleg sisteme complete.”",
    contactEyebrow:"CONTACT & SOCIAL",contactTitle:"Urmărește drumul pe măsură ce crește.",contactBody:"Acest portofoliu este gândit să se schimbe în timp. Voi adăuga repository-uri, proiecte, cursuri și trasee de engineering pe măsură ce avansez.",locationLabel:"LOCAȚIE",
    footerRole:"AI • Cloud • DevOps • Cybersecurity • Python • Dezvoltare Software",footerText:"Un portofoliu viu construit în jurul învățării continue, muncii practice și obiectivelor de engineering pe termen lung."
  }
};

function applyLanguage(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key]!==undefined) el.textContent=translations[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.lang===lang));
  localStorage.setItem("portfolioLang",lang);
}

document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click",()=>applyLanguage(btn.dataset.lang));
});

const themeToggle=document.getElementById("themeToggle");
function setTheme(theme){
  document.documentElement.dataset.theme=theme;
  localStorage.setItem("portfolioTheme",theme);
}
themeToggle.addEventListener("click",()=>{
  setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark");
});

function esc(v){
  return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function ageText(dateString){
  const days=Math.max(0,Math.floor((Date.now()-new Date(dateString).getTime())/86400000));
  if(days<30)return days+" d";
  if(days<365)return Math.floor(days/30)+" mo";
  const y=Math.floor(days/365);
  return y+(y===1?" yr":" yrs");
}
async function json(url){
  const r=await fetch(url,{headers:{Accept:"application/vnd.github+json"}});
  if(!r.ok)throw new Error("GitHub API unavailable");
  return r.json();
}
async function loadGithub(){
  try{
    const [user,repos]=await Promise.all([
      json(`${API}/users/${USER}`),
      json(`${API}/users/${USER}/repos?per_page=30&sort=updated`)
    ]);

    const stars=repos.reduce((n,r)=>n+(r.stargazers_count||0),0);
    $("githubAvatar").src=user.avatar_url;
    $("githubName").textContent=user.name||"Mihai Teleuca";
    $("githubLogin").textContent="@"+user.login;
    $("dataStatus").textContent=document.documentElement.lang==="ro"?"Date GitHub încărcate":"GitHub data loaded";

    $("heroRepos").textContent=user.public_repos;
    $("heroFollowers").textContent=user.followers;
    $("heroStars").textContent=stars;
    $("repoCount").textContent=user.public_repos;
    $("followersCount").textContent=user.followers;
    $("followingCount").textContent=user.following;
    $("accountAge").textContent=ageText(user.created_at);

    const visible=repos.filter(r=>!r.fork).slice(0,6);
    $("projectsGrid").innerHTML=visible.length?visible.map(r=>`
      <a class="repo-card" href="${r.html_url}" target="_blank" rel="noopener noreferrer">
        <div class="repo-card-top"><strong>${esc(r.name)}</strong><span>↗</span></div>
        <p>${esc(r.description||"Public GitHub repository")}</p>
        <div class="repo-meta"><span>${esc(r.language||"Repository")}</span><span>★ ${r.stargazers_count}</span><span>⑂ ${r.forks_count}</span></div>
      </a>`).join("")
      :`<div class="repo-placeholder">${document.documentElement.lang==="ro"?"Primele repository-uri publice vor apărea aici automat.":"Your first public repositories will appear here automatically."}</div>`;
  }catch(e){
    console.error(e);
    $("dataStatus").textContent=document.documentElement.lang==="ro"?"Date GitHub indisponibile temporar":"GitHub data temporarily unavailable";
    $("projectsGrid").innerHTML=`<div class="repo-placeholder">${document.documentElement.lang==="ro"?"Repository-urile nu pot fi încărcate momentan.":"Repositories cannot be loaded right now."}</div>`;
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  $("year").textContent="© "+new Date().getFullYear();
  setTheme(localStorage.getItem("portfolioTheme")||"dark");
  applyLanguage(localStorage.getItem("portfolioLang")||"en");
  loadGithub();
});
