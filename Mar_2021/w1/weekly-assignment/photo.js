'use strict';

const photoList = document.getElementById('photolist');

fetch('https://jsonplaceholder.typicode.com/photos/')
.then((res) => {
  if(res.status !== 200) {
    console.log(`Something went wrong. Status code: ${res.status}`);
  }

  res.json().then((data) => {
    data.forEach((pic) => {
      const thumbnail = pic.thumbnailUrl;
      const title = pic.title;
      const link = pic.url;
      const picHTML = `
        <a href="${link}" class="loaded" target="_blank" rel="noopener noreferrer">
          <img src="${thumbnail}"></img>
          <span>${title}</span>
        </a>
      `;
      photoList.insertAdjacentHTML("beforeend", picHTML);
    })
  });
})
.catch((err) => {
  console.log(`Error detected. ${err}`);
});