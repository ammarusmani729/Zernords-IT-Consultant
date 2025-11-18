import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding gradient-mesh">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="glass rounded-3xl p-12 md:p-16 lg:p-20 text-center shadow-large">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your
              <span className="text-primary"> Digital Presence?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get a free consultation and discover how we can help you achieve your business goals with cutting-edge digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gradient-primary border-0 group">
                <Link to="/contact" className="flex items-center">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
