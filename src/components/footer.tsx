import Link from 'next/link';
import { Logo } from '@/components/logo';
import { services } from '@/lib/services';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream border-t pt-20 md:pt-32">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Precision patent drawings for inventors, startups, and law firms.
            </p>
            <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-5 w-5" />
                </Link>
            </div>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/order" className="text-sm hover:text-primary transition-colors">Order Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span className="text-muted-foreground">123 Patent Lane, Innovation City, 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:Amy.moore@kashipatent.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Amy.moore@kashipatent.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:9140024107" className="text-muted-foreground hover:text-primary transition-colors">
                  9140024107
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kashi Patent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
