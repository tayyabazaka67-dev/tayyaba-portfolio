import { useEffect, useState } from 'react';

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
};

/**
 * Typewriter effect that cycles through a list of words.
 */
export default function TypingText({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1600,
  className = '',
}: Props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {words[index].substring(0, subIndex)}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-0.5 animate-pulse bg-accent-secondary align-middle" />
    </span>
  );
}
