import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'

export default function Box() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.balck]}>
                <Text style={styles.text}>Hello</Text>
            </View>
            <View style={[styles.box, styles.red]}>
                <Text style={styles.text}>Hello</Text>
            </View>
            <View style={[styles.box, styles.green]}>
                <Text style={styles.text}>Hello</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 8,
        width: 'auto',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    box: {
        // height: 150,
        flex: 1,
        width: '100%',
        marginBottom: 5,
        borderRadius: 5
    },
    balck: {
        backgroundColor: 'black',

    },
    red: {
        backgroundColor: 'red',

    },
    green: {
        backgroundColor: 'green'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
})