import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, useWindowDimensions } from 'react-native';

export default function App() {
   
    const width = useWindowDimensions().width
    const height = useWindowDimensions().height

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="gray" barStyle="light-content" />
            <View
                style={[
                    styles.box,
                    {
                        width: width > 500 ? '70%' : '90%',
                        height: height > 600 ? '60%' : '90%'
                    }
                ]}
            >
                <Text style={{ fontSize: width > 500 ? 70 : 24 }}>Welcome!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
