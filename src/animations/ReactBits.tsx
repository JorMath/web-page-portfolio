import React, { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

// ============================================================
// SPLIT TEXT - ReactBits inspired text reveal animation
// ============================================================
interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: CSSProperties;
  animationTo?: CSSProperties;
  threshold?: number;
  tag?: keyof React.JSX.IntrinsicElements;
  onComplete?: () => void;
}

export function SplitText({
  text,
  className = "",
  delay = 50,
  animationFrom = { opacity: 0, transform: "translateY(40px)" },
  animationTo = { opacity: 1, transform: "translateY(0)" },
  threshold = 0.1,
  tag = "span",
  onComplete,
}: SplitTextProps) {
  const Tag = tag as React.ElementType;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (isVisible && onComplete) {
      const timeout = setTimeout(onComplete, delay * text.length + 600);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, delay, text.length, onComplete]);

  const words = text.split(" ");

  return (
    <div ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {word.split("").map((char, ci) => {
            const index = words.slice(0, wi).join(" ").length + (wi > 0 ? 1 : 0) + ci;
            return (
              <Tag
                key={`${wi}-${ci}`}
                style={{
                  display: "inline-block",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * delay}ms`,
                  ...(isVisible ? animationTo : animationFrom),
                }}
              >
                {char}
              </Tag>
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}

// ============================================================
// BLUR TEXT - Text that fades in with blur
// ============================================================
interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: "top" | "bottom";
}

export function BlurText({
  text,
  className = "",
  delay = 80,
  direction = "bottom",
}: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  const yOffset = direction === "top" ? "-20px" : "20px";

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * delay}ms`,
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? "blur(0)" : "blur(12px)",
            transform: isVisible ? "translateY(0)" : `translateY(${yOffset})`,
            marginRight: "0.3em",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

// ============================================================
// FADE CONTENT - General purpose fade-in wrapper
// ============================================================
interface FadeContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  blur?: boolean;
  duration?: number;
}

export function FadeContent({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  blur = false,
  duration = 0.7,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transforms[direction],
        filter: blur ? (isVisible ? "blur(0)" : "blur(8px)") : "none",
      }}
    >
      {children}
    </div>
  );
}

// ============================================================
// MAGNET - Element that follows cursor slightly
// ============================================================
interface MagnetProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  disabled?: boolean;
}

export function Magnet({ children, className = "", strength = 0.3, disabled = false }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)", display: "inline-block" }}
    >
      {children}
    </div>
  );
}

// ============================================================
// STAGGER - Staggered children animation
// ============================================================
interface StaggerProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function Stagger({
  children,
  className = "",
  staggerDelay = 100,
  direction = "up",
  distance = 30,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          style={{
            transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : transforms[direction],
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// COUNT UP - Animated number counter
// ============================================================
interface CountUpProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function CountUp({
  target,
  duration = 2000,
  className = "",
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// ============================================================
// TILT CARD - 3D tilt on hover
// ============================================================
interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.02,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0) rotateY(0) scale(1)");
  const [glareStyle, setGlareStyle] = useState<CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * maxTilt;
    const rotateY = (x - 0.5) * maxTilt;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);
    if (glare) {
      const glareColor = getComputedStyle(document.documentElement).getPropertyValue("--kiwi-primary-15").trim();
      setGlareStyle({
        background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, ${glareColor}, transparent 60%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0) rotateY(0) scale(1)");
    setGlareStyle({});
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
      {glare && (
        <div
          style={{
            ...glareStyle,
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: "inherit",
          }}
        />
      )}
    </div>
  );
}

// ============================================================
// ROTATING TEXT - Cycles through text options
// ============================================================
interface RotatingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function RotatingText({ texts, className = "", interval = 3000 }: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 400);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? "translateY(-20px)" : "translateY(0)",
        filter: isAnimating ? "blur(4px)" : "blur(0)",
      }}
    >
      {texts[index]}
    </span>
  );
}
