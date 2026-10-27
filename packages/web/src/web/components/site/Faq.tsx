import { Plus } from "lucide-react";
import { faq } from "../../data/faq";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)]2 lg:gap-16">
        <div className="lg:col-span-4">
          <p data-reveal className="eyebrow">FAQ</p>
          <h2 id="faq-title" data-reveal className="h-section mt-5">
            Частые вопросы
          </h2>
          <p data-reveal className="mt-6 text-base text-mute">
            Не нашли ответ? Уточните детали на странице выбранного курса.
          </p>
        </div>

        <div className="lg:col-span-8">
          {faq.map((item, i) => (
            <details
              key={item.question}
              data-reveal
              name="faq"
              className="faq-item group border-t border-border last:border-b"
              open={i === 0}
            >
              <summary className="flex min-h-14 items-center justify-between gap-6 py-5 text-left text-base font-semibold text-fg transition-colors hover:text-cyan sm:text-lg">
                <span>{item.question}</span>
                <span className="faq-icon flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-cyan">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <div className="pr-14 pb-6 text-base leading-relaxed text-mute">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
