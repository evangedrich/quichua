'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export const AppContext = createContext(undefined);

// this allows global reach for the variables here defined
// consume context in split off custom hooks, e.g. "useTheme", "useMotion"
export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [motion, setMotion] = useState(true);
  const [lang, setLang] = useState('en');

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);
  const toggleMotion = useCallback(() => {
    setMotion(prevMotion => !prevMotion);
  }, []);
  const toggleLang = useCallback(() => {
    setLang(prevLang => prevLang === 'en' ? 'es' : 'en');
  }, []);

  const contextValue = {
    theme, toggleTheme,
    motion, toggleMotion,
    lang, toggleLang
  };
  const memoizedValue = React.useMemo(() => contextValue, [contextValue]);

  return (
    <AppContext.Provider value={memoizedValue}>
      {children}
    </AppContext.Provider>
  );
}
