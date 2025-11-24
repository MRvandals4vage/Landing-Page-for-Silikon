import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ProjectsPreview } from "@/components/projects-preview"
import { ProcessSection } from "@/components/process-section"
import { TechnologySection } from "@/components/technology-section"
import { QualitySection } from "@/components/quality-section"
import { AboutPreview } from "@/components/about-preview"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CertificationsSection } from "@/components/certifications-section"
import { LocationsSection } from "@/components/locations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsPreview />
      <ProcessSection />
      <TechnologySection />
      <QualitySection />
      <AboutPreview />
      <TeamSection />
      <TestimonialsSection />
      <CertificationsSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
