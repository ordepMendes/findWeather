import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import useLoadFonts from "./src/hooks/useLoadFonts";
import WelcomeScreen from "./src/screens/WelcomeScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <WelcomeScreen />
    </View>
  );
}
