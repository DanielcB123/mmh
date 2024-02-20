import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import LoginModal from '../screens/LoginModal';
import RegisterModal from '../screens/RegisterModal';

const RootStack = createStackNavigator();

function ModalStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      <RootStack.Screen name="LoginModal" component={LoginModal} options={{ presentation: 'modal' }} />
      <RootStack.Screen name="RegisterModal" component={RegisterModal} options={{ presentation: 'modal' }} />
    </RootStack.Navigator>
  );
}

export default ModalStackScreen;
