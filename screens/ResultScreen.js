import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const ResultScreen = ({ route, navigation }) => {
  const { menu } = route.params;
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      {/* โลโก้ด้านบน */}
      <Text style={styles.logo}>
        Khao<Text style={{ color: 'gold' }}>Cook</Text>
      </Text>

      {/* แอนิเมชันพลุ */}
      <LottieView
        ref={animationRef}
        source={require('../assets/animetion/Animation - 1745278121619.json')}
        autoPlay
        loop={true}
        style={styles.lottie}
      />

      <Text style={styles.header}>เมนูที่คุณได้คือ...</Text>
      <View style={styles.card}>
        <Image source={menu.image} style={styles.image} />
        <Text style={styles.title}>{menu.title}</Text>
        <Text style={styles.desc}>{menu.desc}</Text>
      </View>
      <Image source={require('../assets/Ellipse 4.png')} style={styles.shadowimage} />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>RANDOM AGAIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    position: 'absolute',
    top: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d36c00',
    alignSelf: 'center',
  },
  lottie: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: 0,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
    color: '#00000096',
    bottom: 25, 
  },
  card: {
    width: 262.55,
    height: 379.63,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 17,
    borderWidth: 5,
    borderColor: '#ffebd2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 160,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  desc: {
    fontSize: 13,
    color: '#716D6D',
    textAlign: 'center',
  },
  shadowimage: {
    top: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginTop: 30,
    backgroundColor: '#d36c00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    top: 65,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
