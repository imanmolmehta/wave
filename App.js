import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './stacks/Tabs'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {

  const [fontsLoaded] = useFonts({
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf')
  });

  if(!fontsLoaded) {
    return (
      <AppLoading />
    )
  }
    
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle='light-content' />
        <Tabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

