import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Adjust the path as necessary

function HomeScreen({ navigation }) {
  const { isDarkTheme, toggleTheme } = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
          style={{ marginLeft: 10 }} // Provide some space from the edge
        />
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginModal')}
            style={[styles.button, isDarkTheme ? styles.dark : styles.light]}
          >
            <Text style={[styles.buttonText, isDarkTheme ? styles.textDark : styles.textLight]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterModal')}
            style={[styles.button, isDarkTheme ? styles.dark : styles.light, { marginLeft: 8 }]} // Add some spacing between buttons
          >
            <Text style={[styles.buttonText, isDarkTheme ? styles.textDark : styles.textLight]}>Register</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, isDarkTheme, toggleTheme]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  dark: {
    backgroundColor: '#666', // Dark button background color
  },
  light: {
    backgroundColor: '#ddd', // Light button background color
  },
  textDark: {
    color: '#fff', // Text color for dark theme
  },
  textLight: {
    color: '#000', // Text color for light theme
  },
});

export default HomeScreen;
