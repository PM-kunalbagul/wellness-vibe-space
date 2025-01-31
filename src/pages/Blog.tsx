import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Benefits of Morning Yoga Practice",
      excerpt: "Discover why practicing yoga in the morning can transform your entire day...",
      date: "March 15, 2024",
      category: "Wellness",
    },
    {
      title: "Beginner's Guide to Meditation",
      excerpt: "Learn the fundamentals of meditation and how to start your practice...",
      date: "March 10, 2024",
      category: "Meditation",
    },
    {
      title: "5 Yoga Poses for Better Sleep",
      excerpt: "Try these relaxing yoga poses before bed for a more restful night's sleep...",
      date: "March 5, 2024",
      category: "Yoga Practice",
    },
    {
      title: "Mindful Eating Habits",
      excerpt: "Explore the connection between mindfulness and healthy eating habits...",
      date: "March 1, 2024",
      category: "Nutrition",
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-earth mb-12 text-center animate-fade-up">
          Blog
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="border-sage/20 hover:border-sage/40 transition-colors cursor-pointer animate-fade-up"
            >
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-sage">{post.category}</span>
                  <span className="text-sm text-earth/60">{post.date}</span>
                </div>
                <CardTitle className="text-xl text-earth">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth/80">{post.excerpt}</p>
                <button className="mt-4 text-sage hover:text-sage/80 transition-colors">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;