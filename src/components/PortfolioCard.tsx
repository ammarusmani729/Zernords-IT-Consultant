import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const PortfolioCard = ({ id, title, category, description, image, tags }: PortfolioCardProps) => {
  return (
    <Link to={`/portfolio/${id}`}>
      <Card className="group overflow-hidden glass border-border/50 hover:border-primary/30 transition-smooth hover:shadow-medium cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PortfolioCard;
