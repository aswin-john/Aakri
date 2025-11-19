import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import typography from '../theme/typography';
import colors from '../theme/colors';

export default function TypeOfWasteCard({ item }) {
  const Icon = item.Icon;
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      {Icon ? <Icon width={80} height={80} /> : <View style={styles.imagePlaceholder} />}
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: '48%', backgroundColor: colors.background, borderRadius: 8, padding: 12, alignItems: 'center', elevation: 2 },
  imagePlaceholder: { width: 80, height: 80, borderRadius: 8, backgroundColor: '#d8d8d8' },
  title: { marginTop: 8, textAlign: 'center', color: colors.text, ...typography.body },
});
