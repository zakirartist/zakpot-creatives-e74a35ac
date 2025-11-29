import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import Customers from "@/components/Customers";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Customers />
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
