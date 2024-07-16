import { View, Text, StyleSheet, StatusBar } from "react-native";

import React from 'react'

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'plum',
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        // fontFamily: 'romans'
    }
})