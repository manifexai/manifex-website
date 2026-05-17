'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const stats = [
  { icon: Target, label: 'Projects Delivered', value: '30' },
  { icon: Users, label: 'Happy Clients', value: '27' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="relative py-32 px-4 bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Built For The <span className="gradient-text">Future</span>
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              MANIFEX.AI creates premium digital experiences powered by modern technology, AI, and design.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We focus on building high-performance websites, SaaS products, automation systems, and immersive interfaces that help brands grow in the digital era.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our approach combines creativity, strategy, and technology to create experiences that feel modern, cinematic, and impactful.
            </p>
          </motion.div>

          {/* Right stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center hover:bg-red-500/10 transition-all border border-white/5 hover:border-red-500/30"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-6 h-6 text-red-500" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
