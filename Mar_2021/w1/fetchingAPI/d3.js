'use strict';

let globalJSON;
const filter = document.getElementById('idFilter');

const idFilter = (array, uid) => {
  const uidNumber = Number(filter.value);
  if(uid && !isNaN(uidNumber)) {
    return array.filter((user) => user.id === uidNumber);
  } else if (uid === "") {
    return array;
  } else {
    return [];
  }
};

const renderJSON = (json) => {
  document.getElementById('user-list').innerHTML = "";
  json.forEach((user) => {
    const name = user.name;
    const userName = user.username;
    const email = user.email;
    const address = `${user.address.suite} ${user.address.street} ${user.address.city} ${user.address.zipcode}`;
    const userHTML = `
    <div class="user-info">
      <div>User name: ${userName}</div>
      <div>Name: ${name}</div>
      <div>Email: ${email}</div>
      <div>Address: ${address}</div>
    </div>
    `;
    document.getElementById('user-list').insertAdjacentHTML('beforeend', userHTML);
  });
};

window.onload = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if(response.status !== 200) {
      console.log(`There was a problem. Status Code: ${response.status}`);
      return;
    }
    response.json().then((json) => {
      globalJSON = json;
      renderJSON(json);  
    });
  })
  .catch(error => {
    console.log("Fetch Error :-$", error);
  });
};

filter.addEventListener('input', () => {
  const filteredJSON = idFilter(globalJSON, filter.value);
  renderJSON(filteredJSON);
});