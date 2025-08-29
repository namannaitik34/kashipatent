"use client";

import { motion } from 'framer-motion';

const BackgroundElement = ({
  className,
  initial,
  animate,
  transition,
}: {
  className: string;
  initial: any;
  animate: any;
  transition: any;
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={initial}
    animate={animate}
    transition={transition}
  />
);

export default function HeroBackground() {
  const elements = [
    // Large, slow-moving circles
    {
      className: 'w-64 h-64 bg-primary/40 rounded-full',
      initial: { opacity: 0, x: '-50%', y: '50%' },
      animate: { opacity: 1, x: '-20%', y: '20%' },
      transition: { duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'mirror' as const },
    },
    {
      className: 'w-80 h-80 bg-accent/40 rounded-full',
      initial: { opacity: 0, x: '120%', y: '-20%' },
      animate: { opacity: 1, x: '80%', y: '10%' },
      transition: { duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'mirror' as const },
    },
    // Small, faster-moving elements
    {
      className: 'w-8 h-8 border-2 border-primary/30 rounded-full',
      initial: { x: '10vw', y: '80vh', scale: 0.5 },
      animate: { x: '90vw', y: '10vh', scale: 1 },
      transition: { duration: 40, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' as const, delay: 5 },
    },
    {
      className: 'w-12 h-12 bg-secondary/50',
      initial: { x: '80vw', y: '90vh', rotate: 0 },
      animate: { x: '20vw', y: '5vh', rotate: 180 },
      transition: { duration: 50, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' as const, delay: 2 },
    },

  ];

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {elements.map((el, i) => (
        <BackgroundElement key={i} {...el} />
      ))}
    </div>
  );
}
