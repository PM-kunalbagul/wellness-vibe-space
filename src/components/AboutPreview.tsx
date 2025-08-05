import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import studioImg from "@/assets/studio-interior.jpg";

const AboutPreview = () => {
  const highlights = [
    {
      icon: Award,
      title: "Certified Instructor",
      description: "200-Hour RYT with specialized training"
    },
    {
      icon: Heart,
      title: "Mindful Approach",
      description: "Combining traditional wisdom with modern wellness"
    },
    {
      icon: Users2,
      title: "Community Focused",
      description: "Building connections through shared practice"
    },
    {
      icon: Clock,
      title: "5+ Years Experience",
      description: "Helping students find their balance"
    }
  ];

  return (
    <section className="py-20 bg-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-earth mb-6">
              Meet Nirali Hania
            </h2>
            <p className="text-lg text-earth/80 mb-6 leading-relaxed">
              Welcome to Bend & Breath Yoga Studio! I'm Nirali, a passionate yoga instructor 
              dedicated to guiding you on your wellness journey. My approach combines 
              traditional yoga wisdom with modern understanding of movement and mindfulness.
            </p>
            <p className="text-earth/80 mb-8 leading-relaxed">
              Whether you're just beginning your yoga practice or looking to deepen your 
              existing journey, I'm here to support you every step of the way. Together, 
              we'll discover the transformative power of yoga.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <highlight.icon className="h-6 w-6 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-earth">{highlight.title}</h4>
                    <p className="text-sm text-earth/70">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-sage hover:bg-sage/90">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="animate-fade-up">
            <Card className="border-sage/20 overflow-hidden">
              <div className="relative">
                <img 
                  src={studioImg} 
                  alt="Yoga Studio Interior"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/20 to-transparent"></div>
                
                {/* Quote Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <blockquote className="text-white">
                    <p className="italic font-medium drop-shadow-lg">
                      "Yoga is not about touching your toes. It's about connecting with yourself."
                    </p>
                    <footer className="text-sm mt-2 opacity-90">- Nirali Hania</footer>
                  </blockquote>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;