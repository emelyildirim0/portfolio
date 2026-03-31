export function getProfile(t) {
  return {
    name: "Emel Yıldırım",
    title: t.profileTitle,
    location: "Bursa, TR",
    highlights: [
      t.hlPlsql,
      t.hlEnterprise,
      t.hlCrm,
      t.hlData,
      t.hlWeb,
      t.hlDocs,
    ],
    focusAreas: [
      {
        title: t.focusDbTitle,
        desc: t.focusDbDesc,
        tags: ["Oracle 19c", "PL/SQL", "SQL", "MSSQL"],
      },
      {
        title: t.focusEnterpriseTitle,
        desc: t.focusEnterpriseDesc,
        tags: ["CRM", "Helpdesk", "Dashboard", "İş Kuralları"],
      },
      {
        title: t.focusWebTitle,
        desc: t.focusWebDesc,
        tags: ["REST", "React", "Node.js", "HTML/CSS"],
      },
    ],
  };
}

