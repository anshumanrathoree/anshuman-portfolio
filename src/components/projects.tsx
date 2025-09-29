"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built & Deployed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From self-healing infra to AI chatbots — a glimpse into the systems I’ve brought to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card
                className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-background/50 backdrop-blur-sm cursor-pointer"
                onClick={() => window.location.href = `/projects/${project.id}`}
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, '_blank', 'noopener,noreferrer')
                      }}
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Link href={`/projects/${project.id}`}>
                      <Button size="sm" className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/anshumanrathoree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base px-8"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}