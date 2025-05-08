"use client"

import { useState, useRef, useEffect } from "react"
import { Car, Droplets, Shield, Sparkles, Check, Clock, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Hand Car Wash",
    description: "Exterior wash, interior vacuum, and basic cleaning",
    price: "$50",
    icon: Car,
    duration: "2-3 hours",
    features: [
      "Hand wash exterior",
      "Wheel cleaning & tire shine",
      "Interior vacuum",
      "Dashboard & console wipe down",
      "Window cleaning inside & out",
      "Door jamb cleaning",
    ],
    recommended: "Perfect for regular maintenance",
  },
  {
    title: "Premium Detail",
    description: "Deep cleaning, waxing, and interior conditioning",
    price: "$199",
    icon: Sparkles,
    duration: "2 hours",
    features: [
      "Everything in Hand Car Wash",
      "Clay bar treatment",
      "Paint decontamination",
      "Carnauba wax application",
      "Leather conditioning",
      "Air vent cleaning",
      "Trunk cleaning",
    ],
    recommended: "Ideal for vehicles needing extra care",
  },
  {
    title: "Ultimate Detail",
    description: "Complete interior/exterior detail with paint correction",
    price: "$550",
    icon: Shield,
    duration: "6-8 hours",
    features: [
      "Everything in Premium Detail",
      "Single stage paint correction",
      "Compound & polish",
      "Headlight restoration",
      "Engine bay detail",
      "Carpet shampooing",
      "Paint sealant application",
    ],
    recommended: "Best for vehicles requiring restoration",
  },
  {
    title: "Ceramic Coating",
    description: "Professional ceramic coating application",
    price: "Call for Quote",
    icon: Droplets,
    duration: "1-2 days",
    features: [
      "Paint correction",
      "Surface preparation",
      "Professional ceramic coating",
      "Multiple layer application",
      "Curing time",
      "Final inspection",
      "Care instructions",
    ],
    recommended: "Ultimate protection for your vehicle",
  },
]

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
}

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  // Fixed the type definition here
  const detailsRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleServiceClick = (index: number) => {
    const isExpanding = expandedIndex !== index
    setExpandedIndex(expandedIndex === index ? null : index)

    if (isExpanding) {
      // Wait for the animation to start before scrolling
      setTimeout(() => {
        const detailsElement = detailsRefs.current[index]
        if (detailsElement) {
          const elementRect = detailsElement.getBoundingClientRect()
          const absoluteElementTop = elementRect.top + window.pageYOffset
          const middle = absoluteElementTop - window.innerHeight / 3

          window.scrollTo({
            top: middle,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }

  useEffect(() => {
    // Reset refs array when services change
    detailsRefs.current = detailsRefs.current.slice(0, services.length)
  }, [])

  return (
    <section className="py-12 md:py-20 px-4 md:px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springTransition}
          className="text-2xl md:text-3xl font-outfit font-bold tracking-tight text-center mb-8 md:mb-12"
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative"
              layout
              layoutId={`container-${index}`}
              variants={itemVariants}
              transition={springTransition}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={springTransition}>
                <Card
                  className={`cursor-pointer transition-all duration-300 ${
                    expandedIndex === index ? "ring-2 ring-primary shadow-lg shadow-primary/20" : ""
                  }`}
                  onClick={() => handleServiceClick(index)}
                >
                  {/* Card content remains the same */}
                  <CardHeader>
                    <motion.div
                      className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <service.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <CardTitle className="font-outfit text-xl tracking-tight">{service.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      Starting at {service.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm md:text-base">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {service.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <AnimatePresence mode="wait">
                {expandedIndex === index && (
                  <motion.div
                    ref={(el) => (detailsRefs.current[index] = el)}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: { ...springTransition, duration: 0.4 },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: { ...springTransition, duration: 0.3 },
                    }}
                    className="mt-2 bg-background border-2 border-primary rounded-lg overflow-hidden"
                  >
                    {/* Details content remains the same */}
                    <motion.div
                      className="p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-outfit font-semibold text-lg">Service Details</h4>
                        <motion.button
                          whileHover={{ rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          transition={springTransition}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-primary/10"
                            onClick={(e) => {
                              e.stopPropagation()
                              setExpandedIndex(null)
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </motion.button>
                      </div>
                      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-4">
                        <div>
                          <h5 className="font-medium mb-2 text-primary">Includes:</h5>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                variants={{
                                  hidden: { opacity: 0, x: -20 },
                                  show: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                      ...springTransition,
                                      delay: i * 0.1,
                                    },
                                  },
                                }}
                                className="flex items-start gap-2 text-sm"
                              >
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    delay: i * 0.1 + 0.2,
                                  }}
                                >
                                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                                </motion.div>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <motion.div variants={itemVariants}>
                          <h5 className="font-medium mb-2 text-primary">Recommended For:</h5>
                          <p className="text-sm">{service.recommended}</p>
                        </motion.div>
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button className="w-full mt-4" asChild>
                            <a href="#booking">Book This Service</a>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
