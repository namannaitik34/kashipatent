
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsAppFab from '@/components/whatsapp-fab';
import Chatbot from '@/components/chatbot';
import Script from 'next/script';
import Newsletter from '@/components/newsletter';
import FadeIn from '@/components/fade-in';

export const metadata: Metadata = {
  title: 'Kashi Patent - Premium Patent Design',
  description: 'Premium patent design and drawing services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" async />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
          <Header />
          <main className="flex-grow ">
             <FadeIn>{children}</FadeIn>
          </main>
          <div className="-mb-24">
             <Newsletter />
          </div>
          <Footer />
        </div>
        <Chatbot />
        <WhatsAppFab />
        <Toaster />
      </body>
    </html>
  );
}
