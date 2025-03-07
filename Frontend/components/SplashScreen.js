import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import welcome1 from './welcome1';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      
      <LinearGradient
        colors={['#a9c5b9', '#e3d5c3']}
        style={styles.background}
      />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Image 
              source={require('../assets/robot.png')} 
              style={styles.robotIcon}
            />
          </View>
          <Text style={styles.appName}>Kalmi Dosti</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('welcome1')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
        <Text style={styles.tagline}>
          A virtual friend ready to understand and support you{'\n'}
          on your journey
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
  },
  robotIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  getStartedButton: {
    backgroundColor: '#e9cdb5',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  tagline: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    lineHeight: 20,
  }
});