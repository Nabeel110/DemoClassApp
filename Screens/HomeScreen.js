import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

const HomeScreen = () => {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
          console.log(username);
          onChangeUsername(val);
        }}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
          console.log(password);
          onChangePassword(val);
        }}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert(`Welcome ${username}`, "Successfully Logged In!")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
      {/* <Image
        style={styles.logo}
        source={{
          uri:
            "data:image/jpeg;base64,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",
        }}
      />{" "} */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 4,
  },
  btn: {
    // color="#841584"
    alignItems: "center",
    backgroundColor: "#841584",
    padding: 10,
  },
});

export default HomeScreen;
