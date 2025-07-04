import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"


const certificates = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-MLS-2023-001",
    description: "Validates expertise in building, training, tuning, and deploying ML models on AWS.",
    skills: ["AWS SageMaker", "ML Pipeline", "Model Deployment", "Data Engineering"],
    verifyUrl: "#",
  },
  {
    title: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-MLE-2023-002",
    description: "Demonstrates ability to design, build, and productionize ML models on Google Cloud.",
    skills: ["Vertex AI", "BigQuery ML", "TensorFlow", "AutoML"],
    verifyUrl: "#",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2022",
    credentialId: "TF-DEV-2022-003",
    description: "Validates skills in building and training neural networks using TensorFlow.",
    skills: ["TensorFlow", "Keras", "Neural Networks", "Computer Vision"],
    verifyUrl: "#",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    date: "2021",
    credentialId: "DL-SPEC-2021-004",
    description: "Comprehensive specialization covering deep learning fundamentals and applications.",
    skills: ["Deep Learning", "CNNs", "RNNs", "Sequence Models"],
    verifyUrl: "#",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-005",
    description: "Validates skills in Kubernetes administration and cluster management.",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native"],
    verifyUrl: "#",
  },
  {
    title: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "AZ-AI-2023-006",
    description: "Demonstrates ability to implement AI solutions using Azure Cognitive Services.",
    skills: ["Azure AI", "Cognitive Services", "Bot Framework", "ML Studio"],
    verifyUrl: "#",
  },
]

const achievements = [
  {
    title: "AI Innovation Award",
    issuer: "Tech Excellence Foundation",
    date: "2023",
    description: "Recognized for outstanding contributions to AI research and development.",
  },
  {
    title: "Best Paper Award - ICML 2022",
    issuer: "International Conference on Machine Learning",
    date: "2022",
    description: "Awarded for groundbreaking research in transformer architectures.",
  },
  {
    title: "Outstanding Mentor Award",
    issuer: "AI Mentorship Program",
    date: "2023",
    description: "Recognized for exceptional mentoring of junior AI engineers and researchers.",
  },
]

export function CertificatesSection() {


  return (
    <section id="certificates" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Certificates & Awards</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">Professional certifications and recognition in AI and machine learning.</p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader className="flex-shrink-0 p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg leading-tight mb-2 break-words">{cert.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground mb-2">
                        <span className="font-medium break-words">{cert.issuer}</span>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Calendar className="h-3 w-3" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        ID: {cert.credentialId}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-4 sm:p-6 pt-0">
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{cert.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-semibold text-sm mb-2">Skills Validated</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs break-words">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader className="flex-shrink-0 p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg flex-shrink-0">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg leading-tight mb-2 break-words">{achievement.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground mb-2">
                        <span className="font-medium break-words">{achievement.issuer}</span>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Calendar className="h-3 w-3" />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-4 sm:p-6 pt-0">
                  <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
