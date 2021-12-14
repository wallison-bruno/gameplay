import React from 'react';
import { Signin } from './src/screens/Signin';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { Gradient } from './src/components/gradient';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Gradient>
      <Signin />
    </Gradient>
  );
}


