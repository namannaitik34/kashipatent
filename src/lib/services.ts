
export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  whatYoullGet: string[];
  idealFor: string[];
  image: string;
  imageHint: string;
  price: number;
  pricePer: string;
  modelSrc?: string;
};

export const services: Service[] = [
  {
    slug: 'utility-patent-drawing-services',
    title: 'Utility Patent Drawing Services',
    description: 'Precise and detailed drawings for your utility patent applications.',
    longDescription: "Our Utility Patent Drawing service provides comprehensive illustrations that meet all USPTO requirements. We focus on clarity and accuracy to clearly depict your invention's structure, function, and components. From flowcharts to complex mechanical diagrams, we ensure every detail is captured.",
    whatYoullGet: [
        'All Required Views - Front, rear, top, bottom, left, right, and perspective views',
        'Detailed breakdowns of all mechanical components and parts',
        'Clear numbering and lead lines for all features',
        'Flowcharts and process diagrams for software and method patents',
    ],
    idealFor: [
        'Mechanical Engineers & Product Designers',
        'Software & Tech Innovators',
        'Inventors of new tools or machinery',
        'Medical Device Creators',
    ],
    image: 'https://picsum.photos/1200/800?random=11',
    imageHint: 'technical schematic',
    price: 20,
    pricePer: 'drawing',
  },
  {
    slug: 'design-patent-drawing-services',
    title: 'Design Patent Drawing Services',
    description: "Visually stunning illustrations to protect your product's ornamental design.",
    longDescription: "Protect the unique look of your product with our Design Patent Drawing services. We create shaded, line, and perspective drawings that clearly show the ornamental design of your invention. Our illustrations help secure the broadest possible protection for your design.",
    whatYoullGet: [
        'All Required Views - Front, rear, top, bottom, left, right, and perspective views',
        'Consistent Line Quality - Uniform thickness and shading where necessary',
        'Clear Surface Contours - Dash lines, solid lines, and broken lines as per PTO rules',
        'High-Resolution Formats - Delivered in PDF, TIFF, or any format required',
    ],
    idealFor: [
        'Product Designers',
        'Consumer Goods',
        'Packaging Designs',
        'Fashion & Wearables',
        'Furniture & Home Appliances',
        'Electronics & Gadgets',
    ],
    image: 'https://picsum.photos/1200/800?random=12',
    imageHint: 'modern product',
    price: 25,
    pricePer: 'drawing',
  },
  {
    slug: 'technical-patent-drawing-services',
    title: 'Technical Patent Drawing Services',
    description: 'Detailed technical drawings for manufacturing and engineering purposes.',
    longDescription: "Beyond patents, we offer professional engineering drawings (blueprints) for manufacturing and prototyping. Our services include creating detailed schematics, assembly drawings, and component specifications with precise dimensions and tolerances.",
    whatYoullGet: [
        'Manufacturing-ready blueprints with precise dimensions',
        'Geometric Dimensioning and Tolerancing (GD&T)',
        'Bill of Materials (BOM) integration',
        'Exploded and sectional views for assembly instructions',
    ],
    idealFor: [
        'Engineers and Fabricators',
        'Startups creating physical prototypes',
        'Companies needing production-ready plans',
        'Anyone requiring detailed technical illustrations',
    ],
    image: 'https://picsum.photos/1200/800?random=14',
    imageHint: 'engineering plan',
    price: 34,
    pricePer: 'figure',
  },
];

export const whyChooseUsReasons = [
    '100% compliant with USPTO, WIPO, EPO, and all global standards',
    'Fast turnaround (usually within 24-72 hours)',
    'Competitive pricing—from just $24 per figure',
    'Unlimited revisions at no extra charge',
    'Reviewed by both technical and legal experts',
];


export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
