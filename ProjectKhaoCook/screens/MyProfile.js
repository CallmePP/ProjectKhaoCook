import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // นำเข้า hook สำหรับการนำทาง

const MyProfileScreen = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followerCount, setFollowerCount] = useState(2500);
    const navigation = useNavigation(); // เรียกใช้งาน hook

    const handleFollowButtonPress = () => {
        setIsFollowing(!isFollowing);
        if (!isFollowing) {
            setFollowerCount(followerCount + 1);
        } else {
            setFollowerCount(followerCount - 1);
        }
    };

    const handleEditProfilePress = () => {
        navigation.navigate('EditProfile'); // นำทางไปยังหน้า EditProfile
    };

    return (
        <View style={styles.container}>
            {/* ส่วนหัว */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('./assets/arrow_back.png')} style={styles.headerIcon} />
                </View>
                <Text style={styles.headerTitle}>Account</Text>
                <View style={styles.headerRight}>
                    <Image source={require('./assets/notification.png')} style={styles.headerIcon} />
                </View>
            </View>

            {/* ส่วนโปรไฟล์ */}
            <View style={styles.profileContainer}>
                <View style={styles.chefProBadge}>
                    <Text style={styles.chefProBadgeText}>เชฟมือโปร</Text>
                </View>
                <Image source={require('./assets/cat.png')} style={styles.profileImage} />
                <Text style={styles.profileName}>เชฟ แมว</Text>
                <Text style={styles.profileDescription}>ทำงานหนักเพื่อกินเนื้อ</Text>
                <TouchableOpacity
                    style={[
                        styles.followButton,
                        isFollowing ? styles.unfollowButton : null,
                    ]}
                    onPress={handleFollowButtonPress}
                >
                    <Text style={styles.followButtonText}>
                        {isFollowing ? 'Unfollow' : 'Follow'}
                    </Text>
                </TouchableOpacity>

                {/* ปุ่มแก้ไขโปรไฟล์ */}
                <TouchableOpacity style={styles.changeProfileButton} onPress={handleEditProfilePress}>
                    <Text style={styles.changeProfileButtonText}>เปลี่ยนรูปโปรไฟล์</Text>
                </TouchableOpacity>

                <View style={styles.statsContainer}>
                    <View style={styles.statsItem}>
                        <Text style={styles.statsNumber}>40</Text>
                        <Text style={styles.statsLabel}>Post</Text>
                    </View>
                    <View style={styles.statsItem}>
                        <Text style={styles.statsNumber}>{followerCount}</Text>
                        <Text style={styles.statsLabel}>Followers</Text>
                    </View>
                    <View style={styles.statsItem}>
                        <Text style={styles.statsNumber}>6,000</Text>
                        <Text style={styles.statsLabel}>Like</Text>
                    </View>
                </View>
            </View>

            {/* ส่วนโพสต์ */}
            <Text style={styles.postSectionTitle}>Post</Text>
            <ScrollView style={styles.postContainer}>
                {/* โพสต์ต่างๆ */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    // สไตล์เดิมของคุณ
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerLeft: {
        width: 30,
        height: 30,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerRight: {
        width: 30,
        height: 30,
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
    chefProBadge: {
        backgroundColor: '#E4AE03',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        marginBottom: 10,
    },
    chefProBadgeText: {
        color: '#000',
        fontSize: 10,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 180,
        height: 170,
        borderRadius: 60,
        marginBottom: 8,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    profileDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    followButton: {
        backgroundColor: '#FFC9AA',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginBottom: 10,
    },
    unfollowButton: {
        backgroundColor: '#6c757d',
    },
    followButtonText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 16,
    },
    statsItem: {
        alignItems: 'center',
    },
    statsNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statsLabel: {
        fontSize: 12,
        color: '#666',
    },
    postSectionTitle: {
        padding: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    postContainer: {
        flex: 1,
    },
    changeProfileButton: { // สไตล์ของปุ่ม "เปลี่ยนรูปโปรไฟล์" ซึ่งเราจะใช้เป็นปุ่ม "แก้ไขโปรไฟล์"
        marginTop: 15,
        backgroundColor: '#EBE4E0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    changeProfileButtonText: { // สไตล์ข้อความในปุ่ม "เปลี่ยนรูปโปรไฟล์"
        fontSize: 16,
        color: '#333',
    },
});

export default MyProfileScreen;