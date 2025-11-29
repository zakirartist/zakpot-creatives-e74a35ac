import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
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

    const reviews = sectionRef.current?.querySelectorAll(".review-card");
    reviews?.forEach((review) => observer.observe(review));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      review: "ZAKPOT Creatives transformed our brand presence completely. Their creative approach and attention to detail exceeded all expectations. The ROI we've seen is phenomenal!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, FashionHub",
      review: "Working with ZAKPOT was an absolute pleasure. They understood our vision perfectly and delivered campaigns that resonated with our audience. Highly recommended!",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, GreenEarth Co.",
      review: "The team's creativity and professionalism are unmatched. They helped us reach new markets and significantly grow our customer base. Outstanding results!",
      rating: 5,
      avatar: "ER",
    },
    {
      name: "David Thompson",
      role: "CMO, FinanceFlow",
      review: "ZAKPOT's strategic approach to our advertising campaigns brought us incredible results. Their data-driven insights combined with creative excellence is a winning formula.",
      rating: 5,
      avatar: "DT",
    },
    {
      name: "Lisa Anderson",
      role: "Brand Manager, FoodiesWorld",
      review: "From concept to execution, ZAKPOT delivered beyond expectations. Our brand engagement has tripled since working with them. True professionals!",
      rating: 5,
      avatar: "LA",
    },
    {
      name: "James Wilson",
      role: "Director, HealthPlus",
      review: "The creative campaigns developed by ZAKPOT have elevated our brand to new heights. Their innovative strategies and execution are top-notch.",
      rating: 5,
      avatar: "JW",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="review-card opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/80 backdrop-blur-sm group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg shadow-glow">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Ready to join our satisfied clients?{" "}
            <a href="#contact" className="text-primary hover:underline font-semibold">
              Let's get started
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
