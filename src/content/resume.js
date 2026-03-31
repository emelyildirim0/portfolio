const resumeTr = {
  summary:
    "Kurumsal yazılım projelerinde deneyimli bir yazılım mühendisiyim. Uçtan uca sahiplenme, veri tabanı odaklı düşünme ve iş süreçlerini güvenilir/sürdürülebilir çözümlerle iyileştirme konularına önem veriyorum.",
  experience: [
    {
      company: "Eker Süt Ürünleri Gıda San. ve Ticaret A.Ş.",
      title: "Yazılım Mühendisi",
      location: "Bursa",
      period: "08/2021 – Günümüz",
      bullets: [
        "Oracle PL/SQL tabanlı kurumsal uygulamalar geliştirme ve bakım",
        "CRM, bakım yönetimi, mühendislik operasyonları, kalite yönetimi gibi modüller",
        "Veri modeli, paket/prosedür ve iş kuralları entegrasyonu",
        "Dashboard/raporlama ve kullanıcı ihtiyaçlarına göre modül geliştirme",
      ],
    },
    {
      company: "Kütahya Dumlupınar Üniversitesi",
      title: "Yazılım Mühendisi Stajyeri",
      location: "Kütahya",
      period: "02/2021 – 05/2021",
      bullets: [
        "İki aşamalı staj programı (teorik + uygulamalı)",
        "C ile veri yapıları ve uygulamalar (bağlı liste, yığın, kuyruk)",
      ],
    },
  ],
  education: [
    {
      school: "Kütahya Dumlupınar Üniversitesi",
      detail: "Bilgisayar Mühendisliği",
      period: "2016 – 2021",
    },
    {
      school: "Anadolu Üniversitesi",
      detail: "Türk Dili ve Edebiyatı",
      period: "2021 – Günümüz",
    },
  ],
  languages: [
    { name: "İngilizce", level: "B2" },
    { name: "Fransızca", level: "A1" },
  ],
  skills: {
    database: ["Oracle 19c", "PL/SQL", "SQL", "MSSQL", "MySQL"],
    backend: ["REST", "Node.js", "Express"],
    frontend: ["React", "HTML", "CSS", "JavaScript"],
    tools: ["Git", "GitHub", "VS Code", "Cursor"],
  },
};

const resumeEn = {
  summary:
    "I’m a software engineer with experience in enterprise software projects. I care about end-to-end ownership, database-first thinking, and improving business processes with reliable, maintainable solutions.",
  experience: [
    {
      company: "Eker Dairy Products Inc.",
      title: "Software Engineer",
      location: "Bursa, TR",
      period: "08/2021 – Present",
      bullets: [
        "Developed and maintained enterprise applications with Oracle PL/SQL",
        "Built process-oriented modules (CRM, maintenance, engineering operations, quality management)",
        "Owned data modeling, package/procedure development, and business rules integration",
        "Delivered dashboards/reporting and user-driven internal modules",
      ],
    },
    {
      company: "Kutahya Dumlupinar University",
      title: "Software Engineering Intern",
      location: "Kutahya, TR",
      period: "02/2021 – 05/2021",
      bullets: [
        "Two-phase internship program (theory + practice)",
        "Implemented data structures in C (linked lists, stacks, queues)",
      ],
    },
  ],
  education: [
    {
      school: "Kutahya Dumlupinar University",
      detail: "BSc, Computer Engineering",
      period: "2016 – 2021",
    },
    {
      school: "Anadolu University",
      detail: "Turkish Language and Literature",
      period: "2021 – Present",
    },
  ],
  languages: [
    { name: "English", level: "B2" },
    { name: "French", level: "A1" },
  ],
  skills: {
    database: ["Oracle 19c", "PL/SQL", "SQL", "MS SQL", "MySQL"],
    backend: ["REST", "Node.js", "Express"],
    frontend: ["React", "HTML", "CSS", "JavaScript"],
    tools: ["Git", "GitHub", "VS Code", "Cursor"],
  },
};

export function getResume(lang) {
  return lang === "tr" ? resumeTr : resumeEn;
}

