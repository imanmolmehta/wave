import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Import components */
// import HomeScreen from '../screens/HomeScreen';
import Player from '../screens/Player';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="HomeScreen">
        {/* <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false
            }}
        /> */}
        <Stack.Screen
            name="Player"
            component={Player}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
)

export default HomeStack;