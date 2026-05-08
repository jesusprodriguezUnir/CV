import { CV } from "../data/cvData.js";

const STATE = {
  lang: localStorage.getItem("cv-lang") || "es",
  theme: localStorage.getItem("cv-theme-v2") || "dark",
  filter: "all",
};

export function initCV() {
  function render() {
    const L = STATE.lang;
    document.documentElement.lang = L;
    document.documentElement.setAttribute("data-theme", STATE.theme);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n.split(".")[1];
      if (CV.ui.titles[L][key]) el.textContent = CV.ui.titles[L][key];
    });

    document.querySelector('[data-cv="role"]').textContent = CV.role[L];
    document.querySelector('[data-cv="summary"]').textContent = CV.summary[L];

    const pDesc = {
      es: "Desarrollo de repositorios de referencia implementando buenas prácticas de ingeniería de software, arquitectura limpia y patrones modernos.",
      en: "Development of reference repositories implementing software engineering best practices, clean architecture, and modern patterns.",
    };
    const gCta = {
      es: "Ver Portfolio en GitHub",
      en: "View Portfolio on GitHub",
    };
    document.querySelector('[data-cv="projects_desc"]').textContent = pDesc[L];
    document.querySelector('[data-cv="github_cta"]').textContent = gCta[L];

    document.getElementById("stats").innerHTML = CV.stats
      .map(
        (s) =>
          `<div class="stat"><div class="v">${s.value}</div><div class="k">${s.label[L]}</div></div>`,
      )
      .join("");

    document.getElementById("timeline").innerHTML = CV.experience
      .map(
        (j) =>
          `<article class="job">
            <div class="job-bar">
              <span><span class="name">${j.company.toLowerCase().split(/[\s—]/)[0]}.md</span></span>
              <span>${j.period[L]} · ${j.location}</span>
            </div>
            <div class="job-body">
              <h3>${j.role[L]}</h3>
              <div class="co">@ ${j.company}</div>
              <ul>${j.bullets[L].map((b) => `<li>${b}</li>`).join("")}</ul>
              <div class="tags">${j.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
            </div>
          </article>`,
      )
      .join("");

    const fr = document.getElementById("filter-row");
    fr.innerHTML =
      `<button class="chip ${STATE.filter === "all" ? "active" : ""}" data-f="all">${CV.ui.cta[L].filterAll}</button>` +
      CV.skills
        .map(
          (s) =>
            `<button class="chip ${STATE.filter === s.category[L] ? "active" : ""}" data-f="${s.category[L]}">${s.category[L]}</button>`,
        )
        .join("");

    document.getElementById("skill-grid").innerHTML = CV.skills
      .map(
        (s) =>
          `<div class="skill-card" data-cat="${s.category[L]}">
            <div class="cat">${s.category[L]}</div>
            <div class="items">${s.items.map((i) => `<span>${i}</span>`).join("")}</div>
          </div>`,
      )
      .join("");
    applyFilter();
    document.getElementById("skill-count").textContent = `// ${CV.skills.length} ${L === "es" ? "categorías" : "categories"}`;

    document.getElementById("projects-grid").innerHTML = CV.projects
      .map(
        (p) =>
          `<article class="project"${p.link ? ` onclick="window.open('${p.link}','_blank')" style="cursor:pointer"` : ""}>
            <div class="head"><span class="kind">[${p.kind}]</span><span class="arrow">→</span></div>
            <h4>${p.title[L]}</h4>
            <p>${p.blurb[L]}</p>
            <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          </article>`,
      )
      .join("");

    document.getElementById("info-grid").innerHTML = `
          <div class="info-card">
            <h4>${CV.ui.titles[L].education}</h4>
            ${CV.education
              .map(
                (e) => `
              <div class="item"><span><strong>${e.title[L]}</strong></span></div>
              <div class="cert" style="border:0;padding-top:0;">${e.institution} · ${e.period}</div>
            `,
              )
              .join("")}
          </div>
          <div class="info-card">
            <h4>${CV.ui.titles[L].langs}</h4>
            ${CV.languages
              .map(
                (l) => `
              <div class="item">
                <span>${l.lang[L]}</span>
                <span class="lvl">${l.level[L]} <span class="lang-dots">${[...Array(5)].map((_, i) => `<b class="${i < l.dots ? "" : "off"}"></b>`).join("")}</span></span>
              </div>
            `,
              )
              .join("")}
          </div>
          <div class="info-card">
            <h4>${CV.ui.titles[L].certs}</h4>
            ${CV.certifications.map((c) => `<div class="cert">${c.name}</div>`).join("")}
          </div>
        `;

    document.getElementById("contact-list").innerHTML = `
          <a class="contact-row" href="mailto:${CV.meta.email}"><span class="key">$EMAIL</span><span class="val">${CV.meta.email}</span></a>
          <a class="contact-row" href="tel:${CV.meta.phone.replace(/\s/g, "")}"><span class="key">$PHONE</span><span class="val">${CV.meta.phone}</span></a>
          <a class="contact-row" href="${CV.meta.linkedin}" target="_blank"><span class="key">$LINKEDIN</span><span class="val">/in/jesús-pedro-rodríguez-castro</span></a>
          <a class="contact-row" href="${CV.meta.github}" target="_blank"><span class="key">$GITHUB</span><span class="val">@jesusprodriguezUnir</span></a>
          <span class="contact-row"><span class="key">$LOCATION</span><span class="val">${CV.meta.location[L]}</span></span>
          <span class="contact-row"><span class="key">$STATUS</span><span class="val" style="color:var(--accent)">${L === "es" ? "abierto a oportunidades" : "open to opportunities"}</span></span>
        `;

    document.getElementById("lang-toggle").textContent = CV.ui.cta[L].lang;
  }

  function applyFilter() {
    document.querySelectorAll(".skill-card").forEach((c) => {
      c.classList.toggle(
        "is-hidden",
        STATE.filter !== "all" && c.dataset.cat !== STATE.filter,
      );
    });
  }

  document.addEventListener("click", (e) => {
    const f = e.target.closest("[data-f]");
    if (f) {
      STATE.filter = f.dataset.f;
      document
        .querySelectorAll(".chip")
        .forEach((c) =>
          c.classList.toggle("active", c.dataset.f === STATE.filter),
        );
      applyFilter();
    }
  });

  document.getElementById("lang-toggle").addEventListener("click", () => {
    STATE.lang = STATE.lang === "es" ? "en" : "es";
    localStorage.setItem("cv-lang", STATE.lang);
    STATE.filter = "all";
    render();
  });

  document.getElementById("theme-toggle").addEventListener("click", () => {
    STATE.theme = STATE.theme === "dark" ? "light" : "dark";
    localStorage.setItem("cv-theme-v2", STATE.theme);
    document.documentElement.setAttribute("data-theme", STATE.theme);
  });

  document
    .getElementById("print-btn")
    .addEventListener("click", () => window.print());

  render();
}
