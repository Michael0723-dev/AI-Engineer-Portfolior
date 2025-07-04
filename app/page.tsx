import { ClientWrapper, ClientSections } from "@/components/client-wrapper"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { CertificatesSection } from "@/components/certificates-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ClientWrapper />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <TestimonialsSection />
      <ClientSections />
    </main>
  )
}
