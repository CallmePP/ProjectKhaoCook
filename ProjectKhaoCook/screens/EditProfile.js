import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const EditProfileScreen = () => {
    const [name, setName] = useState('น้องมะเขือเทศ');
    const [email, setEmail] = useState('eggplant001@test.com');
    const [bio, setBio] = useState('พี่เริ่มหัดทำอาหารค่ะ');
    const profileImage = require('./assets/tomato.png'); // Replace with your actual image path

    return (
        <View style={styles.container}>
            {/* ส่วนหัว */}
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>แก้ไขโปรไฟล์</Text>

            {/* รูปโปรไฟล์ */}
            <View style={styles.profileImageContainer}>
                <Image source={profileImage} style={styles.profileImage} />
                <TouchableOpacity style={styles.changeProfileButton}>
                    <Text style={styles.changeProfileButtonText}>เปลี่ยนรูปโปรไฟล์</Text>
                </TouchableOpacity>
            </View>

            {/* ฟอร์มแก้ไข */}
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>ชื่อ</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>อีเมล</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>แนะนำตัว</Text>
                    <TextInput
                        style={styles.bioInput}
                        value={bio}
                        onChangeText={setBio}
                        multiline
                        textAlignVertical="top"
                    />
                </View>
            </View>

            {/* ปุ่มอัปเดต */}
            <TouchableOpacity style={styles.updateButton}>
                <Text style={styles.updateButtonText}>อัปเดต</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    backButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
        alignSelf: 'center',
    },
    profileImageContainer: {
        alignItems: 'center',
        marginVertical: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    changeProfileButton: {
        marginTop: 15,
        backgroundColor: '#EBE4E0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    changeProfileButtonText: {
        fontSize: 16,
        color: '#333',
    },
    formContainer: {
        marginBottom: 30,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
        fontSize: 16,
        color: '#333',
    },
    bioInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        color: '#333',
        minHeight: 80,
        textAlignVertical: 'top',
    },
    updateButton: {
        backgroundColor: '#ffe0b2', // สีส้มอ่อน
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 22, // ปรับตำแหน่งให้ชิดขอบมากขึ้น
        right: 20,
        minWidth: 100, // กำหนดความกว้างขั้นต่ำ
    },
    updateButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00',
    },
});

export default EditProfileScreen;