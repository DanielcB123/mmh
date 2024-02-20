import React, { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';

function AboutScreen({ navigation }) {
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
      <Text>About!</Text>
    </View>
  );
}

export default AboutScreen;
