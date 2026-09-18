import Image from "next/image";

export default function ZoriaLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Zoria"
      width={64}
      height={64}
      className={`${className} object-contain`}
      priority
    />
  );
}
