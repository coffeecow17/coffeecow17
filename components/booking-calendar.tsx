"use client"

import { useState } from "react"
import { addDays, format } from "date-fns"
import { Check, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

const services = [
  { id: "basic", name: "Hand Car Wash", price: "$50", duration: "2-3 hours" },
  { id: "premium", name: "Premium Detail", price: "$199", duration: "2 hours" },
  { id: "ultimate", name: "Ultimate Detail", price: "$550", duration: "6-8 hours" },
  { id: "ceramic", name: "Ceramic Coating", price: "Call for Quote", duration: "1-2 days" },
]

export function BookingCalendar() {
  const [date, setDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [selectedService, setSelectedService] = useState<string>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create form data to send
    const formData = new FormData(e.target)
    formData.append("service", services.find((s) => s.id === selectedService)?.name || "")
    formData.append("date", date ? format(date, "MMMM d, yyyy") : "")
    formData.append("time", selectedTime || "")

    // Replace with your actual Formspree form ID
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        setIsSubmitting(false)
        if (response.ok) {
          alert("Booking confirmed! We'll send you a confirmation email shortly.")
        } else {
          alert("Oops! There was a problem submitting your form.")
        }
      })
      .catch((error) => {
        setIsSubmitting(false)
        alert("Oops! There was a problem submitting your form.")
        console.error(error)
      })
  }

  return (
    <Card className="max-w-5xl mx-auto border-2 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="space-y-1 p-4 md:p-6">
        <CardTitle className="text-2xl font-outfit font-bold tracking-tight">Schedule Your Spa Treatment</CardTitle>
        <CardDescription className="text-base font-inter">
          Choose your preferred service, date, and time
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6 space-y-6">
        {/* Service Selection */}
        <div className="space-y-4">
          <Label className="text-base md:text-lg font-semibold">Select Service</Label>
          <ScrollArea className="w-full">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 min-w-[600px] sm:min-w-0">
              {services.map((service) => (
                <Button
                  key={service.id}
                  variant={selectedService === service.id ? "default" : "outline"}
                  className={cn(
                    "h-auto flex flex-col items-start space-y-2 p-4 transition-all duration-200",
                    selectedService === service.id ? "ring-2 ring-primary ring-offset-2" : "hover:border-primary",
                  )}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex w-full justify-between">
                    <span className="font-semibold">{service.name}</span>
                    {selectedService === service.id && <Check className="h-4 w-4" />}
                  </div>
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Date and Time Selection */}
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <Label className="text-base md:text-lg font-semibold">Select Date</Label>
            <div className="flex justify-center lg:justify-start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
                className="rounded-md border-2 p-2 md:p-4 hover:border-primary transition-colors"
                classNames={{
                  head_cell: "text-muted-foreground font-semibold",
                  cell: cn(
                    "h-9 md:h-12 w-9 md:w-12 text-center text-sm relative p-0 focus-within:relative focus-within:z-20",
                    "hover:bg-accent hover:text-accent-foreground transition-colors",
                  ),
                  day: cn(
                    "h-9 md:h-12 w-9 md:w-12 p-0 font-normal aria-selected:opacity-100",
                    "hover:bg-accent hover:text-accent-foreground transition-colors",
                  ),
                  day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                }}
              />
            </div>
          </div>

          {date && (
            <div className="space-y-4">
              <Label className="text-base md:text-lg font-semibold">Select Time</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={cn(
                      "justify-start gap-2 transition-all duration-200 text-sm md:text-base",
                      selectedTime === time ? "ring-2 ring-primary ring-offset-2" : "hover:border-primary",
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock className="h-4 w-4" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 md:p-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              disabled={!date || !selectedTime || !selectedService}
              className="w-full transition-all duration-200 hover:scale-105 text-sm md:text-base"
              size="lg"
            >
              Complete Booking
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md p-4 md:p-6">
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-lg md:text-xl">Complete Your Booking</DialogTitle>
              <DialogDescription>
                {selectedService && date && selectedTime && (
                  <p className="mt-2 text-sm md:text-base">
                    {services.find((s) => s.id === selectedService)?.name} on {format(date, "MMMM d, yyyy")} at{" "}
                    {selectedTime}
                  </p>
                )}
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="transition-colors duration-200 hover:border-primary"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="transition-colors duration-200 hover:border-primary"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="transition-colors duration-200 hover:border-primary"
                  required
                />
              </div>

              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full transition-all duration-200 text-sm md:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Confirming..." : "Confirm Booking"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
