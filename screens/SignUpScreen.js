import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons"; // เพิ่มไอคอน
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require("../assets/background.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#6D4C41" />
            <Text style={styles.backText}>Back to login</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Sign Up</Text>
          <InputField placeholder="Email" />
          <InputField placeholder="Password" secureTextEntry />
          <InputField placeholder="Confirm Password" secureTextEntry />
          <Button title="Sign Up" onPress={() => {}} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end", // ให้ card อยู่ล่างสุด
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: "85%", // ขยายให้ปิดพื้นหลังด้านล่าง
    backgroundColor: "#fff",
    padding: 50,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    position: "absolute",
    bottom: 0, // ติดขอบล่างของหน้าจอ
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 }, // เงาที่ด้านบนของ card
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    color: "#6D4C41",
    fontSize: 16,
    marginLeft: 5,
  },
  title: {
    fontSize: 40,
    color: "#6D4C41",
    marginBottom: 20,
    left:25
  },
});

export default SignUpScreen;
