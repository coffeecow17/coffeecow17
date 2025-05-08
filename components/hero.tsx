import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-white">
      <div className="text-center px-4 py-12 md:py-0 max-w-[90%] md:max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4 text-foreground">
          Premium Auto Spa Experience
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-inter mb-8 text-muted-foreground">
          Experience the finest car detailing services at Apex Auto Spa. We bring your vehicle back to showroom
          condition.
        </p>
        <Button size="lg" className="custom-button w-full sm:w-auto text-base" asChild>
          <a href="#booking">Contact Us to Book</a>
        </Button>
      </div>
    </section>
  )
}
