"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Add your gallery images here
const galleryImages = [
  {
    src: "/images/gallery/before-after-1.jpg",
    alt: "Before and After Detail",
    title: "Complete Exterior Restoration",
  },
  {
    src: "/images/gallery/interior-1.jpg",
    alt: "Interior Detailing",
    title: "Premium Interior Detail",
  },
  {
    src: "/images/gallery/ceramic-1.jpg",
    alt: "Ceramic Coating",
    title: "Ceramic Coating Application",
  },
  {
    src: "/images/gallery/engine-1.jpg",
    alt: "Engine Bay Detail",
    title: "Engine Bay Cleaning",
  },
  {
    src: "/images/gallery/wheels-1.jpg",
    alt: "Wheel Detailing",
    title: "Wheel and Tire Detail",
  },
  {
    src: "/images/gallery/paint-1.jpg",
    alt: "Paint Correction",
    title: "Paint Correction Process",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-12 md:py-20 px-4 md:px-6" id="gallery">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-outfit font-bold tracking-tight text-center mb-8 md:mb-12">
          Our Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer hover-card"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="p-4 w-full text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
