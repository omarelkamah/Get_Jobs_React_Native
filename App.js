import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
