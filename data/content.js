// =====================================================================
// Semua isi portofolio ada di file ini. Ubah teks di sini saja;
// komponen di folder /components akan mengikuti otomatis.
// =====================================================================

export const profile = {
  name: "Bernand Trianda Firmansyah",
  shortName: "Bernand",
  initials: "BTF",
  role: "System Development",
  unit: "Enterprise Risk Management",
  company: "Citilink Indonesia",
  eyebrow: "System Development · Enterprise Risk Management · Citilink Indonesia",
  intro:
    "I combine full-stack development, business analysis, and data analytics to turn manual, spreadsheet-driven monitoring into structured systems and dashboards that management can rely on.",
  rotatingRoles: ["Full-Stack Developer", "Business Analyst", "BI Developer", "Automation Builder"],
  location: "Tangerang, Indonesia",
  email: "bernand.fir@gmail.com",
  phone: "+62 813-3076-0966",
  linkedin: "https://linkedin.com/in/bernandtf",
  github: "https://github.com/bernand25",
  cv: "/Bernand_CV.pdf",
  photo: "/profile.jpg",
  logo: "/btf-logo-96.png",
  openTo: ["System Development", "Full-Stack Development", "Business Analyst", "Business Intelligence", "GRC Technology"],
};

// Angka di kartu "monitoring console" pada hero.
export const scope = {
  title: "Risk & Compliance Monitoring",
  subtitle: "Current scope at Citilink",
  tags: ["Shareholder Loan (SHL)", "Capital Injection (CI)"],
  metrics: [
    { value: 18, label: "Risk Events" },
    { value: 66, label: "Mitigation Actions" },
    { value: 54, label: "Compliance Checklist Items" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a System Development professional in the Enterprise Risk Management unit at Citilink Indonesia. My work sits where software, business process, and data meet: I talk to the people who run the process, translate what they need into requirements, and then build the system myself.",
    "Before Citilink, I graduated in Computer Science from BINUS University, built HR dashboards as an IT intern for the HR information system at TÜV NORD Indonesia, and led research on social media sentiment and cryptocurrency prices.",
  ],
  approach: [
    { step: "01", title: "Understand the process", text: "Map how the work actually flows today, who touches it, and what decisions depend on it." },
    { step: "02", title: "Find where time is lost", text: "Look for manual re-entry, stale reports, and data that lives in too many places." },
    { step: "03", title: "Build with what fits", text: "Automate that part with tools the organization can maintain: Laravel, Power BI, Microsoft 365, or Apps Script." },
  ],
  facts: [
    { label: "Based in", value: "Tangerang, Indonesia" },
    { label: "Education", value: "B.Sc. Computer Science, BINUS · GPA 3.62" },
    { label: "Focus", value: "Risk & compliance systems" },
  ],
};

// category: "work" | "research" | "web"
//
// Bukti/screenshot proyek: taruh gambar di public/projects/<id>/ lalu isi `images`, contoh:
//   images: [
//     { src: "/projects/review-portal/dashboard.png", alt: "Dashboard kajian per direktorat", caption: "Dashboard utama (data dummy)" },
//   ],
// Gambar pertama dipakai sebagai thumbnail di kartu proyek.
// Untuk proyek Citilink, pakai data dummy atau blur data asli sebelum diunggah.
export const projectFilters = [
  { id: "all", label: "All" },
  { id: "work", label: "Citilink" },
  { id: "research", label: "Research" },
  { id: "web", label: "Web" },
];

export const projects = [
  {
    id: "review-portal",
    category: "work",
    featured: true,
    title: "Business & Risk Review Tracking Portal",
    org: "Citilink · Enterprise Risk Management",
    summary:
      "An integrated internal web portal that digitizes and monitors the end-to-end Business Review and Risk Review process.",
    problem:
      "Business and risk reviews were registered in a shared Excel workbook. Seeing how many reviews came in, from which directorate, and which were still in progress meant opening the file, filtering, and counting by hand.",
    built: [
      "A staged review workflow (WR review, requester review, latest review, final draft, completed) with registration numbers issued automatically",
      "Business reviews captured from e-mail and Excel import, so requesters only complete what is missing",
      "Role-based access for requesters, WR reviewers, and administrators, with a personal task home and notifications",
      "Automated sync from the Excel register in SharePoint to Google Sheets, refreshing every few minutes",
      "A web dashboard built with Google Apps Script that shows reviews by year, month, directorate, initiative type, and status",
      "Every metric recalculated from raw data instead of manually refreshed pivot tables, so the numbers stay consistent",
    ],
    lesson:
      "Dashboards should read the source data, never a hand-made summary. Halfway through, I found pivot tables that had not been refreshed and no longer matched the raw data.",
    flow: ["Excel register in SharePoint", "Scheduled sync", "Google Sheets (raw data)", "Apps Script web dashboard"],
    stack: ["Google Apps Script", "Google Sheets", "SharePoint", "Power Automate", "JavaScript"],
    images: [
      { src: "/projects/review-portal/landing.webp", alt: "Landing page of the Business and Risk Review portal with a sign-in form", caption: "Landing page: submit business reviews, revise with the WR team, and track every stage" },
      { src: "/projects/review-portal/task-home.webp", alt: "Task home showing review counts per stage and business reviews received by e-mail", caption: "Task home: reviews waiting at each stage, plus reviews captured from e-mail" },
    ],
  },
  {
    id: "mitigation-tracker",
    category: "work",
    featured: true,
    title: "Risk Mitigation Progress Tracker",
    org: "Citilink · Enterprise Risk Management",
    summary:
      "A monitoring system and dashboard that follows 18 risk events and 66 mitigation actions for Shareholder Loan and Capital Injection monitoring.",
    problem:
      "A complete risk register does not mean the risks are under control. What matters is whether each mitigation plan is carried out, by whom, and by when, and that information was spread across files.",
    built: [
      "Web modules for the risk register, monthly monitoring, mitigation tracking, and reporting periods",
      "Filtering and data workflows so each unit sees and updates only what it owns",
      "A monthly monitoring dashboard with KPIs, management flags, effectiveness, trend, and implementation status per reporting period",
      "E-mail + PIN sign-in with role-based access, a view-only guest mode, executive reports, and CSV export",
      "Power BI dashboards with DAX measures and KPIs that show mitigation progress at a glance",
    ],
    lesson: "A good dashboard answers one question first: what needs follow-up today?",
    flow: ["Risk register", "Monthly monitoring input", "Mitigation tracking", "Power BI dashboard"],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "Power BI", "DAX"],
    images: [
      { src: "/projects/mitigation-tracker/dashboard.webp", alt: "Risk monitoring dashboard with KPI cards, management flags, and implementation status", caption: "Risk monitoring dashboard: risk events, mitigation progress, and management flags per period" },
      { src: "/projects/mitigation-tracker/sign-in.webp", alt: "Sign-in page of the Risk Mitigation Monitoring platform", caption: "Sign-in page with e-mail + PIN login and a view-only guest mode" },
    ],
  },
  {
    id: "compliance-tracker",
    category: "work",
    featured: true,
    title: "Compliance Fulfillment Tracker",
    org: "Citilink · Enterprise Risk Management",
    summary:
      "Turns 54 compliance checklist items into a live view of what is fulfilled and what is still outstanding, per reporting period.",
    problem:
      "Knowing which compliance items were met meant collecting checklists and consolidating them by hand, which was slow exactly when answers were needed quickly.",
    built: [
      "Checklist tracking per reporting period, with filters for period, compliance type, status, reference, category, and PIC",
      "Breakdowns by compliance type (SHL vs Capital Injection), status, and PIC, plus a monthly history",
      "A clear view of fulfilled versus outstanding items for management reporting",
      "Structured data shared with the risk modules for consistent reporting",
    ],
    lesson: "A checklist is only useful when its status is visible without asking anyone.",
    flow: ["Compliance checklist", "Periodic status update", "Consolidated data", "Fulfillment dashboard"],
    stack: ["Laravel", "PHP", "MySQL", "Power BI", "DAX"],
    images: [
      { src: "/projects/compliance-tracker/dashboard.webp", alt: "Compliance checklist dashboard with filters, status cards, and breakdown charts", caption: "Compliance dashboard: fulfilled, partially fulfilled, and outstanding items with breakdowns" },
    ],
  },
  {
    id: "email-autofiling",
    category: "work",
    featured: true,
    title: "Email-to-SharePoint Auto-Filing System",
    org: "Citilink · Enterprise Risk Management",
    summary:
      "Moves incoming Outlook emails and their attachments into the right SharePoint library automatically, removing manual filing.",
    problem:
      "Important documents arrived by email every day. Someone had to download each attachment, rename it, and upload it to the correct SharePoint folder.",
    built: [
      "An automated flow that picks up matching emails from Outlook",
      "Attachments saved to the right SharePoint library without manual download and upload",
      "A repeatable filing structure so documents are easy to find later",
    ],
    lesson: "Start automating the most boring, most repeated task. That is where the impact shows fastest.",
    flow: ["Outlook inbox", "Automated flow", "SharePoint library"],
    stack: ["Power Automate", "Outlook", "SharePoint", "Microsoft 365"],
    images: [],
  },
  {
    id: "crypto-sentiment",
    category: "research",
    title: "Cryptocurrency Sentiment Analysis",
    org: "Undergraduate thesis · BINUS University",
    summary:
      "Research on how public sentiment on social media relates to Bitcoin price movements, with a forecasting dashboard.",
    problem:
      "Mining Social Media for Financial Insights: The Impact of Public Sentiment on Cryptocurrency Price Movement.",
    built: [
      "Collected and preprocessed social media text data",
      "Applied sentiment analysis and compared it with price movement",
      "Built an interactive forecasting dashboard with ARIMA/SARIMA models in Streamlit",
      "Led the research from planning to defense (thesis grade: A)",
    ],
    stack: ["Python", "NLP", "Sentiment Analysis", "ARIMA / SARIMA", "Streamlit"],
    images: [],
  },
  {
    id: "enrollment-prediction",
    category: "research",
    title: "Student Enrollment Interest Prediction",
    org: "Academic project",
    summary:
      "A predictive model that forecasts student enrollment trends and finds regional study program interest patterns across Indonesian provinces.",
    built: [
      "Regression analysis to forecast enrollment trends",
      "Clustering to group provinces by study program interest",
      "Data preprocessing, exploratory data analysis, and visualization to support education planning",
    ],
    stack: ["Python", "Regression", "Clustering", "EDA", "Data Visualization"],
    images: [],
  },
  {
    id: "uiux-review",
    category: "research",
    title: "UI/UX Systematic Review (PRISMA)",
    org: "Academic research",
    summary:
      "A systematic literature review of recurring UI/UX challenges in tourism information services, with design recommendations.",
    built: [
      "Screened and selected studies with the PRISMA method",
      "Grouped recurring UI/UX problems into themes",
      "Wrote recommendations for tourism information services",
    ],
    stack: ["PRISMA", "UI/UX Research", "Literature Review"],
    images: [],
  },
  {
    id: "piscis-aquarium",
    category: "web",
    title: "Piscis Aquarium Interactive Website",
    org: "Web project",
    summary: "A marine-life themed website with responsive navigation and a booking flow.",
    built: ["Responsive layout and navigation", "Interactive booking section", "Built with plain HTML, CSS, and JavaScript"],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    images: [],
  },
];

