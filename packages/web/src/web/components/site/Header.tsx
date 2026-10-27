import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark, Wordmark } from "./Logo";

const navItems = [
  { href: "#top", label: "Главная" },
  { href: "#courses", label: "Курсы" },
  { href: "#learning", label: "Обучение" },
  { href: "#about", label: "О нас" },
  { href: "#faq", label: "FAQ" },
  { href: "#portals", label: "Личный кабинет" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-border bg-ink/95" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#top" onClick={close} className="flex items-center gap-3 rounded-md" aria-label="DEVOPS ACADEMY, на главную">
          <LogoMark className="size-8 shrink-0" />
          <Wordmark />
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mute transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#courses" className="btn btn-primary min-h-10 px-4 text-sm">
            Выбрать курс
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-border text-fg transition-colors hover:border-cyan lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-border bg-ink lg:hidden">
        <nav aria-label="Мобильная навигация" className="flex flex-col px-5 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex min-h-12 items-center border-b border-border text-base text-fg last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a href="#courses" onClick={close} className="btn btn-primary mt-4 mb-4">
            Выбрать курс
          </a>
        </nav>
      </div>
    </header>
  );
}
