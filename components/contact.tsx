"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Twitter, Mail, MapPin, Clock, Phone, User, Code, BookOpen } from "lucide-react"
import { CONTACT_INFO, SOCIAL_PLATFORMS } from "@/src/constants/personal"

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  StackOverflow: Code,
  Code,
  BookOpen,
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Let's collaborate on your next software project</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>{CONTACT_INFO.timezone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <User className="w-5 h-5 text-purple-400" />
                <span>{CONTACT_INFO.availability}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-purple-300 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4 text-white">Connect with me</h4>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_PLATFORMS.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <motion.div key={social.name} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="glass-card p-3 border-white/10 hover:border-purple-400/30 transition-all duration-300">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-white font-medium text-sm truncate">{social.name}</div>
                          <div className="text-gray-400 text-xs truncate">{social.username}</div>
                        </div>
                      </a>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-card p-8 border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    required
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 disabled:opacity-50 py-3"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
