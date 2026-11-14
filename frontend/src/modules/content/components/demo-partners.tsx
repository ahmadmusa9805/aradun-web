"use client";
import { useEffect, useState, useRef } from "react";

const names = [
  "Demo Company One",
  "Demo Company Two",
  "Demo Company Three",
  "Demo Company Four",
  "Demo Company Five",
  "Demo Company Six",
];
export function DemoPartners() {
  const [paused, setPaused] = useState(true);
  const [reduced, setReduced] = useState(true);
  const region = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const root = region.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry?.isIntersecting ?? false),
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(media.matches);
      setPaused(media.matches);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const moving = !paused && !reduced && visible;
  return (
    <div className="demo-partners" ref={region}>
      <div className="demo-partner-heading">
        <p className="demo-disclosure">
          DEMO company-logo showcase — placeholders, not clients or partners.
        </p>
        <button
          type="button"
          className="demo-motion-toggle"
          disabled={reduced}
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
        >
          {reduced
            ? "Static logos"
            : paused
              ? "Play logo motion"
              : "Pause logo motion"}
        </button>
      </div>
      <div
        className="demo-partner-viewport"
        tabIndex={0}
        role="region"
        aria-label="Demo company logo strip"
      >
        <div
          className={`demo-partner-track ${moving ? "demo-partner-track--moving" : ""}`}
        >
          <ul aria-label="Demo company logos">
            {names.map((name, index) => (
              <li key={name}>
                <span aria-hidden="true">
                  {["◈", "◇", "○", "□", "△", "⊙"][index]}
                </span>
                <strong>{name}</strong>
                <small>DEMO</small>
              </li>
            ))}
          </ul>
          <ul className="demo-partner-duplicate" aria-hidden="true">
            {names.map((name, index) => (
              <li key={name}>
                <span>{["◈", "◇", "○", "□", "△", "⊙"][index]}</span>
                <strong>{name}</strong>
                <small>DEMO</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
