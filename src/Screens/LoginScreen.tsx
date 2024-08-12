import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import CostumButton from "../Component/CostumButton";
import { signInUser } from '../firebase/creatUser';
import { AuthContext } from '../../store/AuthContext';

const LoginScreen = ({ navigation }) => {
    const { setIsAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const res = await signInUser(email, password);
            const idToken = res.idToken;
            setIsAuth(idToken);
        } catch (error) {
            setError("Giriş başarısız. E-mail veya şifre hatalı.");
            // Alert.alert("Hata", "Giriş başarısız. E-mail veya şifre hatalı.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Mailini gir'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                />
                <Text style={styles.label}>Şifre</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Şifeni gir'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <View style={{ width: "95%", marginTop: 10 }}>
                    <CostumButton
                        name={"Giriş Yap"}
                        backgroundColor={"green"}
                        borderColor={"#508D4E"}
                        onPress={handleLogin}
                    />
                    <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Signup')} >
                        <Text style={{ color: "white" }}>Yeni Kullanıcı Oluştur</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    innercontainer: {
        width: "90%",
        backgroundColor: "purple",
        marginTop: 50,
        borderRadius: 20,
        padding: 20,
    },
    textInput: {
        width: "96%",
        borderWidth: 1,
        padding: 14,
        marginVertical: 10,
        borderRadius: 25,
        backgroundColor: "pink",
    },
    label: {
        fontSize: 18,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    },
    touchable: {
        margin: 15,
        alignItems: "center",
    }
});
