import API from '../API';
import * as moment from 'moment';

export function get(state) {
  const location = state.location ? `lat=${state.location.lat}&lng=${state.location.lng}` : '';
  const distance = state.distance ? `&dist=${state.distance * 1000}` : '';
  const offset = `&offset=${state.offset}`;
  const type = state.type ? `&type=${state.type.val.toLowerCase()}` : '';
  const date = state.date ? `&start=${moment(state.date.start).unix()}&end=${moment(state.date.end).unix()}` : '';
  const req = `${API.offer}?${location}${distance}${offset}${type}${date}`;

  return fetch(req, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json());
}
