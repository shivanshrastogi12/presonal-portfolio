"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PERSONAL } from "@/src/constants/personal"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const [isAttached, setIsAttached] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = window.innerHeight

      // Determine if navbar should be attached (in hero section)
      setIsAttached(currentScrollY < heroHeight * 0.85)

      // Determine visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false) // Hide on scroll down
      } else {
        setIsVisible(true) // Show on scroll up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = PERSONAL.downloadCTA.file
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        isAttached
          ? "bg-transparent backdrop-blur-none border-none"
          : "bg-black/90 backdrop-blur-xl border-b border-white/10"
      }`}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -120,
        opacity: isVisible ? (isAttached ? 0.95 : 1) : 0,
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={`container mx-auto px-6 transition-all duration-700 ${isAttached ? "py-10" : "py-5"}`}>
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => router.push("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white transition-all duration-700 ${
                isAttached ? "w-14 h-14 text-lg" : "w-11 h-11 text-base"
              }`}
              animate={{
                boxShadow: isAttached
                  ? "0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(6, 182, 212, 0.2)"
                  : "0 0 25px rgba(139, 92, 246, 0.3)",
              }}
              transition={{ duration: 0.7 }}
            >
              {PERSONAL.logoText}
            </motion.div>
            <motion.span
              className={`font-semibold text-white transition-all duration-700 ${isAttached ? "text-2xl" : "text-xl"}`}
              animate={{
                textShadow: isAttached ? "0 0 30px rgba(255, 255, 255, 0.4)" : "none",
              }}
              transition={{ duration: 0.7 }}
            >
              {PERSONAL.name}
            </motion.span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={pathname === "/resume" ? handleDownload : () => router.push("/resume")}
              variant="outline"
              className={`border-white/20 text-white hover:border-white/40 transition-all duration-700 font-medium ${
                isAttached
                  ? "bg-white/10 hover:bg-white/20 backdrop-blur-sm glow-ring px-6 py-3 text-base"
                  : "bg-white/5 hover:bg-white/15 px-5 py-2 text-sm"
              }`}
            >
              {pathname === "/resume" ? "Download" : "Résumé"}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
