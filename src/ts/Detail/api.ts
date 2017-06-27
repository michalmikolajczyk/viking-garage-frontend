import API from '../API';

export function get(id) {
  return fetch(`${API.offer}/${id}`, {
    method: 'GET',
  })
  .then(res => res.json());
}
