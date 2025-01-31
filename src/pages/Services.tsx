import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Building2, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions tailored to your specific needs and goals.",
      icon: User,
      price: "From $80/session",
    },
    {
      title: "Group Classes",
      description: "Join our community in energizing group yoga sessions.",
      icon: Users,
      price: "From $25/class",
    },
    {
      title: "Corporate Wellness",
      description: "Bring wellness to your workplace with customized programs.",
      icon: Building2,
      price: "Custom pricing",
    },
    {
      title: "Online Sessions",
      description: "Practice from anywhere with live online instruction.",
      icon: Video,
      price: "From $60/session",
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-earth mb-12 text-center animate-fade-up">
          Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-sage/20 animate-fade-up">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="h-8 w-8 text-sage" />
                  <CardTitle className="text-xl text-earth">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-earth/80">{service.description}</p>
                <p className="font-semibold text-earth">{service.price}</p>
                <Button asChild className="w-full bg-sage hover:bg-sage/90">
                  <Link to="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;