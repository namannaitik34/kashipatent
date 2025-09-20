
"use client";

import type { Service } from '@/lib/services';
import { whyChooseUsReasons } from '@/lib/services';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, Eye, FileText, Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

export default function ServicePageClient({ service }: { service: Service }) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full bg-black">
        <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-50"
            data-ai-hint={service.imageHint}
            priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="container text-center text-white relative z-10 max-w-4xl">
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white backdrop-blur-sm">Kashi Patent Drawings and Design Services</Badge>
                <h1 className="font-headline text-4xl md:text-6xl font-bold">{service.title}</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">{service.longDescription}</p>
                <div className="mt-6 inline-block">
                    <div className="bg-accent text-accent-foreground rounded-lg px-6 py-3 font-bold text-lg">
                        Starting at ${service.price} per {service.pricePer}
                    </div>
                </div>
            </div>
        </div>
      </section>
      
       {/* Action Bar Section */}
       <section className="border-b border-t bg-muted/30 sticky top-[80px] z-30">
          <div className="container py-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/5 hover:text-primary">
                      <Eye className="mr-2 h-5 w-5" />
                      View Samples
                  </Button>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="/order">
                          <FileText className="mr-2 h-5 w-5" />
                          Get Quote
                      </Link>
                  </Button>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Free Consultancy
                  </Button>
              </div>
          </div>
      </section>

      {/* Content Section */}
      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
                 <div className="prose lg:prose-lg max-w-none text-foreground/90 space-y-8">
                    <div>
                        <h2 className="font-headline text-3xl text-primary">What Are {service.title}?</h2>
                        <p>{service.longDescription}</p>
                    </div>

                    <div>
                        <h3 className="font-headline text-2xl">What You'll Get</h3>
                        <ul className="list-none p-0 space-y-3">
                            {service.whatYoullGet.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-1" />
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
            <div className="lg:col-span-1">
                 <Card className="sticky top-[160px] bg-muted/50 border-primary/20 shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">Why Choose Kashi?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {whyChooseUsReasons.map((reason, index) => {
                                const Icon = reason.icon;
                                return (
                                 <li key={index} className="flex items-start gap-3">
                                    <div className="h-5 w-5 text-green-500 shrink-0 mt-1">
                                        <Icon className="w-5 h-5 text-green-500" />
                                    </div>
                                    <span>{reason.text}</span>
                                </li>
                                )
                            })}
                        </ul>
                    </CardContent>
                 </Card>
            </div>
        </div>
      </div>
      
      {/* Key Features Section */}
      <section className="py-12 md:py-20 bg-muted/40">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Key Features</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Discover the advantages of our {service.title}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.keyFeatures.map((feature) => {
                const Icon = feature.icon;
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
      <section className="py-12 md:py-20 bg-background">
        <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">
                Find answers to common questions about our {service.title}.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </section>
    </div>
  );
}
