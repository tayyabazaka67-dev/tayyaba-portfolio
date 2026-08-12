import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FolderGit2, Mail } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import TypingText from '@/components/TypingText';
import MagneticButton from '@/components/MagneticButton';
import AIJourney from '@/components/AIJourney';
import { hero, stats } from '@/data/portfolioData';

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-primary/10 px-4 py-1.5 text-sm font-medium text-accent-highlight"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-secondary" />
              </span>
              {personal.status}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              <span className="block text-ink-muted">{hero.greeting}</span>
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-heading text-xl font-medium text-ink sm:text-2xl"
            >
              <TypingText words={hero.roles} className="text-accent-highlight" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-primary/30 transition-shadow hover:shadow-xl hover:shadow-accent-primary/40"
                >
                  View Projects <FolderGit2 size={18} />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent-secondary/50 hover:text-white"
                >
                  Contact Me <Mail size={18} />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: AI Journey timeline */}
          <AIJourney />
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl glass glass-hover p-5 text-center sm:p-6"
              >
                <div className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                  <span className="gradient-text">
                    <CountUp
                      end={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      displayValue={stat.displayValue}
                    />
                  </span>
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-ink-muted sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl glass p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                Interested in working together?
              </h3>
              <p className="mt-2 text-sm text-ink-muted sm:text-base">
                Let&rsquo;s connect and explore AI &amp; ML opportunities.
              </p>
            </div>
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-primary/30"
              >
                Get in touch <ArrowRight size={18} />
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
