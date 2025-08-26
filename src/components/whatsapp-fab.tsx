"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
        <path d="M21 12.9_4.2c-1.5-2.8-4.2-5-7.1-5.9c-2.9-.9-6.2-.3-8.6 1.6s-3.5 5.7-2.6 8.6c.9 2.9 3.1 5.2 5.9 6.2c2.8 1 6 .4 8.4-1.4l.2-.1c2.4-1.8 4.1-4.5 4.7-7.5c.1-.5.1-1 .1-1.4V13c0-.1 0-.1 0 0z" />
        <path d="M15.1 18.5c-1.1.6-2.4.9-3.7.8c-2.6-.2-5-1.9-6-4.4s-.2-5.4 2-7.4s4.9-2.7 7.4-2c1.3.3 2.5 1 3.3 2" />
        <path d="M12.5 8.4l1.6 4.9l-4.2-.9l2.6-4z" />
    </svg>
);


export default function WhatsAppFab() {
  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
         <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M19.2,4.8A10.1,10.1,0,0,0,12,2a10,10,0,0,0-10,10,10,10,0,0,0,1.8,5.6L2,22l4.5-1.7A10,10,0,0,0,12,22h0a10,10,0,0,0,10-10,10,10,0,0,0-2.8-7.2ZM12,20.2a8.3,8.3,0,0,1-4.3-1.3L7.5,18.8l-3,1.1.9-3.1L5,15.6a8.3,8.3,0,0,1-1.5-4.6,8.3,8.3,0,1,1,8.5,8.2ZM16.4,13.7c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.6.7-.7.8-.3.2-.5,0a6.3,6.3,0,0,1-2.3-1.4,7,7,0,0,1-1.6-2c-.2-.3,0-.4.1-.5s.2-.3.3-.4a1.8,1.8,0,0,0,.2-.4c0-.1-.1-.3-.1-.4s-.5-1.3-.7-1.8c-.2-.4-.3-.4-.5-.4h-.4a1,1,0,0,0-.8.4,3.3,3.3,0,0,0-1,2.4,4.2,4.2,0,0,0,.9,3.1,8.3,8.3,0,0,0,3.5,3,10.6,10.6,0,0,0,4.2,1.3,3.6,3.6,0,0,0,2.5-1.1,3,3,0,0,0,.2-2.3c0-.2-.1-.3-.2-.4Z"
            />
            </svg>
      </Link>
    </Button>
  );
}
