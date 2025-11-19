import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../../assets/icons/icon_home.svg';
import MessageIcon from '../../assets/icons/icon_message.svg';
import ProfileIcon from '../../assets/icons/icon_profile.svg';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') return <HomeIcon width={size} height={size} color={color} />;
          if (route.name === 'Message') return <MessageIcon width={size} height={size} color={color} />;
          if (route.name === 'Profile') return <ProfileIcon width={size} height={size} color={color} />;
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
