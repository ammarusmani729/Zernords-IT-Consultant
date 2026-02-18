import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";
import Mock from "../assets/mock.png";
import Mock2 from "../assets/mock2.png";
import Mock3 from "../assets/mock3.png";
import Main from "../assets/main-img.webp";

import { 
  Code, Palette, Smartphone, Share2, Image as ImageIcon, 
  ShoppingCart, Video, Search, MousePointerClick, MapPin 
} from "lucide-react";

const Index = () => {
  const portfolioProjects = [
    {
      id: "ecommerce",
      title: "Maxior E-Commerce Platform",
      category: "E-Commerce",
      description: "A cutting-edge online shopping experience with seamless checkout and inventory management.",
      image: Mock3,
      tags: ["Shopify"],
    },
    {
      id: "dashboard",
      title: "Mech Plus Duct Cleaning",
      category: "Dashboard App",
      description: "Secure and user-friendly banking application with advanced features.",
      image: Mock2,  
      tags: ["Elementor", "WordPress"],
    },
    {
      id: "portfolio website",
      title: "Mech Plus Trading & Consultancy",
      category: "Website",
      description: "Real-time analytics platform with intuitive data visualization and reporting.",
      image: Mock,
      tags: ["WordPress", "Slider"],
    },
    
  ];

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies for best performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces that delight users and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Apps", "Cross-Platform", "App Store Launch"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic campaigns that build brand awareness and engage your audience.",
      features: ["Content Strategy", "Community Management", "Analytics"],
    },
  ];

  const brands = [
    "MechPlus Trading", "Maxior Perfumes", "MechPlus Duct Cleaning", "All About Cell"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 gradient-mesh relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-bright/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto container-padding relative z-10 mt-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Transform Your Vision Into
              <span className="bg-gradient-to-r from-primary via-primary-bright to-primary-light bg-clip-text text-transparent"> Digital Reality</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We craft premium digital experiences that drive growth, engage users, and establish your brand as an industry leader.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gradient-primary border-0 group shadow-[0_0_30px_rgba(27,23,255,0.5)] hover:shadow-[0_0_40px_rgba(27,23,255,0.7)]">
                <Link to="/contact" className="flex items-center">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10 shadow-[0_0_20px_rgba(0,164,255,0.3)]">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { icon: Award, label: "Years Experience", value: "10+" },
              { icon: Users, label: "Happy Clients", value: "20+" },
              { icon: TrendingUp, label: "Projects Completed", value: "20+" },
              { icon: Sparkles, label: "Success Rate", value: "95%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl text-center hover:border-primary/50 transition-smooth animate-scale-in hover:shadow-[0_0_25px_rgba(27,23,255,0.4)] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-primary-bright transition-smooth" />
                <p className="text-3xl font-bold bg-gradient-to-br from-primary to-primary-bright bg-clip-text text-transparent mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful digital transformations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>
          
          {/*<div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services" className="flex items-center">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Why Choose <span className="text-primary">Zernords IT?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just another digital agency. We're your strategic partner in building exceptional digital experiences that drive real business results.
              </p>
              <ul className="space-y-4">
                {[
                  "10+ years of industry expertise",
                  "International-level quality standards",
                  "Cutting-edge technology stack",
                  "Dedicated project management",
                  "24/7 support and maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-primary-foreground">✓</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="gradient-primary border-0">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-large">
                <img
                  src={Main}
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl gradient-primary blur-2xl opacity-30"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-primary-bright blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <p className="text-center text-sm text-muted-foreground mb-12 uppercase tracking-wider">
            Trusted by Brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 glass rounded-xl hover:border-primary/30 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-lg font-semibold text-muted-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
