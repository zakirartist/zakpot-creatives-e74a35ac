import { useEffect, useRef } from "react";
const Customers = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, {
      threshold: 0.1
    });
    const logos = sectionRef.current?.querySelectorAll(".logo-card");
    logos?.forEach(logo => observer.observe(logo));
    return () => observer.disconnect();
  }, []);

  // Placeholder brand logos - can be replaced with actual client logos
  const brands = [{
    name: "Brand 1",
    color: "hsl(0 84% 60%)"
  }, {
    name: "Brand 2",
    color: "hsl(15 90% 50%)"
  }, {
    name: "Brand 3",
    color: "hsl(0 100% 50%)"
  }, {
    name: "Brand 4",
    color: "hsl(10 85% 55%)"
  }, {
    name: "Brand 5",
    color: "hsl(5 88% 58%)"
  }, {
    name: "Brand 6",
    color: "hsl(20 92% 52%)"
  }];
  return <section ref={sectionRef} id="customers" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Valuable <span className="gradient-text">Customers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Trusted by leading brands for compelling promotional solutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {brands.map((brand, index) => <div key={index} className="logo-card opacity-0 group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="relative h-32 bg-card border border-border/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-glow hover:border-primary/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Placeholder logo - replace with actual images */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center font-bold text-2xl" style={{
                background: `linear-gradient(135deg, ${brand.color}, hsl(0 0% 10%))`,
                boxShadow: `0 0 20px ${brand.color}40`
              }}>
                    {brand.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-foreground/80">
                    {brand.name}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to join our growing list of satisfied clients?{" "}
            <a href="#contact" className="text-primary hover:underline font-semibold">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>;
};
export default Customers;