import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState("username");
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [dateOfBirth, setDateOfBirth] = useState("23/03/2002");

  const handleSaveChanges = () => {
    // Navigate to ProfileSaveScreen with the updated profile information
    navigation.navigate("ProfileSave", {
      name,
      email,
      password,
      dateOfBirth,
    });

    navigation.navigate("Profilesave");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e0dbc9" barStyle="dark-content" />

      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profilesave")}
          style={styles.backArrowContainer}
        >
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile picture section */}
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={require("../assets/profileL.png")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraButton}>
            <Image
              source={require("../assets/camera.png")}
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Form fields */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Date of Birth</Text>
          <TextInput
            style={styles.textInput}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="DD/MM/YYYY"
          />
        </View>
      </View>

      {/* Save button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0dbc9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    width: "100%",
    backgroundColor: "#b8c5b2",
    padding: 20,
    elevation: 3,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 14,
    color: "#333",
    marginTop: "8%",
    marginLeft: "18%",
  },
  backArrowContainer: {
    position: "absolute",
    top: 40,
    left: 22,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
  },
  backButton: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 24,
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImageWrapper: {
    position: "relative",
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: "#b8c5b2",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "transparent",
    width: 35,
    height: 35,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    width: 16,
    height: 16,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  textInput: {
    backgroundColor: "#d2d1c9",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#666",
  },
  saveButton: {
    backgroundColor: "#f7dfcc",
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
