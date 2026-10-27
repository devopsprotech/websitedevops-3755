import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { courses } from "../../data/courses";
import { site } from "../../config/site";

export function Pricing() {
  const [selectedId, setSelectedId] = useState(courses[0]?.id ?? "");
  const selected = courses.find((c) => c.id === selectedId) ?? courses[0];
  const { currency, regularMonthly, introFirstMonth, discountPercent, offerEnds } = site.pricing;

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p data-reveal className="eyebrow">Стоимость и запись</p>
          <h2 id="pricing-title" data-reveal className="h-section mt-5">
            Твой следующий шаг в IT начинается здесь.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)]2">
          <div data-reveal className="rounded-2xl border border-border bg-ink-2 p-7 sm:p-10 lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">Вступительная акция · {offerEnds}</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm text-mute">Обычная стоимость в месяц</p>
                <p className="mt-2 font-display text-4xl font-bold text-mute line-through decoration-mute/60">
                  {regularMonthly}
                </p>
                <p className="mt-1 text-sm text-mute">{currency} / месяц</p>
              </div>

              <div>
                <p className="flex items-center gap-3 text-sm text-mute">
                  Первый месяц
                  <span className="rounded-full border border-cyan/50 px-2.5 py-0.5 font-mono text-xs text-cyan">
                    −{discountPercent}%
                  </span>
                </p>
                <p className="mt-2 font-display text-5xl font-bold text-fg">{introFirstMonth}</p>
                <p className="mt-1 text-sm text-fg">{currency} за первый месяц</p>
              </div>
            </div>

            <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-mute">
              {introFirstMonth} {currency} — вступительная цена только за первый месяц. Это не ежемесячная стоимость
              обучения.
            </p>
          </div>

          <div data-reveal className="flex flex-col rounded-2xl border border-border bg-ink-2 p-7 sm:p-10 lg:col-span-5">
            <fieldset>
              <legend className="font-display text-lg font-bold uppercase text-fg">Выберите курс</legend>
              <div className="mt-5 space-y-3">
                {courses.map((course) => {
                  const checked = course.id === selected?.id;
                  return (
                    <label
                      key={course.id}
                      htmlFor={`course-${course.id}`}
                      className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-colors duration-300 ${
                        checked ? "border-cyan/60 bg-cyan/5" : "border-border hover:border-mute/50"
                      }`}
                    >
                      <input
                        id={`course-${course.id}`}
                        type="radio"
                        name="course"
                        value={course.id}
                        checked={checked}
                        onChange={() => setSelectedId(course.id)}
                        aria-label={course.name}
                        className="mt-1 size-4 accent-cyan"
                      />
                      <span>
                        <span className="block font-semibold text-fg">{course.name}</span>
                        <span className="block text-sm text-mute">{course.category}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-auto pt-8">
              {selected ? (
                <a href={selected.destination} className="btn btn-primary w-full">
                  Перейти к выбранному курсу
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              ) : null}
              <p className="mt-4 text-xs leading-relaxed text-mute">
                Кнопка открывает страницу выбранного курса. На этом сайте не создаётся аккаунт и не проводится оплата.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
