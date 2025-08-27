
import { services } from '@/lib/services';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Our Services | Kashi Patent',
  description: 'Explore the wide range of patent and design services we offer to protect your intellectual property.',
};

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Professional Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide a comprehensive suite of services to protect and visualize your intellectual property, from initial concept to final application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.slug} className="group/card flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative">
              <Link href={`/services/${service.slug}`} className="block relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                  data-ai-hint={service.imageHint}
                />
              </Link>
               <Badge className="absolute top-4 right-4 z-10 text-base" variant="default">
                  ${service.price}
              </Badge>
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
              <h2 className="font-headline text-xl font-bold mb-2">
                <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                    {service.title}
                </Link>
              </h2>
              <p className="text-muted-foreground text-sm flex-grow mb-6">{service.description}</p>
              <div className="mt-auto">
                <Button asChild variant="outline">
                    <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
