let currentLang = "en";
const listeners = [];

export const translations = {
  en: {},
  bn: {},
  fr: {},
};

export function setLanguage(lang) {
  if (!translations[lang]) return console.warn(`No translations for ${lang}`);
  currentLang = lang;
  listeners.forEach((l) => l(lang));
}

export function getLanguage() {
  return currentLang;
}

export function t(key) {
  return translations[currentLang][key] || key;
}

export function subscribeLanguageChange(listener) {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index > -1) listeners.splice(index, 1);
  };
}
