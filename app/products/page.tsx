import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <Image
          src="/mother-child-care.png"
          alt="Mother caring for child"
          fill
          className="object-cover object-center brightness-110"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                Tired of guessing at 2 a.m.? Tap in and breathe easy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Child's Health, Personalized, Visualized, and Protected
            </h2>
            <p className="text-lg text-gray-600">
              Meet the next generation of parenting tools—designed to help you make confident decisions with clarity,
              ease, and control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Power of AI</h3>
              <p className="text-gray-600">
                From scanning plants to extremely precise spraying all in a quarter of a second.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reduce Labor, Increase Efficiency</h3>
              <p className="text-gray-600">Significantly reduces labor needs by automating targeted spraying.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Boost Your Bottom Line</h3>
              <p className="text-gray-600">Lower costs on inputs while maximizing your crop yields.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Year-Round Versatility</h3>
              <p className="text-gray-600">From herbicides to fertilizers, our technology adapts to all your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/child-crawling.png"
                alt="Young boy playing"
                width={600}
                height={400}
                className="rounded-lg shadow-lg brightness-110"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Agentic AI Helps Our Kidz</h2>
              <p className="text-lg text-gray-600 mb-6">
                Agentic AI is like a smart helper that works just for you. It learns what your family needs and helps
                you make good health choices fast.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Smart</strong> - learns your child's needs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Helpful</strong> - tracks and suggests what to do
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Safe</strong> - only you control the data
                  </span>
                </li>
              </ul>
              <Link
                href="/products/ara"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
              >
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mt-24">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600&text=AVO Product"
                alt="AVO precision sprayer"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AVO - Precision for Specialty Crops</h2>
              <p className="text-lg text-gray-600 mb-6">
                Designed specifically for specialty crops, AVO delivers targeted application with unmatched precision.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Perfect for vineyards and orchards</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Adaptive spraying technology</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-teal-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lightweight and maneuverable design</span>
                </li>
              </ul>
              <Link
                href="/products/avo"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
              >
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our precision agriculture solutions can benefit your farm.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-500 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
