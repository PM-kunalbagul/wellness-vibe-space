import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to our community!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-earth">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/95 backdrop-blur border-none p-8 sm:p-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sage/10 rounded-full mb-6">
              <Mail className="h-8 w-8 text-sage" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-earth mb-4">
              Join Our Wellness Community
            </h2>
            <p className="text-lg text-earth/80 mb-8 max-w-2xl mx-auto">
              Subscribe to receive weekly yoga tips, mindfulness practices, and exclusive offers. 
              Start your journey to better wellness today.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Gift className="h-6 w-6 text-sage mx-auto mb-2" />
                <h4 className="font-semibold text-earth">Free Resources</h4>
                <p className="text-sm text-earth/70">Weekly yoga sequences and meditation guides</p>
              </div>
              <div className="text-center">
                <Mail className="h-6 w-6 text-sage mx-auto mb-2" />
                <h4 className="font-semibold text-earth">Wellness Tips</h4>
                <p className="text-sm text-earth/70">Expert advice for mindful living</p>
              </div>
              <div className="text-center">
                <Gift className="h-6 w-6 text-sage mx-auto mb-2" />
                <h4 className="font-semibold text-earth">Exclusive Offers</h4>
                <p className="text-sm text-earth/70">Special discounts on classes and workshops</p>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-sage hover:bg-sage/90 px-8">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-earth/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;