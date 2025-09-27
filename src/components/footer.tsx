"use client"

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Separator />

          <div className="pt-4">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © 2025 Anshuman Rathore
              <Heart className="w-4 h-4 text-red-500 fill-current" />

            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}