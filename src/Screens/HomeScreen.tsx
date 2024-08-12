import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from '../navigation/AuthStack'
import RootNavigator from '../navigation/RootNavigator'


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'black', fontWeight: "800" }}>Hoşgeldiniz!</Text>
      <Text style={{ fontSize: 18, }}>Başarıyla Giriş Yaptınız</Text>

    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})