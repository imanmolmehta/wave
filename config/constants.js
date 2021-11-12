import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  app_background: ['rgba(0, 0, 0, 0.5)', 'rgba(19, 2, 56, 0.5)', 'rgba(19, 2, 56, 0.7)'],
  font: '#ffffff',
  primary: '#212738',
  secondary: '#0E1118',
  boxShadowIos: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 10,
    shadowRadius: 20,
  },
  boxShadowAndroid: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 20,
  },
  fonts_primary_color: '#181C28',
  fonts_secondary_color: 'rgba(5, 5, 5, 0.5)',
  overlay_menu_bg: '#0E1118',
  overlay_bg: ['#212738', '#130238', '#150738'],
  transparent: 'transparent',
  transparentBlack1: "rgba(0, 0, 0, 0.1)",
  transparentBlack2: "rgba(0, 0, 0, 0.2)",
  transparentBlack3: "rgba(0, 0, 0, 0.3)",
  transparentBlack4: "rgba(0, 0, 0, 0.4)",
  transparentBlack5: "rgba(0, 0, 0, 0.5)",
  transparentBlack6: "rgba(0, 0, 0, 0.6)",
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
  height,
};

export const FONTS = {
  largeTitle: { fontFamily: "montserrat-bold", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "montserrat-bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "montserrat-bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "montserrat-semibold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "montserrat-semibold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "montserrat-semibold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: { fontFamily: "montserrat-regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "montserrat-regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "montserrat-regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "montserrat-regular", fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: "montserrat-regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;