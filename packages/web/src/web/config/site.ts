// Site-wide configuration. Edit values here; components read from this file.
// Do not place secrets here — this file ships to the browser.

export const site = {
  name: "DEVOPS ACADEMY",
  title: "DEVOPS ACADEMY — Практическое обучение IT и искусственному интеллекту",
  description:
    "DEVOPS ACADEMY — практическое обучение системному администрированию, IT-инфраструктуре и искусственному интеллекту. Лекции, лабораторные работы и реальные проекты.",
  year: 2026,

  // Enrollment / contact. Leave a value as null to hide it from the footer.
  // Nothing is invented here: fill these in only with verified academy contacts.
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },

  // Social links. Add entries only when the academy supplies them.
  social: [] as { label: string; href: string }[],

  // Introductory pricing (from the current academy offer).
  pricing: {
    currency: "сомони",
    regularMonthly: 500,
    introFirstMonth: 250,
    discountPercent: 50,
    offerEnds: "до Нового года",
  },
} as const;
