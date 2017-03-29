import pl from './pl';
import * as moment from 'moment';

const langCode = (navigator.language || navigator['userLanguage']).substr(0, 2);
moment.locale('pl');
const TRANSLATIONS = {
  pl,
};

export default function translate(s) {
  return pl[s] || 'NO TRANSLATION!!!';
  // const trans = TRANSLATIONS[langCode];
  // if (trans && s in trans) return trans[s];
  // return s;
};
