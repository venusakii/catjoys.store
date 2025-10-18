"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: "🧶",
    title: "Natural Materials",
    description: "Premium quality materials that are safe and durable",
  },
  {
    icon: "🐾",
    title: "Safe for Claws",
    description: "Designed specifically for healthy scratching behavior",
  },
  {
    icon: "🐱",
    title: "Cat Tested",
    description: "Every product is tested and approved by real cats",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly & Stylish",
    description: "Sustainable products that look great in your home",
  },
]

export function WhyCatJoys() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Why CatJoys?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We create products that bring joy to your cat and peace of mind to you
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center space-y-4 transition-all duration-500 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-5xl hover:scale-110 transition-transform duration-300 animate-bounce-soft"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
