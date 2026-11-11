import React, { useState, useEffect } from 'react';

const TAGLINE_PHRASES = [
  'Motion Design',
  'UI/UX Design',
  'Development & Web Apps',
  'App Development',
];

export default function TypingTagline() {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(TAGLINE_PHRASES[0]);
      return;
    }

    const currentPhrase = TAGLINE_PHRASES[phraseIndex];
    let timer;

    if (!isDeleting) {
      // Typing forward
      if (displayedText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 75);
      } else {
        // Finished typing phrase, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting backward
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TAGLINE_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="min-h-[2.5rem] flex items-center">
        <span className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-bronze">
          Motion Design, UI/UX & Software Engineering
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-[2.5rem] flex items-center" aria-live="polite">
      {/* Screen reader static announcement */}
      <span className="sr-only">
        Specializing in Motion Design, UI/UX Design, Development & Web Apps, and App Development.
      </span>

      {/* Visual animated typing text */}
      <span aria-hidden="true" className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-bronze tracking-tight">
        {displayedText}
        <span className="inline-block w-0.5 h-6 sm:h-7 ml-1 bg-bronze animate-pulse align-middle" />
      </span>
    </div>
  );
}
