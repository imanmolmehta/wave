import React from "react";
import { Header as Appbar } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from "../config/constants";

const Header = () => {
    return (
        <Appbar
            leftComponent={
                <MaterialIcons name="chevron-left" size={24} color={COLORS.font} />
            }
            containerStyle={{
                backgroundColor: COLORS.transparent,
                borderBottomWidth: 0
            }}
            barStyle="light-content"
            rightComponent={
                <MaterialIcons name="more-horiz" size={24} color={COLORS.font} />
            }
        />
    )
}

export default Header
