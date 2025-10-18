"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    name: "Whiskers",
    owner: "Sarah M.",
    image: "/happy-orange-tabby-cat-with-toy.jpg",
    rating: 5,
    comment: "My cat absolutely loves the scratching post! Finally, my furniture is safe.",
    badge: "Approved by tail! 🐾",
  },
  {
    name: "Luna",
    owner: "Mike T.",
    image: "/cute-gray-cat-playing-with-feather-toy.jpg",
    rating: 5,
    comment: "The interactive toys keep Luna entertained for hours. Best purchase ever!",
    badge: "Approved by tail! 🐾",
  },
  {
    name: "Mittens",
    owner: "Emily R.",
    image: "/white-fluffy-cat-on-cozy-bed.jpg",
    rating: 5,
    comment: "The bed is so cozy! Mittens spends all day napping in it. Quality is amazing.",
    badge: "Approved by tail! 🐾",
  },
  {
    name: "Shadow",
    owner: "David L.",
    image: "/black-cat-with-scratching-tower.jpg",
    rating: 5,
    comment: "Great quality and my cat uses it every day. Worth every penny!",
    badge: "Approved by tail! 🐾",
  },
]

export function Reviews() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Happy Cats, Happy Owners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See what our feline customers and their humans have to say
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-full h-64 object-cover"
                  />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-primary/90 flex items-center justify-center transition-all duration-300">
                      <p className="text-primary-foreground font-display text-xl font-semibold px-4 text-center">
                        {review.badge}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-card space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{review.comment}"</p>
                  <div className="pt-2 border-t border-border">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Owner: {review.owner}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
