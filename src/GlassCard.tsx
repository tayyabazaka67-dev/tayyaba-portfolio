import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  lift?: number;
};

/**
 * Glass card with optional gradient border glow and hover lift.
 */
export default function GlassCard({
  children,
  className = '',
  glow = true,
  lift = 6,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -lift }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-2xl glass glass-hover ${
        glow ? 'gradient-border' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
