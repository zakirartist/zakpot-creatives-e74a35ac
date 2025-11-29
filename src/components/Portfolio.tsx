import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".portfolio-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Brand Campaign",
      category: "Social Media Marketing",
      description: "Complete social media campaign that increased engagement by 300%",
      gradient: "from-primary/80 to-accent/60",
    },
    {
      title: "Product Launch",
      category: "Digital Advertising",
      description: "Multi-channel ad campaign reaching 5M+ impressions",
      gradient: "from-accent/70 to-primary/80",
    },
    {
      title: "Website Redesign",
      category: "Web Design & Development",
      description: "Modern, responsive website with enhanced user experience",
      gradient: "from-primary/60 to-accent/80",
    },
    {
      title: "Video Production",
      category: "Content Creation",
      description: "High-impact promotional videos for brand awareness",
      gradient: "from-accent/80 to-primary/70",
    },
    {
      title: "SEO Strategy",
      category: "Search Optimization",
      description: "Comprehensive SEO strategy boosting organic traffic by 250%",
      gradient: "from-primary/70 to-accent/70",
    },
    {
      title: "Influencer Campaign",
      category: "Influencer Marketing",
      description: "Strategic influencer partnerships driving brand reach",
      gradient: "from-accent/60 to-primary/60",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-24 px-4 relative overflow-hidden bg-background/50"
    >
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item opacity-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/80 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <CardContent className="p-0 relative">
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-foreground/10">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-background/90 backdrop-blur-sm p-2 rounded-full">
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
