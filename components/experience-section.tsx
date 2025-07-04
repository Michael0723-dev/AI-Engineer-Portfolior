import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react"


const experiences = [
  {
    title: "Senior AI Engineer",
    company: "TechCorp AI",
    location: "San Francisco, CA",
    period: "2021 - Present",
    duration: "3+ years",
    description: "Leading AI initiatives and architecting scalable ML systems for enterprise clients.",
    achievements: [
      "Architected and deployed ML pipeline serving 50M+ daily predictions",
      "Led team of 8 engineers in developing computer vision solutions",
      "Reduced model inference time by 60% through optimization techniques",
      "Implemented MLOps practices reducing deployment time from weeks to hours",
    ],
    technologies: ["Python", "TensorFlow", "Kubernetes", "AWS", "MLflow"],
    companyLogo: "🏢",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "AI Research Engineer",
    company: "InnovateLabs",
    location: "New York, NY",
    period: "2019 - 2021",
    duration: "2 years",
    description: "Conducted cutting-edge research in NLP and computer vision, publishing in top-tier conferences.",
    achievements: [
      "Published 8 papers in NIPS, ICML, and ICLR conferences",
      "Developed novel attention mechanism improving BERT performance by 15%",
      "Created open-source library with 10K+ GitHub stars",
      "Mentored 5 junior researchers and interns",
    ],
    technologies: ["PyTorch", "Transformers", "CUDA", "Docker", "GCP"],
    companyLogo: "🔬",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Machine Learning Engineer",
    company: "DataDriven Inc",
    location: "Seattle, WA",
    period: "2017 - 2019",
    duration: "2 years",
    description: "Built and maintained ML models for recommendation systems and fraud detection.",
    achievements: [
      "Improved recommendation CTR by 25% using deep learning",
      "Developed real-time fraud detection system with 99.5% accuracy",
      "Optimized data pipeline processing 1TB+ daily data",
      "Collaborated with product teams to integrate ML features",
    ],
    technologies: ["Scikit-learn", "Apache Spark", "PostgreSQL", "Redis", "Airflow"],
    companyLogo: "📊",
    color: "from-green-500 to-blue-600",
  },
  {
    title: "Data Scientist",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2016 - 2017",
    duration: "1 year",
    description: "Analyzed user behavior data and built predictive models for business growth.",
    achievements: [
      "Built customer churn prediction model reducing churn by 20%",
      "Created A/B testing framework for product experiments",
      "Developed automated reporting dashboard for executives",
      "Established data science best practices and workflows",
    ],
    technologies: ["Python", "R", "SQL", "Tableau", "AWS"],
    companyLogo: "🚀",
    color: "from-orange-500 to-red-600",
  },
]

export function ExperienceSection() {


  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A journey through innovative AI projects and leadership roles.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 md:-translate-x-2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg animate-pulse-slow`}
                  ></div>
                  <div
                    className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-20`}
                  ></div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="card-hover glass border-white/10 shadow-strong overflow-hidden group">
                    {/* Card header with gradient */}
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{exp.companyLogo}</span>
                            <div>
                              <CardTitle className="text-xl mb-1 gradient-text">{exp.title}</CardTitle>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Building className="h-4 w-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <Badge variant="outline" className="bg-gradient-accent text-white border-0">
                              {exp.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <h4 className="font-semibold gradient-text-secondary">Key Achievements</h4>
                          </div>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-3 text-sm">
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 gradient-text">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="bg-white/10 text-foreground border border-white/20 hover:bg-white/20 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
