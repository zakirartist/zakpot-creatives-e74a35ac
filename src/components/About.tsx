import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Real-time campaign optimization using machine learning",
  "Reduced cost per acquisition by up to 60%",
  "Automated creative testing and iteration",
  "Advanced audience segmentation and targeting",
  "24/7 AI-powered campaign monitoring",
  "Transparent reporting and actionable insights",
];

export const About = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Why Choose <span className="gradient-text">AI Advertising</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're not just another advertising agency. We're pioneers in AI-driven marketing, combining cutting-edge technology with proven advertising strategies to deliver unparalleled results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our proprietary AI algorithms analyze millions of data points in real-time, ensuring your campaigns are always performing at their peak potential.
            </p>
            
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 mt-6">
              Learn More About Our Process
            </Button>
          </div>
          
          <div className="relative animate-fade-in animate-delay-200">
            <div className="aspect-square rounded-2xl bg-gradient-primary p-1 shadow-elevated">
              <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl font-display font-bold gradient-text">
                    3.5x
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Average Campaign Performance Improvement
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
