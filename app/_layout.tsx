import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { use, useEffect } from "react";

import './global.css';
import useAuthStore from "@/store/auth.store";


export default function RootLayout() {
  const {isLoading, fetchAuthenticatedUser} = useAuthStore();

  const [fonstLoaded, error] = useFonts({
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "QuickSand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  });

  useEffect(() => {
    if(error) throw error;
    if(fonstLoaded) SplashScreen.hideAsync();
  }, [fonstLoaded, error]);

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);

  if(!fonstLoaded || isLoading) return null;

  return <Stack screenOptions={{ headerShown: false }}/>;
}
