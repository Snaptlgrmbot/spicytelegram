"use client"

import { Shield, MapPin, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SpiiceLogo } from "@/components/spiice-logo"
import Image from "next/image"
import { useState, useEffect } from "react"

export function LandingSection() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-[420px] space-y-8">
          {/* Combined Logo */}
          <div className="flex justify-center">
            <Image
              src="/spiice-spicy-combined-logo.png"
              alt="Spiice x Spicy Memes"
              width={240}
              height={240}
              className="h-48 w-auto"
            />
          </div>

          {/* H1 */}
          <h1 className="text-balance text-center text-[32px] font-bold leading-tight tracking-tight text-foreground">
            Rencontre sans tabou dans ta ville
          </h1>

          {/* Subtitle */}
          <p className="text-center text-base text-muted-foreground">Discret & sans engagement · 18+</p>

          {/* Primary CTA */}
          <div className="space-y-2">
            <a
              href="https://tinyurl.com/spicyybio"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="h-auto w-full rounded-full bg-gradient-to-r from-primary to-accent px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Inscris-toi en moins de 30s — Offre 24h
              </Button>
            </a>

            {/* Mini badge logo */}
            <div className="flex justify-center mt-3">
              <SpiiceLogo className="h-4 w-auto opacity-60" />
            </div>
          </div>

          {/* Bullets list */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6 mt-6">
            <div className="flex items-center justify-center gap-2 text-sm text-foreground">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span>Anti-fake</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>Proche de toi</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground">
              <EyeOff className="h-5 w-5 text-muted-foreground" />
              <span>Profil privé</span>
            </div>
          </div>

          {/* Micro social proof */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <p className="text-center text-sm text-muted">+500 connectés en ce moment sur Spiice</p>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 p-4 backdrop-blur-sm transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-[420px]">
          <a
            href="https://tinyurl.com/spicyybio"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              size="lg"
              className="h-auto w-full rounded-full bg-gradient-to-r from-primary to-accent px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25"
            >
              Inscris-toi en moins de 30s — Offre 24h
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}
