"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, User, Menu, Mic, Wifi, Battery, Signal } from "lucide-react"

export default function MobileHomePreview() {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isRecording, setIsRecording] = useState(false)

  const slides = [
    {
      id: 1,
      title: "better tools for parents, better healthcare for kidz",
      image: "/images/hero-slide-1.jpg",
      buttonText: "Learn more",
      buttonLink: "/products",
      type: "image",
    },
    {
      id: 2,
      title: "just speak into\nthe phone.",
      video: "/hero-video.mp4",
      buttonText: "Discover how",
      buttonLink: "/ai",
      type: "video",
    },
    {
      id: 3,
      title: "are my children sleeping enough?",
      image: "/children-in-bed.jpg",
      buttonText: "See our products",
      buttonLink: "/company",
      type: "image",
    },
  ]

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

  const handleMicClick = () => {
    setIsRecording(!isRecording)
  }

  return (
    <div className="max-w-sm mx-auto bg-black rounded-[2.5rem] p-2 shadow-2xl">
      {/* iPhone Frame */}
      <div className="bg-white rounded-[2rem] overflow-hidden h-[800px] relative">
        {/* iOS Status Bar */}
        <div className="bg-black px-6 py-2 flex justify-between items-center text-white text-xs font-medium">
          <span>9:41</span>
          <div className="flex items-center space-x-2">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-5 h-3" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100%-28px)] overflow-y-auto">
          {/* Mobile Header */}
          <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Our Kidz" width={100} height={30} className="h-6 w-auto" priority />
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="/account" className="text-gray-800">
                <User className="h-5 w-5" />
              </Link>
              <button className="text-gray-800">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </header>

          {/* Mobile Carousel */}
          <div className="relative h-[350px] w-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="absolute inset-0 bg-black/10 z-10" />

                {slide.type === "video" ? (
                  <div className="relative w-full h-full">
                    <video src={slide.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                    {/* Hide watermark in upper right corner */}
                    <div className="absolute top-0 right-0 w-16 h-8 bg-black/30 z-5"></div>
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
                  <div className="px-4 w-full">
                    {slide.id === 2 ? (
                      <h1 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                        just speak
                        <br />
                        into the
                        <br />
                        phone.
                      </h1>
                    ) : slide.id === 3 ? (
                      <h1 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                        are my children
                        <br />
                        sleeping
                        <br />
                        enough?
                      </h1>
                    ) : (
                      <h1 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h1>
                    )}
                    <Link
                      href={slide.buttonLink}
                      className="inline-flex items-center justify-center px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors text-sm"
                    >
                      {slide.buttonText} <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Problem Strip - Three Cards (Mobile) */}
          <section className="py-8 bg-white px-4">
            <div className="text-center mb-6">
              <p className="text-xl font-bold text-gray-900 mb-3">
                When the System Falls Short, Parents Look Elsewhere
              </p>
              <p className="text-sm text-gray-600">
                40% of us turn to friends for advice. Over half of us search the internet first. And pediatricians are
                getting harder to reach.
              </p>
            </div>
          </section>

          {/* Voice "Ask" Sandbox (Mobile) */}
          <section className="py-6 bg-white px-4">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-4 text-gray-900">Try it now — just speak your question</h2>

              {/* White block with microphone */}
              <div className="bg-white h-[90px] flex flex-col items-center justify-center mb-6 rounded-lg border border-gray-100">
                <button
                  onClick={handleMicClick}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isRecording ? "bg-rose-600 animate-pulse" : "bg-teal-500 hover:bg-teal-600"
                  }`}
                >
                  <Mic className="w-6 h-6 text-white" />
                </button>
                <p className="text-gray-500 text-xs mt-2">{isRecording ? "Recording…" : "(≤10 sec)"}</p>
              </div>

              {/* Email capture card */}
              <div className="mx-auto bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-6">
                <p className="text-gray-700 text-sm mb-3">
                  Almost there — where should we send your nurse-checked answer?
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors text-sm">
                  See my answer
                </button>
              </div>

              {/* AI-powered headline moved up */}
              <div className="text-center">
                <div className="mt-4">
                  <Link
                    href="/early-access"
                    className="inline-flex items-center justify-center px-5 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-medium text-sm"
                  >
                    Join the Early-Access Crew
                  </Link>
                </div>
                <div className="mt-2">
                  <p className="text-rose-600 text-xs font-bold">First 5,000 get 3 months premium free</p>
                </div>
              </div>
            </div>
          </section>

          {/* How Our Kidz Works - Copied Cards (Mobile) */}
          <section className="py-8 bg-gray-50 px-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2 text-gray-900">How Our Kidz Works</h2>
              <p className="text-sm text-gray-600">Three simple steps to better pediatric care</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-1 text-gray-900">Voice-Activated Care</h3>
                <p className="text-xs text-gray-600">
                  Simply speak your concerns and get instant, personalized pediatric guidance.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 116 0v6a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-1 text-gray-900">Smart Health Records</h3>
                <p className="text-xs text-gray-600">
                  Automatically track symptoms, medications, and milestones for your child.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-1 text-gray-900">Peace of Mind</h3>
                <p className="text-xs text-gray-600">
                  Get reliable answers from trusted pediatric sources, available 24/7.
                </p>
              </div>
            </div>
          </section>

          {/* Mobile Footer */}
          <footer className="bg-[#F9FAFB] py-6 px-4">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Privacy • Terms • Press • LinkedIn • TikTok</p>
              <p className="text-xs text-gray-500">© 2025 Our Kidz — Educational use only; not medical advice.</p>
            </div>
          </footer>

          {/* Bottom spacing for iOS safe area */}
          <div className="h-8 bg-[#F9FAFB]"></div>
        </div>
      </div>
    </div>
  )
}
