import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Wind, Shield, Volume2 } from "lucide-react"

export function PerformanceSection() {
  const metrics = [
    {
      icon: Droplets,
      title: "Water Resistance",
      value: "600 Pa",
      description: "Superior water penetration resistance",
    },
    {
      icon: Wind,
      title: "Air Tightness",
      value: "750 Pa",
      description: "Exceptional air penetration control",
    },
    {
      icon: Shield,
      title: "Wind Load",
      value: "up to 4 kPa",
      description: "Outstanding structural integrity",
    },
    {
      icon: Volume2,
      title: "Sound Reduction",
      value: "up to 42 dB",
      description: "Premium acoustic performance",
    },
  ]

  return (
    <section id="performance" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Performance Data</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our products exceed industry standards with superior performance metrics that ensure long-lasting
            reliability and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-muted-foreground">{metric.title}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              ONE OF THE
              <br />
              <span className="text-primary">MOST ADVANCED IN THE INDUSTRY</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
