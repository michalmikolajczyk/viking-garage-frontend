import API from '../API';

export function get(id) {
  return window['fetch'](`${API.offer}/${id}`, {
    method: 'GET',
  })
  .then(res => res.json());
}

export function ride(data) {
  return window['fetch'](`${API.ride}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}
