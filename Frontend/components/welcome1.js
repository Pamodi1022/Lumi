import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function OnboardingScreen({ navigation }) {
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
        
        <Text style={styles.welcomeText}>
          Welcome to Luca, a{'\n'}
          great friend to chart{'\n'}
          with.
        </Text>
        
        <View style={styles.paginationContainer}>
          <View style={[styles.paginationDot, styles.activeDot]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation && navigation.navigate('NextScreen')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.skipContainer}>
          <Text style={styles.skipText}>•Skip•</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
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
    marginBottom: 60,
  },
  welcomeText: {
    fontSize: 20,
    lineHeight: 28,
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 60,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
  },
  nextButton: {
    backgroundColor: '#e9cdb5',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  skipContainer: {
    alignItems: 'center',
  },
  skipText: {
    fontSize: 12,
    color: 'black',
  },
});