import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group p-6 glass border-border/50 hover:border-primary/30 transition-smooth hover:shadow-medium cursor-pointer">
      <div className="mb-4">
        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-bounce">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default ServiceCard;
