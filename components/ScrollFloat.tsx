import React, { useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: string;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1.2,
  ease = 'power3.out',
  scrollStart = 'top 90%',
  scrollEnd = 'bottom 40%',
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    return children.split('').map((char, index) => {
      return (
        <span
          key={index}
          className="inline-block char-item transform-gpu origin-bottom"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  }, [children]);

  useGSAP(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll('.char-item');
    if (!chars.length) return;

    gsap.fromTo(
      chars,
      {
        y: '80%',
        opacity: 0,
        rotateX: -60,
      },
      {
        y: '0%',
        opacity: 1,
        rotateX: 0,
        stagger,
        duration: animationDuration,
        ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className={`perspective-[1000px] overflow-hidden ${containerClassName}`}
    >
      <span className={`inline-block ${textClassName}`}>{splitText}</span>
    </div>
  );
};

export default ScrollFloat;
