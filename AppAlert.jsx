import React from "react";

import { View, Alert, Text, StatusBar, Button } from "react-native";

export default function App() {
    return (
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, backgroundColor: 'green', flex: 1 }}>
            <StatusBar />
            <Button title="Press 1" onPress={() => Alert.alert("Invalid Data")} />
            <Button title="Press 2" onPress={() => Alert.alert("Invalid Data", "DoB incorrect!")} />
            <Button title="Press 3" onPress={() => Alert.alert("Invalid Data", "DoB incorrect!",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log("Cancelled")
                    },
                    {
                        text: 'OK',
                        onPress: () => console.log("OK")
                    }
                ])}
            />
        </View>
    );
}