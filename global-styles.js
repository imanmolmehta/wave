import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from './config/constants';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    screens: {
        flex: 1,
        padding: 24
    },
    header: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontFamily: 'montserrat-bold',
        fontSize: SIZES.h2,
        color: COLORS.font
    },
    profile_badge: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginBottom: 10
    }
});

export default styles;