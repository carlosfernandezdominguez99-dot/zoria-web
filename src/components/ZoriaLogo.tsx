import Image from "next/image";

export default function ZoriaLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/logo.png"
        alt="Zoria"
        fill
        sizes="64px"
        className="object-contain"
        priority
      />
    </span>
  );
}
