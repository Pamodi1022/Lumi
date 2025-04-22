import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../Styles/NoteScreenStyles"; // Adjust the import path as necessary

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

export default NoteScreen;
