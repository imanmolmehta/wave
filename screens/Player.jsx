import React, { createRef, forwardRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image, Slider } from 'react-native-elements'
import Header from '../components/Header'
import { COLORS, FONTS } from '../config/constants'
import ScreenLayout from './ScreenLayout'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import PlayerOptions from "../screens/PlayerOptions";
import { Modalize } from 'react-native-modalize'
import { PortalProvider } from '@gorhom/portal'

const Player = () => {
  const modalRef = createRef();

  const Options = React.forwardRef((props, ref) => (
    <PortalProvider>
      <PlayerOptions modalRef={ref} />
    </PortalProvider>
  ))

  const toggleOptions = () => {
    modalRef.current.open();
  }

  return (
    <>
      {/* Options */}
      <Options ref={modalRef} />
      <ScreenLayout>
        {/* Header */}
        <Header
          onPress={toggleOptions}
        />

        {/* Album Info */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 25
          }}
        >
          <Image source={{
            uri: 'https://i.scdn.co/image/ab67616d00001e024ca8d06b996fb365b62d3d9c'
          }}
            style={{
              width: 350,
              height: 350,
              borderRadius: 15
            }}
          />
          <View
            style={{
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                color: COLORS.font,
                ...FONTS.h3,
                fontSize: 20,
                lineHeight: 30
              }}
            >Echoes</Text>
            <Text
              style={{
                color: COLORS.font,
                ...FONTS.body5,
                lineHeight: 15
              }}
            >Tiesto</Text>
          </View>

          {/* Controls */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 20,
              width: '100%'
            }}
          >
            <TouchableOpacity>
              <MaterialIcons name="shuffle" size={24} color={COLORS.font} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="heart" size={24} color={COLORS.font} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="share" size={24} color={COLORS.font} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="arrow-down" size={24} color={COLORS.font} />
            </TouchableOpacity>
          </View>

          {/* Slider */}
          <View
            style={{
              width: '90%',
              marginTop: 20
            }}
          >
            <Slider
              minimumValue={0}
              maximumValue={1}
              thumbStyle={{ height: 10, width: 10, backgroundColor: COLORS.font }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ ...FONTS.body5, lineHeight: 15, color: COLORS.font }}>0:10</Text>
              <Text style={{ ...FONTS.body5, lineHeight: 15, color: COLORS.font }}>2:35</Text>
            </View>
          </View>
          {/* Lyrics */}
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity>
              <MaterialIcons name="expand-less" size={30} color={COLORS.font} />
            </TouchableOpacity>
          </View>
        </View>
      </ScreenLayout>
    </>
  )
}

export default Player

const styles = StyleSheet.create({})
