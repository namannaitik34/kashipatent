
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { services } from '@/lib/services';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', isDropdown: true },
  { href: '/#work', label: 'Our Works' },
  { href: '/#about', label: 'About Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const NavLink = ({ href, children, isDropdown }: { href: string; children: React.ReactNode, isDropdown?: boolean }) => {
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href);

    if (isDropdown) {
      return (
        <div 
            className="relative" 
            onMouseEnter={() => setServicesMenuOpen(true)} 
            onMouseLeave={() => setServicesMenuOpen(false)}
        >
          <Link
            href={href}
            className={cn(
              'flex items-center gap-1 transition-colors px-3 py-2 rounded-md text-base font-medium',
              isActive ? 'bg-primary/10 text-primary' : 'text-foreground/60 hover:text-foreground'
            )}
          >
            {children}
            <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', isServicesMenuOpen && 'rotate-180')} />
          </Link>
          {isServicesMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-popover text-popover-foreground ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent"
                    onClick={() => setServicesMenuOpen(false)}
                    role="menuitem"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href={href}
        className={cn(
          'transition-colors px-3 py-2 rounded-md text-base font-medium',
          isActive ? 'bg-primary/10 text-primary' : 'text-foreground/60 hover:text-foreground'
        )}
      >
        {children}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
    return (
      <Link
        href={href}
        className={cn(
            'transition-colors hover:text-primary',
            isActive ? 'text-primary font-semibold' : 'text-foreground/80'
        )}
        onClick={() => setMobileMenuOpen(false)}
        >
        {children}
      </Link>
    );
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center justify-center flex-1 gap-2">
          {mainNavLinks.map((link) => (
            <NavLink key={link.href} href={link.href} isDropdown={link.isDropdown}>{link.label}</NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="outline">
                <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild>
                <Link href="/order">Order Now</Link>
            </Button>
        </div>

        <div className="flex md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className="sr-only">
                    <SheetTitle>Mobile Menu</SheetTitle>
                    <SheetDescription>Main navigation links for mobile users.</SheetDescription>
                </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                  <Logo />
                </div>
                <div className="flex flex-col space-y-4 py-6 text-lg">
                  {mainNavLinks.map((link) => (
                    <MobileNavLink key={link.href} href={link.href}>{link.label}</MobileNavLink>
                  ))}
                  <MobileNavLink href="/contact">Contact</MobileNavLink>
                </div>
                <div className="mt-auto">
                    <Button asChild size="lg" className="w-full">
                        <Link href="/order" onClick={() => setMobileMenuOpen(false)}>Order Now</Link>
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
