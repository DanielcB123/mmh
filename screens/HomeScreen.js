import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';

function HomeScreen({ navigation }) {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#f3f4f6' }]}>
      <View style={styles.switchContainer}>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
        />
      </View>
      {/* Spacer view to push buttons to the bottom */}
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterModal')}
        style={[styles.button, {
          borderColor: isDarkTheme ? '#155e75' : '#0ea5e9',
          backgroundColor: isDarkTheme ? '#155e75' : '#bae6fd' 
        }]}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginModal')}
        style={[styles.button, {
          borderColor: isDarkTheme ? '#166534' : '#34d399',
          backgroundColor: isDarkTheme ? '#166534' : '#a7f3d0' 
        }]}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 60,
  },
  switchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // Elevation for Android
  },
  registerButtonText: {
    color: '#0ea5e9',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButtonText: {
    color: '#10b981',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
