import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Register({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle registration
  const handleRegister = async () => {
    // Basic validation
    if (!fullName || !email || !mobileNo || !password) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      setErrorMessage('');

      // Call the backend API
      const response = await fetch('http://192.168.43.158:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          mobileNo,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setLoading(false);
      // Show success message
      alert('Registration successful! Please login.');
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      console.error('Registration error:', error);
      setErrorMessage(error.message || 'Registration failed. Please try again.');
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
        
        <Text style={styles.title}>Create your account</Text>

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="black" style={styles.icon} />
          <TextInput 
            placeholder="Full Name" 
            style={styles.input} 
            placeholderTextColor="#444"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

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
          <Ionicons name="call-outline" size={20} color="black" style={styles.icon} />
          <TextInput 
            placeholder="Mobile Number" 
            style={styles.input} 
            placeholderTextColor="#444"
            value={mobileNo}
            onChangeText={setMobileNo}
            keyboardType="phone-pad"
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

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="black" style={styles.icon} />
          <TextInput 
            placeholder="Confirm Password" 
            secureTextEntry 
            style={styles.input} 
            placeholderTextColor="#444"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity 
          style={styles.registerButton}
          onPress={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#333" />
          ) : (
            <Text style={styles.registerButtonText}>Register</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an Account?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Login
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
    paddingVertical: 40,
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
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
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
  registerButton: {
    backgroundColor: '#f5d2b8',
    width: '100%',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 15,
    elevation: 3,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  loginText: {
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});