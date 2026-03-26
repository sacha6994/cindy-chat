import Link from "next/link"
import { Heart, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-100 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-gold to-primary" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                🐾
              </span>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Les Geants de Velours
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-warm-400">
                  Elevage Maine Coon
                </span>
              </div>
            </Link>
            <p className="text-warm-400 text-sm leading-relaxed max-w-sm mb-6">
              Elevage familial de Maine Coons depuis 2015 en Bretagne.
              Nos chatons grandissent dans un cocon d&apos;amour et de douceur,
              pour devenir vos plus fideles compagnons.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-warm-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-warm-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm text-warm-400">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#elevage", label: "Notre elevage" },
                { href: "#chatons", label: "Nos chatons" },
                { href: "#temoignages", label: "Temoignages" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Informations</h4>
            <ul className="space-y-3 text-sm text-warm-400">
              <li>SIRET : 123 456 789 00012</li>
              <li>N° Eleveur LOOF : 123456</li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mentions legales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Politique de confidentialite
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-500">
            &copy; 2026 Les Geants de Velours. Tous droits reserves.
          </p>
          <p className="text-xs text-warm-500 flex items-center gap-1.5">
            Fait avec{" "}
            <Heart className="h-3 w-3 fill-rose-warm text-rose-warm inline" />{" "}
            pour nos felins
          </p>
        </div>
      </div>
    </footer>
  )
}
