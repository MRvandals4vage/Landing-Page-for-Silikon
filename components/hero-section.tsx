"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown } from "lucide-react"

export function HeroSection() {
  const handleWhatsAppQuote = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in getting a quote for glass paneling, automatic doors, or ventilation systems from Silikon Engineering Solutions.",
    )
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-glass-building-facade-mumbai.jpg"
          alt="Modern glass architecture in Mumbai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="text-white">SILIKON</span>
              <br />
              <span className="text-primary">ENGINEERING</span>
              <br />
              <span className="text-white">SOLUTIONS</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto text-pretty leading-relaxed">
              Glass Paneling • Automatic Doors • Ventilation Systems
            </p>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Creating modern architectural solutions with precision engineering and quality craftsmanship
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
              View Our Work
            </Button>
            <Button
              onClick={handleWhatsAppQuote}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Quote on WhatsApp
            </Button>
          </div>

          <div className="pt-16">
            <ArrowDown className="w-6 h-6 text-white/70 animate-bounce mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
