"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MapPin, GraduationCap } from "lucide-react"
import { PERSONAL } from "@/src/constants/personal"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div className="relative" whileHover={{ rotate: 2, scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="w-80 h-96 rounded-2xl overflow-hidden glass-card glow-ring">
                <Image src="/Personal_Photo.jpeg" loading="lazy" alt="Profile"
                  width={320} height={384}
                  className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300">
              <p className="text-sm leading-relaxed">
                I'm a Computer Science and Engineering undergraduate and a passionate full-stack developer with hands-on
                experience in building modern web applications. I enjoy working with technologies like React.js, Node.js,
                Express.js, and MongoDB to create scalable and user-friendly solutions, and I'm also proficient in Java,
                which strengthens my problem-solving and backend development skills.
              </p>
              <p className="text-sm leading-relaxed">
                When I'm not coding, I enjoy exploring new tech, tinkering with side projects, experimenting with design ideas,
                or unwinding with a good playlist.
              </p>
              <p className="text-sm leading-relaxed">
                I believe in writing clean, maintainable code and am always eager to take on new challenges that push
                the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="glass-card p-4 border-white/10">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                      <p className="text-white font-medium">
                        {PERSONAL.location.city}, {PERSONAL.location.country}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="glass-card p-4 border-white/10">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">{PERSONAL.university.labelTop}</p>
                      <p className="text-white font-medium">{PERSONAL.university.name}</p>
                      <p className="text-xs text-gray-400">{PERSONAL.university.major}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
