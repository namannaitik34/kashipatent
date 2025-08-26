import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FileUp, ClipboardList, Cog, Mail, RefreshCcw, PenTool, Palette, Copyright, Box, ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';

const workSamples = [
  {
    title: 'Utility Patent Drawing',
    image: 'https://picsum.photos/600/400?random=1',
    hint: 'technical drawing',
  },
  {
    title: 'Design Patent Illustration',
    image: 'https://picsum.photos/600/400?random=2',
    hint: 'product design',
  },
  {
    title: '3D Model Rendering',
    image: 'https://picsum.photos/600/400?random=3',
    hint: '3d model',
  },
];

const serviceIcons: { [key: string]: React.ReactNode } = {
  'utility-drawing': <PenTool className="w-10 h-10 text-primary" />,
  'design-patent-services': <Palette className="w-10 h-10 text-primary" />,
  'trademark-drawing-services': <Copyright className="w-10 h-10 text-primary" />,
  'engineering-drawing-services': <Cog className="w-10 h-10 text-primary" />,
  '3d-modeling-services': <Box className="w-10 h-10 text-primary" />,
};


const howItWorksSteps = [
  {
    icon: <FileUp className="w-10 h-10 text-primary" />,
    title: 'Input Request Details and Upload Files',
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-primary" />,
    title: 'Understanding your Requirements',
  },
  {
    icon: <Cog className="w-10 h-10 text-primary" />,
    title: 'Patent Drawing Experts at Work',
  },
  {
    icon: <Mail className="w-10 h-10 text-primary" />,
    title: 'Receive Formal Drawings in 2-3 Business Days',
    description: '(*T&C Apply)',
  },
  {
    icon: <RefreshCcw className="w-10 h-10 text-primary" />,
    title: 'Unlimited Iterations - No Additional Cost',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    title: 'Inventor',
    avatar: 'https://picsum.photos/100/100?random=4',
    hint: 'man portrait',
    quote:
      'Kashi Patent delivered exceptional quality drawings ahead of schedule. Their attention to detail is unmatched. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    title: 'Patent Attorney',
    avatar: 'https://picsum.photos/100/100?random=5',
    hint: 'woman portrait',
    quote:
      'I rely on Kashi Patent for all my clients\' design patent needs. They are professional, responsive, and their work is always top-notch.',
  },
  {
    name: 'Samuel Lee',
    title: 'Startup Founder',
    avatar: 'https://picsum.photos/100/100?random=6',
    hint: 'person smiling',
    quote:
      'The 3D models and engineering drawings were critical for our prototype and patent application. The team was a pleasure to work with.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=0')" }}
        data-ai-hint="blueprint background"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-lg">
            Precision in Every Line.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Transforming innovative ideas into USPTO-compliant patent drawings with unparalleled accuracy and artistry.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/order">Order Now</Link>
          </Button>
        </div>
      </section>

      {/* Work Samples Section */}
      <section id="work" className="py-20 bg-background">
        <div className="container mx-auto">
          <h2 className="font-headline text-4xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workSamples.map((sample) => (
              <Card key={sample.title} className="overflow-hidden group">
                <CardHeader className="p-0">
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={sample.hint}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">{sample.title}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto">
          <h2 className="font-headline text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service) => (
              <Card key={service.slug} className="flex flex-col text-center items-center p-6 group hover:shadow-lg transition-shadow">
                <div className="mb-4 text-primary">
                  {serviceIcons[service.slug] || <PenTool className="w-10 h-10 text-primary" />}
                </div>
                <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="flex-grow mb-4">{service.description}</CardDescription>
                <Button asChild variant="link" className="p-0 mt-auto">
                  <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
            <div className="flex md:col-span-2 lg:col-span-1 items-center justify-center">
                 <Button asChild size="lg" variant="outline">
                    <Link href="/services">View All Services</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold">How it Works?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Our Patent Drawing Services are designed to support patent agents, attorneys, and innovators with a simple, transparent process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="flex flex-col items-center justify-start p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 bg-primary/10 p-4 rounded-full">
                  {step.icon}
                </div>
                <h3 className="font-headline text-lg font-semibold mb-2 h-16 flex items-center">{step.title}</h3>
                {step.description && <p className="text-sm text-muted-foreground">{step.description}</p>}
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://picsum.photos/800/600?random=7"
                alt="Our team at work"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                data-ai-hint="drafting office"
              />
            </div>
            <div>
              <h2 className="font-headline text-4xl font-bold mb-4">About Kashi Patent</h2>
              <p className="mb-4 text-muted-foreground">
                Founded by a team of experienced drafters and engineers, Kashi Patent is dedicated to providing the highest quality patent drawing services. We understand the critical role that precise and clear illustrations play in securing intellectual property rights.
              </p>
              <p className="text-muted-foreground">
                Our mission is to bridge the gap between invention and protection, ensuring every detail of your idea is perfectly captured and compliant with all patent office regulations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto">
          <h2 className="font-headline text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <Avatar className="w-20 h-20 mb-4">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="italic text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
