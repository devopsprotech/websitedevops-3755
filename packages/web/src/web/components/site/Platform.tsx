import { ArrowUpRight, BarChart3, BookOpen, CheckCircle2, ClipboardList, FlaskConical, Home } from "lucide-react";
import { courses } from "../../data/courses";

const features = [
  { label: "Лекции", Icon: BookOpen },
  { label: "Лабораторные работы", Icon: FlaskConical },
  { label: "Тесты и квизы", Icon: ClipboardList },
  { label: "Домашние задания", Icon: Home },
  { label: "Отслеживание прогресса", Icon: BarChart3 },
];

function MockFrame({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <figure data-reveal className={`overflow-hidden rounded-2xl border border-border bg-ink-2 ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-mute/30" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-mute/30" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-mute/30" aria-hidden="true" />
        <span className="ml-3 font-mono text-[11px] tracking-wide text-mute">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </figure>
  );
}

function LessonMock() {
  return (
    <MockFrame title="lecture / 03-networks">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan">Лекция 3</p>
      <p className="mt-2 font-display text-base font-bold uppercase text-fg">Маршрутизация</p>
      <div className="mt-4 space-y-2.5" aria-hidden="true">
        <div className="h-2 w-full rounded bg-mute/20" />
        <div className="h-2 w-11/12 rounded bg-mute/20" />
        <div className="h-2 w-4/5 rounded bg-mute/20" />
      </div>
      <div className="mt-5 rounded-lg border border-border bg-ink p-3 font-mono text-xs leading-relaxed text-mute">
        <span className="text-cyan">$</span> ip route show
        <br />
        default via 10.0.0.1 dev eth0
      </div>
    </MockFrame>
  );
}

function LabMock() {
  return (
    <MockFrame title="lab / nginx-service">
      <div className="space-y-1.5 rounded-lg bg-ink p-4 font-mono text-xs leading-relaxed text-mute">
        <p>
          <span className="text-cyan">$</span> sudo systemctl status nginx
        </p>
        <p className="text-fg">● nginx.service — A high performance web server</p>
        <p>
          Active: <span className="text-emerald-400">active (running)</span>
        </p>
        <p>
          <span className="text-cyan">$</span> <span className="animate-pulse">_</span>
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-mute">
        <span>Задание 2 из 5</span>
        <span className="text-cyan">Проверка пройдена</span>
      </div>
    </MockFrame>
  );
}

function QuizMock() {
  const options = ["ss -tulpn", "cat /etc/hosts", "df -h"];
  return (
    <MockFrame title="quiz / linux-basics">
      <div className="flex items-center justify-between text-xs text-mute">
        <span>Вопрос 3 / 10</span>
        <span className="font-mono">60%</span>
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-mute/15" aria-hidden="true">
        <div className="h-full w-[60%] rounded-full bg-electric" />
      </div>
      <p className="mt-5 text-sm font-semibold text-fg">Какая команда показывает слушающие TCP/UDP-порты?</p>
      <ul className="mt-4 space-y-2">
        {options.map((o, i) => (
          <li
            key={o}
            className={`flex items-center justify-between rounded-lg border px-3 py-2.5 font-mono text-xs ${
              i === 0 ? "border-cyan/60 bg-cyan/5 text-fg" : "border-border text-mute"
            }`}
          >
            {o}
            {i === 0 ? <CheckCircle2 className="size-4 text-cyan" aria-hidden="true" /> : null}
          </li>
        ))}
      </ul>
    </MockFrame>
  );
}

function DashboardMock() {
  const rows = [
    { name: "Linux и файловые системы", value: 80 },
    { name: "Сети", value: 45 },
    { name: "Информационная безопасность", value: 20 },
  ];
  return (
    <MockFrame title="dashboard / student">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-mute">Общий прогресс · пример</p>
          <p className="mt-1 font-display text-3xl font-bold text-fg">48%</p>
        </div>
        <div className="flex h-14 items-end gap-1.5" aria-hidden="true">
          {[30, 55, 40, 70, 60, 85].map((h, i) => (
            <span key={i} className="w-2.5 rounded-sm bg-gradient-to-t from-electric to-cyan" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <ul className="mt-6 space-y-4">
        {rows.map((r) => (
          <li key={r.name}>
            <div className="flex justify-between text-xs text-mute">
              <span>{r.name}</span>
              <span className="font-mono">{r.value}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mute/15" aria-hidden="true">
              <div className="h-full rounded-full bg-violet" style={{ width: `${r.value}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </MockFrame>
  );
}

export function Platform() {
  return (
    <section id="learning" aria-labelledby="platform-title" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)]2 lg:gap-16">
          <div className="lg:col-span-5">
            <p data-reveal className="eyebrow">Обучение</p>
            <h2 id="platform-title" data-reveal className="h-section mt-5">
              Всё для обучения — в одном пространстве.
            </h2>
            <ul data-reveal className="mt-8 divide-y divide-border border-y border-border">
              {features.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-4 py-4 text-base text-fg">
                  <Icon className="size-5 text-cyan" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            <LessonMock />
            <div className="sm:mt-10">
              <LabMock />
            </div>
            <QuizMock />
            <div className="sm:mt-10">
              <DashboardMock />
            </div>
          </div>
        </div>

        <p data-reveal className="mt-6 text-xs text-mute">
          Иллюстрации — демонстрационные превью интерфейса, а не снимки работающего портала и не подключены к нему.
        </p>

        <div id="portals" className="mt-20 scroll-mt-28 border-t border-border pt-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p data-reveal className="eyebrow">Личный кабинет</p>
              <h3 data-reveal className="h-section mt-4 text-[clamp(1.5rem,3.2vw,2.5rem)]">
                Выберите курс — у каждого свой кабинет.
              </h3>
            </div>
            <p data-reveal className="max-w-sm text-sm text-mute">
              Личный кабинет — отдельное пространство каждого курса. Этот сайт не авторизует студентов.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courses.map((course) => (
              <a
                key={course.id}
                data-reveal
                href={course.destination}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-ink-2 p-6 transition-colors duration-300 hover:border-cyan/50 sm:p-8"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">{course.category}</p>
                  <p className="mt-2 font-display text-lg font-bold uppercase text-fg">{course.name}</p>
                  <p className="mt-1 text-sm text-mute">Открыть личный кабинет</p>
                </div>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-fg transition-colors group-hover:border-cyan group-hover:text-cyan">
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <a href="#portals" className="btn btn-primary">
              Открыть личный кабинет
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
