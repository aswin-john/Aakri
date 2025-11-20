import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en', // default to Arabic
  rtl: false,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action) {
      const lang = action.payload;
      state.lang = lang;
      state.rtl = lang === 'ar';
    },
    toggleLanguage(state) {
      state.lang = state.lang === 'en' ? 'ar' : 'en';
      state.rtl = state.lang === 'ar';
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
