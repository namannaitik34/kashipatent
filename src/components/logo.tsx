import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DraftingCompass } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2 text-primary', className)}>
      <DraftingCompass className="h-7 w-7" />
      <span className="font-headline text-2xl font-bold">
        Kashi Patent
      </span>
    </Link>
  );
}
