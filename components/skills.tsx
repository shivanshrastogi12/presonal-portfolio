"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/src/constants/skills"

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="glass-card px-4 py-2 text-sm font-medium border-white/20 hover:border-purple-400/50 hover:glow-ring transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
