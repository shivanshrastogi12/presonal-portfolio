"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { PERSONAL, SOCIALS } from "@/src/constants/personal"

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background particles */}
      {PERSONAL.hero.showParticles && (
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 text-center z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text"
            style={{
              textShadow: "0 0 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(6, 182, 212, 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              textShadow: [
                "0 0 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(6, 182, 212, 0.2)",
                "0 0 80px rgba(139, 92, 246, 0.6), 0 0 160px rgba(6, 182, 212, 0.3)",
                "0 0 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(6, 182, 212, 0.2)",
              ],
            }}
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              textShadow: { duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 },
            }}
          >
            {PERSONAL.name}
          </motion.h1>

          {/* <motion.h2ss
            className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {PERSONAL.jobTitle}
          </motion.h2ss> */}

          <motion.p
            className="text-md md:text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {PERSONAL.shortBio}
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            {SOCIALS.map((social, index) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-14 h-14 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 glow-ring hover:shadow-lg hover:shadow-purple-500/20"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      <Icon className="w-6 h-6" />
                    </a>
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <motion.div
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span className="text-sm mb-3 font-medium">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            whileHover={{ borderColor: "#a855f7" }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
