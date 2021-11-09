import React from 'react'
import { Text, View } from 'react-native'
import styles from '../global-styles'
import ScreenLayout from './ScreenLayout'
import { Avatar } from 'react-native-paper'

const HomeScreen = () => {
    return (
        <ScreenLayout>
            {/* Header */}
            <View style={styles.header}>
                <View >
                    <Text style={styles.headerText}>Welcome Back</Text>
                    <Text style={styles.headerText}>John</Text>
                </View>
                <Avatar.Image
                    source={require('../assets/images/avatar.png')}
                    size={50}
                />
            </View>
        </ScreenLayout>
    )
}

export default HomeScreen