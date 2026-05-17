'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Globe,
  Code,
  Bot,
  Palette,
  Layers,
  ArrowRight,
} from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useState, useEffect } from 'react';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Premium modern websites built for performance, conversions, and brand presence.',
  },
  {
    icon: Code,
    title: 'SaaS Development',
    description: 'Scalable SaaS platforms with modern UI, smooth workflows, and powerful functionality.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Smart AI systems and automations that save time and improve business efficiency.',
  },
  {
    icon: Palette,
    title: 'UI/UX Systems',
    description: 'Clean and intuitive interfaces designed for seamless user experiences.',
  },
  {
    icon: Layers,
    title: 'Branding & Motion',
    description: 'Futuristic branding, motion graphics, and visual systems built for modern brands.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      {!isMobile && (
        <motion.div
          style={{ y }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/15 rounded-full blur-3xl"
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What We <span className="gradient-text">Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Modern digital solutions designed for startups, creators, and businesses that want to stand out.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-8 hover:bg-red-500/10 transition-all group border border-white/5 hover:border-red-500/30"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    rotate: isMobile ? 0 : 360, 
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors duration-500"
                >
                  <service.icon className="w-8 h-8 text-red-500" />
                </motion.div>

                {/* Content */}
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300"
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn more link */}
                <MagneticButton>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-red-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
