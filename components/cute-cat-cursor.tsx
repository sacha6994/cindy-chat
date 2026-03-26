"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Paw {
  id: number
  x: number
  y: number
  rotation: number
}

export function CuteCatCursor() {
  const [paws, setPaws] = useState<Paw[]>([])
  const [pawId, setPawId] = useState(0)

  const addPaw = useCallback((e: MouseEvent) => {
    const id = pawId
    setPawId((prev) => prev + 1)
    setPaws((prev) => [
      ...prev.slice(-8),
      {
        id,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 40 - 20,
      },
    ])
  }, [pawId])

  useEffect(() => {
    window.addEventListener("click", addPaw)
    return () => window.removeEventListener("click", addPaw)
  }, [addPaw])

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      <AnimatePresence>
        {paws.map((paw) => (
          <motion.div
            key={paw.id}
            initial={{ opacity: 1, scale: 0.3, y: 0 }}
            animate={{ opacity: 0, scale: 1.2, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onAnimationComplete={() =>
              setPaws((prev) => prev.filter((p) => p.id !== paw.id))
            }
            className="absolute"
            style={{
              left: paw.x - 15,
              top: paw.y - 15,
              rotate: `${paw.rotation}deg`,
            }}
          >
            <span className="text-2xl select-none" role="img" aria-hidden="true">
              🐾
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
