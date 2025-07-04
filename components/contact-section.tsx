"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle } from "lucide-react"

import { useToast } from "@/hooks/use-toast"

export function ContactSection() {

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

try {
  // Send to Telegram
  const telegramBotToken = "7531498860:AAFRN1C1ibGTia6GcyV5-xjHVUplTB8BFD4"
  const telegramChatId = "7729538833" // Updated to use numeric chat ID

  if (telegramBotToken && telegramChatId) {
    const message = `
🔔 <b>New Portfolio Contact</b>

👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
💬 <b>Message:</b> ${formData.message}
        `

    await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: "HTML",
      }),
    })
  }

  toast({
    title: "Message Sent!",
    description: "Thank you for your message. I'll get back to you soon.",
  })

  setFormData({ name: "", email: "", message: "" })
  setIsMessageSent(true)
  
  // Reset success state after 3 seconds
  setTimeout(() => {
    setIsMessageSent(false)
  }, 3000)
} catch (error) {
  toast({
    title: "Error",
    description: "Failed to send message. Please try again.",
    variant: "destructive",
  })
} finally {
  setIsSubmitting(false)
}
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">Ready to collaborate on your next AI project? Let's discuss how we can work together.</p>
        </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Let's Connect</h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed">I'm always interested in discussing new opportunities, innovative projects, and potential collaborations.</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sm sm:text-base">Email</div>
              <div className="text-muted-foreground text-sm sm:text-base break-all">alex.chen@email.com</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sm sm:text-base">Phone</div>
              <div className="text-muted-foreground text-sm sm:text-base">+1 (555) 123-4567</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sm sm:text-base">Location</div>
              <div className="text-muted-foreground text-sm sm:text-base">San Francisco, CA</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm"
              onClick={() => window.open("https://github.com/", "_blank", "noopener,noreferrer")}
            >
              <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm"
              onClick={() => window.open("https://www.linkedin.com/", "_blank", "noopener,noreferrer")}
            >
              <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </div>

      <Card className="glass-strong border-adaptive shadow-strong">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">Send Message</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          {isMessageSent && (
            <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Message Sent Successfully!
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Thank you for your message. I'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="form-input text-sm sm:text-base h-10 sm:h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="form-input text-sm sm:text-base h-10 sm:h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="form-input resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                rows={4}
                required
              />
            </div>

            <Button
              type="submit"
              className={`w-full border-0 shadow-colored h-10 sm:h-11 text-sm sm:text-base ${
                isMessageSent 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'button-gradient text-white'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-gray-900 dark:border-white mr-2" />
                  Sending...
                </>
              ) : isMessageSent ? (
                <>
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
  )
}
