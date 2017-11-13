import API from '../API';

export function booking(data) {
  return fetch(`${API.booking}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}
