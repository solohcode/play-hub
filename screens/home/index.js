import React from 'react';
import { View, Text, Button } from 'react-native';
 
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Profile' onPress={()=> navigation.navigate('Profile')} />
    </View>
  );
}

 
export default HomeScreen;