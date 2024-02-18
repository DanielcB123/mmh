import React, { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Updated HomeScreen with navigation options for header buttons
function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
          <Button
            onPress={() => navigation.navigate('LoginModal')}
            title="Login"
            color="#000"
          />
          <Button
            onPress={() => navigation.navigate('RegisterModal')}
            title="Register"
            color="#000"
            style={{ marginLeft: 8 }} // Add some spacing between buttons
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

// Similar update for SettingsScreen
function SettingsScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
          <Button
            onPress={() => navigation.navigate('LoginModal')}
            title="Login"
            color="#000"
          />
          <Button
            onPress={() => navigation.navigate('RegisterModal')}
            title="Register"
            color="#000"
            style={{ marginLeft: 8 }} // Add some spacing between buttons
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

// Define your Login and Register modal screens
function LoginModal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Login Modal</Text>
    </View>
  );
}

function RegisterModal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Register Modal</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

// Main Tab Navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'list' : 'list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Root Stack Navigator that includes both Tabs and Modals
function ModalStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen 
        name="Main" 
        component={MainTabNavigator} 
        options={{ headerShown: false }}
      />
      <RootStack.Screen 
        name="LoginModal" 
        component={LoginModal} 
        options={{ 
          headerShown: true, 
          title: 'Login', 
          presentation: 'modal' // Use 'presentation: "modal"' for modal screens
        }} 
      />
      <RootStack.Screen 
        name="RegisterModal" 
        component={RegisterModal} 
        options={{ 
          headerShown: true, 
          title: 'Register', 
          presentation: 'modal' // Use 'presentation: "modal"' for modal screens
        }} 
      />
    </RootStack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <ModalStackScreen />
    </NavigationContainer>
  );
}
