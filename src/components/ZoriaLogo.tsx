import Image from "next/image";

export default function ZoriaLogo({ className = "h-9 w-9" }: { className?: string }) {
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
