import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import {
  Code, Palette, Smartphone, Share2, Image as ImageIcon,
  ShoppingCart, Video, Search, MousePointerClick, MapPin, Megaphone
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom-built websites using cutting-edge technologies for optimal performance, security, and scalability.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Security First"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users and drive conversions through data-driven design decisions.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user interface and experience.",
      features: ["Native Development", "Cross-Platform", "App Store Launch", "Maintenance"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions.",
      features: ["Content Strategy", "Community Management", "Analytics", "Paid Advertising"],
    },
    {
      icon: ImageIcon,
      title: "Graphic Design",
      description: "Professional graphic design services including logos, branding materials, and marketing collateral.",
      features: ["Brand Identity", "Marketing Materials", "Print Design", "Digital Assets"],
    },
    {
      icon: ShoppingCart,
      title: "POS System Services",
      description: "Complete point-of-sale solutions for retail and hospitality businesses with inventory management.",
      features: ["Hardware Setup", "Software Integration", "Training", "Support"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Stores",
      description: "Full-featured online stores with secure payment processing, inventory management, and analytics.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics"],
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services for marketing, social media, and corporate communications.",
      features: ["Motion Graphics", "Color Grading", "Audio Enhancement", "Delivery Optimization"],
    },
    {
      icon: Search,
      title: "SEM (Search Engine Marketing)",
      description: "Strategic search engine marketing campaigns to increase visibility and drive qualified traffic.",
      features: ["Campaign Strategy", "Keyword Research", "Ad Creation", "Performance Tracking"],
    },
    {
      icon: MousePointerClick,
      title: "PPC (Pay Per Click)",
      description: "Targeted PPC campaigns across Google, Facebook, and other platforms for maximum ROI.",
      features: ["Platform Management", "A/B Testing", "Budget Optimization", "Conversion Tracking"],
    },
    {
      icon: MapPin,
      title: "GMB Optimization",
      description: "Google My Business optimization to improve local search visibility and attract more customers.",
      features: ["Profile Optimization", "Review Management", "Local SEO", "Performance Insights"],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
      features: ["Market Research", "Strategy Development", "Implementation", "Analytics & Reporting"],
    },
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while more complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive support and maintenance packages to ensure your digital solutions remain secure, up-to-date, and performing optimally. Our support includes bug fixes, updates, security patches, and feature enhancements.",
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern, industry-standard technologies including React, Next.js, Vue.js, Node.js, Python, and more. We select the best technology stack based on your specific project requirements and long-term goals.",
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can audit, optimize, and enhance existing projects. Whether you need bug fixes, performance improvements, or new features, our team can help take your existing solution to the next level.",
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote tailored to your needs.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we're happy to sign Non-Disclosure Agreements to protect your intellectual property and confidential information. We take client confidentiality very seriously.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive digital solutions designed to transform your business and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Strategy", desc: "Planning the optimal solution approach" },
              { step: "03", title: "Execution", desc: "Building with precision and excellence" },
              { step: "04", title: "Launch", desc: "Deploying and supporting your success" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative glass p-8 rounded-xl hover:border-primary/30 transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our services
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Services;
