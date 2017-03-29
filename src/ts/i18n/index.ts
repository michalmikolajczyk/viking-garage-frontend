import pl from './pl';

const langCode = (navigator.language || navigator['userLanguage']).substr(0, 2);
const TRANSLATIONS = {
  pl,
};

export default function translate(s) {
  // return pl[s] || 'NO TRANSLATION!!!';
  const trans = TRANSLATIONS[langCode];
  if (trans && s in trans) return trans[s];
  return s;
};
