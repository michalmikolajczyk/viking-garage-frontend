import API from '../API';

export function login(data) {
  return fetch(API.login, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // Don't forget to specify this if you need cookies
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export function reset(data) {
  return fetch(API.reset, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // Don't forget to specify this if you need cookies
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export function change(data) {
  return fetch(API.change, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // Don't forget to specify this if you need cookies
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export function check(token) {
  return fetch(API.check, {
    credentials: 'include', // Don't forget to specify this if you need cookies
  })
  .then(res => res.json());
}
