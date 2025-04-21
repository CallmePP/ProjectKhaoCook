import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followerCount, setFollowerCount] = useState(2500);

    const handleFollowButtonPress = () => {
        setIsFollowing(!isFollowing);
        if (!isFollowing) {
            setFollowerCount(followerCount + 1);
        } else {
            setFollowerCount(followerCount - 1);
        }
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
                <View style={styles.postItem}>
                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>สเต็กแซลมอน</Text>
                        <Text style={styles.postDescription}>แซลมอนเนื้อนุ่มละมุนลิ้น ผมนี่อยากทำอะไรอร่อยๆ ก็ทำนะ</Text>
                        <View style={styles.postAuthor}>
                            <Image source={require('./assets/cat.png')} style={styles.postAuthorImage} />
                            <Text style={styles.postAuthorName}>เชฟแมว</Text>
                            <View style={styles.chefProBadgeSmall}>
                                <Text style={styles.chefProBadgeTextSmall}>เชฟมือโปร</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('./assets/salmon.png')} style={styles.postImage} />
                </View>

                <View style={styles.postItem}>
                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>ปลาทับทิมสามรส</Text>
                        <Text style={styles.postDescription}>เมนูที่เหมาะกับทุกคนในครอบครัว</Text>
                        <View style={styles.postAuthor}>
                            <Image source={require('./assets/cat.png')} style={styles.postAuthorImage} />
                            <Text style={styles.postAuthorName}>เชฟแมว</Text>
                            <View style={styles.chefProBadgeSmall}>
                                <Text style={styles.chefProBadgeTextSmall}>เชฟมือโปร</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('./assets/fish.png')} style={styles.postImage} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
    postItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    postImage: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginLeft: 16,
    },
    postContent: {
        flex: 1,
        marginRight: 16,
    },
    postTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    postDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    postAuthor: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postAuthorImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 5,
    },
    postAuthorName: {
        fontSize: 12,
        color: '#666',
    },
    chefProBadgeSmall: {
        backgroundColor: '#E4AE03',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 8,
        marginLeft: 5,
    },
    chefProBadgeTextSmall: {
        color: '#000',
        fontSize: 8,
        fontWeight: 'bold',
    },
});

export default App;