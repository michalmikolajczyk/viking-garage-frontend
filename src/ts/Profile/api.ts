import API from '../API';

export function get() {
  const token = localStorage.getItem('jwt');
  return window['fetch'](API.user, {
    method: 'GET',
    headers: { Authorization: `JWT ${token}` },
  })
  .then(res => res.json())
}

export function put(data) {
  const token = localStorage.getItem('jwt');
  return window['fetch'](API.user, {
    method: 'PUT',
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
}

