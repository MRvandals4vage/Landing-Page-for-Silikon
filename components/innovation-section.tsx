"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, Rocket, Target, Zap, ArrowRight, Play } from "lucide-react"

export function InnovationSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const innovations = [
    {
      title: "Smart Glass Integration",
      description: "Revolutionary electrochromic glass that adapts to lighting conditions automatically",
      image: "/smart-glass-technology-with-electronic-controls.jpg",
      stats: { efficiency: "40%", energy: "60%", cost: "25%" },
    },
    {
      title: "AI-Powered Door Systems",
      description: "Machine learning algorithms that predict and adapt to usage patterns",
      image: "/futuristic-automatic-door-with-ai-sensors.jpg",
      stats: { accuracy: "99%", speed: "50%", maintenance: "70%" },
    },
    {
      title: "Climate-Responsive Ventilation",
      description: "Intelligent HVAC systems that respond to environmental changes in real-time",
      image: "/advanced-ventilation-system-with-smart-controls.jpg",
      stats: { efficiency: "45%", comfort: "80%", savings: "35%" },
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % innovations.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary rounded-full animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 border border-accent rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Lightbulb className="w-4 h-4 mr-2" />
            INNOVATION LAB
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Pioneering the Future of
            <span className="text-primary"> Architectural Engineering</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our R&D team continuously pushes boundaries, developing next-generation solutions that redefine what's
            possible in modern construction.
          </p>
        </div>

        {/* Innovation Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{innovations[currentSlide].title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{innovations[currentSlide].description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(innovations[currentSlide].stats).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary mb-1">+{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Rocket className="w-4 h-4 mr-2" />
                Learn More
              </Button>
              <Button variant="outline" className="group bg-transparent">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={innovations[currentSlide].image || "/placeholder.svg"}
                alt={innovations[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {innovations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Target className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Precision Engineering</h3>
              <p className="text-muted-foreground mb-6">
                Every component is designed with microscopic precision, ensuring perfect fit and optimal performance.
              </p>
              <Button variant="ghost" className="group-hover:text-primary">
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Automation</h3>
              <p className="text-muted-foreground mb-6">
                AI-driven systems that learn, adapt, and optimize performance automatically over time.
              </p>
              <Button variant="ghost" className="group-hover:text-accent">
                Discover <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-accent/5 border-border">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-muted text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                  <Rocket className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Future-Ready</h3>
              <p className="text-muted-foreground mb-6">
                Built for tomorrow's challenges with modular designs and upgrade-ready architecture.
              </p>
              <Button variant="ghost" className="group-hover:text-primary">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
