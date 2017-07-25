import API from '../API';
import * as _ from 'lodash';
import * as moment from 'moment';
import { IFiltersValue } from '../typings';

export function get(values: IFiltersValue, offset: number) {
  const start = _.has(values, 'date.start') ? `&start=${moment(values.date.start).unix()}` : '';
  const end = _.has(values, 'date.end') ? `&end=${moment(values.date.end).unix()}` : '';
  const type = _.has(values, 'type.val') ? `&type=${values.type.val.toLowerCase()}` : '';
  const distance = values.distance ? `&dist=${values.distance * 1000}` : '';
  const location = _.has(values, 'location.lat') ? `lat=${values.location.lat}&lng=${values.location.lng}` : '';
  const req = `${API.offer}?${location}${distance}&offset=${offset}${type}${start}${end}`;

  return fetch(req, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json());
}
