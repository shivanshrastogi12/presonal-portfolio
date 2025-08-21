"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function NotFound() {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
            {/* Animated background particles */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Floating geometric shapes */}
            <motion.div
                className="absolute top-20 left-20 w-20 h-20 border border-purple-500/30 rounded-lg"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute bottom-20 right-20 w-16 h-16 border border-cyan-400/30 rounded-full"
                animate={{
                    rotate: [360, 0],
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-lg"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            {/* Main content */}
            <div className="container mx-auto px-6 text-center z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* 404 Icon with glow effect */}
                    <motion.div
                        className="mb-8 flex justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.3,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse" />
                            <div className="relative bg-gradient-to-r from-purple-500/20 to-cyan-400/20 backdrop-blur-sm border border-purple-500/30 rounded-full p-6">
                                <AlertTriangle className="w-16 h-16 text-purple-400" />
                            </div>
                        </div>
                    </motion.div>

                    {/* 404 Text with gradient */}
                    <motion.h1
                        className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent mb-4 font-sora"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        className="text-3xl md:text-4xl font-semibold text-white mb-4 font-sora"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Page Not Found
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        Oops! The page you're looking for seems to have wandered off into the digital void.
                        Don't worry, even the best explorers sometimes take a wrong turn.
                    </motion.p>

                    {/* Action buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <Button
                            onClick={() => router.push('/')}
                            className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            <Home className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                            Back to Home
                        </Button>

                        <Button
                            onClick={() => router.back()}
                            variant="outline"
                            className="group border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                            Go Back
                        </Button>
                    </motion.div>

                    {/* Helpful links */}
                    <motion.div
                        className="mt-12 p-6 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 backdrop-blur-sm border border-purple-500/20 rounded-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center">
                            <Search className="w-5 h-5 mr-2 text-purple-400" />
                            Looking for something specific?
                        </h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                { label: "About Me", href: "/#about" },
                                { label: "Projects", href: "/#projects" },
                                { label: "Experience", href: "/#experience" },
                                { label: "Contact", href: "/#contact" },
                                { label: "Resume", href: "/resume" },
                            ].map((link, index) => (
                                <motion.button
                                    key={link.label}
                                    onClick={() => router.push(link.href)}
                                    className="px-4 py-2 text-sm bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 hover:text-purple-200 border border-purple-500/30 hover:border-purple-400/50 rounded-md transition-all duration-200 transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Fun fact */}
                    <motion.div
                        className="mt-8 text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        <p className="italic">
                            Fun fact: HTTP 404 was named after room 404 at CERN, where the original web servers were located! 🚀
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
        </div>
    )
}
