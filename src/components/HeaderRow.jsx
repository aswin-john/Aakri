import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HomeIcon from '../../assets/icons/icon_home.svg';
import LanguageIcon from '../../assets/icons/icon_language.svg';
import MoreIcon from '../../assets/icons/icon_more.svg';
import { toggleLanguage } from '../store/languageSlice';
import { t } from '../i18n';
import typography from '../theme/typography';
import colors from '../theme/colors';

export default function HeaderRow() {
  const rtl = useSelector((s) => s.language.rtl);
  const lang = useSelector((s) => s.language.lang);
  const dispatch = useDispatch();

  return (
    <View style={[styles.headerRow, rtl ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }]}>
      <View style={{ flexDirection: 'column' }}>
        <View style={[styles.leftRow, rtl ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }]}>
          <HomeIcon width={22} height={22} fill="#000" />
          <Text style={[typography.poppinsMedium14Black2, rtl ? { textAlign: 'right' } : {}]}> {t(lang, 'myLocation')}</Text>
        </View>

        <View style={styles.subTextWrap}>
          <Text style={typography.poppinsLight10Grey1}>{t(lang, 'welcome')}</Text>
        </View>
      </View>

      <View style={[styles.rightRow, rtl ? { flexDirection: 'row-reverse' } : {}]}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => dispatch(toggleLanguage())}
        >
          <LanguageIcon width={20} height={20} fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <MoreIcon width={20} height={20} fill="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    marginTop: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  rightRow: { flexDirection: 'row', alignItems: 'center', gap: 10, alignSelf: 'flex-end' },
  iconBtn: { padding: 6 },
  subTextWrap: { marginTop: 0 },
});
