"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { services } from '@/lib/services';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', isDropdown: true },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);


  const NavLink = ({ href, children, isDropdown }: { href: string; children: React.ReactNode, isDropdown?: boolean }) => {
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
    
    if (isDropdown) {
        return (
            <DropdownMenu open={isServicesMenuOpen} onOpenChange={setServicesMenuOpen}>
                <DropdownMenuTrigger asChild>
                     <button
                        onMouseEnter={() => setServicesMenuOpen(true)}
                        className={cn(
                            'flex items-center gap-1 transition-colors hover:text-primary pb-2 text-base font-medium',
                            isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground/60'
                        )}
                    >
                        {children}
                        <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', isServicesMenuOpen && 'rotate-180')} />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                    align="start" 
                    className="w-56"
                    onMouseLeave={() => setServicesMenuOpen(false)}
                >
                    <DropdownMenuItem asChild>
                         <Link href="/services" className="font-bold">All Services</Link>
                    </DropdownMenuItem>
                    {services.map((service) => (
                        <DropdownMenuItem key={service.slug} asChild>
                            <Link href={`/services/${service.slug}`}>{service.title}</Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return (
      <Link
        href={href}
        className={cn(
          'transition-colors hover:text-primary pb-2 text-base font-medium',
          isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground/60'
        )}
        onClick={() => setMobileMenuOpen(false)}
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
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8 ml-10">
          {mainNavLinks.map((link) => (
            <NavLink key={link.href} href={link.href} isDropdown={link.isDropdown}>{link.label}</NavLink>
          ))}
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
                    <MobileNavLink key={link.href} href={link.href}>{link.label}</MobileNavLink>
                  ))}
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
