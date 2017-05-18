import API from '../API';

export function get() {
  return window['fetch'](API.user, { method: 'GET' })
  .then(res => res.json());
}

export function put(data) {
  return window['fetch'](API.user, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

