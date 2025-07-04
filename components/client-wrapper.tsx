"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ChattingComponent } from "@/components/chatting-component"

export function ClientWrapper() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  )
}

export function ClientSections() {
  return (
    <>
      <BlogSection />
      <ContactSection />
      <Footer />
      <ChattingComponent />
    </>
  )
} 