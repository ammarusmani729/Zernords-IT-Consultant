import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    content: "Zernords delivered an exceptional website that exceeded our expectations. Their attention to detail and professional approach made the entire process seamless.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthLabs",
    content: "The team at Zernords transformed our digital presence. Their innovative solutions and strategic thinking helped us achieve a 200% increase in conversions.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Studio",
    content: "Working with Zernords was a game-changer for our business. They understood our vision and brought it to life with stunning design and flawless execution.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="p-6 glass border-border/50 hover:border-primary/30 transition-smooth hover:shadow-medium animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center space-x-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialSlider;
