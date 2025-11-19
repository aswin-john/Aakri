import colors from './colors';

/*
  Typography tokens using Poppins font family names.
  NOTE: You must add the matching .ttf files to `assets/fonts/` and link them.
  Expected font files names (example):
    Poppins-Regular.ttf -> fontFamily: 'Poppins-Regular'
    Poppins-Medium.ttf  -> fontFamily: 'Poppins-Medium'
    Poppins-SemiBold.ttf-> fontFamily: 'Poppins-SemiBold'
    Poppins-Bold.ttf    -> fontFamily: 'Poppins-Bold'
*/

const fontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semibold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
};

const typography = {
  fontFamily,
  h1: { fontSize: 28, color: colors.text, fontFamily: fontFamily.bold },
  h2: { fontSize: 22, color: colors.text, fontFamily: fontFamily.semibold },
  h3: { fontSize: 18, color: colors.text, fontFamily: fontFamily.medium },
  body: { fontSize: 14, color: colors.text, fontFamily: fontFamily.regular },
  caption: { fontSize: 12, color: colors.muted, fontFamily: fontFamily.regular },
  button: { fontSize: 16, color: colors.background, fontFamily: fontFamily.semibold },
};

export default typography;
