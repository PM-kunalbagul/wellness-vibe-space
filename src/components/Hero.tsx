import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-earth mb-6 animate-fade-up">
            Find Your Balance<br />Through Yoga
          </h1>
          <p className="text-lg sm:text-xl text-earth/80 mb-8 max-w-2xl mx-auto animate-fade-up">
            Transform your mind and body with personalized yoga instruction
            tailored to your needs and goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-sage text-cream rounded-lg hover:bg-sage/90 transition-colors duration-200 animate-fade-up"
          >
            Start Your Journey
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;