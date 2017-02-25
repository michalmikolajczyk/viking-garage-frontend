let url = 'http://localhost:4000'

const API = {
  login: `${url}/user/login`,
  signin: `${url}/user/signin`,
  verify: `${url}/user/verify`,
  auth_test: `${url})/user/check`,
  resend: `${url}/user/resend`,
  reset: `${url}/user/reset`,
}

export default API
