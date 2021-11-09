import React from 'react'
import { SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../global-styles'
import { COLORS } from '../config/constants'

const ScreenLayout = (props) => {
    return (
        <SafeAreaView style={{ ...styles.container, ...props.style }} {...props}>
            <LinearGradient style={styles.screens} colors={COLORS.app_background}>
                {props.children}
            </LinearGradient>
        </SafeAreaView>
    )
}

export default ScreenLayout
