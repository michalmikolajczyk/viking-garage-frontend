import API from '../API';

export function verify(data) {
  return fetch(API.verify, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}
