import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Profile = ({ navigation }) => {
  const handleLogout = () => {
    // นำทางไปยังหน้า LoginScreen เมื่อกดปุ่ม Log out
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d36c00',alignSelf:'center', }}>
                          Khao<Text style={{ color: 'gold' }}>Cook</Text>
      </Text>
      <Text style={styles.text}>My Profile</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1',
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff5733',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
