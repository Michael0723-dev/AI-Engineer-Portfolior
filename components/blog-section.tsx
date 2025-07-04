"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Eye, Heart } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkGfm from "remark-gfm"

import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Large Language Models: Beyond GPT-4",
    excerpt:
      "Exploring the next generation of LLMs, including multimodal capabilities, efficiency improvements, and the path toward AGI. What can we expect in the coming years?",
    content: `
# The Future of Large Language Models: Beyond GPT-4

Large Language Models have revolutionized AI, but we're just getting started. Here's what I see coming next:

## Multimodal Integration
The future belongs to models that seamlessly understand text, images, audio, and video. We're moving toward truly universal AI assistants.

## Efficiency Breakthroughs
New architectures like Mamba and RetNet are challenging the transformer paradigm, promising better efficiency and longer context windows.

## Specialized Models
Instead of one-size-fits-all, we'll see domain-specific models optimized for particular tasks and industries.

## Key Predictions:
- 10M+ token context windows by 2025
- Real-time multimodal processing
- 90% cost reduction in inference
- Breakthrough in reasoning capabilities

The next wave of LLMs will be more efficient, capable, and accessible than ever before.
    `,
    category: "AI Research",
    publishedAt: "2024-01-15",
    featured: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop&crop=center",
    tags: ["LLM", "GPT", "AI Research", "Machine Learning"],
    author: "Alex Chen",
  },
  {
    id: 2,
    title: "Building Production-Ready ML Pipelines: Lessons from 50M+ Daily Predictions",
    excerpt:
      "Real-world insights from scaling ML systems to serve millions of users. Best practices, common pitfalls, and architectural decisions that matter.",
    content: `
# Building Production-Ready ML Pipelines

After building systems that serve 50M+ daily predictions, here are the key lessons I've learned:

## Architecture Principles
1. **Separation of Concerns**: Keep training, serving, and monitoring separate
2. **Fail Fast**: Build comprehensive validation at every step
3. **Observability First**: You can't fix what you can't see

## Key Components
- **Feature Store**: Centralized feature management
- **Model Registry**: Version control for models
- **A/B Testing**: Safe model deployment
- **Monitoring**: Real-time performance tracking

## Common Pitfalls
- Ignoring data drift
- Insufficient monitoring
- Tight coupling between components
- Lack of rollback mechanisms

The difference between a prototype and production is often 10x the effort, but it's worth it for reliability.
    `,
    category: "MLOps",
    publishedAt: "2024-01-10",
    featured: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop&crop=center",
    tags: ["MLOps", "Production", "Scalability", "Best Practices"],
    author: "Alex Chen",
  },
  {
    id: 3,
    title: "Computer Vision in 2024: State-of-the-Art Models and Applications",
    excerpt:
      "A comprehensive overview of the latest computer vision breakthroughs, from foundation models to real-world applications in healthcare and autonomous systems.",
    content: `
# Computer Vision in 2024: State-of-the-Art

Computer vision has made incredible strides. Here's what's defining the field in 2024:

## Foundation Models
- **SAM (Segment Anything)**: Universal segmentation
- **CLIP**: Vision-language understanding
- **DALL-E 3**: Text-to-image generation

## Key Trends
1. **Zero-shot learning**: Models that work without task-specific training
2. **Multimodal fusion**: Combining vision with language and audio
3. **Efficient architectures**: Mobile-friendly models

## Real-World Impact
- Medical imaging: 95%+ accuracy in diagnosis
- Autonomous vehicles: Improved safety and reliability
- Manufacturing: Quality control automation

## What's Next?
- Real-time 3D understanding
- Video generation models
- Embodied AI for robotics

The convergence of vision and language is creating unprecedented opportunities.
    `,
    category: "Computer Vision",
    publishedAt: "2024-01-05",
    featured: false,
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=300&fit=crop&crop=center",
    tags: ["Computer Vision", "Deep Learning", "AI Applications"],
    author: "Alex Chen",
  },
  {
    id: 4,
    title: "The Art of AI Engineering: From Research to Production",
    excerpt:
      "Bridging the gap between cutting-edge research and real-world applications. How to translate academic breakthroughs into business value.",
    content: `
# The Art of AI Engineering

There's a significant gap between research papers and production systems. Here's how to bridge it:

## Research vs. Production
- **Research**: Novel algorithms, perfect datasets
- **Production**: Messy data, business constraints, reliability requirements

## Key Skills for AI Engineers
1. **Technical depth**: Understanding the fundamentals
2. **Systems thinking**: Seeing the bigger picture
3. **Business acumen**: Translating tech to value
4. **Communication**: Explaining complex concepts simply

## The Translation Process
1. **Understand the business problem**
2. **Evaluate research applicability**
3. **Prototype and validate**
4. **Scale and optimize**
5. **Monitor and iterate**

## Success Metrics
- Business impact over technical novelty
- Reliability over peak performance
- Maintainability over complexity

The best AI engineers are translators between the world of research and the world of business.
    `,
    category: "Career",
    publishedAt: "2023-12-28",
    featured: false,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=300&fit=crop&crop=center",
    tags: ["Career", "AI Engineering", "Best Practices"],
    author: "Alex Chen",
  },
  {
    id: 5,
    title: "Transformer Architecture Deep Dive: Understanding Attention Mechanisms",
    excerpt:
      "A technical exploration of transformer architectures, attention mechanisms, and the innovations that made modern NLP possible.",
    content: `
# Transformer Architecture Deep Dive

Transformers revolutionized NLP. Let's understand why they're so powerful:

## The Attention Mechanism
\`\`\`python
def attention(Q, K, V):
    scores = torch.matmul(Q, K.transpose(-2, -1)) / sqrt(d_k)
    weights = F.softmax(scores, dim=-1)
    return torch.matmul(weights, V)
\`\`\`

## Key Innovations
1. **Self-attention**: Relating different positions in a sequence
2. **Multi-head attention**: Multiple representation subspaces
3. **Positional encoding**: Sequence order information
4. **Layer normalization**: Training stability

## Why Transformers Work
- **Parallelization**: Unlike RNNs, can process sequences in parallel
- **Long-range dependencies**: Direct connections between distant tokens
- **Scalability**: Performance improves with model size

## Variants and Improvements
- **BERT**: Bidirectional encoding
- **GPT**: Autoregressive generation
- **T5**: Text-to-text transfer
- **Switch Transformer**: Sparse expert models

Understanding transformers is crucial for modern AI engineering.
    `,
    category: "Deep Learning",
    publishedAt: "2023-12-20",
    featured: false,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop&crop=center",
    tags: ["Transformers", "NLP", "Deep Learning", "Attention"],
    author: "Alex Chen",
  },
  {
    id: 6,
    title: "AI Ethics in Practice: Building Responsible AI Systems",
    excerpt:
      "Practical approaches to AI ethics, bias mitigation, and responsible deployment. How to build AI systems that benefit everyone.",
    content: `
# AI Ethics in Practice

Building responsible AI isn't just about good intentions—it requires systematic approaches:

## Core Principles
1. **Fairness**: Equal treatment across groups
2. **Transparency**: Explainable decisions
3. **Privacy**: Protecting user data
4. **Accountability**: Clear responsibility chains

## Bias Mitigation Strategies
- **Data auditing**: Understanding dataset composition
- **Algorithmic fairness**: Mathematical definitions of fairness
- **Continuous monitoring**: Detecting bias in production
- **Diverse teams**: Multiple perspectives in development

## Practical Implementation
\`\`\`python
# Example: Fairness constraint in model training
def fairness_constraint(predictions, sensitive_attribute):
    # Ensure equal opportunity across groups
    return equalized_odds(predictions, sensitive_attribute)
\`\`\`

## Governance Framework
- **Ethics review boards**: Multi-disciplinary oversight
- **Impact assessments**: Evaluating potential harms
- **Stakeholder engagement**: Including affected communities
- **Regular audits**: Ongoing compliance checking

## Tools and Frameworks
- **Fairlearn**: Bias assessment and mitigation
- **AI Fairness 360**: Comprehensive fairness toolkit
- **What-If Tool**: Interactive bias exploration
- **Model Cards**: Documentation standards

Responsible AI is not a destination but a continuous journey of improvement.
    `,
    category: "AI Ethics",
    publishedAt: "2023-12-15",
    featured: false,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=300&fit=crop&crop=center",
    tags: ["AI Ethics", "Responsible AI", "Bias", "Fairness"],
    author: "Alex Chen",
  },
]
const categories = ["All", "AI Research", "MLOps", "Computer Vision", "Deep Learning", "Career", "AI Ethics"]

