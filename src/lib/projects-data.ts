export interface ProjectData {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  details: string[]
  features: string[]
  challenges: string[]
  architecture: Record<string, string>
}

export const projects: ProjectData[] = [
  {
    id: "enterprise-doc-chatbot",
    title: "Enterprise Document Chatbot",
    description: "Developed a RAG chatbot capable of answering queries from enterprise documents (PDF, DOCX). Integrated Ollama for local LLM inference, eliminating reliance on external APIs.",
    longDescription: "This project demonstrates the implementation of a Retrieval-Augmented Generation (RAG) chatbot capable of processing and answering queries from various enterprise document formats including PDF and DOCX files. The solution leverages Ollama for local LLM inference, eliminating dependencies on external APIs while maintaining high performance and data privacy.",
    tech: ["Ollama", "FastAPI", "ChromaDB", "React", "Docker"],
    github: "https://github.com/anshumanrathoree/enterprise-doc-chatbot",
    details: [
      "Developed a RAG chatbot capable of answering queries from enterprise documents (PDF, DOCX).",
      "Integrated Ollama for local LLM inference, eliminating reliance on external APIs (OpenAI/Claude).",
      "Containerized services with Docker Compose and exposed REST endpoints for ingestion, health, and query.",
      "Delivered a full-stack solution (React frontend + FastAPI backend) demonstrating scalable and modular AI deployment."
    ],
    features: [
      "Developed a RAG chatbot capable of answering queries from enterprise documents (PDF, DOCX).",
      "Integrated Ollama for local LLM inference, eliminating reliance on external APIs (OpenAI/Claude).",
      "Containerized services with Docker Compose and exposed REST endpoints for ingestion, health, and query.",
      "Delivered a full-stack solution (React frontend + FastAPI backend) demonstrating scalable and modular AI deployment."
    ],
    challenges: [
      "Implementing efficient document parsing and chunking strategies for optimal retrieval",
      "Managing vector embeddings and similarity search with ChromaDB",
      "Optimizing local LLM performance while maintaining response quality",
      "Creating a robust Docker-based architecture for easy deployment"
    ],
    architecture: {
      backend: "FastAPI with Python for REST API endpoints",
      frontend: "React.js for user interface",
      database: "ChromaDB for vector storage and retrieval",
      llm: "Ollama for local language model inference",
      containerization: "Docker Compose for multi-service orchestration"
    }
  },
  {
    id: "wisecow-assessment",
    title: "Wisecow – Kubernetes CI/CD App",
    description: "Containerized and deployed a Node.js microservice on Kubernetes with Ingress, probes, and ConfigMaps. Implemented GitHub Actions pipeline with security scanning.",
    longDescription: "A complete DevOps solution showcasing modern Kubernetes deployment practices with automated CI/CD pipelines, security scanning, and production-grade monitoring. This project demonstrates best practices for containerized application deployment with emphasis on security, observability, and reliability.",
    tech: ["Kubernetes", "Docker", "GitHub Actions", "Trivy", "KubeArmor"],
    github: "https://github.com/anshumanrathoree/wisecow-assessment",
    details: [
      "Containerized and deployed a Node.js microservice on Kubernetes with Ingress, probes, and ConfigMaps.",
      "Implemented GitHub Actions pipeline (test → build → scan → deploy) with Trivy security scanning.",
      "Applied KubeArmor security policies and non-root containers for runtime hardening.",
      "Monitoring with Prometheus + Grafana for production-grade observability."
    ],
    features: [
      "Containerized and deployed a Node.js microservice on Kubernetes with Ingress, probes, and ConfigMaps.",
      "Implemented GitHub Actions pipeline (test → build → scan → deploy) with Trivy security scanning.",
      "Applied KubeArmor security policies and non-root containers for runtime hardening.",
      "Monitoring with Prometheus + Grafana for production-grade observability."
    ],
    challenges: [
      "Implementing comprehensive security scanning in CI/CD pipeline",
      "Configuring KubeArmor policies for runtime protection",
      "Setting up production-grade monitoring and alerting",
      "Optimizing Kubernetes resource allocation and scaling"
    ],
    architecture: {
      application: "Node.js microservice with health checks",
      containerization: "Docker with multi-stage builds and security scanning",
      orchestration: "Kubernetes with Ingress, ConfigMaps, and Secrets",
      cicd: "GitHub Actions with automated testing and deployment",
      monitoring: "Prometheus and Grafana stack for observability",
      security: "Trivy for vulnerability scanning and KubeArmor for runtime protection"
    }
  },
  {
    id: "ai-infra-monitor",
    title: "AI-Driven Cloud Infrastructure Monitor",
    description: "Automated deployment of a serverless monitoring system using CloudFormation (IaC). Configured AWS Lambda functions to process CloudWatch metrics with AI-based log analysis.",
    longDescription: "An intelligent infrastructure monitoring solution that combines traditional CloudWatch metrics with AI-driven analysis to provide predictive insights into system health. The system uses Infrastructure as Code principles for reproducible deployments and implements serverless architecture for cost-effective operations.",
    tech: ["AWS Lambda", "CloudFormation", "CloudWatch", "SNS", "Python"],
    github: "https://github.com/anshumanrathoree/ai-infra-monitor",
    details: [
      "Automated deployment of a serverless monitoring system using CloudFormation (IaC).",
      "Configured AWS Lambda functions to process CloudWatch metrics and send alerts via SNS.",
      "Integrated AI-based log analysis for predictive insights into infrastructure health.",
      "Enabled one-command reproducible deployments to showcase operational excellence."
    ],
    features: [
      "Automated deployment of a serverless monitoring system using CloudFormation (IaC).",
      "Configured AWS Lambda functions to process CloudWatch metrics and send alerts via SNS.",
      "Integrated AI-based log analysis for predictive insights into infrastructure health.",
      "Enabled one-command reproducible deployments to showcase operational excellence."
    ],
    challenges: [
      "Designing serverless architecture for real-time metric processing",
      "Implementing AI algorithms for predictive infrastructure analysis",
      "Creating comprehensive Infrastructure as Code templates",
      "Optimizing Lambda function performance and cost efficiency"
    ],
    architecture: {
      infrastructure: "CloudFormation templates for Infrastructure as Code",
      compute: "AWS Lambda for serverless processing",
      monitoring: "CloudWatch for metrics collection and analysis",
      notifications: "SNS for alert distribution",
      ai: "Python-based machine learning for predictive analytics",
      deployment: "Automated CloudFormation stack deployment"
    }
  },
  {
    id: "self-healing-infra",
    title: "Self-Healing Infrastructure",
    description: "Provisioned a fault-tolerant web application architecture with Terraform (IaC). Configured Auto Scaling Group + Application Load Balancer for automatic recovery.",
    longDescription: "A robust, self-healing infrastructure solution built with Terraform that demonstrates modern cloud architecture principles. The system automatically recovers from failures, scales based on demand, and maintains high availability through redundancy and intelligent load balancing.",
    tech: ["Terraform", "AWS ASG", "ALB", "EC2", "IAM"],
    github: "https://github.com/anshumanrathoree/self-healing-infra",
    details: [
      "Provisioned a fault-tolerant web application architecture with Terraform (IaC).",
      "Configured Auto Scaling Group (ASG) + Application Load Balancer (ALB) for automatic recovery of failed instances.",
      "Defined IAM roles and outputs for secure, repeatable provisioning of cloud infrastructure.",
      "Documented architecture for scalability, resilience, and high availability."
    ],
    features: [
      "Provisioned a fault-tolerant web application architecture with Terraform (IaC).",
      "Configured Auto Scaling Group (ASG) + Application Load Balancer (ALB) for automatic recovery of failed instances.",
      "Defined IAM roles and outputs for secure, repeatable provisioning of cloud infrastructure.",
      "Documented architecture for scalability, resilience, and high availability."
    ],
    challenges: [
      "Designing resilient architecture with multiple failure modes in mind",
      "Implementing proper IAM security policies and least privilege access",
      "Optimizing auto-scaling policies for cost and performance",
      "Creating comprehensive Terraform modules for reusability"
    ],
    architecture: {
      iac: "Terraform for infrastructure provisioning and management",
      compute: "EC2 instances with Auto Scaling Groups",
      networking: "VPC with public/private subnets and security groups",
      loadBalancing: "Application Load Balancer for traffic distribution",
      security: "IAM roles and policies for secure access",
      monitoring: "CloudWatch for health checks and scaling metrics"
    }
  }
]

export const getProjectById = (id: string): ProjectData | undefined => {
  return projects.find(project => project.id === id)
}