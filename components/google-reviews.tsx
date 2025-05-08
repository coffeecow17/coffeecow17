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
      profileImage: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "Emma Thompson",
      rating: 5,
      time: "1 week ago",
      text: "Best detailing service in the area. They took care of my Tesla Model 3 and the results were amazing. The ceramic coating they applied is holding up beautifully.",
      profileImage: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "David Martinez",
      rating: 4,
      time: "2 weeks ago",
      text: "Very professional team. They did a great job on my truck, especially with the interior detailing. Would recommend!",
      profileImage: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "Sarah Wilson",
      rating: 5,
      time: "3 weeks ago",
      text: "Exceptional service! They went above and beyond to restore my car's paint. The results exceeded my expectations.",
      profileImage: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "James Anderson",
      rating: 5,
      time: "1 month ago",
      text: "First-class detailing service. The team is knowledgeable and professional. My car looks better than when I first bought it!",
      profileImage: "/placeholder.svg?height=40&width=40",
    },
  ],
}

export function GoogleReviews() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg?height=24&width=24" alt="Google Logo" className="w-6 h-6" />
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
                  <div className="flex items-center gap-3">
                    <img
                      src={review.profileImage || "/placeholder.svg"}
                      alt={`${review.author}'s profile`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{review.author}</h4>
                      <p className="text-sm text-muted-foreground">{review.time}</p>
                    </div>
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
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17.9 17.39c-.26-.8-.48-1.5-.7-2.2-.21-.71-.41-1.49-.63-2.36-.22-.87-.46-1.78-.73-2.75-.27-.97-.56-2.01-.87-3.12l-.2-.71c-.24-.84-.5-1.64-.76-2.4h.83c.37 0 .75-.01 1.15-.02.4-.01.82-.02 1.27-.02h8.3v1.38H17.5c.24.91.5 1.8.76 2.69.26.89.52 1.79.78 2.71.26.91.53 1.82.78 2.71.26.89.5 1.78.74 2.67h-2.66zm4.6 3.71H11.9c-.32 0-.59-.11-.81-.34-.22-.23-.33-.51-.33-.84V.79c0-.33.11-.6.33-.83.22-.23.49-.34.81-.34h10.6c.32 0 .59.11.81.34.22.23.33.51.33.84v19.13c0 .33-.11.61-.33.84-.22.23-.49.34-.81.34zM14.5 2.6h5.78V1.38H14.5V2.6zm0 3.22h5.78V4.6H14.5v1.22zm0 3.22h5.78V7.82H14.5v1.22zm0 3.22h5.78v-1.22H14.5v1.22zm0 3.22h5.78v-1.22H14.5v1.22zm0 3.22h5.78v-1.22H14.5v1.22z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
