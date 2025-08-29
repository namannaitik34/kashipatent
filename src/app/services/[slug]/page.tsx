
import { getServiceBySlug, services, Service } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

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


type ServicePageProps = {
  params: {
    slug: string;
  };
};

// Generate static pages for each service at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Kashi Patent`,
    description: service.description,
  };
}

const ServiceFeatures = ({ slug }: { slug: string }) => {
    const features: { [key: string]: string[] } = {
        'utility-drawing': ['USPTO & PCT Compliant', 'Multiple Views (Isometric, Orthogonal)', 'Detailed Callouts & Numbering', 'Flowcharts & Schematics'],
        'design-patent-services': ['Clear Ornamental Views', 'Proper Shading & Surface Lines', 'Broken Lines for Environment', 'All Required Perspectives'],
        'trademark-drawing-services': ['Standard Character Drawings', 'Stylized Mark Illustrations', 'High-Resolution Vector Files', 'Compliance with Trademark Rules'],
        'engineering-drawing-services': ['Detailed Schematics & Blueprints', 'GD&T (Geometric Tolerancing)', 'Bill of Materials (BOM)', 'Manufacturing-Ready Plans'],
        '3d-modeling-services': ['Photorealistic Renderings', 'CAD Model Creation', 'Exploded Views & Assemblies', 'Files for 3D Printing'],
    };

    const serviceFeatures = features[slug] || [];

    if (serviceFeatures.length === 0) return null;

    return (
        <div className="mt-8 space-y-4">
            <h3 className="font-headline text-2xl font-semibold">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            data-ai-hint={service.imageHint}
            priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="container text-center text-white">
                <Badge variant="secondary" className="mb-4">Service</Badge>
                <h1 className="font-headline text-4xl md:text-6xl font-bold">{service.title}</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">{service.description}</p>
                 <div className="mt-4 text-2xl font-bold text-white/90">Starting at ${service.price}</div>
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

      {/* Content Section */}
      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
            <div className="prose lg:prose-lg max-w-none text-foreground/90">
                <p className="lead text-xl">{service.longDescription}</p>
            </div>
            
            <ServiceFeatures slug={service.slug} />

            <div className="mt-12 p-8 bg-card rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="font-headline text-2xl font-bold">Ready to Protect Your Idea?</h3>
                    <p className="text-muted-foreground mt-2">Let's get started on your professional patent drawings today.</p>
                </div>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0">
                    <Link href="/order">Order This Service</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
