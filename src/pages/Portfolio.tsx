import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Mechplus from "../assets/Website Mockups/mechplus.svg";
import DaneshExchange from "../assets/Website Mockups/danesh_exchange.svg";
import IAX from "../assets/Website Mockups/iax.svg";
import Iboothme from "../assets/Website Mockups/iboothme.svg";
import MechplusDuct from "../assets/Website Mockups/mechplus_duct.svg";
import Spencer from "../assets/Website Mockups/spencer.svg";
import Dress4Less from "../assets/E-com Mockups/dress4less.svg";
import Fab from "../assets/E-com Mockups/fab.svg";
import Faster from "../assets/E-com Mockups/faster.svg";
import Muzikkon from "../assets/E-com Mockups/muzikkon.svg";
import ShopArcade from "../assets/E-com Mockups/shop_arcade.svg";
import TabletHire from "../assets/E-com Mockups/tablet_hire.svg";
import Vivid from "../assets/E-com Mockups/vivid.svg";
import MaxiorCard from "../assets/Cards Mockups/maxior.svg";
import MechplusCard from "../assets/Cards Mockups/mechplus.svg";
import MechplusDuctCard from "../assets/Cards Mockups/mechplus_duct.svg";
import MSEnterpriseCard from "../assets/Cards Mockups/ms_enterprise.svg";
import AllAboutCellSM from "../assets/Social Medias Mockups/allaboutcell.svg";
import MaxiorSM from "../assets/Social Medias Mockups/maxior.svg";
import MechplusSM from "../assets/Social Medias Mockups/mechplus.svg";
import MechplusDuctSM from "../assets/Social Medias Mockups/mechplus_duct.svg";
import Video1 from "../assets/Video Mockups/1.mp4";
import Video2 from "../assets/Video Mockups/2.mp4";
import Video3 from "../assets/Video Mockups/3.mp4";
import Video4 from "../assets/Video Mockups/4.mp4";
import Video5 from "../assets/Video Mockups/5.mp4";
import Video6 from "../assets/Video Mockups/6.mp4";
import Video7 from "../assets/Video Mockups/7.mp4";
import Video8 from "../assets/Video Mockups/8.mp4";


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Development", "E-Commerce", "Branding", "Social Media", "Video Editing"];

  const projects = [
    {
      id: "1",
      category: "Web Development",
      image: Mechplus,
      variant: "image-link",
      link: "https://mechplustc.com/",
    },
    {
      id: "1",
      category: "Web Development",
      image: DaneshExchange,
      variant: "image-link",
      link: "https://www.daneshexchange.com/",
    },
    {
      id: "1",
      category: "Web Development",
      image: IAX,
      variant: "image-link",
      link: "https://www.iaxservices.ae/",
    },
    {
      id: "1",
      category: "Web Development",
      image: Iboothme,
      variant: "image-link",
      link: "https://ae.iboothme.com/",
    },
    {
      id: "1",
      category: "Web Development",
      image: MechplusDuct,
      variant: "image-link",
      link: "https://mechplustc.ca/",
    },
    {
      id: "1",
      category: "Web Development",
      image: Spencer,
      variant: "image-link",
      link: "https://spencer-road-dental.co.uk/",
    },
    {
      id: "1",
      category: "E-Commerce",
      image: Dress4Less,
      variant: "image-link",
      link: "https://www.dress4less.com/",
    },
    {
      id: "1",
      category: "E-Commerce",
      image: Fab,
      variant: "image-link",
      link: "http://www.fabglassandmirror.com/",
    },
    {
      id: "1",
      category: "E-Commerce",
      image: Faster,
      variant: "image-link",
      link: "https://www.fastercars.ae/",
    },
    {
      id: "1",
      category: "E-Commerce",
      image: Muzikkon,
      variant: "image-link",
      link: "https://www.muzikkon.com/",
    },
    {
      id: "1",
      category: "E-Commerce",
      image: ShopArcade,
      variant: "image-link",
      link: "http://www.shoparcade.com/",
    },
    {
      id: "1",
      category: "E-Commerce",
      image: TabletHire,
      variant: "image-link",
      link: "https://www.tablethire.co.uk/",
    },
    {
      id: "1",
      category: "E-Commerce",
      image: Vivid,
      variant: "image-link",
      link: "https://www.vividads.com.au/",
    },
    {
      id: "2",
      category: "Branding",
      image: MaxiorCard,
      variant: "image-only",
    },
    {
      id: "2",
      category: "Branding",
      image: MSEnterpriseCard,
      variant: "image-only",
    },
    {
      id: "2",
      category: "Branding",
      image: MechplusCard,
      variant: "image-only",
    },
    {
      id: "2",
      category: "Branding",
      image: MechplusDuctCard,
      variant: "image-only",
    },
    {
      id: "2",
      category: "Social Media",
      image: AllAboutCellSM,
      variant: "image-only",
    },
    {
      id: "2",
      category: "Social Media",
      image: MaxiorSM,
      variant: "image-only",
    },
    {
      id: "2",
      category: "Social Media",
      image: MechplusSM,
      variant: "image-only",
    },
    {
      id: "2",
      category: "Social Media",
      image: MechplusDuctSM,
      variant: "image-only",
    },
    {
      id: "3",
      category: "Video Editing",
      video: Video1,
      variant: "video-only",
    },
    {
      id: "3",
      category: "Video Editing",
      video: Video2,
      variant: "video-only",
    },
    {
      id: "3",
      category: "Video Editing",
      video: Video3,
      variant: "video-only",
    },
    {
      id: "3",
      category: "Video Editing",
      video: Video4,
      variant: "video-only",
    },
    {
      id: "3",
      category: "Video Editing",
      video: Video5,
      variant: "video-only",
    },
    {
      id: "3",
      category: "Video Editing",
      video: Video6,
      variant: "video-only",
    },
    {
      id: "3",
      category: "Video Editing",
      video: Video7,
      variant: "video-only",
    },
    {
      id: "3",
      category: "Video Editing",
      video: Video8,
      variant: "video-only",
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
              <div key={`${project.category}-${index}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
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
