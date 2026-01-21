'use client';

import { useContext, useEffect } from 'react';
import { AppContext } from '@/app/ui/context';

interface themeType {
  theme: string,
  toggleTheme: () => void,
}

const useTheme = (): themeType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within an AppProvider');
  }
  const { theme, setTheme, toggleTheme } = context;

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem('theme');
    const systemPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
  }, []);
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
