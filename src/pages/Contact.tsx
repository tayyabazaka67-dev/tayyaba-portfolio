import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  MapPin,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  type LucideIcon,
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import MagneticButton from '@/components/MagneticButton';
import { contactIntro, personal, formspreeEndpoint } from '@/data/portfolioData';

type ContactCard = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const contactCards: ContactCard[] = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: personal.name,
    href: personal.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: personal.name,
    href: personal.github,
    external: true,
  },
  { icon: Mail, label: 'Email', value: personal.name, href: `mailto:${personal.email}` },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: 'https://maps.google.com/?q=Lahore,Pakistan',
    external: true,
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim()) return 'Please enter your email.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (!form.subject.trim()) return 'Please enter a subject.';
    if (!form.message.trim()) return 'Please enter a message.';
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus('error');
      setErrorMsg(error);
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setErrorMsg(data?.errors?.[0]?.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-colors';

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <SectionHeader
          eyebrow="06 — CONTACT"
          title={contactIntro.heading}
          subtitle={contactIntro.description}
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info cards */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 rounded-2xl glass glass-hover p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                      {label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-ink">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl glass p-6 sm:p-8"
              aria-label="Contact form"
            >
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <MagneticButton>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-primary/30 transition-all hover:shadow-xl hover:shadow-accent-primary/40 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle2 size={18} /> Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </MagneticButton>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-center text-sm text-accent-highlight"
                  >
                    <CheckCircle2 size={16} /> Thank you! Your message has been sent successfully.
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-center text-sm text-red-400"
                  >
                    <AlertCircle size={16} /> {errorMsg}
                  </motion.p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
