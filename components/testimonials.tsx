import { Star } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Smith",
    review: "Incredible service! My car looks better than when I first bought it.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Sarah Johnson",
    review: "Professional, thorough, and attention to detail. Highly recommend!",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Mike Williams",
    review: "The ceramic coating is amazing. Water beads right off!",
    rating: 5,
    date: "2 months ago",
  },
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-outfit font-bold tracking-tight text-center mb-8 md:mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover-card">
              <CardHeader>
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm md:text-base">{testimonial.review}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span>{testimonial.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
