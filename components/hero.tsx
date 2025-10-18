import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background py-20 md:py-32">
      {/* Decorative paw prints */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🐾</div>
        <div className="absolute top-32 right-20 text-4xl">🐾</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🐾</div>
        <div className="absolute bottom-32 right-1/3 text-3xl">🐾</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Play. Scratch. Purr.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                CatJoys — joy for your cat and comfort for your home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Shop Now 🐾
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-card bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-medium">Natural Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-medium">Cat Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/happy-orange-cat-playing-with-colorful-toy-ball-in.jpg"
                alt="Happy cat playing with toy"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-6 shadow-lg animate-bounce-soft">
              <span className="text-3xl">😸</span>
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-6 shadow-lg animate-bounce-soft"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-3xl">🎾</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
