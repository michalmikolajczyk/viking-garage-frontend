import API from '../API';

export function ride(data) {
  return window['fetch'](`${API.ride}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}
