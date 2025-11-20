const translations = {
  en: {
    myLocation: 'Ernakulam',
    welcome: 'Welcome to WasteTrack .',
    yourContribution: 'Your Contribution',
    earnedCoin: 'Earned coin',
    kg: 'kg',
    messages: 'Messages',
    profile: 'Profile',
    splashWelcome: 'Welcome',
    splashTrackWastes: 'Track Wastes',
    splashHelpThePlanet: 'Help the Planet',
    hazardousWaste: 'Hazardous waste',
    rvsf: 'RVSF',
    scrap: 'Scrap',
    marketplace: 'Marketplace',
    typeOfWaste: 'Type of waste',
    footerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere porttitor',
    home: 'Home',
  },
 ar: {
  myLocation: 'موقعي',
  welcome: 'مرحبًا بك في WasteTrack',
  yourContribution: 'مساهمتك',
  earnedCoin: 'العملة المكتسبة',
  kg: 'كجم',
  messages: 'الرسائل',
  profile: 'الملف الشخصي',
  splashWelcome: 'مرحبًا',
  splashTrackWastes: 'تتبع النفايات',
  splashHelpThePlanet: 'ساعد الكوكب',
  hazardousWaste: 'نفايات خطرة',
  rvsf: 'RVSF',
  scrap: 'خردة',
  marketplace: 'السوق',
  typeOfWaste: 'نوع النفايات',
  footerText: 'لوريم ايبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إليت. نولا بوسوير بورتيتور',
  home: 'الرئيسية',
}

};

export function t(lang, key) {
  return translations[lang] && translations[lang][key] ? translations[lang][key] : translations.en[key] || key;
}
