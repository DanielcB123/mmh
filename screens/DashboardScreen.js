import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const DashboardScreen = ({ navigation }) => {
  const { isDarkTheme } = useTheme(); // Use the theme context to check if dark theme is active

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#f3f4f6' }]}>
      <Text style={[styles.text, { color: isDarkTheme ? '#ffffff' : '#000000' }]}>Welcome to the Dashboard!</Text>
      {/* Add more UI components that make up your Dashboard here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // The background color setting is moved to the component's inline style
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    // The text color setting is moved to the component's inline style
  },
});

export default DashboardScreen;
