const USER="MihaiTeleuca";
const API="https://api.github.com";
const $=id=>document.getElementById(id);

function esc(v){
  return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function ageText(dateString){
  const days=Math.max(0,Math.floor((Date.now()-new Date(dateString).getTime())/86400000));
  if(days<30)return days+" days";
  if(days<365)return Math.floor(days/30)+" months";
  const y=Math.floor(days/365);
  return y+(y===1?" year":" years");
}
async function json(url){
  const r=await fetch(url,{headers:{Accept:"application/vnd.github+json"}});
  if(!r.ok)throw new Error("GitHub API unavailable");
  return r.json();
}
async function load(){
  try{
    const [user,repos]=await Promise.all([
      json(`${API}/users/${USER}`),
      json(`${API}/users/${USER}/repos?per_page=30&sort=updated`)
    ]);
    const stars=repos.reduce((n,r)=>n+(r.stargazers_count||0),0);

    $("githubAvatar").src=user.avatar_url;
    $("githubName").textContent=user.name||"Mihai Teleuca";
    $("githubLogin").textContent="@"+user.login;
    $("dataStatus").textContent="Live GitHub data loaded";

    $("heroRepos").textContent=user.public_repos;
    $("heroFollowers").textContent=user.followers;
    $("heroStars").textContent=stars;
    $("repoCount").textContent=user.public_repos;
    $("followersCount").textContent=user.followers;
    $("followingCount").textContent=user.following;
    $("accountAge").textContent=ageText(user.created_at);

    const visible=repos.filter(r=>!r.fork).slice(0,6);
    $("projectsGrid").innerHTML=visible.length
      ? visible.map(r=>`
        <a class="project-card" href="${r.html_url}" target="_blank" rel="noopener noreferrer">
          <div class="project-top"><span class="repo-icon">&lt;/&gt;</span><span>↗</span></div>
          <h3>${esc(r.name)}</h3>
          <p>${esc(r.description||"A public GitHub project by Mihai Teleuca.")}</p>
          <div class="repo-meta">
            <span>${esc(r.language||"Repository")}</span>
            <span>★ ${r.stargazers_count}</span>
            <span>⑂ ${r.forks_count}</span>
          </div>
        </a>`).join("")
      : '<div class="panel empty">First public projects will appear here automatically.</div>';
  }catch(e){
    console.error(e);
    $("dataStatus").textContent="GitHub data temporarily unavailable";
    $("projectsGrid").innerHTML='<div class="panel empty">Live repository data is temporarily unavailable.</div>';
  }
}
document.addEventListener("DOMContentLoaded",()=>{
  $("year").textContent="© "+new Date().getFullYear();
  load();
});
