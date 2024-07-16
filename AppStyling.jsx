import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.text}>Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop:20
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})