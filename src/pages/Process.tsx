import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your brand, target audience, and competition. Our AI analyzes market trends, consumer behavior, and competitor strategies to identify opportunities.",
    deliverables: [
      "Market research report",
      "Audience persona development",
      "Competitive analysis",
      "Initial strategy framework"
    ]
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our AI algorithms process millions of data points to create a customized advertising strategy tailored to your specific goals and budget.",
    deliverables: [
      "Comprehensive media plan",
      "Budget allocation strategy",
      "KPI and success metrics",
      "Timeline and milestones"
    ]
  },
  {
    step: "03",
    title: "Creative Execution",
    description: "We develop compelling ad creatives using AI-powered insights. Our creative automation engine generates and tests multiple variations to find winning combinations.",
    deliverables: [
      "Ad creative concepts",
      "Multiple ad variations",
      "Landing page optimization",
      "A/B testing plan"
    ]
  },
  {
    step: "04",
    title: "Campaign Launch",
    description: "Your campaigns go live across selected channels with precision targeting. Our AI monitors performance from the first impression, ready to optimize in real-time.",
    deliverables: [
      "Multi-channel deployment",
      "Tracking implementation",
      "Real-time dashboard access",
      "Initial performance report"
    ]
  },
  {
    step: "05",
    title: "Optimization & Scaling",
    description: "Continuous AI-driven optimization ensures peak performance. We automatically adjust bids, targeting, and creative elements to maximize your ROI.",
    deliverables: [
      "Weekly performance reports",
      "Ongoing optimization",
      "Scale recommendations",
      "Strategic adjustments"
    ]
  }
];

const Process = () => {
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
                Our <span className="gradient-text">Process</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A proven methodology that combines AI innovation with advertising excellence
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((process, index) => (
                <Card
                  key={process.step}
                  className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                      <div className="text-6xl font-display font-bold gradient-text mb-4">
                        {process.step}
                      </div>
                      <h2 className="text-2xl font-bold">{process.title}</h2>
                    </div>

                    <div className="md:col-span-3 space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {process.description}
                      </p>

                      <div>
                        <h3 className="text-sm font-bold mb-3 text-primary">Deliverables:</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {process.deliverables.map((deliverable) => (
                            <div key={deliverable} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="p-8 bg-gradient-primary text-primary-foreground">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl mb-6 opacity-90">
                  Let's discuss how our AI-powered process can transform your advertising strategy
                </p>
                <Link to="/#contact">
                  <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                    Start Your Project
                  </Button>
                </Link>
              </Card>
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

export default Process;
