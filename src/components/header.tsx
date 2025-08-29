
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
import { ScrollArea } from './ui/scroll-area';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        'relative text-sm font-medium text-foreground/60 transition-colors hover:text-foreground',
        'after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform',
        'hover:after:scale-x-100',
        isActive && 'text-foreground font-semibold after:scale-x-100'
      )}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#faq', label: 'FAQs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8 mx-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#about">About Us</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                 className={cn(
                    'relative flex items-center gap-1 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground',
                    'after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform',
                    'hover:after:scale-x-100',
                    pathname.startsWith('/services') && 'text-foreground font-semibold after:scale-x-100'
                )}
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
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
          <NavLink href="/#how-it-works">How It Works</NavLink>
          <NavLink href="/#faq">FAQs</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
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
            <SheetContent side="left" className="flex flex-col p-0">
              <SheetHeader className="p-4 border-b">
                <Logo />
              </SheetHeader>
              <ScrollArea className="flex-grow">
                <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
                  {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'text-muted-foreground hover:text-foreground',
                          pathname === link.href && 'text-foreground font-semibold'
                        )}
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                  ))}
                  <Link
                    href="/contact"
                    className={cn(
                      'text-muted-foreground hover:text-foreground',
                      pathname === '/contact' && 'text-foreground font-semibold'
                    )}
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </nav>
              </ScrollArea>
              <div className="mt-auto p-4 border-t">
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" onClick={closeMobileMenu}>
                  <Link href="/order">Order Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
