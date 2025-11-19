import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeIcon from '../../assets/icons/icon_home.svg';
import LanguageIcon from '../../assets/icons/icon_language.svg';
import MoreIcon from '../../assets/icons/icon_more.svg';
import TypeOfWasteCard from '../components/TypeOfWasteCard';
import Banner from '../../assets/images/home_banner.svg';
import HazardousIcon from '../../assets/images/waste_hazardous.svg';
import RvsfIcon from '../../assets/images/waste_rvsf.svg';
import ScrapIcon from '../../assets/images/waste_scrap.svg';
import MarketplaceIcon from '../../assets/images/waste_marketplace.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../store/languageSlice';
import { t } from '../i18n';

const DATA = [
  { id: '1', title: 'Hazardous waste', Icon: HazardousIcon },
  { id: '2', title: 'RVSF', Icon: RvsfIcon },
  { id: '3', title: 'Scrap', Icon: ScrapIcon },
  { id: '4', title: 'Marketplace', Icon: MarketplaceIcon },
];

export default function HomeScreen() {
  const rtl = useSelector((s) => s.language.rtl);
  const lang = useSelector((s) => s.language.lang);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('[redux] language state changed:', { lang, rtl });
  }, [lang, rtl]);

  const renderHeader = () => (
    <>
      <View style={[styles.headerRow, rtl ? { flexDirection: 'row' } : {flexDirection: 'row'}]}>
        <View style={{ flexDirection: 'column' }}>
          <View style={[styles.leftRow, {}]}> 
            <HomeIcon width={22} height={22} fill="#000" />
            <Text style={[styles.locationText, rtl ? { textAlign: 'right' } : {}]}>  {t(lang, 'myLocation')}</Text>
          </View>

          <View style={styles.subTextWrap}>
            <Text style={[styles.subText, rtl ? { textAlign: 'right' } : {}]}>{t(lang, 'welcome')}</Text>
          </View>
        </View>

        <View style={[styles.rightRow, rtl ? { flexDirection: 'row-reverse' } : {}]}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => {
              // toggle language globally
              dispatch(toggleLanguage());
            }}
          >
            <LanguageIcon width={20} height={20} fill="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <MoreIcon width={20} height={20} fill="#000" />
          </TouchableOpacity>
        </View>
      </View>

     

      <Banner width={'100%'} height={389} />

      {/* <Text style={styles.sectionTitle}>Type of waste</Text> */}
    </>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => <TypeOfWasteCard item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  headerRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth:1,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationText: { fontSize: 16, color: '#000' },
  rightRow: { flexDirection: 'row', alignItems: 'center', gap: 10,alignSelf:'flex-end'},
  iconBtn: { padding: 6 },
  subTextWrap: { marginTop: 0 },
  subText: { color: '#333', fontSize: 14 },
  sectionTitle: { marginTop: 18, fontSize: 18, fontWeight: '600', color: '#111' },
  columnWrapper: { justifyContent: 'space-between', marginTop: 12 },
});
