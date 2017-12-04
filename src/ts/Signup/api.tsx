import API from '../API';

export function signup(data) {
  return fetch(API.signup, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include', // Don't forget to specify this if you need cookies
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
    credentials: 'include', // Don't forget to specify this if you need cookies
  })
  .then(res => res.json());
}

export function verify(data) {
  return fetch(API.verify, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include', // Don't forget to specify this if you need cookies
  })
  .then(res => res.json());
}
