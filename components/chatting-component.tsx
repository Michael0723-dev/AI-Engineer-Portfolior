"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"


interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const portfolioKnowledge = {
  personal: {
    name: "Alex Chen",
    title: "Senior AI Engineer",
    experience: "9 years",
    location: "San Francisco, CA",
    email: "alex.chen@email.com",
    phone: "+1 (555) 123-4567",
    availability: "Available for work",
  },
  skills: {
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
    "Deep Learning": ["CNNs", "RNNs", "Transformers", "GANs", "BERT/GPT"],
    Programming: ["Python", "JavaScript", "TypeScript", "R", "SQL"],
    "Cloud & MLOps": ["AWS", "GCP", "Docker", "Kubernetes", "MLflow"],
    "Data Engineering": ["Apache Spark", "Airflow", "Kafka", "PostgreSQL", "MongoDB"],
    "AI Frameworks": ["LangChain", "Hugging Face", "OpenAI API", "Anthropic", "Cohere"],
  },
  experience: [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI",
      period: "2021 - Present",
      achievements: [
        "Architected ML pipeline serving 50M+ daily predictions",
        "Led team of 8 engineers in computer vision solutions",
        "Reduced model inference time by 60%",
        "Implemented MLOps practices",
      ],
    },
    {
      title: "AI Research Engineer",
      company: "InnovateLabs",
      period: "2019 - 2021",
      achievements: [
        "Published 8 papers in NIPS, ICML, and ICLR",
        "Developed novel attention mechanism improving BERT by 15%",
        "Created open-source library with 10K+ GitHub stars",
      ],
    },
  ],
  projects: [
    {
      title: "AI-Powered Code Assistant",
      description: "VS Code extension with intelligent code suggestions",
      technologies: ["TypeScript", "OpenAI API", "VS Code API", "Node.js"],
      achievements: ["100K+ active users", "4.8/5 rating", "40% debugging time reduction"],
    },
    {
      title: "Real-time Fraud Detection System",
      description: "ML system detecting fraudulent transactions with sub-100ms latency",
      technologies: ["Python", "Apache Kafka", "Redis", "TensorFlow", "Kubernetes"],
      achievements: ["1M+ transactions/day", "$50M+ fraud prevention", "Sub-100ms response"],
    },
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      school: "Stanford University",
      period: "2014 - 2016",
      focus: "Machine Learning & Artificial Intelligence",
    },
    {
      degree: "M.S. in Computer Science",
      school: "MIT",
      period: "2012 - 2014",
      focus: "Artificial Intelligence",
    },
  ],
  certifications: [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional ML Engineer",
    "TensorFlow Developer Certificate",
    "Deep Learning Specialization (Coursera)",
  ],
}

function generateBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  // Personal information
  if (message.includes("name") || message.includes("who are you")) {
    return `Hi! I'm Alex Chen, a Senior AI Engineer with 9 years of experience in machine learning, deep learning, and AI system architecture. I'm passionate about creating intelligent solutions that make a real impact.`
  }

  if (message.includes("contact") || message.includes("email") || message.includes("phone")) {
    return `You can reach Alex at:\n📧 Email: alex.chen@email.com\n📞 Phone: +1 (555) 123-4567\n📍 Location: San Francisco, CA\n\nAlex is currently available for new opportunities!`
  }

  if (message.includes("available") || message.includes("hire") || message.includes("work")) {
    return `Yes! Alex is currently available for work and open to new opportunities. He's particularly interested in AI/ML engineering roles, research positions, and consulting projects. Feel free to reach out to discuss potential collaborations!`
  }

  // Skills and expertise
  if (message.includes("skill") || message.includes("technology") || message.includes("programming")) {
    return `Alex has expertise in:

🤖 **Machine Learning**: TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost

🧠 **Deep Learning**: CNNs, RNNs, Transformers, GANs, BERT/GPT

💻 **Programming**: Python, JavaScript, TypeScript, R, SQL

☁️ **Cloud & MLOps**: AWS, GCP, Docker, Kubernetes, MLflow

📊 **Data Engineering**: Apache Spark, Airflow, Kafka, PostgreSQL

🔧 **AI Frameworks**: LangChain, Hugging Face, OpenAI API, Anthropic`
  }

  if (message.includes("python") || message.includes("tensorflow") || message.includes("pytorch")) {
    return `Alex is highly proficient in Python and deep learning frameworks! He has extensive experience with TensorFlow and PyTorch, having used them to build production ML systems serving millions of users. He's also skilled in Keras, Scikit-learn, and other ML libraries.`
  }

  if (message.includes("aws") || message.includes("cloud") || message.includes("gcp")) {
    return `Alex has strong cloud expertise! He's AWS Certified in Machine Learning and experienced with Google Cloud Platform. He's built scalable ML pipelines using Docker, Kubernetes, and MLflow for MLOps. His cloud experience includes deploying models that serve 50M+ daily predictions.`
  }

  // Experience
  if (message.includes("experience") || message.includes("work") || message.includes("job")) {
    return `Alex has 9 years of AI/ML experience:

🏢 **Senior AI Engineer** at TechCorp AI (2021-Present)
- Led ML pipeline serving 50M+ daily predictions
- Managed team of 8 engineers
- Reduced inference time by 60%

🔬 **AI Research Engineer** at InnovateLabs (2019-2021)
- Published 8 papers in top conferences
- Developed novel attention mechanisms
- Created open-source library with 10K+ stars`
  }

  if (message.includes("research") || message.includes("paper") || message.includes("publication")) {
    return `Alex has a strong research background! He's published 15+ papers in top-tier conferences including NIPS, ICML, and ICLR. His research focuses on transformer architectures, attention mechanisms, and practical AI applications. He's also contributed to open-source projects with thousands of GitHub stars.`
  }

  // Projects
  if (message.includes("project") || message.includes("portfolio") || message.includes("built")) {
    return `Alex has worked on amazing projects! Here are some highlights:

🔧 **AI-Powered Code Assistant**: VS Code extension with 100K+ users and 4.8/5 rating

🛡️ **Fraud Detection System**: Real-time ML system preventing $50M+ in fraud

🏥 **Medical Imaging AI**: Computer vision for medical scans with 95% sensitivity

🤖 **Natural Language Query Engine**: Text-to-SQL with 90%+ accuracy

🚁 **Autonomous Drone Navigation**: Published in ICRA 2023`
  }

  if (message.includes("fraud") || message.includes("detection")) {
    return `The fraud detection system is one of Alex's proudest achievements! It processes over 1M transactions per day with sub-100ms latency and 99.7% accuracy. Built using Python, Apache Kafka, Redis, TensorFlow, and Kubernetes, it has prevented over $50M in fraud losses.`
  }

  // Education
  if (message.includes("education") || message.includes("degree") || message.includes("university")) {
    return `Alex has an impressive educational background:

🎓 **Ph.D. in Computer Science** - Stanford University (2014-2016)
   Focus: Machine Learning & Artificial Intelligence

🏛️ **M.S. in Computer Science** - MIT (2012-2014)
   Focus: Artificial Intelligence

🐻 **B.S. in Computer Science** - UC Berkeley (2008-2012)
   Focus: Computer Science & Mathematics`
  }

  if (message.includes("stanford") || message.includes("mit") || message.includes("berkeley")) {
    return `Alex studied at top universities! He earned his Ph.D. from Stanford University focusing on Machine Learning & AI, his Master's from MIT in Artificial Intelligence, and his Bachelor's from UC Berkeley in Computer Science & Mathematics. He graduated with high honors from all institutions.`
  }

  // Certifications
  if (message.includes("certification") || message.includes("certificate") || message.includes("certified")) {
    return `Alex holds several prestigious certifications:

🏆 AWS Certified Machine Learning - Specialty

🏆 Google Cloud Professional ML Engineer

🏆 TensorFlow Developer Certificate

🏆 Deep Learning Specialization (Coursera - Andrew Ng)

🏆 Certified Kubernetes Administrator

🏆 Microsoft Azure AI Engineer Associate

He's also received awards like the AI Innovation Award and Best Paper Award at ICML 2022!`
  }

  // General AI/ML questions
  if (message.includes("machine learning") || message.includes("artificial intelligence") || message.includes("ai")) {
    return `Alex is passionate about AI and machine learning! With 9 years of experience, he's worked on everything from research to production systems. He believes in building ethical, responsible AI that benefits humanity. His expertise spans computer vision, NLP, deep learning, and MLOps.`
  }

  if (message.includes("team") || message.includes("leadership") || message.includes("manage")) {
    return `Alex is an experienced technical leader! He currently leads a team of 8 engineers at TechCorp AI, focusing on computer vision solutions. He's also mentored 5+ junior researchers and received an Outstanding Mentor Award. He believes in collaborative leadership and knowledge sharing.`
  }

  // Achievements and metrics
  if (message.includes("achievement") || message.includes("accomplishment") || message.includes("success")) {
    return `Alex has impressive achievements:

📊 **15+ publications** in top-tier conferences

👥 **10M+ users** served by his ML models

💾 **Petabytes** of data processed

🏆 **3 patents** in AI and machine learning

⚡ **60% reduction** in model inference time

💰 **$50M+ fraud** prevented by his systems

⭐ **10K+ GitHub stars** on open-source projects`
  }

  // Greetings
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return `Hello! 👋 I'm Alex Chen's AI assistant. I can tell you all about Alex's experience, skills, projects, and background. What would you like to know about Alex's AI engineering expertise?`
  }

  if (message.includes("thank") || message.includes("thanks")) {
    return `You're welcome! 😊 If you have any other questions about Alex's background, experience, or projects, feel free to ask. I'm here to help you learn more about his AI engineering expertise!`
  }

  // Default response
  return `I'd be happy to help you learn more about Alex Chen! You can ask me about:

🔹 His technical skills and expertise

🔹 Work experience and achievements

🔹 AI/ML projects and research

🔹 Education and certifications

🔹 Contact information

🔹 Availability for new opportunities

What specific aspect interests you most?`
}

