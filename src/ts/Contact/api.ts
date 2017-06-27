import API from '../API';

export function contact(data) {
  return fetch(`${API.contact}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}
