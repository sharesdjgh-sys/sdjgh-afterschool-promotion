"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
    const els = document.querySelectorAll<HTMLElement>(".reveal");

    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 1200);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
