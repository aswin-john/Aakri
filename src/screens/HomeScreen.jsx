import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TypeOfWasteCard from '../components/TypeOfWasteCard';

const DATA = [
  { id: '1', title: 'Hazardous waste' },
  { id: '2', title: 'RVSF' },
  { id: '3', title: 'Scrap' },
  { id: '4', title: 'Marketplace' },
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

      <View style={styles.bannerPlaceholder} />

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
  bannerPlaceholder: { marginTop: 16, height: 289, width: '100%', backgroundColor: '#e0e0e0', borderRadius: 8 },
  sectionTitle: { marginTop: 18, fontSize: 18, fontWeight: '600', color: '#111' },
  columnWrapper: { justifyContent: 'space-between', marginTop: 12 },
});
