import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomTabBar from '../screens/CustomTabBar';

const RandomMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>สุ่มการ์ดเพื่อหามนู</Text>
        <Text style={styles.subTitle}>สุ่มเลย หิวแล้ว!</Text>
        <Image
          source={require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/image.png')}
          style={styles.image}
        />
        <Image
          source={require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/Ellipse 4.png')}
          style={styles.shadowimage}
        />
        <TouchableOpacity style={styles.randomButton} onPress={() => {/* Logic สำหรับการสุ่มเมนู */}}>
          <Text style={styles.buttonText}>RANDOM</Text>
        </TouchableOpacity>
      </View>
      <CustomTabBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1', // สีพื้นหลังตามภาพ
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50, // ให้เนื้อหาห่างจาก TabBar
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 262.55, // ปรับขนาดตามต้องการ
    height: 379.63, // ปรับขนาดตามต้องการ
    marginBottom: 20,
    padding: 20,
    borderRadius: 17, 
    borderWidth: 5,
    borderColor: '#FFF', // สีกรอบ
  },
  randomButton: {
    backgroundColor: '#FFC9AA', // สีปุ่ม
    padding: 10,
    borderRadius: 30,
    height: 40,
    width: 160,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    top: 80,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
  },
});

export default RandomMenuScreen;
