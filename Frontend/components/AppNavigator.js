import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import welcome1 from '../components/welcome1';
import welcome2 from '../components/welcome2';
import welcome3 from '../components/welcome3';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import EditProfile from '../components/EditProfile';
import Profilesave from '../components/Profilesave';
import Friend from '../components/Friend';
import Main from '../components/Diary/Main';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome1" component={welcome1} />
      <Stack.Screen name="welcome2" component={welcome2} />
      <Stack.Screen name="welcome3" component={welcome3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profilesave" component={Profilesave} />
      <Stack.Screen name="Friend" component={Friend} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default AppNavigator;