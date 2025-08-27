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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FileUp, ClipboardList, Cog, Mail, RefreshCcw, PenTool, Palette, Copyright, Box, ArrowRight, CheckCircle, ShieldCheck, HeartHandshake, Zap, Wallet, Star, Clock, Send } from 'lucide-react';
import { services } from '@/lib/services';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

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

const whyChooseUsFeatures = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: 'Impeccable Quality',
        description: 'Expertly crafted patent drawings that meet the highest USPTO standards.',
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-primary" />,
        title: 'Dedicated Support',
        description: 'Responsive communication and guidance throughout your project.',
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: 'Proven Reliability',
        description: 'Dependable service for inventors, attorneys, and businesses worldwide.',
    },
    {
        icon: <Wallet className="w-8 h-8 text-primary" />,
        title: 'Budget-friendly Prices',
        description: "Find lower prices? We'll match them to ensure the best value.",
    },
    {
        icon: <Star className="w-8 h-8 text-primary" />,
        title: 'Satisfaction Guarantee',
        description: 'Unlimited revisions at no extra cost. Complete satisfaction or you don\'t pay.',
    },
    {
        icon: <Clock className="w-8 h-8 text-primary" />,
        title: 'Quick Delivery',
        description: 'Receive high-quality outputs in just a few hours. Super-expedited options available.',
    },
]

const faqs = [
  {
    question: "What types of patent drawings do you provide?",
    answer: "We provide a comprehensive range of patent illustration services, including Utility patent drawings, Design patent drawings, Trademark drawings, and detailed Engineering drawings. Our team is skilled in creating illustrations that meet the strict requirements of patent offices worldwide."
  },
  {
    question: "How do I submit my invention details?",
    answer: "You can easily submit your project details through our secure online order form. We recommend providing as much information as possible, including descriptions, sketches, photos, or 3D models to help our drafters accurately capture your invention."
  },
  {
    question: "How long does it take to receive my drawings?",
    answer: "Our standard delivery time is 2-3 business days. For urgent requirements, we also offer expedited services to ensure you meet your deadlines."
  },
  {
    question: "Can I request revisions to my drawings?",
    answer: "Absolutely! We offer unlimited free revisions until you are completely satisfied with the drawings. Our goal is to ensure the final illustrations perfectly match your vision and meet all necessary standards."
  },
  {
    question: "Are your drawings accepted by patent offices worldwide?",
    answer: "Yes, our drawings are prepared to comply with the specific rules and standards of major patent offices, including the USPTO (United States Patent and Trademark Office), WIPO (World Intellectual Property Organization), EPO (European Patent Office), and many others."
  },
  {
    question: "What file formats do you deliver?",
    answer: "We deliver the final drawings in all standard formats required for filing, such as PDF, AI, DWG, and JPG, at no additional cost. We can also provide other formats upon request."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes, we treat all client information with the utmost confidentiality. We are happy to sign a Non-Disclosure Agreement (NDA) before you share any sensitive details about your invention."
  },
  {
    question: "How do I contact your support team?",
    answer: "You can reach our dedicated support team via email at Amy.moore@kashipatent.com, by phone at 9140024107, or by filling out the contact form on our website. We're here to assist you with any questions."
  }
];

const howItWorksSteps = [
  {
    icon: <FileUp className="w-8 h-8 text-primary" />,
    title: 'Submit Your Project',
    description: 'Use our simple order form to upload your invention details, sketches, or reference files.',
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    title: 'Review & Quote',
    description: 'Our team reviews your submission and provides a detailed quote and timeline for your approval.',
  },
  {
    icon: <Cog className="w-8 h-8 text-primary" />,
    title: 'Drafting Process',
    description: 'Our expert drafters get to work, creating precise and compliant patent drawings.',
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-primary" />,
    title: 'Revisions & Feedback',
    description: 'We share the drafts with you for feedback and make unlimited revisions until you are satisfied.',
  },
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: 'Final Delivery',
    description: 'Receive your final, application-ready drawings in all required formats.',
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
               <Card key={service.slug} className="flex flex-col overflow-hidden group/card relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                 <div className="absolute top-4 right-4 z-10">
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                        <Link href="/order">
                            <span>${service.price}</span>
                        </Link>
                    </Button>
                </div>
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
                   <Button asChild variant="link" className="mt-auto self-start p-0 text-primary">
                     <Link href={`/services/${service.slug}`}>
                       Learn More <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                   </Button>
                 </CardContent>
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

      {/* Understanding Patent Drawings Section */}
      <section id="design-types" className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold">Understanding Patent Drawings</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Different ideas require different types of protection. We specialize in both utility and design patents to best serve your invention.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Utility Patent Card */}
            <Card className="flex flex-col">
              <CardHeader>
                <Badge className="w-fit mb-2">Technical</Badge>
                <CardTitle className="font-headline text-2xl">Utility Patents</CardTitle>
                <CardDescription>Protecting how your invention <span className="font-semibold text-primary">works and functions</span>.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <Image
                  src="https://picsum.photos/600/400?random=8"
                  alt="Utility Patent Drawing Example"
                  width={600}
                  height={400}
                  className="rounded-lg mb-6 shadow-md"
                  data-ai-hint="technical diagram"
                />
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Focuses on the functional aspects and mechanisms.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Includes diagrams, flowcharts, and schematics.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Drawings are typically detailed and annotated with reference numbers.</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="mt-6 hover:bg-primary hover:text-primary-foreground">
                  <Link href="/services/utility-drawing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Design Patent Card */}
            <Card className="flex flex-col border-primary/50 shadow-lg">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Aesthetic</Badge>
                <CardTitle className="font-headline text-2xl">Design Patents</CardTitle>
                <CardDescription>Protecting your product's <span className="font-semibold text-primary">unique visual appearance</span>.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <Image
                  src="https://picsum.photos/600/400?random=9"
                  alt="Design Patent Drawing Example"
                  width={600}
                  height={400}
                  className="rounded-lg mb-6 shadow-md"
                  data-ai-hint="product photo"
                />
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Focuses on the ornamental, non-functional design.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Requires specific views (front, back, side, perspective, etc.).</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Uses shading and surface lines to define the shape and contour.</span>
                  </li>
                </ul>
                <Button asChild variant="default" className="mt-6">
                  <Link href="/services/design-patent-services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-card">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-4xl font-bold">Why Choose Kashi Patent?</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        We deliver patent drawings and services that exceed expectations, backed by experience and a proven track record of success.
                    </p>
                     <Image
                        src="https://picsum.photos/800/600?random=10"
                        alt="Patent design software interface on a tablet"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl mt-8"
                        data-ai-hint="design software"
                    />
                </div>
                <div className="space-y-8">
                    {whyChooseUsFeatures.map((feature) => (
                        <div key={feature.title} className="flex items-start gap-5">
                            <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
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
              <Card key={index} className="flex flex-col items-center justify-start p-6 hover:shadow-lg transition-shadow bg-card">
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
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions? We've got answers. Here are some of the most common inquiries we receive.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
