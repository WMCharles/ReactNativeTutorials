import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Greet from './components/Greet'

export default function App() {
    return (
        <View style={{ paddingTop: 40, paddingHorizontal: 20, backgroundColor: 'black', flex: 1 }}>
            <StatusBar />
            <Greet name={"Charles"} />
            <Greet name={"Wafula"} />
            <Greet name={"Masinde"} />
        </View>
    )
}
