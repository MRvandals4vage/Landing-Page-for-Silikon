import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Corporate Headquarters",
      location: "Mumbai Financial District",
      image: "/modern-glass-corporate-building.png",
      description: "Complete glass paneling and automatic door installation for a 20-story corporate tower.",
    },
    {
      title: "Residential Complex",
      location: "Thane West",
      image: "/luxury-residential-building-with-glass-panels.jpg",
      description: "Premium ventilation systems and glass installations for luxury residential development.",
    },
    {
      title: "Shopping Mall",
      location: "Pune City Center",
      image: "/modern-shopping-mall-with-automatic-doors.jpg",
      description: "Comprehensive automatic door systems and climate control solutions.",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover how we've transformed spaces across Maharashtra with our innovative engineering solutions and
            precision installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-medium">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
