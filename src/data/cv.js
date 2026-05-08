const base = import.meta.env.BASE_URL;

export const cvData = {
  personalInfo: {
    name: "Jesús Pedro Rodríguez Castro",
    role: "Líder Técnico & Scrum Master",
    email: "jesusprodriguez@gmail.com",
    phone: "+34 670 40 24 50",
    location: "Madrid, España",
    linkedin: "https://linkedin.com/in/jesús-pedro-rodríguez-castro-b746394a",
    github: "https://github.com/jesusprodriguezUnir",
    avatar: `${base}jesus_premium.png`
  },
  summary: "Líder Técnico Senior y Responsable de Scrum con más de 15 años de experiencia. Experto en arquitecturas escalables (DDD, Clean Architecture), transformación tecnológica y liderazgo de equipos de alto rendimiento bajo ecosistemas .NET y Angular.",
  experience: [
    {
      role: "Líder Técnico & Responsable de Scrum",
      company: "UNIR - La Universidad en Internet",
      period: "Feb 2020 - Presente",
      location: "Madrid",
      description: [
        "Desarrollo e Integración: Desarrollo de lógica de negocio en ERP Académico utilizando .NET (C#) y Python bajo arquitectura DDD. Implementación de microservicios y entornos utilizando Docker para asegurar la consistencia entre desarrollo y producción.",
        "DevOps & Automatización: Administración de pipelines de CI/CD en TeamCity y Azure DevOps. Creación de scripts en Python y flujos en n8n para automatizar tareas de despliegue y mantenimiento.",
        "Calidad de Código (QA): Garantía de calidad mediante Pruebas Unitarias y análisis estático de código con SonarQube. Gestión de control de cambios estricto a través de Pull Requests y flujo GitFlow.",
        "Liderazgo: Implementación de mejores prácticas, capacitación técnica a desarrolladores y resolución ágil de incidencias críticas (hotfixes)."
      ],
      tags: ["n8n", "Angular 18", ".NET 8", "Python", "Docker", "TeamCity", "Azure DevOps", "SonarQube", "DDD", "Mediator Pattern"]
    },
    {
      role: "Analista .NET / Funcional",
      company: "SOTEC CONSULTING",
      period: "Jun 2010 - Feb 2020",
      location: "Madrid",
      description: [
        "Responsable del ciclo de vida de aplicaciones críticas y estabilidad del negocio.",
        "Optimización de rendimiento en bases de datos Oracle y reducción de incidencias.",
        "Liderazgo en migraciones de sistemas Legacy a entornos .NET modernos."
      ],
      tags: ["C#", "ASP.NET", "Oracle", "SQL Server"]
    }
  ],
  education: [
    {
      title: "Master en Bases de Datos",
      institution: "Microforum",
      period: "2001 - 2002"
    }
  ],
  skills: [
    { category: "Stack Tecnológico", items: ["Angular 18", ".NET 8", "Python", "Docker"] },
    { category: "CI/CD & Calidad", items: ["TeamCity", "Azure DevOps", "SonarQube", "n8n"] },
    { category: "Arquitectura", items: ["DDD", "Mediator Pattern", "Clean Architecture", "Microservicios"] },
    { category: "Soft Skills", items: ["Liderazgo", "Scrum/Agile", "Mentoring"] }
  ],
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "Profesional" }
  ],
  certifications: [
    "Microsoft Certified: Azure Fundamentals",
    "MCP 70-229: SQL Server",
    "TS 70-515: Web Apps .NET 4"
  ]
};
