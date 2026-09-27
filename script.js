const USER="MihaiTeleuca";
const API="https://api.github.com";
const $=id=>document.getElementById(id);

const translations={
  en:{
    brandRole:"Tech Portfolio",navAbout:"About",navSkills:"Skills",navProjects:"Projects",navGitHub:"GitHub",navContact:"Contact",themeLabel:"Theme",
    heroKicker:"PERSONAL TECHNOLOGY PORTFOLIO",heroHello:"Hi, I'm",heroTitle:"AI • Cloud • Python • Software Development",
    heroText:"I am building my path in technology through practical projects, continuous learning and a strong focus on modern software, artificial intelligence and cloud systems.",
    heroProjects:"Explore projects",heroContact:"Contact & socials",metricRepos:"Public repos",metricFollowers:"Followers",metricStars:"Total stars",
    identityLive:"LIVE PROFILE",identityOnline:"online",identityFocus:"FOCUS",identityFocusValue:"Learning & building",identityBase:"BASE",identityBaseValue:"Germany",identityLoading:"Loading GitHub data…",
    aboutEyebrow:"ABOUT ME",aboutTitle:"Curious by nature. Technical by choice.",aboutLead:"I am focused on creating a strong foundation in IT while turning what I learn into real, visible projects.",
    aboutBody:"My current interests include Artificial Intelligence, Cloud Computing, Python, web technologies and software development. I prefer learning through practice, experimenting, building and improving step by step.",
    valueLearn:"Learn deeply",valueBuild:"Build practically",valueImprove:"Improve constantly",
    aboutAI:"Artificial Intelligence",aboutAIBody:"Understanding modern AI concepts, tools and practical use cases.",aboutCloud:"Cloud Computing",aboutCloudBody:"Exploring cloud services, infrastructure and scalable systems.",
    aboutPython:"Python",aboutPythonBody:"Building programming fundamentals through hands-on exercises.",aboutSoftware:"Software Development",aboutSoftwareBody:"Turning ideas into structured, maintainable digital products.",
    skillsEyebrow:"SKILLS & LEARNING",skillsTitle:"The stack I am actively building.",statusLearning:"Learning",statusActive:"Active",statusBuilding:"Building",statusLearningPath:"Learning path",
    skillPython:"Programming fundamentals, loops, conditions, functions and practical problem solving.",skillGit:"Repositories, commits, version control and publishing web projects.",skillWeb:"Responsive layouts, modern UI structure and visual presentation.",
    skillJS:"Client-side interaction, DOM logic and data-driven interfaces.",skillAI:"AI foundations, generative AI, prompt engineering and AI tooling.",skillCloud:"Cloud concepts, Azure fundamentals and modern infrastructure.",
    projectsEyebrow:"FEATURED BUILDS",projectsTitle:"Projects I am developing and shaping.",projectsSubtitle:"These are presented as active builds and prototypes — polished enough to show the direction, without pretending unfinished work is already complete.",
    projectStatusDev:"In development",projectStatusPrototype:"Prototype",projectStatusConcept:"Concept",
    project1Body:"A personal AI learning assistant concept designed to organize lessons, explain difficult topics and track progress across AI, Python and Cloud.",
    project2Body:"A clean cloud monitoring dashboard concept for visualizing resources, uptime, alerts and infrastructure health in one place.",
    project3Body:"A collection of Python utilities for automating repetitive tasks, working with files and building practical command-line workflows.",
    project4Body:"A privacy-aware portfolio analytics idea for tracking visits, popular pages and project interest without pretending to identify individual visitors.",
    projectTypeAI:"AI learning platform",projectTypeCloud:"Cloud operations dashboard",projectTypePython:"Python automation toolkit",projectTypeAnalytics:"Portfolio analytics concept",
    githubEyebrow:"LIVE GITHUB",githubTitle:"Real data from my public GitHub profile.",metricFollowing:"Following",metricAccountAge:"Account age",githubRecent:"RECENT REPOSITORIES",githubAuto:"Updated automatically",githubAll:"View all ↗",githubLoading:"Loading repositories…",
    journeyEyebrow:"LEARNING JOURNEY",journeyTitle:"What I am working on next.",journey1:"Python foundations",journey1Body:"Strengthening syntax, logic, functions, data structures and small projects.",
    journey2:"AI engineering path",journey2Body:"Building a structured understanding of AI, generative AI and practical tools.",journey3:"Cloud & Azure",journey3Body:"Learning cloud architecture, services, deployment and operational thinking.",
    journey4:"Web & software projects",journey4Body:"Turning knowledge into portfolio projects that can be shown and improved over time.",
    contactEyebrow:"CONTACT & SOCIALS",contactTitle:"Let's connect.",contactBody:"Follow my learning journey, projects and progress across my public profiles.",
    footerRole:"AI • Cloud • Python • Software Development",footerText:"Built as a living portfolio that grows with every new skill and project."
  },
  ro:{
    brandRole:"Portofoliu Tech",navAbout:"Despre",navSkills:"Competențe",navProjects:"Proiecte",navGitHub:"GitHub",navContact:"Contact",themeLabel:"Temă",
    heroKicker:"PORTOFOLIU PERSONAL DE TEHNOLOGIE",heroHello:"Salut, sunt",heroTitle:"AI • Cloud • Python • Dezvoltare Software",
    heroText:"Îmi construiesc drumul în tehnologie prin proiecte practice, învățare continuă și un interes puternic pentru software modern, inteligență artificială și sisteme cloud.",
    heroProjects:"Vezi proiectele",heroContact:"Contact & social",metricRepos:"Repo-uri publice",metricFollowers:"Urmăritori",metricStars:"Stele totale",
    identityLive:"PROFIL LIVE",identityOnline:"online",identityFocus:"FOCUS",identityFocusValue:"Învățare & proiecte",identityBase:"BAZĂ",identityBaseValue:"Germania",identityLoading:"Se încarcă datele GitHub…",
    aboutEyebrow:"DESPRE MINE",aboutTitle:"Curios din fire. Tehnic prin alegere.",aboutLead:"Mă concentrez pe construirea unei baze solide în IT și pe transformarea lucrurilor învățate în proiecte reale și vizibile.",
    aboutBody:"Interesele mele actuale includ Inteligența Artificială, Cloud Computing, Python, tehnologii web și dezvoltare software. Prefer să învăț prin practică, experimentare, construcție și îmbunătățire pas cu pas.",
    valueLearn:"Învăț în profunzime",valueBuild:"Construiesc practic",valueImprove:"Mă îmbunătățesc constant",
    aboutAI:"Inteligență Artificială",aboutAIBody:"Înțelegerea conceptelor moderne AI, a instrumentelor și a utilizărilor practice.",aboutCloud:"Cloud Computing",aboutCloudBody:"Explorarea serviciilor cloud, infrastructurii și sistemelor scalabile.",
    aboutPython:"Python",aboutPythonBody:"Construirea bazelor de programare prin exerciții practice.",aboutSoftware:"Dezvoltare Software",aboutSoftwareBody:"Transformarea ideilor în produse digitale structurate și ușor de întreținut.",
    skillsEyebrow:"COMPETENȚE & ÎNVĂȚARE",skillsTitle:"Tehnologiile pe care le dezvolt activ.",statusLearning:"Învățare",statusActive:"Activ",statusBuilding:"În dezvoltare",statusLearningPath:"Traseu de învățare",
    skillPython:"Bazele programării, bucle, condiții, funcții și rezolvarea practică a problemelor.",skillGit:"Repository-uri, commit-uri, version control și publicarea proiectelor web.",skillWeb:"Layout-uri responsive, structură UI modernă și prezentare vizuală.",
    skillJS:"Interacțiune în browser, DOM și interfețe bazate pe date.",skillAI:"Fundamente AI, generative AI, prompt engineering și instrumente AI.",skillCloud:"Concepte cloud, bazele Azure și infrastructură modernă.",
    projectsEyebrow:"PROIECTE PRINCIPALE",projectsTitle:"Proiecte pe care le dezvolt și le conturez.",projectsSubtitle:"Sunt prezentate ca proiecte active și prototipuri — suficient de bine prezentate pentru a arăta direcția, fără a pretinde că munca neterminată este deja finalizată.",
    projectStatusDev:"În dezvoltare",projectStatusPrototype:"Prototip",projectStatusConcept:"Concept",
    project1Body:"Un concept de asistent AI personal pentru învățare, gândit să organizeze lecții, să explice subiecte dificile și să urmărească progresul în AI, Python și Cloud.",
    project2Body:"Un concept de dashboard cloud pentru vizualizarea resurselor, uptime-ului, alertelor și stării infrastructurii într-un singur loc.",
    project3Body:"O colecție de utilitare Python pentru automatizarea sarcinilor repetitive, lucrul cu fișiere și fluxuri practice în linia de comandă.",
    project4Body:"O idee de analytics pentru portofoliu, orientată spre confidențialitate, pentru a urmări vizite, pagini populare și interesul pentru proiecte fără a pretinde identificarea vizitatorilor.",
    projectTypeAI:"Platformă AI pentru învățare",projectTypeCloud:"Dashboard operațiuni cloud",projectTypePython:"Toolkit de automatizare Python",projectTypeAnalytics:"Concept analytics portofoliu",
    githubEyebrow:"GITHUB LIVE",githubTitle:"Date reale din profilul meu public GitHub.",metricFollowing:"Urmăresc",metricAccountAge:"Vârsta contului",githubRecent:"REPOSITORY-URI RECENTE",githubAuto:"Actualizate automat",githubAll:"Vezi toate ↗",githubLoading:"Se încarcă repository-urile…",
    journeyEyebrow:"TRASEU DE ÎNVĂȚARE",journeyTitle:"La ce lucrez în continuare.",journey1:"Fundamente Python",journey1Body:"Consolidez sintaxa, logica, funcțiile, structurile de date și proiectele mici.",
    journey2:"Traseu AI Engineering",journey2Body:"Construiesc o înțelegere structurată a AI, generative AI și a instrumentelor practice.",journey3:"Cloud & Azure",journey3Body:"Învăț arhitectură cloud, servicii, deployment și gândire operațională.",
    journey4:"Proiecte web & software",journey4Body:"Transform cunoștințele în proiecte de portofoliu care pot fi prezentate și îmbunătățite în timp.",
    contactEyebrow:"CONTACT & SOCIAL",contactTitle:"Hai să ne conectăm.",contactBody:"Urmărește traseul meu de învățare, proiectele și progresul pe profilurile mele publice.",
    footerRole:"AI • Cloud • Python • Dezvoltare Software",footerText:"Construit ca un portofoliu viu care crește cu fiecare abilitate și proiect nou."
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

    const visible=repos.filter(r=>!r.fork).slice(0,5);
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
