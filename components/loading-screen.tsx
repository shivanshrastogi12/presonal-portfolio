"use client"

import { motion } from "framer-motion"
import { PERSONAL } from "@/src/constants/personal"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const letters = PERSONAL.name.split("")

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-purple-950/30 to-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
      }}
      transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="text-center relative z-10">
        <motion.div className="flex justify-center space-x-2" initial="hidden" animate="visible">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text relative"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 120,
                  scale: 0.3,
                  rotateY: 180,
                  filter: "blur(20px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: index * 0.12,
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              style={{
                textShadow: "0 0 60px rgba(139, 92, 246, 0.9), 0 0 120px rgba(6, 182, 212, 0.5)",
                transformStyle: "preserve-3d",
              }}
              animate={{
                textShadow: [
                  "0 0 60px rgba(139, 92, 246, 0.9), 0 0 120px rgba(6, 182, 212, 0.5)",
                  "0 0 80px rgba(139, 92, 246, 1), 0 0 160px rgba(6, 182, 212, 0.7)",
                  "0 0 60px rgba(139, 92, 246, 0.9), 0 0 120px rgba(6, 182, 212, 0.5)",
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{
                textShadow: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.08 + 2,
                },
                scale: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.08 + 2,
                },
              }}
              onAnimationComplete={() => {
                if (index === letters.length - 1) {
                  setTimeout(onComplete, 2000)
                }
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "300px" }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="mx-auto mt-12 h-1 bg-gradient-to-r from-transparent via-purple-400 via-cyan-400 to-transparent rounded-full"
          style={{
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
          }}
        />
      </div>
    </motion.div>
  )
}
