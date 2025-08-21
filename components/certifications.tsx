"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award } from "lucide-react"
import { CERTIFICATIONS } from "@/src/constants/certifications"
import Image from "next/image"

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Certifications</h2>
          </div>
          <p className="text-gray-400 text-lg">Professional certifications and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="glass-card border-white/10 hover:border-purple-400/30 transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.name} certificate`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-purple-500/20 text-purple-300 border-purple-400/30">
                    {cert.issueDate}
                  </Badge>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 mb-3 flex items-center gap-2 flex-grow">
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    {cert.issuer}
                  </p>
                  <div className="text-sm text-gray-500 mt-auto">
                    <span className="font-mono">ID: {cert.credentialId}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
