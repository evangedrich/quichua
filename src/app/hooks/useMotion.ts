'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/ui/context';

interface motionType {
  motion: boolean,
  toggleMotion: () => void;
}

const useMotion = (): motionType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useMotion must be used within an AppProvider');
  }
  const { motion, toggleMotion } = context;
  return { motion, toggleMotion };
};

export default useMotion;
