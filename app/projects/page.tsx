import { Navigation } from "@/components/navigation"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectCategories } from "@/components/projects/project-categories"
import { CaseStudies } from "@/components/projects/case-studies"
import { ClientLogos } from "@/components/projects/client-logos"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProjectsHero />
      <ProjectCategories />
      <ProjectsGrid />
      <CaseStudies />
      <ClientLogos />
      <Footer />
    </main>
  )
}
