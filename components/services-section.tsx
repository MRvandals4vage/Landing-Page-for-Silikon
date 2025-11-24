"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function ServicesSection() {
  const handleWhatsAppQuote = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in getting a quote for glass paneling, automatic doors, or ventilation systems from Silikon Engineering Solutions.",
    )
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank")
  }

  return (
    <section id="services" className="space-y-0">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-glass-building-facade-mumbai.jpg"
            alt="Modern glass paneling installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-balance">Glass Paneling</h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Premium glass panel installations for modern architectural projects. Precision-engineered for
                  durability and aesthetic excellence.
                </p>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span>Tempered Safety Glass</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span>Custom Dimensions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span>Weather Resistant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span>Energy Efficient</span>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppQuote}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-automatic-glass-doors-shopping-mall.jpg"
            alt="Automatic door systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div></div>
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-balance">Automatic Doors</h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  State-of-the-art automatic door systems combining convenience, security, and energy efficiency for
                  commercial and residential spaces.
                </p>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                  <span>Motion Sensors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                  <span>Access Control</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                  <span>Emergency Override</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                  <span>Low Maintenance</span>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppQuote}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-office-building-ventilation-system.jpg"
            alt="Ventilation systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-balance">Ventilation Systems</h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Advanced ventilation solutions ensuring optimal air quality and climate control for any environment.
                </p>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span>Smart Controls</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span>Energy Recovery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span>Air Filtration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span>Quiet Operation</span>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppQuote}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
