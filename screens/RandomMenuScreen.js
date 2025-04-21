import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';

const RandomMenuScreen = () => {
  const [rotateValue] = useState(new Animated.Value(0));

  const handleRandom = () => {
    Animated.sequence([
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  };

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '10deg']
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#FDF7F1', alignItems: 'center', justifyContent: 'center' }}>
      {/* โลโก้ */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d36c00', alignSelf: 'center', justifyContent: 'center' }}>
          Khao<Text style={{ color: 'gold' }}>Cook</Text>
        </Text>

      {/* ข้อความ */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D4C41', marginTop: 10 }}>สุ่มการ์ดเพื่อหาเมนู</Text>
      <Text style={{ fontSize: 16, color: '#A1887F', marginBottom: 20 }}>สุ่มเลย หิวแล้ว!</Text>

      {/* แอนิเมชันการ์ด */}
      <Animated.View style={{ transform: [{ rotate }], marginBottom: 20 }}>
        <Image 
          source={{ uri: 'https://aroi-mark.com/wp-content/uploads/2020/06/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B92-1024x1024.jpg' }} 
          style={{ width: 180, height: 250, resizeMode: 'contain' }} 
        />
      </Animated.View>

      {/* ปุ่ม RANDOM */}
      <TouchableOpacity 
        onPress={handleRandom} 
        style={{
          backgroundColor: '#FBC3A7', 
          paddingHorizontal: 30, 
          paddingVertical: 12, 
          borderRadius: 20, 
          shadowColor: '#000', 
          shadowOpacity: 0.1, 
          shadowRadius: 5, 
          elevation: 3
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>RANDOM</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RandomMenuScreen;