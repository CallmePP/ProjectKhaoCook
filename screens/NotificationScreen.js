import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const notifications = [
  {
    id: '1',
    image: require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/image.png'),
    title: 'คุณมีผู้ติดตามเพิ่มจากโพสต์นี้',
    subtitle: 'คุณ เชฟแมว คุณมีผู้ติดตามเพิ่มขึ้นแล้ว ลองโพสต์เพิ่มเลย',
    time: 'วันนี้',
  },
  {
    id: '2',
    image: require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/image.png'),
    title: 'น้องมะเขือเทศ กดไลค์โพสต์ของคุณ',
    subtitle: 'ยินดีด้วย เมนูของคุณมีคนรู้จักเพิ่มแล้ว',
    time: 'วันนี้',
  },
  {
    id: '3',
    image: require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/image.png'),
    title: 'เชฟป้อม กดไลค์โพสต์ของคุณ',
    subtitle: 'ยินดีด้วย เมนูของคุณมีคนรู้จักเพิ่มแล้ว',
    time: 'วันนี้',
  },
  {
    id: '4',
    image: require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/image.png'),
    title: 'คุณมีผู้ติดตามเพิ่มจากโพสต์นี้',
    subtitle: 'คุณ เชฟแมว คุณมีผู้ติดตามเพิ่มขึ้นแล้ว ลองโพสต์เพิ่มเลย',
    time: 'เมื่อวาน',
  },
  {
    id: '5',
    image: require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/image.png'),
    title: 'โพสต์นี้เป็นที่นิยมมาก!!',
    subtitle: 'คุณ เชฟแมว คุณเป็นที่รู้จักสุดยอด',
    time: 'เมื่อวาน',
  },
  {
    id: '6',
    image: require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/image.png'),
    title: 'คุณมีผู้ติดตามเพิ่มจากโพสต์นี้',
    subtitle: 'คุณ เชฟแมว คุณมีผู้ติดตามเพิ่มขึ้นแล้ว ลองโพสต์เพิ่มเลย',
    time: 'เมื่อวาน',
  },
  {
    id: '7',
    image: require('/Volumes/drive DDD/ProjectKhaoCook/ProjectKhaoCook/assets/image.png'),
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
      <Text style={styles.header}>การแจ้งเตือน</Text>
      {renderSection('วันนี้', todayNoti)}
      {renderSection('เมื่อวาน', yesterdayNoti)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
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
    fontWeight: 'bold',
    marginBottom: 3,
  },
  subtitle: {
    color: '#666',
  },
});

export default NotificationScreen;
