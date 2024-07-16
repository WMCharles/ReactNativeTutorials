import React from 'react'
import { View, Text } from 'react-native'

export default function Greet({ name }) {
    return (
        <View>
            <Text style={{ color: 'white' }}>Greetings, {name}</Text>
        </View>
    )
}
