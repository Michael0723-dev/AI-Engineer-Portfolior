import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, BookOpen, Users } from "lucide-react"


const education = [
  {
    degree: "Ph.D. in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2014 - 2016",
    gpa: "3.9/4.0",
    focus: "Machine Learning & Artificial Intelligence",
    thesis: "Deep Reinforcement Learning for Autonomous Systems",
    achievements: [
      "Summa Cum Laude",
      "Outstanding Graduate Student Award",
      "Published 12 papers during PhD",
      "Teaching Assistant for ML courses",
    ],
    icon: "🎓",
    color: "from-red-500 to-orange-500",
    level: "Doctoral",
  },
  {
    degree: "M.S. in Computer Science",
    school: "MIT",
    location: "Cambridge, MA",
    period: "2012 - 2014",
    gpa: "3.8/4.0",
    focus: "Artificial Intelligence",
    thesis: "Neural Networks for Natural Language Processing",
    achievements: [
      "Dean's List all semesters",
      "Research Assistant in AI Lab",
      "Winner of MIT AI Competition 2013",
      "President of Graduate AI Society",
    ],
    icon: "🏛️",
    color: "from-blue-500 to-indigo-500",
    level: "Master's",
  },
  {
    degree: "B.S. in Computer Science",
    school: "UC Berkeley",
    location: "Berkeley, CA",
    period: "2008 - 2012",
    gpa: "3.7/4.0",
    focus: "Computer Science & Mathematics",
    thesis: "Machine Learning Applications in Data Mining",
    achievements: [
      "Magna Cum Laude",
      "Phi Beta Kappa Honor Society",
      "ACM Programming Contest Finalist",
      "Undergraduate Research Scholar",
    ],
    icon: "🏫",
    color: "from-yellow-500 to-orange-500",
    level: "Bachelor's",
  },
]

const relevantCourses = [
  {
    category: "Core AI",
    courses: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
  },
  {
    category: "Advanced Topics",
    courses: ["Reinforcement Learning", "Statistical Learning Theory", "Neural Networks"],
  },
  { category: "Mathematics", courses: ["Linear Algebra", "Probability & Statistics", "Optimization Theory"] },
  { category: "Systems", courses: ["Data Structures & Algorithms", "Distributed Systems", "Database Systems"] },
]

export function EducationSection() {


  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-cyan-50/50 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-cyan-950/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Academic foundation in computer science and artificial intelligence.</p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-cyan-500 md:-translate-x-px"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 md:left-1/2 w-6 h-6 md:-translate-x-3 z-10">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} shadow-lg flex items-center justify-center text-white text-xs font-bold animate-pulse-slow`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} animate-ping opacity-20`}
                  ></div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="card-hover glass border-white/10 shadow-strong overflow-hidden group">
                    {/* Card header with gradient */}
                    <div className={`h-3 bg-gradient-to-r ${edu.color}`}></div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl animate-float">{edu.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className={`bg-gradient-to-r ${edu.color} text-white border-0`}>
                              {edu.level}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mb-2 gradient-text">{edu.degree}</CardTitle>
                          <div className="text-lg font-semibold text-muted-foreground mb-3">{edu.school}</div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.period}</span>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300"
                            >
                              GPA: {edu.gpa}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium gradient-text-secondary">
                              Focus: {edu.focus}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="h-4 w-4 text-purple-500" />
                            <h4 className="font-semibold gradient-text">Thesis</h4>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4 italic bg-muted/30 p-3 rounded-lg">
                            "{edu.thesis}"
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="h-4 w-4 text-yellow-500" />
                            <h4 className="font-semibold gradient-text-secondary">Achievements</h4>
                          </div>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-3 text-sm">
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}
                                ></div>
                                <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
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

        {/* Relevant Coursework Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="glass border-white/10 shadow-strong overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="h-6 w-6 text-blue-500" />
                <CardTitle className="text-2xl gradient-text">Relevant Coursework</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relevantCourses.map((courseGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-center gradient-text-secondary border-b border-muted pb-2">
                      {courseGroup.category}
                    </h4>
                    <div className="space-y-2">
                      {courseGroup.courses.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="secondary"
                          className="w-full justify-center bg-white/10 text-foreground border border-white/20 hover:bg-white/20 transition-colors text-xs py-1"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
