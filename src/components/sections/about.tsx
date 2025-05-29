import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AWS"]

  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies and best practices.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and exceptional performance.",
    },
  ]

  return (
    <section id="about" className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hey, I'm Biraj
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate full-stack developer creating digital experiences that make a difference
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Me</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer who loves building things that matter. Whether it's writing clean code, exploring new technologies, or tinkering with hardware, I'm always driven by curiosity and a desire to create.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
            With a strong foundation in both frontend and backend development, I enjoy turning ideas into real, functional applications that people actually use and benefit from. My goal is to not just build projects—but to make an impact through them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
               Technology, in all its forms, excites me. From hardware circuits to scalable web applications, I’m always learning, experimenting, and pushing my limits.


              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
