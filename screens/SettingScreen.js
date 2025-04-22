import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="black" />  
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Setting</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>ทั่วไป</Text>
        {renderMenuItem("บัญชี", navigation)}
        {renderMenuItem("การแจ้งเตือน", navigation)}
        {renderMenuItem("ข้อกำหนดและนโยบาย", navigation)}
        {renderMenuItem("เกี่ยวกับแอปพลิเคชัน", navigation)}
        {renderMenuItem("ธีม", navigation)}

        <Text style={styles.sectionTitle}>การตอบรับ</Text>
        {renderMenuItem("รายงาน", navigation)}

        <TouchableOpacity
  style={styles.logoutButton}
  onPress={() => {
    Alert.alert(
      "ออกจากระบบ",
      "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
      [
        {
          text: "ยกเลิก",
          style: "cancel"
        },
        {
          text: "ใช่",
          onPress: () => navigation.replace("Login") // ใช้ replace แทน navigate เพื่อไม่ให้กลับมา
        }
      ]
    );
  }}
>
  <Text style={styles.logoutText}>ออกจากระบบ</Text>
</TouchableOpacity>
      </View>
    </View>
  );
};

const renderMenuItem = (title, navigation) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(title)}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
        <Text style={styles.menuText}>{title}</Text>
        <Icon name="chevron-forward" size={20} color="gray" />
      </View>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white" },
    header: {
      flex: 0.4,
      backgroundColor: "#FFBE98",
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    backButton: { marginRight: 15, top: -30 },
    headerTitle: { fontSize: 20, color: "black", right: 10 },
    content: {
      backgroundColor: "white",
      marginTop: -40,
      borderTopLeftRadius: 41,
      borderTopRightRadius: 41,
      padding: 30,
    },
    sectionTitle: { fontSize: 14, color: "gray", marginBottom: 5, padding: 10 },
    menuItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: "#ccc",
    },
    menuText: { fontSize: 16, left: 30 },
    logoutButton: {
      backgroundColor: "#FFBE98",
      padding: 10,
      borderRadius: 40,
      alignItems: "center",
      marginTop: 50,
      width: "60%",
      alignSelf: "center",
    },
    logoutText: { color: "white", fontSize: 15, fontWeight: "bold" },
  });
export default SettingScreen;
