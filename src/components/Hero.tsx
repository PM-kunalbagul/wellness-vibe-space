import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-yoga-pose.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-earth/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-up drop-shadow-lg">
            नमस्ते<br />
            <span className="text-3xl sm:text-4xl font-light">Welcome to Your Journey</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up drop-shadow-md">
            Discover inner peace and strength through authentic yoga practices at Bend & Breath Yoga Studio. 
            Join our community of mindful practitioners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-sage text-white rounded-lg hover:bg-sage/90 transition-colors duration-200 font-semibold drop-shadow-lg"
            >
              Start Your Practice
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-colors duration-200 font-semibold backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;