export function BlogSection() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  if (selectedPost) {
    return (
      <section id="blog" className="py-20 section-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => setSelectedPost(null)}
              className="mb-8 glass border-white/20 hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Blog
            </Button>

            {/* Article Header */}
            <div className="mb-8">
              <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                <img
                  src={selectedPost.image || "/placeholder.svg"}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline" className="bg-gradient-accent text-foreground border-0">
                  {selectedPost.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedPost.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold gradient-text mb-4">{selectedPost.title}</h1>
            </div>

            {/* Article Content */}
            <Card className="glass-strong border-white/20 shadow-strong">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none prose-invert">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code(props) {
                        const { children, className, node, ...rest } = props
                        const match = /language-(\w+)/.exec(className || "")
                        return match ? (
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            className="rounded-lg"
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code {...rest} className={className}>
                            {children}
                          </code>
                        )
                      },
                      h1: ({ children }) => <h1 className="text-3xl font-bold gradient-text mb-6">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-2xl font-semibold gradient-text-secondary mb-4 mt-8">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">{children}</h3>,
                      p: ({ children }) => <p className="text-foreground leading-relaxed mb-4">{children}</p>,
                      ul: ({ children }) => <ul className="text-foreground space-y-2 mb-4 ml-6">{children}</ul>,
                      ol: ({ children }) => <ol className="text-foreground space-y-2 mb-4 ml-6">{children}</ol>,
                      li: ({ children }) => <li className="text-foreground">{children}</li>,
                      strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                      em: ({ children }) => <em className="italic text-foreground">{children}</em>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {selectedPost.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-white/10 text-foreground border border-white/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 section-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">AI Insights & Technical Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the latest in AI research, sharing practical insights, and discussing the future of artificial
            intelligence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "button-gradient text-white border-0"
                  : "glass border-white/20 hover:bg-white/10 bg-transparent"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All" && featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 gradient-text-secondary flex items-center gap-3">
              <TrendingUp className="h-6 w-6" />
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="card-hover glass border-white/10 shadow-colored group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0 shadow-md">Featured</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-gradient-accent text-foreground border-0 text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl gradient-text group-hover:gradient-text-secondary transition-all duration-300">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          {selectedCategory !== "All" && (
            <h3 className="text-2xl font-semibold mb-8 gradient-text flex items-center gap-3">
              <BookOpen className="h-6 w-6" />
              {selectedCategory} Articles
            </h3>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post) => (
              <Card
                key={post.id}
                className="card-hover glass border-white/10 shadow-soft group cursor-pointer overflow-hidden h-full"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-gradient-accent text-foreground border-0 text-xs">
                      {post.category}
                    </Badge>

                  </div>
                  <CardTitle className="text-lg gradient-text group-hover:gradient-text-secondary transition-all duration-300 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
