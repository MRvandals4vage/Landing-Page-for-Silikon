"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Zap, Shield, Gauge, Thermometer, Wind, Lock, Eye } from "lucide-react"

export function TechnologySection() {
  const [activeTab, setActiveTab] = useState("glass")

  const technologies = {
    glass: {
      title: "Advanced Glass Technology",
      icon: <Eye className="w-8 h-8" />,
      features: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Tempered Safety Glass",
          desc: "5x stronger than regular glass",
        },
        {
          icon: <Thermometer className="w-6 h-6" />,
          title: "Thermal Insulation",
          desc: "Energy-efficient double glazing",
        },
        { icon: <Eye className="w-6 h-6" />, title: "Crystal Clear Optics", desc: "99.9% optical clarity" },
        { icon: <Gauge className="w-6 h-6" />, title: "Impact Resistance", desc: "Withstands extreme weather" },
      ],
    },
    doors: {
      title: "Smart Door Systems",
      icon: <Lock className="w-8 h-8" />,
      features: [
        { icon: <Cpu className="w-6 h-6" />, title: "AI-Powered Sensors", desc: "Intelligent motion detection" },
        { icon: <Zap className="w-6 h-6" />, title: "Energy Efficient", desc: "Low power consumption motors" },
        { icon: <Lock className="w-6 h-6" />, title: "Security Integration", desc: "Access control compatibility" },
        { icon: <Shield className="w-6 h-6" />, title: "Safety Features", desc: "Emergency override systems" },
      ],
    },
    ventilation: {
      title: "Climate Control Systems",
      icon: <Wind className="w-8 h-8" />,
      features: [
        { icon: <Wind className="w-6 h-6" />, title: "Smart Airflow", desc: "Automated climate adjustment" },
        { icon: <Gauge className="w-6 h-6" />, title: "Pressure Control", desc: "Maintains optimal air pressure" },
        { icon: <Thermometer className="w-6 h-6" />, title: "Temperature Regulation", desc: "Precise climate control" },
        { icon: <Zap className="w-6 h-6" />, title: "Energy Recovery", desc: "Heat exchange technology" },
      ],
    },
  }

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            CUTTING-EDGE TECHNOLOGY
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Innovation at the Core of
            <span className="text-primary"> Every Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover the advanced technologies that power our engineering solutions, delivering unmatched performance
            and reliability.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === key
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-card hover:bg-muted text-foreground"
              }`}
            >
              {tech.icon}
              <span className="font-semibold">{tech.title}</span>
            </button>
          ))}
        </div>

        {/* Technology Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Reliability Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Patents Filed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">System Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Years Innovation</div>
          </div>
        </div>
      </div>
    </section>
  )
}
