export const CV = {
  meta: {
    name: "Jesús Pedro Rodríguez Castro",
    initials: "JR",
    email: "jesusprodriguez@gmail.com",
    phone: "+34 670 40 24 50",
    location: { es: "Madrid, España", en: "Madrid, Spain" },
    linkedin: "https://www.linkedin.com/in/jesús-pedro-rodríguez-castro-b746394a/",
    github: "https://github.com/jesusprodriguezUnir",
    yearsExp: 15,
  },
  role: {
    es: "Tech Lead · GenAI Specialist · Clean Architecture",
    en: "Tech Lead · GenAI Specialist · Clean Architecture",
  },
  tagline: {
    es: "Construyo plataformas serias con equipos sanos.",
    en: "I build serious platforms with healthy teams.",
  },
  summary: {
    es: "Líder Técnico Senior con más de 15 años diseñando arquitecturas escalables y guiando equipos de alto rendimiento. En la actualidad, potenciando la productividad a través de herramientas de IA (Claude, GitHub Copilot) y ampliando el stack hacia Frontend (React, Astro) y Backend con Python.",
    en: "Senior Tech Lead with 15+ years designing scalable architectures and guiding high-performance teams. Currently boosting productivity through AI tools (Claude, GitHub Copilot) and expanding the stack towards Frontend (React, Astro) and Backend with Python.",
  },
  stats: [
    { value: "15+", label: { es: "años de experiencia", en: "years of experience" } },
    { value: "80%", label: { es: "cobertura de tests sostenida", en: "sustained test coverage" } },
    { value: "2", label: { es: "equipos Scrum facilitados", en: "Scrum teams facilitated" } },
    { value: "1", label: { es: "ERP académico en producción", en: "academic ERP in production" } },
  ],
  experience: [
    {
      company: "UNIR",
      role: { es: "Tech Lead & AI Implementation Specialist", en: "Tech Lead & AI Implementation Specialist" },
      period: { es: "2020 — Actualidad", en: "2020 — Present" },
      location: "Madrid / Remote",
      bullets: {
        es: [
          "Desarrollo de aplicaciones académicas utilizando .NET (C#) y Python bajo arquitectura DDD.",
          "Implementación de microservicios y entornos utilizando Docker para asegurar la consistencia entre desarrollo y producción.",
          "Liderazgo de equipos Scrum: facilitación, mentoring y entrega continua de valor.",
          "Optimización de pipelines CI/CD con TeamCity y Azure DevOps; despliegues con confianza.",
          "Calidad de Código (QA): Garantía de calidad mediante Pruebas Unitarias y análisis estático de código con SonarQube",
          "Gestión de control de cambios estricto a través de Pull Requests y flujo GitFlow.",
          "Liderazgo técnico en la implementación de soluciones basadas en IA Generativa utilizando LLMs (Claude, Github Copilot, Opencode ",
          "Optimización del ciclo de vida de desarrollo mediante el uso avanzado de GitHub Copilot (experiencia de +3 años).",
          "Liderazgo: Implementación de mejores prácticas, capacitación técnica a desarrolladores y resolución ágil de incidencias críticas (hotfixes).",
          "Mantenimiento de cobertura de pruebas del 80% y de un código que se entiende solo.",
          "Automatización de flujos de trabajo e integraciones de sistemas mediante n8n.",
        ],
        en: [
          "Development & Integration: Development of academic applications using .NET (C#) and Python under DDD architecture.",
          "Microservices and environment implementation using Docker to ensure consistency.",
          "Led Scrum teams: facilitation, mentoring, and continuous delivery of value.",
          "Optimized CI/CD pipelines with TeamCity and Azure DevOps; confident deployments.",
          "Code Quality (QA): Quality assurance through Unit Tests and static code analysis with SonarQube.",
          "Strict change control management via Pull Requests and GitFlow.",
          "Technical leadership in GenAI solutions implementation using LLMs (Claude, Github Copilot, Opencode).",
          "Optimizing SDLC through advanced use of GitHub Copilot (+3 years experience).",
          "Leadership: Best practices implementation, technical training for developers, and agile resolution of critical incidents (hotfixes).",
          "Sustained 80% test coverage and code that explains itself.",
          "Automation of workflows and system integrations using n8n.",
        ],
      },
      tags: ["n8n", "GenAI", "LLMs", "Claude", "GitHub Copilot", "Open Code", "Angular 18", ".NET 8", "Python", "Docker", "TeamCity", "Azure DevOps", "SonarQube", "DDD", "Mediator Pattern"],
    },
    {
      role: { es: "Analista .NET / Funcional", en: ".NET / Functional Analyst" },
      company: "SOTEC Consulting",
      period: { es: "Jun 2010 — Feb 2020", en: "Jun 2010 — Feb 2020" },
      location: "Madrid",
      bullets: {
        es: [
          "Ciclo de vida de aplicaciones críticas: el negocio depende de que esto no se caiga.",
          "Optimización de rendimiento sobre Oracle y SQL Server; menos incidencias, más sueño.",
          "Liderazgo en migraciones de sistemas Legacy a .NET moderno sin parar el negocio.",
        ],
        en: [
          "Lifecycle of business-critical applications: the company relied on these staying up.",
          "Performance tuning on Oracle and SQL Server; fewer incidents, more sleep.",
          "Led migrations from legacy systems to modern .NET without stopping the business.",
        ],
      },
      tags: ["C#", "ASP.NET", "Oracle", "SQL Server", "WCF"],
    },
  ],
  education: [
    {
      title: { es: "Máster en Bases de Datos", en: "Master in Databases" },
      institution: "Microforum",
      period: "2001 — 2002",
    },
  ],
  skills: [
    {
      category: { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
      items: ["LLMs (Claude, Github Copilot, Opencode)", "Prompt Engineering"],
    },
    {
      category: { es: "Frontend Development", en: "Frontend Development" },
      items: ["Angular 18", "React", "Astro", "TypeScript", "Tailwind CSS"],
    },
    {
      category: { es: "Backend & Data", en: "Backend & Data" },
      items: [".NET 8", "Python", "Node.js", "SQL Server"],
    },
    {
      category: { es: "Arquitectura", en: "Architecture" },
      items: ["DDD", "Clean Architecture", "Microservicios", "Hexagonal", "CQRS", "Mediator Pattern"],
    },
    {
      category: { es: "DevOps & Cloud", en: "DevOps & Cloud" },
      items: ["Azure DevOps", "TeamCity", "Docker", "GitFlow", "Azure", "SonarQube", "n8n"],
    },
    {
      category: { es: "Liderazgo", en: "Leadership" },
      items: ["Scrum", "Agile", "Mentoring", "Tech Lead", "Hiring"],
    },
  ],
  projects: [
    {
      title: { es: "AI-Powered Knowledge Hub", en: "AI-Powered Knowledge Hub" },
      blurb: {
        es: "Plataforma de documentación inteligente que consume la API de Claude. Frontend rápido con Astro y React, y orquestación de modelos en backend con Python.",
        en: "Smart documentation platform consuming the Claude API. Lightning-fast frontend with Astro/React, and model orchestration on a Python backend.",
      },
      tags: ["Astro", "React", "Python", "Claude API"],
      kind: "GenAI",
    },
    {
      title: { es: "ERP Académico — Núcleo de dominio", en: "Academic ERP — Domain core" },
      blurb: {
        es: "Núcleo de dominio del ERP de UNIR. DDD táctico, agregados versionados, eventos integrados con bus interno.",
        en: "Domain core of UNIR's ERP. Tactical DDD, versioned aggregates, events on an internal bus.",
      },
      tags: [".NET 8", "DDD", "EF Core"],
      kind: "Domain",
    },
    {
      title: { es: "Clean Architecture Reference", en: "Clean Architecture Reference" },
      blurb: {
        es: "Plantilla de referencia para nuevos servicios .NET: testing, observabilidad y separación estricta de capas.",
        en: "Reference template for new .NET services: testing, observability, and strict layer separation.",
      },
      tags: [".NET", "xUnit", "Docker"],
      kind: "Template",
      link: "https://github.com/jesusprodriguezUnir",
    },
    {
      title: { es: "Angular DDD Boilerplate", en: "Angular DDD Boilerplate" },
      blurb: {
        es: "Frontend Angular con feature-slicing, signals y stores ligeros. Pensado para equipos que crecen.",
        en: "Angular frontend with feature-slicing, signals, and lightweight stores. Built for growing teams.",
      },
      tags: ["Angular 18", "TypeScript", "Signals"],
      kind: "Frontend",
      link: "https://github.com/jesusprodriguezUnir",
    },
    {
      title: { es: "Pipelines CI/CD compartidos", en: "Shared CI/CD pipelines" },
      blurb: {
        es: "Plantillas YAML reutilizables en Azure DevOps. Build, test, escaneo y despliegue blue/green.",
        en: "Reusable YAML templates in Azure DevOps. Build, test, scan, and blue/green deploy.",
      },
      tags: ["Azure DevOps", "YAML", "Docker"],
      kind: "DevOps",
    },
  ],
  languages: [
    { lang: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" }, dots: 5 },
    { lang: { es: "Inglés", en: "English" }, level: { es: "Profesional", en: "Professional" }, dots: 4 },
  ],
  certifications: [
    { name: "Microsoft Certified: Azure Fundamentals" },
    { name: "MCP 70-229: SQL Server" },
    { name: "TS 70-515: Web Apps .NET 4" },
  ],
  ui: {
    cta: { es: { filterAll: "Todas", lang: "EN" }, en: { filterAll: "All", lang: "ES" } },
    titles: {
      es: { philosophy: "Cómo trabajo", work: "Trayectoria", skills: "Skills", projects: "Proyectos Destacados", contact: "Contacto", education: "Formación", langs: "Idiomas", certs: "Certificaciones" },
      en: { philosophy: "How I work", work: "Experience", skills: "Skills", projects: "Featured Projects", contact: "Contact", education: "Education", langs: "Languages", certs: "Certifications" },
    },
  },
};
