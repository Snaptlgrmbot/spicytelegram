import Image from "next/image"

interface SpiiceLogoProps {
  className?: string
}

export function SpiiceLogo({ className }: SpiiceLogoProps) {
  return (
    <Image src="/spiice-logo.png" alt="Spiice — Rencontres locales" width={120} height={48} className={className} />
  )
}
