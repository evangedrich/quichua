'use client';

import { useContext, useEffect } from 'react';
import { AppContext } from '@/app/ui/app-context';

interface themeType {
  theme: string,
  toggleTheme: () => void,
}

const useTheme = (): themeType => {
  const { theme, toggleTheme } = useContext(AppContext);

  useEffect(() => {
    const savedTheme: string = localStorage.getItem('theme');
    const systemPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
  }, []);
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (useContext(AppContext) === undefined) {
    throw new Error('useTheme must be used within an AppProvider');
  }

  return { theme, toggleTheme };
};

export default useTheme;
