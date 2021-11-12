import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './stacks/Tabs'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper'
import { store } from './store'

export default function App() {

  const [fontsLoaded] = useFonts({
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf')
  });

  if(!fontsLoaded) {
    return (
      <>
      <AppLoading />
      </>
    )
  }
    
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar barStyle='light-content' />
          <Tabs />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

