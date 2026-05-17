'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import NoiseOverlay from '@/components/NoiseOverlay';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import MouseFollower from '@/components/MouseFollower';
import GSAPAnimations from '@/components/GSAPAnimations';

// Dynamically import components that use window object
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Initialize smooth scroll with Lenis
    if (typeof window !== 'undefined') {
      import('lenis').then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      });
    }
  }, []);

  return (
    <>
      <LoadingScreen />
      <NoiseOverlay />
      <CustomCursor />
      <MouseFollower />
      <GSAPAnimations />
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <About />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <CTABanner />
      </main>
      
      <Footer />
    </>
  );
}
