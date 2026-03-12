import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  className = '',
  children,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`animated-section ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
