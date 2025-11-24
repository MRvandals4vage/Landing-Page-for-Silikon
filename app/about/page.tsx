import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyHistory } from "@/components/about/company-history"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"
import { MissionVision } from "@/components/about/mission-vision"
import { AwardsSection } from "@/components/about/awards-section"
import { CultureSection } from "@/components/about/culture-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <CompanyHistory />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <CultureSection />
      <AwardsSection />
      <Footer />
    </main>
  )
}
