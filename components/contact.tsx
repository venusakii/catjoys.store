"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-6xl">📬</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Have questions? We'd love to hear from you!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="rounded-xl border-2 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-accent h-12 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Send Message 🐾
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-background rounded-2xl p-8 border-2 border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground">hello@catjoys.store</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-8 border-2 border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">Social Media</h3>
                    <div className="flex gap-4 mt-3">
                      <a href="#" className="text-3xl hover:scale-125 transition-transform">
                        📘
                      </a>
                      <a href="#" className="text-3xl hover:scale-125 transition-transform">
                        📷
                      </a>
                      <a href="#" className="text-3xl hover:scale-125 transition-transform">
                        🐦
                      </a>
                      <a href="#" className="text-3xl hover:scale-125 transition-transform">
                        📌
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 bg-primary/5 rounded-2xl">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Customer Support Hours:</span>
                  <br />
                  Monday - Friday: 9AM - 6PM EST
                  <br />
                  Weekend: 10AM - 4PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
