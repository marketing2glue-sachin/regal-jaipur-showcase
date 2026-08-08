import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: "fade" | "mask" | "image";
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  variant = "fade",
}: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();
  const variantClass =
    variant === "mask" ? "reveal-mask" : variant === "image" ? "reveal-image" : "reveal";

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn(variantClass, className)}
    >
      {children}
    </Tag>
  );
}

/** Word-by-word text reveal for headlines. */
export function RevealText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView<HTMLSpanElement>(0.3);
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: `${delay + i * 70}ms`,
              transform: visible ? "none" : "translateY(105%)",
              opacity: visible ? 1 : 0,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}
