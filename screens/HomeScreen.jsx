import React from 'react'
import { Text, View } from 'react-native'
import styles from '../global-styles'
import ScreenLayout from './ScreenLayout'

const HomeScreen = () => {
    return (
        <ScreenLayout>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.greeting}>
                    <Text style={styles.headerText}>Welcome Back</Text>
                    <Text style={styles.headerText}>John</Text>
                </View>
                <View style={styles.profile_badge}>
                    
                </View>
            </View>
        </ScreenLayout>
    )
}

export default HomeScreen