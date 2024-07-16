import { View, Text } from "react-native-web";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: "10px" }}>
      <View style={{ height: 200, width: "100%", backgroundColor: 'blue' }}>
        <Text style={{ color: "white" }}>
          <Text style={{ color: "red" }}>Hello</Text> Wafula
        </Text>
      </View>
    </View>
  );
}