import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Video, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import groupYogaImg from "@/assets/group-yoga.jpg";
import corporateYogaImg from "@/assets/corporate-yoga.jpg";
import onlineYogaImg from "@/assets/online-yoga.jpg";

const FeaturedServices = () => {
  const services = [
    {
      title: "Group Classes",
      description: "Join our vibrant community sessions",
      icon: Users,
      image: groupYogaImg,
      highlight: "Most Popular"
    },
    {
      title: "Corporate Wellness",
      description: "Transform your workplace culture",
      icon: Building2,
      image: corporateYogaImg,
      highlight: "Team Building"
    },
    {
      title: "Online Sessions",
      description: "Practice from anywhere, anytime",
      icon: Video,
      image: onlineYogaImg,
      highlight: "Flexible"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-earth mb-4 animate-fade-up">
            Our Featured Services
          </h2>
          <p className="text-lg text-earth/80 max-w-2xl mx-auto animate-fade-up">
            Discover the perfect yoga practice for your lifestyle and goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-sage/20 animate-fade-up overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/60 to-transparent"></div>
                
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-sage text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.highlight}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-earth mb-2">{service.title}</h3>
                <p className="text-earth/80 mb-4">{service.description}</p>
                <Button asChild variant="outline" className="w-full border-sage text-sage hover:bg-sage hover:text-white">
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-sage hover:bg-sage/90 text-white px-8 py-3">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;