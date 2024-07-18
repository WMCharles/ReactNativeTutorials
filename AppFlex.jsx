import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import Box from './components/Box'

export default function App() {
    return (
        // <View style={styles.xx}>
            <Box />
        // </View>
    )
}

const styles = StyleSheet.create({
    xx: {
        backgroundColor: "gray",
        padding: 7
    }
})
