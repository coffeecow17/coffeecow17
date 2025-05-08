"use client"

import { useState } from "react"
import { Check, HelpCircle, X } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const features = {
  basic: [
    { name: "Hand wash exterior", included: true, tooltip: "Gentle hand wash using premium car shampoo" },
    { name: "Wheel cleaning", included: true, tooltip: "Deep clean wheels and apply tire shine" },
    { name: "Interior vacuum", included: true, tooltip: "Complete interior vacuum including trunk" },
    { name: "Window cleaning", included: true, tooltip: "Interior and exterior window cleaning" },
    { name: "Clay bar treatment", included: false, tooltip: "Remove surface contaminants from paint" },
    { name: "Paint correction", included: false, tooltip: "Remove scratches and swirl marks" },
    { name: "Ceramic coating", included: false, tooltip: "Long-lasting paint protection" },
    { name: "Engine bay detail", included: false, tooltip: "Clean and dress engine compartment" },
  ],
  premium: [
    { name: "Hand wash exterior", included: true, tooltip: "Gentle hand wash using premium car shampoo" },
    { name: "Wheel cleaning", included: true, tooltip: "Deep clean wheels and apply tire shine" },
    { name: "Interior vacuum", included: true, tooltip: "Complete interior vacuum including trunk" },
    { name: "Window cleaning", included: true, tooltip: "Interior and exterior window cleaning" },
    { name: "Clay bar treatment", included: true, tooltip: "Remove surface contaminants from paint" },
    { name: "Paint correction", included: false, tooltip: "Remove scratches and swirl marks" },
    { name: "Ceramic coating", included: false, tooltip: "Long-lasting paint protection" },
    { name: "Engine bay detail", included: true, tooltip: "Clean and dress engine compartment" },
  ],
  ultimate: [
    { name: "Hand wash exterior", included: true, tooltip: "Gentle hand wash using premium car shampoo" },
    { name: "Wheel cleaning", included: true, tooltip: "Deep clean wheels and apply tire shine" },
    { name: "Interior vacuum", included: true, tooltip: "Complete interior vacuum including trunk" },
    { name: "Window cleaning", included: true, tooltip: "Interior and exterior window cleaning" },
    { name: "Clay bar treatment", included: true, tooltip: "Remove surface contaminants from paint" },
    { name: "Paint correction", included: true, tooltip: "Remove scratches and swirl marks" },
    { name: "Ceramic coating", included: false, tooltip: "Long-lasting paint protection" },
    { name: "Engine bay detail", included: true, tooltip: "Clean and dress engine compartment" },
  ],
  ceramic: [
    { name: "Hand wash exterior", included: true, tooltip: "Gentle hand wash using premium car shampoo" },
    { name: "Wheel cleaning", included: true, tooltip: "Deep clean wheels and apply tire shine" },
    { name: "Interior vacuum", included: true, tooltip: "Complete interior vacuum including trunk" },
    { name: "Window cleaning", included: true, tooltip: "Interior and exterior window cleaning" },
    { name: "Clay bar treatment", included: true, tooltip: "Remove surface contaminants from paint" },
    { name: "Paint correction", included: true, tooltip: "Remove scratches and swirl marks" },
    { name: "Ceramic coating", included: true, tooltip: "Long-lasting paint protection" },
    { name: "Engine bay detail", included: true, tooltip: "Clean and dress engine compartment" },
  ],
}

const packages = [
  {
    id: "basic",
    name: "Hand Car Wash",
    price: "$50",
    description: "Basic exterior and interior cleaning",
    duration: "2-3 hours",
    features: features.basic,
    recommended: false,
  },
  {
    id: "premium",
    name: "Premium Detail",
    price: "$199",
    description: "Deep cleaning inside and out",
    duration: "2 hours",
    features: features.premium,
    recommended: true,
  },
  {
    id: "ultimate",
    name: "Ultimate Detail",
    price: "$550",
    description: "Complete detail with paint correction",
    duration: "6-8 hours",
    features: features.ultimate,
    recommended: false,
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    price: "Call for Quote",
    description: "Ultimate protection package",
    duration: "1-2 days",
    features: features.ceramic,
    recommended: false,
  },
]

type VehicleType = "sedan" | "suv" | "truck" | "luxury"

const vehicleRecommendations: Record<VehicleType, string> = {
  sedan: "premium",
  suv: "ultimate",
  truck: "ultimate",
  luxury: "ceramic",
}

export function ServiceComparison() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>("sedan")
  const recommendedPackage = vehicleRecommendations[selectedVehicle]

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30" id="compare">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold tracking-tight">Compare Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect detailing package for your vehicle. Select your vehicle type for personalized
            recommendations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {(["sedan", "suv", "truck", "luxury"] as VehicleType[]).map((type) => (
            <Button
              key={type}
              variant={selectedVehicle === type ? "default" : "outline"}
              className={cn(
                "capitalize transition-all",
                selectedVehicle === type && "ring-2 ring-primary ring-offset-2",
              )}
              onClick={() => setSelectedVehicle(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={cn(
                  "relative transition-all duration-300 hover:shadow-lg",
                  pkg.id === recommendedPackage && "ring-2 ring-primary shadow-lg",
                )}
              >
                {pkg.id === recommendedPackage && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>
                    <div className="space-y-2">
                      <span className="block">{pkg.description}</span>
                      <span className="block text-lg font-semibold text-primary">Starting at {pkg.price}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">1 hour</div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-primary shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground shrink-0" />
                        )}
                        <span className="text-sm flex items-center gap-1">
                          {feature.name}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href="#booking">Book {pkg.name}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
