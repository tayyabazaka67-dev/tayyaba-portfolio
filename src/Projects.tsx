import { Github, ArrowUpRight, Languages as LanguagesIcon, Heart } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { StaggerGroup, StaggerItem } from '@/components/StaggerGroup';
import { projects, languages, hobbies } from '@/data/portfolioData';

export default function Projects() {
  return (
    <PageTransition>
      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-6">
        <SectionHeader
          eyebrow="05 — PROJECTS"
          title="Featured Projects"
          subtitle="A selection of work spanning AI, machine learning, computer vision, and software development."
        />

        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass glass-hover p-6">
                {/* hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-brand opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />

                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-white">
                      {project.title.charAt(0)}
                    </span>
                    {project.featured && (
                      <span className="rounded-full border border-accent-secondary/30 bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-highlight">
                        Featured
                      </span>
                    )}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-highlight"
                  />
                </div>

                <h3 className="text-lg font-semibold text-ink sm:text-xl">{project.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-highlight">
                  {project.role}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-line bg-white/5 px-2.5 py-1 text-xs font-medium text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs text-ink-muted">View source</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-ink transition-all hover:bg-gradient-brand hover:text-white"
                  >
                    <Github size={15} /> GitHub
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Languages & Hobbies */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Languages */}
          <Reveal>
            <div className="h-full rounded-2xl glass glass-hover p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <LanguagesIcon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-ink">Languages</h3>
              </div>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between rounded-xl border border-line bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-ink">{lang.name}</span>
                    <span className="text-xs text-ink-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Hobbies */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl glass glass-hover p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Heart size={20} />
                </span>
                <h3 className="text-lg font-semibold text-ink">Hobbies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="rounded-lg border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-muted"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
