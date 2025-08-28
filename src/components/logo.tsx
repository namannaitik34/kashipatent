import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <Image 
        src="/logo.png" 
        alt="Kashi Patent Logo" 
        width={180} 
        height={51} 
        priority
      />
    </Link>
  );
}
