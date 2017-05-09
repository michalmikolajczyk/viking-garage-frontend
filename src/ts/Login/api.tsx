import API from '../API';

export function login(data) {
  return window['fetch'](API.login, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export function reset(data) {
  return window['fetch'](API.reset, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export function change(data) {
  return window['fetch'](API.change, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export function check(token) {
  return window['fetch'](API.check, {
    headers: { Authorization: `JWT ${token}` },
  })
  .then(res => res.json());
}
