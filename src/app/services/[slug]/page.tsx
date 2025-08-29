
import { getServiceBySlug, type Service } from '@/lib/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServicePageClient from './ServicePageClient';

type ServicePageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Kashi Patent`,
    description: service.longDescription,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
