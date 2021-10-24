import React from 'react';
import { useFonts,
  Roboto_400Regular, 
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar'

import { Home } from './src/screens/Home';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontLoaded) {
    return <AppLoading />
  }

  return (
    <>
    <StatusBar style='light' />
    <Home />
    </>
  );
}


