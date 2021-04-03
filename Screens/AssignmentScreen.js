import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Nabeel from "../assets/nabeel.jpeg";
import Angular from "../assets/angular.png";

const AssignmentScreen = () => {
  const myName = "Nabeel Ahmed";
  const [showMyImage, setShowMyImage] = useState(false);
  const [showMyName, setShowMyName] = useState(false);
  var imgSource = showMyImage ? Nabeel : Angular;
  var myText = showMyName ? myName : "Annonymous";
  const onClickHandler = () => {
    setShowMyImage(!showMyImage);
  };

  const onTextClickHandler = () => {
    setShowMyName(!showMyName);
  };
  //   const [password, onChangePassword] = useState("");
  return (
    <View>
      <Text style={styles.title}>Getting Started with React Native!</Text>
      <Image style={styles.img} source={imgSource} />
      <Text style={styles.text}>My name is {myText}</Text>
      <TouchableOpacity style={styles.btn} onPress={onClickHandler}>
        <Text style={styles.btnText}>Change Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Textbtn} onPress={onTextClickHandler}>
        <Text style={styles.btnText}>Change Text</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    // position: "absolute",
    // top: 0,
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
    borderRadius: 10,
    borderWidth: 1,
    margin: 14,
  },
  img: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
    borderRadius: "100%",
  },
  text: {
    fontSize: 20,
    color: "blue",
    textAlign: "center",
  },
  btnText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  Textbtn: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    margin: 14,
  },
});

export default AssignmentScreen;
