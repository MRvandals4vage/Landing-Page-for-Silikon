import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, MapPin } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Expert Engineers", value: "25+" },
    { icon: Award, label: "Projects Completed", value: "500+" },
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: MapPin, label: "Cities Served", value: "12+" },
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Where Innovation Meets
              <br />
              <span className="text-primary">Engineering Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Welcome to a new dimension of modern engineering, where precision meets elegance. Our advanced glass
              paneling, automatic doors, and ventilation systems seamlessly blend functionality with aesthetic appeal,
              offering superior performance and lasting durability.
            </p>
            <p className="text-muted-foreground mb-8">
              Designed with precision and crafted for excellence, our solutions complement any architectural style with
              their minimalist approach. Discover the art of modern engineering with our comprehensive solutions, and
              transform every space into a masterpiece.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Engineering Solutions for Every Need</h3>
          <p className="text-muted-foreground max-w-4xl mx-auto text-pretty">
            Our comprehensive range includes precision glass paneling systems, intelligent automatic doors, and advanced
            ventilation solutions, each designed to meet varying architectural styles and functional requirements, from
            sleek modern installations to sophisticated commercial systems.
          </p>
        </div>
      </div>
    </section>
  )
}
