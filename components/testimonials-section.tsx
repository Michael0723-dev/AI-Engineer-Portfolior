import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    company: "TechCorp AI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Alex is an exceptional AI engineer who consistently delivers innovative solutions. His deep understanding of machine learning and ability to translate complex concepts into practical applications has been invaluable to our team.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Research Director",
    company: "InnovateLabs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Working with Alex was a pleasure. His research contributions in NLP and computer vision are outstanding. He has a rare combination of theoretical knowledge and practical implementation skills.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "DataDriven Inc",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Alex transformed our recommendation system, increasing user engagement by 40%. His ability to understand business requirements and translate them into effective ML solutions is remarkable.",
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    company: "StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Alex established our entire data science infrastructure from scratch. His expertise in MLOps and system architecture helped us scale from prototype to production seamlessly.",
  },
  {
    name: "Dr. Lisa Park",
    role: "AI Research Lead",
    company: "University Research Lab",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Alex's contributions to our research projects were exceptional. His publications are well-cited and his innovative approaches to deep learning have influenced our entire research direction.",
  },
  {
    name: "Robert",
    role: "Senior Software Engineer",
    company: "TechCorp AI",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "As a team lead, Alex is inspiring and supportive. He mentored me through complex ML projects and his code reviews always provided valuable insights. A true technical leader.",
  },
]

export function TestimonialsSection() {


  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-muted-foreground">What colleagues and clients say about working with me.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-4 flex-shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 italic flex-grow line-clamp-6">
                  "{testimonial.testimonial}"
                </blockquote>

                <div className="flex items-center gap-3 mt-auto flex-shrink-0">
                  <Avatar className="flex-shrink-0">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-grow">
                    <div className="font-semibold truncate">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground truncate">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground truncate">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
