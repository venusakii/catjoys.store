"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl inline-block animate-wiggle">🐱</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Get Purr-fect Updates</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Subscribe for exclusive deals, new products, and cat care tips delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6 rounded-xl border-2 text-base"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent px-8 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Subscribe 🐾
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            Join 10,000+ cat lovers. Unsubscribe anytime. No spam, we promise! 😸
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center gap-8 mt-12 text-4xl opacity-30">
            <span className="animate-bounce-soft">🎾</span>
            <span className="animate-bounce-soft" style={{ animationDelay: "0.2s" }}>
              🧶
            </span>
            <span className="animate-bounce-soft" style={{ animationDelay: "0.4s" }}>
              🐟
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
