import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
export const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget as HTMLFormElement | null;
    const formData = new FormData(form ?? undefined);
    const firstName = formData.get("firstName") as string ?? "";
    const lastName = formData.get("lastName") as string ?? "";
    const email = formData.get("email") as string ?? "";
    const company = formData.get("company") as string ?? "";
    const message = formData.get("message") as string ?? "";
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: `${firstName} ${lastName}`.trim(),
          email,
          company,
          message
        }
      });
      console.log("send-contact-email response:", {
        data,
        error
      });
      if (error) {
        throw error;
      }
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
      });
      if (form && typeof form.reset === "function") {
        form.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-24 px-4 relative" id="contact">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Let's Create <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your advertising strategy? Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" name="firstName" placeholder="John" className="bg-background/50 border-border/50" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" name="lastName" placeholder="Doe" className="bg-background/50 border-border/50" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" className="bg-background/50 border-border/50" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input id="company" name="company" placeholder="Your Company" className="bg-background/50 border-border/50" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} className="bg-background/50 border-border/50 resize-none" required />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6 animate-slide-up animate-delay-100">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
              <div className="gap-4 flex-row flex items-center justify-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us At</h3>
                  <p className="text-muted-foreground">zakpotcreatives@gmail.com
zakirhossain7770@gmail.com   </p>
                  <p className="text-muted-foreground">
                </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+88 01685 646 148 | +88 01931 777 075</p>
                  <p className="text-sm text-muted-foreground mt-1">Sat-Thu 9am-8pm (UTC+6)</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">75 no, Sultangonj, West Dhanmondi,
Dhaka-1209</p>
                  <p className="text-muted-foreground">​</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};