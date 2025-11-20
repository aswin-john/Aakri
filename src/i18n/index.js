const translations = {
  en: {
    myLocation: 'Ernakulam',
    welcome: 'Welcome to WasteTrack .',
    typeOfWaste: 'Type of waste',
    messages: 'Messages',
    profile: 'Profile',
  },
 ar: {
  myLocation: 'موقعي', 
  welcome: 'مرحبًا بك في WasteTrack', 
  typeOfWaste: 'نوع النفايات',
  messages: 'الرسائل', 
  profile: 'الملف الشخصي', 
}

};

export function t(lang, key) {
  return translations[lang] && translations[lang][key] ? translations[lang][key] : translations.en[key] || key;
}
