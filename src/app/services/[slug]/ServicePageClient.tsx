
"use client";

import type { Service } from '@/lib/services';
import { whyChooseUsReasons, serviceIcons } from '@/lib/services';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Eye, FileText, Calendar, ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Extend JSX to include model-viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.AllHTMLAttributes<any> & {
          src: string;
          alt: string;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
          style?: React.CSSProperties;
        },
        any
      >;
    }
  }
}

export default function ServicePageClient({ service, prevSlug, nextSlug, prevService, nextService }: { service: Service, prevSlug: string, nextSlug: string, prevService: Service, nextService: Service }) {
  return (
    <div className="bg-background relative">
      {/* Hero Section */}
      <section className="relative h-auto md:h-auto w-full bg-black flex items-center justify-center py-16 md:py-24">
        <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-50"
            data-ai-hint={service.imageHint}
            priority
        />
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white p-4">
            <div className="container flex flex-col items-start text-left gap-6">
                <div className="flex flex-col items-start text-left gap-4">
                    <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">Kashi Patent Drawings and Design Services</Badge>
                    <h1 className="font-headline text-4xl md:text-6xl font-bold">{service.title}</h1>
                    <p className="mt-4 max-w-3xl text-lg text-white/90">{service.longDescription}</p>
                    <div className="mt-6 inline-block">
                        <div className=" border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 font-bold text-lg">
                            Starting at ${service.price} per {service.pricePer}
                        </div>
                    </div>
                </div>
                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-2xl">
                    <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                        <Eye className="mr-2 h-5 w-5" />
                        View Samples
                    </Button>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground sm:col-span-1 lg:col-span-1">
                        <Link href="/order">
                            <FileText className="mr-2 h-5 w-5" />
                            Get Quote
                        </Link>
                    </Button>
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 sm:col-span-2 lg:col-span-1">
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule Free Consultancy
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
                 <div className="prose lg:prose-xl max-w-none text-foreground/90 space-y-12">
                    <div>
                        <h2 className="font-headline text-3xl text-primary">What Are {service.title}?</h2>
                        <p>{service.longDescription}</p>
                    </div>

                    <div>
                        <h3 className="font-headline text-2xl">What You'll Get</h3>
                        <ul className="list-none p-0 space-y-3">
                            {service.whatYoullGet.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="h-5 w-5 text-primary shrink-0 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-headline text-2xl">Ideal for:</h3>
                        <div className="flex flex-wrap gap-2">
                            {service.idealFor.map((item, index) => (
                                <Badge key={index} variant="secondary" className="text-sm font-normal">{item}</Badge>
                            ))}
                        </div>
                    </div>
                 </div>
            </div>

             {/* Right Column */}
            <div className="lg:col-span-1 space-y-8">
                 <div className="sticky top-28">
                    <Card className="bg-muted/50 border-primary/20 shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-primary">Why Choose Kashi?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {whyChooseUsReasons.map((reason, index) => {
                                    const Icon = serviceIcons[reason.icon as keyof typeof serviceIcons];
                                    return (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="h-5 w-5 text-green-500 shrink-0 mt-1">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span>{reason.text}</span>
                                    </li>
                                    )
                                })}
                            </ul>
                        </CardContent>
                    </Card>
                    <Button asChild size="lg" className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-7">
                        <Link href={`/order?service=${service.slug}`}>
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Order This Service
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
      
      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Key Features</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Discover the advantages of our {service.title}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.keyFeatures.map((feature) => {
                const Icon = serviceIcons[feature.icon as keyof typeof serviceIcons];
                return (
                <Card key={feature.title} className="text-center p-6 flex flex-col items-center">
                    <div className="flex-shrink-0 flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
                </Card>
                )
            })}
          </div>
        </div>
      </section>

       {service.modelSrc && (
        <section className="py-12 md:py-20 bg-muted">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-headline text-3xl font-bold">Interactive 3D Model</h2>
                    <p className="text-muted-foreground mt-2 mb-8">
                        Rotate and inspect a sample of our high-quality 3D modeling work.
                    </p>
                </div>
                 <div className="w-full h-96 max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden">
                    <model-viewer
                        src={service.modelSrc}
                        alt={`A 3D model for ${service.title}`}
                        camera-controls
                        auto-rotate
                        style={{ 
                            width: '100%', 
                            height: '100%',
                            '--grid-color': 'hsl(var(--border))',
                            backgroundColor: 'hsl(var(--background))',
                            backgroundImage: `
                                linear-gradient(var(--grid-color) 1px, transparent 1px),
                                linear-gradient(to right, var(--grid-color) 1px, transparent 1px)
                            `,
                            backgroundSize: '20px 20px',
                        }}
                    />
                 </div>
            </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">
                Find answers to common questions about our {service.title}.
              </p>
            </div>
            <div className="space-y-8">
              {service.faqs.map((faq, index) => (
                <div key={index} className="p-6 border rounded-lg bg-muted/50">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-base text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

       {/* Next/Prev Service Navigation */}
      <section className="border-t">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
            <Button asChild variant="outline" className="w-full md:w-auto">
              <Link href={`/services/${prevSlug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {prevService.title}
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full md:w-auto">
              <Link href={`/services/${nextSlug}`}>
                {nextService.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
