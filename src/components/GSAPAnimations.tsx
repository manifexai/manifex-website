'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GSAPAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Smooth scroll parallax for background elements
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Parallax effect for gradient orbs
      gsap.to('.gradient-orb-1', {
        y: scrollY * 0.3,
        duration: 0.5,
        ease: 'power2.out',
      });
      
      gsap.to('.gradient-orb-2', {
        y: scrollY * -0.2,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Initial animations
    gsap.fromTo('.gsap-reveal', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-reveal',
          start: 'top 80%',
        },
      }
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div ref={containerRef} />;
}
