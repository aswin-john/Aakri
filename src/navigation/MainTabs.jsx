import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { t } from '../i18n';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../../assets/icons/icon_home.svg';
import MessageIcon from '../../assets/icons/icon_message.svg';
import ProfileIcon from '../../assets/icons/icon_profile.svg';
import typography from '../theme/typography';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const rtl = useSelector((s) => s.language.rtl);
  const lang = useSelector((s) => s.language.lang);

  // Render tab screens in normal or reversed order to simulate RTL ordering
  const screens = rtl
    ? [
        { name: 'Profile', component: ProfileScreen, Icon: ProfileIcon, labelKey: 'profile' },
        { name: 'Message', component: MessageScreen, Icon: MessageIcon, labelKey: 'messages' },
        { name: 'Home', component: HomeScreen, Icon: HomeIcon, labelKey: 'home' },
      ]
    : [
        { name: 'Home', component: HomeScreen, Icon: HomeIcon, labelKey: 'home' },
        { name: 'Message', component: MessageScreen, Icon: MessageIcon, labelKey: 'messages' },
        { name: 'Profile', component: ProfileScreen, Icon: ProfileIcon, labelKey: 'profile' },
      ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        const scr = screens.find((s) => s.name === route.name);
        return ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            if (!scr) return null;
            const Icon = scr.Icon;
            return <Icon width={size} height={size} fill={color} />;
          },
          tabBarLabel: scr ? t(lang, scr.labelKey) : route.name,
          tabBarLabelStyle: {
            ...typography.poppinsRegular8White,
            textAlign: 'center',
          },
          tabBarStyle: {
            backgroundColor: '#000000', // Black background
          },
        });
      }}
    >
      {screens.map((s) => (
        <Tab.Screen key={s.name} name={s.name} component={s.component} />
      ))}
    </Tab.Navigator>
  );
}
