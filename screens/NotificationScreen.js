import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const notifications = [
  {
    id: '1',
    image: require('../assets/31a0a6822ec44703b7a04c79eec9ccfd.jpg'),
    title: 'คุณมีผู้ติดตามเพิ่มจากโพสต์นี้',
    subtitle: 'คุณ เชฟแมว คุณมีผู้ติดตามเพิ่มขึ้นแล้ว ลองโพสต์เพิ่มเลย',
    time: 'วันนี้',
  },
  {
    id: '2',
    image: require('../assets/614b180e9a009.jpg'),
    title: 'น้องมะเขือเทศ กดไลค์โพสต์ของคุณ',
    subtitle: 'ยินดีด้วย เมนูของคุณมีคนรู้จักเพิ่มแล้ว',
    time: 'วันนี้',
  },
  {
    id: '3',
    image: require('../assets/cj1ucXJ0ZHVtcnFicjkmcz1qcDYmdD1tJnU9MWZ2Y2Fhamo0NGEwMCZpPTA.jpg'),
    title: 'เชฟป้อม กดไลค์โพสต์ของคุณ',
    subtitle: 'ยินดีด้วย เมนูของคุณมีคนรู้จักเพิ่มแล้ว',
    time: 'วันนี้',
  },
  {
    id: '4',
    image: require('../assets/ปลาราดพริก.png'),
    title: 'คุณมีผู้ติดตามเพิ่มจากโพสต์นี้',
    subtitle: 'คุณ เชฟแมว คุณมีผู้ติดตามเพิ่มขึ้นแล้ว ลองโพสต์เพิ่มเลย',
    time: 'เมื่อวาน',
  },
  {
    id: '5',
    image: require('../assets/tumgung.jpg'),
    title: 'โพสต์นี้เป็นที่นิยมมาก!!',
    subtitle: 'คุณ เชฟแมว คุณเป็นที่รู้จักสุดยอด',
    time: 'เมื่อวาน',
  },
  {
    id: '6',
    image: require('../assets/khaopad.jpg'),
    title: 'คุณมีผู้ติดตามเพิ่มจากโพสต์นี้',
    subtitle: 'คุณ เชฟแมว คุณมีผู้ติดตามเพิ่มขึ้นแล้ว ลองโพสต์เพิ่มเลย',
    time: 'เมื่อวาน',
  },
  {
    id: '7',
    image: require('../assets/kaitod.jpg'),
    title: 'เชฟอันดับหนึ่ง กดไลค์โพสต์ของคุณ',
    subtitle: 'ยินดีด้วย เมนูของคุณมีคนรู้จักเพิ่มแล้ว',
    time: 'เมื่อวาน',
  },
];

const NotificationScreen = () => {
  const renderSection = (title, data) => (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      {data.map(item => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const todayNoti = notifications.filter(n => n.time === 'วันนี้');
  const yesterdayNoti = notifications.filter(n => n.time === 'เมื่อวาน');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d36c00',alignSelf: 'center', }}>
                    Khao<Text style={{ color: 'gold' }}>Cook</Text>
                  </Text>
      <Text style={styles.header}>การแจ้งเตือน</Text>
      {renderSection('วันนี้', todayNoti)}
      {renderSection('เมื่อวาน', yesterdayNoti)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1',
    paddingHorizontal: 20,
    paddingTop: 20, 
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20, 
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'regular',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'regular',
    fontSize: 14,
    marginBottom: 3,
  },
  subtitle: {
    color: '#666',
    fontSize: 11,
  },
});

export default NotificationScreen;
