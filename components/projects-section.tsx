import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"


const projects = [
  {
    title: "AI-Powered Code Assistant",
    description:
      "A VS Code extension that provides intelligent code suggestions and bug detection using large language models.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop&crop=center",
    technologies: ["TypeScript", "OpenAI API", "VS Code API", "Node.js"],
    achievements: ["100K+ active users", "4.8/5 rating on VS Code marketplace", "Reduces debugging time by 40%"],
    github: "#",
    demo: "https://kilocode.ai/",
  },
  {
    title: "Computer Vision for Medical Imaging",
    description:
      "Deep learning model for automated detection of anomalies in medical scans with radiologist-level accuracy.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=300&fit=crop&crop=center",
    technologies: ["PyTorch", "OpenCV", "DICOM", "FastAPI", "Docker"],
    achievements: ["95% sensitivity, 98% specificity", "FDA approval pending", "Deployed in 5 hospitals"],
    github: "#",
    demo: "https://www.qure.ai/",
  },
  {
    title: "Personalized Learning Platform",
    description:
      "AI-driven educational platform that adapts content difficulty based on student performance and learning patterns.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop&crop=center",
    technologies: ["Python", "TensorFlow", "React", "MongoDB", "AWS"],
    achievements: ["30% improvement in learning outcomes", "50K+ active students", "Partnerships with 20+ schools"],
    github: "#",
    demo: "https://www.cypherlearning.com/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 section-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Showcasing innovative AI solutions that make a real impact.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover glass border-white/10 shadow-colored group h-full flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-semibold mb-2 gradient-text-secondary">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-gradient-accent text-gray-900 dark:text-white border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="w-full button-gradient text-gray-900 dark:text-white border-0"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
