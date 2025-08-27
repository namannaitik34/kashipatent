"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

export default function Newsletter() {
    // A simple form handler for demonstration.
    // In a real app, you would integrate this with a newsletter service.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
            e.currentTarget.reset();
        }
    };

    return (
        <section id="newsletter" className=" bg-background">
            <div className="container">
                <div className="relative bg-primary rounded-2xl p-8 md:p-12 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="hidden md:block text-primary-foreground">
                             <h3 className="font-headline text-6xl md:text-8xl font-bold text-primary-foreground/20 select-none">
                                Get
                              </h3>
                              <h3 className="font-headline text-5xl md:text-7xl font-bold -mt-8 md:-mt-12">
                                Ahead.
                              </h3>
                        </div>
                        <div className="text-primary-foreground text-center md:text-left">
                            <h2 className="font-headline text-4xl font-bold">Stay Updated with Patent News & Tips</h2>
                            <p className="mt-4 text-lg text-primary-foreground/80">Join our newsletter to receive the latest updates, industry news, and exclusive tips directly in your inbox.</p>
                            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bg-primary-foreground/20 border-primary-foreground/50 text-primary-foreground placeholder:text-primary-foreground/70 flex-grow"
                                    aria-label="Email address"
                                    required
                                />
                                <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                    <Send className="mr-2 h-4 w-4" />
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-x-1/2 translate-y-1/2" />
                </div>
            </div>
        </section>
    )
}
