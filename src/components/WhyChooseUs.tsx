'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Smartphone, TrendingUp, Cpu, Smile } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Modern Premium Design',
  },
  {
    icon: TrendingUp,
    title: 'Fast & Optimized Performance',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Solutions',
  },
  {
    icon: Smartphone,
    title: 'Responsive Across All Devices',
  },
  {
    icon: Shield,
    title: 'Scalable Development',
  },
  {
    icon: Smile,
    title: 'Smooth User Experience',
  },
  {
    icon: TrendingUp,
    title: 'Future-Ready Technology',
  },
];

export default function WhyChooseUs() {
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
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Why Choose <span className="gradient-text">MANIFEX.AI</span>
          </motion.h2>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass rounded-xl p-6 hover:bg-red-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-red-500" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
