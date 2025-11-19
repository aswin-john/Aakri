import { StyleSheet } from 'react-native';
import colors from './colors';
import typography from './typography';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },
  center: { alignItems: 'center', justifyContent: 'center' },
  pageTitle: {
    ...typography.h2,
    marginVertical: 8,
  },
  sectionTitle: {
    ...typography.h3,
    marginTop: 16,
  },
  bodyText: {
    ...typography.body,
  },
  caption: {
    ...typography.caption,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default globalStyles;
