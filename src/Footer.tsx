import { Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personal } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Name + tagline */}
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-white">
              TZ
            </span>
            <span className="font-heading text-base font-semibold text-ink">{personal.name}</span>
          </Link>
          <p className="mt-3 text-sm text-ink-muted">
            Computer Science Undergraduate | Aspiring Software Developer | AI/ML Enthusiast
          </p>
          <p className="mt-1 text-sm text-ink-muted">{personal.tagline}</p>
        </div>

        {/* Links: Tayyaba Zaka | GitHub | Email */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink transition-colors hover:text-accent-highlight"
          >
            {personal.name}
          </a>
          <span className="text-ink-muted">|</span>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent-highlight"
          >
            <Github size={16} /> GitHub
          </a>
          <span className="text-ink-muted">|</span>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent-highlight"
          >
            <Mail size={16} /> Email
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm text-ink-muted">
          &copy; 2026 {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
