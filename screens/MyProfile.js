import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* ส่วนหัว */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.navigate('SettingScreen')}>
                    <Ionicons name="settings-outline" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Account</Text>
                <View style={styles.headerRight}>
                    <Ionicons name="alert-circle-outline" size={24} color="#333" />
                </View>
            </View>

            {/* ส่วนโปรไฟล์ */}
            <View style={styles.profileContainer}>
                {/* แสดง "เชฟฝึกหัด" เหนือรูปโปรไฟล์ */}
                <View style={styles.profileBadgeTop}>
                    <Text style={styles.profileBadgeTopText}>เชฟฝึกหัด</Text>
                </View>
                <Image source={require('../assets/tomato.png')} style={styles.profileImage} />
                <View style={styles.profileNameContainer}>
                    <Text style={styles.profileName}>น้องมะเขือ</Text>
                </View>
                <Text style={styles.profileDescription}>พึ่งเริ่มหัดทำอาหารค่ะ</Text>
                <TouchableOpacity style={styles.editProfileButton}>
                    <Text style={styles.editProfileButtonText}>แก้ไขโปรไฟล์</Text>
                </TouchableOpacity>
                <View style={styles.statsContainer}>
    <View style={styles.statsItem}>
        <Text style={styles.statsNumber}>500</Text>
        <Text style={styles.statsLabel}>Followers</Text>
    </View>

    <View style={styles.statsDivider} />

    <View style={styles.statsItem}>
        <Text style={styles.statsNumber}>200</Text>
        <Text style={styles.statsLabel}>Follower</Text>
    </View>

    <View style={styles.statsDivider} />

    <View style={styles.statsItem}>
        <Text style={styles.statsNumber}>1,000</Text>
        <Text style={styles.statsLabel}>Like</Text>
    </View>
</View>
            </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000',alignItems: 'flex-start',left:'40',bottom:'20'}}>Post</Text>
            {/* ส่วนโพสต์ */}
            <ScrollView style={styles.postContainer}>
                <View style={styles.postItem}>
                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>ข้าวผัดกุ้ง</Text>
                        <Text style={styles.postDescription}>ข้าวผัดกุ้งสำหรับข้าวผัดเลิฟเว่อออ</Text>
                        <View style={styles.postAuthor}>
                            <Image source={require('../assets/tomato.png')} style={styles.postAuthorImage} />
                            <Text style={styles.postAuthorName}>น้องมะเขือ</Text>
                            {/* แสดง "เชฟฝึกหัด" หลังชื่อในโพสต์ */}
                            <View style={styles.postBadge}>
                                <Text style={styles.postBadgeText}>เชฟฝึกหัด</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../assets/khaopad.jpg')} style={styles.postImage} />
                </View>
                

                <View style={styles.postItem}>
                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>กุ้งดองแซลมอนดอง</Text>
                        <Text style={styles.postDescription}>ของดีมากค่ะ จะมาแนะนำสูตรป่าตอง</Text>
                        <View style={styles.postAuthor}>
                            <Image source={require('../assets/tomato.png')} style={styles.postAuthorImage} />
                            <Text style={styles.postAuthorName}>น้องมะเขือ</Text>
                            {/* แสดง "เชฟฝึกหัด" หลังชื่อในโพสต์ */}
                            <View style={styles.postBadge}>
                                <Text style={styles.postBadgeText}>เชฟฝึกหัด</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../assets/salmon.png')} style={styles.postImage} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F1F1',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerLeft: {
      width: 30,
      alignItems: 'center',
  },
  headerRight: {
      width: 30,
      alignItems: 'center',
  },
    headerTitle: {
        fontSize: 16, // ปรับขนาด font
        fontWeight: 'bold',
    },
    headerIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    profileContainer: {
        alignItems: 'center',
        padding: 20,
    },
    profileBadgeTop: {
        backgroundColor: '#C5E496',
        color: '#333',
        fontSize: 12, // ปรับขนาด font
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '25%',
        alignItems: 'center',
    },
    profileBadgeTopText: {
        color: '#333',
        fontSize: 12, // ปรับขนาด font
    },
    profileNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileName: {
        fontSize: 20, // ปรับขนาด font
        fontWeight: 'bold',
        marginRight: 8,
    },

    profileImage: {
        width: 180,
        height: 170,
        borderRadius: 60,
        marginBottom: 10,
    },
    profileDescription: {
        fontSize: 14, // ปรับขนาด font
        color: '#666',
        marginTop: 5,
    },
    editProfileButton: {
        backgroundColor: '#EBE4E0',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%', 

    },
    editProfileButtonText: {
        color: '#000',
        fontSize: 14, // ปรับขนาด font
        fontWeight: 'bold',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
  },
  
  statsItem: {
      alignItems: 'center',
      flex: 1,
  },
  
  statsDivider: {
      width: 1,
      height: 30,
      backgroundColor: '#ccc',
  },
  
    statsNumber: {
        fontSize: 16, // ปรับขนาด font
        fontWeight: 'bold',
    },
    statsLabel: {
        fontSize: 12, // ปรับขนาด font
        color: '#666',
    },
    postContainer: {
        width: '100%',
        padding: 30,
        flex: 1,
        
    },
    postItem: {
      flexDirection: 'row',
      paddingLeft: 16,
      paddingVertical: 0,
      height: 150, // 👈 ความสูงชัดเจนเพื่อให้ภาพ stretch ได้
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      alignItems: 'center',
      marginBottom: 14,
      borderRadius: 12,
      overflow: 'hidden', // เพื่อให้ภาพไม่ล้นเกิน borderRadius
  },  
  postImage: {
    width: 150,
    height: '100%',      // ทำให้ภาพยืดตามความสูงของ postItem
    borderRadius: 12, // มุมมนด้านขวาล่าง
    resizeMode: 'cover',  // ครอบคลุมพื้นที่ภาพ
    alignSelf: 'stretch', // ยืดเต็มความสูงของ parent
    },
    postContent: {
        flex: 1,
    },
    postTitle: {
        fontSize: 20, // ปรับขนาด font
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 10,
    },
    postDescription: {
        fontSize: 11, // ปรับขนาด font
        color: '#666',
        marginBottom: 50,
        marginLeft: 10,
    },
    postAuthor: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postAuthorImage: {
        width: 24, // ปรับขนาด image
        height: 24, // ปรับขนาด image
        borderRadius: 12, // ปรับขนาด borderRadius
        marginRight: 5,
    },
    postAuthorName: {
        fontSize: 12, // ปรับขนาด font
        color: '#666',
    },
    // สไตล์สำหรับป้าย "เชฟฝึกหัด" หลังชื่อในโพสต์
    postBadge: {
        backgroundColor: '#C5E496',
        color: '#333',
        fontSize: 10, // ปรับขนาด font
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 8,
        fontWeight: 'bold',
        marginLeft: 5, // เพิ่มระยะห่างจากชื่อ
    },
    postBadgeText: {
        color: '#333',
        fontSize: 10, // ปรับขนาด font
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    navItem: {
        alignItems: 'center',
    },
    navIcon: {
        width: 20, // ปรับขนาด icon
        height: 20, // ปรับขนาด icon
        resizeMode: 'contain',
    },
    navLabel: {
        fontSize: 10, // ปรับขนาด font
        color: '#666',
    },
    activeNavLabel: {
        color: '#ff9800',
    },
});

export default MyProfile;