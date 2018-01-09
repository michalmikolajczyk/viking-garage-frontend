import API from '../API';

export function addPost(data) {
  return fetch(`${API.blog}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export function getBySlug(slug) {
  return fetch(`${API.blog}/${slug}`, {
    method: 'GET',
  })
  .then(res => res.json());
}

export function getPosts(id) {
  return fetch(`${API.offer}/`, {
    method: 'GET',
  })
  .then(res => res.json());
}

export function editPost(id) {
  return fetch(`${API.offer}/${id}`, {
    method: 'PUT',
  })
  .then(res => res.json());
}

export function deletePost(id) {
  return fetch(`${API.offer}/${id}`, {
    method: 'GET',
  })
  .then(res => res.json());
}


