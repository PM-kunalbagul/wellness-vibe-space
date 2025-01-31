import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-earth mb-8 text-center animate-fade-up">
          About Me
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="text-earth/80 leading-relaxed">
              Welcome to YogaLife! I'm Sarah (you can customize this), a certified yoga instructor passionate about helping others discover the transformative power of yoga. With over 5 years of teaching experience, I specialize in making yoga accessible to practitioners of all levels.
            </p>
            <p className="text-earth/80 leading-relaxed">
              My journey into yoga began during my corporate career when I discovered its ability to reduce stress and improve overall well-being. This personal transformation inspired me to become an instructor and share these benefits with others.
            </p>
          </div>
          <Card className="bg-sage/10 border-none animate-fade-up">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-earth">Certifications</h2>
              <ul className="space-y-3 text-earth/80">
                <li>• 200-Hour RYT (Registered Yoga Teacher)</li>
                <li>• Specialized in Vinyasa Flow</li>
                <li>• Mindfulness Meditation Certification</li>
                <li>• Pre/Post Natal Yoga Certification</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;