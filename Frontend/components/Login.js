import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle login
  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      setErrorMessage('Email and password are required');
      return;
    }

    try {
      setLoading(true);
      setErrorMessage('');

      // Call the backend API
      const response = await fetch('http://192.168.43.158:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token (you might want to use AsyncStorage here)
      // For example: await AsyncStorage.setItem('userToken', data.token);
      
      setLoading(false);
      // Navigate to Home on successful login
      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
      console.error('Login error:', error);
      setErrorMessage(error.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
        
        <Text style={styles.title}>Login to your account</Text>

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="black" style={styles.icon} />
          <TextInput 
            placeholder="Email" 
            style={styles.input} 
            placeholderTextColor="#444"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="black" style={styles.icon} />
          <TextInput 
            placeholder="Password" 
            secureTextEntry 
            style={styles.input} 
            placeholderTextColor="#444"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#333" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Don't have an Account?{' '}
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
        </Text>

        <Text style={styles.footerText}>
          A virtual friend ready to understand, and support you on your journey
        </Text>
      </LinearGradient>
    </ScrollView>
  );
}

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
  loginButton: {
    backgroundColor: '#f5d2b8',
    width: '100%',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 15,
    elevation: 3,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
});

