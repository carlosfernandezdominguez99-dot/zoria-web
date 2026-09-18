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
