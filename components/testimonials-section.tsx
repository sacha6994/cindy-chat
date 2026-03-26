"use client"

import Image from "next/image"
import { Star, Quote, Heart } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const testimonials = [
  {
    name: "Sophie & Marc",
    location: "Paris",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    catName: "Artemis",
    catImage: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&q=80",
    text: "Artemis a transforme notre appartement en veritable royaume felin. Sa douceur et son intelligence nous emerveillent chaque jour. Merci pour ce tresor sur pattes !",
    rating: 5,
  },
  {
    name: "Claire Dubois",
    location: "Lyon",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    catName: "Helios",
    catImage: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=400&q=80",
    text: "Notre Helios est un veritable gentleman. L'accompagnement de l'elevage a ete exceptionnel, avant et apres l'adoption. On se sent en famille.",
    rating: 5,
  },
  {
    name: "Thomas Laurent",
    location: "Bordeaux",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    catName: "Freya",
    catImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80",
    text: "Je ne connaissais pas le Maine Coon avant Freya. Aujourd'hui, je ne peux plus imaginer ma vie sans ses ronronnements. Un elevage serieux et passionne.",
    rating: 5,
  },
  {
    name: "Marie & Pierre",
    location: "Nantes",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    catName: "Apollo",
    catImage: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&q=80",
    text: "Apollo est arrive chez nous parfaitement socialise. Nos enfants l'adorent, et lui les suit partout. Un bonheur immense pour toute la famille.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="temoignages" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-cream via-warm-50 to-cream relative overflow-hidden">
      {/* Decorative — hidden on mobile */}
      <div className="absolute top-20 right-10 text-gold/10 hidden sm:block">
        <Quote className="h-64 w-64" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative">
        <MotionWrapper className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-warm/10 text-rose-warm text-sm font-medium mb-4 sm:mb-6">
            <Heart className="h-3.5 w-3.5 fill-rose-warm" />
            Ils nous font confiance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Des familles{" "}
            <span className="text-primary italic">comblees</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Le plus beau compliment ? Voir nos chatons heureux dans leur nouveau foyer.
          </p>
        </MotionWrapper>

        <MotionWrapper>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="pl-3 sm:pl-4 basis-full sm:basis-1/2">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-warm-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 sm:h-4 w-3.5 sm:w-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground/80 leading-relaxed mb-4 sm:mb-6 flex-1 italic text-sm sm:text-base">
                      &laquo; {t.text} &raquo;
                    </p>

                    {/* Author + Cat */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-warm-100">
                      <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden ring-2 ring-warm-100 flex-shrink-0">
                        <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">{t.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{t.location} — avec {t.catName}</p>
                      </div>
                      <div className="relative w-11 sm:w-14 h-11 sm:h-14 rounded-xl overflow-hidden ring-2 ring-warm-100 flex-shrink-0">
                        <Image src={t.catImage} alt={t.catName} fill sizes="56px" className="object-cover" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              <CarouselPrevious className="static translate-y-0 rounded-full border-warm-200 hover:bg-primary hover:text-primary-foreground hover:border-primary h-9 w-9 sm:h-10 sm:w-10" />
              <CarouselNext className="static translate-y-0 rounded-full border-warm-200 hover:bg-primary hover:text-primary-foreground hover:border-primary h-9 w-9 sm:h-10 sm:w-10" />
            </div>
          </Carousel>
        </MotionWrapper>
      </div>
    </section>
  )
}
