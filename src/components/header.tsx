
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChevronDown, Menu } from 'lucide-react';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#how-it-works', label: 'How It Works' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex items-center justify-center flex-1 gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-foreground/60 hover:text-foreground">
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {services.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                  <Link href="/services">All Services</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/order">Order Now</Link>
          </Button>
        </div>
        <div className="md:hidden ml-auto">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full py-6">
                <div className="px-4 mb-6">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-4 px-4 text-lg font-medium">
                  {[...navLinks, { href: '/services', label: 'Services' }].map((link) => {
                    if (link.label === 'Services') {
                      return (
                        <div key="services-mobile" className="flex flex-col gap-2">
                           <Link
                                href="/services"
                                className={cn(
                                    'font-semibold text-foreground',
                                     pathname === '/services' && 'text-foreground'
                                )}
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className={cn(
                                'text-muted-foreground hover:text-foreground pl-4',
                                pathname === `/services/${service.slug}` && 'text-foreground'
                              )}
                              onClick={closeMobileMenu}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'text-muted-foreground hover:text-foreground',
                          pathname === link.href && 'text-foreground'
                        )}
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-auto flex flex-col gap-2 px-4">
                  <Button variant="outline" asChild size="lg" onClick={closeMobileMenu}>
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button asChild size="lg" onClick={closeMobileMenu} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/order">Order Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
