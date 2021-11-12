import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from '../config/constants';
import { Modalize } from 'react-native-modalize';
import { Portal } from '@gorhom/portal';

const listData = [
  { id: 1, title: 'Go to album' },
  { id: 2, title: 'Go to artist' },
  { id: 3, title: 'Add to Playlist' },
  { id: 4, title: 'Download' },
  { id: 5, title: 'Share' },
];

const PlayerOptions = ({ modalRef }) => {

  const height = SIZES.height * 0.5

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )

  const renderList = () => (
    <View style={{
      paddingTop: 25
    }}>
      <FlatList
        key={item => item.id}
        data={listData}
        renderItem={renderItem}
      />
    </View>
  )

  return (
    <Portal>
      <Modalize
        ref={modalRef}
        modalHeight={350}
        closeOnOverlayTap
        modalStyle={styles.container}
        flatListProps={{
          keyExtractor: item => item.id,
          data: listData,
          renderItem
        }}
        withHandle={false}
      >
      </Modalize>
    </Portal>
  )
}

export default PlayerOptions

const styles = StyleSheet.create({
  item: {
    padding: SIZES.padding - 12,
  },
  title: {
    color: COLORS.font,
    ...FONTS.h3,
    fontWeight: 'normal'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.fonts_secondary_color,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 30
  }
});
