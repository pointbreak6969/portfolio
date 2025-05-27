"use client"

import * as React from "react"
import { Edit, ExternalLink, Github, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ProjectForm } from "@/components/project-form"

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  githubUrl: string
  createdAt: string
  updatedAt: string
}

// Mock projects data
const initialProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20",
  },
  {
    id: "2",
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["Next.js", "Prisma", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/username/task-manager",
    createdAt: "2024-02-01",
    updatedAt: "2024-02-10",
  },
  {
    id: "3",
    name: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions and forecasts for multiple locations.",
    technologies: ["Vue.js", "Express", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/username/weather-dashboard",
    createdAt: "2024-02-15",
    updatedAt: "2024-02-18",
  },
]

export function ProjectsManager() {
  const [projects, setProjects] = React.useState<Project[]>(initialProjects)
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [editingProject, setEditingProject] = React.useState<Project | null>(null)

  const handleAddProject = (projectData: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    }
    setProjects([newProject, ...projects])
    setIsAddDialogOpen(false)
  }

  const handleEditProject = (projectData: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
    if (!editingProject) return

    const updatedProject: Project = {
      ...editingProject,
      ...projectData,
      updatedAt: new Date().toISOString().split("T")[0],
    }

    setProjects(projects.map((p) => (p.id === editingProject.id ? updatedProject : p)))
    setEditingProject(null)
  }

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects Manager</h1>
          <p className="text-muted-foreground">Manage your portfolio projects and their details</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription>Create a new project entry with all the necessary details.</DialogDescription>
            </DialogHeader>
            <ProjectForm onSubmit={handleAddProject} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription className="text-sm">
                    Created: {new Date(project.createdAt).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex gap-1">
                  <Dialog
                    open={editingProject?.id === project.id}
                    onOpenChange={(open) => !open && setEditingProject(null)}
                  >
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => setEditingProject(project)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit Project</DialogTitle>
                        <DialogDescription>Update the project details below.</DialogDescription>
                      </DialogHeader>
                      <ProjectForm initialData={project} onSubmit={handleEditProject} />
                    </DialogContent>
                  </Dialog>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteProject(project.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>

              <div className="space-y-2">
                <Label className="text-xs font-medium">Technologies</Label>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <Plus className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No projects yet</h3>
          <p className="text-muted-foreground mb-4">Get started by adding your first project.</p>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>
      )}
    </div>
  )
}
