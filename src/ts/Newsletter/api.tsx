import API from '../API';

export function newsletter(data) {
  return fetch(`${API.newsletter}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}
