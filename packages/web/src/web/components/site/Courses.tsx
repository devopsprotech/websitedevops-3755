import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { courses, type Course, type CourseVisual } from "../../data/courses";

function CourseIllustration({ variant }: { variant: CourseVisual }) {
  if (variant === "neural") {
    return (
      <svg viewBox="0 0 400 300" className="size-full" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="ai-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="1" stopColor="#22D3EE" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {[80, 150, 220].flatMap((y1) =>
          [60, 120, 180, 240].map((y2) => (
            <line key={`in-${y1}-${y2}`} x1={70} y1={y1} x2={200} y2={y2} stroke="url(#ai-line)" strokeOpacity="0.35" strokeWidth="1" />
          )),
        )}
        {[60, 120, 180, 240].map((y, i) => (
          <line key={`out-${y}`} x1={200} y1={y} x2={330} y2={i % 2 ? 100 : 200} stroke="#8B5CF6" strokeOpacity="0.4" strokeWidth="1" />
        ))}
        {[[70, 80], [70, 150], [70, 220]].map(([cx, cy]) => (
          <circle key={`in-${cy}`} cx={cx} cy={cy} r="6" fill="#22D3EE" />
        ))}
        {[[200, 60], [200, 120], [200, 180], [200, 240]].map(([cx, cy]) => (
          <circle key={`h-${cy}`} cx={cx} cy={cy} r="7" fill="#070B14" stroke="#8B5CF6" strokeWidth="1.5" />
        ))}
        {[[330, 100], [330, 200]].map(([cx, cy]) => (
          <circle key={`o-${cy}`} cx={cx} cy={cy} r="9" fill="#8B5CF6" fillOpacity="0.25" stroke="#22D3EE" strokeWidth="1.5" />
        ))}
        <circle cx="200" cy="150" r="118" fill="none" stroke="rgba(139,92,246,0.18)" strokeDasharray="3 7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 300" className="size-full" aria-hidden="true" focusable="false">
      <pattern id="infra-grid" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />
      </pattern>
      <rect width="400" height="300" fill="url(#infra-grid)" />
      {[0, 1, 2].map((i) => {
        const y = 62 + i * 52;
        return (
          <g key={i}>
            <rect x="120" y={y} width="160" height="38" rx="5" fill="rgba(15,71,173,0.28)" stroke="#3B82F6" strokeOpacity="0.8" />
            {[0, 1, 2, 3].map((k) => (
              <line key={k} x1="132" x2="200" y1={y + 12 + k * 6} y2={y + 12 + k * 6} stroke="rgba(148,163,184,0.25)" strokeWidth="1" />
            ))}
            <circle cx="262" cy={y + 19} r="3.5" fill={i === 1 ? "#22D3EE" : "#3B82F6"} />
          </g>
        );
      })}
      <path d="M120 81 H70 V200 H120" fill="none" stroke="#3B82F6" strokeOpacity="0.55" strokeWidth="1.2" />
      <path d="M280 133 H330 V200 H280" fill="none" stroke="#3B82F6" strokeOpacity="0.55" strokeWidth="1.2" />
      <circle cx="70" cy="200" r="5" fill="#070B14" stroke="#22D3EE" strokeWidth="1.5" />
      <circle cx="330" cy="200" r="5" fill="#070B14" stroke="#22D3EE" strokeWidth="1.5" />
      <path d="M200 215 V270" stroke="rgba(59,130,246,0.5)" strokeWidth="1.2" strokeDasharray="4 4" />
      <circle cx="200" cy="275" r="4" fill="#3B82F6" />
    </svg>
  );
}

function CourseCard({ course }: { course: Course }) {
  const style = { "--accent": course.accent } as CSSProperties;
  return (
    <article
      data-reveal
      style={style}
      className="course-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-ink-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-ink">
        <div data-parallax className="absolute inset-[-6%]">
          <div className="course-visual size-full">
            {course.visualPath ? (
              <img
                src={course.visualPath}
                alt=""
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            ) : (
              <CourseIllustration variant={course.visual} />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="font-mono text-xs tracking-[0.12em] uppercase" style={{ color: course.accent }}>
          {course.category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold uppercase text-fg">{course.name}</h3>
        <p className="mt-3 text-lg font-semibold text-fg">{course.headline}</p>
        <p className="mt-3 text-base leading-relaxed text-mute">{course.description}</p>

        <div className="mt-auto pt-8">
          <a href={course.destination} className="btn btn-ghost w-full sm:w-auto">
            {course.ctaLabel}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-5 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p data-reveal className="eyebrow">Курсы</p>
            <h2 id="courses-title" data-reveal className="h-section mt-5">
              Два направления. Одна практика.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-base text-mute">
            Выберите направление и перейдите на его страницу: там программа, требования и личный кабинет курса.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
