import * as fx from 'money';
import i from './';

fx.rates = {
  PLN: 1,
  USD: 0.27,
};

export const currencies = ['PLN', 'USD'];

let currCode = (() => {
  if (typeof localStorage !== 'undefined'
    && localStorage.getItem('currencyCode') !== null) return localStorage.getItem('currencyCode');
  if (typeof navigator !== 'undefined') {
    const langCode = (navigator.language || navigator['userLanguage']).substr(0, 2);
    switch (langCode) {
      case 'pl': return 'PLN';
      case 'en': return 'USD';
      default: return 'USD';
    }
  }
  return 'USD';
})();

changeCurrency(currCode);

// it's changing currCode variable that is returned by c() function in components
export function changeCurrency(code) {
  currCode = code;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('currencyCode', code);
  }
}

export default function c(): string { return currCode; }
