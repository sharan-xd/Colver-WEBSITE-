'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative w-64 h-32 overflow-hidden">
        {/* Blue Wave */}
        <motion.svg
          viewBox="0 0 200 100"
          className="absolute inset-0 w-full h-full"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.path
            d="M0,50 Q50,0 100,50 T200,50 L200,100 L0,100 Z"
            fill="#3b82f6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.5 }}
          />
        </motion.svg>

        {/* Orange Wave */}
        <motion.svg
          viewBox="0 0 200 100"
          className="absolute inset-0 w-full h-full"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.path
            d="M0,50 Q50,100 100,50 T200,50 L200,0 L0,0 Z"
            fill="#f97316"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.5 }}
          />
        </motion.svg>

        {/* Merge Effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-2xl font-bold text-white drop-shadow-lg">Colver</span>
        </motion.div>
      </div>

      {/* Loading dots */}
      <motion.div 
        className="absolute bottom-1/3 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  )
}