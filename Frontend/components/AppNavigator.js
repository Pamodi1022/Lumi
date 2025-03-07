import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import welcome1 from '../components/welcome1';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome1" component={welcome1} />
    </Stack.Navigator>
  );
};

export default AppNavigator;