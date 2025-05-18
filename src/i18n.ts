import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const supportedLngs = {
    en: 'English',
    ar: 'العربية',
    bn: 'বাংলা',
    zh: '简体中文',
    fil: 'Filipino',
    fr: 'Français',
    de: 'Deutsch',
    el: 'Ελληνικά',
    hi: 'हिन्दी',
    id: 'Bahasa Indonesia',
    it: 'Italiano',
    ja: '日本語',
    ko: '한국어',
    pl: 'Polski',
    pt: 'Português',
    ru: 'Pусский',
    es: 'Español',
    sw: 'Kiswahili',
    th: 'ภาษาไทย',
    tr: 'Türkçe',
    vi: 'Tiếng Việt',
};

// Define the single namespace you will use. Let's call it 'translation'.
// This will correspond to the filename, e.g., translation.json
const singleNamespace = 'translation';

i18n
    .use(HttpBackend) // Loads translations from /public/locales
    .use(LanguageDetector) // Detects user language
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        supportedLngs: Object.keys(supportedLngs),
        fallbackLng: 'en', // Default language if detection or selected language files are missing
        lng: 'en', // Explicitly set default language if not using LanguageDetector or no language in URL
        ns: [singleNamespace], // Define only one namespace
        defaultNS: singleNamespace, // Set that one namespace as the default
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
        },
        detection: {
            order: ['path', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
            lookupFromPathIndex: 0, // /:lng/... structure
        },
        interpolation: {
            escapeValue: false, // React already safes from xss
        },
        react: {
            useSuspense: true, // Recommended for loading states
        },
    });

export default i18n;