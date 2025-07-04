"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

import { Menu, X, Sparkles } from "lucide-react"


const navigation = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "education", href: "#education" },
  { name: "certificates", href: "#certificates" },
  { name: "blog", href: "#blog" },
  { name: "testimonials", href: "#testimonials" },
  { name: "contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navigation.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "nav-blur shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 min-h-[60px] sm:min-h-[68px]">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 group cursor-pointer bg-transparent border-none p-0 hover:scale-105 transition-transform duration-300 flex-shrink-0"
          >
            <div className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text-rainbow animate-gradient hover:animate-wiggle transition-all duration-300">
              Alex Chen
            </div>
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary group-hover:animate-wiggle" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 capitalize rounded-lg group ${
                  activeSection === item.href.substring(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full ${
                    activeSection === item.href.substring(1) ? "w-full" : ""
                  }`}
                />
                {activeSection === item.href.substring(1) && (
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <ModeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden glass border-white/20 hover:glass-strong p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5 animate-wiggle" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <>
            {/* Mobile backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile menu */}
            <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in-up relative z-50 nav-blur">
              <nav className="flex flex-col space-y-2 px-2">
                {navigation.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-3 text-sm font-medium transition-all duration-300 capitalize rounded-lg hover:bg-white/10 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
