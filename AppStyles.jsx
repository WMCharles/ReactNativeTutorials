import { View, Text, StyleSheet, StatusBar } from "react-native";

import React from 'react'

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={[styles.green, styles.box, styles.boxShadow]}>
                <Text style={[styles.title, styles.textColor]}>Green Box</Text>
            </View>
            <View style={[styles.blue, styles.box, styles.adroidShadow]}>
                <Text style={[styles.title, styles.textColor]}>Blue Box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: 'gray',
        shadowOffset: { width: 6, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    textColor: {
        color: 'white'
    },
    adroidShadow: {
        shadowColor: "red",
        elevation: 10
    },
    container: {
        backgroundColor: 'plum',
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        // fontFamily: 'romans'
    },
    box: {
        height: 100,
        width: 'auto',
        marginBottom: 5,
        // backgroundColor:'yellow',
        borderRadius: 5,
        padding: 10,

    },
    green: {
        backgroundColor: 'green',
    },
    blue: {
        backgroundColor: 'blue'
    }
})