import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "../../lib/gsap";
import { NetworkCanvas } from "./NetworkCanvas";

const headlineWords = ["БУДУЩЕЕ", "IT", "—", "В", "ТВОИХ", "РУКАХ."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero='eyebrow']", { autoAlpha: 0, y: 10, duration: 0.6 })
          .from("[data-hero='word']", { yPercent: 105, duration: 0.9, stagger: 0.07 }, "-=0.35")
          .from("[data-hero='text']", { autoAlpha: 0, y: 14, duration: 0.7 }, "-=0.6")
          .from("[data-hero='action']", { autoAlpha: 0, y: 10, duration: 0.6, stagger: 0.08 }, "-=0.5")
          .from("[data-hero='visual']", { autoAlpha: 0, scale: 0.96, duration: 1.3, ease: "power2.out" }, "-=1.1");
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-28 pb-16 lg:min-h-svh lg:pt-32 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[620px] rounded-full bg-brand/25 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8">
        <div className="max-w-2xl">
          <p data-hero="eyebrow" className="eyebrow">
            DEVOPS ACADEMY · ПРАКТИЧЕСКОЕ IT-ОБУЧЕНИЕ
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(2.1rem,6.2vw,4.9rem)] leading-[1.02] font-bold tracking-[-0.02em] text-fg uppercase"
          >
            {headlineWords.map((word, i) => (
              <span key={`${word}-${i}`}>
                <span className="inline-block overflow-hidden align-top pb-[0.08em]">
                  <span data-hero="word" className="inline-block">
                    {word}
                  </span>
                </span>
                {i < headlineWords.length - 1 ? " " : null}
              </span>
            ))}
          </h1>

          <p data-hero="text" className="mt-7 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Осваивай системное администрирование и искусственный интеллект через практику, реальные проекты и
            современные технологии.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a data-hero="action" href="#courses" className="btn btn-primary">
              Изучить программы
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a data-hero="action" href="#portals" className="btn btn-ghost">
              Личный кабинет
            </a>
          </div>
        </div>

        <div data-hero="visual" className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:aspect-square">
          <NetworkCanvas className="absolute inset-0" />
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute inset-0 size-full"
          >
            <ellipse cx="200" cy="200" rx="180" ry="72" fill="none" stroke="rgba(59,130,246,0.28)" strokeWidth="1" transform="rotate(-18 200 200)" />
            <ellipse cx="200" cy="200" rx="150" ry="110" fill="none" stroke="rgba(139,92,246,0.22)" strokeWidth="1" transform="rotate(12 200 200)" strokeDasharray="2 6" />
            <circle cx="200" cy="200" r="58" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
            <circle cx="200" cy="200" r="4" fill="#22D3EE" />
          </svg>
        </div>
      </div>
    </section>
  );
}
