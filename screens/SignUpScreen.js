import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase/config"; // นำเข้า Firebase Authentication
import { createUserWithEmailAndPassword } from 'firebase/auth'; // ใช้สำหรับการสมัครสมาชิก

const SignUpScreen = () => {
  const navigation = useNavigation();
  
  // สร้าง state สำหรับ email และ password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password === confirmPassword) {
      try {
        // ใช้ Firebase ลงทะเบียนผู้ใช้ใหม่
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate("Login", { email }); // ไปที่หน้า Login หลังสมัครเสร็จ
      } catch (error) {
        // จัดการข้อผิดพลาดที่ Firebase แจ้งให้ชัดเจน
        if (error.code === 'auth/invalid-email') {
          alert("โปรดกรอกที่อยู่อีเมลที่ถูกต้อง");
        } else if (error.code === 'auth/email-already-in-use') {
          alert("อีเมลนี้ถูกใช้ไปแล้ว");
        } else {
          alert(error.message); // ถ้ามีข้อผิดพลาดอื่น ๆ
        }
      }
    } else {
      alert("Password and Confirm Password do not match");
    }
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
          <Button title="Sign Up" onPress={handleSignUp} />
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
