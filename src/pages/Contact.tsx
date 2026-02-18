import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  // Formspree Hook
  const [state, handleSubmit] = useForm("xpqjljpd");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Success Toast + Reset Form
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! We'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@zernordsitconsultant.com",
      link: "mailto:info@zernordsitconsultant.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (639) 480-8857",
      link: "tel:+16394808857",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content:
        "Office Suite: 4151, 33Rd Street West, Saskatoon, S7R 0M4, SK, Canada",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Ready to start your project? Contact us today and let's discuss how
            we can help transform your digital presence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-8 glass text-center hover:border-primary/30 transition-smooth hover:shadow-medium animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {info.title}
                </h3>

                {info.link.startsWith("http") ||
                info.link.startsWith("mailto") ||
                info.link.startsWith("tel") ? (
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.content}</p>
                )}
              </Card>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FORM */}
            <div className="animate-slide-in-left">
              <Card className="p-8 glass">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send Us a <span className="text-primary">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden Subject */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Website Inquiry - Arham Edits"
                  />

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="resize-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full gradient-primary border-0 group"
                    size="lg"
                  >
                    {state.submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* MAP */}
            <div className="animate-slide-in-right">
              <Card className="p-8 glass h-full">
                <h2 className="text-3xl font-bold mb-6">
                  Visit Our <span className="text-primary">Office</span>
                </h2>

                <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.3039929506576!2d-106.750705!3d52.1469811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f9d44e530001%3A0x1b23ad43d3c133f1!2s4151%2033rd%20St%20W%2C%20Saskatoon%2C%20SK%20S7R%200M4%2C%20Canada!5e0!3m2!1sen!2s!4v1764080543440!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Office Location"
                  />
                </div>

                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    Office Suite: 4151, 33Rd Street West, Saskatoon, S7R 0M4,
                    SK, Canada
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
