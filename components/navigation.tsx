"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-outfit font-bold tracking-tight">Apex Auto Spa</span>
        </Link>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/#services" className="nav-link text-muted-foreground hover:text-primary">
            Services
          </Link>
          <Link href="/#booking" className="nav-link text-muted-foreground hover:text-primary">
            Book Now
          </Link>
          <Link href="/#testimonials" className="nav-link text-muted-foreground hover:text-primary">
            Testimonials
          </Link>
          <Link href="/#contact" className="nav-link text-muted-foreground hover:text-primary">
            Contact
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden px-2" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[385px]">
            <nav className="flex flex-col space-y-6 mt-6">
              {[
                { href: "/#services", label: "Services" },
                { href: "/#booking", label: "Book Now" },
                { href: "/#testimonials", label: "Testimonials" },
                { href: "/#contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
