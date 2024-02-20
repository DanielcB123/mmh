import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.254.146:8000/api',
});

// Convert this function to async as suggested by TypeScript
export const register = async (userData) => {
  try {
    // This now uses the await syntax for making the HTTP request
    const response = await api.post('/register', userData);
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error; // Re-throw the error so you can catch it elsewhere if needed
  }
};


export const login = (credentials) => api.post('/login', credentials);
export const logout = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return api.post('/logout');
};
