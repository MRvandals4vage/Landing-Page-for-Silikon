"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProjectsPreview() {
  const featuredProjects = [
    {
      id: 1,
      title: "Mumbai Corporate Tower",
      category: "Glass Paneling",
      description: "Complete glass facade installation for 40-story commercial building",
      image: "/modern-glass-building-facade-mumbai.jpg",
      year: "2024",
    },
    {
      id: 2,
      title: "Thane Shopping Complex",
      category: "Automatic Doors",
      description: "Advanced automatic door systems for high-traffic retail environment",
      image: "/modern-automatic-glass-doors-shopping-mall.jpg",
      year: "2023",
    },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A glimpse of our engineering achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
