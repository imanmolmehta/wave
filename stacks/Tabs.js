import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import ExploreStack from "./ExploreStack";
import PlaylistStack from "./PlaylistStack";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { COLORS, SIZES } from '../config/constants'

const Stack = createBottomTabNavigator();

const BottomNav = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: 'hidden',
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 0,
        },
        tabBarLabelStyle: {
            fontFamily: 'montserrat-semibold',
            fontSize: SIZES.base + 4,
            marginTop: -10
        },
        tabBarActiveTintColor: COLORS.fonts_primary_color,
        tabBarInactiveTintColor: COLORS.fonts_secondary_color
    }}>
        <Stack.Screen
            name="HomeTab"
            component={HomeStack}
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" size={SIZES.h1} color={color} />
                ),
                tabBarLabel: 'Home',
            }}
        />
        <Stack.Screen
            name="ExploreTab"
            component={ExploreStack}
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialIcons name="explore" size={SIZES.h1} color={color} />
                ),
                tabBarLabel: 'Explore',
            }}
        />
        <Stack.Screen
            name="PlaylistTab"
            component={PlaylistStack}
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialIcons name="menu" size={SIZES.h1} color={color} />
                ),
                tabBarLabel: 'Playlist',
            }}
        />
    </Stack.Navigator>
)

export default BottomNav;