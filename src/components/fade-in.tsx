"use client";

import { motion } from 'framer-motion';
import type { FC, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

const FadeIn: FC<FadeInProps> = ({ children, className, duration = 0.75, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20}}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
