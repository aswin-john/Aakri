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
import typography from '../theme/typography';
import colors from '../theme/colors';

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
      <View style={[styles.headerRow, rtl ? { flexDirection: 'row-reverse' } : {flexDirection: 'row'}]}>
        <View style={{ flexDirection: 'column' }}>
          <View style={[styles.leftRow, rtl ? { flexDirection: 'row-reverse' } : {flexDirection: 'row'}]}> 
            <HomeIcon width={22} height={22} fill="#000" />
            <Text style={[
                // styles.locationText, 
                typography.poppinsMedium14Black2,

                rtl ? { textAlign: 'right' } : {}]}>  {t(lang, 'myLocation')}</Text>
          </View>

          <View style={styles.subTextWrap}>
            <Text style={[typography.poppinsLight10Grey1, rtl ? {  } : {}]}>{t(lang, 'welcome')}</Text>
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

     
{/* Contribution Card - Replace Banner */}
<View style={[
  styles.contributionCard,
  rtl ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }
]}>
  <View style={[
    styles.leftSection,
    rtl ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }
  ]}>
    <Text style={typography.poppinsSemiBold23White}>
      300.00 <Text style={typography.poppinsLight16White}>kg</Text>
    </Text>
    <Text style={typography.poppinsRegular14Grey1}>
      {rtl ? 'مساهمتك' : 'Your Contribution'}
    </Text>
  </View>

  <View style={styles.coinsSection}>
    <View style={styles.coinBadge}>
      <Text style={styles.coinIcon}>🪙</Text>
      <Text style={typography.poppinsSemiBold20Green1}>150</Text>
    </View>
    <Text style={typography.poppinsMedium12White}>
      {rtl ? 'العملة المكتسبة' : 'Earned coin'}
    </Text>
  </View>
</View>

      <Banner width={'100%'} height={389} />

      
    </>
  );

  // Add this component before the return statement
const renderFooter = () => (
  <View style={styles.footerSection}>
    <View style={[
      styles.expandableHeader,
      rtl ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }
    ]}>
      <Text style={[
        typography.poppinsLight14Grey1,
        rtl ? { textAlign: 'right' } : { textAlign: 'left' },
        { flex: 1 }
      ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere porttitor
      </Text>
      <View style={styles.chevronIcon}>
        <Text style={styles.chevronText}>⌄</Text>
      </View>
    </View>
  </View>
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
        ListFooterComponent={renderFooter} // Add this line
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

  contributionCard: {
  backgroundColor: colors.black1,
  borderRadius: 20,
  paddingLeft: 26,
  paddingRight: 19,
  paddingTop:24,
  paddingBottom:11,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 20,
 
},
leftSection: {
  flex: 1,
},

unit: {
  fontSize: 18,
  fontWeight: '400',
  color: '#999',
},
contributionLabel: {
  fontSize: 14,
  color: '#999',
  marginTop: 4,
},
coinsSection: {
  alignItems: 'center',
},
coinBadge: {
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderRadius: 20,
  paddingVertical: 6,
  paddingHorizontal: 12,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6,
},
coinIcon: {
  fontSize: 20,
},
coinCount: {
  fontSize: 18,
  fontWeight: '700',
  color: '#4CAF50',
},
earnedLabel: {
  fontSize: 12,
  color: '#999',
  marginTop: 6,
},




// Add these styles to your StyleSheet
footerSection: {
  marginTop: 24,
  backgroundColor: '#fff',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#E5E5E5',
},
expandableHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 16,
  gap: 12,
},
chevronIcon: {
  width: 24,
  height: 24,
  alignItems: 'center',
  justifyContent: 'center',
},
chevronText: {
  fontSize: 20,
  color: colors.grey1,
},

});
