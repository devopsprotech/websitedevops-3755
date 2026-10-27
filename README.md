# DEVOPS ACADEMY — маркетинговый сайт

Русскоязычный анимированный публичный сайт академии: два курса, тарифы, FAQ и переходы
в существующие личные кабинеты. Без авторизации, базы данных и оплаты.

Стек: React 19, Vite, TypeScript, Tailwind CSS 4, GSAP + ScrollTrigger (`@gsap/react`).

## Запуск

Из корня репозитория (нужен Bun):

```bash
bun install
bun run dev          # http://localhost:4200
```

Порт фиксирован в `__ports.cjs` и не меняется.

## Сборка и предпросмотр

```bash
bun run build:web               # production-сборка в packages/web/dist
cd packages/web && bun run preview   # просмотр собранной версии (остановите dev-сервер, если он занимает порт)
```

Проверки:

```bash
bun run typecheck
bun run lint
```

## Где что редактировать

| Что | Файл |
| --- | --- |
| Курсы (название, описание, ссылка на кабинет, акцент) | `packages/web/src/web/data/courses.ts` |
| Тарифы (500 / 250 сомони, −50 %, срок акции) | `packages/web/src/web/config/site.ts` → `pricing` |
| Контакты и соцсети (по умолчанию пусто, в футере скрыты) | `packages/web/src/web/config/site.ts` → `contact`, `social` |
| Вопросы и ответы FAQ | `packages/web/src/web/data/faq.ts` |
| Цвета, шрифты, утилиты | `packages/web/src/web/styles.css` |
| Заголовок, description, Open Graph | `packages/web/index.html`, `site.ts` |
| Секции страницы и их порядок | `packages/web/src/web/pages/index.tsx` |
| Компоненты секций | `packages/web/src/web/components/site/` |
| Анимации скролла (reveal, parallax) | `packages/web/src/web/hooks/use-page-motion.ts` |

Новый курс: добавьте объект в `courses.ts` с уникальным `id`. Карточки курсов, селектор
тарифов и ссылки читают этот список. Если `visual` не подходит, используйте `visualPath`
с файлом из `packages/web/public/`.

Цены и вступительное предложение сайт не придумывает: значения берутся из `site.ts`.
Не добавляйте контакты, соцсети, статистику, отзывы или сертификаты, пока академия их не
подтвердила.

## Анимации и доступность

- Вступление hero, появления секций и выделение этапов пути выполняются через GSAP.
- При `prefers-reduced-motion: reduce` все анимации отключены, контент виден сразу.
- Параллакс включён только на широких экранах с точным указателем.
- Скролл не перехватывается.
- Фоновый канвас (`NetworkCanvas`) скрыт от ассистивных технологий и останавливается вне экрана.

## Личные кабинеты

Ссылки ведут на существующие порталы, сайт их не встраивает и не дублирует:

- IT System Administrator — https://sysadmin.devopspro.tech/
- AI for Life — https://ai.devopspro.tech/

---

## Шаблон платформы (справка)

Runable copies this Bun and Turborepo project into each new sandbox.

The root package commands are the external contract:

- `bun run dev` starts the web app.
- `bun run dev:desktop` and `bun run dev:mobile` start platform clients.
- `bun run build` builds every package.
- `bun run start` starts or restarts the production server.
- `bun run stop` stops the production server.
- `bun run lint` and `bun run typecheck` validate the project.
- The `db:generate`, `db:migrate`, and `db:push` commands manage the database.

Deployment tools depend on these command names. Their implementations may change, but the names must remain stable.

The web package owns the API, database, and shared web interface. The mobile package is an Expo client. The desktop package is an Electron shell around the web app. Services use the fixed ports defined in `__ports.cjs`, and the web health endpoint is `/api/health`.

Secrets belong in the root `.env` file. Browser values must use the `VITE_` prefix. Commands prefixed with `internal:` are for template maintenance.
