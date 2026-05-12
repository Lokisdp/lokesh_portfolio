import { useEffect, useRef, useState } from "react";

export default function RevealSection({ id, className = "", children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        rootMargin: "-10% 0px -18% 0px",
        threshold: 0.16,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`page-section reveal-section ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
