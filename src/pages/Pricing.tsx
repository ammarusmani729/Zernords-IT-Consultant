import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$2,999",
      period: "one-time",
      features: [
        "5-page responsive website",
        "Modern UI/UX design",
        "Mobile-friendly layout",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      description: "Ideal for growing businesses",
      price: "$7,999",
      period: "one-time",
      features: [
        "15-page custom website",
        "Advanced UI/UX design",
        "Content management system",
        "Advanced SEO optimization",
        "E-commerce integration",
        "Analytics setup",
        "3 months support",
        "Social media integration",
      ],
      popular: true,
    },
    {
      name: "Premium",
      description: "For enterprises seeking excellence",
      price: "Custom",
      period: "contact us",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced features & integrations",
        "Dedicated project manager",
        "Priority support",
        "Performance optimization",
        "Security audits",
        "6 months support",
        "Training & documentation",
      ],
      popular: false,
    },
  ];

  const services = [
    { name: "Website Development", price: "Starting at $2,999" },
    { name: "UI/UX Design", price: "$1,500 - $5,000" },
    { name: "Mobile App Development", price: "$10,000 - $50,000" },
    { name: "E-Commerce Store", price: "$5,000 - $15,000" },
    { name: "Social Media Marketing", price: "$500 - $3,000/month" },
    { name: "SEO Services", price: "$800 - $2,500/month" },
    { name: "PPC Management", price: "$1,000 - $5,000/month" },
    { name: "Graphic Design", price: "$500 - $2,000" },
    { name: "Video Editing", price: "$300 - $1,500" },
    { name: "POS System Setup", price: "$2,000 - $8,000" },
    { name: "GMB Optimization", price: "$500 - $1,500" },
    { name: "Maintenance & Support", price: "$200 - $1,000/month" },
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, credit cards, PayPal, and cryptocurrency. For larger projects, we offer flexible payment plans with milestone-based billing.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the initial designs or direction, we'll work with you to make it right. For detailed refund terms, please review our service agreement.",
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely! You can upgrade your package at any time. We'll credit your initial payment toward the upgraded package and bill you the difference.",
    },
    {
      question: "What's included in support and maintenance?",
      answer: "Support includes bug fixes, security updates, content updates, technical assistance, and performance monitoring. Premium packages also include feature enhancements and priority response times.",
    },
    {
      question: "Do you offer custom packages?",
      answer: "Yes! We understand every business is unique. We can create custom packages tailored to your specific needs and budget. Contact us to discuss your requirements.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees! We provide transparent pricing upfront. Any additional costs (like third-party services, premium plugins, or expanded scope) will be discussed and approved before proceeding.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Choose the perfect package for your business needs. All packages include premium quality and dedicated support.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 glass hover:border-primary/30 transition-smooth hover:shadow-large animate-scale-in ${
                  pkg.popular ? "border-primary shadow-large scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="inline-block px-3 py-1 rounded-full gradient-primary text-xs font-semibold text-primary-foreground mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  {pkg.period !== "contact us" && (
                    <span className="text-sm text-muted-foreground ml-2">/ {pkg.period}</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  className={`w-full ${pkg.popular ? "gradient-primary border-0" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Service <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for all our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 glass hover:border-primary/30 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-primary font-bold">{service.price}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom quote? We're here to help!
            </p>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us for Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Package <span className="text-primary">Comparison</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See what's included in each package
            </p>
          </div>
          
          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 text-foreground font-semibold">Features</th>
                    <th className="text-center p-6 text-foreground font-semibold">Starter</th>
                    <th className="text-center p-6 text-foreground font-semibold bg-primary/5">Growth</th>
                    <th className="text-center p-6 text-foreground font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Pages", "5", "15", "Unlimited"],
                    ["Custom Design", "✓", "✓", "✓"],
                    ["Mobile Responsive", "✓", "✓", "✓"],
                    ["SEO Optimization", "Basic", "Advanced", "Premium"],
                    ["CMS Integration", "-", "✓", "✓"],
                    ["E-Commerce", "-", "✓", "✓"],
                    ["Support Period", "1 month", "3 months", "6 months"],
                    ["Revisions", "2", "5", "Unlimited"],
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="p-6 text-muted-foreground">{row[0]}</td>
                      <td className="p-6 text-center text-muted-foreground">{row[1]}</td>
                      <td className="p-6 text-center text-muted-foreground bg-primary/5">{row[2]}</td>
                      <td className="p-6 text-center text-muted-foreground">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Pricing <span className="text-primary">FAQs</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our pricing
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
