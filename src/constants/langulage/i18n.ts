import i18n from 'i18next';
import ja from './ja.json';
import en from './en.json';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false,
  },

  react: {
    wait: true,
  },
  resources: resources,
});

export default i18n;
