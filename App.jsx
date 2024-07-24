import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'

export default function App() {

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>Hello World</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        backgroundColor: 'plum'
    },
    container: {
        backgroundColor: 'plum',
        flex: 1,
    },
    box: {
        padding: 10
    },
    text: {
        ...Platform.select({
            ios: {
                fontSize: 24,
            },
            android: {
                color: 'blue',
                fontStyle: 'italic',
                fontSize: 30
            }
        }),
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
