
"use client";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FileUp, ClipboardList, Cog, Mail, RefreshCcw, PenTool, Palette, Copyright, Box, ArrowRight, CheckCircle, ShieldCheck, HeartHandshake, Zap, Wallet, Star, Clock, Send, FunctionSquare, DraftingCompass, BrainCircuit, Target, Handshake, Lightbulb, View } from 'lucide-react';
import { services } from '@/lib/services';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import FadeIn from '@/components/fade-in';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const workSamples = [
  {
    title: 'Drone Delivery System',
    category: 'Utility Patent',
    image: 'https://picsum.photos/600/400?random=1',
    hint: 'technical drawing',
    description: 'Detailed mechanical drawings for a novel autonomous drone delivery mechanism, ensuring all functional aspects were clearly illustrated for the patent application.',
  },
  {
    title: 'Ergonomic Office Chair',
    category: 'Design Patent',
    image: 'https://picsum.photos/600/400?random=2',
    hint: 'product design',
    description: 'A full set of illustrations capturing the unique aesthetic and ornamental features of a new ergonomic chair, crucial for securing a design patent.',
  },
  {
    title: 'Smart Medical Device',
    category: '3D Model',
    image: 'https://picsum.photos/600/400?random=3',
    hint: '3d model',
    description: 'Created a high-fidelity 3D model from 2D sketches, which was used for both patent illustrations and investor presentations.',
  },
  {
    title: 'Brand Logo for "Innovate"',
    category: 'Trademark',
    image: 'https://picsum.photos/600/400?random=4',
    hint: 'company logo',
    description: 'Developed a clean and distinctive logo, delivered in formats compliant with USPTO requirements for trademark registration.',
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

const coreValues = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Uncompromising Precision",
    description: "Every line, every angle, and every detail is meticulously crafted to meet the exacting standards of patent offices worldwide. Accuracy is not a goal; it's our foundation."
  },
  {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: "Collaborative Partnership",
    description: "We work as an extension of your team. We listen, adapt, and communicate proactively to ensure the final drawings are a perfect reflection of your vision and legal strategy."
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Purpose-Driven Quality",
    description: "Our work is driven by a singular purpose: to secure the strongest possible protection for your intellectual property. We create drawings that are not just compliant, but compelling."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Relentless Innovation",
    description: "We are committed to staying at the forefront of drafting technology and techniques, ensuring we deliver not only exceptional quality but also efficiency and value to our clients."
  }
];

const showcaseImages = [
  {
    src: "https://picsum.photos/800/1200?random=21",
    hint: "technical drawing blueprint",
    speed: -0.1
  },
  {
    src: "https://picsum.photos/800/1200?random=22",
    hint: "product design sketch",
    speed: 0.15
  },
  {
    src: "https://picsum.photos/800/1200?random=23",
    hint: "3d model rendering",
    speed: -0.05
  },
  {
    src: "https://picsum.photos/800/1200?random=24",
    hint: "detailed schematic",
    speed: 0.1
  },
];

const ShowcaseImage = ({ src, hint, speed }: { src: string, hint: string, speed: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={ref} className="relative overflow-hidden h-[50vh] md:h-[80vh] rounded-xl shadow-lg">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={hint}
          fill
          className="object-cover"
          data-ai-hint={hint}
        />
      </motion.div>
    </div>
  );
};


