import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Rocket,
  Target,
  Compass,
  BookOpen,
  CheckCircle2,
  Award,
  Trophy,
  School,
  Building2,
  University,
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import GlassCard from '@/components/GlassCard';
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup';
import {
  about,
  educationLevels,
  experience,
  personal,
  certifications,
  achievements,
} from '@/data/portfolioData';

const levelIcons: Record<string, typeof School> = {
  School,
  College: Building2,
  University,
};

export default function About() {
  return (
    <PageTransition>
      {/* Storytelling */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <SectionHeader eyebrow={about.heading} title={about.title} />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <GlassCard className="h-full p-7">
              <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                {about.paragraphs[0]}
              </p>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.1}>
              <GlassCard className="h-full p-7">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Compass size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">My Journey</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{about.journey}</p>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <GlassCard className="h-full p-7">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Target size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">Career Goal</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{about.goal}</p>
              </GlassCard>
            </Reveal>
          </div>
        </div>

        {/* Currently exploring */}
        <Reveal delay={0.1}>
          <div className="mt-6 rounded-2xl glass p-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <Rocket size={20} />
              </span>
              <h3 className="text-lg font-semibold text-ink">Currently Exploring</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {about.exploring.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent-secondary/30 bg-accent-primary/10 px-4 py-2 text-sm font-medium text-accent-highlight"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Certificates & Achievements */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeader
          eyebrow="02 — CERTIFICATES & ACHIEVEMENTS"
          title="Certificates & Achievements"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Certificates */}
          <Reveal>
            <div className="h-full rounded-2xl glass p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Award size={20} />
                </span>
                <h3 className="text-lg font-semibold text-ink">Certificates</h3>
              </div>
              <StaggerGroup className="space-y-3" stagger={0.08}>
                {certifications.map((cert) => (
                  <StaggerItem key={cert.title}>
                    <div className="flex items-start gap-3 rounded-xl border border-line bg-white/5 px-4 py-3">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-secondary" />
                      <div>
                        <p className="text-sm font-medium text-ink">{cert.title}</p>
                        <p className="mt-0.5 text-xs text-ink-muted">{cert.issuer}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl glass p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Trophy size={20} />
                </span>
                <h3 className="text-lg font-semibold text-ink">Achievements</h3>
              </div>
              <StaggerGroup className="space-y-3" stagger={0.08}>
                {achievements.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex items-start gap-3 rounded-xl border border-line bg-white/5 px-4 py-3">
                      <Trophy size={16} className="mt-0.5 shrink-0 text-accent-secondary" />
                      <div>
                        <p className="text-sm font-medium text-ink">{item.title}</p>
                        <p className="mt-0.5 text-xs text-ink-muted">{item.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Education — School / College / University */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeader
          eyebrow="03 — EDUCATION"
          title="Education"
          subtitle="A focused academic path in Computer Science with an emphasis on AI & Machine Learning."
        />

        <div className="relative space-y-6 pl-8">
          <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent" />

          {educationLevels.map((edu, idx) => {
            const Icon = levelIcons[edu.level] ?? School;
            return (
              <Reveal key={edu.level} delay={idx * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[1.65rem] top-7 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand ring-4 ring-bg">
                    <GraduationCap size={14} className="text-white" />
                  </div>
                  <GlassCard className="p-6 sm:p-7">
                    {/* Level badge */}
                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-secondary/30 bg-accent-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-highlight">
                        <Icon size={12} /> {edu.level}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-ink sm:text-lg">
                          {edu.qualification}
                        </h3>
                        <p className="mt-1 text-sm text-ink-muted">{edu.institution}</p>
                        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-muted">
                          <MapPin size={12} /> {edu.location}
                        </p>
                      </div>
                      {edu.period && (
                        <span className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-medium text-ink-muted">
                          {edu.period}
                        </span>
                      )}
                    </div>

                    {/* Stream */}
                    {edu.stream && (
                      <p className="mt-3 text-xs text-ink-muted">
                        <span className="font-semibold text-ink">Stream:</span> {edu.stream}
                      </p>
                    )}

                    {/* Subjects */}
                    {edu.subjects.length > 0 && (
                      <div className="mt-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                          Major Subjects
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-ink"
                            >
                              <CheckCircle2 size={12} className="text-accent-secondary" />
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Marks / Percentage / CGPA */}
                    <div className="mt-4 flex flex-wrap gap-4">
                      {edu.marks && (
                        <div className="rounded-lg border border-line bg-white/5 px-4 py-2">
                          <span className="text-xs text-ink-muted">Marks</span>
                          <p className="gradient-text font-heading text-base font-bold">{edu.marks}</p>
                        </div>
                      )}
                      {edu.percentage && (
                        <div className="rounded-lg border border-line bg-white/5 px-4 py-2">
                          <span className="text-xs text-ink-muted">Percentage</span>
                          <p className="gradient-text font-heading text-base font-bold">{edu.percentage}</p>
                        </div>
                      )}
                      {edu.cgpa && (
                        <div className="rounded-lg border border-line bg-white/5 px-4 py-2">
                          <span className="text-xs text-ink-muted">CGPA</span>
                          <p className="gradient-text font-heading text-base font-bold">{edu.cgpa}</p>
                        </div>
                      )}
                    </div>

                    {/* Coursework (University only) */}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="mt-5">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                          Relevant Coursework
                        </p>
                        <StaggerGroup className="flex flex-wrap gap-2" stagger={0.04}>
                          {edu.coursework.map((course) => (
                            <StaggerItem key={course}>
                              <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-ink">
                                <CheckCircle2 size={12} className="text-accent-secondary" />
                                {course}
                              </span>
                            </StaggerItem>
                          ))}
                        </StaggerGroup>
                      </div>
                    )}
                  </GlassCard>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeader
          eyebrow="04 — EXPERIENCE"
          title="Experience"
          subtitle="Hands-on work building AI-powered applications with modern ML tooling."
        />

        <Reveal>
          <GlassCard className="p-7 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Briefcase size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink sm:text-xl">{experience.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-highlight">
                    {experience.company}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-muted">
                    <MapPin size={13} /> {personal.location}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-secondary/30 bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-highlight">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent-secondary" />
                Current
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              {experience.description}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-muted">
                  <BookOpen size={15} className="text-accent-secondary" /> Responsibilities
                </p>
                <StaggerGroup className="flex flex-wrap gap-2" stagger={0.04}>
                  {experience.responsibilities.map((r) => (
                    <StaggerItem key={r}>
                      <span className="rounded-lg border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-ink">
                        {r}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
              <div>
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-muted">
                  <motion.span
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block"
                  >
                    <Rocket size={15} className="text-accent-secondary" />
                  </motion.span>
                  Technologies
                </p>
                <StaggerGroup className="flex flex-wrap gap-2" stagger={0.04}>
                  {experience.technologies.map((t) => (
                    <StaggerItem key={t}>
                      <span className="rounded-lg border border-accent-primary/30 bg-accent-primary/10 px-3 py-1.5 text-xs font-medium text-accent-highlight">
                        {t}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </PageTransition>
  );
}
