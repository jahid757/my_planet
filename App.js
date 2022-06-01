import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/theme/colors";
import { useFonts } from "expo-font";
import Text from "./src/components/text/text";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

const stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Font is Loading...</Text>;
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="Details" component={Details} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    justifyContent: "center",
  },
});
