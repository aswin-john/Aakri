import colors from './colors';

/*
  Typography tokens using Poppins font family names.
  NOTE: You must add the matching .ttf files to `assets/fonts/` and link them.
  Each font file name should be assigned appropriately in fontFamily.
  Example mapping:
    Poppins-Regular.ttf     => fontFamily: 'Poppins-Regular'
    Poppins-Medium.ttf      => fontFamily: 'Poppins-Medium'
    Poppins-SemiBold.ttf    => fontFamily: 'Poppins-SemiBold'
    Poppins-Bold.ttf        => fontFamily: 'Poppins-Bold'
    Poppins-Italic.ttf      => fontFamily: 'Poppins-Italic'
    ...etc.
*/

const fontFamily = {
  black: 'Poppins-Black',
  blackItalic: 'Poppins-BlackItalic',
  bold: 'Poppins-Bold',
  boldItalic: 'Poppins-BoldItalic',
  extraBold: 'Poppins-ExtraBold',
  extraBoldItalic: 'Poppins-ExtraBoldItalic',
  extraLight: 'Poppins-ExtraLight',
  extraLightItalic: 'Poppins-ExtraLightItalic',
  italic: 'Poppins-Italic',
  light: 'Poppins-Light',
  lightItalic: 'Poppins-LightItalic',
  medium: 'Poppins-Medium',
  mediumItalic: 'Poppins-MediumItalic',
  regular: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
  semiBoldItalic: 'Poppins-SemiBoldItalic',
  thin: 'Poppins-Thin',
  thinItalic: 'Poppins-ThinItalic'
};

const typography = {
  fontFamily,
  h1: { fontSize: 28, color: colors.text, fontFamily: fontFamily.bold },
  h2: { fontSize: 22, color: colors.text, fontFamily: fontFamily.semiBold },
  h3: { fontSize: 18, color: colors.text, fontFamily: fontFamily.medium },
  body: { fontSize: 14, color: colors.text, fontFamily: fontFamily.regular },
  caption: { fontSize: 12, color: colors.muted, fontFamily: fontFamily.regular },
  button: { fontSize: 16, color: colors.background, fontFamily: fontFamily.semiBold },
  
 
  boldItalic: { fontSize: 14, color: colors.text, fontFamily: fontFamily.boldItalic },
  mediumItalic: { fontSize: 14, color: colors.text, fontFamily: fontFamily.mediumItalic },
  lightItalic: { fontSize: 14, color: colors.text, fontFamily: fontFamily.lightItalic },
  extraBold: { fontSize: 14, color: colors.text, fontFamily: fontFamily.extraBold },
  thin: { fontSize: 14, color: colors.text, fontFamily: fontFamily.thin },

  poppinsMedium14Black2: {fontSize: 14, color: colors.black2, fontFamily: fontFamily.medium},
  poppinsLight10Grey1: {fontSize: 10, color: colors.grey1, fontFamily: fontFamily.light},
  poppinsSemiBold23Black2: {fontSize: 23, color: colors.black2, fontFamily: fontFamily.semiBold},

  poppinsMedium12White: {fontSize: 12, color: colors.background, fontFamily: fontFamily.medium},


  poppinsRegular8White: {fontSize: 8, color: colors.background, fontFamily: fontFamily.regular},
  poppinsSemiBold23White: {fontSize: 23, color: colors.background, fontFamily: fontFamily.semiBold},
  poppinsLight16White: {fontSize: 16, color: colors.background, fontFamily: fontFamily.light},

  poppinsRegular14Grey1: {fontSize: 14, color: colors.grey1, fontFamily: fontFamily.regular},


  poppinsSemiBold20Green1: {fontSize: 20, color: colors.green1, fontFamily: fontFamily.semiBold},
};

export default typography;
