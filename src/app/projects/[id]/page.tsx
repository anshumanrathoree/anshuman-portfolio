import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"
import { projects, getProjectById } from "@/lib/projects-data"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}