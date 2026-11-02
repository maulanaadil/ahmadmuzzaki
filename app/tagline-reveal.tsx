"use client";

import { useEffect, useRef } from "react";

export function TaglineReveal({ text }: { text: string }) {
  const container = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const targets = Array.from(node.querySelectorAll<HTMLElement>("[data-word]"));
    node.dataset.armed = "true";
    const observer = new IntersectionObserver(
      (entries) => {
        let order = 0;
        for (const entry of entries) {
          const word = entry.target as HTMLElement;
          const crossed = entry.isIntersecting || entry.boundingClientRect.top < 0;
          if (!crossed) continue;
          word.style.transitionDelay = `${order * 40}ms`;
          word.dataset.on = "true";
          order += 1;
          observer.unobserve(word);
        }
      },
      { rootMargin: "0px 0px -35% 0px" },
    );
    for (const word of targets) observer.observe(word);
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={container} className="tagline heading-3">
      {words.map((word, index) => (
        <span key={`${word}-${index}`} data-word>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
