import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    logoContainer: {
      alignItems: "center",
    },
    logoCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: "#333",
      position: "relative",
      marginBottom: 15,
    },
    robotIcon: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    title: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 20,
      color: "#333",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#e1e1e1",
      width: "100%",
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
      color: "#333",
    },
    loginButton: {
      backgroundColor: "#f5d2b8",
      width: "100%",
      padding: 12,
      borderRadius: 25,
      alignItems: "center",
      marginVertical: 15,
      elevation: 3,
    },
    loginText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
    },
    registerText: {
      fontSize: 14,
      color: "#333",
    },
    registerLink: {
      fontWeight: "bold",
      textDecorationLine: "underline",
    },
    footerText: {
      marginTop: 20,
      fontSize: 12,
      textAlign: "center",
      color: "#555",
    },
  });
  export default styles;