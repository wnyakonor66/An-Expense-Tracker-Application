import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigation from "./src/navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
