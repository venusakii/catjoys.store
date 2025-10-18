import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Toys",
    description: "Balls, mice, feathers & more",
    image: "/colorful-cat-toys-balls-and-mice-on-wooden-surface.jpg",
    emoji: "🎾",
  },
  {
    name: "Scratching Posts",
    description: "Posts, pads & cat houses",
    image: "/modern-cat-scratching-post-tower-in-living-room.jpg",
    emoji: "🏠",
  },
  {
    name: "Interactive Play",
    description: "Smart toys & activity centers",
    image: "/interactive-cat-play-system-with-moving-toys.jpg",
    emoji: "🎮",
  },
  {
    name: "Beds & Cushions",
    description: "Cozy spots for napping",
    image: "/soft-cat-bed-cushion-in-warm-beige-tones.jpg",
    emoji: "😴",
  },
  {
    name: "Play & Scratch Sets",
    description: "Complete activity bundles",
    image: "/cat-play-and-scratch-combo-set-natural-materials.jpg",
    emoji: "🎁",
  },
]

export function Categories() {
  return (
    <section className="py-20 md:py-32 bg-background" id="categories">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find the perfect products for your feline friend
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg group-hover:animate-bounce-soft">
                    {category.emoji}
                  </div>
                </div>
                <div className="p-6 bg-card">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