export const experience = [
  {
    company: "PT Citilink Indonesia",
    role: "System Development · Enterprise Risk Management",
    period: "Sep 2026 – Present",
    current: true,
    points: [
      "Develop and enhance web-based monitoring systems with Laravel, PHP, MySQL, and JavaScript, covering risk registers, monthly monitoring, mitigation tracking, reporting periods, filtering, and data workflows.",
      "Build Power BI dashboards with DAX, data modeling, and KPI design for risk, mitigation, and compliance monitoring.",
      "Translate business requirements into system solutions by analyzing workflows, defining functional requirements, and aligning data, business logic, and user interfaces.",
      "Develop supporting data solutions with Google Apps Script, Google Sheets, SQL, and Python for processing, validation, and reporting.",
    ],
  },
  {
    company: "PT TÜV NORD Indonesia",
    role: "IT Intern · Human Resources Information System",
    period: "Sep 2024 – Oct 2025",
    points: [
      "Developed interactive HR dashboards in Looker Studio with data from Google Sheets, giving real-time visibility of key HR metrics.",
      "Validated, cleansed, and maintained HR data in Excel for accurate and consistent reporting.",
      "Worked with HR users to turn reporting needs into dashboard and system improvements, and investigated data inconsistencies.",
      "Provided IT support and troubleshooting, and prepared system documentation and user guides.",
    ],
  },
  {
    company: "PT Dompet Anak Bangsa (GoPay)",
    role: "Student Ambassador",
    period: "2023",
    points: [
      "Reached 500+ students through campus activations.",
      "Ran acquisition campaigns and created social media content.",
      "Coordinated with regional teams.",
    ],
  },
];

