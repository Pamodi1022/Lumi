import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NoteScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#d2cec0" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="trash-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="image-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Note Content */}
      <View style={styles.noteContent}>
        <Text style={styles.titleText}>Title</Text>
        <TextInput
          style={styles.noteInput}
          placeholder="Type something..."
          placeholderTextColor="#555"
          multiline
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e2d1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#d2cec0',
  },
  backButton: {
    padding: 5,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: '#333',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  noteContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#000',
    marginBottom: 10,
    fontFamily: 'System',
  },
  noteInput: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'System',
    padding: 0,
  },
});

export default NoteScreen;