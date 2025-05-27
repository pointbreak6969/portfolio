"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { TechnologySelector } from "@/components/technology-selector"
import type { Project } from "./project-manager"

interface ProjectFormProps {
  initialData?: Project
  onSubmit: (data: Omit<Project, "id" | "createdAt" | "updatedAt">) => void
}

export function ProjectForm({ initialData, onSubmit }: ProjectFormProps) {
  const [formData, setFormData] = React.useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    technologies: initialData?.technologies || [],
    githubUrl: initialData?.githubUrl || "",
  })

  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Project name is required"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required"
    }

    if (formData.technologies.length === 0) {
      newErrors.technologies = "At least one technology is required"
    }

    if (!formData.githubUrl.trim()) {
      newErrors.githubUrl = "GitHub URL is required"
    } else if (!isValidUrl(formData.githubUrl)) {
      newErrors.githubUrl = "Please enter a valid URL"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isValidUrl = (url: string) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleTechnologyAdd = (technology: string) => {
    if (!formData.technologies.includes(technology)) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, technology],
      })
    }
  }

  const handleTechnologyRemove = (technology: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((t) => t !== technology),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Project Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter project name"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe your project..."
          rows={4}
        />
        {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
      </div>

      <div className="space-y-2">
        <Label>Technologies</Label>
        <TechnologySelector onTechnologyAdd={handleTechnologyAdd} />
        {formData.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                {tech}
                <button
                  type="button"
                  onClick={() => handleTechnologyRemove(tech)}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
        {errors.technologies && <p className="text-sm text-red-500">{errors.technologies}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="githubUrl">GitHub URL</Label>
        <Input
          id="githubUrl"
          type="url"
          value={formData.githubUrl}
          onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
          placeholder="https://github.com/username/repository"
        />
        {errors.githubUrl && <p className="text-sm text-red-500">{errors.githubUrl}</p>}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit">{initialData ? "Update Project" : "Add Project"}</Button>
      </div>
    </form>
  )
}
