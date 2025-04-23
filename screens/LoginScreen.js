import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("MainTabs");
  };

  return (
    <ImageBackground 
      source={require("../assets/background.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>KhaoCook</Text>

        <View style={styles.form}>
          <Text style={styles.header}>Login</Text>
          <InputField placeholder="Email" />
          <InputField placeholder="Password" secureTextEntry />
          
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button title="Login" onPress={handleLogin} />

          {/* Divider with "or" */}
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

          <GoogleLoginButton onPress={() => {}} />

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>
              ไม่มีบัญชีใช่ไหม? <Text style={styles.signUpLink}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "104%",
    position: "absolute",
  },
  overlay: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#6C3414",
    marginTop: 40,
    top: 40,
  },
  form: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    padding: 50,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 110,
  },
  header: {
    fontSize: 40,
    color: "#6D4C41",
    marginBottom: 1,
    alignSelf: "center",
    top: -20,
  },
  forgotPassword: {
    color: "#6D4C41",
    textAlign: "right",
    marginBottom: 10,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#aaa",
  },
  orText: {
    marginHorizontal: 10,
    color: "#000",
    fontSize: 16,
  },
  signUpText: {
    textAlign: "center",
    marginTop: 30,
    color: "#6D4C41",
  },
  signUpLink: {
    color: "#FABC2C",
    fontWeight: "bold",
  },
});

export default LoginScreen;