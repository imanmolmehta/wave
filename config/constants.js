import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  app_background: ['#212738', '#130238', '#150738'],
  font: '#ffffff',
  primary: '#212738',
  secondary: '#0E1118',
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  fonts_primary_color: '#181C28',
  fonts_secondary_color: 'rgba(5, 5, 5, 0.5)',
  overlay_menu_bg: '#0E1118',
  overlay_bg: ['#212738', '#130238', '#150738'],
  transparent: 'transparent',
  transparentBlack1: "rgba(0, 0, 0, 0.1)",
  transparentBlack7: "rgba(0, 0, 0, 0.7)"
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height
};

export const FONTS = {
  largeTitle: { fontFamily: "Montserrat-Bold", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Montserrat-Bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Montserrat-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Montserrat-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Montserrat-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Montserrat-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: "Montserrat-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;