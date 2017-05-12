import API from '../API';

export function get() {
  return window['fetch'](API.offer, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json());
}
