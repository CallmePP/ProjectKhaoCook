// src/components/GoogleLoginButton.js
import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const GoogleLoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require("../assets/google.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: "center", // จัดให้อยู่ตรงกลาง
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default GoogleLoginButton;
