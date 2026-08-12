import { motion } from 'framer-motion';

const particles = [
  { x: '8%', y: '22%', size: 4, dur: 13, delay: 0 },
  { x: '18%', y: '68%', size: 3, dur: 16, delay: 1.5 },
  { x: '32%', y: '38%', size: 5, dur: 15, delay: 3 },
  { x: '46%', y: '78%', size: 3, dur: 18, delay: 0.8 },
  { x: '58%', y: '18%', size: 4, dur: 14, delay: 2.2 },
  { x: '70%', y: '55%', size: 3, dur: 17, delay: 4 },
  { x: '82%', y: '30%', size: 5, dur: 12, delay: 1 },
  { x: '90%', y: '72%', size: 3, dur: 19, delay: 2.5 },
];

/**
 * Decorative animated background: floating purple gradient blobs,
 * radial glow, subtle dot grid, and gentle floating particles.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg" aria-hidden="true">
      {/* Radial base glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(124,58,237,0.18),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(168,85,247,0.14),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(192,132,252,0.10),transparent_55%)]" />

      {/* Floating blobs */}
      <motion.div
        className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent-primary/30 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-accent-secondary/25 blur-[140px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-highlight/20 blur-[130px]"
        animate={{ x: [0, 24, 0], y: [0, -28, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:42px_42px]" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent-highlight/40"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -28, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}
    </div>
  );
}
