"use client";

import { useEffect, useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/* ────────────────────────────────────────────────────────────────
   Scroll progress — thin fixed bar driven by document scroll
──────────────────────────────────────────────────────────────── */
export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  return <motion.div className={className} style={{ scaleX }} aria-hidden="true" />;
}

/* ────────────────────────────────────────────────────────────────
   Parallax — translate children as the block passes the viewport
──────────────────────────────────────────────────────────────── */
export function Parallax({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const distance = 120 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   HeroParallax — fades / lifts / scales the hero as it scrolls away
──────────────────────────────────────────────────────────────── */
export function HeroParallax({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduced ? undefined : { y, opacity, scale }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────
   PointerGlow — a soft radial light that trails the cursor
   (background layer; ignores pointer events, listens on window)
──────────────────────────────────────────────────────────────── */
export function PointerGlow({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--gx", `${x}%`);
        el.style.setProperty("--gy", `${y}%`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);
  return <div ref={ref} className={className} aria-hidden="true" />;
}

/* ────────────────────────────────────────────────────────────────
   ScrubReveal — words brighten in sequence as you scroll through
──────────────────────────────────────────────────────────────── */
function ScrubWord({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: ReactNode;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <span style={{ display: "inline-block", marginRight: "0.28em" }}>
      <motion.span style={{ display: "inline-block", opacity, y }}>
        {children}
      </motion.span>
    </span>
  );
}

export function ScrubReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <ScrubWord key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </ScrubWord>
        );
      })}
    </p>
  );
}

/* ────────────────────────────────────────────────────────────────
   TextReveal — masked, word-by-word reveal for headings on enter
──────────────────────────────────────────────────────────────── */
const HEADING_TAGS = { h1: motion.h1, h2: motion.h2, h3: motion.h3 } as const;

export function TextReveal({
  text,
  className,
  as = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const HeadingTag = HEADING_TAGS[as] as typeof motion.h2;
  const words = text.split(" ");

  return (
    <HeadingTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            paddingBottom: "0.15em",
            marginBottom: "-0.15em",
          }}
        >
          <motion.span
            style={{ display: "inline-block", marginRight: "0.25em" }}
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </HeadingTag>
  );
}

/* ────────────────────────────────────────────────────────────────
   VelocityMarquee — infinite marquee that reacts to scroll velocity
──────────────────────────────────────────────────────────────── */
function wrapValue(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export function VelocityMarquee({
  children,
  baseVelocity = 3,
}: {
  children: ReactNode;
  baseVelocity?: number;
}) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrapValue(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_t, delta) => {
    if (reduced) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="velocity-marquee" aria-hidden="true">
      <motion.div className="velocity-marquee__row" style={{ x }}>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   SpotlightCard — 3D tilt + cursor spotlight + on-enter reveal
──────────────────────────────────────────────────────────────── */
export function SpotlightCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mvY, [0, 1], [6, -6]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mvX, [0, 1], [-6, 6]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mvX.set(px);
    mvY.set(py);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => {
    mvX.set(0.5);
    mvY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={reduced ? undefined : { y: -6 }}
      style={
        reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }
      }
    >
      {children}
    </motion.div>
  );
}
