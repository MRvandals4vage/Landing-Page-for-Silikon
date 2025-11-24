"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function ContactSection() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to discuss my project requirements with Silikon Engineering Solutions.",
    )
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Contact our engineering experts for consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <Input placeholder="Glass Paneling, Automatic Doors, Ventilation" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Tell us about your project requirements..." className="min-h-[120px]" />
              </div>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-primary font-medium">mona.y.d@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Send us your project requirements</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-accent font-medium">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Call us for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-primary font-medium">Bldg Brentford, A-Wing/704</p>
                  <p className="text-sm text-muted-foreground">Hiranandani Estate, Thane, Maharashtra - 400607</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
