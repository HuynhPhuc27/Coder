'use client'

import { createContext, useState, useEffect, useContext } from 'react'

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | (null)>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Theme>('dark');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: mode, toggleTheme }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
