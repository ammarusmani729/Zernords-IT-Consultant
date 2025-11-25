import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { Award, Users, Target, Zap } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      bio: "10+ years in digital innovation",
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      bio: "Tech visionary with enterprise experience",
    },
    {
      name: "Michael Rodriguez",
      role: "Creative Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      bio: "Award-winning designer",
    },
    {
      name: "Emily Watson",
      role: "Head of Marketing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      bio: "Digital marketing strategist",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We set the highest standards and consistently deliver exceptional results that exceed expectations.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparency and alignment throughout the journey.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every decision we make is focused on achieving measurable business outcomes and delivering real value.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
    },
  ];

  const faqs = [
    {
      question: "How long has Zernords been in business?",
      answer: "Zernords IT Consultant was founded in 2015 and has been delivering exceptional digital solutions for over 10 years. Our experience spans hundreds of successful projects across various industries.",
    },
    {
      question: "What makes Zernords different from other agencies?",
      answer: "Our commitment to international-level quality, personalized approach, and long-term partnerships set us apart. We don't just build solutions; we build lasting relationships and become invested in our clients' success.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work with clients across various industries including e-commerce, healthcare, finance, education, hospitality, and technology startups. Our diverse experience allows us to bring unique insights to every project.",
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with both! Whether you're a startup with a bold vision or an established enterprise looking to innovate, we have the expertise and flexibility to meet your needs.",
    },
    {
      question: "Where is your team located?",
      answer: "We have a distributed team of talented professionals working globally, allowing us to provide round-the-clock support and bring diverse perspectives to every project.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            About <span className="text-primary">Zernords IT</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            We're a team of passionate digital innovators dedicated to transforming businesses through cutting-edge technology and creative excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2015, Zernords IT Consultant started with a simple mission: to bridge the gap between innovative technology and real business needs. What began as a small team of dedicated developers has grown into a full-service digital agency serving clients globally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, we've completed 20+ projects, helped 20+ clients achieve their digital goals, and built a reputation for excellence that speaks for itself. Our international-level standards and commitment to quality have made us a trusted partner for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to push boundaries, embrace new technologies, and deliver solutions that don't just meet expectations—they exceed them.
              </p>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-large">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass p-8 rounded-xl hover:border-primary/30 transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>


      {/* Team Section */}
{/* djdj 
      
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl text-center hover:border-primary/30 transition-smooth hover:shadow-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>  
            ))}
          </div>
          
        </div>
      </section>
*/}
            

      {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto container-padding mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass p-12 rounded-3xl hover:border-primary/30 transition-smooth animate-slide-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with exceptional digital solutions that drive growth, enhance user experiences, and create lasting value. We believe in the transformative power of technology and design when applied with strategy and creativity.
              </p>
            </div>
            
            <div className="glass p-12 rounded-3xl hover:border-primary/30 transition-smooth animate-slide-in-right">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted digital partner for businesses worldwide, known for our commitment to excellence, innovation, and measurable results. We envision a future where every business has access to world-class digital solutions.
              </p>
            </div>
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
              Learn more about Zernords IT Consultanct
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

export default About;
