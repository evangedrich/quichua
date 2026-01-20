'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/ui/app-context';

interface motionType {
  motion: string,
  toggleMotion: () => void;
}

const useMotion = (): motionType => {
  const { motion, toggleMotion } = useContext(AppContext);
  if (useContext(AppContext) === undefined) {
    throw new Error('useMotion must be used within an AppProvider');
  }
  return { motion, toggleMotion };
};

export default useMotion;
