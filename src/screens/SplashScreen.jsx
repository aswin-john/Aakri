import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  const slides = [
    { key: 's1', title: 'Welcome', color: '#4f9da6' },
    { key: 's2', title: 'Track Wastes', color: '#7fb77e' },
    { key: 's3', title: 'Help the Planet', color: '#f5a623' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index >= slides.length) {
      navigation.replace('Main');
    }
  }, [index, navigation]);

  const slide = slides[Math.min(index, slides.length - 1)];

  return (
    <View style={[styles.container, { backgroundColor: slide.color }]}> 
      <Text style={styles.title}>{slide.title}</Text>
      <Text style={styles.counter}>{index + 1} / {slides.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  counter: {
    marginTop: 12,
    color: 'rgba(255,255,255,0.9)'
  }
});
