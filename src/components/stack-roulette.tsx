"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Terminal, BookOpen, Wrench, Rocket } from "lucide-react"

type Item = {
  label: string
  value: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  hint?: string
}

const ITEMS: Item[] = [
  {
    label: "Currently Learning",
    value: "Kubernetes CKA",
    icon: BookOpen,
    hint: "Labs > theory. Fail fast, fix faster."
  },
  {
    label: "Favorite Tool",
    value: "Ollama",
    icon: Wrench,
    hint: "Local LLMs for rapid prototyping."
  },
  {
    label: "Most Used Command",
    value: "git push origin main",
    icon: Terminal,
    hint: "Ship small, ship often."
  },
  {
    label: "This Week's Focus",
    value: "IaC hygiene (Terraform modules)",
    icon: Rocket,
    hint: "Reusable modules > snowflake stacks."
  },
  {
    label: "Observability Pick",
    value: "Prometheus + Grafana",
    icon: Sparkles,
    hint: "If it moves, graph it."
  },
]

const variants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 }
}

export function StackRoulette() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const current = useMemo(() => ITEMS[index % ITEMS.length], [index])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % ITEMS.length), 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused])

  const Icon = current.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-2xl font-semibold">Now / Stack Roulette</h3>
        <Badge variant="outline" className="text-xs">auto-rotates · hover to pause</Badge>
      </div>

      <Card
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="overflow-hidden"
      >
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-4"
            >
              <div className="rounded-xl p-3 bg-primary/10 text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{current.label}</p>
                <h4 className="text-xl font-semibold">{current.value}</h4>
                {current.hint && (
                  <p className="text-sm text-muted-foreground">{current.hint}</p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex gap-2">
            {ITEMS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to item ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}