
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
import { FileUp, ClipboardList, Cog, Mail, RefreshCcw, PenTool, Palette, Copyright, Box, ArrowRight, CheckCircle, ShieldCheck, HeartHandshake, Zap, Wallet, Star, Clock, Send, FunctionSquare, DraftingCompass } from 'lucide-react';
import { services } from '@/lib/services';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

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

      {/* Understanding Patent Drawings Section */}
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


       {/* Work Samples Section */}
      <section id="work" className="py-20 bg-muted">
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              From initial concepts to final application, we provide a comprehensive suite of services to protect your IP.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service) => (
              <Card key={service.slug} className="group/service flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="p-0">
                  <Link href={`/services/${service.slug}`} className="block relative h-56 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover/service:scale-105"
                      data-ai-hint={service.imageHint}
                    />
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
          <div className="flex items-center justify-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted">
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
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg ring-8 ring-muted z-10">
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

      {/* About Us Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute top-0 left-0 h-16 w-16 border-t-4 border-l-4 border-primary/20 rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-primary/20 rounded-br-xl"></div>
            <div className="px-8 py-12">
              <h2 className="font-headline text-4xl font-bold mb-6">About Kashi Patent</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded by a team of experienced drafters and engineers, Kashi Patent is dedicated to providing the highest quality patent drawing services. We understand the critical role that precise and clear illustrations play in securing intellectual property rights.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our mission is to bridge the gap between invention and protection, ensuring every detail of your idea is perfectly captured and compliant with all patent office regulations worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold">Why Choose Kashi Patent??</h2>
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


      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-card">
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
