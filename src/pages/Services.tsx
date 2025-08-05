import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Building2, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import groupYogaImg from "@/assets/group-yoga.jpg";
import corporateYogaImg from "@/assets/corporate-yoga.jpg";
import onlineYogaImg from "@/assets/online-yoga.jpg";
import studioImg from "@/assets/studio-interior.jpg";
import { format } from "date-fns";

const Services = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Simulated available time slots - this would come from your backend once Supabase is set up
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const services = [
    {
      title: "Personal Training",
      description: "Personalized one-on-one sessions designed to meet your unique wellness goals. Whether you're a beginner or advanced practitioner, receive individual attention and customized sequences.",
      icon: User,
      price: "Starting from ₹2,000/session",
      image: studioImg,
      features: ["Customized yoga sequences", "Personal goal setting", "Injury modification", "Flexible scheduling"]
    },
    {
      title: "Group Classes",
      description: "Join our vibrant community in energizing group sessions. Experience the collective energy and support of like-minded practitioners in a welcoming environment.",
      icon: Users,
      price: "₹800/class or ₹6,000/month",
      image: groupYogaImg,
      features: ["All levels welcome", "Community support", "Variety of styles", "Social connection"]
    },
    {
      title: "Corporate Wellness",
      description: "Transform your workplace culture with yoga. Reduce stress, improve productivity, and enhance employee well-being with our tailored corporate programs.",
      icon: Building2,
      price: "Custom pricing available",
      image: corporateYogaImg,
      features: ["On-site sessions", "Stress management", "Team building", "Flexible programs"]
    },
    {
      title: "Online Sessions",
      description: "Practice from the comfort of your home with our live interactive online classes. Stay connected to your practice no matter where you are.",
      icon: Video,
      price: "₹500/class or ₹3,000/month",
      image: onlineYogaImg,
      features: ["Live interaction", "Recorded sessions", "Global community", "Convenient timing"]
    },
  ];

  const handleBooking = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-earth mb-4 animate-fade-up">
            Our Yoga Services
          </h1>
          <p className="text-lg text-earth/80 max-w-3xl mx-auto animate-fade-up">
            Choose from our range of authentic yoga offerings designed to support your wellness journey. 
            Each service is crafted with care to honor traditional practices while meeting modern needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-sage/20 animate-fade-up overflow-hidden group">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-earth/20"></div>
                <div className="absolute top-4 left-4">
                  <service.icon className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold text-earth">{service.title}</h2>
                <p className="text-earth/80">{service.description}</p>
                
                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 text-sm text-earth/70">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-sage rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <p className="font-semibold text-earth text-lg">{service.price}</p>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button 
                      className="w-full bg-sage hover:bg-sage/90"
                      onClick={() => handleBooking(service.title)}
                    >
                      Book Now
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Book {service.title}</SheetTitle>
                    </SheetHeader>
                    <div className="py-6">
                      <div className="mb-6">
                        <h3 className="text-lg font-medium mb-2">Select Date</h3>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                      {date && (
                        <div>
                          <h3 className="text-lg font-medium mb-4">
                            Available Slots for {format(date, "MMMM do, yyyy")}
                          </h3>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((slot) => (
                              <Button
                                key={slot}
                                variant="outline"
                                className="w-full"
                              >
                                {slot}
                              </Button>
                            ))}
                          </div>
                          <div className="mt-6">
                            <p className="text-sm text-muted-foreground mb-4">
                              * Payment will be required to confirm booking
                            </p>
                            <Button className="w-full bg-sage hover:bg-sage/90" disabled>
                              Proceed to Payment
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;