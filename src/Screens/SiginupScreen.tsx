import { StyleSheet, Text, View, Dimensions, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CostumButton from '../Component/CostumButton';


const { height, width } = Dimensions.get('window');
const SiginupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      Alert.alert("Hata", "Geçerli bir e-posta adresi girin.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Hata", "Şifre en az 6 karakter olmalı.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Hata", "Şifreler eşleşmiyor.");
      return;
    }
    Alert.alert("Başarılı", "Kayıt başarılı.");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.textDesign}>E-Mail</Text>
        <TextInput style={styles.textınput}
          placeholder='E-mail gir'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none' />
        <Text style={styles.textDesign}>Şifre</Text>
        <TextInput
          style={styles.textınput}
          placeholder='Şifre gir'
          value={password}
          onChangeText={setPassword}
          secureTextEntry />
        <Text style={styles.textDesign}>Şifre doğrula</Text>
        <TextInput style={styles.textınput}
          placeholder='Şifreyi doğrula'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry />
        <View style={styles.costumView} >
          <CostumButton
            name={"Kaydol"}
            onPress={handleSignup}
            backgroundColor={"#399918"}
            borderColor={"#1A5319"}
          />
          <CostumButton
            name={"Giriş yap"}
            onPress={() => navigation.navigate("Login")}
            backgroundColor={"purple"}
            borderColor={"purple"}
          />
        </View>
      </View>
    </View>
  )
}

export default SiginupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    margin: 50,
  },
  innercontainer: {
    backgroundColor: "purple",
    width: width * 0.88,
    height: height * 0.6,
    borderRadius: 25,
  },
  textınput: {
    borderWidth: 2,
    borderRadius: 28,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "pink",

  },
  textDesign: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    color: "white",
  },
  costumView: {
    flex: 1,
    width: width * 0.8,
    marginLeft: 20,
    marginTop: 20,
  },
})