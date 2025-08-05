import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import AboutPreview from "@/components/AboutPreview";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedServices />
      <AboutPreview />
      <Newsletter />
    </div>
  );
};

export default Index;