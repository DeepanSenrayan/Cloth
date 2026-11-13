import { useFonts } from 'expo-font';
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "outfit" : require('./../assets/font/Outfit-Regular.ttf'),
    "outfit-medium" : require('./../assets/font/Outfit-Medium.ttf'),
    "outfit-bold" : require('./../assets/font/Outfit-Bold.ttf'),
  })  
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
