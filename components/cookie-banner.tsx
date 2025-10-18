"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-card border-2 border-primary rounded-2xl shadow-2xl p-6 relative">
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={handleClose}>
          <X className="h-4 w-4" />
        </Button>

        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">🍪</span>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Cookie Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This site uses cookies (not the ones with tuna 😸) to improve your experience and analyze site traffic.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleAccept}
            className="flex-1 bg-primary text-primary-foreground hover:bg-accent rounded-xl"
          >
            Accept 🐾
          </Button>
          <Button variant="outline" onClick={handleClose} className="flex-1 rounded-xl border-2 bg-transparent">
            Decline
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-3 text-center">
          <a href="#" className="underline hover:text-foreground">
            Learn more
          </a>{" "}
          about our cookie policy
        </p>
      </div>
    </div>
  )
}
