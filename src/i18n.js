import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './data/en.json';
import esTranslation from './data/es.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Set the default language here
  fallbackLng: 'es', // Fallback language in case translation is missing for the current language
  interpolation: {
    escapeValue: false, // Allow variables in translations
  },
});

export default i18n;