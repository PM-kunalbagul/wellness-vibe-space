import Navigation from "@/components/Navigation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import meditationImg from "@/assets/meditation-blog.jpg";
import yogaPropsImg from "@/assets/yoga-props-blog.jpg";
import nutritionImg from "@/assets/nutrition-blog.jpg";

const Blog = () => {
  const posts = [
    {
      title: "The Art of Mindful Breathing",
      excerpt: "Discover ancient pranayama techniques that can reduce stress and improve focus in your daily life.",
      date: "December 15, 2024",
      readTime: "7 min read",
      category: "Mindfulness",
      image: meditationImg,
    },
    {
      title: "Essential Yoga Props Guide", 
      excerpt: "Everything you need to know about yoga props and how they can enhance your practice.",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Equipment",
      image: yogaPropsImg,
    },
    {
      title: "Yoga & Nutrition Connection",
      excerpt: "Explore the relationship between mindful eating and your yoga practice for optimal wellness.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Wellness", 
      image: nutritionImg,
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-earth mb-4 animate-fade-up">
            Wellness Blog
          </h1>
          <p className="text-lg text-earth/80 max-w-2xl mx-auto animate-fade-up">
            Insights and inspiration for your yoga journey and mindful living
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="border-sage/20 animate-fade-up overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-earth/60 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <Badge variant="outline" className="mb-3">{post.category}</Badge>
                <CardTitle className="text-xl text-earth mb-3">{post.title}</CardTitle>
                <p className="text-earth/80 mb-4">{post.excerpt}</p>
                <Button variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;