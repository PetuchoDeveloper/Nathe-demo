
"use client";

import type { Dispatch, SetStateAction, ReactNode, SVGProps } from 'react';
import { createContext, useContext, useState } from 'react';

export type Language = 'nahuatl' | 'spanish';

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: Dispatch<SetStateAction<Language>>;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('nahuatl');

  const toggleLanguage = () => {
    setCurrentLanguage(prevLang => (prevLang === 'nahuatl' ? 'spanish' : 'nahuatl'));
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
