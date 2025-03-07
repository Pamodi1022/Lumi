import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Register({ navigation }) {
  return (
    <LinearGradient colors={['#a9c5b9', '#e3d5c3']} style={styles.container}>
      <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
                <Image 
                    source={require('../assets/robot.png')} 
                    style={styles.robotIcon}
                />
            </View>
            <Text style={styles.appName}>Kalmi Dosti</Text>
        </View>
      
      <Text style={styles.title}>Create your account</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="black" style={styles.icon} />
        <TextInput placeholder="username" style={styles.input} placeholderTextColor="#444" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="black" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#444" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="black" style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#444" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="black" style={styles.icon} />
        <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} placeholderTextColor="#444" />
      </View>

      <Text style={styles.termsText}>
        By registering you are agreeing to our {'\n'}
        <Text style={{ fontWeight: 'bold' }}>Terms of use</Text> and <Text style={{ fontWeight: 'bold' }}>privacy policy</Text>.
      </Text>

      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>


      <Text style={styles.loginText}>
        Already have an Account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        Login
        </Text>
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    borderWidth: 2,
    borderColor: '#333',
    position: 'relative',
    marginBottom: 15,
  },
  robotIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: '#f5d2b8',
    width: '100%',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  loginText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  loginLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

