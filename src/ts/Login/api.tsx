import API from '../API'

export function login(data) {
  return fetch(API.login, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export function reset(data) {
  return fetch(API.reset, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export function change(data) {
  return fetch(API.change, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export function check() {
  return fetch(API.check, {
    credentials: 'include'
  })
  .then(res => res.json())
}
