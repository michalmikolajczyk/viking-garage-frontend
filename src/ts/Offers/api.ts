import API from '../API';

export function get() {
  return fetch(API.offer, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json());
}
