import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center px-4 py-12 md:py-0 max-w-[90%] md:max-w-2xl mx-auto">
        <h1 className="hero-text text-3xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4 text-white">
          Premium Auto Spa Experience
        </h1>
        <p className="hero-text text-base md:text-lg lg:text-xl font-inter mb-8 text-gray-200">
          Experience the finest car detailing services at Apex Auto Spa. We bring your vehicle back to showroom
          condition.
        </p>
        <Button size="lg" className="custom-button w-full sm:w-auto text-base" asChild>
          <a href="#booking">Book Now</a>
        </Button>
      </div>
    </section>
  )
}
