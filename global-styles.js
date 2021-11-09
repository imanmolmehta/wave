import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from './config/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    screens: {
        flex: 1,
        padding: 15
    },
    header: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        ...FONTS.h2,
        color: COLORS.font
    },
});

export default styles;