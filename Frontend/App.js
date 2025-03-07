import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './components/SplashScreen';
import AppNavigator from './components/AppNavigator';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timer to hide the splash screen after 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {showSplash ? <SplashScreen /> : <AppNavigator />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});