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
        style={[styles.button, { backgroundColor: isDarkTheme ? '#155e75' : '#007bff' }]}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginModal')} // Assuming you have a "LoginModal" route
        style={[styles.button, { backgroundColor: isDarkTheme ? '#166534' : '#34a853' }]} 
      >
        <Text style={styles.buttonText}>Login</Text>
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
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default HomeScreen;
