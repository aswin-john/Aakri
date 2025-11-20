import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { t } from '../i18n';
import typography from '../theme/typography';
import colors from '../theme/colors';
import HeaderRow from '../components/HeaderRow';
import ContributionCard from '../components/ContributionCard';

import bannerImage from '../../assets/images/map.png';

export default function AddLocationScreen({ route }) {
  const rtl = useSelector((s) => s.language.rtl);
  const lang = useSelector((s) => s.language.lang);
  const item = route?.params?.item;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <HeaderRow />
        <ContributionCard contribution={'300.00'} unit={t(lang, 'kg')} coins={150} />

        <Image
          source={bannerImage}
          style={styles.banner}
          resizeMode="contain"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  banner: { width: '100%', height: undefined, aspectRatio: 1.6, marginTop: 0 },
  content: { marginTop: 18 },
  placeholderBox: { marginTop: 12, padding: 16, borderWidth: 1, borderColor: colors.hex1, borderRadius: 8 },
});
