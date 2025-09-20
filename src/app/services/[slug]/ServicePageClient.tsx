
"use client";

import type { Service } from '@/lib/services';
import { whyChooseUsReasons } from '@/lib/services';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, Eye, FileText, Calendar } from 'lucide-react';
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
       <section className="border-b border-t bg-muted/30">
          <div className="container py-4">
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
                 <div className="prose lg:prose-lg max-w-none text-foreground/90">
                    <h2 className="font-headline text-3xl text-primary">What Are {service.title}?</h2>
                    <p>{service.longDescription}</p>

                    <h3 className="font-headline text-2xl">What You'll Get</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        {service.whatYoullGet.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="font-headline text-2xl">Ideal for:</h3>
                     <ul className="list-disc pl-5 space-y-2">
                        {service.idealFor.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                 </div>
            </div>

             {/* Right Column */}
            <div className="lg:col-span-1">
                 <Card className="sticky top-24 bg-muted/50 border-primary/20 shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">Why Choose Kashi?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {whyChooseUsReasons.map((reason, index) => (
                                 <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                                    <span>{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                 </Card>
            </div>
        </div>
      </div>

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
    </div>
  );
}
