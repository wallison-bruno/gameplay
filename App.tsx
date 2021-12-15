import React from 'react';
import { Signin } from './src/screens/Signin';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani'
import { Gradient } from './src/components/gradient';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Rajdhani_700Bold,
    Inter_500Medium,
    Rajdhani_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Gradient>
      <Home />
    </Gradient>
  );
}


