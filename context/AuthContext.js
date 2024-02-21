// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect  } from 'react';
import { register as apiRegister, login as apiLogin, logout as apiLogout } from '../api';
import { navigate } from '../App';
//import { CommonActions } from '@react-navigation/native';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  // useEffect(() => {
  //   console.log(`userToken changed: ${userToken}`);
  //   setIsAuthenticated(!!userToken);
  // }, [userToken]);
  
  useEffect(() => {
    setIsAuthenticated(!!userToken);
    if (isAuthenticated) {
      console.log('Attempting to navigate to Dashboard');
      navigate('Dashboard');
    }
  }, [isAuthenticated, userToken]);
  

  const signIn = async (email, password) => {
    try {
      const response = await apiLogin({ email, password });
      console.log('Login successful, user token:', response.data.token);
      setUserToken(response.data.token);
      // Optionally set isAuthenticated based on the presence of the token
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };
  

  const signOut = async () => {
    console.log('test');
    try {
       await apiLogout(userToken);
      //  setIsAuthenticated(false);
       console.log('test 1');
       setUserToken(null);

       console.log('test 2');

      console.log('test 3');
      //navigate('Home');
      console.log('User signed out');
    } catch (error) {
      console.error('Logout failed', error);
    }
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
      //navigate('Dashboard');
    } catch (error) {
      console.error(error);
      throw new Error('Failed to register');
    }
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, userToken, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};
