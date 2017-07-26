import pl from './pl';
import * as moment from 'moment';
import * as fx from 'money';

export const languages = [
  { code: 'pl', lang: 'Polish' },
  { code: 'en', lang: 'English' },
];

let langCode = (() => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('languageCode') !== null) return localStorage.getItem('languageCode');
  if (typeof navigator !== 'undefined') return (navigator.language || navigator['userLanguage']).substr(0, 2);
  return 'en';
})();

changeLanguage(langCode);

export function changeLanguage(code) {
  langCode = code;
  moment.locale(code);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('languageCode', code);
  }
}

const TRANSLATIONS = {
  pl,
};

export default function i(s?: string) {
  if (typeof s === 'undefined') return langCode;
  const trans = TRANSLATIONS[langCode];
  if (trans && s in trans) return trans[s];
  return s;
};

fx.rates = {
  PLN: 1,
  USD: 0.27,
};
