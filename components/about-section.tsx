"use client"

import Image from "next/image"
import { Heart, Home, Shield, Users, Sparkles, PawPrint } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const features = [
  {
    icon: Home,
    title: "Elevage familial",
    description: "Nos chats partagent notre quotidien. Ils grandissent dans un cocon de douceur, entre canape et jeux.",
  },
  {
    icon: Shield,
    title: "Sante irreprochable",
    description: "Chaque reproducteur est teste HCM, PKD, SMA. Aucun compromis sur la genetique.",
  },
  {
    icon: Heart,
    title: "Socialisation unique",
    description: "Enfants, chiens, bruits du quotidien... nos chatons apprennent la vie avant de rejoindre la votre.",
  },
  {
    icon: Users,
    title: "Famille pour la vie",
    description: "L'adoption n'est que le debut. Nous restons a vos cotes pour chaque question, chaque etape.",
  },
]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=600&q=80",
    alt: "Maine Coon majestueux au regard intense",
  },
  {
    src: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&q=80",
    alt: "Chat Maine Coon au pelage tigre soyeux",
  },
  {
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80",
    alt: "Chaton joueur aux grands yeux",
  },
]

export function AboutSection() {
  return (
    <section id="elevage" className="py-16 sm:py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-5 sm:px-6 relative">
        {/* Section header */}
        <MotionWrapper className="text-center mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 sm:mb-6">
            <PawPrint className="h-3.5 w-3.5" />
            Notre philosophie
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Plus qu&apos;un elevage,
            <br />
            <span className="text-primary italic">une histoire d&apos;amour</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Depuis 2015, nous consacrons notre vie a ces felins d&apos;exception.
            Chaque chaton qui quitte notre foyer emporte un morceau de notre coeur.
          </p>
        </MotionWrapper>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">
          {/* Gallery grid */}
          <MotionWrapper variant="slide-left" className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl col-span-1"
              >
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 25vw"
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 25vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 sm:-bottom-6 right-2 sm:-right-4 md:-right-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-warm-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gold/15 flex items-center justify-center">
                  <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-foreground">10+</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">annees de passion</p>
                </div>
              </div>
            </motion.div>
          </MotionWrapper>

          {/* Content & Features */}
          <div>
            <MotionWrapper variant="slide-right">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Le Maine Coon, un &laquo;Gentle Giant&raquo; au coeur tendre
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Avec sa silhouette imposante et son regard expressif, le Maine Coon
                est bien plus qu&apos;un chat. C&apos;est un veritable membre de la famille,
                un confident silencieux, un comedien ne qui illuminera votre quotidien.
              </p>
              <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
                Notre objectif ? Produire des chatons en parfaite sante, au caractere
                equilibre, qui deviendront vos plus fideles compagnons de vie.
                Chaque portee est un evenement unique, prepare avec soin.
              </p>
            </MotionWrapper>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/80 border border-warm-100 active:bg-white transition-all">
                    <div className="flex-shrink-0 w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-gradient-to-br from-primary/15 to-gold/15 flex items-center justify-center">
                      <feature.icon className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Stats bar */}
        <MotionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/5 via-gold/5 to-primary/5 border border-warm-100">
            {[
              { value: "200+", label: "Chatons places" },
              { value: "100%", label: "Tests genetiques" },
              { value: "10+", label: "Annees d'experience" },
              { value: "5★", label: "Avis des familles" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
