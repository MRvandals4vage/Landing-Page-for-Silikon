export function LocationsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Serving Mumbai & Beyond</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Based in Thane, we provide glass solutions across Mumbai and Maharashtra
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-azure rounded-full"></div>
                    <span className="text-muted-foreground">Mumbai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red rounded-full"></div>
                    <span className="text-muted-foreground">Thane</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-azure rounded-full"></div>
                    <span className="text-muted-foreground">Navi Mumbai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red rounded-full"></div>
                    <span className="text-muted-foreground">Pune</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Head Office</h3>
                <div className="bg-background p-6 rounded-lg border">
                  <p className="text-foreground font-medium mb-2">SILIKON ENGINEERING SOLUTIONS PRIVATE LIMITED</p>
                  <p className="text-muted-foreground mb-4">
                    Bldg Brentford, A- Wing / 704
                    <br />
                    Hiranandani Estate
                    <br />
                    Thane, Maharashtra, India - 400607
                  </p>
                  <p className="text-azure font-medium">mona.y.d@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/mumbai-skyline-with-modern-buildings.jpg"
              alt="Mumbai skyline"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
