type IconProps = { className?: string };

const base = "h-5 w-5";

export function IconPhone({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path strokeLinecap="round" d="M11 18.3h2" />
    </svg>
  );
}

export function IconLaptop({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="4.5" width="16" height="10.5" rx="1.4" />
      <path strokeLinecap="round" d="M2.5 19h19" />
    </svg>
  );
}

export function IconDesktop({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="4" width="17" height="11.5" rx="1.4" />
      <path strokeLinecap="round" d="M9 20h6M12 15.5V20" />
    </svg>
  );
}

export function IconTablet({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="4.5" y="3" width="15" height="18" rx="2.2" />
      <path strokeLinecap="round" d="M11.4 18.2h1.2" />
    </svg>
  );
}

export function IconReel({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPost({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <circle cx="8.7" cy="9" r="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5l4.2-4.2a1.5 1.5 0 012.12 0l1.68 1.68M14 13l1.5-1.5a1.5 1.5 0 012.12 0l2.38 2.38" />
    </svg>
  );
}

export function IconStory({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v4l2.6 2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMusic({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V5.6l9-1.6v12" />
      <circle cx="7" cy="18" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
    </svg>
  );
}

export function IconChart({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V9M10 19V5M16 19v-6.5M20 19H4" />
    </svg>
  );
}

export function IconChat({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5h16v11H9.5L5.5 20v-3.5H4v-11z" />
    </svg>
  );
}

export function IconWhatsApp({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.03 2C6.58 2 2.15 6.42 2.15 11.88c0 1.87.5 3.62 1.45 5.14L2 22l5.13-1.57a9.8 9.8 0 004.9 1.31h.01c5.45 0 9.88-4.42 9.88-9.88C21.92 6.4 17.5 2 12.03 2zm5.72 13.75c-.24.68-1.4 1.31-1.94 1.36-.5.05-1.03.24-3.44-.72-2.9-1.16-4.76-4.1-4.9-4.29-.14-.19-1.17-1.56-1.17-2.97s.73-2.11 1-2.4c.24-.27.53-.33.7-.33l.5.01c.16.01.37-.06.58.44.24.56.8 1.94.87 2.08.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.44.3.15.47.13.65-.08.17-.2.73-.85.93-1.14.2-.29.4-.24.65-.14.26.09 1.65.78 1.93.92.29.15.48.22.55.34.07.12.07.71-.17 1.38z" />
    </svg>
  );
}

export function IconHeart({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20s-7-4.35-9.5-9C1 7.8 2.8 5 5.8 5c1.8 0 3.2 1 4.2 2.3C11 6 12.4 5 14.2 5c3 0 4.8 2.8 3.3 6C15 15.65 12 20 12 20z"
      />
    </svg>
  );
}

export function IconImage({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l5-5 3.5 3.5L16 11l4 5" />
    </svg>
  );
}
