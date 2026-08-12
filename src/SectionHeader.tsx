import { type ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
};

/**
 * Consistent page section header with eyebrow index, title, and subtitle.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  children,
}: Props) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <span className="mb-3 inline-block font-heading text-sm font-medium tracking-[0.25em] text-accent-highlight">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
