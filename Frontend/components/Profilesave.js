import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  TouchableOpacity
} from 'react-native';

export default function ProfileSaveScreen({ navigation, route }) {
  // Assuming these values are passed from EditProfileScreen
  // If not, you can set default values or use state management
  const { name = 'username', email = 'Email', password = 'Password', dateOfBirth = '23/03/2002' } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e0dbc9" barStyle="dark-content" />
      
      {/* Header with back button and edit button */}
      <View style={styles.header}>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Home')} 
            style={styles.backArrowContainer}>
            <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity 
            onPress={() => navigation.navigate('EditProfile')} 
            style={styles.editButtonContainer}>
            <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      
      {/* Profile picture section */}
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImageWrapper}>
          <Image 
            source={require('../assets/profileL.png')} 
            style={styles.profileImage} 
          />
        </View>
      </View>
      
      {/* Profile information - read only */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Name</Text>
          <View style={styles.readOnlyField}>
            <Text style={styles.fieldText}>{name}</Text>
          </View>
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.readOnlyField}>
            <Text style={styles.fieldText}>{email}</Text>
          </View>
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.readOnlyField}>
            <Text style={styles.fieldText}>••••••••</Text>
          </View>
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Date of Birth</Text>
          <View style={styles.readOnlyField}>
            <Text style={styles.fieldText}>{dateOfBirth}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0dbc9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    width: "100%",
    backgroundColor: "#b8c5b2",
    padding: 20,
    elevation: 3,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: '8%',
    marginLeft: '18%',
  },
  backArrowContainer: {
    position: 'absolute',
    top: 40,
    left: 22,
    zIndex: 10,
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 2, 
    borderColor: '#000', 
  },
  backButton: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
  },
  editButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 22,
    zIndex: 10,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImageWrapper: {
    position: 'relative',
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: '#b8c5b2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  readOnlyField: {
    backgroundColor: '#d2d1c9',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  fieldText: {
    fontSize: 16,
    color: '#666',
  }
});