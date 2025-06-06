# Carousel Images

This folder contains the images used in the homepage carousel.

## Image Specifications:
- Recommended size: 1920px × 1080px (16:9 ratio)
- Format: JPG or WebP for better compression
- File size: Optimize to under 300KB per image for better performance

## Naming Convention:
Use descriptive names for the carousel images, for example:
- hero-slide-1.jpg
- hero-slide-2.jpg
- hero-slide-3.jpg

## Usage:
These images are used in the HeroCarousel component located at `/components/hero-carousel.tsx`.
To update the carousel images, replace the files in this folder and update the image paths in the carousel component.
\`\`\`

```typescriptreact file="components/hero-carousel.tsx"
[v0-no-op-code-block-prefix]"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "AI-Powered Precision Agriculture Technology",
    category: "PRODUCTS",
    image: "/images/hero-slide-1.jpg",
    buttonText: "Learn more",
    buttonLink: "/products",
  },
  {
    id: 2,
    title: "Sustainable Farming Solutions",
    category: "AI",
    image: "/images/hero-slide-2.jpg",
    buttonText: "Discover how",
    buttonLink: "/ai",
  },
  {
    id: 3,
    title: "Innovative Agricultural Robotics",
    category: "COMPANY",
    image: "/images/hero-slide-3.jpg",
    buttonText: "See our products",
    buttonLink: "/company",
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
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <span className="inline-block text-green-400 font-medium mb-2">{slide.category}</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{slide.title}</h1>
                <Link
                  href={slide.buttonLink}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
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

      {/* B Corp certification badge */}
      <div className="absolute top-6 right-6 z-30">
        <div className="bg-white/90 rounded-full p-2 flex flex-col items-center">
          <span className="text-xs text-gray-600 font-medium">Certified</span>
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-2xl font-bold border-2 border-gray-800 rounded-full w-10 h-10 flex items-center justify-center">
              B
            </span>
          </div>
          <span className="text-xs text-gray-600">Corporation</span>
        </div>
      </div>
    </div>
  )
}