export function ChattingComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm Alex Chen's AI assistant. I can answer questions about his experience, skills, projects, and background. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleNewChat = () => {
    setMessages([
      {
        id: "1",
        content:
          "Hi! I'm Alex Chen's AI assistant. I can answer questions about his experience, skills, projects, and background. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
      },
    ])
    setInputValue("")
    setIsTyping(false)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = generateBotResponse(inputValue)
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          isBot: true,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="button-gradient text-white border-0 shadow-colored rounded-full w-16 h-16 p-0 group hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6 group-hover:animate-wiggle" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="glass-strong border-adaptive shadow-strong transition-all duration-300 w-96 h-[500px]">
        {/* Header */}
        <CardHeader className="pb-3 border-b border-adaptive-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-full">
                <Bot className="h-4 w-4 text-foreground dark:text-white" />
              </div>
              <div>
                <CardTitle className="text-sm gradient-text">Alex's AI Assistant</CardTitle>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleNewChat}
                className="h-8 px-2 text-xs hover:bg-adaptive-hover text-muted-foreground hover:text-foreground transition-colors"
                title="Start new chat"
              >
                New Chat
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-adaptive-hover"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.isBot ? "justify-start" : "justify-end"}`}>
              {message.isBot && (
                <div className="p-1.5 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                  <Bot className="h-3 w-3 text-foreground dark:text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  message.isBot
                    ? "bg-adaptive text-foreground border border-adaptive"
                    : "bg-gradient-primary text-foreground dark:text-white"
                }`}
              >
                {message.isBot ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                      ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mb-2">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 mb-2">{children}</ol>,
                      li: ({ children }) => <li className="ml-2">{children}</li>,
                      code: ({ children }) => (
                        <code className="bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded text-xs font-mono">
                          {children}
                        </code>
                      ),
                      h1: ({ children }) => <h1 className="font-bold text-base mb-2">{children}</h1>,
                      h2: ({ children }) => <h2 className="font-bold text-sm mb-2">{children}</h2>,
                      h3: ({ children }) => <h3 className="font-semibold text-sm mb-1">{children}</h3>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-2 border-primary pl-2 italic opacity-80">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                )}
                <div className={`text-xs mt-1 opacity-70 ${message.isBot ? "text-muted-foreground" : "text-foreground/70 dark:text-white/70"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
              {!message.isBot && (
                <div className="p-1.5 bg-gradient-secondary rounded-full flex-shrink-0 mt-1">
                  <User className="h-3 w-3 text-foreground dark:text-white" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="p-1.5 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <Bot className="h-3 w-3 text-foreground dark:text-white" />
              </div>
              <div className="bg-adaptive border border-adaptive p-3 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        {/* Input */}
        <div className="p-4 border-t border-adaptive-subtle">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Alex's experience, skills, projects..."
              className="form-input flex-1 text-sm"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="button-gradient text-white border-0 px-3"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick suggestions */}
          <div className="flex flex-wrap gap-1 mt-2">
            {["Skills", "Experience", "Projects", "Contact"].map((suggestion) => (
              <Badge
                key={suggestion}
                variant="outline"
                className="text-xs cursor-pointer hover:bg-adaptive-hover transition-colors bg-adaptive border-adaptive"
                onClick={() => setInputValue(`Tell me about Alex's ${suggestion.toLowerCase()}`)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
