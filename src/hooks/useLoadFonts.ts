import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Overpass_400Regular } from '@expo-google-fonts/overpass';

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Overpass': Overpass_400Regular
      });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return { fontsLoaded, onLayoutRootView };
}

export default useLoadFonts;