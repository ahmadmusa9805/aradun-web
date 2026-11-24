"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
/** A bounded carousel, paused by hover/focus, offscreen and reduced motion. */
export function FeedbackCarousel({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry?.isIntersecting ?? false),
    );
    if (root.current) observer.observe(root.current);
    return () => {
      media.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);
  return (
    <div className="feedback-carousel" ref={root}>
      <button
        className="demo-motion-toggle"
        disabled={reduced}
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {reduced
          ? "Static feedback"
          : paused
            ? "Play feedback motion"
            : "Pause feedback motion"}
      </button>
      <div
        className={`feedback-viewport${!paused && !reduced && visible ? " feedback-moving" : ""}`}
        role="region"
        aria-label="Feedback examples"
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}
