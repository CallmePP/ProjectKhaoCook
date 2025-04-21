import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Profile</Text>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})