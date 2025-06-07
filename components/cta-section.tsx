"use client"

import * as React from "react"
import { useState } from "react"
import { Mic, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useGeminiLive } from "@/hooks/use-gemini-live"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showVoiceAgent, setShowVoiceAgent] = useState(false)
  const { start, stop, isStreaming, transcript } = useGeminiLive()

  const handleMicClick = () => {
    setShowVoiceAgent(true)
    start()
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

//#030712

  return (
    <section className="py-24  ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 font-inter font-light gradient-to-r from-teal-500 to-blue-400 space-y-4">
            <Badge variant="outline" className="mb-4 w-fit h-8 mx-auto px-10 text-md bg-gradient-to-r from-teal-500 to-blue-400 font-inter font-medium">
              Try It Now
            </Badge>
            <h2 className="text-2xl md:text-3xl font-inter font-light tracking-tight">
              Experience AI-Powered Pediatric Care
            </h2>
            <p className="text-muted-foreground font-inter font-light max-w-3xl mx-auto leading-relaxed mb-10">
              Just speak your question and get AI-powered answers in seconds. 
              No appointment needed.
            </p>
          </div>

          {/* Voice Demo */}
          <Card className="mb-10 hover:border-2 border-gradient-to-r from-teal-500 to-blue-400 shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60">
            <CardHeader className="text-center font-inter font-tight font-light">
              <CardTitle className="text-xl font-inter font-light">Try it now — just speak your question</CardTitle>
              <CardDescription className="font-inter font-light">
                Ask anything about your child's health and get instant guidance
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
              <div className="relative">
                {/* Ring-shaped Voice Agent Overlay */}
                {showVoiceAgent && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 w-32 h-32 mb-20 rounded-full bg-white/10 backdrop-blur-[1px] border border-white/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm" />
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setShowVoiceAgent(false)
                        stop()
                      }}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-black/30 hover:bg-black/50 text-white rounded-full text-xs flex items-center justify-center transition-all opacity-50 hover:opacity-100 z-20"
                    >
                      ×
                    </button>
                    {transcript && (
                      <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-white p-1 bg-black/50 rounded">
                        {transcript}
                      </div>
                    )}
                  </div>
                )}

                <Button
                  size="icon"
                  onClick={handleMicClick}
                  className="relative z-30 w-20 h-20 rounded-full transition-all cursor-pointer duration-300 border-2 border-teal-500 bg-primary hover:bg-primary/90 hover:scale-105"
                >
                  <span style={{ width: 24, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <Mic className="text-primary-foreground hover:text-primary-foreground cursor-pointer" style={{ width: 24, height: 24 }} />
                  </span>
                </Button>
              </div>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  {isStreaming ? "🎤 Listening..." : "Click to start voice demo"}
                </p>
                {!showVoiceAgent && (
                  <p className="text-sm font-inter font-light text-muted-foreground">
                    Experience our AI-powered pediatric voice assistant
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Email Capture */}
          <Card className="mb-96 hover:border-2 border-gradient-to-r from-teal-500 to-blue-400 shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60">
            <CardHeader className="text-center font-inter font-light">
              <CardTitle className="font-inter font-light">Get Your AI-Powered Answer</CardTitle>
              <CardDescription>
                Almost there — where should we send your personalized response?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button className=" bg-[#14b8a6] text-white cursor-pointer" type="submit" disabled={isSubmitted}>
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2 text-white" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 bg-[#14b8a6] text-white" />
                      Get Answer
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Waitlist CTA */}
          <Card className="mb-10 hover:border-2 border-gradient-to-r from-teal-500 to-blue-400 shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60">
            <CardContent className="text-center py-12 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-inter font-light">
                  Join Our Early Access Program
                </h3>
                <p className="text-sm text-muted-foreground font-inter font-light max-w-2xl mx-auto">
                  Be among the first 5,000 families to experience the future of pediatric care. 
                  Get 3 months premium access completely free.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-md px-8 btn-healthcare bg-[#cbfbf1] font-inter font-medium text-black">
                  <Link href="/early-access">
                    Join Early Access
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="btn-healthcare bg-[#14b8a6] text-white">
                  <Link href="/demo">
                    Schedule Demo
                  </Link>
                </Button>
              </div>
              
              <div className="pt-4">
                <Badge variant="destructive" className="text-sm bg-gradient-to-r from-teal-500 to-blue-400 font-inter font-medium">
                  First 5,000 get 3 months premium free
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
