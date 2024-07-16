import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import logoImage from './assets/adaptive-icon.png'

export default function App() {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'plum' }}>
      <ScrollView>
        <Image source={{ uri: 'https://picsum.photos/500' }} style={{ height: 400, width: 'auto' }} />
        <Text>
          The standard Lorem Ipsum passage, used since the 1500s
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


        </Text>
        <Image source={{ uri: 'https://picsum.photos/500' }} style={{ height: 400, width: 'auto' }} />
      </ScrollView>
    </View>
  );
}
