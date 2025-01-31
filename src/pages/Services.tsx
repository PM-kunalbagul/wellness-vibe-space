import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Building2, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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

  const handleBooking = (service: string) => {
    setSelectedService(service);
  };

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