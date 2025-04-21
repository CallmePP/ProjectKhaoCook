import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TabBarItem = ({ label, icon, iconActive, onPress, isActive }) => {
  const color = isActive ? '#d36c00' : '#ccc';

  return (
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
      <Image
        source={isActive ? iconActive : icon}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 12, color }}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomTabBar = ({ state, navigation }) => {
  return (
    <View style={styles.tabBar}>
      <TabBarItem
        label="Home"
        icon={require('../assets/f.png')}
        iconActive={require('../assets/search-interface-symbol 1.png')}
        onPress={() => navigation.navigate('Home')}
        isActive={state.index === 0}
      />
      <TabBarItem
        label="เก็บสูตร"
        icon={require('../assets/s.png')}
        iconActive={require('../assets/diary 1.png')}
        onPress={() => navigation.navigate('SavedRecipes')}
        isActive={state.index === 1}
      />
      <TabBarItem
        label="สุ่มเมนู"
        icon={require('../assets/r.png')}
        iconActive={require('../assets/restaurant 2.png')}
        onPress={() => navigation.navigate('RandomMenuScreen')}
        isActive={state.index === 2}
      />
      <TabBarItem
        label="แจ้งเตือน"
        icon={require('../assets/n.png')}
        iconActive={require('../assets/bell 1.png')}
        onPress={() => navigation.navigate('Notifications')}
        isActive={state.index === 3}
      />
      <TabBarItem
        label="โปรไฟล์"
        icon={require('../assets/p.png')}
        iconActive={require('../assets/user 1.png')}
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
    borderTopColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
});

export default CustomTabBar;
