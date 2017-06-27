const url = (() => {
  if (location.hostname.match('dev')) return 'https://viking-garage-api-dev.herokuapp.com';
  if (location.hostname.match('vikinggarage.com')) return 'https://viking-garage-api-production.herokuapp.com';
  return 'https://viking-garage-api-staging.herokuapp.com';
})();

const API = {

// login
  change: `${url}/user/change`,
  check: `${url}/user/check`,
  login: `${url}/user/login`,
  logout: `${url}/user/logout`,
  user: `${url}/user`,

// signin
  resend: `${url}/user/resend`,
  reset: `${url}/user/reset`,
  signin: `${url}/user/signin`,
  verify: `${url}/user/verify`,

// contact
  contact: `${url}/contact`,

// offer
  offer: `${url}/offer`,

};

export default API;
