'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/ui/app-context';

interface motionType {
  lang: string,
  toggleLang: () => void;
}

const useLang = (): motionType => {
  const { lang, toggleLang } = useContext(AppContext);
  if (useContext(AppContext) === undefined) {
    throw new Error('useLang must be used within an AppProvider');
  }
  return { lang, toggleLang };
};

export default useLang;
