// components/CustomTabBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarItem = ({ label, icon, onPress }) => (
  <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#d36c00" />
    <Text style={{ fontSize: 12, color: '#d36c00' }}>{label}</Text>
  </TouchableOpacity>
);

const CustomTabBar = ({ navigation }) => (
  <View style={styles.tabBar}>
    <TabBarItem label="Home" icon="home" onPress={() => navigation.navigate('Home')} />
    <TabBarItem label="เก็บสูตร" icon="bookmark" onPress={() => console.log('ไปที่หน้า เก็บสูตร')} />
    <TabBarItem label="สุ่มเมนู" icon="restaurant" onPress={() => navigation.navigate('RandomMenuScreen')} />
    <TabBarItem label="แจ้งเตือน" icon="notifications" onPress={() => console.log('ไปที่หน้า แจ้งเตือน')} />
    <TabBarItem label="โปรไฟล์" icon="person" onPress={() => console.log('ไปที่หน้า โปรไฟล์')} />
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  }
});

export default CustomTabBar;
