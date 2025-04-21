import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SaveScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SaveScreen</Text>
      </View>
  )
}

export default SaveScreen

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