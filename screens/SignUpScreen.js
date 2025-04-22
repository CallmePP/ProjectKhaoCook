import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase/config"; // นำเข้า Firebase Authentication
import { createUserWithEmailAndPassword } from "firebase/auth"; // ฟังก์ชันสมัครสมาชิก

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // สถานะการโหลด

  // ฟังก์ชันตรวจสอบอีเมล
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  // ฟังก์ชันสมัครสมาชิก
  const handleSignUp = () => {
    setIsLoading(true); // เริ่มสถานะการโหลด

    const trimmedEmail = email.trim(); // ตัดช่องว่างรอบๆ อีเมล

    // ตรวจสอบช่องว่างอีเมล
    if (trimmedEmail === "") {
      setError("กรุณากรอกอีเมล");
      setIsLoading(false); // หยุดสถานะการโหลดเมื่อเกิดข้อผิดพลาด
      return;
    }

    // ตรวจสอบอีเมล
    if (!validateEmail(trimmedEmail)) {
      setError("กรุณากรอกอีเมลให้ถูกต้อง");
      setIsLoading(false); // หยุดสถานะการโหลดเมื่อเกิดข้อผิดพลาด
      return;
    }

    // ตรวจสอบรหัสผ่านและการยืนยันรหัสผ่าน
    if (password !== confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      setIsLoading(false); // หยุดสถานะการโหลดเมื่อเกิดข้อผิดพลาด
      return;
    }

    // ตรวจสอบรหัสผ่านว่าเป็นไปตามข้อกำหนด (เช่น ความยาว)
    if (password.length < 6) {
      setError("รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร");
      setIsLoading(false);
      return;
    }

    // สร้างบัญชีผู้ใช้ใหม่ใน Firebase
    createUserWithEmailAndPassword(auth, trimmedEmail, password)
      .then(() => {
        console.log("User registered successfully");  // ตรวจสอบว่าเกิดการสมัครสมาชิกสำเร็จ
        navigation.navigate("Login"); // กลับไปที่หน้า Login
      })
      .catch((err) => {
        console.log("Error: ", err.message);  // พิมพ์ข้อความข้อผิดพลาดจาก Firebase
        setError("เกิดข้อผิดพลาดในการสมัครสมาชิก: " + err.message); 
        setIsLoading(false);  // หยุดสถานะการโหลดเมื่อเกิดข้อผิดพลาด
      });
  };

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

          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <InputField
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <Button title={isLoading ? "Signing Up..." : "Sign Up"} onPress={handleSignUp} />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {isLoading && <Text style={styles.loadingText}>กำลังสมัครสมาชิก...</Text>}
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: "85%",
    backgroundColor: "#fff",
    padding: 50,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    position: "absolute",
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
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
    left: 25,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  loadingText: {
    color: "#6D4C41",
    textAlign: "center",
    marginTop: 10,
  }
});

export default SignUpScreen;
