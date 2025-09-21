
import type { ElementType } from 'react';
import {
  FileCheck2,
  Scale,
  Microscope,
  Award,
  BrainCircuit,
  Users,
  Clock,
  CheckCircle,
} from 'lucide-react';

export const serviceIcons = {
  FileCheck2,
  Scale,
  Microscope,
  Award,
  BrainCircuit,
  Users,
  Clock,
  CheckCircle,
};

export type ServiceIconName = keyof typeof serviceIcons;

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
  keyFeatures: {
    icon: ServiceIconName;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const services: Service[] = [
  {
    slug: 'utility-patent-drawing-services',
    title: 'Utility Patent Drawing Services',
    description: 'Precise and detailed drawings for your utility patent applications.',
    longDescription: "Our Utility Patent Drawing service provides comprehensive illustrations that meet all USPTO, EPO, WIPO, PCT, JPO, CNIPA, and other global patent jurisdiction requirements. We focus on clarity and accuracy to clearly depict your invention's structure, function, and components. From flowcharts to complex mechanical diagrams, we ensure every detail is captured.",
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
    keyFeatures: [
      {
        icon: 'FileCheck2',
        title: 'Global Compliance',
        description: 'Drawings are guaranteed to meet the strict guidelines of USPTO, EPO, WIPO, PCT, JPO, CNIPA, and other global patent offices.',
      },
      {
        icon: 'Scale',
        title: 'Unwavering Accuracy',
        description: 'Every component and mechanism is illustrated with meticulous attention to detail.',
      },
      {
        icon: 'Microscope',
        title: 'Clarity in Complexity',
        description: 'We excel at creating clear, easy-to-understand diagrams of even the most complex inventions.',
      },
      {
        icon: 'Award',
        title: 'Professional Quality',
        description: 'High-quality, professional-grade illustrations that strengthen your patent application.',
      },
    ],
    faqs: [
        {
            question: 'What information do I need to provide for a utility patent drawing?',
            answer: 'You should provide detailed descriptions, sketches, photos, 3D models, or any other reference material that explains the invention’s structure, components, and function. The more detail, the better.'
        },
        {
            question: 'How are different parts of the invention shown?',
            answer: 'We use various views (isometric, orthographic, sectional) and clear numbering with lead lines to label each part. This ensures every component referenced in your description is clearly identified in the drawings.'
        },
        {
            question: 'Can you create drawings for software or business methods?',
            answer: 'Yes. For non-tangible inventions, we create flowcharts, block diagrams, and interface mockups that visually represent the process, system architecture, and user experience as required.'
        },
    ]
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
    keyFeatures: [
      {
        icon: 'FileCheck2',
        title: 'PTO-Specific Views',
        description: 'We provide all seven standard views required for design patents: front, back, top, bottom, left, right, and perspective.',
      },
      {
        icon: 'BrainCircuit',
        title: 'Surface Shading',
        description: 'Our expert illustrators use precise line shading to clearly define the contours and character of your product’s design.',
      },
      {
        icon: 'Microscope',
        title: 'Broken & Solid Lines',
        description: 'We use broken and solid lines to distinguish between the claimed design and its surrounding environment.',
      },
      {
        icon: 'Award',
        title: 'Aesthetic Precision',
        description: 'Our drawings capture the exact ornamental appearance, ensuring your design is protected as broadly as possible.',
      },
    ],
    faqs: [
        {
            question: 'What is the difference between a utility and a design patent drawing?',
            answer: 'Utility patent drawings protect how an invention works or its function. Design patent drawings protect the unique, ornamental, and non-functional visual appearance of a product.'
        },
        {
            question: 'Why are specific views required for design patents?',
            answer: 'Patent offices require a standard set of views (front, back, top, bottom, sides, perspective) to fully and clearly disclose the entire ornamental design from all angles, leaving no room for ambiguity.'
        },
        {
            question: 'Do you offer color patent drawings?',
            answer: 'While most design patents are filed with black and white line drawings, we can provide color drawings upon request. This is typically only necessary if color itself is a claimed feature of the design.'
        },
    ]
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
    keyFeatures: [
      {
        icon: 'Scale',
        title: 'Precision Dimensions',
        description: 'Drawings include exact measurements and tolerances required for manufacturing.',
      },
      {
        icon: 'BrainCircuit',
        title: 'Assembly Instructions',
        description: 'Exploded and sectional views make assembly clear and straightforward.',
      },
      {
        icon: 'FileCheck2',
        title: 'Industry Standards',
        description: 'All drawings conform to industry standards like ASME/ISO for universal clarity.',
      },
      {
        icon: 'Users',
        title: 'BOM & Part Lists',
        description: 'We can integrate or create a Bill of Materials (BOM) for complete production planning.',
      },
    ],
    faqs: [
        {
            question: 'Are technical drawings the same as patent drawings?',
            answer: 'No. Patent drawings are for legal protection and follow patent office rules, focusing on showing the invention. Technical drawings (or blueprints) are for manufacturing and include precise dimensions, materials, and tolerances.'
        },
        {
            question: 'What is GD&T and why is it important?',
            answer: 'Geometric Dimensioning and Tolerancing (GD&T) is a symbolic language used on engineering drawings to define the allowable variation of features. It ensures parts fit together and function correctly.'
        },
        {
            question: 'Can you create a technical drawing from a simple sketch?',
            answer: 'Absolutely. We can take your concept sketches, photos, or existing prototypes and turn them into professional, manufacturing-ready technical drawings.'
        },
    ]
  },
];

export const whyChooseUsReasons: { icon: ServiceIconName, text: string }[] = [
  {
    icon: 'Award',
    text: '100% compliant with USPTO, WIPO, EPO, and all global standards'
  },
  {
    icon: 'Clock',
    text: 'Fast turnaround (usually within 24-72 hours)'
  },
  {
    icon: 'CheckCircle',
    text: 'Unlimited revisions at no extra charge'
  },
  {
    icon: 'Users',
    text: 'Reviewed by both technical and legal experts'
  }
];


export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
