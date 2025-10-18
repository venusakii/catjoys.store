import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TopProduct() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-card via-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ Product of the Week
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            CatJoys Deluxe Scratching Tower
          </h2>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden border-2 shadow-2xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-[400px] md:h-auto">
                <img
                  src="/tall-modern-cat-scratching-tower-post-in-bright-mi.jpg"
                  alt="CatJoys Deluxe Scratching Tower"
                  className="w-full h-full object-cover"
                />
                {/* Decorative paw prints */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="text-4xl opacity-30">🐾</span>
                  <span className="text-3xl opacity-20">🐾</span>
                  <span className="text-2xl opacity-10">🐾</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(487 reviews)</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <p className="text-foreground">Multi-level design for climbing and scratching</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <p className="text-foreground">Natural sisal rope and soft plush surfaces</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <p className="text-foreground">Sturdy base for cats up to 20 lbs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✓</span>
                      <p className="text-foreground">Neutral colors that match any decor</p>
                    </div>
                  </div>

                  {/* Price */}
                  

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-accent text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Add to Cart 🛒
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">Free shipping on orders over $50</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
