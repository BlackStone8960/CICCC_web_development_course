'use strict';

const photoList = document.getElementById('photolist');
const seeMoreBtn = document.getElementById('btnMore');
const loadingImg = document.getElementById('loadingImg');
const selectElement = document.getElementById('loadNum');
let loadNum = selectElement.value; // The number of elements which will be loaded when "See More" button clicked
let dataLength;

// Function to output json formatted information to HTML
const renderJSON = (json, times, currentPosition) => {
  for(let i = 0; i < times; i++) {
    const j = i + currentPosition;
    const thumbnail = json[j].thumbnailUrl;
    const title = json[j].title;
    const link = json[j].url;
    const picHTML = `
      <a href="${link}" class="loaded" target="_blank" rel="noopener noreferrer">
        <img src="${thumbnail}"></img>
        <span>${title}</span>
      </a>
    `;
    photoList.insertAdjacentHTML("beforeend", picHTML);
  }
};

const fetchAPI = () => {
  fetch('https://jsonplaceholder.typicode.com/photos/')
  .then((res) => {
    if(res.status !== 200) {
      console.log(`Something went wrong. Status code: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => { // success
    dataLength = data.length;
    const loadedItemLength = photoList.getElementsByClassName('loaded').length;
    const restLength = dataLength - loadedItemLength;

    if(dataLength !== loadedItemLength) { // If datum to load remain
      if (loadNum < restLength) {
        renderJSON(data, loadNum, loadedItemLength);
      } else {
        renderJSON(data, restLength, loadedItemLength);
        seeMoreBtn.remove(); // process ends
      } 
    } else { // If there are no datum to load
      return false; // process ends
    }
  })
  .catch((err) => {
    console.log(`Error detected. ${err}`);
  })
  .finally(() => { // This method is executed regardless of whether the process successes or fails.
    loadingImg.classList.add('hide'); // Hide loading animation
  });
};

fetchAPI();

seeMoreBtn.addEventListener('click', () => {
  loadingImg.classList.remove("hide"); // Make loading animation appears
  fetchAPI();
});

selectElement.addEventListener('change', () => {
  loadNum = selectElement.value !== "all" ? selectElement.value : dataLength;
});