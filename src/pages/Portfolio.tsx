import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Development", "Mobile Apps", "E-Commerce", "Branding"];

  const projects = [
    {
      id: "ecommerce-platform",
      title: "Modern E-Commerce Platform",
      category: "E-Commerce",
      description: "A cutting-edge online shopping experience with seamless checkout and inventory management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      id: "saas-dashboard",
      title: "SaaS Analytics Dashboard",
      category: "Web Development",
      description: "Real-time analytics platform with intuitive data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Vue.js", "Firebase", "D3.js"],
    },
    {
      id: "mobile-banking",
      title: "Mobile Banking App",
      category: "Mobile Apps",
      description: "Secure and user-friendly banking application with advanced features.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      tags: ["React Native", "API", "Security"],
    },
    {
      id: "fitness-app",
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      description: "Comprehensive fitness tracking with personalized workout plans and nutrition guidance.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      tags: ["Flutter", "HealthKit", "Firebase"],
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website & Booking",
      category: "Web Development",
      description: "Modern website with integrated reservation system and menu management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
    },
    {
      id: "fashion-store",
      title: "Fashion E-Store",
      category: "E-Commerce",
      description: "Luxury fashion e-commerce platform with virtual try-on features.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      tags: ["Shopify", "React", "AR Technology"],
    },
    {
      id: "brand-identity",
      title: "Tech Startup Branding",
      category: "Branding",
      description: "Complete brand identity system including logo, guidelines, and marketing materials.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      tags: ["Brand Strategy", "Visual Identity", "Marketing"],
    },
    {
      id: "healthcare-portal",
      title: "Healthcare Patient Portal",
      category: "Web Development",
      description: "Secure patient portal with appointment scheduling and medical records access.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tags: ["React", "HIPAA Compliant", "Security"],
    },
    {
      id: "real-estate-app",
      title: "Real Estate Marketplace",
      category: "Mobile Apps",
      description: "Property listing app with virtual tours and mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      tags: ["React Native", "Maps API", "3D Tours"],
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore our collection of successful projects that showcase our expertise in delivering exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "gradient-primary border-0" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
