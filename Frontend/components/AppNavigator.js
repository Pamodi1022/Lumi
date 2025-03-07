import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import welcome1 from '../components/welcome1';
import welcome2 from '../components/welcome2';
import welcome3 from '../components/welcome3';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome1" component={welcome1} />
      <Stack.Screen name="welcome2" component={welcome2} />
      <Stack.Screen name="welcome3" component={welcome3} />
    </Stack.Navigator>
  );
};

export default AppNavigator;