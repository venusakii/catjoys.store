import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "How to Choose a Scratching Post That Saves Your Sofa",
    excerpt: "Learn the key features to look for when selecting the perfect scratching post for your cat.",
    image: "/cat-scratching-post-next-to-intact-sofa.jpg",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "TOP 5 Toys Your Cat Won't Be Able to Resist",
    excerpt: "Discover the most engaging toys that will keep your cat entertained for hours.",
    image: "/collection-of-colorful-cat-toys-on-wooden-floor.jpg",
    date: "March 10, 2024",
    readTime: "4 min read",
  },
  {
    title: "Creating a Happy Corner for Your Pet",
    excerpt: "Design tips for setting up the perfect play and rest area for your feline friend.",
    image: "/cozy-cat-corner-with-toys-and-bed-in-modern-home.jpg",
    date: "March 5, 2024",
    readTime: "6 min read",
  },
]

export function Blog() {
  return (
    <section className="py-20 md:py-32 bg-card" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Cat Care Tips & Advice</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert guidance to keep your cat happy and healthy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-background space-y-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 hover:bg-card bg-transparent">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
