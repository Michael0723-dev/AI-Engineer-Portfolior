"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Zap, Code2 } from "lucide-react"

import { useEffect, useState } from "react"

export function HeroSection() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 hero-background relative overflow-hidden"
    >
      {/* Enhanced Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 10 + 20}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Code2 className="h-8 w-8 text-blue-400/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Zap className="h-6 w-6 text-purple-400/30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Sparkles className="h-10 w-10 text-pink-400/30" />
        </div>
      </div>

      {/* Interactive Background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 126, 234, 0.1), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[75vh] sm:min-h-[80vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center w-full max-w-6xl mx-auto">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center text-center lg:text-left space-y-6">
              {/* Status Badge */}

              {/* Main Title */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block text-foreground mb-2 sm:mb-3 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium">
                    Hi, I'm
                  </span>
                  <span className="block mb-3 sm:mb-4 relative">
                    <span className="font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-fast hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 transition-all duration-500 cursor-default">
                      Alex Chen
                    </span>
                  </span>
                  <span className="block text-foreground hover:text-shimmer transition-all duration-500 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                    Building the Future
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              >
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Senior AI Engineer with 8 years of experience in machine learning, deep learning, and AI system architecture. Passionate about creating intelligent solutions that make a real impact.
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="button-gradient text-white border-0 shadow-colored text-lg px-8 py-4 magnetic-button group"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Mail className="mr-3 h-5 w-5 group-hover:animate-bounce-gentle" />
                    Get in Touch
                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">✨</div>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-strong border-white/30 hover:bg-white/20 shadow-medium bg-transparent text-lg px-8 py-4 magnetic-button group"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Projects
                    <ArrowDown className="ml-3 h-5 w-5 group-hover:animate-bounce-gentle rotate-[-90deg]" />
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className={`transition-all duration-1000 delay-900 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                <div className="flex space-x-4 justify-center lg:justify-start">
                  {[
                    { icon: Github, label: "GitHub", url: "https://github.com/" },
                    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/" },
                  ].map(({ icon: Icon, label, url }, index) => (
                    <Button
                      key={label}
                      variant="ghost"
                      size="lg"
                      className="glass border-white/20 hover:glass-strong hover:scale-110 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
                    >
                      <Icon className="h-6 w-6 group-hover:animate-wiggle" />
                      <span className="sr-only">{label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right" : "opacity-0"} flex justify-center mt-8 lg:mt-0`}
            >
              <div className="relative group">
                {/* Main Photo Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse-slow opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute inset-2 bg-gradient-secondary rounded-full animate-pulse-slow opacity-15 group-hover:opacity-25 transition-opacity duration-500 animation-delay-1000" />

                  {/* Photo */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 shadow-strong group-hover:shadow-glow">
                    <img
                      src="/placeholder.svg?height=420&width=420&text=Alex+Chen"
                      alt="Alex Chen - AI Engineer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Floating Elements around photo */}
                  <div className="absolute -top-4 -right-4 animate-float">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 animate-float-delayed">
                    <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center shadow-glow">
                      <Zap className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-1/4 -left-6 animate-float">
                    <div className="w-4 h-4 bg-gradient-accent rounded-full shadow-glow animate-pulse" />
                  </div>
                  <div className="absolute bottom-1/4 -right-6 animate-float-delayed">
                    <div className="w-5 h-5 bg-gradient-rainbow rounded-full shadow-glow animate-pulse" />
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-4 right-4 glass-strong px-3 py-1 rounded-full border border-white/30 animate-fade-in">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-foreground font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Centered */}
        <div
          className={`text-center mt-8 transition-all duration-1000 delay-1100 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToAbout}
            className="animate-bounce-gentle hover:animate-pulse group"
          >
            <ArrowDown className="h-6 w-6 group-hover:animate-heartbeat" />
            <span className="sr-only">Scroll to about section</span>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </section>
  )
}
