"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ scrollBehavior: "smooth" }}
        >
          <Navbar />
          <main id="main-content">
            <Hero />
            <div id="about">
              <About />
            </div>
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
