import * as _ from 'lodash';
import * as fx from 'money';
import currency from '../i18n/currency';
import i18n from '../i18n';
const c = currency;
const i = i18n;
const accounting = require('accounting');

const subtypes = [
  // 'dual-sport',
  // 'groupon®',
  // 'off-road',
];

export function isHourlySubtype(offer): boolean {
  if (!offer) return false;
  return _.includes(subtypes, offer.subtype);
}

export function renderUnit(offer): string {
  if (!offer) return '';
  const unit = isHourlySubtype(offer) ? 'hour' : 'day';
  const price = _.get(offer, 'price', 0);
  const format = { symbol: c(),  format: '%v %s', precision: 0 };
  const finalValue = accounting.formatMoney(fx(price).to(c()), format);
  return `${finalValue} / ${i(unit)}`;
}

export function countTotal(offer, range: number): string {
  if (!_.has(offer, 'subtype')) return '';
  const total = _.get(offer, 'price', 0) * range;
  const format = { symbol: c(),  format: '%v %s', precision: 0 };
  const finalValue = accounting.formatMoney(fx(total).to(c()), format);
  return `${finalValue}`;
}
