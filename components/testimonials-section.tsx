"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "Project Director",
      company: "Mumbai Infrastructure Ltd",
      content:
        "SILIKON's glass paneling solution transformed our corporate tower. The energy efficiency and aesthetic appeal exceeded all expectations. Their team's expertise in smart glass technology is unmatched.",
      rating: 5,
      image: "/professional-indian-businessman.png",
    },
    {
      name: "Priya Patel",
      position: "Facility Manager",
      company: "Thane Shopping Complex",
      content:
        "The automatic door systems installed by SILIKON have been flawless for over two years. The AI-powered sensors and energy-saving features have significantly reduced our operational costs.",
      rating: 5,
      image: "/team-member-2.png",
    },
    {
      name: "Dr. Amit Kumar",
      position: "Campus Director",
      company: "Pune Tech University",
      content:
        "Their ventilation system design for our IT campus is exceptional. The smart climate control and air quality monitoring have created an optimal environment for our students and faculty.",
      rating: 5,
      image: "/professional-indian-academic.jpg",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Client <span className="text-azure">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hear from our satisfied clients about their experience with SILIKON Engineering Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-azure/20">
                <Quote className="h-8 w-8" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-azure font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
