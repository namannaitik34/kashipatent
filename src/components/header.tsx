"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { services } from '@/lib/services';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary pb-2 text-base font-medium',
        pathname === href ? 'text-primary border-b-2 border-primary' : 'text-foreground/60'
      )}
      onClick={() => setMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  const ServicesDropdown = () => (
    <DropdownMenu open={isServicesMenuOpen} onOpenChange={setServicesMenuOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onMouseEnter={() => setServicesMenuOpen(true)}
          className={cn(
            'transition-colors hover:text-primary text-base font-medium flex items-center gap-1 cursor-pointer pb-2',
             isServicesMenuOpen || pathname.startsWith('/services') ? 'text-primary border-b-2 border-primary' : 'text-foreground/60'
          )}
        >
          Services <ChevronDown className="h-4 w-4 transition-transform duration-200" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent onMouseLeave={() => setServicesMenuOpen(false)} className="w-56">
        {services.map((service) => (
          <DropdownMenuItem key={service.slug} asChild>
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
  
  const MobileServicesDropdown = () => (
     <div className="flex flex-col space-y-2">
        <p className="font-semibold text-foreground/60">Services</p>
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={cn(
              'pl-4 transition-colors hover:text-primary',
              pathname === `/services/${service.slug}` ? 'text-primary font-semibold' : 'text-foreground/80'
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            {service.title}
          </Link>
        ))}
    </div>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8 ml-10">
          {mainNavLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
          <ServicesDropdown />
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/order">Order Now</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                  <Logo />
                   <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex flex-col space-y-4 py-6 text-lg">
                  {mainNavLinks.map((link) => (
                    <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
                  ))}
                  <MobileServicesDropdown />
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
