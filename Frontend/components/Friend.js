import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Keyboard,
} from "react-native";

const SendIcon = () => <Text style={styles.sendIcon}>➤</Text>;

const TeenBestFriendChat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} ${currentDate
    .toLocaleString("default", { month: "short" })
    .toUpperCase()} ${currentDate.getHours()}:${String(
    currentDate.getMinutes()
  ).padStart(2, "0")}`;

  const API_KEY = "AIzaSyAn1ucK_iVoewyfa3hKfGLCwSwGfflflfA";

  // Friend name and persona
  const friendName = "Lumi";

  // Random greeting messages to seem more natural
  const greetings = [
    "Hey there! How's it going today? 😊",
    "What's up? Been thinking about you!",
    "Hey bestie! How's your day been so far?",
    "Finally free to chat! What's new with you?",
    "Heyyy! I've been waiting to catch up with you 💯",
  ];

  useEffect(() => {
    const startChat = async () => {
      // Select a random greeting
      const randomGreeting =
        greetings[Math.floor(Math.random() * greetings.length)];
      setMessages([
        {
          text: randomGreeting,
          user: false,
        },
      ]);
    };
    startChat();
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    const userMessage = { text: userInput, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    Keyboard.dismiss();

    try {
      // Modified prompt to make the AI respond as a supportive teenage best friend
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=" +
          API_KEY,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are ${friendName}, a supportive teenage best friend. Respond to your best friend in a casual, empathetic way. Use some teen slang, emojis, and abbreviations naturally but don't overdo it. Be supportive, understanding, and make them feel heard. Never lecture them or sound like an adult or parent. Never mention that you're AI - just act like a real friend who cares. If they share problems, show empathy and offer support without being preachy. Keep responses concise and authentic like a real text message. Here's what they said: ${userInput}`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.8, // Slightly higher temperature for more varied responses
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 150, // Shorter responses like a real friend would text
            },
          }),
        }
      );

      const data = await response.json();

      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const text = data.candidates[0].content.parts[0].text;

        // Add a small delay to make it feel more natural
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: text,
              user: false,
            },
          ]);
          setLoading(false);
        }, Math.random() * 1000 + 500); // Random delay between 500ms and 1500ms
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Ugh, my phone's acting up again! What were you saying? 🙄",
          user: false,
        },
      ]);
      setLoading(false);
    }
    setUserInput("");
  };

  // Function to simulate typing indicator
  const renderTypingIndicator = () => {
    if (loading) {
      return (
        <View style={styles.typingContainer}>
          <Text style={styles.typingText}>{friendName} is typing...</Text>
          <View style={styles.typingBubble}>
            <View style={styles.typingDot} />
            <View style={styles.typingDot} />
            <View style={styles.typingDot} />
          </View>
        </View>
      );
    }
    return null;
  };

  const renderMessage = ({ item }) => {
    if (item.type === "notification") {
      return (
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>{item.text}</Text>
        </View>
      );
    }

    return (
      <View
        style={[
          styles.messageContainer,
          item.user ? styles.userMessageContainer : styles.botMessageContainer,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.user ? styles.userMessageText : styles.botMessageText,
          ]}
        >
          {item.text}
        </Text>
        {!item.user && (
          <Text style={styles.timeStamp}>
            {new Date().getHours() +
              ":" +
              String(new Date().getMinutes()).padStart(2, "0")}
          </Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header - made more teen-friendly */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.headerTitle}>{friendName} 🤙</Text>

        <View style={styles.headerActions}>
          <Text style={styles.headerDots}>⋮</Text>
        </View>

        <Text style={styles.headerDate}>{formattedDate}</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messagesList}
        inverted={false}
        ListFooterComponent={renderTypingIndicator}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Message your bestie..."
          onChangeText={setUserInput}
          value={userInput}
          style={styles.input}
          placeholderTextColor="#999"
          multiline
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={styles.sendButton}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <SendIcon />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e0cf", // Beige background
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c5d1c1", // Light green header
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  backButton: {
    fontSize: 24,
    color: "#333",
    marginRight: 10,
  },
  profileContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 10,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  headerActions: {
    marginLeft: "auto",
  },
  headerDots: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  headerDate: {
    fontSize: 12,
    color: "#555",
    position: "absolute",
    bottom: 5,
    alignSelf: "center",
    width: "100%",
    textAlign: "center",
  },
  messagesList: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    marginVertical: 5,
    padding: 12,
    borderRadius: 20,
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#83a482", // Dark green bubble for user
    borderTopRightRadius: 5,
  },
  botMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffff", // White bubble for AI
    borderTopLeftRadius: 5,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  userMessageText: {
    color: "#ffffff", // White text for user messages
  },
  botMessageText: {
    color: "#333333", // Dark text for bot messages
  },
  notificationContainer: {
    alignSelf: "center",
    marginVertical: 10,
    padding: 5,
  },
  notificationText: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 14,
    color: "#333",
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#83a482", // Dark green send button
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  sendIcon: {
    color: "#fff",
    fontSize: 16,
    transform: [{ rotate: "90deg" }],
  },
});

export default TeenBestFriendChat;
