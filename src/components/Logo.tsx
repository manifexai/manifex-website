'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`relative ${className}`}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="relative"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -inset-2 border-2 border-red-500/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -inset-4 border border-red-500/20 rounded-full"
        />
        <div className="relative w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center overflow-hidden glow-red">
          <Image
            src="/logo.jpeg"
            alt="MANIFEX.AI Logo"
            width={40}
            height={40}
            className="object-contain mix-blend-screen"
          />
        </div>
      </motion.div>
    </Link>
  );
}
