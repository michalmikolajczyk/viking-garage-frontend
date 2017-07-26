import pl from './pl';
import * as moment from 'moment';
import * as fx from 'money';

export const languages = [
  { code: 'pl', lang: 'Polish' },
  { code: 'en', lang: 'English' },
];

let langCode = typeof navigator !== 'undefined' ? (navigator.language || navigator['userLanguage']).substr(0, 2) : 'en';
moment.locale(langCode);
const TRANSLATIONS = {
  pl,
};

export function changeLanguage(code) {
  langCode = code;
  moment.locale(code);
}

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
