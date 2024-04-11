import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Overpass_400Regular, Overpass_600SemiBold } from '@expo-google-fonts/overpass';

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Overpass': Overpass_400Regular,
        'Overpass_600': Overpass_600SemiBold
      });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return { fontsLoaded, onLayoutRootView };
}

export default useLoadFonts;