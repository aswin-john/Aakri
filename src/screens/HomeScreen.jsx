import React from 'react';
import { View, Text, StyleSheet,  FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView,  } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import TypeOfWasteCard from '../components/TypeOfWasteCard';
import Banner from '../../assets/images/home_banner.svg';
import HazardousIcon from '../../assets/images/waste_hazardous.svg';
import RvsfIcon from '../../assets/images/waste_rvsf.svg';
import ScrapIcon from '../../assets/images/waste_scrap.svg';
import MarketplaceIcon from '../../assets/images/waste_marketplace.svg';

const DATA = [
  { id: '1', title: 'Hazardous waste', Icon: HazardousIcon },
  { id: '2', title: 'RVSF', Icon: RvsfIcon },
  { id: '3', title: 'Scrap', Icon: ScrapIcon },
  { id: '4', title: 'Marketplace', Icon: MarketplaceIcon },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerRow}>
        <View style={styles.leftRow}>
          <Ionicons name="home-outline" size={22} color="black" />
          <Text style={styles.locationText}>  My Location</Text>
        </View>

        <View style={styles.rightRow}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="language-outline" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="ellipsis-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subTextWrap}>
        <Text style={styles.subText}>Welcome to WasteTrack — manage and categorize wastes easily.</Text>
      </View>

      {/* <View style={{ marginTop: 0 ,}}> */}
        <Banner width={'100%'} height={389} />
      {/* </View> */}

      <Text style={styles.sectionTitle}>Type of waste</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => <TypeOfWasteCard item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  headerRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationText: { fontSize: 16, color: '#000' },
  rightRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: { padding: 6 },
  subTextWrap: { marginTop: 8 },
  subText: { color: '#333', fontSize: 14 },
//   bannerPlaceholder: { marginTop: 16, height: 289, width: '100%', backgroundColor: '#e0e0e0', borderRadius: 8 },
  sectionTitle: { marginTop: 18, fontSize: 18, fontWeight: '600', color: '#111' },
  columnWrapper: { justifyContent: 'space-between', marginTop: 12 },
});
