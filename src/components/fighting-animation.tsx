"use client"

import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion"
import { useState, useEffect } from "react"

export function FightingAnimation() {
  const [isInterrupted, setIsInterrupted] = useState(false)

  // Track mouse events for interruption
  useEffect(() => {
    // Mouse event handlers remain but don't track position
    const handleMouseEvent = () => {
      // Handle interruption logic if needed
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseEvent)
      return () => window.removeEventListener('mousemove', handleMouseEvent)
    }
  }, [])

  const drone1Variants = {
    patrolling: {
      x: [0, 60, -40, 80, -30, 50, 0],
      y: [0, -25, 15, -35, 20, -15, 0],
      rotate: [0, 20, -15, 30, -20, 15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: easeInOut
      }
    },
    interrupted: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, ease: easeOut }
    }
  }

  const drone2Variants = {
    patrolling: {
      x: [0, -70, 30, -50, 60, -40, 0],
      y: [0, 20, -30, 25, -20, 10, 0],
      rotate: [0, -25, 20, -30, 15, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
        delay: 1
      }
    },
    interrupted: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, ease: easeOut }
    }
  }

  const drone3Variants = {
    patrolling: {
      x: [0, 40, -60, 30, -70, 45, 0],
      y: [0, -20, 30, -25, 15, -35, 0],
      rotate: [0, 15, -25, 35, -15, 20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut,
        delay: 2
      }
    },
    interrupted: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, ease: easeOut }
    }
  }

  const drone4Variants = {
    patrolling: {
      x: [0, -50, 70, -35, 55, -60, 0],
      y: [0, 25, -40, 30, -15, 20, 0],
      rotate: [0, -20, 25, -35, 10, -15, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: easeInOut,
        delay: 3
      }
    },
    interrupted: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, ease: easeOut }
    }
  }

  const fighter1Variants = {
    fighting: {
      x: [0, 50, 0, 60, 0],
      y: [0, -10, 0, -15, 0],
      rotate: [0, 25, -25, 45, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut
      }
    },
    interrupted: {
      x: -30,
      y: 10,
      rotate: -45,
      transition: { duration: 0.5 }
    }
  }

  const fighter2Variants = {
    fighting: {
      x: [0, -50, 0, -60, 0],
      y: [0, -8, 0, -12, 0],
      rotate: [0, -25, 25, -45, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
        delay: 0.5
      }
    },
    interrupted: {
      x: 30,
      y: 8,
      rotate: 45,
      transition: { duration: 0.5 }
    }
  }

  const cursorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div
      className="relative h-32 w-full max-w-sm mx-auto mb-8"
      onMouseEnter={() => setIsInterrupted(true)}
      onMouseLeave={() => setIsInterrupted(false)}
    >
      {/* Fighting Stage */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Fighter 1 - Left side (Ninja) */}
        <motion.div
          variants={fighter1Variants}
          animate={isInterrupted ? "interrupted" : "fighting"}
          className="absolute"
          style={{ left: '20%' }}
        >
          <div className="relative">
            {/* Ninja figure */}
            <div className="w-8 h-12 bg-gradient-to-b from-gray-800 to-black rounded-t-full relative">
              {/* Head */}
              <div className="absolute -top-2 left-1 w-6 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full">
                {/* Eyes */}
                <div className="absolute top-2 left-1 w-1 h-1 bg-red-500 rounded-full"></div>
                <div className="absolute top-2 right-1 w-1 h-1 bg-red-500 rounded-full"></div>
              </div>

              {/* Arms */}
              <div className="absolute top-2 -left-1 w-3 h-1 bg-gray-800 rounded transform -rotate-45"></div>
              <div className="absolute top-2 -right-1 w-3 h-1 bg-gray-800 rounded transform rotate-45"></div>

              {/* Legs */}
              <div className="absolute -bottom-1 left-1 w-1 h-4 bg-gray-800 rounded transform rotate-12"></div>
              <div className="absolute -bottom-1 right-1 w-1 h-4 bg-gray-800 rounded transform -rotate-12"></div>
            </div>

            {/* Sword */}
            <motion.div
              className="absolute -top-1 -right-2 w-4 h-1 bg-gradient-to-r from-gray-400 to-white rounded"
              animate={isInterrupted ? { rotate: -90 } : { rotate: [0, 45, -45, 0] }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Action effects */}
          {!isInterrupted && (
            <motion.div
              className="absolute -right-4 top-2 text-yellow-400 text-xs font-bold"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              POW!
            </motion.div>
          )}
        </motion.div>

        {/* Fighter 2 - Right side (Robot) */}
        <motion.div
          variants={fighter2Variants}
          animate={isInterrupted ? "interrupted" : "fighting"}
          className="absolute"
          style={{ right: '20%' }}
        >
          <div className="relative">
            {/* Robot figure */}
            <div className="w-8 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded relative">
              {/* Head */}
              <div className="absolute -top-2 left-1 w-6 h-6 bg-gradient-to-b from-blue-300 to-blue-500 rounded">
                {/* Eyes */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                {/* Antenna */}
                <div className="absolute -top-1 left-2 w-0.5 h-2 bg-blue-600 rounded"></div>
                <div className="absolute -top-2 left-2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
              </div>

              {/* Arms */}
              <div className="absolute top-2 -left-1 w-3 h-1 bg-blue-500 rounded transform rotate-45"></div>
              <div className="absolute top-2 -right-1 w-3 h-1 bg-blue-500 rounded transform -rotate-45"></div>

              {/* Legs */}
              <div className="absolute -bottom-1 left-1 w-1 h-4 bg-blue-600 rounded transform -rotate-12"></div>
              <div className="absolute -bottom-1 right-1 w-1 h-4 bg-blue-600 rounded transform rotate-12"></div>
            </div>

            {/* Laser */}
            <motion.div
              className="absolute top-3 -left-4 w-4 h-0.5 bg-gradient-to-l from-red-500 to-transparent rounded"
              animate={isInterrupted ? { opacity: 0 } : { opacity: [0, 1, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </div>

          {/* Action effects */}
          {!isInterrupted && (
            <motion.div
              className="absolute -left-4 top-2 text-red-400 text-xs font-bold"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            >
              ZAP!
            </motion.div>
          )}
        </motion.div>

        {/* Mouse Cursor Interrupt */}
        <AnimatePresence>
          {isInterrupted && (
            <motion.div
              variants={cursorVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {/* Giant cursor */}
              <div className="relative">
                <div className="w-6 h-8 bg-white border-2 border-gray-800 transform rotate-12 cursor-arrow"></div>
                <div className="absolute top-0 left-0 w-4 h-6 bg-gray-800 transform rotate-12"></div>

                {/* "STOP!" speech bubble */}
                <div className="absolute -top-8 -left-4 bg-white border-2 border-gray-800 rounded-lg px-2 py-1">
                  <div className="text-xs font-bold text-gray-800">STOP!</div>
                  <div className="absolute -bottom-1 left-4 w-2 h-2 bg-white border-b-2 border-r-2 border-gray-800 transform rotate-45"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pause text */}
        <AnimatePresence>
          {isInterrupted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
            >
              <div className="text-xs text-muted-foreground font-medium">
                Fight paused...
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fight continues text */}
        {!isInterrupted && (
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-xs text-muted-foreground font-medium">
              Epic battle in progress...
            </div>
          </motion.div>
        )}

        {/* Attack Drones */}
        {/* Drone 1 - Top Left */}
        <motion.div
          variants={drone1Variants}
          animate={isInterrupted ? "interrupted" : "patrolling"}
          className="absolute top-0 left-2"
        >
          <DroneComponent />
        </motion.div>

        {/* Drone 2 - Top Right */}
        <motion.div
          variants={drone2Variants}
          animate={isInterrupted ? "interrupted" : "patrolling"}
          className="absolute top-2 right-4"
        >
          <DroneComponent />
        </motion.div>

        {/* Drone 3 - Middle Left */}
        <motion.div
          variants={drone3Variants}
          animate={isInterrupted ? "interrupted" : "patrolling"}
          className="absolute top-8 left-6"
        >
          <DroneComponent />
        </motion.div>

        {/* Drone 4 - Bottom Right */}
        <motion.div
          variants={drone4Variants}
          animate={isInterrupted ? "interrupted" : "patrolling"}
          className="absolute top-14 right-8"
        >
          <DroneComponent />
        </motion.div>
      </div>

      {/* Battle ground */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
    </div>
  )
}

// Drone Component
function DroneComponent() {
  return (
    <div className="relative">
      {/* Main Body */}
      <div className="w-4 h-3 bg-gradient-to-b from-gray-600 to-gray-800 rounded relative">
        {/* Top sensor/camera */}
        <div className="absolute -top-0.5 left-1 w-2 h-1 bg-red-500 rounded-full animate-pulse"></div>

        {/* Side lights */}
        <div className="absolute top-0.5 -left-0.5 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-0.5 -right-0.5 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>

        {/* Landing gear */}
        <div className="absolute -bottom-1 left-0.5 w-0.5 h-1 bg-gray-700 rounded"></div>
        <div className="absolute -bottom-1 right-0.5 w-0.5 h-1 bg-gray-700 rounded"></div>
      </div>

      {/* Rotors */}
      <motion.div
        className="absolute -top-1 -left-2 w-6 h-0.5 bg-gray-400 rounded-full opacity-80"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.05, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-6 h-0.5 bg-gray-400 rounded-full opacity-80"
        animate={{ rotate: -360 }}
        transition={{ duration: 0.05, repeat: Infinity, ease: easeInOut }}
      />

      {/* Laser beams */}
      <motion.div
        className="absolute top-1 left-4 w-8 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded"
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: easeInOut
        }}
      />

      {/* Targeting system */}
      <motion.div
        className="absolute -top-3 left-1 text-xs text-red-400 font-bold"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: easeInOut
        }}
      >
        ◉
      </motion.div>

      {/* Sound effect */}
      <motion.div
        className="absolute -right-4 top-0 text-xs text-red-500 font-bold opacity-70"
        animate={{
          opacity: [0, 0.8, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: easeInOut
        }}
      >
        PEW!
      </motion.div>
    </div>
  )
}