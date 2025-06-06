"use client"

import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Better tools for parents, better healthcare for kids",
    subtitle: "AI-powered pediatric guidance at your fingertips",
    image: "/images/hero-slide-1.jpg",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    type: "image",
    badge: "Trusted by 10,000+ families"
  },
  {
    id: 2,
    title: "Just speak into the phone",
    subtitle: "Get instant answers to your parenting questions",
    video: "/pickup-thephone.mp4",
    buttonText: "Try AI Assistant",
    buttonLink: "/ai",
    type: "video",
    badge: "Voice-powered AI"
  },
  {
    id: 3,
    title: "Are my children sleeping enough?",
    subtitle: "Track health patterns and get personalized insights",
    image: "/children-in-bed.jpg",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    type: "image",
    badge: "Health tracking"
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide, isPlaying])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

          {slide.type === "video" ? (
            <div className="relative w-full h-full">
              <video 
                src={slide.video} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 w-32 h-16 bg-black/30 z-5" />
            </div>
          ) : (
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          )}

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-6">
                <Badge variant="secondary" className="bg-primary/10 text-white bg-[#14b8a6] border-[#14b8a6]">
                  {slide.badge}
                </Badge>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="group btn-healthcare bg-[#cbfbf1] text-black">
                    <Link href={slide.buttonLink}>
                      {slide.buttonText}
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button variant="outline" size="lg" className="bg-white/10 border-[#14b8a6] text-white hover:bg-white/20 btn-healthcare bg-[#14b8a6]">
                    <Link href="/demo" className="flex items-center">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === currentSlide 
                      ? "bg-white scale-125" 
                      : "bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:bg-white/10"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
