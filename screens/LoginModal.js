import React from 'react';
import { View, Text, Button } from 'react-native';

function LoginModal({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Login Modal</Text>
      <Button title="Close" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default LoginModal;
