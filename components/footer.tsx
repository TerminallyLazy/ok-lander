"use client"

import * as React from "react"
import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const footerLinks = {
  product: [
    { name: "AI Assistant", href: "/ai" },
    { name: "Health Tracking", href: "/products" },
    { name: "Care Journal", href: "/products" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [

    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "API Docs", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Community", href: "/community" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "HIPAA Compliance", href: "/hipaa" },
    { name: "Security", href: "/security" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
]

export default function Footer() {
  const [email, setEmail] = React.useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-muted/30 border-t border-border border-[#14b8a6]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg ">
                <Image src="/OKdarkTsp.png" alt="Our Kidz" width={200} height={200} />
              </div>
              <span className="font-space-grotesk text-sm font-light">our kidz</span>
            </div>
            <p className="text-muted-foreground font-inter text-md font-extralight max-w-sm">
              AI-powered pediatric care platform empowering parents with trusted guidance
              and secure health tracking for their children.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm font-inter font-light text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@our-kidz.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-inter font-light text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-OUR-KIDZ</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-inter font-light text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Boise, ID</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates on pediatric AI and health insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm"
                required
              />
              <Button type="submit" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
            <span>© 2025 Our Kidz. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span>Educational use only; not medical advice.</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-muted-foreground">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <Link href={social.href} aria-label={social.name}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
