'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="flex flex-col">
        <span className="hidden sm:block bg-gray-200 dark:bg-opacity-20 rounded-full h-3"></span>
        <span className="hidden sm:block bg-gray-200 dark:bg-transparent rounded-full h-3"></span>
        <span className="hidden sm:block bg-gray-200 dark:bg-opacity-20 rounded-full h-3"></span>
        <span className="hidden sm:block bg-gray-200 dark:bg-transparent rounded-full h-3"></span>
        <span className="hidden sm:block bg-gray-200 dark:bg-opacity-20 rounded-full h-3"></span>
      </div>
    </motion.div>
  );
}
