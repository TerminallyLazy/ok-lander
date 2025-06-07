"use client"

import * as React from "react"
import { Brain, Clock, Shield, Zap, Users, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@radix-ui/react-separator"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Answers",
    description: "Get instant, personalized pediatric guidance powered by advanced AI algorithms trained on medical literature.",
    badge: "Smart AI",
    color: "text-blue-500"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access trusted healthcare guidance anytime, anywhere. No more waiting for office hours or appointments.",
    badge: "Always On",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your family's health data is encrypted and secure. You maintain full control over your information.",
    badge: "Secure",
    color: "text-purple-500"
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Smart agents that take action, track symptoms, and coordinate care automatically for your peace of mind.",
    badge: "Fast",
    color: "text-yellow-500"
  },
  {
    icon: Users,
    title: "Family Focused",
    description: "Designed specifically for parents and caregivers with child-centric health tracking and guidance.",
    badge: "Family First",
    color: "text-pink-500"
  },
  {
    icon: Heart,
    title: "Evidence-Based",
    description: "All recommendations are backed by peer-reviewed medical research and pediatric best practices.",
    badge: "Trusted",
    color: "text-red-500"
  }
]

const stats = [
  { value: "10,000+", label: "Families Served" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
  { value: "HIPAA", label: "Compliant" }
]

export function FeaturesSection() {
  return (
    <section className="py-56 mb-10">
      <div className="container mx-auto px-4">
        {/* Header */}


          <h2 className="text-2xl md:text-3xl font-inter font-light tracking-tight text-center mb-5">
            When the System Falls Short, Parents Look Elsewhere
          </h2>
          <p className="text-center text-muted-foreground font-inter font-light max-w-3xl mb-16 mx-auto leading-relaxed">
            40% of us turn to friends for advice. Over half of us search the internet first. And pediatricians are getting harder to reach. That's why we built Our Kidz—your smarter, calmer, always-there front door to pediatric care.
          </p>

          <div className="flex flex-col items-center justify-center">
          <div className="text-center space-y-4">
          <Badge variant="outline" className="bg-gradient-to-r from-teal-500 to-blue-400 text-white w-fit h-8 mx-auto px-10 mb-10 text-md border-gradient-to-r from-teal-500 to-blue-400 font-inter font-medium">
            Why Choose Our Kidz
          </Badge>


          <div className="flex flex-col items-center justify-center"></div>
          <h2 className="text-2xl md:text-3xl font-inter font-light tracking-tight">
            AI Pediatric Care, Personalized for Your Child
          </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
          <p className="text-muted-foreground font-inter font-light text-center max-w-3xl mx-auto leading-relaxed mb-10">
            Built from the ground up, Our Kidz uses proprietary pediatric AI to recognize symptoms, 
            deliver trusted guidance, and connect you to care—all in a heartbeat.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-56 mt-20 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-teal-500 text-transparent bg-clip-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group healthcare-card hover:border-2 hover:border-teal-500 hover:border-2"
            >
              <CardHeader className="space-y-4 ">
                <div className="flex items-center justify-between ">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mb-20 text-center">
          {/* <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-healthcare bg-[#cbfbf1] text-black">
              <Link href="/products">
                Explore Features
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="btn-healthcare bg-[#14b8a6] text-white">
              <Link href="/demo">
                Schedule Demo
              </Link>
            </Button>
          </div> */}
        </div>
        </div>
      </div>
    </section>
  )
}
