import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Import components */
import PlaylistScreen from '../screens/PlaylistScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="PlaylistScreen">
        <Stack.Screen
            name="PlaylistScreen"
            component={PlaylistScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
)

export default HomeStack;