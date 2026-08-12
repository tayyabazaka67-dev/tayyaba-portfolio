import { motion } from 'framer-motion';
import {
  GraduationCap,
  BrainCircuit,
  Search,
  Bot,
  Zap,
  Mic,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { aiJourney, aiJourneyFinal } from '@/data/portfolioData';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  BrainCircuit,
  Search,
  Bot,
  Zap,
  Mic,
  Rocket,
};

export default function AIJourney() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="rounded-2xl glass p-6 sm:p-7">
        {/* Header */}
        <div className="mb-6 flex items-center gap-2.5">
          <span className="text-lg text-accent-secondary">✦</span>
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent-highlight">
            AI Journey
          </h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary/40" />

          <div className="space-y-5">
            {aiJourney.map((milestone, mIdx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + mIdx * 0.15 }}
              >
                {/* Year node */}
                <div className="relative flex items-center gap-3">
                  <span
                    className={`relative z-10 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ring-4 ring-bg ${
                      milestone.highlight
                        ? 'bg-accent-secondary shadow-md shadow-accent-secondary/50'
                        : 'bg-accent-primary'
                    }`}
                  >
                    {milestone.highlight && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-60" />
                    )}
                  </span>
                  <span className="font-heading text-base font-bold text-ink">{milestone.year}</span>
                </div>

                {/* Milestone items */}
                <div className="mt-2 ml-[1.375rem] space-y-2">
                  {milestone.items.map((item, iIdx) => {
                    const Icon = iconMap[item.icon] ?? Rocket;
                    return (
                      <motion.div
                        key={item.label}
                        whileHover={{ x: 4 }}
                        className="group flex items-center gap-2.5 rounded-lg border border-line bg-white/5 px-3 py-2 transition-colors hover:border-accent-secondary/40 hover:bg-accent-primary/5"
                      >
                        <Icon
                          size={15}
                          className="shrink-0 text-accent-secondary transition-transform group-hover:scale-110"
                        />
                        <span className="text-sm font-medium text-ink-muted transition-colors group-hover:text-ink">
                          {item.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {/* Final milestone */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + aiJourney.length * 0.15 }}
            >
              <div className="relative flex items-center gap-3">
                <span className="relative z-10 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-gradient-brand ring-4 ring-bg">
                  <Rocket size={8} className="text-white" />
                </span>
              </div>
              <div className="mt-2 ml-[1.375rem]">
                <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-primary/30">
                  <Rocket size={14} />
                  {aiJourneyFinal}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
