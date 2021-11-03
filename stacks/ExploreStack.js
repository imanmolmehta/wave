import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Import components */
import ExploreScreen from '../screens/ExploreScreen';

const Stack = createNativeStackNavigator();

const ExploreStack = () => (
    <Stack.Navigator initialRouteName="ExploreScreen">
        <Stack.Screen
            name="ExploreScreen"
            component={ExploreScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
)

export default ExploreStack;