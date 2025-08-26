
import { services } from '@/lib/services';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Kashi Patent',
  description: 'Explore the wide range of patent and design services we offer to protect your intellectual property.',
};

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Professional Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide a comprehensive suite of services to protect and visualize your intellectual property, from initial concept to final application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.slug} className="flex flex-col overflow-hidden group/card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0">
              <Link href={`/services/${service.slug}`} className="block relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                  data-ai-hint={service.imageHint}
                />
              </Link>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
              <CardDescription className="flex-grow mb-4">{service.description}</CardDescription>
              <Button asChild className="mt-auto group/button">
                <Link href={`/services/${service.slug}`}>
                  <span className="group-hover/button:hidden flex items-center">Learn More <ArrowRight className="ml-2 h-4 w-4" /></span>
                  <span className="hidden group-hover/button:block">From ${service.price}</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
