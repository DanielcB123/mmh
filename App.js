import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import ModalStackScreen from './navigation/ModalStackScreen';
import { ThemeProvider, useTheme } from './context/ThemeContext'; // Adjust the path as necessary
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider> 
      <ThemeProvider> 
        <ThemedApp />
      </ThemeProvider>
    </AuthProvider>
  );
};

const ThemedApp = () => {
  const { isDarkTheme } = useTheme();

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <ModalStackScreen />
    </NavigationContainer>
  );
};

export default App;
