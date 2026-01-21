'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/ui/context';

interface langType {
  lang: string,
  toggleLang: () => void;
}

const useLang = (): langType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useLang must be used within an AppProvider');
  }
  const { lang, toggleLang } = context;
  return { lang, toggleLang };
};

export default useLang;
