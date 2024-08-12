import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../../store/AuthContext';

const OutButton = () => {
    const {logout} = useContext(AuthContext);

const handleLogout = () =>{
    logout();
}
    return (
        <View>
            <TouchableOpacity onPress={()=>handleLogout()}>
                <Feather name="log-out" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default OutButton

const styles = StyleSheet.create({})