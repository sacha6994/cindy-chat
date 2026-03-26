"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Heart, PawPrint, ArrowRight } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import Link from "next/link"

const kittens = [
  {
    name: "Luna",
    image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=600&q=80",
    birthDate: "15 janvier 2026",
    color: "Silver Tabby",
    gender: "Femelle",
    status: "Disponible",
    personality: "Douce, joueuse et curieuse. Elle adore les calins au coin du feu.",
  },
  {
    name: "Thor",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&q=80",
    birthDate: "15 janvier 2026",
    color: "Red Tabby",
    gender: "Male",
    status: "Reserve",
    personality: "Intrepide et affectueux. Un vrai petit aventurier au grand coeur.",
  },
  {
    name: "Nala",
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=600&q=80",
    birthDate: "15 janvier 2026",
    color: "Brown Tabby",
    gender: "Femelle",
    status: "Disponible",
    personality: "Elegante et sereine. Elle conquiert les coeurs d'un seul regard.",
  },
  {
    name: "Odin",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&q=80",
    birthDate: "2 fevrier 2026",
    color: "Black Smoke",
    gender: "Male",
    status: "Disponible",
    personality: "Majestueux et tendre. Le roi de la sieste et des ronronnements.",
  },
  {
    name: "Freya",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&q=80",
    birthDate: "2 fevrier 2026",
    color: "Cream Tabby",
    gender: "Femelle",
    status: "Disponible",
    personality: "Espiegle et attachante. Impossible de resister a ses pitreries.",
  },
  {
    name: "Loki",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80",
    birthDate: "2 fevrier 2026",
    color: "Blue Tabby",
    gender: "Male",
    status: "Reserve",
    personality: "Farceur et calin. Il sait exactement comment vous faire sourire.",
  },
]

export function KittensSection() {
  return (
    <section id="chatons" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <MotionWrapper className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <PawPrint className="h-3.5 w-3.5" />
            Nos bebes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Craquez pour nos{" "}
            <span className="text-primary italic">adorables chatons</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Chacun a sa personnalite, son caractere unique. Lequel fera battre
            votre coeur ? Nos chatons sont disponibles a partir de 3 mois, vaccines,
            puces et testes.
          </p>
        </MotionWrapper>

        {/* Kittens grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {kittens.map((kitten) => (
            <StaggerItem key={kitten.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-warm-100 hover:border-warm-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={kitten.image}
                    alt={`Chaton Maine Coon ${kitten.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      kitten.status === "Disponible"
                        ? "bg-emerald-500/90 hover:bg-emerald-500 text-white border-0"
                        : "bg-warm-500/90 hover:bg-warm-500 text-white border-0"
                    } backdrop-blur-sm px-3 py-1`}
                  >
                    {kitten.status === "Disponible" ? "✨ Disponible" : "Reserve"}
                  </Badge>
                  {/* Gender icon */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <span className="text-sm">{kitten.gender === "Male" ? "♂" : "♀"}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{kitten.name}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/8 px-3 py-1 rounded-full">
                      {kitten.color}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed italic">
                    &laquo; {kitten.personality} &raquo;
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5 pb-5 border-b border-warm-100">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Ne(e) le {kitten.birthDate}</span>
                  </div>

                  <Button
                    className={`w-full rounded-full h-11 font-medium transition-all ${
                      kitten.status === "Disponible"
                        ? "bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md"
                        : "bg-warm-200 text-warm-500 cursor-not-allowed"
                    }`}
                    disabled={kitten.status === "Reserve"}
                    asChild={kitten.status === "Disponible"}
                  >
                    {kitten.status === "Disponible" ? (
                      <Link href="#contact">
                        <Heart className="h-4 w-4 mr-2 fill-white/30" />
                        Je craque pour {kitten.name}
                      </Link>
                    ) : (
                      <span>Deja reserve(e)</span>
                    )}
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <MotionWrapper className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-gold/5 to-primary/5 border border-warm-100">
            <p className="text-lg text-foreground font-medium">
              Votre futur compagnon n&apos;est pas encore ne ?
            </p>
            <p className="text-muted-foreground text-sm max-w-md">
              Inscrivez-vous sur notre liste d&apos;attente pour etre informe en priorite
              des prochaines naissances et reserver votre chaton.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
              asChild
            >
              <Link href="#contact">
                S&apos;inscrire a la liste d&apos;attente
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
