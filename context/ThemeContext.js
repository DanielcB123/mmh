// ThemeContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);



  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
