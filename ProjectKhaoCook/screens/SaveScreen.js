import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
    const recipes = [
        {
            title: 'สเต็กแซลมอน',
            description: 'แซลมอนนุ่มฉ่ำ หอมกลิ่นเครื่องเทศ ทำง่าย อร่อยจนต้องทำซ้ำเลย',
            image: require('./assets/salmon.png'),
            author: 'เชฟแมว',
            authorImage: require('./assets/cat.png'),
            chefTitle: 'เชฟมือโปร',
        },
        {
            title: 'ไก่ทอดหาดใหญ่',
            description: 'สูตรแบบไม่หมักก็อร่อยได้ ทำง่าย กรอบนอกนุ่มใน',
            image: require('./assets/hatyai_chicken.png'),
            author: 'น้องมะเขือ',
            authorImage: require('./assets/tomato.png'),
            chefTitle: 'มือใหม่หัดทำ',
        },
        {
            title: 'สปาเก็ตตี้กุ้ง',
            description: 'แซ่บถูกปาก ทำง่ายกินกับใครก็อร่อย และอร่อยเพราะทำเองเลยอร่อยมาก',
            image: require('./assets/shrimp_spaghetti.png'),
            author: 'เชฟอันดับหนึ่ง',
            authorImage: require('./assets/ci.png'),
            chefTitle: 'เชฟอันดับหนึ่ง',
        },
    ];

    return (
        <View style={styles.container}>
            {/* ส่วนหัว */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Image source={require('./assets/arrow_back.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    <Text style={{ color: '#FF8C69' }}>Khao</Text>
                    <Text style={{ color: '#FFC300' }}>Cook</Text>
                </Text>
                <View style={{ width: 24 }} /> {/* เพิ่ม View เพื่อจัดตำแหน่ง title ให้อยู่ตรงกลาง */}
            </View>

            {/* ส่วนเนื้อหา */}
            <ScrollView style={styles.content}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>ห้องเก็บสูตร</Text>
                </View>

                <View style={styles.searchBar}>
                    <Image source={require('./assets/search.png')} style={styles.searchIcon} />
                    <TextInput style={styles.searchInput} placeholder="ค้นหา" />
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>บันทึกไว้ 3 สูตร</Text>
                </View>

                {recipes.map((recipe, index) => (
                    <View key={index} style={styles.recipeCard}>
                        <View style={styles.recipeText}>
                            <Text style={styles.recipeTitle}>{recipe.title}</Text>
                            <Text style={styles.recipeDescription}>{recipe.description}</Text>
                            <View style={styles.authorContainer}>
                                {recipe.authorImage ? (
                                    <Image source={recipe.authorImage} style={styles.authorImageStyle} />
                                ) : (
                                    <Image source={require('./assets/author_icon.png')} style={styles.authorIcon} />
                                )}
                                <Text style={styles.authorName}>{recipe.author}</Text>
                                {recipe.chefTitle && (
                                    <View
                                        style={
                                            recipe.chefTitle === 'มือใหม่หัดทำ'
                                                ? styles.chefNewbieBadgeSmall
                                                : styles.chefProBadgeSmall
                                        }>
                                        <Text style={styles.chefProBadgeTextSmall}>{recipe.chefTitle}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                        <Image source={recipe.image} style={styles.recipeImage} />
                    </View>
                ))}
            </ScrollView>

            {/* ส่วนแถบนำทางด้านล่าง */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('./assets/search.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>ค้นหา</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('./assets/save.png')} style={styles.navIconActive} />
                    <Text style={[styles.navLabel, styles.activeNavLabel]}>เก็บสูตร</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('./assets/random.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>สุ่มเมนู</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('./assets/alert.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>แจ้งเตือน</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('./assets/profile.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>โปรไฟล์</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingVertical: 15, // ปรับ padding แนวตั้ง
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row', // จัดเรียงลูกศรและ title ในแนวนอน
        justifyContent: 'space-between', // จัดให้ลูกศรอยู่ซ้ายสุด title อยู่ตรงกลาง และมีพื้นที่ด้านขวาสุด
    },
    backButton: {
        padding: 8, // เพิ่ม padding ให้ปุ่มลูกศร
    },
    backIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: '#333', // ปรับสีลูกศรตามต้องการ
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row', // ทำให้ Text ด้านในเรียงกันในแนวนอน
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        marginTop: 16,
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEE4DA',
        borderRadius: 20,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    searchIcon: {
        width: 18,
        height: 18,
        marginRight: 8,
        tintColor: '#999',
    },
    searchInput: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 14,
        width: '100%',
    },
    recipeCard: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
    },
    recipeText: {
        flex: 1,
        padding: 12,
    },
    recipeTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    recipeDescription: {
        fontSize: 12,
        color: '#666',
        marginBottom: 6,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorIcon: {
        width: 12,
        height: 12,
        marginRight: 4,
        tintColor: '#999',
    },
    authorImageStyle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 4,
    },
    authorName: {
        fontSize: 10,
        color: '#999',
    },
    recipeImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 0,
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
        width: 22,
        height: 22,
        resizeMode: 'contain',
        tintColor: '#666',
    },
    navIconActive: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        tintColor: '#ff9800',
    },
    navLabel: {
        fontSize: 10,
        color: '#666',
    },
    activeNavLabel: {
        color: '#ff9800',
    },
    chefProBadgeSmall: {
        backgroundColor: '#FFC300',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 8,
        marginLeft: 4,
    },
    chefProBadgeTextSmall: {
        color: '#000',
        fontSize: 8,
        fontWeight: 'bold',
    },
    chefNewbieBadgeSmall: {
        backgroundColor: '#C5E496',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 8,
        marginLeft: 4,
    },
    chefNewbieBadgeTextSmall: {
        color: '#000',
        fontSize: 8,
        fontWeight: 'bold',
    },
});

export default App;