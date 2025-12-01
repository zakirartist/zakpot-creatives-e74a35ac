import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";

const caseStudies = [
  {
    title: "E-Commerce Fashion Brand",
    category: "Retail",
    results: "320% ROAS Increase",
    description: "Transformed an online fashion retailer's advertising strategy using AI-powered product recommendations and dynamic creative optimization.",
    metrics: [
      { label: "ROAS", value: "320%" },
      { label: "CTR", value: "+180%" },
      { label: "CPA", value: "-65%" }
    ]
  },
  {
    title: "SaaS Platform Launch",
    category: "Technology",
    results: "5,000+ Quality Leads",
    description: "Launched a B2B SaaS platform with precision targeting and automated lead scoring, generating high-quality enterprise leads.",
    metrics: [
      { label: "Leads", value: "5,000+" },
      { label: "Conversion", value: "42%" },
      { label: "Cost/Lead", value: "-55%" }
    ]
  },
  {
    title: "Healthcare App Campaign",
    category: "Healthcare",
    results: "1M+ App Downloads",
    description: "Scaled a healthcare application from zero to one million downloads using AI-optimized multi-channel campaigns.",
    metrics: [
      { label: "Downloads", value: "1M+" },
      { label: "Retention", value: "68%" },
      { label: "Rating", value: "4.8★" }
    ]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10 pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <Link to="/">
              <Button variant="ghost" className="mb-8 hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h1 className="text-4xl md:text-6xl font-display font-bold">
                Our <span className="gradient-text">Case Studies</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real results from real campaigns. See how we've helped brands achieve extraordinary growth.
              </p>
            </div>

            <div className="grid gap-8 mb-16">
              {caseStudies.map((study, index) => (
                <Card
                  key={study.title}
                  className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {study.category}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold">{study.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {study.description}
                      </p>
                      <div className="pt-4">
                        <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                          View Full Case Study
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-primary">{study.results}</div>
                      <div className="space-y-3">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                            <span className="text-sm text-muted-foreground">{metric.label}</span>
                            <span className="text-lg font-bold gradient-text">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 px-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 ZAKPOT CREATIVES. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
