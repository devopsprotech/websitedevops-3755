interface LogoProps {
  className?: string;
}

// Original mark: three linked nodes inside a square. Wordmark is typographic.
export function LogoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="30" height="30" rx="7" fill="#0B1220" stroke="#0F47AD" strokeWidth="1.5" />
      <path d="M9 22 L16 9 L23 22" fill="none" stroke="#3B82F6" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="9" cy="22" r="2.2" fill="#22D3EE" />
      <circle cx="16" cy="9" r="2.2" fill="#22D3EE" />
      <circle cx="23" cy="22" r="2.2" fill="#8B5CF6" />
    </svg>
  );
}

export function Wordmark({ className }: LogoProps) {
  return (
    <span className={className} style={{ fontFamily: "var(--font-display)" }}>
      <span className="block text-[13px] font-bold tracking-[0.12em] text-fg">DEVOPS ACADEMY</span>
    </span>
  );
}
