import { useEffect, useState, type CSSProperties } from 'react';

type IntroSplashProps = {
  name: string;
  /** Total entrance, hold, and fade duration in milliseconds. */
  durationMs?: number;
};

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

export default function IntroSplash({
  name,
  durationMs = 2100,
}: IntroSplashProps) {
  const [visible, setVisible] = useState(() =>
    typeof window !== 'undefined' && !window.matchMedia(reducedMotionQuery).matches,
  );

  useEffect(() => {
    if (!visible) return;

    const dismiss = () => setVisible(false);
    // Also remove the element if CSS animations are disabled or interrupted.
    const timer = window.setTimeout(dismiss, durationMs);
    const motionPreference = window.matchMedia(reducedMotionQuery);
    const handleMotionChange = () => {
      if (motionPreference.matches) dismiss();
    };

    // This is decorative: immediately reveal the page on navigation or input.
    // No scroll locks, focus traps, or changes to the page's existing styles.
    const interactionEvents = ['keydown', 'pointerdown', 'wheel', 'touchstart', 'focusin'] as const;
    interactionEvents.forEach((event) => window.addEventListener(event, dismiss, { passive: true }));
    motionPreference.addEventListener('change', handleMotionChange);
    handleMotionChange();

    return () => {
      window.clearTimeout(timer);
      interactionEvents.forEach((event) => window.removeEventListener(event, dismiss));
      motionPreference.removeEventListener('change', handleMotionChange);
    };
  }, [visible, durationMs]);

  if (!visible) return null;

  return (
    <div
      className="intro-splash"
      aria-hidden="true"
      style={{ '--intro-duration': `${durationMs}ms` } as CSSProperties}
      onAnimationEnd={(event) => {
        // Ignore the name and accent animations bubbling up to the overlay.
        if (event.target === event.currentTarget) setVisible(false);
      }}
    >
      <p className="intro-splash__name">{name}</p>
    </div>
  );
}
