import i18next from 'i18next';

i18next.init({
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
        escapeValue: false,
    },
    returnEmptyString: true,
    resources: {
        en: { translation: require('./en.json') },
        es: { translation: require('./es.json') },
    },
});

export { i18next };

export const changeLanguage = (language) => {
    localStorage.setItem('language', language);
    i18next.changeLanguage(language);
};