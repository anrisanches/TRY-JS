import axios from 'axios';

// const fetchTry = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json)).catch((error)=>console.error(error));

const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUsers(users))
    .catch(error => console.log(error));
});

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users?_limit=3&_sort=name').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markup = users
    .map(user => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);
}

const query = (axios.defaults.headers.common['x-api-key'] =
  'live_bVC5FJ4Y8Pxdq1VOrPB1mrtsVkWhcCL1K5PbgVE8LQlMBtZMmLH3XjkiUWn4yN18');

function fetchMethod() {
  return fetch(`https://api.thecatapi.com/v1/images/search?${query}`).then(resp => {return resp});
}

fetchMethod().then(r => console.log(r)).catch(console.log);

// fetch(`https://api.thecatapi.com/v1/images/search?${query}`).then(res => res).then(r=>console.log(r)).catch(console.log)