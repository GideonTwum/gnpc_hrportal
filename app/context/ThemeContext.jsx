'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [fontSize, setFontSize] = useState('medium');
  const [compactMode, setCompactMode] = useState(false);

  // Load saved preferences from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'en';
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    const savedCompactMode = localStorage.getItem('compactMode') === 'true';

    setTheme(savedTheme);
    setLanguage(savedLanguage);
    setFontSize(savedFontSize);
    setCompactMode(savedCompactMode);
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Save other preferences
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('compactMode', compactMode);
  }, [compactMode]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
  };

  const toggleCompactMode = () => {
    setCompactMode(prev => !prev);
  };

  const value = {
    theme,
    language,
    fontSize,
    compactMode,
    toggleTheme,
    changeLanguage,
    changeFontSize,
    toggleCompactMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 