export const leadership = [
  {
    title: "Research Team Leader",
    org: "International Conference on Generative Artificial Intelligence for Business",
    period: "2025",
    text: "Led the team from planning to presentation and presented the findings internationally.",
  },
  {
    title: "Conference Presenter",
    org: "SIET 2023 International Conference",
    period: "2023",
    text: "Presented research at an international conference.",
  },
  {
    title: "Research Project Leader",
    org: "Undergraduate Thesis, BINUS University",
    period: "2024 – 2025",
    text: "Led research on cryptocurrency sentiment and price movement using sentiment analysis.",
  },
];

export const skillGroups = [
  { id: "dev", label: "Full-Stack", items: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Next.js", "React", "Tailwind CSS"] },
  { id: "data", label: "Data & BI", items: ["Power BI", "DAX", "Data Modeling", "KPI Design", "Looker Studio", "SQL", "Python", "Excel", "Google Sheets"] },
  { id: "auto", label: "Automation", items: ["Google Apps Script", "Power Automate", "SharePoint", "Microsoft 365"] },
  { id: "ba", label: "Business Analysis", items: ["Requirements Gathering", "Workflow Mapping", "Functional Requirements", "Stakeholder Communication"] },
  { id: "ai", label: "AI & ML", items: ["Machine Learning", "NLP", "Sentiment Analysis", "XGBoost"] },
  { id: "tools", label: "Tools", items: ["GitHub", "VS Code", "Microsoft Office"] },
];

export const education = {
  school: "BINUS University",
  degree: "Bachelor of Computer Science",
  period: "2021 – 2025",
  gpa: "3.62 / 4.00",
  thesisGrade: "A",
  thesis: "Mining Social Media for Financial Insights: The Impact of Public Sentiment on Cryptocurrency Price Movement",
  activities: ["HIMTI BINUS University · Student Activist", "BINUS Student Learning Community · Mentee", "Tech For Indonesia · Volunteer"],
};

export const certifications = [
  { title: "Google Data Analytics Professional Certificate", issuer: "Google · Coursera", area: "Data Analytics", file: "/cert-google.jpg" },
  { title: "Software Engineer Certificate", issuer: "HackerRank", area: "Software Engineering", file: "/cert-hackerrank.jpg" },
  { title: "CompTIA A+ 1000 Part 2", issuer: "CompTIA", area: "IT Infrastructure", file: "/cert-comptia.jpg" },
  { title: "Data Science & Artificial Intelligence", issuer: "BINUS University", area: "AI & Machine Learning", file: "/cert-datascience.jpg" },
  { title: "TOEFL ITP · Score 530", issuer: "ETS", area: "English Proficiency", file: "/cert-toefl.jpg" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
