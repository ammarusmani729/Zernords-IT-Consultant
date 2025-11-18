import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";

const CaseStudy = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const caseStudy = {
    title: "Modern E-Commerce Platform",
    category: "E-Commerce",
    client: "TechRetail Inc.",
    date: "March 2024",
    duration: "3 months",
    team: "5 members",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    overview: "TechRetail Inc. approached us to completely redesign and rebuild their e-commerce platform. They needed a modern, scalable solution that could handle high traffic volumes while providing an exceptional user experience.",
    challenge: "The existing platform was outdated, slow, and couldn't handle the growing number of users. Cart abandonment rates were high, and the checkout process was cumbersome. The company was losing revenue due to these technical limitations.",
    solution: "We designed and developed a completely new platform using modern technologies. The new system features a streamlined checkout process, real-time inventory management, personalized product recommendations, and seamless payment integration. We implemented advanced caching strategies and optimized database queries to ensure lightning-fast performance.",
    impact: [
      { label: "Increase in Conversions", value: "145%" },
      { label: "Faster Page Load", value: "3x" },
      { label: "Cart Abandonment Reduction", value: "60%" },
      { label: "Customer Satisfaction", value: "98%" },
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Stripe", "AWS", "Docker"],
    testimonial: {
      content: "Zernords transformed our business completely. The new platform is not only beautiful but incredibly fast and reliable. Our sales have increased by over 140% since launch.",
      author: "John Smith",
      role: "CEO, TechRetail Inc.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="max-w-5xl mx-auto container-padding">
          <Link to="/portfolio">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="space-y-6 animate-fade-in">
            <Badge variant="secondary" className="text-sm">
              {caseStudy.category}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              {caseStudy.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{caseStudy.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">{caseStudy.team}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">{caseStudy.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-large animate-scale-in">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{caseStudy.overview}</p>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">The Challenge</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">{caseStudy.challenge}</p>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Project Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.impact.map((metric, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl text-center hover:border-primary/30 transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-foreground mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 gradient-mesh">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="glass p-12 rounded-3xl shadow-large text-center animate-scale-in">
            <p className="text-xl text-foreground leading-relaxed mb-8 italic">
              "{caseStudy.testimonial.content}"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={caseStudy.testimonial.avatar}
                alt={caseStudy.testimonial.author}
                className="w-16 h-16 rounded-full border-2 border-primary/20"
              />
              <div className="text-left">
                <p className="font-semibold text-foreground">{caseStudy.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help transform your business with cutting-edge digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
