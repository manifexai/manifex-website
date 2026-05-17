'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-red-900/20 bg-[length:200%_100%]"
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow effects */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="w-8 h-8 text-red-500" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ready to Build Something
            <br />
            <span className="gradient-text">Extraordinary?</span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Let's transform your vision into a premium digital experience that drives growth and captivates your audience.
          </p>

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Build Something <span className="gradient-text">Futuristic</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Modern brands deserve modern digital experiences.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://wa.me/917591952491"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-lg shadow-2xl shadow-red-500/50"
            >
              Start a Chat
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
