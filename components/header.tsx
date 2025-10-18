"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="font-display text-2xl font-bold text-foreground">
                CatJo<span className="inline-block animate-wiggle">y</span>s
              </span>
              <span className="text-2xl">🐾</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#shop" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Shop
            </a>
            <a
              href="#categories"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Categories
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-accent">Shop Now 🐾</Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#shop"
              className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Shop
            </a>
            <a
              href="#categories"
              className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Categories
            </a>
            <a
              href="#blog"
              className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="#about"
              className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </a>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-accent">Shop Now 🐾</Button>
          </div>
        )}
      </div>
    </header>
  )
}
