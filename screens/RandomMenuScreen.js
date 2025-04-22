import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';

const randomMenus = [
  {
    title: 'ไก่ทอดเกลือ',
    desc: 'แจกสูตรไก่ทอดเกลือ ทำง่าย และอร่อย ใช้เวลานิดเดียว',
    image: require('../assets/kaitod.jpg'),
  },
  {
    title: 'ต้มยำกุ้ง',
    desc: 'ต้มยำกุ้งรสจัดจ้าน เผ็ดเปรี้ยวถึงใจ',
    image: require('../assets/tumgung.jpg'),
  },
  {
    title: 'ผัดกะเพราไข่ดาว',
    desc: 'ผัดกะเพราไข่ดาว เมนูสุดคลาสสิกของคนไทย',
    image: require('../assets/31a0a6822ec44703b7a04c79eec9ccfd.jpg'),
  }, 
  {
    title: 'ข้าวผัดกุ้ง',
    desc: 'ข้าวผัดกุ้ง เมนูง่ายๆ ที่ใครก็ทำได้',
    image: require('../assets/khaopad.jpg'),
  },
  {
    title: 'ไอศกรีมผลไม้รสส้ม',
    desc: 'ไอศกรีมผลไม้รสส้ม เหมาะกับวันร้อนๆ',
    image: require('../assets/iceorange.png'),
  },
];

const RandomMenuScreen = ({ navigation }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handleRandom = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
      const random = randomMenus[Math.floor(Math.random() * randomMenus.length)];
      navigation.navigate('Result', { menu: random });
    });
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotateY: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d36c00', alignSelf: 'center' }}>
        Khao<Text style={{ color: 'gold' }}>Cook</Text>
      </Text>
      <View style={styles.content}>
        <Text style={styles.title}>สุ่มการ์ดเพื่อหาเมนู</Text>
        <Text style={styles.subTitle}>สุ่มเลย หิวแล้ว!</Text>
        <Animated.Image
          source={require('../assets/card.png')}
          style={[styles.image, animatedStyle]}
        />
        <Image source={require('../assets/Ellipse 4.png')} style={styles.shadowimage} />
        <TouchableOpacity style={styles.randomButton} onPress={handleRandom}>
          <Text style={styles.buttonText}>RANDOM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1',
    paddingTop: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#A68470',
    bottom: 25,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#00000096',
  },
  image: {
    width: 262.55,
    height: 379.63,
    marginBottom: 20,
    borderRadius: 17,
    borderWidth: 5,
    borderColor: '#FFF',
    backfaceVisibility: 'hidden',
  },
  shadowimage: {
    top: 20,
  },
  randomButton: {
    backgroundColor: '#d36c00',
    padding: 10,
    borderRadius: 30,
    height: 40,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
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
