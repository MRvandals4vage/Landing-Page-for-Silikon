export function QualitySection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Quality That Speaks for Itself</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Premium Glass Solutions</h3>
                  <p className="text-muted-foreground">
                    We use only the finest quality glass materials that meet international standards for clarity,
                    strength, and durability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-azure rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Precision Engineering</h3>
                  <p className="text-muted-foreground">
                    Every installation is measured and fitted with precision, ensuring perfect alignment and optimal
                    performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Long-term Warranty</h3>
                  <p className="text-muted-foreground">
                    We stand behind our work with comprehensive warranties that give you peace of mind for years to
                    come.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/modern-glass-building-detail-close-up.jpg"
              alt="Quality glass installation detail"
              className="w-full h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
