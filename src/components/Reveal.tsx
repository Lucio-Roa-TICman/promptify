"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Anima la aparición de su contenido al hacer scroll (fade + subida).
 * Patrón estándar de IntersectionObserver, fácil de explicar.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `d${delay}` : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${shown ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}
