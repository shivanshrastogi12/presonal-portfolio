"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { EXPERIENCE } from "@/src/constants/experience"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Card className="glass-card p-6 border-white/10 hover:border-purple-400/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 mt-2 sm:mt-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
