import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useState } from 'react'

export default function App({ name, borderColor, backgroundColor, onPress,}) {
    const [click, setClick] = useState(false)
    return (
        <TouchableOpacity
            onPressIn={() => setClick(true)}
            onPressOut={() => setClick(false)}
            onPress={onPress}
            style={[styles.touchDesign, { borderColor: borderColor }, { backgroundColor: backgroundColor }, click && { borderBottomWidth: 2, marginTop: 6 }]}>
            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchDesign: {
        padding: 10,
        borderRadius: 22,
        borderWidth: 2,
        borderBottomWidth: 8,
        justifyContent: "center",
        alignItems: "center",

    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 19,
        color: "white",
    },
})