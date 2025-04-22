import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase/config"; // นำเข้า Firebase Authentication
import { signInWithEmailAndPassword } from "firebase/auth"; // ฟังก์ชันล็อกอิน

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // ฟังก์ชันตรวจสอบอีเมล
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // ฟังก์ชันล็อกอิน
  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError("กรุณากรอกอีเมลให้ถูกต้อง");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("MainTabs"); // ไปที่หน้าหลักเมื่อเข้าสู่ระบบสำเร็จ
      })
      .catch((err) => {
        setError(err.message);  // แสดงข้อความผิดพลาด
      });
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
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}  // เก็บค่าอีเมล
          />
          <InputField
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}  // เก็บค่ารหัสผ่าน
          />
          
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button title="Login" onPress={handleLogin} />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LoginScreen;
