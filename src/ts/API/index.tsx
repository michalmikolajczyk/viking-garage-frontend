const url = process.env.API_URL || 'https://viking-garage-api-staging.herokuapp.com';

const API = {

// login
  change: `${url}/user/change`,
  check: `${url}/user/check`,
  login: `${url}/user/login`,
  logout: `${url}/user/logout`,
  user: `${url}/user`,

// signup
  resend: `${url}/user/resend`,
  reset: `${url}/user/reset`,
  signup: `${url}/user/signup`,
  verify: `${url}/user/verify`,

// contact
  contact: `${url}/contact`,

// booking
  booking: `${url}/booking`,

// offer
  offer: `${url}/offer`,

};

export default API;
