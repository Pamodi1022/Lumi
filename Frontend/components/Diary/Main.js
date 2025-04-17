import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../../Styles/MainStyles'; 

const DiaryPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#A5B5A6" barStyle="dark-content" />
      
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Diary</Text>
      </View>
      
      {/* Main content area */}
      <View style={styles.contentContainer}>
        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.personContainer}>
            <Image 
              source={require('../../assets/diary.png')} 
              style={styles.personImage}
              resizeMode="contain"
            />
          </View>
          
          <View style={styles.journalStack}>
            <View style={styles.journalRuler} />
            <View style={styles.journal}>

              {[...Array(8)].map((_, index) => (
                <View key={index} style={styles.journalLine}>
                  <View style={styles.journalText} />
                </View>
              ))}
            </View>
          </View>
        </View>
        
        {/* Create journal text */}
        <Text style={styles.createText}>Create your first Journal !</Text>
      </View>
      
      {/* Floating action button */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("NoteScreen")}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DiaryPage;