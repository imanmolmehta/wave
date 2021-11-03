import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from './config/constants';
import { Platform } from 'react-native';

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
    profile_badge: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: { ...COLORS.boxShadowIos},
            android: { ...COLORS.boxShadowAndroid}
        }),
    }
});

export default styles;