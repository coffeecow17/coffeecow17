import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted" id="contact">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Apex Auto Spa</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Premium auto detailing services for discerning vehicle owners.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm md:text-base">
              <a
                href="tel:+17783023905"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(+778) 302-3905</span>
              </a>
              <a
                href="mailto:info@apexautospa.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@apexautospa.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>141 Water Street, Downtown Vancouver, Canada</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-sm md:text-base text-muted-foreground">
              <p>Monday - Friday: 8am - 6pm</p>
              <p>Saturday: 9am - 5pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary social-icon">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary social-icon">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Apex Auto Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
