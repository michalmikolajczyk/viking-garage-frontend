import * as fx from 'money';
import i from './';

fx.rates = {
  AUD: 0.34,
  IDR: 3700,
  PLN: 1,
  USD: 0.25,
};

export const currencies = ['AUD', 'IDR', 'PLN', 'USD'];

let currCode = (() => {
  if (typeof localStorage !== 'undefined'
    && localStorage.getItem('currencyCode') !== null) return localStorage.getItem('currencyCode');
  if (typeof navigator !== 'undefined') {
    const langCode = (navigator.language || navigator['userLanguage']);
    switch (langCode) {
      case 'pl-PL': return 'PLN';
      case 'en-AU': return 'AUD';
      case 'en-US': return 'USD';
      case 'id-ID': return 'IDR';
      default: return 'AUD';
    }
  }
  return 'AUD';
})();

changeCurrency(currCode);

// it's changing currCode variable that is returned by currency() function in components
export function changeCurrency(code) {
  currCode = code;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('currencyCode', code);
  }
}

export default function currency(): string { return currCode; }
