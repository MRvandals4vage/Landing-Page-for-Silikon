export function WhyChooseSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Silikon Engineering?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            With years of experience in glass solutions, we deliver excellence in every project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-azure/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-azure rounded-full"></div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Expert Craftsmanship</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our skilled technicians bring precision and attention to detail in every installation
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-red rounded-full"></div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Quality Materials</h3>
            <p className="text-muted-foreground leading-relaxed">
              We source premium glass and hardware to ensure durability and performance
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-azure/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-azure rounded-full"></div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Timely Delivery</h3>
            <p className="text-muted-foreground leading-relaxed">
              We respect your schedule and complete projects on time, every time
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
