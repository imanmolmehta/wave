import React from "react";
import {useDispatch} from 'react-redux'
import { Header as Appbar } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from "../config/constants";
import { TouchableOpacity } from "react-native";

const Header = ({onPress}) => {
    const dispatch = useDispatch();
    return (
        <>
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
                    <TouchableOpacity onPress={onPress}>
                        <MaterialIcons name="more-horiz" size={24} color={COLORS.font} />
                    </TouchableOpacity>
                }
            />
        </>
    )
}

export default Header
