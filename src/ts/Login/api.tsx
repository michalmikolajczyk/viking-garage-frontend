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

export function test() {
  return fetch(API.auth_test, {
    credentials: 'include'
  })
  .then(res => res.json())
}
