import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../../assets/icons/icon_home.svg';
import MessageIcon from '../../assets/icons/icon_message.svg';
import ProfileIcon from '../../assets/icons/icon_profile.svg';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const rtl = useSelector((s) => s.language.rtl);

  // Render tab screens in normal or reversed order to simulate RTL ordering
  const screens = rtl
    ? [
        { name: 'Profile', component: ProfileScreen, Icon: ProfileIcon },
        { name: 'Message', component: MessageScreen, Icon: MessageIcon },
        { name: 'Home', component: HomeScreen, Icon: HomeIcon },
      ]
    : [
        { name: 'Home', component: HomeScreen, Icon: HomeIcon },
        { name: 'Message', component: MessageScreen, Icon: MessageIcon },
        { name: 'Profile', component: ProfileScreen, Icon: ProfileIcon },
      ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const scr = screens.find((s) => s.name === route.name);
          if (!scr) return null;
          const Icon = scr.Icon;
          return <Icon width={size} height={size} fill={color} />;
        },
        tabBarLabelStyle: { textAlign: 'center' },
      })}
    >
      {screens.map((s) => (
        <Tab.Screen key={s.name} name={s.name} component={s.component} />
      ))}
    </Tab.Navigator>
  );
}
