"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const technologies = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Svelte",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "Fastify",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "C#",
  ".NET",
  "PHP",
  "Laravel",
  "Ruby",
  "Ruby on Rails",
  "Go",
  "Rust",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "SQLite",
  "Prisma",
  "Drizzle",
  "GraphQL",
  "REST API",
  "Docker",
  "Kubernetes",
  "AWS",
  "Vercel",
  "Netlify",
  "Firebase",
  "Supabase",
  "Tailwind CSS",
  "Styled Components",
  "Sass",
  "Material-UI",
  "Chakra UI",
  "Ant Design",
  "Bootstrap",
  "Jest",
  "Cypress",
  "Playwright",
  "Webpack",
  "Vite",
  "Rollup",
  "Babel",
  "ESLint",
  "Prettier",
  "Husky",
  "Git",
  "GitHub Actions",
  "GitLab CI",
  "Jenkins",
  "Stripe",
  "PayPal",
  "Socket.io",
  "WebRTC",
  "Chart.js",
  "D3.js",
  "Three.js",
  "Framer Motion",
  "GSAP",
]

interface TechnologySelectorProps {
  onTechnologyAdd: (technology: string) => void
}

export function TechnologySelector({ onTechnologyAdd }: TechnologySelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          Select technologies...
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search technologies..." />
          <CommandList>
            <CommandEmpty>No technology found.</CommandEmpty>
            <CommandGroup>
              {technologies.map((technology) => (
                <CommandItem
                  key={technology}
                  value={technology}
                  onSelect={(currentValue) => {
                    onTechnologyAdd(technology)
                    setOpen(false)
                  }}
                >
                  {technology}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
