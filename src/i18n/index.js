const translations = {
  en: {
    myLocation: 'My Location',
    welcome: 'Welcome to WasteTrack .',
    typeOfWaste: 'Type of waste',
    messages: 'Messages',
    profile: 'Profile',
  },
  ar: {
    myLocation: 'موقعي',
    welcome: 'مر وتصنيف النفايات بسهولة.',
    typeOfWaste: 'نوع النفايات',
    messages: 'الرسائل',
    profile: 'الملف الشخصي',
  },
};

export function t(lang, key) {
  return translations[lang] && translations[lang][key] ? translations[lang][key] : translations.en[key] || key;
}
