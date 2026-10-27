// Typed course data. Add a course by appending an entry; every course surface
// (course cards, pricing selector, portal links, footer) reads from this list.

export type CourseVisual = "infrastructure" | "neural";

export interface CourseMeta {
  duration?: string;
  level?: string;
  format?: string;
}

export interface Course {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  /** Built-in illustration key. */
  visual: CourseVisual;
  /** Optional raster/SVG asset in packages/web/public, e.g. "/images/course-x.svg". */
  visualPath?: string;
  /** Hex accent used for borders, labels and highlights. */
  accent: string;
  /** Existing student portal for this course. */
  destination: string;
  ctaLabel: string;
  /** Optional future metadata. Do not fill in values that are not confirmed. */
  meta?: CourseMeta;
}

export const courses: Course[] = [
  {
    id: "it-system-administrator",
    name: "IT System Administrator",
    category: "Системное администрирование",
    headline: "Управляй IT-инфраструктурой.",
    description:
      "Освой операционные системы, сети, Linux, серверные технологии и основы информационной безопасности. Получай практические навыки, необходимые для работы системным администратором.",
    visual: "infrastructure",
    accent: "#3B82F6",
    destination: "https://sysadmin.devopspro.tech/",
    ctaLabel: "Подробнее о курсе",
  },
  {
    id: "ai-for-life",
    name: "AI for Life",
    category: "Искусственный интеллект",
    headline: "Используй возможности AI.",
    description:
      "Научись эффективно работать с искусственным интеллектом, создавать полезные проекты и применять современные AI-инструменты в учёбе, работе и повседневной жизни.",
    visual: "neural",
    accent: "#8B5CF6",
    destination: "https://ai.devopspro.tech/",
    ctaLabel: "Подробнее о курсе",
  },
];
