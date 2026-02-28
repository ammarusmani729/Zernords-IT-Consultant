import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PortfolioCardProps {
  id: string;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  video?: string;
  tags?: string[];
  variant?: "default" | "image-link" | "image-only" | "video-only" | string;
  link?: string;
}

const PortfolioCard = ({ id, title, category, description, image, video, tags, variant = "default", link }: PortfolioCardProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const isVideoOnly = variant === "video-only";
  const isImageLink = variant === "image-link";
  const isImageOnly = variant === "image-only";

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isVideoOnly || variant === "default") {
      setIsVideoOpen(true);
    }
  };

  const cardContent = (
    <>
      <Card className="group overflow-hidden glass border-border/50 hover:border-primary/30 transition-smooth hover:shadow-medium cursor-pointer" onClick={isVideoOnly || variant === "default" ? handleVideoClick : undefined}>
        <div className={`relative overflow-hidden bg-secondary ${
          isVideoOnly ? "aspect-[3/5]" : isImageLink || isImageOnly ? "aspect-square" : "aspect-[4/3]"
        }`}>
          {video ? (
            <video
              src={video}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
              preload="metadata"
              autoPlay
              muted
              loop
            />
          ) : (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
          {isImageLink && (
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
              <ExternalLink className="w-5 h-5 text-primary" />
            </div>
          )}
        </div>
        {!isVideoOnly && !isImageLink && !isImageOnly && (
          <div className="p-6">
            {/* <div className="mb-3">
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div> */}
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
              {title}
            </h3>
            {/* <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p> */}
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </Card>

      {video && (
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-sm w-full aspect-video bg-black border-none p-0">
            <video
              src={video}
              preload="metadata"
              controls
              autoPlay
              className="w-full h-full"
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );

  if (isImageLink && link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return <div>{cardContent}</div>;
};

export default PortfolioCard;
