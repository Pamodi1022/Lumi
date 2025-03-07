import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Profilesave')}>
                <Image source={require('../assets/profile.png')} style={styles.profilePic} />
            </TouchableOpacity>
            <Text style={styles.greeting}>Hi, Pamodi</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Chatbot Card */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardLeftContent}>
            <Text style={styles.cardTitle}>Chatbot</Text>
            <Text style={styles.cardDescription}>
              Express yourself to AI companion - your trusted listener.
            </Text>
          </View>
          <View style={styles.cardRightContent}>
            {/* <View style={styles.chatBubble}>
              <Text style={styles.chatText}>Hello</Text>
            </View> */}
            <Image
              source={require('../assets/chatbot.png')}
              style={styles.botIcon}
            />
          </View>
        </TouchableOpacity>

        {/* Journal Card */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardLeftContent}>
            <Text style={styles.cardTitle}>Journal</Text>
            <Text style={styles.cardDescription}>
              Capture your thoughts, memories, and reflections in the diary.
            </Text>
          </View>
          <View style={styles.cardRightContent}>
            <Image
              source={require('../assets/diary.png')}
              style={styles.cardIcon}
            />
          </View>
        </TouchableOpacity>

        {/* Meditation Card */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardLeftContent}>
            <Text style={styles.cardTitle}>Meditation</Text>
            <Text style={styles.cardDescription}>
              Boost your well-being - whether it's stress or mental health - and stay fit.
            </Text>
          </View>
          <View style={styles.cardRightContent}>
            <Image
              source={require('../assets/meditation.png')}
              style={styles.cardIcon}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navButton}>
            <View style={styles.homeButton}>
              <Image
                source={require('../assets/home.png')}
                style={styles.navIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profilesave')}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.navIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ded1',
  },
  header: {
    paddingTop: 22,
    
  },
  profileContainer: {
    flexDirection: "row",
      width: "100%",
      height: 80,
      backgroundColor: "#b8c5b2",
      padding: 20,
      alignItems: "center",
      elevation: 3,
      marginBottom: 10,
      marginTop: -20, 
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 17,
    resizeMode: 'contain',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#b8c5b2',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeftContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  cardDescription: {
    fontSize: 14,
    color: '#000',
    width: '90%',
  },
  cardRightContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  cardIcon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  botIcon: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
  },
  chatBubble: {
    backgroundColor: '#8edee5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    position: 'absolute',
    top: -10,
    right: 0,
  },
  chatText: {
    fontSize: 12,
    color: '#fff',
  },
  bottomNav: {
    paddingHorizontal: 60,
    paddingBottom: 20,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0d8',
    borderRadius: 25,
    paddingVertical: 10,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  homeButton: {
    backgroundColor: '#b8c5b2',
    padding: 10,
    borderRadius: 20,
  },
  navIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
