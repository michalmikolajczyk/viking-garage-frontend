import API from '../API'

const login = (data) => (
  fetch(API.login, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
)

const test = () => (
  fetch(API.auth_test, {
    credentials: 'include'
  })
  .then(res => res.json())
)

export {
  login,
  test,
}
