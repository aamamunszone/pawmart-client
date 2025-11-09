import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeProvider = ({ children }) => {
  const getSystemTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'pawmart-dark';
    }
    return 'pawmart-light';
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'pawmart-light' ? 'pawmart-dark' : 'pawmart-light'
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
