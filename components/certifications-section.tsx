"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Zap, Leaf } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      category: "Quality Management",
      description:
        "Certified quality management system ensuring consistent delivery of high-quality products and services.",
      year: "2020",
      color: "text-azure",
    },
    {
      icon: Shield,
      title: "ISO 14001:2015",
      category: "Environmental Management",
      description:
        "Environmental management system certification demonstrating our commitment to sustainable practices.",
      year: "2021",
      color: "text-green-500",
    },
    {
      icon: Zap,
      title: "BIS Certification",
      category: "Bureau of Indian Standards",
      description:
        "BIS mark certification for our glass panels and automatic door systems meeting Indian safety standards.",
      year: "2019",
      color: "text-yellow-500",
    },
    {
      icon: Leaf,
      title: "Green Building Council",
      category: "Sustainable Construction",
      description: "Certified member of Indian Green Building Council promoting sustainable building practices.",
      year: "2022",
      color: "text-emerald-500",
    },
  ]

  const awards = [
    "Best Engineering Solution 2023 - Maharashtra Chamber of Commerce",
    "Innovation in Glass Technology 2022 - Indian Glass Federation",
    "Excellence in Automatic Door Systems 2021 - Building Materials Association",
    "Sustainable Engineering Practices 2020 - Green Tech Awards",
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Certifications & <span className="text-azure">Awards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our commitment to quality and excellence is recognized through various industry certifications and awards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 text-center"
            >
              <CardContent className="p-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/50 mb-4 ${cert.color}`}
                >
                  <cert.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                <Badge variant="secondary" className="mb-3">
                  {cert.category}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{cert.description}</p>
                <div className="text-xs text-azure font-medium">Certified {cert.year}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Recent Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
              >
                <Award className="h-5 w-5 text-azure flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
