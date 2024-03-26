import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView, Image  } from 'react-native';
import { useTheme } from '../context/ThemeContext';

function HomeScreen({ navigation }) {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDarkTheme ? '#1e292e' : '#b2dac8' }]}>
      {/* Theme Switch */}
      <View style={styles.switchContainer}>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
        />
      </View>

      {/* Hero Section */}
        <View style={styles.heroSection}>
        {isDarkTheme ? (
          <Image 
            source={require('../images/homeimage3.png')} 
            style={styles.heroImage} 
          />
        ) : (
          <Image 
            source={require('../images/homeimage2.png')} 
            style={styles.heroImage} 
          />
        )}
        <Text style={styles.heroSubtitle}>Finding the perfect meeting point has never been easier.</Text>
        {/* <Text style={styles.heroSubtitle}>has never been easier.</Text> */}
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        {/* <Text style={styles.featuresTitle}>Features</Text>
        <Text style={styles.featuresSubtitle}>Everything you need, all in one place</Text> */}
        {/* Feature Items */}
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>Nearby Amenities</Text>
          <Text style={styles.featureDescription}>Discover close restaurants, cafes, and other amenities.</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>Safety First</Text>
          <Text style={styles.featureDescription}>Choose to meet near police stations or public areas.</Text>
        </View>
      </View>

      <View style={{ flex: 1 }} />

      {/* Registration and Login Buttons */}
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterModal')}
        style={[styles.button, {
          borderColor: isDarkTheme ? '#155e75' : '#0ea5e9',
          backgroundColor: isDarkTheme ? '#075985' : 'white'
        }]}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginModal')}
        style={[styles.button, {
          borderColor: isDarkTheme ? '#166534' : '#34d399',
          backgroundColor: isDarkTheme ? '#047857' : 'white'
        }]}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Add styles for heroSection, featuresSection, featureItem, etc., here
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  switchContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  heroImage: {
    width: 500, // Set the width of the image
    height: 250, // Set the height of the image
    resizeMode: 'contain', // Ensure the image is scaled correctly
  },  
  heroSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    color: '#0ea5e9',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroSubtitle: {
    color: 'white',
    fontWeight:'500',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  featuresSection: {
    color: 'white',
    fontWeight:'500',
    width: '100%',
    marginBottom: 20,
  },
  featuresTitle: {
    color: '#0ea5e9',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  featuresSubtitle: {
    color: 'white',
    fontWeight:'500',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  featureItem: {
    marginTop: 10,
  },
  featureTitle: {
    color: '#0ea5e9',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featureDescription: {
    color: 'white',
    fontWeight:'500',
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#155e75', // Adjust borderColor based on theme
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
