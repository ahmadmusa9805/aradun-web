"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { CategoryIcon } from "@/components/ui/category-icon";
import { businessSolutions } from "@/components/layout/public-navigation";

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
        <p className="demo-disclosure">Built around your business</p>
        <button
          type="button"
          className="demo-motion-toggle"
          disabled={reduced}
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
        >
          {reduced
            ? "Static solutions"
            : paused
              ? "Play solution motion"
              : "Pause solution motion"}
        </button>
      </div>
      <div
        className="demo-partner-viewport"
        tabIndex={0}
        role="region"
        aria-label="Business solutions strip"
      >
        <div
          className={`demo-partner-track ${moving ? "demo-partner-track--moving" : ""}`}
        >
          <ul aria-label="Business solutions">
            {businessSolutions.map((solution, index) => (
              <li key={solution.href}>
                <Link
                  className="solution-strip-link"
                  href={solution.href}
                  prefetch={false}
                >
                  <CategoryIcon index={[0, 2, 3, 4, 6][index]!} />
                  <strong>{solution.label}</strong>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="demo-partner-duplicate" aria-hidden="true">
            {businessSolutions.map((solution, index) => (
              <li key={solution.href}>
                <span className="solution-strip-link">
                  <CategoryIcon index={[0, 2, 3, 4, 6][index]!} />
                  <strong>{solution.label}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
