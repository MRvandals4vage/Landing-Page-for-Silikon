"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export function ProcessSection() {
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Analysis",
      description:
        "Our expert engineers conduct thorough site analysis and understand your specific requirements for glass paneling, automatic doors, or ventilation systems.",
      features: ["Site Survey", "Requirement Analysis", "Technical Feasibility", "Cost Estimation"],
    },
    {
      step: "02",
      title: "Design & Engineering",
      description:
        "Custom design solutions using advanced CAD software and engineering calculations to ensure optimal performance and compliance with safety standards.",
      features: ["3D Modeling", "Structural Analysis", "Performance Simulation", "Compliance Check"],
    },
    {
      step: "03",
      title: "Manufacturing & Quality Control",
      description:
        "Precision manufacturing in our state-of-the-art facility with rigorous quality control processes to ensure every component meets our high standards.",
      features: ["Precision Manufacturing", "Quality Testing", "Material Certification", "Performance Validation"],
    },
    {
      step: "04",
      title: "Installation & Commissioning",
      description:
        "Professional installation by certified technicians followed by comprehensive testing and commissioning to ensure optimal system performance.",
      features: ["Expert Installation", "System Testing", "Performance Optimization", "Training & Handover"],
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Our <span className="text-azure">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From initial consultation to final commissioning, we follow a systematic approach to deliver exceptional
            results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {processSteps.map((process, index) => (
            <Card
              key={index}
              className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-azure to-red-500" />
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center border-2 border-azure/20 group-hover:border-azure/40 transition-colors">
                      <span className="text-2xl font-bold text-azure">{process.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-azure transition-colors">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{process.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {process.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-azure flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <ArrowRight className="h-8 w-8 text-azure/30 rotate-90" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
