import React from 'react';
import { View, Text, StyleSheet, FlatList ,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TypeOfWasteCard from '../components/TypeOfWasteCard';
import Banner from '../../assets/images/home_banner.svg';
import HazardousIcon from '../../assets/images/waste_hazardous.svg';
import RvsfIcon from '../../assets/images/waste_rvsf.svg';
import ScrapIcon from '../../assets/images/waste_scrap.svg';
import MarketplaceIcon from '../../assets/images/waste_marketplace.svg';
import { useSelector } from 'react-redux';
import { t } from '../i18n';
import typography from '../theme/typography';
import colors from '../theme/colors';
import HeaderRow from '../components/HeaderRow';
import ContributionCard from '../components/ContributionCard';

import bannerImage from '../../assets/images/banner.png';

const DATA = [
  { id: '1', titleKey: 'hazardousWaste', Icon: HazardousIcon },
  { id: '2', titleKey: 'rvsf', Icon: RvsfIcon },
  { id: '3', titleKey: 'scrap', Icon: ScrapIcon },
  { id: '4', titleKey: 'marketplace', Icon: MarketplaceIcon },
];

export default function HomeScreen({ navigation }) {
  const rtl = useSelector((s) => s.language.rtl);
  const lang = useSelector((s) => s.language.lang);

  React.useEffect(() => {
    console.log('[redux] language state changed:', { lang, rtl });
  }, [lang, rtl]);

  const renderHeader = () => (
    <>
      <HeaderRow />
      <ContributionCard contribution={'300.00'} unit={t(lang, 'kg')} coins={150} />    
      <Image source={bannerImage} style = {{width:'100%',height:389,resizeMode:'contain'}}/>
    </>
  );

  const renderFooter = () => (
    <View style={styles.footerSection}>
      <View style={[
        styles.expandableHeader,
        rtl ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }
      ]}>
        <Text style={[
  typography.poppinsLight15Grey1,
  rtl ? { textAlign: 'right' } : { textAlign: 'left' },
  { flex: 1, lineHeight: 20 }
]}>
  {t(lang, 'footerText')}
</Text>

        <View style={styles.chevronIcon}>
          <Text style={typography.poppinsLight15Grey1}>⌄</Text>
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
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => (
          <TypeOfWasteCard item={item} onPress={() => navigation.navigate('AddLocation', { item })} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  columnWrapper: { justifyContent: 'space-between', marginTop: 12 },
  sectionTitle: { marginTop: 18, fontSize: 18, fontWeight: '600', color: '#111' },

  footerSection: {
    marginTop: 17,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.hex1,
  },
  expandableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    // gap: 0,
  },
  chevronIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // chevronText: { fontSize: 20, color: colors.grey1 },
});
 
