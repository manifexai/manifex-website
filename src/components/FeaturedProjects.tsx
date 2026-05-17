'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const projects = [
  {
    title: 'Nexus AI Platform',
    category: 'SaaS Product',
    description: 'Enterprise AI platform for automated decision-making and predictive analytics.',
    tags: ['Next.js', 'Python', 'TensorFlow'],
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Quantum Finance',
    category: 'Fintech',
    description: 'Real-time trading platform with AI-powered market analysis and risk assessment.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Stellar Health',
    category: 'Healthcare',
    description: 'Telemedicine platform with AI diagnostics and personalized treatment recommendations.',
    tags: ['TypeScript', 'GraphQL', 'AWS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Velocity E-commerce',
    category: 'E-commerce',
    description: 'Next-gen shopping experience with AR product visualization and smart recommendations.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        style={{ y }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl"
      />
      
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
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Selected <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            Explore our portfolio of premium digital solutions crafted for visionary brands and industry leaders.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -20,
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
                boxShadow: '0 25px 50px rgba(239, 68, 68, 0.2)',
              }}
              className="group relative glass rounded-2xl overflow-hidden preserve-3d"
            >
              {/* Gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
              />
              
              <div className="relative p-8">
                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-4 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full mb-4"
                >
                  {project.category}
                </motion.div>

                {/* Title */}
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-lg cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <MagneticButton>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.button>
                  </MagneticButton>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <MagneticButton>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border border-red-500/50 text-white font-semibold rounded-lg hover:bg-red-500/10 transition-all"
            >
              View All Projects
              <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
