const url = (() => {
  if (typeof location === 'undefined') return 'https://viking-garage-api-prod.herokuapp.com';
  if (location.hostname.match('localhost')) return 'https://viking-garage-api-dev.herokuapp.com';
  if (location.hostname.match('dev')) return 'https://viking-garage-api-dev.herokuapp.com';
  if (location.hostname.match('staging')) return 'https://viking-garage-api-staging.herokuapp.com';
  if (location.hostname.match('viking-garage-frontend-s-pr')) return 'https://viking-garage-api-staging.herokuapp.com';
  return 'https://viking-garage-api-prod.herokuapp.com';
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

// booking
  ride: `${url}/ride`,

// offer
  offer: `${url}/offer`,

};

export default API;
