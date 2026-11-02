"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const { id } of links) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header className="nav" data-open={open}>
      <a className="nav-brand title-4" href="#top" aria-label="Ahmad Muzzaki Mahmud, back to top" onClick={close}>
        Ahmad Muzzaki
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.id}
            className="nav-link body-5"
            href={`#${link.id}`}
            aria-current={active === link.id ? "location" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a className="button button-sm button-light nav-cta" href="#contact">
        Let&rsquo;s talk <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
      <div className="mobile-menu" data-open={open} id="mobile-menu" aria-hidden={!open} inert={!open}>
      <nav aria-label="Mobile navigation">
        {links.map((link, index) => (
          <a
            key={link.id}
            className="mobile-link heading-4"
            style={{ transitionDelay: open ? `${Math.min(index * 60, 400)}ms` : "0ms" }}
            href={`#${link.id}`}
            aria-current={active === link.id ? "location" : undefined}
            onClick={close}
          >
            {link.label}
          </a>
        ))}
        <a
          className="mobile-link heading-4"
          style={{ transitionDelay: open ? `${Math.min(links.length * 60, 400)}ms` : "0ms" }}
          href="#contact"
          onClick={close}
        >
          Contact
        </a>
      </nav>
    </div>
    </>
  );
}
