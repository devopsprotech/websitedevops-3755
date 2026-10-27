const points = [
  { title: "Практико-ориентированное обучение", text: "Теория сразу закрепляется на практике, а не остаётся в конспекте." },
  { title: "Лабораторные задания и проекты", text: "Задания на настоящих системах и сценариях, с проверкой результата." },
  { title: "Современные IT-инструменты", text: "Работа с инструментами, которые используются в профессии сегодня." },
  { title: "Единая образовательная платформа", text: "Лекции, лабораторные, тесты и прогресс собраны в одном кабинете курса." },
  { title: "Последовательное развитие навыков", text: "От основ к самостоятельным проектам — без скачков и пробелов." },
];

export function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)]2 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p data-reveal className="eyebrow">Почему академия</p>
            <h2 id="why-title" data-reveal className="h-section mt-5">
              Технологии осваивают на практике.
            </h2>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {points.map((p, i) => (
            <li key={p.title} data-reveal className="group grid grid-cols-[clamp(3.25rem,6vw,5.5rem)_minmax(0,1fr)] gap-x-6 border-t border-border py-7 last:border-b sm:gap-x-10 sm:py-9">
              <span className="outline-num font-display text-4xl leading-none font-bold sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-fg transition-colors duration-300 group-hover:text-cyan">
                  {p.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-mute">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
