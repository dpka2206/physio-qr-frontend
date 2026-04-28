"use client";
import { createElement, useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";

type Variant = "up" | "down" | "left" | "right" | "fade" | "blur" | "mask";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

const initialMap: Record<Variant, CSSProperties> = {
  up: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  down: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
  left: { opacity: 0, transform: "translate3d(-40px, 0, 0)" },
  right: { opacity: 0, transform: "translate3d(40px, 0, 0)" },
  fade: { opacity: 0 },
  blur: { opacity: 0, filter: "blur(14px)", transform: "translate3d(0, 20px, 0)" },
  mask: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
};

const finalMap: Record<Variant, CSSProperties> = {
  up: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  down: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  left: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  right: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  fade: { opacity: 1 },
  blur: { opacity: 1, filter: "blur(0px)", transform: "translate3d(0, 0, 0)" },
  mask: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 900,
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  // Default to visible so SSR / no-JS / missing IntersectionObserver never hides content.
  const [shown, setShown] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    // Start hidden on client so the entrance animation can play.
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setShown(true);
      return;
    }
    setShown(false);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: CSSProperties = {
    ...(mounted && !shown ? initialMap[variant] : finalMap[variant]),
    transition: `opacity ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, filter ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, clip-path ${duration}ms cubic-bezier(.7,0,.2,1) ${delay}ms`,
    willChange: "opacity, transform, filter, clip-path",
  };

  return createElement(as, { ref, className, style }, children);
}

/** Parallax wrapper — translates child as element scrolls through viewport */
export function Parallax({
  children,
  speed = 0.15,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        setY(progress * speed * 100);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${y}px, 0)`, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
