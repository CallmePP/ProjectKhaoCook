import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const CookingScreen = () => {
  return (
    <ImageBackground 
      source={require('./assets/Photowelcome.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>It's Cooking Time</Text>
        <Text style={styles.subtitle}>ค้นหา แชร์ และบันทึกสูตรที่คุณต้องการได้ในที่เดียว</Text>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Get Started Pressed')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    top: 40, 
    left: 20, 
    padding: 20,
    textAlign: 'left', 
  },
  title: {
    fontSize: 64,
    fontWeight: 'medium',
    color: '#3E2723',
    marginBottom: 10, 
  },
  subtitle: {
    fontSize: 16,
    color: '#3E2723',
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#FF8A65', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: 241,
    height: 56
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'medium',
    width: 217,
    height: 23,
    alignSelf: 'center'

  },
});

export default CookingScreen;
