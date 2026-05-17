const TRANSLATIONS = {
  fr: {
    navAbout: 'À propos', navSkills: 'Compétences', navExperience: 'Expérience',
    navProjects: 'Projets', navContact: 'Contact', navCta: 'Me contacter',

    heroBadge: 'Disponible · Freelance &amp; CDI',
    heroRole: 'Ingénieur Logiciel',
    heroSub: 'Je conçois et développe des applications web, des solutions data et des pipelines DevOps — du code propre à l\'architecture robuste.',
    heroCta1: 'Voir mes projets', heroCta2: 'Me contacter',

    aboutLabel: 'À propos',
    aboutHeading: 'De l\'idée au code,<br>de la donnée à la production',
    aboutP1: 'Ingénieur Logiciel diplômé EFREI Paris, j\'ai travaillé sur des projets techniques variés : développement web fullstack (ReactJS, ASP.NET MVC), data engineering (SQL Server, Snowflake, SSIS) et mise en œuvre DevOps (Docker, CI/CD). J\'aime construire des solutions fiables, lisibles et bien architecturées.',
    aboutP2: 'Expérimenté en environnements professionnels exigeants — Saint-Gobain et CGI — j\'ai appris à sécuriser le cycle de vie logiciel : qualité du code, tests, intégration continue et collaboration dans des équipes pluridisciplinaires et internationales.',
    aboutStat1: 'Expériences professionnelles', aboutStat2: 'Projets réalisés',
    aboutStat3: 'Langues — FR · EN · CN', aboutStat4: 'TOEIC — Anglais B2',

    skillsLabel: 'Stack technique', skillsHeading: 'Compétences',
    skillsCat1: 'Langages', skillsCat2: 'Web &amp; Fullstack',
    skillsCat3: 'Données &amp; Bases', skillsCat4: 'DevOps &amp; Systèmes',

    expLabel: 'Parcours', expHeading: 'Expériences professionnelles',
    expDate1: 'Mar 2025<br>Sep 2025',
    expRole1: 'Consultant Salesforce — Stage Ingénieur',
    expDesc1: 'Analyste technique en environnement Agile et international : mise en œuvre d\'améliorations Salesforce CRM, garantie qualité logicielle (tests, validation, résolution d\'anomalies), rétro-documentation et recueil des besoins métier.',
    expDate2: 'Nov 2023<br>Avr 2024',
    expRole2: 'Data Engineer — Stage Ingénieur',
    expDesc2: 'Développement de solutions SSIS de gestion d\'incidents avec Magnitude BI, administration et optimisation SQL Server et Snowflake, rédaction de spécifications techniques pour projets ASP.NET MVC, scripts PowerShell et procédures stockées.',

    projectsLabel: 'Projets', projectsHeading: 'Ce que j\'ai construit',
    proj1Company: 'Projet personnel',
    proj1Title: 'SmartCart — SaaS de gestion des courses',
    proj1Desc: 'Application cloud de scan de tickets de caisse — extraction automatique des articles et prix via OCR, analyse des habitudes de dépenses et comparaison inter-enseignes.',
    proj2Company: 'Projet académique EFREI',
    proj2Title: 'Plateforme d\'investissement immobilier',
    proj2Desc: 'Système de financement collectif — gestion de portefeuilles, distribution de revenus locatifs, paiements Stripe, prévention des race conditions et scalabilité horizontale sur AWS.',
    proj3Company: 'Projet académique EFREI · S9',
    proj3Title: 'DevOps — Agile Auto-Parts (AAP)',
    proj3Desc: 'Implémentation complète d\'une chaîne DevOps pour une entreprise simulée : pipelines CI/CD, conteneurisation Docker, automatisation des déploiements et pratiques Agile sur l\'ensemble du cycle de vie.',
    projectsViewAll: 'Voir tous les projets',

    contactLabel: 'Contact', contactHeading: 'Travaillons ensemble',
    contactDesc: 'Disponible pour des missions freelance ou opportunités en CDI.<br>N\'hésitez pas à me contacter.',
    contactCv: 'Télécharger mon CV',

    footerProjects: 'Projets', footerHome: 'Accueil',

    pageBack: 'Retour', pageLabel: 'Tous les projets',
    pageHeading: 'Ce que j\'ai construit',
    pageSub: 'Projets personnels, académiques et expériences en entreprise.',
    groupPersonal: 'Personnels', groupAcademic: 'Académiques',
    groupPro: 'Expériences professionnelles',

    pp1Company: 'Projet personnel · 2026',
    pp1Title: 'SmartCart — SaaS de gestion des courses',
    pp1Desc: 'Application cloud permettant de scanner des tickets de caisse, d\'en extraire automatiquement les articles et prix via OCR, et d\'analyser les habitudes de dépenses avec comparaison inter-enseignes. Architecture SaaS scalable avec pipeline de traitement de données.',
    pp2Company: 'EFREI · Architecture logicielle · 2025',
    pp2Title: 'Plateforme d\'investissement immobilier',
    pp2Desc: 'Système de financement collectif de propriétés immobilières — gestion de portefeuilles et wallets, distribution mensuelle de revenus locatifs, intégration Stripe, prévention des race conditions par locking, scalabilité horizontale sur AWS avec ELB et auto-scaling.',
    pp3Company: 'Deloitte x EFREI · Master Project · 4 mois',
    pp3Title: 'Interface IA Générative — Assistant de formation',
    pp3Desc: 'Interface web d\'assistance à la création et personnalisation de formations via IA générative, guidée par une méta-syntaxe de prompting. Application mobile Flutter pour consulter les formations enregistrées et stockées en base.',
    pp4Company: 'EFREI · Projet DevOps S9 · 2024–2025',
    pp4Title: 'DevOps — Agile Auto-Parts (AAP)',
    pp4Desc: 'Implémentation complète d\'une chaîne DevOps pour une entreprise simulée de pièces automobiles : pipelines CI/CD, conteneurisation Docker, gestion de versions Git et automatisation des déploiements en environnement Agile.',
    pp5Company: 'EFREI · Projet DevOps M1 · 2024',
    pp5Title: 'DevOps M1 — Pipeline Jenkins',
    pp5Desc: 'Projet DevOps de première année de master : mise en place d\'un pipeline d\'intégration et de déploiement continu avec Jenkins (Groovy), gestion des environnements et automatisation du cycle de build/test/deploy.',
    pp6Company: 'APU Kuala Lumpur · Semestre international · 2023',
    pp6Title: 'ProjectWEB — Application web VueJS',
    pp6Desc: 'Projet web développé lors du semestre international à l\'Asia Pacific University (Kuala Lumpur). Développement frontend en VueJS en équipe internationale.',
    pp7Company: 'Saint-Gobain · Stage Ingénieur Data · Nov 2023 – Avr 2024',
    pp7Title: 'Data Engineering — Gestion d\'incidents &amp; optimisation BDD',
    pp7Desc: 'Développement de solutions SSIS de gestion d\'incidents avec Magnitude BI, administration SQL Server, rédaction de spécifications fonctionnelles et techniques pour projets ASP.NET MVC, optimisation de bases SQL Server et Snowflake via scripts PowerShell et procédures stockées.',
    pp8Company: 'CGI · Stage Consultant Salesforce · Mar 2025 – Sep 2025',
    pp8Title: 'Qualité logicielle &amp; améliorations Salesforce CRM',
    pp8Desc: 'Analyste technique en environnement Agile et international : mise en œuvre d\'améliorations Salesforce, garantie qualité logicielle (tests, validation, résolution d\'anomalies), rétro-documentation et recueil des besoins métier.',
  },

  en: {
    navAbout: 'About', navSkills: 'Skills', navExperience: 'Experience',
    navProjects: 'Projects', navContact: 'Contact', navCta: 'Contact me',

    heroBadge: 'Available · Freelance &amp; Full-time',
    heroRole: 'Software Engineer',
    heroSub: 'I design and build web applications, data solutions and DevOps pipelines — from clean code to robust architecture.',
    heroCta1: 'View my projects', heroCta2: 'Contact me',

    aboutLabel: 'About',
    aboutHeading: 'From idea to code,<br>from data to production',
    aboutP1: 'Software Engineer graduated from EFREI Paris, I have worked on various technical projects: fullstack web development (ReactJS, ASP.NET MVC), data engineering (SQL Server, Snowflake, SSIS) and DevOps implementation (Docker, CI/CD). I enjoy building reliable, readable and well-architected solutions.',
    aboutP2: 'Experienced in demanding professional environments — Saint-Gobain and CGI — I learned to secure the software lifecycle: code quality, testing, continuous integration and collaboration in multidisciplinary and international teams.',
    aboutStat1: 'Professional experiences', aboutStat2: 'Projects delivered',
    aboutStat3: 'Languages — FR · EN · CN', aboutStat4: 'TOEIC — English B2',

    skillsLabel: 'Tech stack', skillsHeading: 'Skills',
    skillsCat1: 'Languages', skillsCat2: 'Web &amp; Fullstack',
    skillsCat3: 'Data &amp; Databases', skillsCat4: 'DevOps &amp; Systems',

    expLabel: 'Career', expHeading: 'Professional experience',
    expDate1: 'Mar 2025<br>Sep 2025',
    expRole1: 'Salesforce Consultant — Engineering Intern',
    expDesc1: 'Technical analyst in an Agile and international environment: implementation of Salesforce CRM improvements, software quality assurance (testing, validation, bug resolution), back-documentation and business requirements gathering.',
    expDate2: 'Nov 2023<br>Apr 2024',
    expRole2: 'Data Engineer — Engineering Intern',
    expDesc2: 'Development of SSIS incident management solutions with Magnitude BI, SQL Server and Snowflake administration and optimization, technical specifications for ASP.NET MVC projects, PowerShell scripts and stored procedures.',

    projectsLabel: 'Projects', projectsHeading: 'What I\'ve built',
    proj1Company: 'Personal project',
    proj1Title: 'SmartCart — Shopping Management SaaS',
    proj1Desc: 'Cloud application for receipt scanning — automatic extraction of items and prices via OCR, spending habit analysis and cross-retailer comparison.',
    proj2Company: 'EFREI Academic project',
    proj2Title: 'Real estate investment platform',
    proj2Desc: 'Collective financing system — portfolio management, rental income distribution, Stripe payments, race condition prevention and horizontal scalability on AWS.',
    proj3Company: 'EFREI Academic project · S9',
    proj3Title: 'DevOps — Agile Auto-Parts (AAP)',
    proj3Desc: 'Full implementation of a DevOps pipeline for a simulated company: CI/CD pipelines, Docker containerization, deployment automation and Agile practices throughout the lifecycle.',
    projectsViewAll: 'View all projects',

    contactLabel: 'Contact', contactHeading: 'Let\'s work together',
    contactDesc: 'Available for freelance missions or full-time opportunities.<br>Feel free to reach out.',
    contactCv: 'Download my CV',

    footerProjects: 'Projects', footerHome: 'Home',

    pageBack: 'Back', pageLabel: 'All projects',
    pageHeading: 'What I\'ve built',
    pageSub: 'Personal, academic projects and professional experiences.',
    groupPersonal: 'Personal', groupAcademic: 'Academic',
    groupPro: 'Professional experience',

    pp1Company: 'Personal project · 2026',
    pp1Title: 'SmartCart — Shopping Management SaaS',
    pp1Desc: 'Cloud application for scanning receipts, automatically extracting items and prices via OCR, and analyzing spending habits with cross-retailer comparison. Scalable SaaS architecture with a data processing pipeline.',
    pp2Company: 'EFREI · Software Architecture · 2025',
    pp2Title: 'Real estate investment platform',
    pp2Desc: 'Collective property financing system — portfolio and wallet management, monthly rental income distribution, Stripe integration, race condition prevention through locking, horizontal scalability on AWS with ELB and auto-scaling.',
    pp3Company: 'Deloitte x EFREI · Master Project · 4 months',
    pp3Title: 'Generative AI Interface — Training Assistant',
    pp3Desc: 'Web interface for creating and customizing training content via generative AI, guided by a prompting meta-syntax. Flutter mobile app to access saved and stored training sessions.',
    pp4Company: 'EFREI · DevOps Project S9 · 2024–2025',
    pp4Title: 'DevOps — Agile Auto-Parts (AAP)',
    pp4Desc: 'Full DevOps chain implementation for a simulated auto parts company: CI/CD pipelines, Docker containerization, Git version management and deployment automation in an Agile environment.',
    pp5Company: 'EFREI · DevOps Project M1 · 2024',
    pp5Title: 'DevOps M1 — Jenkins Pipeline',
    pp5Desc: 'First-year master\'s DevOps project: setting up a CI/CD pipeline with Jenkins (Groovy), environment management and build/test/deploy cycle automation.',
    pp6Company: 'APU Kuala Lumpur · International semester · 2023',
    pp6Title: 'ProjectWEB — VueJS Web Application',
    pp6Desc: 'Web project developed during the international semester at Asia Pacific University (Kuala Lumpur). Frontend development in VueJS within an international team.',
    pp7Company: 'Saint-Gobain · Data Engineering Intern · Nov 2023 – Apr 2024',
    pp7Title: 'Data Engineering — Incident Management &amp; DB Optimization',
    pp7Desc: 'Development of SSIS incident management solutions with Magnitude BI, SQL Server administration, writing functional and technical specifications for ASP.NET MVC projects, SQL Server and Snowflake optimization via PowerShell scripts and stored procedures.',
    pp8Company: 'CGI · Salesforce Consultant Intern · Mar 2025 – Sep 2025',
    pp8Title: 'Software Quality &amp; Salesforce CRM Improvements',
    pp8Desc: 'Technical analyst in an Agile and international environment: Salesforce implementation improvements, software quality assurance (testing, validation, bug resolution), back-documentation and business requirements gathering.',
  }
};

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = TRANSLATIONS[lang][el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang]').forEach(s => s.classList.toggle('active', s.dataset.lang === lang));
  const titles = {
    fr: { 'index.html': 'Aurélien AH-SANE — Ingénieur Logiciel', 'projects.html': 'Projets — Aurélien AH-SANE', '': 'Aurélien AH-SANE — Ingénieur Logiciel' },
    en: { 'index.html': 'Aurélien AH-SANE — Software Engineer',  'projects.html': 'Projects — Aurélien AH-SANE', '': 'Aurélien AH-SANE — Software Engineer' }
  };
  const page = location.pathname.split('/').pop() || '';
  if (titles[lang]?.[page]) document.title = titles[lang][page];
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || (navigator.language.startsWith('fr') ? 'fr' : 'en');
  applyLanguage(saved);
  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLanguage(localStorage.getItem('lang') === 'fr' ? 'en' : 'fr');
  });
});
