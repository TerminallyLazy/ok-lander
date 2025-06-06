import Image from "next/image"
import Link from "next/link"

export default function AIPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <Image
          src="/parent-checking-child-fever.jpeg"
          alt="Parent checking child's temperature"
          fill
          className="object-cover object-center brightness-110"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">3-in-1 Smart Helper</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-lg">
                Three kinds of AI—working as one—to save parents time, money, and stress so kids can survive the
                sniffles and thrive every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge of Food Production</h2>
            <p className="text-lg text-gray-600 mb-6">
              Over the years, crop production has relied on heavy plant protection product use, depleting resources and
              polluting the environment.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              How can we grow more food while protecting our soil? The answer lies in reducing the use of these products
              in our fields.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Cutting back on plant protection products restores soil biodiversity and promotes healthier, more
              productive crops.
            </p>
            <p className="text-lg text-gray-600 font-medium mb-6">"Yes, we can grow more food with fewer chemicals."</p>
            <p className="text-lg text-gray-600">
              With precision spraying, plant protection product use can be reduced by up to 95%. Targeting only where
              needed, leading to higher yields and a healthier environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=AI Technology"
                alt="AI Technology"
                width={600}
                height={400}
                className="rounded-lg shadow-lg brightness-110"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">AI Pediatric Care, Personalized for Your Child</h3>
              <p className="text-lg text-gray-600 mb-6">
                Built from the ground up, Our Kidz uses proprietary pediatric AI to recognize symptoms, deliver trusted
                guidance, and connect you to care—all in a heartbeat.
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
                  <span>AI — Answers</span>
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
                  <span>Agents — Do</span>
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
                  <span>Agentic AI — Learn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Environmental Benefits</h2>
            <p className="text-lg text-gray-600">
              Our AI-powered technology delivers significant environmental advantages while maintaining or improving
              crop yields.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Biodiversity Protection</h3>
              <p className="text-gray-600">
                By reducing herbicide use by up to 95%, our technology helps preserve beneficial insects and soil
                microorganisms.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
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
              <h3 className="text-xl font-bold mb-2">Water Quality</h3>
              <p className="text-gray-600">
                Minimizing chemical runoff protects groundwater and nearby water bodies from contamination.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
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
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Soil Health</h3>
              <p className="text-gray-600">
                Healthier soil with more diverse microbiome leads to better nutrient cycling and more resilient crops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 md:py-6 bg-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience the Power of AI in Healthcare</h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Discover how our AI technology can transform your farming practices for a more sustainable future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-500 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>
    </main>
  )
}
