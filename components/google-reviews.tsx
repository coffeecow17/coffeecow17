import { Star } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// This would typically come from Google Places API
const googleData = {
  rating: 4.8,
  totalReviews: 127,
  reviews: [
    {
      author: "Michael Chen",
      rating: 5,
      time: "2 days ago",
      text: "Outstanding service! They transformed my BMW from looking tired to showroom fresh. The attention to detail is remarkable.",
    },
    {
      author: "Emma Thompson",
      rating: 5,
      time: "1 week ago",
      text: "Best detailing service in the area. They took care of my Tesla Model 3 and the results were amazing. The ceramic coating they applied is holding up beautifully.",
    },
    {
      author: "David Martinez",
      rating: 4,
      time: "2 weeks ago",
      text: "Very professional team. They did a great job on my truck, especially with the interior detailing. Would recommend!",
    },
    {
      author: "Sarah Wilson",
      rating: 5,
      time: "3 weeks ago",
      text: "Exceptional service! They went above and beyond to restore my car's paint. The results exceeded my expectations.",
    },
    {
      author: "James Anderson",
      rating: 5,
      time: "1 month ago",
      text: "First-class detailing service. The team is knowledgeable and professional. My car looks better than when I first bought it!",
    },
  ],
}

export function GoogleReviews() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl md:text-3xl font-outfit font-bold tracking-tight">Google Reviews</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(googleData.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-bold">{googleData.rating}</span>
            <span className="text-muted-foreground">({googleData.totalReviews} reviews)</span>
          </div>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-lg pb-4">
          <div className="flex w-max space-x-4 p-1">
            {googleData.reviews.map((review, i) => (
              <Card key={i} className="w-[300px] md:w-[350px] hover-card whitespace-normal">
                <CardHeader className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{review.author}</h4>
                    <p className="text-sm text-muted-foreground">{review.time}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm line-clamp-4">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="mt-2" />
        </ScrollArea>

        <div className="flex justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            <span>View all reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  )
}
