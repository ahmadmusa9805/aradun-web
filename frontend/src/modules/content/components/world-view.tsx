"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** One bounded decorative island. No continuous loop, touch capture or business state. */
export function WorldView() {
  const [paused, setPaused] = useState(false);
  const region = useRef<HTMLDivElement>(null);
  const artwork = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const root = region.current;
    const image = artwork.current;
    if (!root || !image) return;
    const observer = new IntersectionObserver(([entry]) => {
      root.dataset.worldVisible = String(entry?.isIntersecting ?? false);
    });
    observer.observe(root);
    const preference = matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      image.style.removeProperty("--world-x");
      image.style.removeProperty("--world-y");
    };
    const move = (event: PointerEvent) => {
      if (!preference.matches || event.pointerType === "touch") return;
      const box = root.getBoundingClientRect();
      const x = Math.max(
        -1,
        Math.min(1, ((event.clientX - box.left) / box.width) * 2 - 1),
      );
      const y = Math.max(
        -1,
        Math.min(1, ((event.clientY - box.top) / box.height) * 2 - 1),
      );
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        image.style.setProperty("--world-x", `${x * 3}deg`);
        image.style.setProperty("--world-y", `${-y * 3}deg`);
      });
    };
    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", reset);
    preference.addEventListener("change", reset);
    return () => {
      observer.disconnect();
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", reset);
      preference.removeEventListener("change", reset);
      reset();
    };
  }, []);
  return (
    <div
      className={`home-world editorial-art${paused ? " world-paused" : ""}`}
      ref={region}
    >
      <div className="world-interactive" ref={artwork} aria-hidden="true">
        {failed ? (
          <div className="world-image-fallback" />
        ) : (
          <Image
            src="/images/home/world-partial-v2.png"
            alt=""
            width={1024}
            height={1024}
            sizes="(min-width: 1200px) 560px, (min-width: 768px) 45vw, 92vw"
            className="world-globe"
            loading="eager"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <button
        type="button"
        className="world-motion-control"
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? "Play globe motion" : "Pause globe motion"}
      </button>
    </div>
  );
}
