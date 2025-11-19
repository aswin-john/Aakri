import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store/store';

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </GestureHandlerRootView>
    </Provider>
  );
}
