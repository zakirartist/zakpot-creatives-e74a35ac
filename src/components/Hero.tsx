import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4 animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Advanced AI-Powered Advertising Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight animate-slide-up animate-delay-100 text-center lg:text-9xl">
            Transform Your Brand with{" "}
            <span className="gradient-text">
Intelligent Tailored
Advertising Campaign</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">Harness the power of artificial intelligence to create, optimize, and scale advertising campaigns that deliver desired results.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up animate-delay-300">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary text-lg px-8 py-6">Previous Campaign Status</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-in animate-delay-300">
            {[{
            value: "250%",
            label: "Avg ROI Increase"
          }, {
            value: "48hrs",
            label: "Campaign Launch"
          }, {
            value: "10M+",
            label: "Ad Impressions"
          }, {
            value: "99%",
            label: "Client Satisfaction"
          }].map(stat => <div key={stat.label} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold gradient-text font-display">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};