import {
  Code2,
  BrainCircuit,
  Layers,
  Database,
  Wrench,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup';
import { skills, marqueeSkills } from '@/data/portfolioData';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  Layers,
  Database,
  Wrench,
  Sparkles,
};

export default function Skills() {
  const marquee = [...marqueeSkills, ...marqueeSkills];

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-6">
        <SectionHeader
          eyebrow="04 — SKILLS"
          title="Skills & Expertise"
          subtitle="A toolkit spanning programming, machine learning, frameworks, and the soft skills that make them ship."
        />
      </section>

      {/* Marquee */}
      <section className="relative mb-12 overflow-hidden py-4">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex w-max animate-marquee gap-3">
          {marquee.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-medium text-ink-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Skill cards */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => {
            const Icon = iconMap[group.icon] ?? Sparkles;
            return (
              <StaggerItem key={group.category}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass glass-hover p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-lg shadow-accent-primary/20 transition-transform group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-base font-semibold text-ink sm:text-lg">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors group-hover:text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* Soft skills highlight strip */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <div className="rounded-3xl glass p-8 text-center">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Beyond the technical stack, I value clear communication, thoughtful leadership, and
              the adaptability to learn whatever a problem demands.
            </p>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
