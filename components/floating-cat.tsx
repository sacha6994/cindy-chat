"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart } from "lucide-react"

const catMessages = [
  "Miaou ! Bienvenue chez les Geants de Velours ! 🐱",
  "💡 Le Maine Coon est la plus grande race de chat domestique. Un male peut peser jusqu'a 12 kg !",
  "🏆 Le Maine Coon est originaire du Maine aux Etats-Unis. Son nom viendrait du raton laveur (raccoon) !",
  "😻 Surnomme le \"Gentle Giant\", il est connu pour sa douceur exceptionnelle malgre sa grande taille.",
  "🎵 Le Maine Coon ne miaule pas vraiment... il roucoule ! Son petit cri ressemble a un gazouillis.",
  "💧 Contrairement a la plupart des chats, beaucoup de Maine Coons adorent l'eau et jouent avec !",
  "🧠 C'est l'une des races les plus intelligentes : il peut apprendre a ouvrir des portes et meme jouer a rapporter !",
  "❄️ Son pelage epais et resistant a l'eau le protege du froid. Il a meme des touffes de poils entre les coussinets !",
  "👶 Le Maine Coon est tres patient avec les enfants et s'entend bien avec les chiens. Parfait pour les familles !",
  "📏 Le record du plus long chat au monde est detenu par un Maine Coon : 1,23 metre du nez a la queue !",
  "🐾 Ses grandes pattes servent de \"raquettes a neige\" naturelles grace a leurs touffes de poils.",
  "💤 Un Maine Coon dort environ 16h par jour. Mais quand il est eveille, c'est un vrai comedien !",
  "🎭 Chaque Maine Coon a une personnalite unique. Certains sont des clowns, d'autres des rois de la sieste.",
  "🍽️ Un Maine Coon adulte mange environ 70 a 100 g de croquettes par jour. Il grandit jusqu'a 4 ans !",
  "💕 Le Maine Coon s'attache enormement a sa famille. Il vous suivra de piece en piece comme un petit chien.",
  "🌿 Son poil mi-long necessite un brossage 2 a 3 fois par semaine. Moment calin garanti !",
  "🏠 Malgre sa taille, le Maine Coon s'adapte tres bien a la vie en appartement si on lui offre des jeux.",
  "🎪 Le Maine Coon adore les hauteurs ! Un arbre a chat solide et grand est indispensable.",
  "❤️ Nos chatons partent vaccines, puces, testes et avec un kit de demarrage pour leurs premiers jours.",
  "📞 Une question ? N'hesite pas a nous contacter ! On adore parler de nos bebes.",
]

export function FloatingCat() {
  const [isVisible, setIsVisible] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [showBubble, setShowBubble] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setIsVisible(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [dismissed])

  useEffect(() => {
    if (!isVisible) return
    const bubbleTimer = setTimeout(() => setShowBubble(true), 1500)
    return () => clearTimeout(bubbleTimer)
  }, [isVisible])

  useEffect(() => {
    if (!showBubble || isPaused) return
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % catMessages.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [showBubble, isPaused])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        >
          {/* Speech bubble */}
          <AnimatePresence mode="wait">
            {showBubble && (
              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-2xl rounded-br-sm shadow-xl border border-warm-100 px-5 py-4 max-w-[280px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <button
                  onClick={() => {
                    setDismissed(true)
                    setIsVisible(false)
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-warm-200 hover:bg-warm-300 rounded-full flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Fermer"
                >
                  <X className="h-3 w-3 text-warm-700" />
                </button>
                <p className="text-sm text-foreground leading-relaxed">
                  {catMessages[messageIndex]}
                </p>
                {/* Progress bar */}
                {!isPaused && (
                  <motion.div
                    key={`bar-${messageIndex}`}
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary/20 origin-left rounded-full"
                  />
                )}
                {/* Nav dots */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-warm-50">
                  <div className="flex gap-1">
                    {[...Array(Math.min(5, catMessages.length))].map((_, i) => {
                      const groupIndex = Math.floor(messageIndex / 5)
                      const dotIndex = groupIndex * 5 + i
                      return (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            dotIndex === messageIndex ? "bg-primary" : "bg-warm-200"
                          }`}
                        />
                      )
                    })}
                  </div>
                  <button
                    onClick={() => setMessageIndex((prev) => (prev + 1) % catMessages.length)}
                    className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Suivant →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cat emoji button */}
          <motion.button
            onClick={() => setShowBubble((prev) => !prev)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-16 h-16 bg-gradient-to-br from-primary to-warm-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow group"
            aria-label="Chat mascotte — infos Maine Coon"
          >
            <motion.span
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-3xl select-none"
            >
              😺
            </motion.span>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-20" />
            {/* Love heart */}
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              className="absolute -top-2 -right-1"
            >
              <Heart className="h-4 w-4 fill-rose-warm text-rose-warm" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
