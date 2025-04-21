import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarItem = ({ label, icon, onPress, isActive }) => {
  const color = isActive ? '#d36c00' : '#ccc';

  return (
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={{ fontSize: 12, color }}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomTabBar = ({ state, navigation }) => {
  return (
    <View style={styles.tabBar}>
      <TabBarItem
        label="Home"
        icon="home"
        onPress={() => navigation.navigate('Home')}
        isActive={state.index === 0}
      />
      <TabBarItem
        label="เก็บสูตร"
        icon="bookmark"
        onPress={() => navigation.navigate('SavedRecipes')}
        isActive={state.index === 1}
      />
      <TabBarItem
        label="สุ่มเมนู"
        icon="restaurant"
        onPress={() => navigation.navigate('RandomMenuScreen')}
        isActive={state.index === 2}
      />
      <TabBarItem
        label="แจ้งเตือน"
        icon="notifications"
        onPress={() => navigation.navigate('Notifications')}
        isActive={state.index === 3}
      />
      <TabBarItem
        label="โปรไฟล์"
        icon="person"
        onPress={() => navigation.navigate('Profile')}
        isActive={state.index === 4}
      />
    </View>
  );
};

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
