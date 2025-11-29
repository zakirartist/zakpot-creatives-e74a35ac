import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import Customers from "@/components/Customers";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Customers />
        <Portfolio />
        <Reviews />
        <Contact />
      </main>
      <footer className="py-8 px-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 AI AdAgency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
