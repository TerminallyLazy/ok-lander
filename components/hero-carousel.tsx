"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "better tools for parents, better healthcare for kidz",
    image: "/images/hero-slide-1.jpg",
    buttonText: "Learn more",
    buttonLink: "/contact",
    type: "image",
  },
  {
    id: 2,
    title: "just speak into\nthe phone.",
    image: "/mother-child-care.png",
    buttonText: "Discover how",
    buttonLink: "/ai",
    type: "image",
  },
  {
    id: 3,
    title: "are my children sleeping enough?",
    image: "/children-in-bed.jpg",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    type: "image",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
        <div className="absolute inset-0 bg-black/10 z-10" />

          {slide.type === "image" ? (
            <div className="relative w-full h-full">
              <video src={slide.image} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              {/* Hide watermark in upper right corner */}
              <div className="absolute top-0 right-0 w-32 h-16 bg-black/30 z-5"></div>
            </div>
          ) : (
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
          )}

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                {slide.id === 2 ? (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 drop-shadow-lg">
                    just speak
                    <br />
                    into the
                    <br />
                    phone.
                  </h1>
                ) : slide.id === 3 ? (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                    are my children
                    <br />
                    sleeping
                    <br />
                    enough?
                  </h1>
                ) : (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                )}
                <Link
                  href={slide.buttonLink}
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                >
                  {slide.buttonText} <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
