import API from '../API'

const signin = (data) => (
  fetch(API.signin, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
)

export {
  signin,
}
