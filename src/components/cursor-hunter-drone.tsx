"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function CursorHunterDrone() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  if (!mounted || !isVisible) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 20, // Offset to appear next to cursor
        y: mousePosition.y - 20,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.8,
      }}
      initial={false}
    >
      {/* Hunter Drone */}
      <div className="relative">
        {/* Main Body - Larger and more aggressive */}
        <div className="w-6 h-4 bg-gradient-to-b from-red-600 to-red-800 rounded relative shadow-lg">
          {/* Targeting camera */}
          <div className="absolute -top-1 left-1 w-3 h-2 bg-orange-500 rounded-full animate-pulse shadow-md">
            <div className="absolute top-0.5 left-1 w-1 h-1 bg-white rounded-full animate-ping"></div>
          </div>

          {/* Weapon systems */}
          <div className="absolute top-0.5 -left-1 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-0.5 -right-1 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0.5 -left-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0.5 -right-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>

          {/* Exhaust ports */}
          <div className="absolute -bottom-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>

        {/* Main rotors */}
        <motion.div
          className="absolute -top-2 -left-3 w-10 h-1 bg-gray-300 rounded-full opacity-70 shadow-sm"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.03, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-3 -left-3 w-10 h-1 bg-gray-300 rounded-full opacity-70 shadow-sm"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.03, repeat: Infinity, ease: "linear" }}
        />

        {/* Smaller side rotors */}
        <motion.div
          className="absolute top-0 -left-4 w-2 h-0.5 bg-gray-400 rounded-full opacity-60"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.04, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 -right-4 w-2 h-0.5 bg-gray-400 rounded-full opacity-60"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.04, repeat: Infinity, ease: "linear" }}
        />

        {/* Multiple laser beams shooting at cursor */}
        <motion.div
          className="absolute top-1 left-6 w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent rounded shadow-sm"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0.3, 1, 0.3],
            scaleY: [1, 0.5, 1]
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1 left-6 w-10 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded shadow-sm"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1
          }}
        />

        {/* Targeting reticle pointing at cursor */}
        <motion.div
          className="absolute -top-4 left-2 text-sm text-red-400 font-bold"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⊕
        </motion.div>

        {/* Lock-on indicator */}
        <motion.div
          className="absolute -right-6 top-0 text-xs text-red-500 font-bold bg-black bg-opacity-50 px-1 rounded"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          LOCKED
        </motion.div>

        {/* Aggressive sound effects */}
        <motion.div
          className="absolute -left-8 -top-1 text-xs text-red-600 font-bold opacity-80"
          animate={{
            opacity: [0, 1, 0],
            x: [-5, 5, -5]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          BZZT!
        </motion.div>

        <motion.div
          className="absolute -right-8 bottom-0 text-xs text-orange-500 font-bold opacity-70"
          animate={{
            opacity: [0, 0.8, 0],
            y: [-2, 2, -2]
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          ZAP!
        </motion.div>

        {/* Warning indicator */}
        <motion.div
          className="absolute -bottom-5 left-0 text-xs text-yellow-500 font-bold bg-red-800 bg-opacity-70 px-1 rounded"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚠ HUNTER
        </motion.div>

        {/* Thruster effects */}
        <motion.div
          className="absolute -bottom-2 left-2 w-2 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded opacity-60"
          animate={{
            scaleY: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  )
}