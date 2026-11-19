// ===== EDIT YOUR INFO HERE =====
const SITE = {
  name: "Stella Ma",
  tagline: "Undergraduate in Statistics and Biometry at Cornell University",
  avatar: "assets/profile.jpg",           // replace with your photo
  links: [
    ["Ithaca, NY"],
    ["Cornell University"],
    ["Email", "mailto:zm293@cornell.edu"],
    ["GitHub", "https://github.com/stellama2006"],
    ["LinkedIn", "https://www.linkedin.com/in/stellama06"]
  ],
  nav: [["Home","index.html"],["CV","cv.html"],["Publications","publications.html"],["Teaching","teaching.html"]]
};
// ===============================
(function(){
  const cur = location.pathname.split("/").pop() || "index.html";
  const nav = SITE.nav.map(([t,h])=>`<a class="${h===cur?'active':''}" href="${h}">${t}</a>`).join("");
  document.getElementById("masthead").innerHTML = `<nav class="pill">${nav}<button id="theme" title="Toggle theme" aria-label="Toggle theme">◐</button></nav>`;
  const hero = document.getElementById("hero");
  if(hero){
    const chips = SITE.links.map(([t,h])=>h?`<a class="chip" href="${h}">${t}</a>`:`<span class="chip">${t}</span>`).join("");
    hero.innerHTML = `<img class="avatar" src="${SITE.avatar}" alt="${SITE.name}"><h1>${SITE.name}</h1><p class="tagline">${SITE.tagline}</p><div class="chips">${chips}</div>`;
  }
  const f = document.getElementById("footer"); if(f) f.textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
  const root = document.documentElement;
  let saved = null; try{saved = localStorage.getItem("theme")}catch(e){}
  const set = t => {root.dataset.theme = t; try{localStorage.setItem("theme",t)}catch(e){}};
  set(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  document.getElementById("theme").onclick = () => set(root.dataset.theme === "dark" ? "light" : "dark");
})();
