import API from '../API';

export function signin(data) {
  return fetch(API.signin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export function resend(data) {
  return fetch(API.resend, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}
