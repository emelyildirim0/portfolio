function slugify(s) {
  return s
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const projectsTr = [
  {
    title: "Mühendislik Operasyon Yönetim Sistemi",
    category: "Internal Tools",
    role: "Analiz, veri modeli, PL/SQL, arayüz kurgusu",
    tech: ["Oracle 19c", "PL/SQL", "SQL", "HTML/CSS/JS"],
    problem:
      "Operasyon takibi manuel ve dağınıktı. Görev atama, görünürlük ve raporlama zayıftı.",
    solution:
      "Yetki bazlı işlem yönetimi, atama/izleme akışları ve raporlama ekranları içeren web tabanlı modül.",
    decisions: [
      "İş kurallarını paket seviyesinde merkezileştirme",
      "Audit ve izlenebilirlik için standart log yaklaşımı",
      "Kullanıcı ekranlarını süreç adımlarına göre sadeleştirme",
    ],
    outcome:
      "Takip edilebilirlik arttı, süreç görünürlüğü iyileşti, operasyon hızı yükseldi.",
    learnings:
      "Kurumsal kullanıcıların ihtiyacını anlamadan teknik olarak doğru çözüm üretmek yeterli olmuyor.",
  },
  {
    title: "CRM / Helpdesk Süreç Modülü",
    category: "Process",
    role: "Süreç tasarımı, iş kuralları, raporlama",
    tech: ["CRM", "Helpdesk", "SQL", "Dashboard"],
    problem:
      "Talepler farklı kanallardan geliyor, SLA takibi zor, eskalasyonlar gecikiyordu.",
    solution:
      "Kategori/öncelik bazlı akışlar, SLA & eskalasyon kuralları ve operasyonel raporlar.",
    decisions: [
      "Durum akışlarını rol/sorumluluk modeliyle netleştirme",
      "SLA ihlallerini görünür kılan rapor/KPI seti",
    ],
    outcome:
      "SLA görünürlüğü arttı, eskalasyonlar erken yakalandı, kullanıcı memnuniyeti yükseldi.",
    learnings:
      "Süreç tasarımı (status flow) en az kod kadar kritik; raporlama baştan düşünülmeli.",
  },
  {
    title: "Dashboard & Operasyonel Raporlama",
    category: "Dashboard / Reporting",
    role: "KPI analizi, rapor tasarımı, SQL optimizasyonu",
    tech: ["SQL", "Oracle", "KPI", "UI"],
    problem:
      "Karar vericiler için tek ekranda görünürlük yok; raporlar dağınık ve geç geliyordu.",
    solution:
      "KPI’ları öne çıkaran, drill-down destekli dashboard ve rapor setleri.",
    decisions: [
      "Sorgu maliyetini azaltan indeks/plan odaklı iyileştirme",
      "KPI tanımlarını iş birimiyle birlikte netleştirme",
    ],
    outcome:
      "Raporlama süresi kısaldı, karar verme hızlandı, süreçler daha ölçülebilir hale geldi.",
    learnings:
      "KPI’lar net değilse dashboard sadece ‘güzel ekran’ olur; tanım ve sahiplik şart.",
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

const projectsEn = projectsTr.map((p) => ({
  ...p,
  title: p.title,
  slug: p.slug,
}));

export function getProjects(lang) {
  return lang === "tr" ? projectsTr : projectsEn;
}

export function getProjectBySlug(lang, slug) {
  const list = getProjects(lang);
  return list.find((p) => p.slug === slug) || null;
}

export const projectCategories = [
  "All",
  "Internal Tools",
  "Process",
  "Database-Driven",
  "Dashboard / Reporting",
  "Web",
  "Mobile",
];

