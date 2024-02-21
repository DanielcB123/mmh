import React, { useLayoutEffect, useCallback } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

function AboutScreen({ navigation }) {

  const { isDarkTheme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const memoizedToggleTheme = useCallback(toggleTheme, []);
  console.log('auth about');
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Switch value={isDarkTheme} onValueChange={memoizedToggleTheme} style={{ marginLeft: 10 }} />
  //     ),
  //     headerRight: () => (
  //       isAuthenticated ? (
  //         <View style={{ flexDirection: 'row', paddingRight: 10 }}>
  //           <Text>Welcome back!</Text>
  //         </View>
  //       ) : (
  //         <View style={{ flexDirection: 'row', paddingRight: 10 }}>
  //           <TouchableOpacity onPress={() => navigation.navigate('LoginModal')} style={[styles.button, isDarkTheme ? styles.dark : styles.light]}>
  //             <Text style={[styles.buttonText, isDarkTheme ? styles.textDark : styles.textLight]}>Login</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity onPress={() => navigation.navigate('RegisterModal')} style={[styles.button, isDarkTheme ? styles.dark : styles.light, { marginLeft: 8 }]}>
  //             <Text style={[styles.buttonText, isDarkTheme ? styles.textDark : styles.textLight]}>Register</Text>
  //           </TouchableOpacity>
  //         </View>
  //       )
  //     ),
  //   });
  // }, [navigation, isDarkTheme, memoizedToggleTheme, isAuthenticated]); // Ensure isAuthenticated is in the dependency array to re-evaluate when auth state changes.
  

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#f3f4f6' }]}>
      {/* Position the switch container absolutely within the parent container */}
      <View style={styles.switchContainer}>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  switchContainer: {
    position: 'absolute', // Position the switch container absolutely
    top: 0, // Align to the top of the parent container
    left: 0, // Align to the left of the parent container
    padding: 20, // Add some padding to move it inwards from the corner
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: '#007bff', // Example background color
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    width: '80%', // Adjust width as needed
    alignSelf: 'center', // Center button in its parent container
  },
  buttonText: {
    color: '#ffffff', // White text for contrast
    fontSize: 16,
    textAlign: 'center', // Ensure text is centered (especially for multiline text)
  },
  
});
export default AboutScreen;
