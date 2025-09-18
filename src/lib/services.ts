
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
    slug: 'trademark-drawing-services',
    title: 'Trademark Drawing Services',
    description: 'Clean and compliant drawings for your trademark and logo applications.',
    longDescription: "A strong trademark begins with a perfect drawing. We create clean, black and white line art that adheres to the strict standards of trademark offices worldwide. Whether it's a standard character or a stylized design, we provide application-ready files.",
    image: 'https://picsum.photos/1200/800?random=13',
    imageHint: 'company logo',
    price: 30,
  },
  {
    slug: 'engineering-drawing-services',
    title: 'Engineering Drawing Services',
    description: 'Detailed technical drawings for manufacturing and engineering purposes.',
    longDescription: "Beyond patents, we offer professional engineering drawings (blueprints) for manufacturing and prototyping. Our services include creating detailed schematics, assembly drawings, and component specifications with precise dimensions and tolerances.",
    image: 'https://picsum.photos/1200/800?random=14',
    imageHint: 'engineering plan',
    price: 30,
  },
  {
    slug: '3d-modeling-for-patents',
    title: '3D Modeling for Patent Drawings',
    description: 'Bring your invention to life with professional 3D models and renderings for patent applications.',
    longDescription: "Visualize your invention from every angle with our 3D Modeling services. We create detailed, realistic 3D models from your sketches or concepts, which can be used for prototyping, marketing, and creating stunning patent illustrations. We provide files in various standard formats.",
    image: 'https://picsum.photos/1200/800?random=15',
    imageHint: '3d rendering',
    price: 40,
    modelSrc: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb'
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

    