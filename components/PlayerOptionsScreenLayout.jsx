import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { COLORS, SIZES } from '../config/constants'

const PlayerOptionsScreenLayout = ({ children }) => {

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.transparentBlack4,
    height: SIZES.height,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    width: SIZES.width
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.fonts_secondary_color,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: SIZES.height / 2.6,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1024,
    width: SIZES.width
  }
})

export default PlayerOptionsScreenLayout
