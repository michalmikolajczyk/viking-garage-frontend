import API from '../API'

export function signin(data) {
  return fetch(API.signin, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export function resend(email: string) {
  return fetch(API.resend, {

  })
  .then(res => res.json())
}
