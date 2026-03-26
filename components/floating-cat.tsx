"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart } from "lucide-react"

const catMessages = [
  "Miaou ! Tu cherches un compagnon ? 🐱",
  "Psst... nos chatons sont trop mignons !",
  "Un ronron vaut mille mots... 💤",
  "Viens me caresser les oreilles ! 😻",
  "Tu savais qu'un Maine Coon peut peser 10kg ?",
]

export function FloatingCat() {
  const [isVisible, setIsVisible] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [showBubble, setShowBubble] = useState(false)
  const [dismissed, setDismissed] = useState(false)

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
    if (!showBubble) return
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % catMessages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [showBubble])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
        >
          {/* Speech bubble */}
          <AnimatePresence mode="wait">
            {showBubble && (
              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl rounded-br-sm shadow-lg border border-warm-100 px-4 py-3 max-w-[220px]"
              >
                <button
                  onClick={() => {
                    setDismissed(true)
                    setIsVisible(false)
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-warm-100 hover:bg-warm-200 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Fermer"
                >
                  <X className="h-3 w-3 text-warm-600" />
                </button>
                <p className="text-sm text-foreground leading-snug">
                  {catMessages[messageIndex]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cat emoji button */}
          <motion.button
            onClick={() => setShowBubble((prev) => !prev)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-16 h-16 bg-gradient-to-br from-primary to-warm-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow group"
            aria-label="Chat mascotte"
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
