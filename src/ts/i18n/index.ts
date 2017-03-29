import moment from 'moment';
import pl from './pl';

const langCode = (navigator.language || navigator['userLanguage']).substr(0, 2);
moment.locale(langCode);

const TRANSLATIONS = {
  pl,
};

function translate(s) {
  const trans = TRANSLATIONS[langCode];
  if (trans && s in trans) return trans[s];
  return s;
};

export default translate;
