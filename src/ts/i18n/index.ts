import pl from './pl';
import * as moment from 'moment';
import * as fx from 'money';

const langCode = typeof navigator !== 'undefined' ? (navigator.language || navigator['userLanguage']).substr(0, 2) : 'en';
moment.locale(langCode);
const TRANSLATIONS = {
  pl,
};

export default function translate(s?: string) {
  if (typeof s === 'undefined') return langCode;
  const trans = TRANSLATIONS[langCode];
  if (trans && s in trans) return trans[s];
  return s;
};

fx.rates = {
  'PLN': 1,
  'USD': 0.27,
};