export default function Home() {
  const showcaseRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: showcaseRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=0')" }}
        data-ai-hint="blueprint background"
      >
        <div className="absolute inset-0 bg-black/50" />
        <FadeIn className="relative z-10 text-center p-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-lg">
            Precision in Every Line.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Transforming innovative ideas into USPTO-compliant patent drawings with unparalleled accuracy and artistry.
          </p>
          <p className="mt-6 text-white font-semibold text-2xl animate-pulse">Get 15% OFF on your first order! Limited Time Offer!</p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/order">Order Now</Link>
          </Button>
        </FadeIn>
      </section>

      {/* Understanding Patent Drawings Section */}
      <FadeIn>
        <section id="design-types" className="py-20 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold">Protecting Your Intellectual Property</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Understanding the difference between Utility and Design patents is key. We specialize in both to provide the exact protection your invention needs.
              </p>
            </div>

            <Tabs defaultValue="utility" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-auto">
                <TabsTrigger value="utility" className="py-3 px-6 text-base">
                  <FunctionSquare className="mr-2" />
                  Utility Patents
                </TabsTrigger>
                <TabsTrigger value="design" className="py-3 px-6 text-base">
                  <DraftingCompass className="mr-2" />
                  Design Patents
                </TabsTrigger>
              </TabsList>
              <TabsContent value="utility">
                <Card className="mt-6 border-transparent shadow-none">
                  <CardContent className="p-0 md:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="p-6 bg-card rounded-lg shadow-lg">
                        <h3 className="font-headline text-2xl font-bold text-primary">Utility Patents: How It Works</h3>
                        <p className="mt-2 text-muted-foreground">Protect the functional aspects of your invention—what it does and how it does it.</p>
                        <p className="mt-4 text-lg font-semibold">Starting from just $20</p>
                        <ul className="space-y-4 mt-6 text-sm">
                          <li className="flex gap-3 items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Focuses on the operational mechanisms, structure, and functional components of an invention.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Includes detailed diagrams, flowcharts, and schematics with numbered callouts.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Provides broader, more robust protection for the core inventive concept.</span>
                          </li>
                        </ul>
                        <Button asChild variant="outline" className="mt-6 border-primary/50 text-primary hover:bg-primary/5 hover:text-primary">
                          <Link href="/services/utility-drawing">Learn More</Link>
                        </Button>
                      </div>
                      <Image
                        src="https://picsum.photos/600/500?random=8"
                        alt="Utility Patent Drawing Example"
                        width={600}
                        height={500}
                        className="rounded-lg object-cover shadow-md aspect-video lg:aspect-square"
                        data-ai-hint="technical diagram"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="design">
                <Card className="mt-6 border-transparent shadow-none">
                  <CardContent className="p-0 md:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <Image
                        src="https://picsum.photos/600/500?random=9"
                        alt="Design Patent Drawing Example"
                        width={600}
                        height={500}
                        className="rounded-lg object-cover shadow-md aspect-video lg:aspect-square order-last lg:order-first"
                        data-ai-hint="product photo"
                      />
                      <div className="p-6 bg-card rounded-lg shadow-lg">
                        <h3 className="font-headline text-2xl font-bold text-primary">Design Patents: How It Looks</h3>
                        <p className="mt-2 text-muted-foreground">Secure the unique, ornamental, and non-functional visual appearance of your product.</p>
                        <p className="mt-4 text-lg font-semibold">Starting from just $25</p>
                        <ul className="space-y-4 mt-6 text-sm">
                          <li className="flex gap-3 items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Focuses on the aesthetic design, including shape, configuration, and surface ornamentation.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Requires specific views (front, back, top, bottom, sides, and perspective) to fully disclose the design.</span>
                          </li>
                          <li className="flex gap-3 items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>Uses solid and broken lines to define the claimed design and its environment.</span>
                          </li>
                        </ul>
                        <Button asChild className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Link href="/services/design-patent-services">Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

          </div>
        </section>
      </FadeIn>


      {/* Work Samples Section */}
      <FadeIn>
        <section id="work" className="py-20 bg-muted/40">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold">Our Work Portfolio</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Explore a selection of our successful projects, showcasing our precision, quality, and expertise across various industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {workSamples.map((sample, index) => (
                <Card key={index} className="overflow-hidden group/card transition-shadow duration-300 hover:shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={sample.image}
                        alt={sample.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                        data-ai-hint={sample.hint}
                      />
                    </div>
                    <div className="p-6 flex flex-col">
                      <Badge variant="secondary" className="self-start mb-2">{sample.category}</Badge>
                      <CardTitle className="font-headline text-xl mb-2">{sample.title}</CardTitle>
                      <p className="text-muted-foreground text-sm flex-grow">{sample.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Services Section */}
      <FadeIn>
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold">Our Services</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                From initial concepts to final application, we provide a comprehensive suite of services to protect your IP.
              </p>
              <p className="mt-4 text-accent font-semibold text-lg">Get 15% OFF on your first order! Limited Time Offer!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 5).map((service) => (
                <Card key={service.slug} className="group/service flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="p-0 relative">
                    <Link href={`/services/${service.slug}`} className="block relative h-56 w-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover/service:scale-105"
                        data-ai-hint={service.imageHint}
                      />
                       <Badge className="absolute top-4 right-4 z-10" variant="default">
                        Starts at ${service.price}
                      </Badge>
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="font-headline text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow mb-4">{service.description}</p>
                    <Button asChild variant="link" className="mt-auto self-start p-0 text-primary">
                      <Link href={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="flex items-center justify-center mt-12 space-x-4">
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View All Services</Link>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/order">Order Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeIn>

       {/* Design Showcase Section */}
      <section id="showcase" className="py-20 bg-muted/40 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl font-bold">A Showcase of Precision</h2>
            <p className="mt-4 text-muted-foreground">
              Witness the clarity and detail we bring to every project. Our drawings don't just meet standards—they set them.
            </p>
          </div>

          <div ref={showcaseRef} className="relative">
            <motion.div style={{y}} className="absolute inset-0 z-0">
               <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
              {showcaseImages.map((img, index) => (
                <ShowcaseImage key={index} src={img.src} hint={img.hint} speed={img.speed} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                <Link href="/#work">
                  <View className="mr-2" />
                  Explore Our Full Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <FadeIn>
        <section id="about" className="py-20 md:py-32 bg-background text-foreground">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-base font-semibold text-primary uppercase tracking-wider">About Kashi Patent</p>
              <h2 className="mt-2 font-headline text-4xl md:text-7xl font-extrabold tracking-tight">
                The Intersection of <br /> <span className="text-primary">Artistry &amp; Protection.</span>
              </h2>
              <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
                Kashi Patent was founded on a simple yet powerful principle: that the most brilliant innovations deserve the clearest and most compelling visual protection. We are a dedicated team of engineers, artists, and patent experts who bridge the gap between complex inventions and the exacting requirements of intellectual property law.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="relative pl-16">
                <div className="absolute top-0 left-0 text-7xl font-bold text-primary/10 select-none -mt-4">&ldquo;</div>
                <h3 className="font-headline text-2xl font-bold text-primary">Our Mission</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our mission is to empower innovators by transforming their ideas into immaculate, compliant patent drawings that stand up to the rigorous scrutiny of patent offices worldwide. We strive to be the most reliable and precise partner for inventors and legal professionals, ensuring every detail is perfectly captured.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute top-0 left-0 text-7xl font-bold text-primary/10 select-none -mt-4">&ldquo;</div>
                <h3 className="font-headline text-2xl font-bold text-primary">Our Vision</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To be the global leader in patent illustration, recognized for our unwavering commitment to quality, precision, and client success. We envision a world where every great idea is protected by drawings that are as innovative and professional as the invention itself.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="font-headline text-3xl font-bold">Our Core Values</h3>
                <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">The principles that guide our work and define our commitment to you.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {coreValues.map((value) => (
                  <div key={value.title} className="text-center">
                    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-5">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold font-headline">{value.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section id="why-choose-us" className="py-20 bg-muted/40">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl font-bold">Why Choose Kashi Patent?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We deliver unparalleled quality, speed, and value, backed by a proven track record of success.
              </p>
              <p className="mt-4 text-accent font-semibold text-xl animate-pulse">Get 15% OFF on your first order! Limited Time Offer!</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUsFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex-shrink-0 flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                   <Link href="/order">Secure Your Design Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* How It Works Section */}
      <FadeIn>
        <section id="how-it-works" className="py-20 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold">How It Works</h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                A simple, transparent process designed to support patent agents, attorneys, and innovators.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
                <div className="space-y-12">
                  {howItWorksSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6 relative">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg ring-8 ring-background z-10">
                        {index + 1}
                      </div>
                      <div className="flex-grow pt-1">
                        <h3 className="font-headline text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center h-full">
                <div className="text-center">
                  <h3 className="font-headline text-6xl md:text-8xl font-bold text-primary/10 select-none">
                    5
                  </h3>
                  <h3 className="font-headline text-5xl md:text-7xl font-bold text-primary -mt-12 md:-mt-20">
                    Easy Steps
                  </h3>
                  <p className="text-muted-foreground mt-4 max-w-xs mx-auto">
                    From your initial idea to final, compliant drawings—we make the process seamless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>



      {/* FAQ Section */}
      <FadeIn>
        <section id="faq" className="py-20 bg-muted/40">
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
      </FadeIn>
    </div>
  );
}

    
