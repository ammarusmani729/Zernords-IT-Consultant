import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
             <Link to="/" className="flex items-center space-x-2 group">
                      <img 
            src={Logo} 
            alt="Logo"
            className="w-auto h-8 rounded-lg object-cover transition-smooth group-hover:scale-105"
          />
          </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              International-level digital agency delivering premium web solutions, design, and marketing services.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/zernords"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/zernords-it-consultant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/zernordsitconsultant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-smooth"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {/* <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Portfolio
                </Link>
              </li> */}
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Pricing
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Website Development</li>
              <li className="text-sm text-muted-foreground">UI/UX Design</li>
              <li className="text-sm text-muted-foreground">App Development</li>
              <li className="text-sm text-muted-foreground">Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@zernordsitconsultant.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  info@zernordsitconsultant.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+16394808857"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  +1 (639) 480-8857
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Office Suite: 4151, 33Rd Street West, Saskatoon, S7R 0M4, SK, Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Zernords IT Consultant. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
