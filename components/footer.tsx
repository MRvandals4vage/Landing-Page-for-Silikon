import { Separator } from "@/components/ui/separator"

export function Footer() {
  const services = ["Glass Paneling", "Automatic Doors", "Ventilation Systems", "Custom Solutions"]

  const company = ["About Us", "Our Projects", "Careers", "Contact"]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary mb-2">SILIKON</h3>
              <p className="text-sm text-muted-foreground mb-4">ENGINEERING SOLUTIONS PRIVATE LIMITED</p>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Where innovation meets transparency, Silikon brings clarity to your world with precision-engineered glass
              solutions, automatic doors, and advanced ventilation systems.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-medium">Email:</span> mona.y.d@gmail.com
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Address:</span> Bldg Brentford, A-Wing/704
                <br />
                Hiranandani Estate, Thane, Maharashtra - 400607
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Silikon Engineering Solutions Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
