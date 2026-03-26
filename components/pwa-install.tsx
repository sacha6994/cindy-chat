"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isIos, setIsIos] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {})
    }

    // Check iOS
    const ua = navigator.userAgent
    const isApple = /iphone|ipad|ipod/i.test(ua)
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches
      || ("standalone" in navigator && (navigator as unknown as { standalone: boolean }).standalone)
    setIsIos(isApple && !isStandalone)

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }
    window.addEventListener("beforeinstallprompt", handler)

    // Show banner after delay
    const timer = setTimeout(() => {
      const wasDismissed = sessionStorage.getItem("pwa-dismissed")
      if (!wasDismissed && !isStandalone) setShowBanner(true)
    }, 8000)

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
      clearTimeout(timer)
    }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setShowBanner(false)
      }
      setDeferredPrompt(null)
    }
  }

  const handleDismiss = () => {
    setDismissed(true)
    setShowBanner(false)
    sessionStorage.setItem("pwa-dismissed", "1")
  }

  if (dismissed || !showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed bottom-20 sm:bottom-24 left-4 right-4 sm:left-auto sm:right-6 z-50 sm:max-w-sm"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-warm-100 p-4 sm:p-5">
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-warm-100 hover:bg-warm-200 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="h-3.5 w-3.5 text-warm-600" />
          </button>

          <div className="flex items-start gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-gold/15 flex items-center justify-center flex-shrink-0">
              <Smartphone className="h-5 w-5 text-primary" />
            </div>
            <div className="pr-6">
              <p className="font-semibold text-foreground text-sm">
                Installer l&apos;application
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Acces rapide depuis votre ecran d&apos;accueil
              </p>
            </div>
          </div>

          {deferredPrompt ? (
            <Button
              onClick={handleInstall}
              className="w-full rounded-full h-10 bg-primary hover:bg-primary/90 text-white text-sm font-medium active:scale-[0.98] transition-all"
            >
              <Download className="h-4 w-4 mr-2" />
              Installer gratuitement
            </Button>
          ) : isIos ? (
            <div className="bg-warm-50 rounded-xl p-3 text-xs text-muted-foreground leading-relaxed">
              Appuyez sur{" "}
              <span className="inline-flex items-center justify-center w-5 h-5 bg-white rounded border border-warm-200 text-[10px] mx-0.5 align-middle">
                ⬆
              </span>{" "}
              puis <strong>&laquo; Sur l&apos;ecran d&apos;accueil &raquo;</strong> pour installer
            </div>
          ) : (
            <p className="text-xs text-muted-foreground text-center">
              Ouvrez ce site dans Chrome ou Safari pour l&apos;installer
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
