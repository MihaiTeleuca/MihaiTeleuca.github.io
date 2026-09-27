const GITHUB_USER="MihaiTeleuca";
const API="https://api.github.com";
const $=id=>document.getElementById(id);

function formatNumber(value){
  return new Intl.NumberFormat("en",{notation:value>=1000?"compact":"standard"}).format(value||0);
}
function ageText(dateString){
  const start=new Date(dateString),now=new Date();
  const days=Math.max(0,Math.floor((now-start)/86400000));
  if(days<30)return days+" days";
  if(days<365)return Math.floor(days/30)+" months";
  const years=Math.floor(days/365);
  return years+(years===1?" year":" years");
}
function timeAgo(dateString){
  const seconds=Math.floor((Date.now()-new Date(dateString).getTime())/1000);
  const units=[["year",31536000],["month",2592000],["day",86400],["hour",3600],["minute",60]];
  for(const [name,value] of units){
    const amount=Math.floor(seconds/value);
    if(amount>=1)return amount+" "+name+(amount>1?"s":"")+" ago";
  }
  return"just now";
}
function escapeHtml(value){
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
async function getJson(url){
  const response=await fetch(url,{headers:{Accept:"application/vnd.github+json"}});
  if(!response.ok)throw new Error("GitHub API request failed");
  return response.json();
}
function eventLabel(event){
  const repo=event.repo?.name||"GitHub";
  const labels={
    PushEvent:["⇧","Pushed code",repo],
    CreateEvent:["＋","Created something",repo],
    WatchEvent:["★","Starred a repository",repo],
    ForkEvent:["⑂","Forked a repository",repo],
    IssuesEvent:["!","Worked on an issue",repo],
    PullRequestEvent:["↗","Updated a pull request",repo],
    IssueCommentEvent:["✦","Commented on GitHub",repo],
    DeleteEvent:["−","Updated repository structure",repo],
    ReleaseEvent:["◆","Published a release",repo]
  };
  return labels[event.type]||["•",(event.type||"Activity").replace("Event",""),repo];
}
async function loadGitHubData(){
  try{
    const [user,repos,events]=await Promise.all([
      getJson(`${API}/users/${GITHUB_USER}`),
      getJson(`${API}/users/${GITHUB_USER}/repos?per_page=100&sort=updated`),
      getJson(`${API}/users/${GITHUB_USER}/events/public?per_page=10`)
    ]);
    const totalStars=repos.reduce((sum,repo)=>sum+(repo.stargazers_count||0),0);

    $("githubAvatar").src=user.avatar_url;
    $("githubName").textContent=user.name||"Mihai Teleuca";
    $("githubLogin").textContent="@"+user.login;
    $("heroRepos").textContent=formatNumber(user.public_repos);
    $("heroFollowers").textContent=formatNumber(user.followers);
    $("heroStars").textContent=formatNumber(totalStars);
    $("repoCount").textContent=formatNumber(user.public_repos);
    $("followersCount").textContent=formatNumber(user.followers);
    $("followingCount").textContent=formatNumber(user.following);
    $("accountAge").textContent=ageText(user.created_at);
    $("dataStatus").textContent="Live data connected";

    renderProjects(repos);
    renderActivity(events);
  }catch(err){
    console.error(err);
    $("dataStatus").textContent="GitHub data temporarily unavailable";
    $("projectsGrid").innerHTML='<div class="empty-projects card"><h3>Projects are coming.</h3><p>Live repository data is temporarily unavailable.</p></div>';
    $("activityFeed").innerHTML='<div class="activity-loading">Live GitHub data could not be loaded right now.</div>';
  }
}
function renderProjects(repos){
  const visible=repos.filter(r=>!r.fork).sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at)).slice(0,6);
  if(!visible.length){
    $("projectsGrid").innerHTML='<div class="empty-projects card reveal visible"><h3>First projects coming soon.</h3><p>This section will populate automatically as new public repositories are created.</p></div>';
    return;
  }
  $("projectsGrid").innerHTML=visible.map(repo=>`
    <a class="project-card card reveal visible" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
      <div class="project-top"><span class="repo-icon">&lt;/&gt;</span><span class="repo-arrow">↗</span></div>
      <h3>${escapeHtml(repo.name)}</h3>
      <p>${escapeHtml(repo.description||"A public GitHub project by Mihai Teleuca.")}</p>
      <div class="repo-meta">
        <span><i class="lang-dot"></i>${escapeHtml(repo.language||"Repository")}</span>
        <span>★ ${repo.stargazers_count}</span>
        <span>⑂ ${repo.forks_count}</span>
      </div>
    </a>`).join("");
}
function renderActivity(events){
  if(!events.length){
    $("activityFeed").innerHTML='<div class="activity-loading">No recent public GitHub events yet.</div>';
    return;
  }
  $("activityFeed").innerHTML=events.slice(0,6).map(event=>{
    const [icon,title,subtitle]=eventLabel(event);
    return `<div class="activity-item"><span class="activity-icon">${icon}</span><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(subtitle)} · ${timeAgo(event.created_at)}</p></div></div>`;
  }).join("");
}

/* Lightweight type effect: only one short timeout chain, no RAF loop */
const words=["Artificial Intelligence.","Cloud Computing.","Python.","Software Development.","modern IT."];
let wi=0,ci=0,deleting=false,typingTimer=null;
function typeLoop(){
  const target=$("typedText");
  if(!target||document.hidden)return;
  const word=words[wi];
  target.textContent=word.slice(0,ci);

  if(!deleting&&ci<word.length){ci++;typingTimer=setTimeout(typeLoop,62);return}
  if(!deleting&&ci===word.length){deleting=true;typingTimer=setTimeout(typeLoop,1300);return}
  if(deleting&&ci>0){ci--;typingTimer=setTimeout(typeLoop,30);return}

  deleting=false;
  wi=(wi+1)%words.length;
  typingTimer=setTimeout(typeLoop,220);
}
document.addEventListener("visibilitychange",()=>{
  if(document.hidden){
    clearTimeout(typingTimer);
  }else{
    clearTimeout(typingTimer);
    typingTimer=setTimeout(typeLoop,120);
  }
});

/* One-shot reveal only */
function setupReveal(){
  if(!("IntersectionObserver"in window)){
    document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
    return;
  }
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.08,rootMargin:"40px 0px"});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}

/* Custom progress bar: transform only, passive scroll, no layout thrashing */
function setupScrollProgress(){
  const bar=$("scrollProgress");
  let ticking=false;
  const update=()=>{
    const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    const p=Math.min(1,Math.max(0,window.scrollY/max));
    bar.style.transform=`scaleX(${p})`;
    ticking=false;
  };
  window.addEventListener("scroll",()=>{
    if(!ticking){
      requestAnimationFrame(update);
      ticking=true;
    }
  },{passive:true});
  update();
}

document.addEventListener("DOMContentLoaded",()=>{
  $("year").textContent="© "+new Date().getFullYear();
  setupReveal();
  setupScrollProgress();
  loadGitHubData();
  typeLoop();
});
