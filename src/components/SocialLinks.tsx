import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '@/data/portfolioData';

type Props = {
  className?: string;
  iconSize?: number;
};

export default function SocialLinks({ className = '', iconSize = 20 }: Props) {
  const links = [
    { href: personal.github, icon: Github, label: 'GitHub' },
    { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink-muted transition-all duration-300 hover:border-accent-secondary/50 hover:text-white hover:shadow-lg hover:shadow-accent-primary/20"
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
