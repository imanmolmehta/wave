import React from 'react'
import { Text, View, Image, Platform } from 'react-native'
import { COLORS } from '../config/constants'
import styles from '../global-styles'
import ScreenLayout from './ScreenLayout'

const HomeScreen = () => {
    return (
        <ScreenLayout>
            {/* Header */}
            <View style={styles.header}>
                <View >
                    <Text style={styles.headerText}>Welcome Back</Text>
                    <Text style={styles.headerText}>John</Text>
                </View>                
                <View style={styles.profile_badge}>
                    <Image
                        source={require('../assets/images/avatar.png')}
                        resizeMode="center"
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />
                </View>
            </View>
        </ScreenLayout>
    )
}

export default HomeScreen