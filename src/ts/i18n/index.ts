import * as moment from 'moment';
import pl from './pl';

export const languages = ['pl', 'en'];

let langCode = (() => {
  if (typeof localStorage !== 'undefined'
    && localStorage.getItem('languageCode') !== null) return localStorage.getItem('languageCode');
  if (typeof navigator !== 'undefined') return (navigator.language || navigator['userLanguage']).substr(0, 2);
  return 'en';
})();

changeLanguage(langCode);

// it's changing langCode variable that is used for translations in components
export function changeLanguage(code) {
  langCode = code;
  moment.locale(code);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('languageCode', code);
  }
}

const TRANSLATIONS = { pl };

export default function i(s?: string) {
  if (typeof s === 'undefined') return langCode;
  const trans = TRANSLATIONS[langCode];
  if (trans && s in trans) return trans[s];
  return s;
};

