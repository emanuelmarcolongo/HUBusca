import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HistoryPage from "./src/pages/history";
import SearchPage from "./src/pages/search";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchPage}></Tab.Screen>
      <Tab.Screen name="History" component={HistoryPage}></Tab.Screen>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Tabs} />
        <Stack.Screen name="History" component={HistoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
