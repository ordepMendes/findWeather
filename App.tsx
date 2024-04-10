import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import useLoadFonts from './src/hooks/useLoadFonts';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  if(!fontsLoaded){
    return null;
  }
    
  
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{fontFamily: 'Overpass'}}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
