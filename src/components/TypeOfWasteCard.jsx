import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { t } from '../i18n';
import typography from '../theme/typography';
import colors from '../theme/colors';

export default function TypeOfWasteCard({ item, onPress }) {
  const Icon = item.Icon;
  const lang = useSelector((s) => s.language.lang);
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Text style={typography.poppinsSemiBold23Black2}>{t(lang, item.titleKey || item.title)}</Text>
      {Icon ? <Icon width={80} height={80} /> : <View style={styles.imagePlaceholder} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { 
    width: '48%', backgroundColor: colors.background,  padding: 0, alignItems: 'center',borderWidth:1,borderColor:colors.hex1, 
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 0,
        blurRadius: 10,
        spreadRadius: 0,
        color: colors.grey2,
        inset: true, // Inner shadow
      },
    ],
  },
  imagePlaceholder: { width: 80, height: 80, borderRadius: 8, backgroundColor: '#d8d8d8' },
});
