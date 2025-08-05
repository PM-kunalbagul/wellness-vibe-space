import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-earth mb-12 text-center animate-fade-up">
          Contact Me
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8 animate-fade-up">
            <Card className="border-sage/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-earth mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-earth/80">
                    <Mail className="h-5 w-5 text-sage" />
                    <span>yoga@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-earth/80">
                    <Phone className="h-5 w-5 text-sage" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-earth/80">
                    <MapPin className="h-5 w-5 text-sage" />
                    <span>123 Yoga Street, Zen City, 12345</span>
                  </div>
                  <div className="flex items-center gap-3 text-earth/80">
                    <Instagram className="h-5 w-5 text-sage" />
                    <a href="#" className="hover:text-sage transition-colors">@bendbreathyoga</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" className="bg-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" className="bg-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Interest</Label>
              <select 
                id="service" 
                className="w-full h-10 px-3 py-2 bg-white border border-input rounded-md"
              >
                <option value="">Select a service</option>
                <option value="personal">Personal Training</option>
                <option value="group">Group Classes</option>
                <option value="corporate">Corporate Wellness</option>
                <option value="online">Online Sessions</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell me about your goals..." 
                className="bg-white"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-sage hover:bg-sage/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;