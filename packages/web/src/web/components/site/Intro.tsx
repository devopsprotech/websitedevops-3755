import { BookOpen, Hammer, Wrench } from "lucide-react";

const principles = [
  {
    n: "01",
    title: "Изучай",
    text: "Лекции объясняют, как устроены системы, сети и инструменты, и связывают теорию с работой инженера.",
    Icon: BookOpen,
  },
  {
    n: "02",
    title: "Практикуйся",
    text: "Лабораторные работы повторяют задачи, с которыми сталкивается администратор и разработчик в реальной работе.",
    Icon: Wrench,
  },
  {
    n: "03",
    title: "Создавай",
    text: "Проекты превращают отдельные навыки в законченные решения, которые можно показать.",
    Icon: Hammer,
  },
];

export function Intro() {
  return (
    <section id="about" aria-labelledby="intro-title" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)]2 lg:gap-16">
          <div className="lg:col-span-5">
            <p data-reveal className="eyebrow">О нас</p>
            <h2 id="intro-title" data-reveal className="h-section mt-5">
              Не просто теория. Реальные навыки.
            </h2>
            <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-mute">
              DEVOPS ACADEMY — практическое обучение в системном администрировании, IT-инфраструктуре и
              искусственном интеллекте. Академия показывает, как применять знания, а не только запоминать их.
            </p>
          </div>

          <ol className="grid gap-5 lg:col-span-7">
            {principles.map(({ n, title, text, Icon }, i) => (
              <li
                key={n}
                data-reveal
                className={`group flex gap-6 rounded-2xl border border-border bg-ink-2/60 p-6 transition-colors duration-500 hover:border-cyan/40 sm:p-8 ${
                  i === 1 ? "lg:ml-12" : i === 2 ? "lg:ml-24" : ""
                }`}
              >
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <span className="font-mono text-xs text-mute">{n}</span>
                  <span className="flex size-11 items-center justify-center rounded-lg border border-border text-cyan transition-colors group-hover:border-cyan/50">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-fg">{title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-mute">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
