"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)

    // In a real implementation, you would send this data to your server or a form service
    // const formData = new FormData(e.currentTarget)
    // fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   body: formData,
    //   headers: { Accept: "application/json" },
    // })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <Card className="border-2 hover-card">
          <CardHeader>
            <CardTitle className="text-2xl font-outfit">Contact Us to Book</CardTitle>
            <CardDescription>
              Reach out to schedule your detailing appointment. Our team is ready to assist you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Our Details</h3>
              <div className="space-y-3">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(555) 123-4567</span>
                </a>
                <a
                  href="mailto:info@apexautospa.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@apexautospa.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Business Hours</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 5pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Booking Information</h3>
              <p className="text-muted-foreground">
                Contact us by phone or email to schedule your appointment. We'll discuss your vehicle's needs and find
                the perfect service package for you.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="border-2 hover-card">
          <CardHeader>
            <CardTitle className="text-2xl font-outfit">Send a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="text-primary text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your message has been sent. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="transition-colors duration-200 hover:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="transition-colors duration-200 hover:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                    className="transition-colors duration-200 hover:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your vehicle and the service you're interested in"
                    rows={4}
                    className="resize-none transition-colors duration-200 hover:border-primary"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full transition-all duration-200 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
