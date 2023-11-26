import React from "react";
import { View, Text } from "react-native";

export default function SearchPage({ navigation }: any) {
  return (
    <View>
      <Text>Search Page</Text>
      <Text onPress={() => navigation.navigate("History")}>Histórico...</Text>
    </View>
  );
}
