import React from 'react';
import { View, ScrollView, Text, Image, Button } from 'react-native';
import logoImage from './assets/adaptive-icon.png'

export default function App() {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'plum' }}>
      <ScrollView>
        <Image source={{ uri: 'https://picsum.photos/500' }} style={{ height: 300, width: 'auto' }} />
        <Text>
          The standard Lorem Ipsum passage, used since the 1500s
        </Text>
        <Button title='Press' color='green'  onPress={()=>console.log("Pressed ")}/>
      </ScrollView>
    </View>
  );
}
