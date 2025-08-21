"use client"

import { motion } from "framer-motion"
import { PERSONAL } from "@/src/constants/personal"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left: Logo and Name */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-sm">
              {PERSONAL.logoText}
            </div>
            <span className="text-lg font-semibold text-white">{PERSONAL.name}</span>
          </motion.div>

          {/* Right: Quick Links */}
          <motion.nav
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {quickLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
        </div>

        {/* Bottom: Made with love */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">Made with ❤️</p>
        </motion.div>
      </div>
    </footer>
  )
}
