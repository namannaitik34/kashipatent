import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, DraftingCompass, Lightbulb, Scale } from 'lucide-react';

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

const howItWorksSteps = [
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: 'Submit Your Idea',
    description: 'Provide us with your invention details, sketches, or 3D models through our secure order form.',
  },
  {
    icon: <DraftingCompass className="w-10 h-10 text-primary" />,
    title: 'Expert Drawing & Review',
    description: 'Our skilled drafters create precise, compliant drawings. You review and request revisions.',
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
    title: 'Final Delivery',
    description: 'Receive your final patent-ready drawings in all required formats, ready for filing.',
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-card">
        <div className="container mx-auto">
          <h2 className="font-headline text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-headline text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-background">
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
      <section id="testimonials" className="py-20 bg-card">
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
