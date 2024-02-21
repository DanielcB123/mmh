import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MessagingScreen from '../screens/MessagingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const { isAuthenticated, signOut } = useAuth();

  console.log('is authenticated = '+isAuthenticated);
  return (
    <Tab.Navigator
      key={isAuthenticated ? "authenticated" : "unauthenticated"} // This forces a re-render when the authentication state changes
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }
          // Add more else if blocks for other tabs as needed
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'gray',
      })}
    >

      {/* {isAuthenticated && (
        <>
          <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  onPress={() => {
                    signOut();
                  }}
                  title="Logout"
                  color="gray"
                />
              ),
              headerRightContainerStyle: {
                paddingRight: 15, 
              },
            })}
          />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </>
      )} */}

      {!isAuthenticated ? (
        <>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              headerTitle: 'Meet Me Halfway', 
              tabBarLabel: 'Home', 
              headerTitleAlign: 'center', 
            }} 
          />
          <Tab.Screen 
            name="About" 
            component={AboutScreen}
            options={{
              headerTitle: 'About', 
              tabBarLabel: 'About', 
              headerTitleAlign: 'center', 
            }}  
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  onPress={() => {
                    signOut();
                  }}
                  title="Logout"
                  color="gray"
                />
              ),
              headerRightContainerStyle: {
                paddingRight: 15, 
              },
            })}
          />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </>
        
      )} 

      {/* <Tab.Screen name="Messaging" component={MessagingScreen} /> */}


    </Tab.Navigator>
  );
}

export default MainTabNavigator;
