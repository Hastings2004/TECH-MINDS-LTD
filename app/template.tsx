'use client';

import { MotionConfig, motion } from 'motion/react';
import { useEffect } from 'react';

// Skip the transition on the very first load so the pre-built HTML is visible straight away
let firstLoad = true;

// Next.js remounts this on every navigation, so each page fades in when you arrive
export default function Template({ children }: { children: React.ReactNode }) {
  const animateIn = !firstLoad;
  useEffect(() => {
    firstLoad = false;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <motion.div initial={animateIn ? { opacity: 0, y: 16 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
}
