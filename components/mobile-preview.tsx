"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Wifi, Battery } from "lucide-react"

export default function MobileContactPreview() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="max-w-sm mx-auto bg-black rounded-[2.5rem] p-2 shadow-2xl">
      {/* iPhone Frame */}
      <div className="bg-white rounded-[2rem] overflow-hidden h-[800px] relative">
        {/* iOS Status Bar */}
        <div className="bg-white px-6 py-2 flex justify-between items-center text-black text-sm font-medium">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <Wifi className="w-4 h-4" />
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Battery className="w-6 h-3" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto">
          {/* Hero Section - Mobile */}
          <div className="relative h-[200px] w-full overflow-hidden">
            <Image
              src="/contact-hero-building-new.jpeg"
              alt="Historic building with green doors and shutters"
              fill
              className="object-cover object-center brightness-125"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="px-4 w-full">
                <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  Contact Us
                </h1>
                <p className="text-sm text-white/90 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  Step inside—drop us a line and our team will answer every knock, bright and quick.
                </p>
              </div>
            </div>

            {/* Door icon - mobile positioned */}
            <div className="absolute inset-0 z-30">
              <div className="absolute top-1/3 left-1/3">
                <Image
                  src="/center-door-icon.png"
                  alt="Center door icon"
                  width={20}
                  height={20}
                  className="opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile */}
          <div className="p-4 bg-white">
            <h2 className="text-xl font-bold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="demo-request">Demo Request</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 px-4 rounded-full hover:bg-teal-600 transition-colors font-medium text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information - Mobile */}
          <div className="p-4 bg-gray-50">
            <h2 className="text-xl font-bold mb-3">Let's talk.</h2>
            <p className="text-sm text-gray-600 mb-6">
              Have a question or midnight worry? Drop us a note and our team will get back to you fast.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">Address</h3>
                  <p className="text-xs text-gray-600">
                    Our Kidz
                    <br />
                    Boise, Idaho
                    <br />
                    USA
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">Phone</h3>
                  <p className="text-xs text-gray-600">
                    <a href="tel:+13607746908" className="hover:text-teal-500 transition-colors">
                      360-774-6908
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">Email</h3>
                  <p className="text-xs text-gray-600">
                    <a href="mailto:info@our-kidz.com" className="hover:text-teal-500 transition-colors">
                      info@our-kidz.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom spacing for iOS safe area */}
          <div className="h-8 bg-gray-50"></div>
        </div>
      </div>
    </div>
  )
}
