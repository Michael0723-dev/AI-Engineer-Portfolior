import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Zap, Award, Users, Lightbulb, Target } from "lucide-react"

const skills = [
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
    icon: Brain,
    color: "from-blue-500 to-purple-600",
  },
  {
    category: "Deep Learning",
    items: ["CNNs", "RNNs", "Transformers", "GANs", "BERT/GPT"],
    icon: Zap,
    color: "from-purple-500 to-pink-600",
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "R", "SQL"],
    icon: Code,
    color: "from-green-500 to-blue-600",
  },
  {
    category: "Cloud & MLOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "MLflow"],
    icon: Database,
    color: "from-orange-500 to-red-600",
  },
  {
    category: "Data Engineering",
    items: ["Apache Spark", "Airflow", "Kafka", "PostgreSQL", "MongoDB"],
    icon: Target,
    color: "from-teal-500 to-cyan-600",
  },
  {
    category: "AI Frameworks",
    items: ["LangChain", "Hugging Face", "OpenAI API", "Anthropic", "Cohere"],
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
  },
]

const highlights = [
  {
    icon: Brain,
    title: "AI Research",
    description: "Published 15+ papers in top-tier conferences",
    metric: "15+",
    label: "Publications",
  },
  {
    icon: Code,
    title: "Production Systems",
    description: "Deployed ML models serving 10M+ users",
    metric: "10M+",
    label: "Users Served",
  },
  {
    icon: Database,
    title: "Big Data",
    description: "Processed petabytes of data for insights",
    metric: "PB+",
    label: "Data Processed",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "3 patents in AI and machine learning",
    metric: "3",
    label: "Patents",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 section-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 animate-float opacity-20">
        <Users className="h-16 w-16 text-blue-400" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float-delayed opacity-20">
        <Lightbulb className="h-12 w-12 text-purple-400" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text-rainbow animate-gradient">
            About Me
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate AI engineer dedicated to pushing the boundaries of artificial intelligence and machine learning.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story Section */}
          <div>
            <div className="glass-strong p-8 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-3xl font-semibold mb-8 gradient-text flex items-center gap-3">
                <Users className="h-8 w-8" />
                My Story
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg hover:text-foreground transition-colors duration-300">My journey in AI began 8 years ago when I was fascinated by the potential of machines to learn and adapt. Since then, I've dedicated my career to developing cutting-edge AI solutions that solve real-world problems.</p>
                <p className="text-lg hover:text-foreground transition-colors duration-300">Throughout my career, I've had the privilege of working with leading tech companies and research institutions, contributing to breakthrough projects in computer vision, natural language processing, and autonomous systems.</p>
                <p className="text-lg hover:text-foreground transition-colors duration-300">I believe in the transformative power of AI and am committed to building ethical, responsible AI systems that benefit humanity. When I'm not coding, you can find me mentoring aspiring AI engineers or contributing to open-source projects.</p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="card-hover glass-strong border-white/20 shadow-soft group cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto mb-4 group-hover:animate-wiggle">
                      <highlight.icon className="h-8 w-8 text-gray-800 dark:text-white drop-shadow-lg" />
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2 group-hover:animate-pulse">
                      {highlight.metric}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{highlight.label}</div>
                    <h4 className="font-semibold mb-2 gradient-text-secondary">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold gradient-text-secondary flex items-center justify-center gap-3">
              <Code className="h-8 w-8" />
              Technical Expertise
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon
              return (
                <Card
                  key={index}
                  className="card-hover glass-strong border-white/20 shadow-soft group overflow-hidden relative"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skillGroup.color} shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white drop-shadow-sm" />
                      </div>
                      <h4 className="font-semibold text-lg gradient-text">{skillGroup.category}</h4>
                    </div>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="mr-2 mb-2 bg-white/10 text-foreground border border-white/20 hover:bg-white/20 transition-colors group-hover:animate-pulse"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
