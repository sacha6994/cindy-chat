import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { KittensSection } from "@/components/kittens-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <KittensSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
