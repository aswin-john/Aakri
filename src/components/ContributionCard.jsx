import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import typography from '../theme/typography';
import colors from '../theme/colors';
import { t } from '../i18n';

export default function ContributionCard({ contribution = '0.00', unit = 'kg', coins = 0 }) {
  const rtl = useSelector((s) => s.language.rtl);
  const lang = useSelector((s) => s.language.lang);

  return (
    <View style={[styles.card, rtl ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }]}>
      <View style={[styles.left, rtl ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }]}>
        <Text style={typography.poppinsSemiBold23White}>
          {contribution} <Text style={typography.poppinsLight16White}>{unit}</Text>
        </Text>
        <Text style={typography.poppinsRegular14Grey1}>{t(lang, 'yourContribution')}</Text>
      </View>

      <View style={styles.coinsSection}>
        <View style={styles.badge}>
          <Text style={styles.coinIcon}>🪙</Text>
          <Text style={typography.poppinsSemiBold20Green1}>{coins}</Text>
        </View>
        <Text style={typography.poppinsMedium12White}>{t(lang, 'earnedCoin')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.black1,
    borderRadius: 20,
    paddingLeft: 26,
    paddingRight: 19,
    paddingTop: 24,
    paddingBottom: 11,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  left: { flex: 1 },
  coinsSection: { alignItems: 'center' },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  coinIcon: { fontSize: 20 },
});
