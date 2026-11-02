"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight - 48) {
        element.dataset.motion = "pending";
        observer.observe(element);
      }
    }

    const seal = document.querySelector<HTMLElement>(".name-seal");
    let sealInView = false;
    const sealObserver = seal ? new IntersectionObserver(([entry]) => {
      sealInView = entry.isIntersecting;
      seal.dataset.inView = String(sealInView && !document.hidden);
    }, { threshold: 0.1 }) : null;
    if (seal && sealObserver) sealObserver.observe(seal);

    const syncVisibility = () => {
      if (seal) seal.dataset.inView = String(sealInView && !document.hidden);
    };
    document.addEventListener("visibilitychange", syncVisibility);

    return () => {
      observer.disconnect();
      sealObserver?.disconnect();
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);

  return null;
}
