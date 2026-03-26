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
    <section id="contact" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <MotionWrapper className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <MessageCircle className="h-3.5 w-3.5" />
            Parlons de votre futur compagnon
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pret a{" "}
            <span className="text-primary italic">agrandir la famille</span> ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Que vous ayez une question, un coup de coeur ou simplement envie de
            discuter chatons, nous sommes la. Chaque message est lu avec attention.
          </p>
        </MotionWrapper>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
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
                <motion.div
                  key={item.title}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-warm-100 hover:border-warm-200 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-gold/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </MotionWrapper>

            <MotionWrapper variant="slide-left" delay={0.2}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/8 to-gold/8 border border-warm-100">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-foreground text-sm">Visites sur rendez-vous</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nous vous accueillons les week-ends pour rencontrer nos chats
                  dans les meilleures conditions. Prevoyez environ 1h pour la visite.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="slide-left" delay={0.3}>
              <div className="p-6 rounded-2xl bg-white border border-warm-100">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-4 w-4 text-rose-warm fill-rose-warm" />
                  <h4 className="font-semibold text-foreground text-sm">Processus d&apos;adoption</h4>
                </div>
                <ol className="text-muted-foreground text-sm space-y-2">
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
            <Card className="border-warm-100 shadow-lg rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-gold/5 border-b border-warm-100 pb-6">
                <CardTitle className="font-serif text-2xl">
                  Envoyez-nous un message
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Reponse garantie sous 24h
                </p>
              </CardHeader>
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-emerald-600 fill-emerald-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Message envoye !
                    </h3>
                    <p className="text-muted-foreground">
                      Merci pour votre interet. Nous vous repondrons tres vite.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field>
                          <FieldLabel htmlFor="name">Votre nom</FieldLabel>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Prenom Nom"
                            required
                            className="rounded-xl h-12 border-warm-200 focus:border-primary"
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
                            className="rounded-xl h-12 border-warm-200 focus:border-primary"
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
                          className="rounded-xl h-12 border-warm-200 focus:border-primary"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="message">Votre message</FieldLabel>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Parlez-nous de vous, de votre foyer, du chaton qui vous fait craquer..."
                          rows={5}
                          required
                          className="rounded-xl border-warm-200 focus:border-primary resize-none"
                        />
                      </Field>
                    </FieldGroup>
                    <Button
                      type="submit"
                      className="w-full mt-8 rounded-full h-13 text-base font-medium bg-primary hover:bg-primary/90 shadow-sm hover:shadow-md transition-all"
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
