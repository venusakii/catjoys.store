import { Hero } from "@/components/hero"
import { WhyCatJoys } from "@/components/why-catjoys"
import { Categories } from "@/components/categories"
import { TopProduct } from "@/components/top-product"
import { Reviews } from "@/components/reviews"
import { Blog } from "@/components/blog"
import { Gallery } from "@/components/gallery"
import { Newsletter } from "@/components/newsletter"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyCatJoys />
      <Categories />
      <TopProduct />
      <Reviews />
      <Blog />
      <Gallery />
      <Newsletter />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  )
}
