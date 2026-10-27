import { courses } from "../../data/courses";
import { site } from "../../config/site";
import { LogoMark, Wordmark } from "./Logo";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="relative isolate overflow-hidden px-5 py-28 lg:px-8 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="mx-auto max-w-4xl text-center">
        <h2 id="final-title" data-reveal className="h-section text-[clamp(2rem,5.6vw,4.5rem)]">
          Твоё будущее в IT начинается сегодня.
        </h2>
        <div data-reveal className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#courses" className="btn btn-primary">
            Выбрать курс
          </a>
          <a href="#portals" className="btn btn-ghost">
            Личный кабинет
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { contact, social } = site;
  const contactItems = [
    contact.email ? { label: contact.email, href: `mailto:${contact.email}` } : null,
    contact.phone ? { label: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` } : null,
    contact.address ? { label: contact.address, href: null } : null,
  ].filter(Boolean) as { label: string; href: string | null }[];

  return (
    <footer className="border-t border-border px-5 pt-16 pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 md:grid-cols-[minmax(0,1fr)]2">
        <div className="md:col-span-4">
          <a href="#top" className="inline-flex items-center gap-3 rounded-md">
            <LogoMark className="size-8" />
            <Wordmark />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">
            Учись. Практикуйся. Расти в IT. Практическое обучение системному администрированию, инфраструктуре и
            искусственному интеллекту.
          </p>
        </div>

        <nav aria-label="Курсы" className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">Курсы</p>
          <ul className="mt-4 space-y-3">
            {courses.map((c) => (
              <li key={c.id}>
                <a href={c.destination} className="text-sm text-fg transition-colors hover:text-cyan">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Разделы сайта" className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">Сайт</p>
          <ul className="mt-4 space-y-3">
            {[
              { href: "#courses", label: "Курсы" },
              { href: "#learning", label: "Обучение" },
              { href: "#pricing", label: "Стоимость" },
              { href: "#faq", label: "FAQ" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-fg transition-colors hover:text-cyan">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          {contactItems.length > 0 || social.length > 0 ? (
            <>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">Контакты</p>
              <ul className="mt-4 space-y-3">
                {contactItems.map((c) => (
                  <li key={c.label} className="text-sm text-fg">
                    {c.href ? (
                      <a href={c.href} className="transition-colors hover:text-cyan">
                        {c.label}
                      </a>
                    ) : (
                      c.label
                    )}
                  </li>
                ))}
                {social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-fg transition-colors hover:text-cyan">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-border pt-6 text-xs text-mute sm:flex-row sm:justify-between">
        <p>© {site.year} DEVOPS ACADEMY. Все права защищены.</p>
        <p>Публичный сайт. Студенческие порталы работают отдельно.</p>
      </div>
    </footer>
  );
}
