"use client"

import { Button } from "@/components/ui/button"
import { Heart, Award, ChevronDown, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/07/30/45349-445022509_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/70 to-warm-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-warm-900/30" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/30"
            initial={{
              x: `${15 + i * 15}%`,
              y: "110%",
              opacity: 0
            }}
            animate={{
              y: "-10%",
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="text-sm font-medium text-gold">
                Elevage familial depuis 2015
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            La douceur d&apos;un{" "}
            <span className="text-gold italic">geant</span>
            <br />
            dans votre foyer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
          >
            Imaginez un compagnon majestueux au pelage soyeux, au regard tendre
            et au ronronnement apaisant. Nos Maine Coons d&apos;exception sont eleves
            avec amour pour devenir votre plus beau bonheur quotidien.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-warm-900 font-semibold rounded-full px-8 h-14 text-base shadow-lg shadow-gold/25 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-[1.02]"
              asChild
            >
              <Link href="#chatons">
                <Heart className="h-5 w-5 mr-2 fill-warm-900/30" />
                Decouvrir nos chatons
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/60 text-white bg-white/15 hover:bg-white/25 hover:border-white/80 rounded-full px-8 h-14 text-base font-semibold backdrop-blur-sm transition-all hover:scale-[1.02] shadow-lg shadow-black/10"
              asChild
            >
              <Link href="#elevage">Notre elevage</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap gap-8 mt-16"
          >
            {[
              { icon: Award, label: "Elevage LOOF" },
              { icon: Heart, label: "Suivi veterinaire" },
              { icon: Sparkles, label: "Tests genetiques" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-white/60"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-gold" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/50 uppercase tracking-widest">Decouvrir</span>
          <ChevronDown className="h-5 w-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
