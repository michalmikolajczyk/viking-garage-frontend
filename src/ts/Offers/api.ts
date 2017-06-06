import API from '../API';

export function get(state) {
  const location = state.location ? `lat=${state.location.lat}&lng=${state.location.lng}` : '';
  const distance = state.distance ? `&dist=${state.distance * 1000}` : '';
  const type = state.type ? `&type=${state.type}` : '';
  const date = state.date ? `&start=${state.date.start}&end=${state.date.end}` : '';
  const req = `${API.offer}?${location}${distance}${type}${date}`;

  return window['fetch'](req, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json());
}
