const postsTr = [
  {
    slug: "oracle-plsql-kurumsal-paket-tasarimi",
    title: "Oracle PL/SQL: Kurumsal Paket Tasarımı (19c)",
    summary:
      "Bakımı kolay, test edilebilir ve iş kurallarını doğru taşıyan paket mimarisi için pratik bir yaklaşım.",
    date: "2026-03-31",
    tags: ["Oracle", "PL/SQL", "Mimari", "Kurumsal"],
    readingMins: 7,
    body: [
      {
        type: "p",
        text: "Kurumsal sistemlerde PL/SQL sadece “stored procedure” yazmak değil; veri bütünlüğü, performans ve sürdürülebilirlik demektir. Bu yazıda Oracle 19c üzerinde paket tasarımına pratik bir çerçeve çiziyorum.",
      },
      {
        type: "h2",
        text: "Hedefler",
      },
      {
        type: "ul",
        items: [
          "Paket sorumluluklarını küçük ve net tutmak",
          "İş kurallarını tek yerde toplamak",
          "Hata yönetimini standartlaştırmak",
          "Performansı göz ardı etmeden okunabilirliği korumak",
        ],
      },
      {
        type: "p",
        text: "Devamında örnek bir katmanlama (api / svc / repo yaklaşımı) ve loglama stratejisi ile ilerleyeceğim.",
      },
    ],
  },
  {
    slug: "crm-helpdesk-surec-tasarimi",
    title: "CRM / Helpdesk Süreç Tasarımı: Sahadan Notlar",
    summary:
      "Talep yönetimi, SLA, durum akışları ve raporlama ihtiyaçlarını uçtan uca ele alan bir çerçeve.",
    date: "2026-03-31",
    tags: ["CRM", "Helpdesk", "Süreç", "Analiz"],
    readingMins: 6,
    body: [
      {
        type: "p",
        text: "CRM ve Helpdesk modüllerinde kritik konu; sadece ekran yapmak değil, süreci doğru modellemek. Durum akışları, sorumluluklar, bildirimler ve raporlama birlikte düşünülmeli.",
      },
      { type: "h2", text: "Minimum Süreç Bileşenleri" },
      {
        type: "ul",
        items: [
          "Kayıt / sınıflandırma (kategori, öncelik, etki)",
          "SLA ve eskalasyon kuralları",
          "Atama ve sahiplik modeli",
          "Audit trail ve görünürlük",
        ],
      },
    ],
  },
  {
    slug: "performansli-sql-icin-kontrol-listesi",
    title: "Performanslı SQL için Kontrol Listesi",
    summary:
      "Gerçek hayatta en sık karşılaştığım performans sebepleri ve hızlı kazanımlar.",
    date: "2026-03-31",
    tags: ["SQL", "Performans", "Oracle", "Veri Tabanı"],
    readingMins: 5,
    body: [
      {
        type: "p",
        text: "Performans problemleri çoğu zaman “tek büyük sorun” değil; küçük hataların birikimidir. Aşağıdaki liste, en hızlı etkileri görmeye yardımcı olur.",
      },
      {
        type: "ul",
        items: [
          "Filtreleme: gereksiz kolon seçme, gereksiz JOIN",
          "Index stratejisi: doğru kolon, doğru sıra",
          "N+1 ve tekrar sorgu desenleri",
          "İstatistikler ve plan okuma alışkanlığı",
        ],
      },
    ],
  },
];

const postsEn = [
  {
    slug: "oracle-plsql-enterprise-package-design",
    title: "Oracle PL/SQL: Enterprise Package Design (19c)",
    summary:
      "A practical approach to package architecture that keeps business rules maintainable and performance-aware.",
    date: "2026-03-31",
    tags: ["Oracle", "PL/SQL", "Architecture"],
    readingMins: 7,
    body: [
      {
        type: "p",
        text: "In enterprise systems, PL/SQL is not just stored procedures — it’s integrity, performance, and long-term maintainability. Here’s a pragmatic design frame for Oracle 19c packages.",
      },
    ],
  },
];

export function getPosts(lang) {
  return lang === "tr" ? postsTr : postsEn;
}

export function getPostBySlug(lang, slug) {
  const posts = getPosts(lang);
  return posts.find((p) => p.slug === slug) || null;
}

