"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { StackRoulette } from "./stack-roulette"
import {
  Cloud,
  Container,
  Database,
  GitBranch,
  Monitor,
  Award,
  Users
} from "lucide-react"

const skills = [
  {
    name: "Cloud & Serverless",
    icon: Cloud,
    category: "AWS (EC2, S3, Lambda, ECS, IAM, CloudWatch, CodePipeline)"
  },
  {
    name: "Containerization",
    icon: Container,
    category: "Docker, Docker Compose"
  },
  {
    name: "Orchestration",
    icon: Monitor,
    category: "Kubernetes (Ingress, ConfigMaps, Probes)"
  },
  {
    name: "Infrastructure as Code",
    icon: Database,
    category: "Terraform, CloudFormation"
  },
  {
    name: "CI/CD & Automation",
    icon: GitBranch,
    category: "GitHub Actions, Trivy Scans"
  },
  {
    name: "AI & Emerging Tech",
    icon: Users,
    category: "RAG (Ollama + ChromaDB), FastAPI, AI-driven Infra Insights"
  },
]


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            From Code to Cloud
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designing infra that heals itself, pipelines that deliver, and systems teams can trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                <Image
                  src="/profile-picture.jpg"
                  alt="Anshuman Rathore - Cloud & DevOps Engineer"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    e.currentTarget.style.display = 'none'
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                    if (nextElement) {
                      nextElement.style.display = 'flex'
                    }
                  }}
                />
                <Users className="w-32 h-32 text-primary/60 hidden" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <StackRoulette />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I design resilient cloud infrastructure and automation that teams can rely on — AWS-first, container-driven, and CI/CD pipelines that transform ideas into secure, production-ready services at speed.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Lately, I’ve delivered a local-LLM RAG chatbot (Ollama + FastAPI), a Kubernetes app wired with GitHub Actions, Trivy, and KubeArmor, and serverless monitoring stacks on AWS (Lambda, CloudWatch, SNS) — all built through clean IaC. My focus: infra that heals itself, systems you can observe, and pipelines that are secure by default.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I keep iterating—wiring up Prometheus/Grafana for visibility, shortening feedback loops, and experimenting with how AI can sharpen DevOps (smarter logs, drift detection, quieter alerts). The goal: fewer firefights, more dependable delivery.              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {skills.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <Card className="p-4 text-center hover:shadow-md transition-shadow group">
                        <CardContent className="p-0 space-y-2">
                          <IconComponent className="w-8 h-8 mx-auto text-primary group-hover:scale-110 transition-transform" />
                          <p className="font-medium">{skill.name}</p>
                          <p className="text-xs text-muted-foreground">{skill.category}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}