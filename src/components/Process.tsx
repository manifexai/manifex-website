'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We dive deep into your business goals, audience, and vision to create a solid foundation.',
  },
  {
    icon: Code,
    title: 'Design & Build',
    description: 'Our team crafts stunning designs and builds robust solutions using cutting-edge technology.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We ensure a seamless launch with thorough testing and optimization for peak performance.',
  },
  {
    icon: CheckCircle,
    title: 'Support',
    description: 'Ongoing support and maintenance to keep your digital presence running smoothly.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 50 },
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Our <span className="gradient-text">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            A streamlined workflow designed to deliver exceptional results on time and within budget.
          </motion.p>
        </motion.div>

        {/* Process steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative"
            >
              {/* Step number */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl glow-red"
              >
                {index + 1}
              </motion.div>

              {/* Card */}
              <div className="glass rounded-2xl p-8 pt-12 hover:bg-red-500/5 transition-all h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6"
                >
                  <step.icon className="w-7 h-7 text-red-500" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-500/50 to-transparent"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
