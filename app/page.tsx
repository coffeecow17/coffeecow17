import { BookingCalendar } from "@/components/booking-calendar"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { GoogleReviews } from "@/components/google-reviews"
import { Footer } from "@/components/footer"
import { ServiceComparison } from "@/components/service-comparison"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ServiceComparison />
        <section className="py-20 px-4 md:px-6 bg-muted/40" id="booking">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Book Your Detail</h2>
            <BookingCalendar />
          </div>
        </section>
        <GoogleReviews />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
