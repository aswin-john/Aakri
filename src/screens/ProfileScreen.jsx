import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { t } from '../i18n';

export default function ProfileScreen() {
  const lang = useSelector((s) => s.language.lang);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t(lang, 'profile')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  text: { color: '#fff', fontSize: 18 },
});
