import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import AuthProvider from './store/AuthContext'
const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})