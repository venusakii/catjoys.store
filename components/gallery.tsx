"use client"

import { useState } from "react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    alt: "Cat enjoying scratching tower",
    owner: "Bella",
  },
  {
    src: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&h=400&fit=crop",
    alt: "Kitten playing with toy",
    owner: "Oliver",
  },
  {
    src: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5d0?w=400&h=400&fit=crop",
    alt: "Cat napping in cozy bed",
    owner: "Chloe",
  },
  {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    alt: "Cat using scratching post",
    owner: "Max",
  },
  {
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop",
    alt: "Cats playing together",
    owner: "Lucy & Leo",
  },
  {
    src: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop",
    alt: "Cat in multi-level tower",
    owner: "Simba",
  },
  {
    src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=400&fit=crop",
    alt: "Cat with feather toy",
    owner: "Milo",
  },
  {
    src: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400&h=400&fit=crop",
    alt: "Cat on cushion",
    owner: "Nala",
  },
]

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Purr Gallery 😸</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real cats enjoying their CatJoys products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end justify-center p-4 transition-all duration-300">
                  <div className="text-center">
                    <p className="text-primary-foreground font-display text-lg font-semibold">{image.owner}</p>
                    <p className="text-primary-foreground/80 text-sm">purr... 🐾</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Share your cat's joy with #CatJoys</p>
          <div className="flex justify-center gap-4">
            <span className="text-3xl hover:scale-125 transition-transform cursor-pointer">📸</span>
            <span className="text-3xl hover:scale-125 transition-transform cursor-pointer">🐱</span>
            <span className="text-3xl hover:scale-125 transition-transform cursor-pointer">❤️</span>
          </div>
        </div>
      </div>
    </section>
  )
}
