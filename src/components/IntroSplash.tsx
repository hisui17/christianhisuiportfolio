import { useEffect, useState, type CSSProperties } from 'react';

type IntroSplashProps = {
  name: string;
  /** Total entrance, hold, and fade duration in milliseconds. */
  durationMs?: number;
  sessionKey?: string;
};

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

export default function IntroSplash({
  name,
  durationMs = 2100,
  sessionKey = 'cj-portfolio:intro-seen',
}: IntroSplashProps) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined' || window.matchMedia(reducedMotionQuery).matches) {
      return false;
    }

    try {
      return window.sessionStorage.getItem(sessionKey) !== 'seen';
    } catch {
      // Storage can be unavailable in private or restricted browsing contexts.
      return true;
    }
  });

  useEffect(() => {
    if (!visible) return;

    try {
      window.sessionStorage.setItem(sessionKey, 'seen');
    } catch {
      // The intro still finishes normally when storage is unavailable.
    }

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
  }, [visible, durationMs, sessionKey]);

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
