import { useRef } from "react";
import { BookOpen, FolderKanban, TerminalSquare, TrendingUp, type LucideIcon } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap";

const stages: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Обучение", text: "Лекции и теория выбранного направления — база, на которую опирается всё остальное.", Icon: BookOpen },
  { title: "Практика", text: "Лабораторные работы на реальных сценариях: команды, сервисы, настройка и проверка.", Icon: TerminalSquare },
  { title: "Проекты", text: "Самостоятельные работы, где отдельные навыки складываются в законченное решение.", Icon: FolderKanban },
  { title: "Развитие", text: "Постепенное наращивание навыков: от курса к курсу и от задания к задаче.", Icon: TrendingUp },
];

export function Journey() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const list = ref.current?.querySelector<HTMLElement>("[data-journey-list]");
        const progress = ref.current?.querySelector<HTMLElement>("[data-journey-progress]");
        if (list && progress) {
          gsap.fromTo(
            progress,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: list, start: "top 65%", end: "bottom 55%", scrub: true },
            },
          );
        }
        gsap.utils.toArray<HTMLElement>("[data-stage]").forEach((stage) => {
          ScrollTrigger.create({
            trigger: stage,
            start: "top 60%",
            end: "bottom 40%",
            toggleClass: "is-current",
          });
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-labelledby="journey-title" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p data-reveal className="eyebrow">Путь студента</p>
          <h2 id="journey-title" data-reveal className="h-section mt-5">
            От первого шага к реальным проектам.
          </h2>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-[15px] w-px bg-border md:left-[27px]">
            <div data-journey-progress className="absolute inset-0 origin-top bg-gradient-to-b from-electric via-cyan to-violet" />
          </div>

          <ol data-journey-list className="space-y-6 md:space-y-10">
            {stages.map(({ title, text, Icon }, i) => (
              <li key={title} data-stage className="stage relative grid gap-6 pl-12 md:grid-cols-[1fr_1.2fr] md:gap-12 md:pl-16">
                <span
                  aria-hidden="true"
                  className="stage-dot absolute top-2 left-[11px] size-2.5 rounded-full border border-cyan/60 bg-ink md:left-[23px]"
                />
                <div className="rounded-2xl border border-border bg-ink-2/70 p-6 sm:p-8">
                  <p className="font-mono text-xs text-mute">{String(i + 1).padStart(2, "0")} / 04</p>
                  <h3 className="mt-3 font-display text-2xl font-bold uppercase text-fg md:text-3xl">{title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-mute">{text}</p>
                </div>
                <div data-reveal className="flex items-center justify-center rounded-2xl border border-border bg-ink-2 p-8">
                  <div className="relative flex size-28 items-center justify-center sm:size-36">
                    <span className="absolute inset-0 rounded-full border border-dashed border-electric/40" aria-hidden="true" />
                    <span className="absolute inset-4 rounded-full border border-violet/30" aria-hidden="true" />
                    <Icon className="size-10 text-cyan sm:size-12" aria-hidden="true" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
