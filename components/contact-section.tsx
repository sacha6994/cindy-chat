"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Mail, Phone, MapPin, Send, Clock, Heart, MessageCircle } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 relative">
        <MotionWrapper className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 sm:mb-6">
            <MessageCircle className="h-3.5 w-3.5" />
            Parlons de votre futur compagnon
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Pret a{" "}
            <span className="text-primary italic">agrandir la famille</span> ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Que vous ayez une question, un coup de coeur ou simplement envie de
            discuter chatons, nous sommes la.
          </p>
        </MotionWrapper>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <MotionWrapper variant="slide-left">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "contact@geantsvelours.fr",
                  href: "mailto:contact@geantsvelours.fr",
                },
                {
                  icon: Phone,
                  title: "Telephone",
                  value: "06 12 34 56 78",
                  href: "tel:+33612345678",
                },
                {
                  icon: MapPin,
                  title: "Localisation",
                  value: "Bretagne, France",
                  href: undefined,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-warm-100 transition-all"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/15 to-gold/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-sm sm:text-base text-foreground hover:text-primary transition-colors truncate block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm sm:text-base text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </MotionWrapper>

            <MotionWrapper variant="slide-left" delay={0.2}>
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/8 to-gold/8 border border-warm-100">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-foreground text-sm">Visites sur rendez-vous</h4>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Nous vous accueillons les week-ends pour rencontrer nos chats.
                  Prevoyez environ 1h pour la visite.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="slide-left" delay={0.3}>
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-warm-100">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Heart className="h-4 w-4 text-rose-warm fill-rose-warm" />
                  <h4 className="font-semibold text-foreground text-sm">Processus d&apos;adoption</h4>
                </div>
                <ol className="text-muted-foreground text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Echangeons par message ou telephone
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    Rencontrez nos chatons en visite
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    Reservez votre coup de coeur
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">4.</span>
                    Accueillez-le a 3 mois, vaccine et puce
                  </li>
                </ol>
              </div>
            </MotionWrapper>
          </div>

          {/* Contact Form */}
          <MotionWrapper variant="slide-right" className="lg:col-span-3">
            <Card className="border-warm-100 shadow-lg rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-gold/5 border-b border-warm-100 p-4 sm:p-6 pb-4 sm:pb-6">
                <CardTitle className="font-serif text-xl sm:text-2xl">
                  Envoyez-nous un message
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Reponse garantie sous 24h
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-7 sm:h-8 w-7 sm:w-8 text-emerald-600 fill-emerald-600" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Message envoye !
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Merci ! Nous vous repondrons tres vite.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <Field>
                          <FieldLabel htmlFor="name">Votre nom</FieldLabel>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Prenom Nom"
                            required
                            className="rounded-xl h-11 sm:h-12 border-warm-200 focus:border-primary text-base"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="email">Email</FieldLabel>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="votre@email.fr"
                            required
                            className="rounded-xl h-11 sm:h-12 border-warm-200 focus:border-primary text-base"
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="phone">Telephone</FieldLabel>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="06 12 34 56 78"
                          className="rounded-xl h-11 sm:h-12 border-warm-200 focus:border-primary text-base"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="message">Votre message</FieldLabel>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Parlez-nous de vous, de votre foyer, du chaton qui vous fait craquer..."
                          rows={4}
                          required
                          className="rounded-xl border-warm-200 focus:border-primary resize-none text-base"
                        />
                      </Field>
                    </FieldGroup>
                    <Button
                      type="submit"
                      className="w-full mt-6 sm:mt-8 rounded-full h-12 sm:h-13 text-sm sm:text-base font-medium bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md active:scale-[0.98] transition-all"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
