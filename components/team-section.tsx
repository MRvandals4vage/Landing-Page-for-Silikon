export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our experienced professionals are dedicated to delivering exceptional glass solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
              <img src="/professional-indian-engineer-portrait.jpg" alt="Team member" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Rajesh Kumar</h3>
            <p className="text-azure font-medium mb-3">Lead Engineer</p>
            <p className="text-muted-foreground text-sm">
              15+ years experience in glass engineering and project management
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
              <img src="/professional-indian-woman-engineer-portrait.jpg" alt="Team member" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Priya Sharma</h3>
            <p className="text-red font-medium mb-3">Design Specialist</p>
            <p className="text-muted-foreground text-sm">Expert in architectural glass design and custom solutions</p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
              <img src="/professional-indian-technician-portrait.jpg" alt="Team member" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Amit Patel</h3>
            <p className="text-azure font-medium mb-3">Installation Manager</p>
            <p className="text-muted-foreground text-sm">
              Specialist in automatic door systems and ventilation solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
