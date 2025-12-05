import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp, Zap, BarChart3, Megaphone } from "lucide-react";
const services = [{
  icon: Brain,
  title: "AI-Powered Strategy",
  description: "Leverage machine learning algorithms to develop data-driven advertising strategies that adapt and improve in real-time."
}, {
  icon: Target,
  title: "Precision Targeting",
  description: "Reach your ideal audience with laser-focused targeting powered by advanced demographic and behavioral analysis."
}, {
  icon: TrendingUp,
  title: "Performance Optimization",
  description: "Automatically optimize campaigns for maximum ROI using AI-driven insights and continuous A/B testing."
}, {
  icon: Zap,
  title: "Creative Automation",
  description: "Generate and test thousands of ad variations instantly with our AI creative engine for optimal performance."
}, {
  icon: BarChart3,
  title: "Predictive Analytics",
  description: "Forecast campaign outcomes and identify opportunities before your competitors with predictive modeling."
}, {
  icon: Megaphone,
  title: "Multi-Channel Campaigns",
  description: "Execute seamlessly across all major platforms with unified messaging and consistent brand presence."
}];
export const Services = () => {
  return <section className="py-24 px-4 relative" id="services">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold"> AI-Powered Digital Marketing Solutions AI-Powered Digital Marketing Solutions<span className="gradient-text">AI-Powered Digital Marketing Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground">A harmonized blend of artificial inteligence, Creative team & marketings experts for your got to promotional services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={service.title} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-elevated animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};