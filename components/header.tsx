"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#elevage", label: "L'Elevage" },
  { href: "#chatons", label: "Nos Chatons" },
  { href: "#temoignages", label: "Temoignages" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
            🐾
          </span>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-wide transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              Les Geants de Velours
            </span>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : "text-white/60"
            }`}>
              Elevage Maine Coon
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <Link
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  scrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-2/3 ${
                  scrolled ? "bg-primary" : "bg-white"
                }`} />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="sm"
              className={`ml-4 rounded-full px-6 font-semibold transition-all duration-500 ${
                scrolled
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              }`}
              asChild
            >
              <Link href="#contact">Adopter</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`lg:hidden transition-colors ${scrolled ? "" : "text-white hover:bg-white/10"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className="block text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all font-medium py-3 px-4 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button className="mt-4 rounded-full" asChild>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Adopter un chaton
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
