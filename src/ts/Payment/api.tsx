import API from '../API';

export function payment(data) {
  return fetch(`${API.payment}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}
