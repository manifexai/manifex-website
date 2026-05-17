'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import Logo from './Logo';
import UnicornScene from 'unicornstudio-react';
import MagneticButton from './MagneticButton';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
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
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Unicorn Studio Background */}
      <div className="absolute inset-0 z-0">
        <UnicornScene
          projectId="L9gsZPjgoqPWldslRybx"
          width="100%"
          height="100%"
          scale={1}
          dpi={isMobile ? 1 : 1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.12/dist/unicornStudio.umd.js"
        />
      </div>

      {/* Dark overlay for readability - increased opacity for better text visibility */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-black/75 z-10"
      />

      {/* Animated grid background - disabled on mobile */}
      {!isMobile && <div className="absolute inset-0 grid-bg opacity-20 z-10" />}

      {/* Gradient orbs - disabled on mobile for performance */}
      {!isMobile && (
        <>
          <motion.div
            style={{ y: y1 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl z-10"
          />
          <motion.div
            style={{ y: y2 }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/20 rounded-full blur-3xl z-10"
          />
        </>
      )}

      {/* Floating particles - reduced count on mobile */}
      {[...Array(isMobile ? 5 : 20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -Math.random() * 200 - 50, 0],
            x: [0, (Math.random() - 0.5) * 100, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-red-500 rounded-full z-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Logo with enhanced animation - simplified on mobile */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative">
            {!isMobile && (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-8 border-2 border-red-500/50 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-12 border border-red-500/40 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-16 border border-red-500/30 rounded-full"
                />
              </>
            )}
            <motion.div
              whileHover={{ scale: isMobile ? 1.05 : 1.15, rotate: 0 }}
              className={`relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-full flex items-center justify-center glow-red cursor-pointer ${isMobile ? 'w-20 h-20 shadow-lg' : 'w-32 h-32 shadow-2xl shadow-red-500/50'}`}
            >
              <Logo className={isMobile ? 'w-16 h-16' : 'w-28 h-28'} />
            </motion.div>
          </div>
        </motion.div>

        {/* Heading with text reveal */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block"
          >
            Building Premium
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="block gradient-text"
          >
            AI Experiences.
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Trusted AI studio{' '}
          <span className="text-red-500">
            <Zap className="inline w-5 h-5 sm:w-6 sm:h-6" />
          </span>{' '}
          building modern websites, SaaS products & automation systems for growing brands{' '}
          <span className="inline-block animate-bounce">
            <Sparkles className="inline w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
          </span>
        </motion.p>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton>
            <motion.a
              href="https://wa.me/917591952491"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-red-600 text-white font-semibold rounded-lg overflow-hidden glow-red-hover transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Chat
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </MagneticButton>

          <motion.a
            href="tel:+917591952491"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 border border-red-500/50 text-white font-semibold rounded-lg hover:bg-red-500/10 transition-all"
          >
            Make a Call
          </motion.a>
        </motion.div>

        {/* Enhanced floating UI elements - desktop only */}
        {!isMobile && (
          <>
            <motion.div
              style={{ y: y2 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 right-20 glass p-4 rounded-xl hidden lg:block z-20"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 text-red-500" />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-400">AI Powered</div>
                  <div className="text-white font-semibold">Fast & Smart</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-32 left-20 glass p-4 rounded-xl hidden lg:block z-20"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 text-red-500" />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-400">Premium Quality</div>
                  <div className="text-white font-semibold">100% Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Enhanced scroll indicator - simplified on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-red-500 rounded-full glow-red"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
