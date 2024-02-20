// context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import { register as apiRegister, login as apiLogin, logout as apiLogout } from '../api';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const signIn = async (email, password) => {
    // Implement your login logic here
    // For example, authenticate against a backend and get a token
    // This is a placeholder implementation
    setUserToken("dummy-token");
  };

  const signOut = () => {
    setUserToken(null);
  };

  const register = async (name, email, password) => {
    try {
      
      // Call the register function from your API utility file
      const response = await apiRegister({ name, email, password });
      console.log('User token from API is: ' + JSON.stringify(response.data));
      // Assuming the API returns a token upon successful registration
      const token = response.data.token; // Adjust this line based on your actual API response
      setUserToken(token);
      //     await SecureStore.setItemAsync('userToken', token);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to register');
    }
  };


  return (
    <AuthContext.Provider value={{ userToken, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};
