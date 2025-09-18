
export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageHint: string;
  price: number;
  modelSrc?: string;
};

export const services: Service[] = [
  {
    slug: 'utility-patent-drawing-services',
    title: 'Utility Patent Drawing Services',
    description: 'Precise and detailed drawings for your utility patent applications.',
    longDescription: "Our Utility Patent Drawing service provides comprehensive illustrations that meet all USPTO requirements. We focus on clarity and accuracy to clearly depict your invention's structure, function, and components. From flowcharts to complex mechanical diagrams, we ensure every detail is captured.",
    image: 'https://picsum.photos/1200/800?random=11',
    imageHint: 'technical schematic',
    price: 20,
  },
  {
    slug: 'design-patent-drawing-services',
    title: 'Design Patent Drawing Services',
    description: "Visually stunning illustrations to protect your product's ornamental design.",
    longDescription: "Protect the unique look of your product with our Design Patent Drawing services. We create shaded, line, and perspective drawings that clearly show the ornamental design of your invention. Our illustrations help secure the broadest possible protection for your design.",
    image: 'https://picsum.photos/1200/800?random=12',
    imageHint: 'modern product',
    price: 25,
  },
  {
    slug: 'technical-patent-drawing-services',
    title: 'Technical Patent Drawing Services',
    description: 'Detailed technical drawings for manufacturing and engineering purposes.',
    longDescription: "Beyond patents, we offer professional engineering drawings (blueprints) for manufacturing and prototyping. Our services include creating detailed schematics, assembly drawings, and component specifications with precise dimensions and tolerances.",
    image: 'https://picsum.photos/1200/800?random=14',
    imageHint: 'engineering plan',
    price: 30,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

    