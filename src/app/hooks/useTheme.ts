'use client';

import { useContext, useEffect, useState } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
    setMounted(true);
  }, [setTheme]);
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme, mounted]);

  return { theme, toggleTheme };
};

export default useTheme;
