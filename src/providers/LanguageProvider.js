import React, { useState } from 'react';
import LanguageContext from '../context/LanguageContext';
import useLanguageData from '../hooks/UseLanguageData';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const { data, loading, error } = useLanguageData(language);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, data, loading, error }}>
      {children}
    </LanguageContext.Provider>
  );
};